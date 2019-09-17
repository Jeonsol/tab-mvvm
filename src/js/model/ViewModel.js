import EventEmitter from '../events/EventEmitter.js';
import Model from './Model.js';

class ViewModel extends EventEmitter {
  static get CHANGE_TAB() {
    return 'changeTab';
  }

  constructor(model, {activeTab = 'a'}) {
    super();

    const validModel = model instanceof Model;

    if (!validModel) {
      throw 'Invalid Model!';
    }

    this._model = model;
    this._activeTab = activeTab;
    this._currentContent = this.contentList[0];
  }

  get tabList () {
    return this._model.tabData;
  }

  get contentList () {
    return this._model.screenData;
  }

  get activeTab () {
    return this._activeTab;
  }

  set activeTab (value) {
    this._activeTab = value;
    this.currentContent = this._activeTab;

    this.emit(ViewModel.CHANGE_TAB);
  }

  set currentContent (activeTab) {
    this._currentContent = [...this.contentList].find(item => {
      return item.title === activeTab
    });
  }

  get currentContent () {
    return this._activeTab;
  }
}

export default ViewModel;