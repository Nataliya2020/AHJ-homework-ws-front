export default class AddMessage {
  constructor(container, dataMessage, userName) {
    this.container = container;
    this.usersContainer = this.container.querySelector('.users-messages');
    this.dataMessage = dataMessage;
    this.userName = userName;
  }

  addMessageNewUser() {
    const listUserMessage = document.createElement('ul');
    listUserMessage.classList.add('list');

    for (const item of this.dataMessage.message) {
      const listItemUserMessage = document.createElement('li');
      listItemUserMessage.classList.add('list-item');

      const liUserMessage = document.createElement('div');

      if (item.author === this.userName) {
        liUserMessage.classList.add('li-user-message');
      } else {
        liUserMessage.classList.add('li-other-message');
      }

      const metaDataUser = document.createElement('div');

      if (item.author === this.userName) {
        metaDataUser.classList.add('meta-data-user');
        metaDataUser.textContent = `You, ${item.time}`;
      } else {
        metaDataUser.classList.add('meta-data-other');
        metaDataUser.textContent = `${item.author}, ${item.time}`;
      }

      const userMessage = document.createElement('div');
      userMessage.textContent = `${item.message}`;

      liUserMessage.appendChild(metaDataUser);
      liUserMessage.appendChild(userMessage);
      listItemUserMessage.appendChild(liUserMessage);
      listUserMessage.appendChild(listItemUserMessage);
      this.usersContainer.appendChild(listUserMessage);
    }
  }
}
