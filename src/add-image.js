import duck from './duck.jpg';

export default function () {
    const body = document.querySelector('body');
    const img = document.createElement('img');

    img.alt = 'Duck';
    img.width = 300;
    img.src = duck;

    body.appendChild(img);
};

