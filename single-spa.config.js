import { registerApplication, start } from 'single-spa'
import Eev from 'eev';
registerApplication(
    // Name of our single-spa application
    'home',
    // loadingFunction
    () => import('./src/home/home.app.js'),
    // activityFunction
    (location) => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/home')
);

registerApplication(
    'navBar',
    () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
    () => true  // this true value means that this application will always be displayed in the page.
);

registerApplication(
    'angularJS',
    () => import('./src/angularJS/angularJS.app.js'),
    pathPrefix('/angularJS')
);

function pathPrefix(prefix) {
    return function (location) {
        return location.pathname.startsWith(prefix);
    }
}

window.e = new Eev();

start();