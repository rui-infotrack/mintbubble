import React, { PropTypes } from 'react';
import ColorPalette from 'ui/ColorPalette';
import classnames from 'classnames';

const Content = ({ children, whiteText, className }) => (
  <div className={classnames('card-content', { 'white-text': whiteText }, className)}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  whiteText: PropTypes.bool
};

const Title = ({ children, className }) => (
  <span className={classnames('card-title', className)}>{children}</span>
);

Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const Caption = ({ children, className }) => (
  <div className={classnames('card-caption', className)}>{children}</div>
);

Caption.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const Card = ({ color, className, children }) => {
  return (
    <div className={classnames('card', color, className)}>
      {children}
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf(Object.keys(ColorPalette).map(x => ColorPalette[x])),
  className: PropTypes.string,
  children: PropTypes.any
};

Card.Content = Content;
Card.Title = Title;
Card.Caption = Caption;

export default Card;
