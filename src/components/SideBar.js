import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MyAccountIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import DonorIcon from '@mui/icons-material/VerifiedUser';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListItemButton from '@mui/material/ListItemButton';
import '../assets/css/myTailwind.css'


import AddCashier from './crud_cashier/AddCashier'
import DeleteCashier from './crud_cashier/DeleteCashier'
import UpdateCashier from './crud_cashier/UpdateCashier'
import ViewCashier from './crud_cashier/ViewCashier'

import {
  
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawerWidth = 240;


function ResponsiveDrawer(props) {
  // console.log(props.match.path);
  // acount start
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // acount end

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar style={{ backgroundColor: "blue" }} />
      <Divider />

      <Link to={`${props.match.path}/add-cashier`}>
        <ListItemButton>
          <ListItemIcon>
            <DonorIcon />
          </ListItemIcon>
          <ListItemText primary="Add Cashier" />
        </ListItemButton>
      </Link>

      <Link to={`${props.match.path}/delete-cashier`}>
        <ListItemButton>
          <ListItemIcon>
            <DonorIcon />
          </ListItemIcon>
          <ListItemText primary="Delete Cashier" />
        </ListItemButton>
      </Link>


      <Link to={`${props.match.path}/update-cashier`}>
      <ListItemButton>
        <ListItemIcon>
          <DonorIcon />
        </ListItemIcon>
        <ListItemText primary="Update Cashier" />
      </ListItemButton>
      </Link>

      <Link to={`${props.match.path}/view-cashier`}>
      <ListItemButton>
        <ListItemIcon>
          <DonorIcon />
        </ListItemIcon>
        <ListItemText primary="View Cashier" />
      </ListItemButton>
      </Link>


      <Link to="/">
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Link>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style=
        {{ color: 'white', backgroundColor: 'blue' }}

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


          <Typography variant="h6" noWrap component="div" >
            <h1 className='font-extrabold tracking-widest'>POS - Services</h1>
          </Typography>
          <div className="right-2 absolute">

            <React.Fragment>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="My Account">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar style={{ backgroundColor: 'white' }}><MyAccountIcon style={{ color: 'grey', fontSize: '2.3rem' }} /></Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <ManageAccountsIcon fontSize="small" style={{ marginRight: '12px' }} />  Profile
                </MenuItem>



                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <Link to="/">
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
                </Link>
              </Menu>
            </React.Fragment>



          </div>








        </Toolbar>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


        {/* <AddCashier/> */}

        <Switch>
          <Route path={`${props.match.path}/add-cashier`} component={AddCashier} />
          <Route path={`${props.match.path}/delete-cashier`} component={DeleteCashier} />
          <Route path={`${props.match.path}/update-cashier`} exact component={UpdateCashier} />
          <Route exact component={ViewCashier} />
        </Switch>


      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;