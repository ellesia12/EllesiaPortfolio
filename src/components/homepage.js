import React from "react";
import {Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

//import components
import NavBar from "./NavBar";
import Hero from "./Hero";

const useStyles = makeStyles({
    hero: {
        backgroundImage: `url('https://images.unsplash.com/photo-1523595857-fe9ee689f76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60')`,
        backgroundRepeat: "no-repeat",
        height: "1000px",
        width: "100%"
    }
})

const HomePage = () =>{
    const classes = useStyles();



    return(
        <>
        <Box className={classes.hero}>
            <NavBar/>
            <Hero />
        </Box>
        </>
    )
};



export default HomePage;