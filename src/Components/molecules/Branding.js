import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/ButtonHeader';

const Branding = () => {
  return (
    <div style={{ paddingLeft: '80px', marginTop: '50px' , textAlign: 'left'}}>
      <Text content="Branding | 3D Making" size="18px" />
      <Text content="Visual Designer" size="68px" weight="600" />
      <Text content="We create amazing solutions for your business." size="16px" />
      <Button label="Contact Us" />
    </div>
  );
};

export default Branding;
