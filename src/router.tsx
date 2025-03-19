import { createBrowserRouter } from "react-router-dom";
import VendingMachinePage from "./pages/VendingMachine/VendingMachinePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VendingMachinePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
