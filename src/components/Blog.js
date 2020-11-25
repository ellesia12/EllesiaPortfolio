import React from "react";

import { makeStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";

import Home from "./Home";
import ComingSoon from "./CommingSoon"
const useStyles = makeStyles(theme=>({
    box:{
        paddingTop: "150px"
    },
    word:{
        textTransform: "uppercase",
        fontFamily:"'Yeseva One', cursive"
    },
    

}))




const Blog = () =>{

const classes = useStyles();

    return(
        <>
             <Box component="div" style={{background:"#C38D9E", height:"100vh"}}>
             <Home />
                <Grid container justify="center">
                    <Box className={classes.box}>
                        <Typography variant="h3" className={classes.word}>
                            Coming Soon...
                        </Typography>
                        <ComingSoon />
                    </Box>
                </Grid>
           </Box>
        </>
    )
};



export default Blog;