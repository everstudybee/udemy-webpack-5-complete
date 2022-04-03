import Header from '../components/header/header';
import HelloWorldButton
    from '../components/hello-world-button/hello-world-button.js';
import DuckImage from '../components/duck-image/duck-image';
import _ from 'lodash';
import React from 'react';
import TopMenu from '../components/top-menu/top-menu';

const topMenu = new TopMenu();
topMenu.render();

const header = new Header();
header.render(_.upperFirst('duck page'));

const duckImage = new DuckImage();
duckImage.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

// mode verification is not necessary
if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
} else {
    console.log('Mode unknown');
}
