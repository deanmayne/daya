const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  username: {
    type: String
  },
  date: {
    type: Date,
  },
});

module.exports = Event = mongoose.model('Event', EventSchema);

