export default class Model {
  constructor(tabData, screenData) {
    this.tabData = [...tabData].map(value => this._createTabData(value));
    this.screenData = screenData;
  }

  getTabData() {
    return this.tabData;
  }

  _createTabData (value) {
    return Object.assign({}, {
      name: value,
      tabName: value
    })
  }
}