//app/models/user.js
//load the things we need
var mongoose = require('mongoose');

var generalSchema = mongoose.Schema({
	name_th:{type:String,required:true},
	name_eng:{type:String,required:true},
	nickname:{type:String,required:true},
	sex:{type:String,required:true,enum:['male','female']},
	birthday:{type:Date,required:true},
	blood:{type:String,required:true,enum:['A','B','AB','O']},
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
	email:{type:String,required:true}
});

var addressSchema = mongoose.Schema({
	address_present:{type:String,required:true},
	address_regis:{type:String,required:true},
	address_parent:{type:String,required:true},
	parent:[parent_info],
	recent_camp:{type:String}
});

var future_info = mongoose.Schema({
	faculty:{type:String,required:true},
	university:{type:String,required:true}
});

var futureSchema = mongoose.Schema({
	one:[future_info],
	two:[future_info],
	three:[future_info],
	interest:{type:String}
});

var abilitySchema = mongoose.Schema({
	programming:{type:Number,required:true},
	big_data:{type:Number,required:true},
	flow_chart:{type:Number,required:true},
	microcontroller:{type:Number,required:true},
	brain_storm:{type:Number,required:true},
});

var userSchema = mongoose.Schema({	
	facebookId: String,
	displayName: String,
	step0: Boolean,
	general: [generalSchema],
	school: [schoolSchema],
	disease: [diseaseSchema],
	address: [addressSchema],
	future: [futureSchema],
	ability: [abilitySchema],
});

//create the model for users and expose it to our app
module.exports = mongoose.model('users', userSchema);