// src/components/Dashboard.js
import React from 'react';
import { Card, List } from 'antd';

const Dashboard = ({ studyGuides }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Card title="Your Study Materials" bordered={false}>
        <List
          dataSource={studyGuides}
          renderItem={(item) => (
            <List.Item>
              <a href={item.link}>{item.title}</a>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
