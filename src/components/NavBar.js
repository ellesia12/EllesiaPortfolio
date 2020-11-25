import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer"
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    ListItemIcon,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {  ArrowBack, AssignmentInd, Home, Apps, ContactMail, SettingsInputAntenna } from "@material-ui/icons";
import BookIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

//import pic
import newpic from "../pic.jpg";

//import the foooter
import Footer from "./Footer";

//make the styles for navbar here
//theme colors #5CDB95 #DB5CA2
const useStyles = makeStyles(theme =>({
    nav:{
        backgroundColor: "#c3909b",
        height: "0px"
       
    },
    backButton: {
        backgroundColor: "BE0D73"
    },
    arrow: {
        color: "white"
    },
    menuSliderContainer: {
        width: 250,
        height: "40rem"
    },
    avatar: {
        display: "block",
        margin: "0.5rem",
        width: 190,
        height: 230
    },
    lsText: {
        color: "#DB5CA2"
    },
    lsIcon: {
        color: "#DB5CA2"
    },
    avatar2: {
        display: "block",
        margin: "0.5rem",
        width: 190,
        height: 230
    },
    word:{
        fontFamily: "'Oswald', sans-serif",
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
        
    },
    {
        listIcon: <BookIcon/>,
        listText:"All About Me",
        listPath:"/aboutEllesia"
    },
    {
        listIcon: <FavoriteBorderIcon/>,
        listText:"Blog",
        listPath:"/blog"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    }
    
];




const NavBar = () =>{
const [slide, setSlide] =useState({
    right: false
});

const toggleSlider = (slider, open) => () => {
    setSlide({...slide, [slider]: open})
}



const classes = useStyles();


const slideList = slider => (
    <Box component="div" className={classes.menuSliderContainer} onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar2} src={newpic} alt="picture of ellesia" variant="rounded"/>
            <Divider />
            <List>
            {menuItems.map((lsItem, key)=> (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.lsIcon}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={lsItem.listText} className={classes.lsText}/>
                    </ListItem>
            ))}   
            </List>
        </Box>
)

    return(
    <>
        
        <Box component="nav">
            <AppBar position="fixed" className={classes.nav}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)} className={classes.backButton}>
                        <MenuIcon className={classes.arrow}/>
                    </IconButton>
                    <Typography variant="h5" className={classes.word}>
                        Menu
                    </Typography>
                    <Drawer open={slide.right} anchor="right" onClose={toggleSlider("right", false)}>
                        {slideList("right")}
                        <Footer/>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
};


export default NavBar;