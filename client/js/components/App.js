import React, { Component } from 'react';
import Container from 'ui/Container';
import Row from 'ui/Row';
import Message from 'components/Message';
import Loader from 'ui/Loader';
import MessageStore from 'stores/MessageStore';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  componentWillMount() {
    MessageStore.loadMessages();
  }

  render() {
    if (MessageStore.isLoading) {
      return (
        <Container>
          <Loader />
        </Container>
      );
    }
    return (
      <Container>
        {MessageStore.messages.map(x => (
          <Row>
            <Message title={x.title} role={x.role}>{x.content}</Message>
          </Row>
        ))}
      </Container>
    );
  }
}

export default App;
