import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CardsList from '../../components/Cards/CardsList';
import SingleCard from '../../components/Cards/SingleCard';

const Cards = ({ match }) => (
   <div className="row panel-content">
      <div className="col">
         <Switch>
            <Route exact path={match.url} component={CardsList} />
            <Route exact path={`${match.url}/:cardId`} component={SingleCard} />
         </Switch>
      </div>
   </div>
);

export default Cards;