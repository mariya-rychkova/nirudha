const mongoose = require('mongoose');

const mindmapSchema = mongoose.Schema({
  title: {type: string, required: true},
  description: {type: string, required: true},
  imageUrl: {type: string, required: true},
  userId: {type: string, required: true},
});

module.exports = mongoose.model('Mindmap', mindmapSchema);
