import {homePage} from './components/home'
import {tabController} from './components/tab-controller'



homePage.createHomePage();

const pageLoadAtHome = tabController.getCurrentTab();

tabController.notCurrentTab(pageLoadAtHome);

