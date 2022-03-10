import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import JotformEmbed from 'react-jotform-embed';

class Contact extends Component {
  render() {
    return (
      <Container maxWidth="md">
          <Navigation />
          <Grid container spacing={2} alignItems="center" justifyContent="center" my={{md: 4, xs: 2}}>
              <Grid item xs={12}>
                <JotformEmbed src="https://form.jotform.com/213095993014053" />
              </Grid>
            </Grid>
        <Footer />
        </Container>
    )
  }
}
export default Contact;