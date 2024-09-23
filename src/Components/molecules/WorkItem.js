import React from 'react';

import WorkTitle from '../atoms/WorkTitle';
import WorkDescription from '../atoms/WorkDescription';
import './WorkItem.css';

const WorkItem = ({ imageUrl, title, description }) => {
  return (
    <div className="work-item">
     
      <WorkTitle title={title} />
      <WorkDescription description={description} />
    </div>
  );
};

export default WorkItem;
