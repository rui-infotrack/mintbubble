import { observable } from 'mobx';
import Request from 'network/Request';

class MessageStore {
  @observable isLoading = false;
  @observable messages = [];

  loadMessages() {
    this.isLoading = true;
    Request.get('messages')
      .then(response => response.json())
      .then(function(response) {
        this.isLoading = false;
        this.messages = response;
      }.bind(this));
  }
}

const instance = new MessageStore();

export default instance;
