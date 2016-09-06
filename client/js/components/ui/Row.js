import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Row = ({ children, className, ...props }) => (
  <div className={classnames('row', className)} {...props}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Row;
