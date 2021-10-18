import React from 'react';
import Navbar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Card,
    Grid,
    Box, 
    CardActionArea, 
    CardActions,
    CardContent,
    CardMedia,
    Button
 } from "@material-ui/core";
 import project1 from "../images/flipkart.png";
 import project2 from "../images/flipkart-clone.png";
 import project3 from "../images/chat.jpg";
 import project4 from "../images/Whatsapp.jpg";
 import project5 from "../images/medium.png";
 

 const useStyles = makeStyles({
    mainContainer: {
      //background:  "#233",
       height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
         
        margin: "3rem auto"
    }
  });
  

function Portfolio() {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
        <Navbar/> 
        <Grid container justify="center">
            {/* project 1 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project1}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 1
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            it's an admin part of flipkart clone but it's not responsive. You can check source code 
                            on any device but demo not, demo check on full screen
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        <a href="https://upbeat-spence-6d6e12.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/ecommerce-admin"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>
            {/* project 2 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project2}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 2
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        it's an client part of flipkart clone but it's not responsive. You can check source code 
                            on any device but demo not, demo check on full screen
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://flipkrt-app-clone.herokuapp.com/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/ecommerce-flipkart"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>
            {/* project 3 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project3}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 3
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                             it's an reactjs chat app creating on chatengine.io. chatengine is amazing
                             for the beginner to create a real time chat app.
                             <div className="pass-f">Username:basit</div>
                             <div className="pass-f">Password:321321</div>
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        <a href="https://compassionate-sammet-e724b4.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/reactjs-chat-app"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>
            {/* project 4 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project4}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 4
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        it's a WhatsApp clone created on MERN. In this project used pusher for handle the messages. And 
                        i learned about the pusher that how we used it in backend and frontend.
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://flamboyant-wing-868dca.netlify.app/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/whatsapp-clone-MERN"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>

            {/* project 4 */}
            {/* project 5 */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project5}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            project 5
                        </Typography>

                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        it's a Medium.com clone created on MERN. In this project used redux for handle the states very easily. In this
                        project I have Created 3 API with itself and I have learned very well that how we used and created the API in MERN Stack
                         
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                       <Button size="small" color="primary">
                        <a href="https://mern-blog-like-medium.herokuapp.com/" style={{textDecoration:"none"}}>
                            Live Demo
                        </a>
                        </Button>
                        <Button size="small" color="primary"   > 
                        <a href="https://github.com/Mehran096/MERN-Blog-Like-Medium.com"  style={{textDecoration:"none"}}>
                            Source Code
                        </a>
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>

            {/* project 5 */}
             
        </Grid>
            
        </Box>
    )
}

export default Portfolio
