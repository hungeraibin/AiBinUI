import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ButtonExample from './lib/button/button.example';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import { Layout, Header, Footer, Content, Aside } from './lib/layout/layout';
import './example.scss';

const logo = require('./logo.png'); 

ReactDOM.render(
  <Router>
    <Layout className="page">
      <Header>
        <div className="logo">
          <img src={logo}/>
          AiBinUI
        </div>
      </Header>
      <Layout>
        <Aside>
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
        </Aside>
        <Content>
          <Route path="/Icon" component={IconExample}></Route>
          <Route path="/Button" component={ButtonExample}></Route>
          <Route path="/Dialog" component={DialogExample}></Route>
          <Route path="/Layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer>
        Footer
      </Footer>
    </Layout>
  </Router>
  , document.getElementById('root'));