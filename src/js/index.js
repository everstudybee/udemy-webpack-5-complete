import TopMenu from '../components/top-menu/top-menu';
import Header from '../components/header/header';
import _ from 'lodash';

const topMenu = new TopMenu();
const header = new Header();

topMenu.render();
header.render(_.upperFirst('home page'));
