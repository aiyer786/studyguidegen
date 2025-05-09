// src/pages/Home.js
import React, { useState } from 'react';
import UploadFiles from '../components/UploadFiles';
import { uploadCourseMaterial } from '../utils/api';

const Home = () => {
  const [uploadResponse, setUploadResponse] = useState(null);

  const handleUpload = async (formData) => {
    try {
      const response = await uploadCourseMaterial(formData);
      setUploadResponse(response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <h1>Smart Study Guide Generator</h1>
      <UploadFiles onUpload={handleUpload} />
      {uploadResponse && <p>Materials uploaded successfully! Study guide will be generated soon.</p>}
    </div>
  );
};

export default Home;
