import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root":{
            minWdith: 0,
            maxWidth: 250,

        },
    footer:{
        paddingTop:"50px"
    }
    }
})




const Footer = () =>{
const classes = useStyles();



    return(
        <>
            <BottomNavigation width="auto" styles={{background:"#DB5CA2"}} className={classes.footer}>
                <a target="_blank" href="https://github.com/ellesia12">
                <BottomNavigationAction
                    className={classes.root}
                    style={{padding: 0}}
                    icon={<GitHubIcon/>}
                />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ellesia-janto/">
                <BottomNavigationAction
                    className={classes.root}
                    style={{padding: 0}}
                    icon={<LinkedInIcon/>}
                />
                </a>
            </BottomNavigation>
        </>
    )
};


export default Footer;