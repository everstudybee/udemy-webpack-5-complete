import './header.scss';

export default class Header {
    render(pageName){
        const header = document.createElement('h1');
        const body = document.querySelector('body');

        header.innerText = `Hello!!! Welcome in ${pageName}`;
        header.classList.add('header');

        body.appendChild(header);
    }
}
