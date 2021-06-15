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
 import project3 from "../images/skull.jpg";
 import project4 from "../images/code.jpg";
 

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
                        <a href="https://flikrt-admin-app.herokuapp.com/" style={{textDecoration:"none"}}>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam quia dolores! Dolorum, eaque, 
                            atque id in aut tempore tenetur possimus rerum perspiciatis officiis itaque est voluptatibus fugit vitae quas.
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam quia dolores! Dolorum, eaque, 
                            atque id in aut tempore tenetur possimus rerum perspiciatis officiis itaque est voluptatibus fugit vitae quas.
                        </Typography>

                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
                        </Button>
                    </CardActions>
 

                
            </Card>
            </Grid>
        </Grid>
            
        </Box>
    )
}

export default Portfolio
