import React, { Component } from 'react';
// import { getUsersCount } from 'api/common';

import Loader from '../../components/UI/Loader';
import Header from '../../components/Home/Header';
import Features from '../../components/Home/Features';




class Home extends Component {
   state = {
      clientsCount: 0,
      loaded: true
   };

   render() {
      if (!this.state.loaded) {
         return <Loader />;
      } else {
         return (
            <div>

                  
                     <Header />
                     <Features />
              
            </div>
         );
      }
   }

   // async componentDidMount() {
   //    const usersCount = await getUsersCount();

   //    if (usersCount) {
   //       this.setState({
   //          clientsCount: usersCount.data,
   //          loaded: true
   //       });
   //    }
   // }
}

export default Home;
