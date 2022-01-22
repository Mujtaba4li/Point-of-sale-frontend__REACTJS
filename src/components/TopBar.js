import React from 'react'
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';



export default function TopBar() {
    return (
       <>
       <AppBar style=
      {{color:'white', backgroundColor:'blue'}}

        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ShareCLub
          </Typography>
        </Toolbar>
      </AppBar></>
    )
}
