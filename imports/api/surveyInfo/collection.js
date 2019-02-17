import { Mongo } from 'meteor/mongo';

const surveyData = new Mongo.Collection('surveyData');
export default surveyData;
