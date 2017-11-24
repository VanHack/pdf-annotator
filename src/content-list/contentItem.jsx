import React from 'react';
import { Link } from 'react-router-dom';

import ContentItemIcon from './contentItemIcon'

export default props => (
  <li>
    <Link to={`/detail/${props.id}`}>
      <ContentItemIcon type={props.type} />  
      {props.title}
    </Link>
  </li>
)