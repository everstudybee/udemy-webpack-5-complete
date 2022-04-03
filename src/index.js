import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import duckImage from './components/duck-image/duck-image';
import favicon from './favicon.svg';

const head = document.querySelector('head');
const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
head.appendChild(link);

duckImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
