import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Container = ({ children, className, ...props }) => (
  <div className={classnames('container', className)} {...props}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Container;
