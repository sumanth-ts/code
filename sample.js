import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Paper } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Left side logo */}
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Your Logo
                </Typography>

                {/* Right side icons */}
                <IconButton color="inherit">
                    <FavoriteIcon />
                </IconButton>
                <IconButton color="inherit">
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>
                <IconButton color="inherit">
                    <ExitToAppIcon />
                    Logout
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

const Footer = () => {
    return (
        <Paper elevation={3} style={{ position: 'fixed', bottom: 0, width: '100%', padding: '10px', textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Paper>
    );
};

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container style={{ marginBottom: '60px' }}>{children}</Container>
            <Footer />
        </div>
    );
};

export default Layout;
