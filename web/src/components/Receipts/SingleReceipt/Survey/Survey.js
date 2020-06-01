import React, { Component } from 'react';

import * as Survey from 'survey-react';
import 'survey-react/survey.css';

// import 'bootstrap/dist/css/bootstrap.css'
// import './style.css';

class MerchantSurvey extends Component {
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {    

    Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
    "completedHtmlOnCondition": [
        {
            "expression": "{nps_score} > 8",
            "html": "<h3>Thank you for your feedback.</h3> <h5>We're glad you love us. Your ideas and suggestions will help us make Target even better!</h5>"
        }, {
            "expression": "{nps_score} < 7",
            "html": "<h3>Thank you for your feedback.</h3> <h5> Thanks for submitting! We highly value all suggestions from our customers.</h5>\n"
        }
    ],
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "rating",
                    "name": "nps_score",
                    "title": "Would you recommend Target to a friend or family member?",
                    "isRequired": false,
                    "rateMin": 0,
                    "rateMax": 5,
                    "minRateDescription": "(Unlikely)",
                    "maxRateDescription": "(Definitely)"
                }, 
            ]
        }
    ],
    "showQuestionNumbers": "off"
};

    var model = new Survey.Model(json);    
    return (
      <Survey.Survey model={model}/>
    );
  }
}

export default MerchantSurvey;