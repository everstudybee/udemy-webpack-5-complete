import Header from '../components/header/header';
import ShipImage from '../components/ship-image/ship-image';
import _ from 'lodash';

const header = new Header();
header.render(_.upperFirst('ship page'));

const shipImage = new ShipImage();
shipImage.render();
