import React, { ReactNode } from 'react';
import { AppBar, Box, Container, Grid, IconButton, Link, Menu, MenuItem, styled, Toolbar, Typography, useMediaQuery } from '@mui/material';
import RamenDiningRoundedIcon from '@mui/icons-material/RamenDiningRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { SystemConst } from '../const';

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
                    <IconButton href={SystemConst.Path.HOME}>
                      <RamenDiningRoundedIcon fontSize='large' sx={{ color: '#ffffff' }} />
                    </IconButton>
                    <Typography variant='h6' fontWeight={'bold'}>
                      {SystemConst.PAGE_NAME}
                    </Typography>
                  </Box>
                  <Box textAlign={'center'} sx={{ borderTop: borderSetting }}>
                    <Link href={SystemConst.Path.EVENTS}>
                      <Item>
                        {SystemConst.Page.EVENTS}
                      </Item>
                    </Link>
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
                <IconButton sx={{ mr: 1 }} href={SystemConst.Path.HOME}>
                  <RamenDiningRoundedIcon sx={{ color: '#ffffff' }} />
                </IconButton>
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
              <Link href={SystemConst.Path.EVENTS}>
                <MenuItem sx={{ color: '#ffffff' }}>
                  {SystemConst.Page.EVENTS}
                </MenuItem>
              </Link>
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
