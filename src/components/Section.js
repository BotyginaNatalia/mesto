export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;

    this._containerElement = document.querySelector(containerSelector);
  }

  renderSectionItems(items) {
    items.forEach((item) => {
      const card = this._renderer(item);
      this.setItem(card);
    });
  }

  setItem(element) {
    this._containerElement.prepend(element);
  }
}
