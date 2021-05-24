import React, { useState, Link } from "react";
import { Layout, Menu } from "antd";
import styled, { css } from "styled-components";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { withRouter, NavLink } from "react-router-dom";

const LayoutContainer = styled(Layout)`
  .ant-layout-header {
    padding: 0;
    position: relative;
  }
  .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    position: absolute;
    top: 0;
    left: 200px;
    color: #fff;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;

// const Logo = styled.div`
//   height: 32px;
//   margin: 16px;
//   width: 170px;
//   background: rgba(255, 255, 255, 0.3);
//   ${(props) =>
//     props.collapsed &&
//     css`
//       width: 32px;
//     `}
// `;

const menus = [
  {
    key: "item1",
    name: "서브메뉴1",
    root: "sub1",
    iconNormal: <MailOutlined />,
    shouldDisplay: () => true,
    sub: [
      {
        key: "/",
        name: "홈",
        href: "/",
        shouldDisplay: () => true,
      },
      {
        key: "/about",
        name: "소개",
        href: "/about",
        shouldDisplay: () => true,
      },
      {
        name: "제품관리",
        href: "/products",
        shouldDisplay: () => true,
      },
    ],
  },
  {
    key: "item2",
    name: "서브메뉴2",
    root: "sub2",
    iconNormal: <MailOutlined />,
    shouldDisplay: () => true,
  },
];

// const MenuItem = (props) => {
//   const { data } = props;
//   return (
//     <>
//       {data.map(({ key, name, href, shouldDisplay }) => {
//         <Menu.Item key={key}>
//           {console.log(data)}
//           <NavLink to={href}>{name}</NavLink>
//         </Menu.Item>;
//       })}
//     </>
//   );
// };

const DefaultLayout = (props) => {
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <LayoutContainer>
        <Header className="header">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              background: "#fff",
            }}
          >
            <Menu mode="inline">
              {menus.map(({ key, name, shouldDisplay, iconNormal, sub }) => {
                if (menus.sub !== undefined) {
                  return (
                    <SubMenu key={key} icon={iconNormal} title={name}>
                      {sub.map(({ key, name, href, shouldDisplay }) => {
                        <Menu.Item key={key}>
                          <NavLink to={href}>{name}</NavLink>
                        </Menu.Item>;
                      })}
                    </SubMenu>
                  );
                } else {
                  return undefined;
                }
              })}
              {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Menu">
                <Menu.Item key="/">
                  <NavLink to="/">홈</NavLink>
                </Menu.Item>
                <Menu.Item key="about">
                  <NavLink to="/about">소개</NavLink>
                </Menu.Item>
                <Menu.Item key="profiles">
                  <NavLink to="/profiles">프로필목록</NavLink>
                </Menu.Item>
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </LayoutContainer>
    </>
  );
};

export default withRouter(DefaultLayout);
