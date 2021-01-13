import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  text:{
      marginLeft:theme.spacing(5),
      marginTop:theme.spacing(2),
      marginRight:theme.spacing(5)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{color:'white'}} className={classes.title}>
            SDT G2 Series
            </Typography>
            <Typography variant="subtitle2" style={{color:'white'}}>
            4-15KW | Three Phase | 2 MPPT
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography className={classes.text}>
        The SDT G2 series of inverter from GoodWe is one of the best options available in the residential & commercial sectors owing to its technical strengths, which make it one of the most productive inverters in the market. Because of its high efficiency of (98.3%), the enhanced oversizing & overloading capabilities and the fact that it does not require a null line for installation, SDT G2 represents an outstanding improvement in the industry.
        </Typography>
        <div className='container mt-2'>
        <div className='row'>
            <div className='col-md-6' >
            <Typography variant="h4" align="center" className="mt-5 mb-3">
            50%
            DC INPUT
            OVERSIZING
            </Typography>
            <Typography align="justify">
            In regions where solar power is not allowed to be reverberated to the grid, installers can easily set an export limit through the GoodWe app with one simple-click, as SDT G2 has integrated a built-in anti-reverse current function into the inverter.
            </Typography>
            </div>
            <div className='col-md-6' >
            <Typography variant="h4" align="center" className="mt-5 mb-3">
            10%
AC OUTPUT
OVERLOADING
            </Typography>
            <Typography align="justify">
            In regions where solar power is not allowed to be reverberated to the grid, installers can easily set an export limit through the GoodWe app with one simple-click, as SDT G2 has integrated a built-in anti-reverse current function into the inverter.
            </Typography>
            </div>
            </div>
            <div className='row mt-5'>
            <div className='col-md-6' >
            <Typography variant="h4" align="center" className="mb-3">
            BUILT-IN
ANTI-REVERSE CURRENT
            </Typography>
            <Typography align="justify">
            In regions where solar power is not allowed to be reverberated to the grid, installers can easily set an export limit through the GoodWe app with one simple-click, as SDT G2 has integrated a built-in anti-reverse current function into the inverter.
            </Typography>
            </div>
            <div className='col-md-6'>
            <Typography variant="h4" align="center" className="mb-3">
            ARC-FAULT
CIRCUIT INTERRUPTER
            </Typography>
            <Typography align="justify">
            Safety First! With AFCI, the inverter is able to detect arc fault failure, sending alarms through monitoring systems and breaking the circuit simultaneously. GoodWe does not only deliver efficiency, reliability, but security as well.
            </Typography>
            </div>
        </div>
        </div>
      </Dialog>
    </div>
  );
}
