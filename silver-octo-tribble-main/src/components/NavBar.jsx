import { AppBar, Box, Toolbar, IconButton, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon from Material-UI

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, background: '#21005D' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Home Icon Button */}
          <Link to={'/'}>
            <IconButton sx={{ color: '#374957' }}>
              <HomeIcon />
            </IconButton>
          </Link>

          {/* Centered Logo */}
          <Box
            component="img"
            src="https://seeklogo.com/images/L/lulu-mall-thiruvananthapuram-logo-BA3DE67AAC-seeklogo.com.png"
            alt="book"
            sx={{
              height: 50,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Empty Box to balance the flex container */}
          <Box sx={{ width: isMobile ? '40px' : '64px' }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
