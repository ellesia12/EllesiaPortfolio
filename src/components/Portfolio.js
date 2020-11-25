import React from "react";

import { makeStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";

import { useSpring, animated } from 'react-spring';
import img from "../doc/Capture.PNG"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';








import Home from "./Home";
import ComingSoon from "./CommingSoon"



const useStyles = makeStyles(theme=>({
    box:{
        paddingTop: "150px"
    },
    word:{
        textTransform: "uppercase",
        fontFamily:"'Yeseva One', cursive",
    },
    root: {
        maxWidth: 345,
        textDecoration:"none"
    },
    media: {
        height: 140,
    },
    link: {
        textDecoration:"none"
    }

}))




const Portfolio = () =>{

const classes = useStyles();

    return(
        <>
             <Box component="div" style={{background:"#C38D9E", height:"100vh"}}>
             <Home />
                <Grid container justify="center">
                    <Box className={classes.box}>
                        <a href="https://pokemonwbs.netlify.app/" className={classes.link}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={img}
                                title="Contemplative Reptile"
                                />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Rock, Paper, Scissors PokeFight!
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Check out this Rock, Paper, Scissors Pokethemed game I created with my collueges! 
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="#DB5CA2" >
                            Go To Game
                        </Button>
        
                        </CardActions>
                        </Card>
                        </a>
                    </Box>
                </Grid>
           </Box>
        </>
    )
};



export default Portfolio;