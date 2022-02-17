import React, { ReactNode } from 'react';
import { AppBar, Box, Container, Grid, IconButton, Menu, MenuItem, styled, Toolbar, Typography, useMediaQuery } from '@mui/material';
import RamenDiningRoundedIcon from '@mui/icons-material/RamenDiningRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { SystemConst } from '../const';
import { Link } from 'react-router-dom';

const borderSetting = '1px dotted #ffffff';

const MenuContainer = styled(Box)(({ theme }) => ({
  color: '#ffffff',
  backgroundColor: theme.palette.primary.main,
  height: '100%',
}));

const Item = styled(Box)(({ theme }) => ({
  color: '#ffffff',
  borderBottom: borderSetting,
  padding: theme.spacing(1),
}));

type MenuItem = {
  name: string,
  path: string
};

type MenuItemProps = {
  item: MenuItem;
};

const MenuItemPC: React.FC<MenuItemProps> = (props) => {
  const { item } = props;
  return (
    <Link to={item.path}>
      <Item>
        {item.name}
      </Item>
    </Link>
  );
};

const MenuItemMb: React.FC<MenuItemProps> = (props) => {
  const { item } = props;
  return (
    <Link to={item.path}>
      <MenuItem sx={{ color: '#ffffff' }}>
        {item.name}
      </MenuItem>
    </Link>
  );
};

const MenuItems: MenuItem[] = [
  { name: SystemConst.Page.EVENTS, path: SystemConst.Path.EVENTS },
  { name: SystemConst.Page.DISC, path: SystemConst.Path.DISC },
  { name: SystemConst.Page.SELECT100, path: SystemConst.Path.SELECT100 },
  { name: SystemConst.Page.NOTE, path: SystemConst.Path.NOTE },
];

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const matches = useMediaQuery('(min-width:600px)');

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {
        matches ? (
          <Box sx={{ height: '100vh', maxWidth: '800px', my: 0, mx: 'auto', borderRight: '1px solid', borderRightColor: 'primary.main' }}>
            <Grid container sx={{ height: '100vh' }}>
              <Grid item xs={3} sx={{ height: '100%' }}>
                <MenuContainer>
                  <Box textAlign={'center'} sx={{ p: 4 }}>
                    <Link to={SystemConst.Path.HOME}>
                      <RamenDiningRoundedIcon fontSize='large' sx={{ color: '#ffffff' }} />
                    </Link>
                    <Typography variant='h6' fontWeight={'bold'}>
                      {SystemConst.PAGE_NAME}
                    </Typography>
                  </Box>
                  <Box textAlign={'center'} sx={{ borderTop: borderSetting }}>
                    {
                      MenuItems.map(menuItem => {
                        return <MenuItemPC item={menuItem} key={menuItem.name} />;
                      })
                    }
                  </Box>
                </MenuContainer>
              </Grid>
              <Grid item xs={9} sx={{ maxHeight: '100%', overflow: 'auto' }}>
                <Box sx={{ p: 4 }}>
                  {children}
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <>
            <AppBar>
              <Toolbar>
                <Link to={SystemConst.Path.HOME}>
                  <RamenDiningRoundedIcon sx={{ color: '#ffffff', mr: 1 }} />
                </Link>
                <Typography variant='h6' fontWeight={'bold'} component={'div'} sx={{ flexGrow: 1 }}>
                  {SystemConst.PAGE_NAME}
                </Typography>
                <IconButton onClick={handleClick}>
                  <MenuIcon sx={{ color: '#ffffff' }} />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Toolbar />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{ sx: { bgcolor: 'primary.main' } }}
            >
              {
                MenuItems.map(menuItem => {
                  return <MenuItemMb item={menuItem} key={menuItem.name} />;
                })
              }
            </Menu>
            <Container>
              <Box sx={{ my: 2 }}>
                {children}
              </Box>
            </Container>
          </>
        )
      }
    </>
  );
};

export default Layout;
