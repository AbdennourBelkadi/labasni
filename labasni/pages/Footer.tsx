import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        labasni
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {

  return (
<ThemeProvider theme={darkTheme}>

    <Box  color="text.secondary" 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '40vh',
        backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    
      }}
    >
      <CssBaseline />
      <div style={{marginTop:"20px"}} className="me-5 d-none d-lg-block">
          <span>If you are new here  </span>
          <a href="/Register" className="me-4 text-reset">
            <i >Create an acount</i>
          </a>
        </div>
      <Container 
        component="main"
        sx={{ mt: 2, mb: 0,ml:92 }}
        maxWidth="sm"
      >
        <Typography variant="h4" component="h4" gutterBottom>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
        <Container maxWidth="lg">
           <Grid item xs={4} sm={4}>
           <Grid container spacing={12} >

            <Box mt={9}> 
            <Box style={{borderBottom:'1',marginTop:'25px'}}>
           <Link color="inherit" style={{ textDecoration: 'none' }} href="/Home">Home</Link>
            </Box>
            <Box style={{borderBottom:'1',marginTop:'25px'}}>
           <Link color="inherit"  style={{ textDecoration: 'none' }} href="/Products"  >Products</Link>
            </Box>
             <Box style={{borderBottom:'1',marginTop:'25px'}}>
           <Link color="inherit"  style={{ textDecoration: 'none' }} href="/Aboutus" >About Us</Link>
            </Box>

            </Box>
            <Box mt={9} ml={12}> 
            <Box style={{borderBottom:'1',marginTop:'25px'}}>
           <Link color="inherit" style={{ textDecoration: 'none' }} href="#">Pricing</Link>
            </Box>
            <Box style={{borderBottom:'1',marginTop:'25px'}}>
           <Link color="inherit"  style={{ textDecoration: 'none' }} href="#"  >Settings</Link>
            </Box>
             <Box style={{borderBottom:'1',marginTop:'25px'}}>
           <Link color="inherit"  style={{ textDecoration: 'none' }} href="#" >Orders</Link>
            </Box>

            </Box>
            <Box mt={9} ml={12}> 
            <Box style={{borderBottom:'1',marginTop:'25px'}}>
           <Link color="inherit" style={{ textDecoration: 'none' }} href="#" >contact us</Link>
           <p >+216 25 145 658</p>
           <p >labasni@gmail.com</p>

            </Box>
       

            </Box>
            
            
            </Grid>

                </Grid>
                
                
            
        </Container>
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 1,
          mt: 13,
          mb: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
        
          <Copyright />
        </Container>
      </Box>
    </Box>
    </ThemeProvider>

  );
}
