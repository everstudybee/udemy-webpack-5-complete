import MenuItem from './menu-item/menu-item';
import './top-menu.scss';

export default class TopMenu {
    render () {
        const body = document.querySelector('body');
        const topMenu = document.createElement('div');
        const home = new MenuItem();
        const helloWorld = new MenuItem();
        const ship = new MenuItem();

        topMenu.classList.add('top-menu');
        topMenu.appendChild(home.render('Home', 'index.html'));
        topMenu.appendChild(
            helloWorld.render('Hello World', 'hello-world.html'));
        topMenu.appendChild(ship.render('Ship', 'ship.html'));

        body.appendChild(topMenu);
    }
}
