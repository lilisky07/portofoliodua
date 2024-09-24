import React from 'react';
import WorkItem from '../../molecules/LatestWork/WorkItem';
import './LatestWork.css';
import work from '../../image/Image.png';

const LatestWork = () => {
  const works = [
    {
      id: 1,
      imageSrc: {work},
      title: 'UI Design',
      description: 'Creating responsive user interfaces.',
      
    },
    {
      id: 2,
      title: 'Art Direction',
      description: 'Leading creative design projects.',
      imageUrl: '/image2.png',
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Building interactive websites.',
      imageUrl: '/image3.png',
    },
    {
      id: 4,
      title: 'Branding',
      description: 'Developing brand identity designs.',
      imageUrl: '/image4.png',
    },
    {
      id: 5,
      title: '3D Rendering',
      description: 'Visualizing concepts in 3D.',
      imageUrl: '/image5.png',
    },
    {
      id: 6,
      title: 'Product Design',
      description: 'Creating functional product designs.',
      imageUrl: '/image6.png',
    },
  ];

  return (
    <div>
      <h2 className="latest-work-title">Latest Work</h2>
      <div className="latest-work-container">
        {works.map((work) => (
          <WorkItem
            key={work.id}
            imageUrl={work.imageUrl}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
