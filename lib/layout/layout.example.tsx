
import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';

export default function() {
  return (
    <div>
      <div>
        <h1>exmaple1</h1>
        <Layout style={{height: 300, width: 300}}>
          <Header className="x">Header</Header>
          <Content className="y">Content</Content> 
          <Footer className="x">Footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>exmaple2</h1>
        <Layout style={{height: 300, width: 300}}>
          <Header className="x">Header</Header>
          <Layout>
            <Aside className="z">Aside</Aside>
            <Content className="y">Content</Content> 
          </Layout>
          <Footer className="x">Footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>exmaple3</h1>
        <Layout style={{height: 300, width: 300}}>
          <Aside className="z">Aside</Aside>
          <Layout>
            <Header className="x">Header</Header>
            <Content className="y">Content</Content> 
            <Footer className="x">Footer</Footer>
          </Layout>
        </Layout>
      </div>

    </div>
  );
};
