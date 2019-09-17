import ViewBase from './ViewBase.js';
import ViewModel from '../model/ViewModel.js';

const SCREEN_TEMPLATE = ({title, content}) => `<div><strong>${title}</strong><div class="content">${content}</div></div>`

class ScreenView extends ViewBase {
  constructor(element, viewModel) {
    super(element, viewModel);
  }

  init() {
    this._template = SCREEN_TEMPLATE;
    this._contentWrap = this._container;

    this.setVMListeners(vmListeners);
  }

  renderView(currentContent) {
    this._contentWrap.innerHTML = this._template(currentContent);
  }

  _render(vm) {
    this.renderView(vm._currentContent);
  }
}

const vmListeners = {
  [ViewModel.CHANGE_TAB](event) {
    this.renderView(event.target._currentContent);
  }
}
export default ScreenView;