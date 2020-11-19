import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import Typed from 'react-typed';
import pic from "../newpic.PNG"
import calibackground from "../california.jpg";


const useStyles = makeStyles(theme=>({
    avatar: {
        width: 230,
        height: 270,
        margin: 50
    },
    name: {
        color: "white",
        textTransform: "uppercase"
    },
    job: {
        color: "white",
        textTransform: "uppercase",
        marginBottom: "2rem"
    },
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
        backgroundImage: `url('https://images.unsplash.com/photo-1523595857-fe9ee689f76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60')`,
        backgroundRepeat: "no-repeat",
       
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1523595857-fe9ee689f76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60')`,
        height: "700px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "2rem",
    }
}))











const Hero = () => {
const classes = useStyles();


    return(
        <>
        <Box className={classes.hero}>
            <Grid container justify="center">
            <Avatar src={pic} alt="pic of ellesia" className={classes.avatar}>
            </Avatar>
            </Grid>
                <Typography variant="h4" className={classes.name}>
                    <Typed 
                        strings={['Ellesia Jessana Janto']}
                        typeSpeed={40}
                    />
                </Typography>
                <br/>
                <Typography variant="h5" className={classes.job}>
                    <Typed 
                        strings={['Junior Web Developer', 'Web Design']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </Typography>
                
        </Box>
        </>
    )
};






export default Hero;