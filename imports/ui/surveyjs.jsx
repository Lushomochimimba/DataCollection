import React, { Component } from 'react';
import * as Survey from "survey-react";
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import surveyData from "../api/surveyInfo/collection.js"

// json object with questions and their choices(options).
var surveyJSON = {pages:[{name:"page1",elements:[{type:"radiogroup",name:"question2",title:"who are we ",choices:[{value:"item1",text:"Humans "},{value:"item2",text:"Aliens"},{value:"item3",text:"neither"}]},{type:"radiogroup",name:"question1",title:"what do we live for",choices:[{value:"item1",text:"to see the next day"},{value:"item2",text:"vanity"},{value:"item3",text:"food"}]},{type:"radiogroup",name:"question3",title:"where should you get your gas from",choices:[{value:"item1",text:"pum"},{value:"item2",text:"engi"},{value:"item3",text:"TOTAL"}]},{type:"checkbox",name:"question4",title:"how can i",choices:[{value:"item1",text:"live "},{value:"item2",text:"with"},{value:"item3",text:"without"},{value:"item4",text:"out"}]}],visible:true}]}

export class Mysurveys extends Component {
  state = {
    counter: 0,
  }
  
getSurveyData=(survey)=>{
  // assigning the variable Data to the data collected from the responses given from the survey question (data is returned in an object)
    var Data =  JSON.stringify(survey.data);

// checking if object is empty before inserting into collection.
    (Object.getOwnPropertyNames(survey.data).length === 0 ? console.log("please answer at least one questions before submitting") :  Meteor.call('SData.create',Data,(err,result)=>{result ? console.log('inserted data successfully'): console.log('failed to insert data')}))
    // console the data collected from answers given to survey questions
    console.log(Data)
}

  render() {
    return (
      <div>
      <div id="surveyContainer">
      <Survey.Survey json={ surveyJSON } onComplete={this.getSurveyData} />
      </div>
      </div>
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('SData');
  Meteor.subscribe('users');


  return {
    
    SData : surveyData.find().fetch()
  };
})(Mysurveys);