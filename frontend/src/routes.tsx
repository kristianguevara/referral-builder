import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './components/Home';
import CreateReferral from './components/CreateReferral';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateReferral />,
  },
]);

export default router;