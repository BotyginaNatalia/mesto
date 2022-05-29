export class Section {
  constructor({renderer}, container) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  renderItems(items) {
    items.reverse().forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}