import React, { Component } from 'react'
import Moment from 'react-moment';
import moment from 'moment';



class Date extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             date: moment()
        }
    }




    render() {
        return (
            <div className="date-time">
                <Moment format="MM/DD/YYYY HH:mm">
                    {this.state.date}
                </Moment>
                
                <p className="expiration-date">EXPIRES</p>
                <div className="expiration-date"> 
                
                <Moment format="MM/DD/YYYY" add={{ days: 365 }}>{this.state.date}
                </Moment>
                </div>
            </div>
        )
    }
}

export default Date;

