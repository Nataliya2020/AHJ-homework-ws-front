export default function messageContainer() {
  const container = document.querySelector('.container');

  const blockContent = document.createElement('div');
  blockContent.classList.add('block-content');

  const usersList = document.createElement('div');
  usersList.classList.add('users-list');

  const list = document.createElement('ul');
  list.classList.add('list');

  const usersMessagesContainer = document.createElement('div');
  usersMessagesContainer.classList.add('users-messages-container');

  const usersMessages = document.createElement('div');
  usersMessages.classList.add('users-messages');

  const enterMessage = document.createElement('textarea');
  enterMessage.classList.add('enter-message');
  enterMessage.setAttribute('name', 'message');
  enterMessage.setAttribute('placeholder', 'Type your message here');

  container.appendChild(blockContent);

  blockContent.appendChild(usersList);

  usersList.appendChild(list);

  blockContent.appendChild(usersMessagesContainer);

  usersMessagesContainer.appendChild(usersMessages);

  usersMessagesContainer.appendChild(enterMessage);

  blockContent.style.display = 'none';
}
