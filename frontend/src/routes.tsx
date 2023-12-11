import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './components/Home';
import ReferralForm from './components/ReferralForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <ReferralForm />,
  },
  {
    path: "/edit/:id",
    element: <ReferralForm />,
  },
]);

export default router;