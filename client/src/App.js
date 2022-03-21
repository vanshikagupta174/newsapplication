import { Box, makeStyles } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import Header from './components/Header';
import Infoheader from './components/Infoheader';
import Articles from './components/Articles';
//App is the main component
//components which are imported are always written in self closing tag
//box component by default ek div tag deta h
//for header appBar component is used
const useStyles = makeStyles(theme=>({
  container: {
    marginTop: 110,
    width:'59%',
    margin:'0 auto',
    [theme.breakpoints.down('md')]:{
      width:'75%'
    },
    [theme.breakpoints.down('sm')]:{
      width:'85%'
    }
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box>
        <Header />
        <Box className={classes.container}>
          <Infoheader />
          <Articles />
        </Box>
      </Box>
    </div>
  );
}

export default App;





/*
//code for e commerce website

import { Box, makeStyles } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import Header from './components/Header';
import Product from './components/Product';
//App is the main component
//components which are imported are always written in self closing tag
//box component by default ek div tag deta h
//for header appBar component is used
const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 110,
    width: '90%',
    margin: '0 ',
    [theme.breakpoints.down('md')]: {
      width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box>
        <Header />
        <Box className={classes.container}>
        <Product />
        </Box>
      </Box>
    </div>
  );
}

export default App;*/
