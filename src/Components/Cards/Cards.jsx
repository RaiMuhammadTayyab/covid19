import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Cards.module.css'

const Cards= ({data:{TotalConfirmed,TotalRecovered,TotalDeaths,latestdate}}) => {
//const Cards=({props})
//console.log(props)
if (!TotalConfirmed){return'loading......'} 
return (
    
    <div className={styles.container}>
   <Grid container spacing={3} justify="center">
       <Grid item component={Card}>
           <CardContent>
        <Typography color= "textSecondary" gutterBottom> Infected </Typography>
        <Typography variant="h5"> TotalConfirmed </Typography>
        <Typography color="textSecondary"> latestDate </Typography>
        <Typography variant="body2"> No of Infected Cases </Typography>

           </CardContent>
       </Grid>
       <Grid item component={Card}>
       <CardContent>
        <Typography color="textSecondary" gutterBottom> Recovered </Typography>
        <Typography variant="h5">  TotalRecovered</Typography>
        <Typography color="textSecondary"> latestDate </Typography>
        <Typography variant="body2"> No of Recovered cases </Typography>

           </CardContent>
       </Grid>

       <Grid item component={Card}>
       <CardContent>
        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
        <Typography variant="h5"> TotalDeaths </Typography>
        <Typography color="textSecondary"> latestDate</Typography>
        <Typography variant="body2"> No of Deaths </Typography>

           </CardContent>
       </Grid>
   </Grid>
    </div>)}
    
    
    
export default Cards