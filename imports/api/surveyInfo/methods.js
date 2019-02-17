import { Meteor } from  'meteor/meteor';
import surveyData from './collection.js'

Meteor.methods({
        
    'SData.create':(Data)=>{

        console.log("yabwela: ",Data);
        

    const result = surveyData.insert(Data);

    return result;
    }

})