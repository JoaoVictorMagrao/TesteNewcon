import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ListItemButton from '@mui/material/ListItemButton';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function DrawerLeft({ title, menu }) {

  const drawerWidth = 240;

  const handleButtonAddTouristSpot = () => {
    if (menu === 'Ir para home') {
      window.location.href = `/Home`;
    } else if (menu === 'Cadastrar Ponto Turístico') {
      window.location.href = `/PontoTuristico`;
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <Divider />
        <List>
          {[menu].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleButtonAddTouristSpot}>
                <ListItemIcon>
                  {index === 0 ? <PersonAddAlt1Icon /> : index === 1 ? <StickyNote2Icon /> : <CloseIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />

      </Box>
    </Box>
  )
}

export default DrawerLeft;