import duck from './duck.jpg';
import favicon from './favicon.svg';

export default function () {
    const body = document.querySelector('body');
    const img = document.createElement('img');
    const head = document.querySelector('head');
    const link = document.createElement('link');

    img.alt = 'Duck';
    img.width = 300;
    img.src = duck;
    body.appendChild(img);

    link.rel = 'icon';
    link.href = favicon;
    head.appendChild(link);
};

