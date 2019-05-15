
import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function() {
  return (
    <div>
      <div>
        <h1>exmaple1</h1>
        <Layout className="hello" style={{height: 300}}>
          <Header>Header</Header>
          <Content>Content</Content> 
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>exmaple2</h1>
        <Layout className="hello" style={{height: 300}}>
          <Header>Header</Header>
          <Layout>
            <Aside>Aside</Aside>
            <Content>Content</Content> 
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>exmaple3</h1>
        <Layout className="hello" style={{height: 300}}>
          <Aside>Aside</Aside>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content> 
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>

    </div>
  );
};
