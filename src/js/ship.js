import Header from '../components/header/header';
import ShipImage from '../components/ship-image/ship-image';
import React from 'react';
import _ from 'lodash';
import TopMenu from '../components/top-menu/top-menu';

const topMenu = new TopMenu();
topMenu.render();


const header = new Header();
header.render(_.upperFirst('ship page'));

const shipImage = new ShipImage();
shipImage.render();
