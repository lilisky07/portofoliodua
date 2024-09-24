import React from 'react';

import WorkTitle from '../../atoms/LatestWork/WorkTitle';
import WorkDescription from '../../atoms/LatestWork/WorkDescription';
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
