import ViewBase from './ViewBase.js';
import ViewModel from '../model/ViewModel.js';

const TAB_TEMPLATE = ({name, tabName}) => `<li class="list"><button type="button" class="tab" data-name="${name}">${tabName}</button></li>`

class TabView extends ViewBase {
  constructor(element, viewModel) {
    super(element, viewModel);
  }

  init() {
    this._template = TAB_TEMPLATE;
    this._listWrap = this._container;
    this._items = null;

    this.setVMListeners(vmListeners);
    this.setUIListeners(uiListeners);
  }

  renderList(list) {
    const callback = this._uiLis.onClickTab;

    if (this._items) {
      this._items.forEach(element => element.removeEventListener('click', callback));
    }

    this._listWrap.innerHTML = [...list].map(this._template).join('');
    this._items = this._listWrap.querySelectorAll('.tab');

    this._items.forEach(element => element.addEventListener('click', callback));
  }

  changeTab(activeTab) {
    const selectedTab = this._listWrap.querySelector('.selected');
    const currentTab = Array.from(this._items).find(element => element.getAttribute('data-name') === activeTab);

    if (selectedTab === currentTab) {
      return;
    }

    if (selectedTab) {
      selectedTab.classList.remove('selected');
    }

    if (currentTab) {
      currentTab.classList.add('selected');
    }
  }

  _render(vm) {
    this.renderList(vm.tabList);
    this.changeTab(vm.activeTab);
  }
}

const vmListeners = {
  [ViewModel.CHANGE_TAB](event) {
    this.changeTab(event.target.activeTab);
  }
}

const uiListeners = {
  onClickTab(event) {
    event.preventDefault();

    if (this.hasViewModel) {
      const tab = event.currentTarget;
      const activeTab = tab.getAttribute('data-name');

      this._viewModel.activeTab = activeTab;
    }
  }
}

export default TabView;