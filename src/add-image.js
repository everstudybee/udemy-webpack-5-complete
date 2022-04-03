import duck from './duck.jpg';
import favicon from './favicon.svg';
import altText from './altText.txt';

export default function () {
    const body = document.querySelector('body');
    const img = document.createElement('img');
    const head = document.querySelector('head');
    const link = document.createElement('link');

    img.alt = altText;
    img.width = 300;
    img.src = duck;
    body.appendChild(img);

    console.log(img);

    link.rel = 'icon';
    link.href = favicon;
    head.appendChild(link);
};

