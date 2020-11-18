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
        zIndex: 1 
    }
}))











const Hero = () => {
const classes = useStyles();


    return(
        <>
        <Box className={classes.container}>
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