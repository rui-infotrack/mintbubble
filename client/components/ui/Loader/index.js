import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './style.styl';

const Loader = ({ className, ...props }) => (
  <div>
    <div className={classnames('preloader-wrapper active', styles.loader, className)} {...props}>
      <div className="spinner-layer spinner-red-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </div>
);

Loader.propTypes = {
  className: PropTypes.string
};

export default Loader;
