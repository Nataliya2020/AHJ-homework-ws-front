export default class UserData {
  constructor(user, users) {
    this.user = user;
    this.users = users;
  }

  createUser() {
    const userList = document.querySelector('.list');
    const lies = userList.querySelectorAll('li');
    if (lies) {
      for (const li of lies) {
        li.remove();
      }
    }

    for (const user of this.users) {
      const list = document.querySelector('.list');

      const listItem = document.createElement('li');
      listItem.classList.add('list-item');

      const userPic = document.createElement('div');
      userPic.classList.add('user-pic');

      const userName = document.createElement('div');

      if (user === this.user) {
        userName.classList.add('user-name');
        userName.textContent = 'You';
      } else {
        userName.textContent = `${user}`;
      }

      listItem.append(userPic);
      listItem.append(userName);
      list.appendChild(listItem);
    }
  }
}
