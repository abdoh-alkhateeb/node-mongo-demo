const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  audioUrl: { type: String, required: true },
  duration: { type: Number },
});

const AudiobookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    narrator: { type: String },
    coverUrl: { type: String },
    description: { type: String },
    genre: { type: String },
    releaseDate: { type: Date },
    chapters: [ChapterSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Audiobook', AudiobookSchema);
