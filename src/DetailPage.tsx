import React from 'react'
import classes from './DetailPage.module.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


function DetailPage() {
  return (
    <div className={classes.a}>
      <div className={classes.parent}>
          <div>
            <p className={classes.title}>About the movies</p>
            <div className={classes.description}>
           <p>              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam odit ipsa dolores architecto minima! Cumque non voluptate est quidem quo dicta quam minus explicabo repudiandae. Saepe ab in officia facilis.
</p>
<p>              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam odit ipsa dolores architecto minima! Cumque non voluptate est quidem quo dicta quam minus explicabo repudiandae. Saepe ab in officia facilis.
</p>
<p>              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam odit ipsa dolores architecto minima! Cumque non voluptate est quidem quo dicta quam minus explicabo repudiandae. Saepe ab in officia facilis.
</p>
            </div>
          </div>
          <hr />
          <div>
          <p className={classes.title}>Cast</p>
          <Stack direction="row" spacing={2}>
      
      <div className={classes.col}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <span>name</span>
      <span>desc</span>
      </div>
      <div className={classes.col}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <span>name</span>
      <span>desc</span>
      </div>
      <div className={classes.col}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <span>name</span>
      <span>desc</span>
      </div>
    </Stack>
          </div>
          <hr />
          <div>
          <p className={classes.title}>Crew</p>
          <Stack direction="row" spacing={2}>
      
      <div className={classes.col}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <span>name</span>
      <span>desc</span>
      </div>
      <div className={classes.col}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <span>name</span>
      <span>desc</span>
      </div>
      <div className={classes.col}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <span>name</span>
      <span>desc</span>
      </div>
    </Stack>
          </div>
          <div className={classes.card}>
          <p className={classes.title}>Top Reviews</p>
<div className={classes.maincard}>
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        
        </IconButton>
        <IconButton aria-label="share">
        
        </IconButton>
       
      </CardActions>
     
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        
        </IconButton>
        <IconButton aria-label="share">
        
        </IconButton>
       
      </CardActions>
     
    </Card>
</div>
          </div>
      </div>
        </div>
  )
}

export default DetailPage