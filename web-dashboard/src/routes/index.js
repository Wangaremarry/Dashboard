import { useRoutes } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import DashboardHome from '../pages/DashboardHome';
import Sms from '../pages/Sms';
import Users from '../pages/Users';


export default function Router(){
return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'app', element: <DashboardHome /> },
            { path: 'sms', element: <Sms /> },
            { path: 'users', element: <Users /> },
            // { path: '*', element: <Navigate to="/404" /> },
        ],
    }
]);
}
