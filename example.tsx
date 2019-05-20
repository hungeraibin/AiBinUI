import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import FormExample from './lib/form/form.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import { Layout, Header, Footer, Content, Aside } from './lib/layout/layout';
import './example.scss';

// const logo = require('./logo.png'); 

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          {/* <img src={logo} width="48"/> */}
          <span>AiBinUI</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/Icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/Dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/Layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/Form">Form</NavLink>
            </li>          
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/Icon" component={IconDemo}></Route>
          <Route path="/Dialog" component={DialogExample}></Route>
          <Route path="/Layout" component={LayoutExample}></Route>
          <Route path="/Form" component={FormExample}></Route>
        </Content>
      </Layout>
      <Footer className="site-footer">
        @copyright 王爱彬
      </Footer>
    </Layout>
  </Router>
  , document.getElementById('root'));