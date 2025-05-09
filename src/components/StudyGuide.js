// src/components/StudyGuide.js
import React from 'react';
import { Card } from 'antd';

const StudyGuide = ({ summary, flashcards, quizzes }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Card title="Summary" style={{ marginBottom: '20px' }}>
        <p>{summary}</p>
      </Card>
      <Card title="Flashcards" style={{ marginBottom: '20px' }}>
        <ul>
          {flashcards.map((flashcard, index) => (
            <li key={index}>{flashcard}</li>
          ))}
        </ul>
      </Card>
      <Card title="Quizzes">
        <ul>
          {quizzes.map((quiz, index) => (
            <li key={index}>{quiz}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default StudyGuide;
