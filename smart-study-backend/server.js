const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

// Initialize the app
const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// Set up file storage with Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Append timestamp to file name
  },
});
const upload = multer({ storage });

// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: 'File upload failed' });
  }
  res.status(200).send({
    message: 'File uploaded successfully',
    fileName: req.file.filename,
  });
});

// Dummy study guide generation endpoint
app.post('/generate-study-guide', (req, res) => {
  const { fileName } = req.body;
  if (!fileName) {
    return res.status(400).send({ error: 'File name is required' });
  }

  // Respond with a dummy study guide
  res.status(200).send({
    summary: `Summary of ${fileName}...`,
    flashcards: ['Flashcard 1', 'Flashcard 2', 'Flashcard 3'],
    quizzes: [{ question: 'What is React?', answer: 'A JavaScript library for building UIs.' }],
  });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
