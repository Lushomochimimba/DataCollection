import React, { Component } from 'react';
import * as Survey from "survey-react";
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import surveyData from "../api/surveyInfo/collection.js"

var surveyJSON = {pages:[{name:"page1",elements:[{type:"radiogroup",name:"question2",title:"who are we ",choices:[{value:"item1",text:"Humans "},{value:"item2",text:"Aliens"},{value:"item3",text:"neither"}]},{type:"radiogroup",name:"question1",title:"what do we live for",choices:[{value:"item1",text:"to see the next day"},{value:"item2",text:"vanity"},{value:"item3",text:"food"}]},{type:"radiogroup",name:"question3",title:"where should you get your gas from",choices:[{value:"item1",text:"pum"},{value:"item2",text:"engi"},{value:"item3",text:"TOTAL"}]},{type:"checkbox",name:"question4",title:"how can i",choices:[{value:"item1",text:"live "},{value:"item2",text:"with"},{value:"item3",text:"without"},{value:"item4",text:"out"}]}],visible:true}]}



function sendDataToServer(survey) {
  survey.sendResult('e544a02f-7fff-4ffb-b62d-6a9aa16efd7c');
  // console.log(resultAsString)
  var resultAsString = JSON.stringify(survey.data);
  // alert(resultAsString)
  alert(resultAsString)
}

export class Mysurveys extends Component {
  state = {
    counter: 0,
  }
  
getSurveyData=(survey)=>{


// var Data = {
//       userData: JSON.stringify(survey.data)
// }
var Data =  JSON.stringify(survey.data)

  // var Data = {name:{}}
  Meteor.call('SData.create',Data,(err,result)=>{result ? console.log('inserted data successfully'): console.log('failed to insert data')});
  console.log(JSON.stringify(survey.data))
}

  render() {
    return (
      <div>
      <div id="surveyContainer">
      <h1>hello</h1>
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
    // links: Links.find().fetch(),
    SData : surveyData.find().fetch()
  };
})(Mysurveys);