import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'ui/Container';
import Row from 'ui/Row';
import Message from 'components/Message';
import Loader from 'ui/Loader';
import * as MessageActions from 'actions/MessageActions';

class MessagesView extends Component {
  componentDidMount() {
    const { getMessages } = this.props.actions;

    getMessages();
  }

  render() {
    const { isLoading } = this.props.messageReducer;

    if (isLoading) {
      return (
        <Container>
          <Loader />
        </Container>
      );
    }

    const { messages } = this.props.messageReducer;

    return (
      <Container>
        {messages.map(x => (
          <Row key={x.id}>
            <Message title={x.title} role={x.role}>{x.content}</Message>
          </Row>
        ))}
      </Container>
    );
  }
}

MessagesView.propTypes = {
  messageReducer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    messageReducer: state.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MessageActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesView);
