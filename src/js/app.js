import ControllerChat from './components/ControllerChat';
import UserData from './components/UserData';
import AddMessage from './components/AddMessage';

const controllerChat = new ControllerChat(document.querySelector('.container'));
const webSocket = new WebSocket('wss://ws-back.herokuapp.com//');
const status = document.querySelector('#status');
const container = controllerChat.element;
const message = controllerChat.enterMessage;
let userName = '';

container.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = controllerChat.getDataFromForm(e);

  data.type = 'authorization';

  userName = data.nickname;

  if (webSocket.readyState === 1) {
    webSocket.send(JSON.stringify(data));
  }
});

message.addEventListener('keydown', (e) => {
  const data = {};
  data.textMessage = container.querySelector('.enter-message').value;

  data.type = 'message';
  data.user = userName;

  if (e.key === 'Enter') {
    e.preventDefault();
    if (webSocket.readyState === 1) {
      webSocket.send(JSON.stringify(data));
      container.querySelector('.enter-message').value = '';
    }
  }
});

webSocket.onmessage = function checkData(event) {
  const typeRes = JSON.parse(event.data);

  if (Object.prototype.hasOwnProperty.call(typeRes, 'nameStatus')) {
    status.innerHTML = typeRes.nameStatus;
  } else if (Object.prototype.hasOwnProperty.call(typeRes, 'usersNames')) {
    const blockContent = document.querySelector('.block-content');
    blockContent.style.display = 'flex';

    container.style.width = '927px';
    container.style.minHeight = '100%';

    const formName = document.querySelector('.formName');
    formName.classList.add('none');

    status.classList.add('none');

    const listItem = new UserData(userName, typeRes.usersNames);
    listItem.createUser();
  } else if (Object.prototype.hasOwnProperty.call(typeRes, 'message')) {
    const listMessage = new AddMessage(container, typeRes, userName);
    listMessage.addMessageNewUser();
  }
};

window.onbeforeunload = () => {
  const body = { type: 'disconnect', name: userName };
  webSocket.send(JSON.stringify(body));
  webSocket.close();
};
