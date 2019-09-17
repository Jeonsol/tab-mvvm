import TabView from './view/TabView.js';
import ScreenView from './view/ScreenView.js';
import ViewModel from './model/ViewModel.js';
import Model from './model/Model.js';

const tabData = ['a', 'b', 'c', 'd', 'e', 'f'];
const screenData = [
  {
    title: 'a',
    content: 'aa'
  },
  {
    title: 'b',
    content: 'bb'
  },
  {
    title: 'c',
    content: 'cc'
  },
  {
    title: 'd',
    content: 'dd'
  },
  {
    title: 'e',
    content: 'ee'
  },
  {
    title: 'f',
    content: 'f'
  }
];

const model = window.model = new Model(tabData, screenData);
const viewModel = window.viewModel = new ViewModel(model, { activeTab: 'a' });

const TabContainer = document.getElementById('tabList');
const ScreenContainer = document.getElementById('screen');

const Tab = window.tabView = new TabView(TabContainer, viewModel);
const Screen = window.screenView = new ScreenView(ScreenContainer, viewModel);