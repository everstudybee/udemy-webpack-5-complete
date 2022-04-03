import './header.scss';

export default class Header {
    render(){
        const header = document.createElement('h1');
        const body = document.querySelector('body');

        header.innerText = 'Hello!!! Welcome in Duck World';
        header.classList.add('header');

        body.appendChild(header);
    }
}
