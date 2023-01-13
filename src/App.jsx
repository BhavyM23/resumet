import React from "react";
import { Typography, 
    AppBar, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    CssBaseline, 
    Grid, 
    Toolbar, 
    Container,
    ListItem,
    createTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import './App.css';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const App = ()=>{
    return(
        <>
            <CssBaseline />
            <div className="main">
                
                <div className="Main1">
                    <div className="head">
                        <Grid 
                        container
                        justifyContent="center"
                        rowspacing = {1}
                        columnspacing = {{xs:3, sm:3, md:3}}>
                            <Grid item md={7}>
                                <div className="name">
                                <ListItem >
                                    <Typography variant="h3">Bhavy Mittal</Typography>
                                </ListItem>
                                </div>
                                
                                <div className="name2">
                                <ListItem >
                                    <Typography variant="h4">Computer Science Engineer</Typography>
                                </ListItem>
                                </div>
                                
                            </Grid>
                            <Grid item md={3}>
                                <ListItem disablePadding>bhavymittal45@gmail.com</ListItem>
                                <ListItem disablePadding>+91 9111887914</ListItem>
                                <a href="https://www.linkedin.com/in/bhavy-mittal-954970192">
                                <ListItem disablePadding>My Linkedin Profile</ListItem>
                                </a>
                                <ListItem disablePadding>02, 20, Ramganj Waid, Bhudwara Bajar,Khandwa.</ListItem>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="line1"></div>

                    <Grid 
                    container
                    justifyContent="center"
                    rowspacing = {1}
                    columnspacing = {{xs:3, sm:3, md:3}}>
                        <Grid item md={2}>
                            <ListItem>
                                <Typography variant="h5">
                                    Objective
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item md={8}>
                            <ListItem>
                                <Typography variant="12">
                                I am a good learner having a creative approach to solve a problem and always ready for new things to learn.
                                </Typography>
                            </ListItem>
                        </Grid>
                    </Grid>

                    <div className="line1"></div>

                    <Grid 
                    container
                    justifyContent="center"
                    rowspacing = {1}
                    columnspacing = {{xs:3, sm:3, md:4}}>
                        <Grid item md={2}>
                            <ListItem >
                                <Typography variant="h5">
                                    Skills
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item md={2.67} paddingLeft="0.1rem">
                            
                            <Typography variant="h6">
                                    C/C++
                            </Typography>
                            <Typography variant="12">
                                    Data-Structures, Datatypes, OOPs concept, Basic Syntax.
                            </Typography>
                            
                        </Grid>
                        <Grid item md={2.67} paddingLeft="0.1rem">
                            <Typography variant="h6">
                                Python
                            </Typography>
                            <Typography variant="12">
                                Basic Syntax, Pygame, Datatypes.
                            </Typography>
                        </Grid>
                        <Grid item md={2.67} paddingLeft="0.1rem">
                            <Typography variant="h6">
                                Machine Learning
                            </Typography>
                            <Typography variant="12">
                                Pandas, Numpy, tkinter, Pygame, Seaborn, Matlplotlib-pyplot, Math.
                            </Typography>
                        </Grid>
                    </Grid>

                    <div className="line1"></div>

                    <Grid 
                    container
                    justifyContent="center"
                    rowspacing = {1}
                    columnspacing = {{xs:3, sm:3, md:3}}>
                        <Grid item md={2}>
                            <ListItem >
                                <Typography variant="h5">
                                    Soft Skills
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item md={4}>
                            <ListItem disablePadding>
                                <Typography variant="12">
                                    ▫️Adaptibility
                                </Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <Typography variant="12">
                                    ▫️TeamWork
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item md={4}>
                        <ListItem disablePadding>
                                <Typography variant="12">
                                    ▫️Willingness to Learn
                                </Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <Typography variant="12">
                                    ▫️Management
                                </Typography>
                            </ListItem>
                        </Grid>
                    </Grid>

                    <div className="line1"></div>

                    <Grid 
                    container
                    justifyContent="center"
                    rowspacing = {1}
                    columnspacing = {{xs:3, sm:3, md:3}}>
                        <Grid item md={2}>
                            <ListItem >
                                <Typography variant="h5">
                                    Projects
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item md={8}>
                            <ListItem >
                                <Typography variant="h6">
                                    Snake Game Using Python
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="12">
                                The project aim to create a snake game using pygame library.
                                </Typography>
                            </ListItem>
                        </Grid>
                        <div className="exp">
                        <Grid item md={8}>
                            <ListItem >
                                <Typography variant="h6">
                                    Dice Simulator
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="12">
                                    The Project Aims to create a rolling dice using tkinter library.
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item md={8}>
                            <ListItem >
                                <Typography variant="h6">
                                    Movie Recommendation System
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="12">
                                    The Project Aims to give you  SUGGESTED list of movies by entering the last watched movie.
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item md={8}>
                            <ListItem >
                                <Typography variant="h6">
                                    Resume Template
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="12">
                                    The Project Aimed to create a dynamic Resume using Javascript, HTML and CSS
                                </Typography>
                            </ListItem>
                        </Grid>
                        </div>
                    </Grid>

                    <div className="line1"></div>

                    <Grid 
                    container
                    justifyContent="center"
                    rowspacing = {1}
                    columnspacing = {{xs:3, sm:3, md:3}}>
                        <Grid item md={2}>
                            <ListItem >
                                <Typography variant="h5">
                                    Education
                                </Typography>
                            </ListItem>
                        </Grid>
                        <Grid item md={8}>
                            <ListItem >
                                <Typography variant="h6">
                                    Senior Secondary Education
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="h7">
                                    2016 - 2017 |Sophia Convent School, Khandwa - CGPA 9.8
                                </Typography>
                            </ListItem>
                        </Grid>
                    </Grid>

                    <Grid 
                    container
                    justifyContent="center"
                    rowspacing = {1}
                    columnspacing = {{xs:3, sm:3, md:3}}>
                        <Grid item md={2}>
                        </Grid>
                        <Grid item md={8}>
                            <ListItem >
                                <Typography variant="h6">
                                    Higher Secondary Education
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="h7">
                                    2018 - 2019 | BENS Public School, Khandwa - Percent 86.2
                                </Typography>
                            </ListItem>
                        </Grid>
                    </Grid>
                    <Grid 
                    container
                    justifyContent="center"
                    rowspacing = {1}
                    columnspacing = {{xs:3, sm:3, md:3}}>
                        <Grid item md={2}>
                        </Grid>
                        <Grid item md={8}>
                            <ListItem >
                                <Typography variant="h6">
                                    BE in Information Technology
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="h7">
                                    2019 - 2023 | Shri Sant Gajanan Maharaj College of Engineering, Shegaon - CGPA(Agr) 9.31
                                </Typography>
                            </ListItem>
                        </Grid>
                    </Grid>

                    <div className="line1"></div>
                    
                    <Grid 
                    container
                    justifyContent="center"
                    rowspacing = {1}
                    columnspacing = {{xs:3, sm:3, md:3}}>
                        <Grid item md={10}>
                            <ListItem >
                                <Typography variant="11">
                                    Bhavy Mittal | bhavymittal45@gmail.com | +91 9111887914
                                </Typography>
                            </ListItem>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default App;