import React, { Component, PropTypes } from 'react';
import Card from 'ui/Card';
import ColorPalette from 'ui/ColorPalette';
import classnames from 'classnames';

class Message extends Component {
  renderContent() {
    const { title, children, role = 'client' } = this.props;

    return (
      <Card color={role === 'authority' ? ColorPalette.LIME2 : null}>
        <Card.Content>
          <Card.Title>{title}</Card.Title>
          <div>
            {children}
          </div>
        </Card.Content>
      </Card>
    );
  }

  render() {
    const { role } = this.props;
    return (
      <div className={classnames('col s8', { 'offset-s4': role === 'client' })}>
        {this.renderContent()}
      </div>
    );
  }
}

Message.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.children,
  role: PropTypes.role
};

export default Message;
