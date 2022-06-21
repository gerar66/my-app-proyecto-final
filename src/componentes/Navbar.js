import react from 'react';
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.Toolbar,
    menuButton: {
marginRight: theme.spacing(2),
    },
    title:{
        flexGrow:1
    }
}))

const Navbar = () => {
    const classes = useStyles()
        return(
<div>
    <AppBar>
        <Toolbar>
            <IconButton 
            color='inherit'
            aria-label='menu'
            className={classes.menuButton}
            >
            <MenuIcon></MenuIcon>
            </IconButton>
            
            <Typography variant='h6' className={classes.title}>
            Poke Web
            </Typography>
            <Button variant='text' color='inherit'>
            login
            </Button>
        </Toolbar>
    </AppBar>
    <div className={classes.offset}></div>
</div>

        )

}

export default Navbar