//app/models/user.js
//load the things we need
var mongoose = require('mongoose');

var generalSchema = mongoose.Schema({
	prefix_th: {type: String, required: true},
	prefix_eng: {type: String, required: true},
	fname_th:{type:String,required:true},
	lname_th:{type:String,required:true},
	fname_eng:{type:String,required:true},
	lname_eng:{type:String,required:true},
	nickname:{type:String,required:true},
	sex:{type:String,required:true,enum:['ชาย','หญิง']},
	birthday:{type:Date,required:true},
	bloodenum:{type:String,required:true,enum:['A','B','AB','O']},
	religion:{type:String,required:true},
	shirt_size:{type:String,required:true,enum:['S','M','L','XL']},
	telephone:{type:String,required:true},
	email:{type:String,required:true},
});

var schoolSchema = mongoose.Schema({
	gpax:{type:Number,required:true},
	grade:{type:String,required:true,enum:['4','5','6','ปวช']},
	school_name:{type:String,required:true},
	school_province:{type:String,required:true}
});

var diseaseSchema = mongoose.Schema({
	disease:{type:String},
	allergy_food:{type:String},
	allergy_medic:{type:String},
	medic_need:{type:String},
	accident:{type:String}
});

var parent_info = mongoose.Schema({
	relation: {type:String,required:true},
	name:{type:String,required:true},
	tel:{type:String,required:true},
	email:{type:String,required:true},
	prefix_th: {type: String, required:true}
});

var locationSchema = mongoose.Schema({
	home_number: {type:String,required:true},
	road: {type:String,required:true},
	village: {type:String,required:true},
	lane: {type:String},
	sub_district: {type:String,required:true},
	district: {type:String,required:true},
	province: {type:String,required:true},
	postal_code: {type:String,required:true}
})

var addressSchema = mongoose.Schema({
	address_present:locationSchema,
	address_regis:locationSchema,
	address_parent:locationSchema,
	parent:parent_info,
	parent2:parent_info,
});

var recent_camp = mongoose.Schema({
	camp: {type:String},
	university:{type:String}
})

var future_info = mongoose.Schema({
	department: {type: String},
	faculty:{type:String},
	university:{type:String}
});

var futureSchema = mongoose.Schema({
	one:future_info,
	two:future_info,
	three:future_info,
	interest:[{type:String}],
	one_camp: recent_camp,
	two_camp: recent_camp,
	three_camp: recent_camp,
});

var abilitySchema = mongoose.Schema({
	programming:{type:Number,required:true},
	big_data:{type:Number,required:true},
	flow_chart:{type:Number,required:true},
	microcontroller:{type:Number,required:true},
	brain_storm:{type:Number,required:true},
});

var questionSchema = mongoose.Schema({
	question1: {type:String, required: true},
	question2: {type:String, required: true},
	question3: {type:String, required: true},
	question4: {type:String, required: true},
	question5: {type:String, required: true},
	question6: {type:String, required: true},
	question7: {type:String, required: true},
	question8: {type:String, required: true},
})

var userSchema = mongoose.Schema({	
	facebookId: {type:String},
	displayName: {type:String},
	step0: Boolean,
	general: generalSchema,
	school: schoolSchema,
	disease: diseaseSchema,
	address: addressSchema,
	recent_camp: recent_camp,
	future: futureSchema,
	ability: abilitySchema,
	location: {type: String},
	question: questionSchema,
	tracking_number: {type: String},
	news: [{type: String}]
});

//create the model for users and expose it to our app
module.exports = mongoose.model('users', userSchema);