import duck from './duck-image.jpg';
import altText from './altText.txt';
import './duck-image.css';

export default class DuckImage {
    render () {
        const body = document.querySelector('body');
        const img = document.createElement('img');

        img.alt = altText;
        img.width = 300;
        img.src = duck;
        img.classList.add('img');
        body.appendChild(img);
    }
};

