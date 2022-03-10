import React from 'react';
import './App.scss';

// Themes
import { ThemeProvider } from '@mui/material'
import theme from './themes/mui-harsh'

// Components
import Contact from './components/Contact';
import Loaf from './components/Loaf';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Switch>
          <Route exact path="/"><Loaf /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/loaf"><Loaf /></Route>
      </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
