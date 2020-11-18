import React, { useState } from "react";
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
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail, SettingsInputAntenna} from "@material-ui/icons";

//import pic
import newpic from "../pic.jpg";

//make the styles for navbar here
//theme colors #5CDB95 #DB5CA2
const useStyles = makeStyles(theme =>({
    nav:{
        backgroundColor: "#5CDB95"
    },
    backButton: {
        backgroundColor: "BE0D73"
    },
    arrow: {
        color: "white"
    },
    menuSliderContainer: {
        width: 250,
        height: "30rem"
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
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact"
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
            <Avatar className={classes.avatar} src={newpic} alt="picture of ellesia"/>
            <Divider />
            <List>
            {menuItems.map((lsItem, key)=> (
                    <ListItem button key={key}>
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
            <AppBar position="static" className={classes.nav}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)} className={classes.backButton}>
                        <ArrowBack className={classes.arrow}/>
                    </IconButton>
                    <Typography variant="h5" className={classes.words}>
                        Menu
                    </Typography>
                    <Drawer open={slide.right} anchor="right" onClose={toggleSlider("right", false)}>
                        {slideList("right")}
                    </Drawer>
                </Toolbar>
            </AppBar>

        </Box>
    </>
    )
};


export default NavBar;