import ship from './ship-image.jpg';
import './ship-image.scss';

export default class ShipImage {
    render () {
        const img = document.createElement('img');
        const body = document.querySelector('body');

        img.src = ship;
        img.alt = 'ship';
        img.classList.add('ship-image');
        body.appendChild(img);
    }
}
