export class Section {
  constructor({renderer}, selectorContainer) {
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
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