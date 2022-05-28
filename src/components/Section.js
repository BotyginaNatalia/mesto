export class Section {
  constructor({renderer}, selectorContainer) {
    this._renderer = renderer;
    this._selectorContainer = document.querySelector(selectorContainer);
  }

  renderItems(items) {
    items.forEach((item) => {
      const newCard = this._renderer(item);
      this.addItem(newCard);
    });
  }

  addItem(element) {
    this._selectorContainer.append(element);
  }
}