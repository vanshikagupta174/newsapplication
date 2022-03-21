import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
//to handle css makeStyles component is used
const useStyles = makeStyles({
    header: {
background:'#fff',
height:70
    },
    logo:{
        height:55,
        margin:'auto',
        paddingRight:70
    },
    menu:{
        color:'#000'
    }
})
const Header = () => {
    const classes= useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return (
        <AppBar className={classes.header}>
            <Toolbar>
            <Menu className={classes.menu}/>
<img src={url} ali="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;







/*
//code for header of e commerce website
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
//to handle css makeStyles component is used
const useStyles = makeStyles({
    header: {
        background: 'blue',
        height: 70
    },
})
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header}>
        </AppBar>
    )
}

export default Header;*/
