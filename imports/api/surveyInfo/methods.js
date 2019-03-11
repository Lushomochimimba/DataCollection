import { Meteor } from  'meteor/meteor';
import surveyData from './collection.js'

Meteor.methods({
 // inserting data collected from answers given to survey questions into surveyData collection
    'SData.create':(Data)=>{
        
    console.log("data arrived",Data);
    const result = surveyData.insert(Data);

    return result;
    }
})