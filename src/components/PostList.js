import React, { useState, useEffect } from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxListSecondary({filterText}) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [users, setUsers]  = useState([]);
    const [sortT] = useState(['desc']);
    
    useEffect(() => {
        axios.get(`/users.json`).then(response => {
            const users = response.data;
            setUsers(users);
        });
    },[]);

    const nameList = users
    .sort( (a,b) => {
      
      const isReversed = (sortT === 'desc') ? -1 : 1;
      return isReversed * a.last_name.localeCompare(b.last_name);
    }) 
    .filter(value => {
      return (value.first_name.indexOf(filterText) >= 0 || value.last_name.indexOf(filterText) >= 0)
    })

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
        console.log(value);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

        return (

            <List dense className={classes.root}>
      {nameList.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value.id} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value.avatar}`}
                src={`${value.avatar}`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={` ${value.first_name +" "+ value.last_name }`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value.id)}
                checked={checked.indexOf(value.id) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}