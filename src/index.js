import favicon from './favicon.svg';
import Header from './components/header/header';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import DuckImage from './components/duck-image/duck-image';

const head = document.querySelector('head');
const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
head.appendChild(link);

const header = new Header();
header.render();

const duckImage = new DuckImage();
duckImage.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
