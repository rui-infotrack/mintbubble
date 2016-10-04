import Request from 'utils/Request';

export default ({
  findAll() {
    return Request.get('messages');
  }
});
