import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

class Footer extends Component {
  render() {
    return (
        <Container maxWidth="md" sx={{mb: 16}}>
            <Divider sx={{mt: 8, background: '#000'}} />
            <Grid container spacing={2} alignItems="center" justifyContent="center" my={{md: 4, xs: 2}}>
                <Grid item xs={6}>
                    <Typography textAlign="left" variant="h6">
                        (C) 2021 Eva Shell
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography textAlign="right" variant="h6">
                        <Link href="mailto:eva.g.shell@gmail.com" target="_blank">Contact</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
  }
}
export default Footer;