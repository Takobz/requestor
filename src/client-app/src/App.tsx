import { RouterProvider } from 'react-router-dom'
import { Box } from '@mui/material'
import { useAppRoutes } from './hooks/Routes'

const App = () => {
    const routes = useAppRoutes();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <RouterProvider router={routes} />
        </Box>
    );
}

export default App;