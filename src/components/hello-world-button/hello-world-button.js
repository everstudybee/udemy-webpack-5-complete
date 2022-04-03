import './hello-world-button.css';

export default class HelloWorldButton {
    render () {
        const button = document.createElement('button');
        const body = document.querySelector('body');

        button.innerHTML = 'Hello world';
        button.classList.add('hello-world-button');
        button.addEventListener('click', ()=>{
            const p = document.createElement('p');
            p.innerText = 'Hello World in paragraf!!!';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        })
        body.appendChild(button);
    }
}

