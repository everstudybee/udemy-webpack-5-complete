import Header from '../components/header/header';
import ShipImage from '../components/ship-image/ship-image';
import React from 'react';

const header = new Header();
header.render('ship page');

const shipImage = new ShipImage();
shipImage.render();
