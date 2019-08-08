import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AvatarList from './myfolder/AvatarList';
import * as serviceWorker from './serviceWorker';
import Avatar from './myfolder/Avatar';


ReactDOM.render(
  <Avatar/>
, document.getElementById('root'));


serviceWorker.unregister();
