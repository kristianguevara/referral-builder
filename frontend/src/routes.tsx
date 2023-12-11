import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './components/Home';
import ReferralForm from './components/ReferralForm';
import NotFound from "./components/NotFound";

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
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;