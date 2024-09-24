import React from 'react';
import Text from '../../atoms/Header/Text.js';
import ButtonHeader from '../../atoms/Header/ButtonHeader.js';

const Branding = () => {
  return (
    <div style={{ paddingLeft: '80px', marginTop: '50px' , textAlign: 'left'}}>
      <Text content="Branding | 3D Making" size="18px" />
      <Text content="Visual Designer" size="68px" weight="600" />
      <Text content="We create amazing solutions for your business." size="16px" />
      <ButtonHeader label="Contact Us" />
    </div>
  );
};

export default Branding;
