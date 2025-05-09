import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { uploadCourseMaterial, generateStudyGuide } from '../utils/api';

const UploadFiles = () => {
  const [fileList, setFileList] = useState([]);
  const [studyGuide, setStudyGuide] = useState(null);

  const handleChange = ({ file, fileList }) => {
    setFileList(fileList);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      fileList.forEach((file) => formData.append('file', file.originFileObj));

      const uploadResponse = await uploadCourseMaterial(formData);
      const fileName = uploadResponse.data.fileName; // Get the uploaded file name

      const studyGuideResponse = await generateStudyGuide(fileName); // Generate study guide
      setStudyGuide(studyGuideResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <Upload multiple={false} onChange={handleChange} beforeUpload={() => false}>
        <Button icon={<UploadOutlined />}>Upload Course Material</Button>
      </Upload>
      <Button type="primary" onClick={handleUpload} style={{ marginTop: '10px' }}>
        Generate Study Guide
      </Button>

      {studyGuide && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated Study Guide</h2>
          <p><b>Summary:</b> {studyGuide.summary}</p>
          <p><b>Flashcards:</b></p>
          <ul>
            {studyGuide.flashcards.map((flashcard, index) => (
              <li key={index}>{flashcard}</li>
            ))}
          </ul>
          <p><b>Quizzes:</b></p>
          <ul>
            {studyGuide.quizzes.map((quiz, index) => (
              <li key={index}>{quiz.question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadFiles;
