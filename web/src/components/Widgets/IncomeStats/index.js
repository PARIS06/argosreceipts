import React, { Component } from 'react';
// import { getStats } from 'api/stats';

import Loader from '../../UI/Loader';


class IncomeStats extends Component {
   state = {
      accDetails: {},
      chartData: [],
      loaded: true
   };

   // Get account stats for the last 30 days
   // For the first user's account
   // componentDidMount() {
   //    getStats(this.props.firstAccount._id, 30)
   //       .then(({ accDetails, data }) => {
   //          this.setState({ accDetails, chartData: data, loaded: true });
   //       })
   //       .catch(err => this.setState({ loaded: false }));
   // }

   render() {
      if (!this.state.loaded) {
         return <Loader />;
      } else {
         return (
            <section className="module stats-widget account-preview-header">
               <div>
                  <h3>Bank of America...6615</h3>
               </div>
              
               {/* <p>
                  <strong>{this.state.accDetails.type} account</strong>
                  {' / '}
                  {this.state.accDetails.currency.toUpperCase()}
                  {' / '}
                  {this.state.accDetails.number}
               </p>

               <IncomeChart data={this.state.chartData} /> */}
            </section>
         );
      }
   }
}

export default IncomeStats;

// const mapStateToProps = state => {
//    return {
//       firstAccount: state.accounts.data[0]
//    };
// };

// export default connect(mapStateToProps)(IncomeStats);
