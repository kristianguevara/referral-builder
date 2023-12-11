import axios from "axios";
import { REFERRAL_API_URL, REFERRALS_API_URL, API_KEY } from "../utils/constants";
import { IReferralData } from '../interfaces';

const headerSettings = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  }
}

export const getReferralById = async (id: string) => {
  return await axios.get(`${REFERRAL_API_URL}/${id}`, headerSettings);
};

export const getReferrals = async () => {
  return await axios.get(REFERRALS_API_URL, headerSettings);
};

export const createReferral = async (formData: IReferralData) => {
  return await axios.post(REFERRAL_API_URL, formData, headerSettings);
};

export const deleteReferral = async (id: number) => {
  return await axios.delete(REFERRAL_API_URL + `/${id}`, headerSettings);
};


export const updateReferral = async (formData: IReferralData) => {
  return await axios.put(REFERRAL_API_URL, formData, headerSettings);
};
