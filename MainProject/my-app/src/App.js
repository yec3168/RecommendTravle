import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

import { LaptopOutlined, NotificationOutlined, UserOutlined, HomeTwoTone} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const { Header, Content, Sider, Footer } = Layout;

// nav 만듦
const items1 = ['1', '2', '3', '4'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


// 왼쪽 메뉴바
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    // 클릭시 option의 갯수를 설정
    children: new Array(5).fill(null).map((_, j) => {
      const subKey = index * 5 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >

        <HomeTwoTone   // 여기에 로고(?) home 위치. 현재는 임시
          style={{
            width:150,
          }}
        />

        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>

      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
            position:'fixed',
            overflow: 'auto',
            height: '100vh',
            left: 0,
            zIndex: 1,
            top: 63,
            bottom: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
           
            items={items2}
          />
        </Sider>
  

        <Content
        style={{
          padding: '0 48px',
          marginLeft: 200 
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item><a href='#'>Home</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href='#'>List</a></Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>

      
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
             Ant Design ©2023 Created by Ant UED
          </Footer>

        </Content>


      </Layout>
    </Layout>
  );
};


export default App;