import React, { Component } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Link as RouterLink} from 'react-router-dom';

export default class MenuExampleVertical extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
        return (
          <Container maxWidth="md">
              <Typography textAlign="center" sx={{mt: 2}}><RouterLink to="/"><Button size="large" className="title" variant="outlined">NICK STEPRO</Button></RouterLink></Typography>
              <ButtonGroup className="floating-link">
                  <Button component={RouterLink} to="/" variant="outlined">Home</Button>
                  <Button component={RouterLink} to="/projects" variant="outlined">Nonsense</Button>
                  <Button component={RouterLink} to="/why" variant="outlined">Why</Button>
                  <Button component={RouterLink} to="/contact" variant="outlined">Contact</Button>
              </ButtonGroup>
              
          </Container>
    )
  }
}