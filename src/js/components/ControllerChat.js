import messageContainer from './messageContainer';

export default class ControllerChat {
  constructor(element) {
    if (typeof element === 'string') {
      this.element = document.querySelector(element);
    }
    this.element = element;
    this.formName = this.element.querySelector('.formName');

    messageContainer();
    this.enterMessage = this.element.querySelector('.enter-message');
  }

  getDataFromForm() {
    const data = {};

    [...this.formName.elements].forEach((elem) => {
      if (!elem.name) {
        return;
      }

      data[elem.name] = elem.value;
    });

    this.element.querySelector('.nickname').value = '';

    return data;
  }
}
