const mongoose = require('mongoose');


const ObjectId = mongoose.Schema.Types.ObjectId;
const campaignSchema = new mongoose.Schema({
      id: {
            type: Number,
            required: true
      },
      short_token: {
            type: String,
            required: true,
            unique: true      
      },
      name: {
            type: String,
            required: true
      },
      offers: [{
           type:String,
             required: true
      }],
      enabled: {
            type: Boolean,
            required: true
      }
},{ timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);







//  Create campaigns collection to store following information about each
//   campaign : id, short_token, name, offers (array), enabled (boolean).
//    Each object in offers array should contain following 
//    information : offer_url, ratio_percentage. Note that, 
//    short_token field should have unique index defined.