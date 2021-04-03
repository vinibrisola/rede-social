import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard/Index.js';


const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Vinicius Brisola Alves',
      username: 'vinibrisa',
      avatar: '/images/avatars/avatar_1jpeg'
    },
    title: "criando um App de rede social",
    date: "April 7, 2020",
    description: 'Fala Pessoal!',
    hashtags: "#C++",
    image: "images/posts/post9.jpeg"
  },
  {
    id: 2,
    author: {
      id: 2,
      name: 'Vinicius Brisola Alves',
      username: 'vinibrisa',
      avatar: '/images/avatars/avatar_1jpeg'
    },
    title: "criando um App de rede social",
    date: "April 7, 2020",
    description: 'Fala Pessoal!',
    hashtags: "#C++",
    image: "images/posts/post8.jpeg"
  },

];

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        posts.map(post => (
          <PostCard key={posts.id} post={post} />
        ))
      }
    </div>
  )
}

export default Feed;