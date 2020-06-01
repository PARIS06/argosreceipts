import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

// Change default <div> container to <a> if a link is requested
const ListContainer = props => {
   return props.href ? <List component={ Link } to={props.href}>{props.children}</List> : <div>{props.children}</div>;
};

ListContainer.propTypes = {
   href: PropTypes.string
};

export default ListContainer;
