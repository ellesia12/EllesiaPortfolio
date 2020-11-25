import React from "react";

import { makeStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";


const useStyles = makeStyles(theme=>({
    box:{
        paddingTop: "150px",
        width: "80%"
    },
    box2:{
        paddingTop: "50px",
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "center"

    },
    img: {
        width: "300px"
    }

}))




const AboutEllesia = () =>{

const classes = useStyles();

    return(
        <>
             <Box component="div" style={{background:"#C38D9E", height:"100vh"}}>
                <Grid container justify="center">
                    <Box className={classes.box}>
                    <Typography variant="h2" >
                        About Me
                    </Typography>
                        <Typography variant="h6" className={classes.word}>
                            My name is Ellesia. I am an American Frontend Web Developer living in Germany.
                            I shifted in to the world of web development at age 23, looking for a challenging and 
                            exciting new career. The digital world won me over and I transitioned right into web dev. 
                            I make responsive dynamic designs, that are both practical and fun!
                            In my free time you will find me traveling throughout Europe or creating latte art designs.
                        </Typography>
                    </Box>
                   
                </Grid>
           </Box>
        </>
    )
};



export default AboutEllesia;