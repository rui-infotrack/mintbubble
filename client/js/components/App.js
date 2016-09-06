import React from 'react';
import Container from 'ui/Container';
import Row from 'ui/Row';
import Message from 'components/Message';

const App = () => (
  <Container>
    <Row>
      <Message title="I'm Authority" role="authority">Hello world</Message>
      <Message title="I'm Client" role="client">Hello world</Message>
      <Message title="I'm Client" role="client">Hello world</Message>
      <Message title="I'm Authority" role="authority">Hello world</Message>
    </Row>
  </Container>
);

export default App;
