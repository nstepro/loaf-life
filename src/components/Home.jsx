import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import homeImg from 'images/nick-head-half.png';

import { Link as RouterLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <Container maxWidth="md">
            <RouterLink to="/projects">
              <Grid container spacing={2} alignItems="center" justifyContent="center" my={{md: 4, xs: 2}}>
                  <Grid item xs={8} sm={6} md={6} lg={4} textAlign="center">
                      <Box><img className="home-image" alt="Nick Stepro" src={homeImg} /></Box>
                  </Grid>
              </Grid>
              <Typography textAlign="center" variant="h1" component="h1" gutterBottom mb={0}>
                  NICK STEPRO
              </Typography>
              <Typography textAlign="center" variant="h4" component="h4" gutterBottom>
                  Look at me.
              </Typography>
              <Typography textAlign="center" variant="p" component="p" gutterBottom>
                  <Button variant="outlined" size="large">Nonsense</Button>
              </Typography>
            </RouterLink>
            
            
              {/* {getSatNavData().map(({id, title, img, desc, h, w}) => (
                <IconButton className="sat-nav-link" aria-label="delete" size="small" style={{top: h, left: w}}>
                    <PlusIcon fontSize="small" color="#000" />
                </IconButton>
              ))} */}
        </Container>
    )
  }
}
export default Home;