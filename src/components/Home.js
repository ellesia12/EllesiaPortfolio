import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>({
icon: {
    color: "white",
    width: "35px",
    height: "40px",
    padding: "5px"
}
}))

const Home = () =>{

const classes = useStyles();

    return(
        <>
            <a href="/">
            <HomeIcon className={classes.icon} />
            </a>
        </>
    )
}



export default Home;