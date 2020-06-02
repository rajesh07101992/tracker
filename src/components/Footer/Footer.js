import React, { Component } from 'react';
import {Grid, Container, Typography} from '@material-ui/core';
import Styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
              <Container className={Styles.back} fixed='true'  maxWidth='true'>
                 <Grid
                    container                   
                    justify="center"
                    alignItems="center"
                 >
                    <Typography color="textSecondary" className={Styles.colr}>
                    © 2020 Rajesh Ghadi. All Rights Reserved
                    </Typography>
                  </Grid>
              </Container>          
    
        );
    }
}

export default Footer;