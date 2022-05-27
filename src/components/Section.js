export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderSectionItems(items) {
    items.forEach((item) => {
      const newCard = this._renderer(item);
      this.setItem(newCard);
    });
  }

  setItem(element) {
    this._containerSelector.prepend(element);
  }
}