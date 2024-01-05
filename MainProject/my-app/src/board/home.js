import React from 'react';
import {BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";

import { 
  LaptopOutlined,
  NotificationOutlined, 
  UserOutlined, 
  HomeOutlined,
  CommentOutlined,
  LoginOutlined,
  PlusOutlined,} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';

import login from './user/login';
import signup from './user/signup';

const { Header, Content, Sider, Footer } = Layout;



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




const home = () => {
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
        
      <BrowserRouter>
      <Routes>
        <Route path='/login' Component={login}></Route>
        <Route path='/home' Component={App}></Route>
        <Route path='/signup' Component={signup}></Route>
      </Routes>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            {
              label: <NavLink to= {"/"}>Home</NavLink>,
              key: 'nav_home',
              icon: <HomeOutlined />,
            },
            {
              label: <a href='/board'>Board</a>,
              key: 'nav_community',
              icon: <CommentOutlined />,
            },
            {
              label: <NavLink to={"/signup"}>SIGNUP</NavLink>,
              key: 'nav_signup',
              icon: <PlusOutlined />,
            },
            {
              label: <NavLink to={"/login"}>LOGIN</NavLink>,
              key: 'nav_login',
              icon: <LoginOutlined />,
            },
          ]}
          style={{
            flex: 1,
            minWidth: 0,
            
          }}
        />
      
      </BrowserRouter>
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
            <BrowserRouter>           
              <div style={{padding:20, border:'5px solid gray'}}>
                <Link to="/home">홈</Link><br/>    
                <Link to="/photo">사진</Link><br/>
                <Link to="/introduce">방 소개</Link><br/>
              </div>
            </BrowserRouter>

            <svg xmlns='south-korea.svg' viewBox='0 0 524 631'>
               
            </svg>
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


export default home;