import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ButtonExample from './lib/button/button.example';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';

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
            <li>
              <Link to="/Dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/Layout">Layout</Link>
            </li>            
          </ul>
        </aside>
        <main>
          <Route path="/Icon" component={IconExample}></Route>
          <Route path="/Button" component={ButtonExample}></Route>
          <Route path="/Dialog" component={DialogExample}></Route>
          <Route path="/Layout" component={LayoutExample}></Route>
        </main>
      </div>
    </div>
  </Router>
  , document.getElementById('root'));