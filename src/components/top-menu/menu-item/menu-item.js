export default class MenuItem {
    render(anchor, path){
        const link = document.createElement('a');
        link.href = path;
        link.innerText = anchor;
        link.classList.add('link');

        return link;
    }
}
