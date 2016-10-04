import React, { PropTypes } from 'react';
import Container from 'ui/Container';

const CoreLayout = ({ children }) => {
  return (
    <div>
      <Container>
        {children}
      </Container>
    </div>
  );
};

CoreLayout.propTypes = {
  children: PropTypes.any
};

export default CoreLayout;
