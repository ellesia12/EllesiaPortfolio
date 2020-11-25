import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import emailjs from "emailjs-com";
import Home from './Home'

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color: "#DB5CA2"
        },
        "& label":{
            color: "5CDB95"
        },
        "&:hover fieldSet":{
            borderColor: "5CDB95"
        },
        "&.Mui-focused fieldSet":{
            borderColor: "5CDB95"
        }
    }
})(TextField);


const useStyles = makeStyles(theme=>({
    form:{
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "white",
        borderColor: "white"
    },
    header: {
        textAlign: "center",
        textTransform:"uppercase",
        marginBottom:"30px",
        fontFamily:"'Yeseva One', cursive"
        
    }
}))
// dont forget navbar



const Contact = () =>{

const classes = useStyles();

const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_qbwidwh', 'template_ty02y73', e.target, 'user_kDUpPB9YQLoYNP5wWXgjd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

    return(
        <>
           <Box component="div" style={{background:"#C38D9E", height:"100vh"}}>
           <Home />
                <Grid container justify="center">
                    <Box component="form" onSubmit={sendEmail} className={classes.form}>
                        <Typography variant="h3" className={classes.header}>
                            Talk to Me 
                        </Typography>
                        <InputField 
                            label="Your Name"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="name"
                        />
                        <br />
                        <InputField 
                            label="Email"
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            name="email"
                        />
                        <br />
                        <InputField 
                            fullWidth={true}
                            label="Your Cell Number"
                            margin="dense"
                            size="medium"
                            name="number"
                        />
                        <br />
                        <InputField 
                            fullWidth={true}
                            label="Short Message"
                            margin="dense"
                            size="medium"
                            name="message"
                        />
                        <Button type="submit" variant="filled" fullWidth={true} className={classes.button} endIcon={<SendIcon/>}>
                            Send
                        </Button>
                    </Box>
                </Grid>
           </Box>
        </>
    )
};



export default Contact;