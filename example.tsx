import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ButtonExample from './lib/button/button.example';
import IconExample from './lib/icon/icon.example';

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          AiBinUI
        </div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/Icon">Icon</Link>
            </li>
            <li>
              <Link to="/Button">Button</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/Icon" component={IconExample}></Route>
          <Route path="/Button" component={ButtonExample}></Route>
        </main>
      </div>
    </div>
  </Router>
  , document.getElementById('root'));