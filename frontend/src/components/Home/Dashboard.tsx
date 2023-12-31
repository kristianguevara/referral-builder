import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { CardHeader } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IReferralListData } from '../../interfaces';
import LoadingDashboard from './LoadingDashboard';
import EmptyList from './EmptyList';
import DeleteModal from "./DeleteModal";
import { getReferrals, deleteReferral } from "../../services";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referralList, setReferralList] = useState<IReferralListData[]>([]);
  const [selectedReferal, setSelectedReferal] = useState<IReferralListData | null>(null);
  const { success, error } = toast;

  const handleDeleteConfirmation = async (referral: IReferralListData) => {
    try {
      await deleteReferral(referral.id);
      setReferralList(referralList.filter(rl => rl.id !== referral.id));
      success("Referral successfully deleted.")
    } catch (e) {
      error("Failed to delete referral.")
    }
    
    setIsModalOpen(false);
  };

  const handleDeleteCancel = () => {
    // Handle cancel logic here
    setIsModalOpen(false);
  };

  const deleteReferralClick = (referral: IReferralListData) => {
    setSelectedReferal(referral);
    setIsModalOpen(true);
  }

  useEffect(() => {
    const getReferralList = async () => {
      try {
        const result = await getReferrals();
        const { data } = result;
        if (data.error) {
          error('Failed to fetch List. Kindly reload the page.');
        } else {
          setReferralList(data);
        }
      } catch (e) {
        error('Failed to fetch List. Kindly reload the page.');
      }

      setIsLoading(false);
    }
    getReferralList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer id="home-dashboard" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Referrals table">
        <TableHead>
          <TableRow>
            <TableCell >GIVEN NAME</TableCell>
            <TableCell align="right">SURNAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PHONE</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {referralList.length === 0 && isLoading === true && (<LoadingDashboard />)}
          {referralList.length === 0 && isLoading === false && (<EmptyList />)}
          {referralList.map((referral, idx) => (
            <TableRow
              key={`${idx.toString()}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <CardHeader
                avatar={
                  <Avatar src={referral.avatar} />
                }
                title={referral.given_name}
              />
              </TableCell>
              <TableCell align="right">{referral.surname}</TableCell>
              <TableCell align="right">{referral.email}</TableCell>
              <TableCell align="right">{referral.phone}</TableCell>
              <TableCell align="right">
                <Tooltip title="View / Edit" placement="top">
                  <EditIcon sx={{ mr: "10px", cursor: "pointer" }} onClick={() => navigate(`/edit/${referral.id}`)}/>
                </Tooltip>
                <Tooltip title="Delete" placement="top">
                  <DeleteIcon sx={{ cursor: "pointer" }} onClick={() => deleteReferralClick(referral)} />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedReferal && (
        <DeleteModal
          referral={selectedReferal}
          handleConfirmation={handleDeleteConfirmation}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleCancel={handleDeleteCancel}
        />
      )}
      
    </TableContainer>
  );
}

export default Dashboard;
