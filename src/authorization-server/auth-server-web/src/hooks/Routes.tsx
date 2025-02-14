import { createBrowserRouter } from "react-router"
import Home from "../components/Home";

const useAppRoutes = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <Home />
        }
    ]);
}

export { useAppRoutes }