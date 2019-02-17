import { Meteor } from 'meteor/meteor';
import surveyData from '../collection';

Meteor.publish('SData',()=>{

return surveyData.find()

})