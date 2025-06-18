import { Toolbar, Typography, Button, AppBar } from '@mui/material';
export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>My App</Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Dashbord</Button>

            </Toolbar>
        </AppBar>
    );
}