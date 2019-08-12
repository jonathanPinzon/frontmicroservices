import React from 'react'
import { navigateToUrl } from 'single-spa'
const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">REACT NAVBAR</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/" onClick={navigateToUrl}>Home</a></li>
        {/* <li><a href="/angular" onClick={navigateToUrl}>Angular</a></li> */}
        <li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
      </ul>
      <a onClick={displayHello} style={{...styles.positioning}}>
        Say Hello to angularjs
      </a>
    </div>

  </nav>
)
function displayHello (){ 
  debugger; 
  sessionStorage.setItem("uno","hola sessionstorage");
  window.e.emit('displayHello', { foo: 'hello everyone!!! this is a message from a react app' }); 
}

const styles = {};
styles.positioning = {
  transform: "translateX(300px)",
  position: "absolute",
  cursor: "pointer"
}
export default NavBar