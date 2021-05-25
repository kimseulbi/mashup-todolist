import React, { useState } from "react";
import { Col, Layout, Menu, Row } from "antd";
import styled, { css } from "styled-components";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { withRouter, Link } from "react-router-dom";
import { Content, Footer } from "antd/lib/layout/layout";
import logolight from "../assets/images/logo-light.png";
import logosm from "../assets/images/logo-sm.png";

const LayoutContainer = styled(Layout)`
  .button-menu-mobile {
    transition: all 0.2s ease-out;
  }
  .logo-lg,
  .logo-sm {
    padding: 25px;
  }
`;
const SiteLayout = styled(Layout)`
  margin-left: ${({ collapsed }) => (!collapsed ? "200px" : "80px")};
`;
const FooterContainer = styled(Footer)`
  padding: 19px 15px 20px;
  color: #98a6ad;
  background-color: #fff;
  transition: all 0.2s ease-out;
`;
const ContentContainer = styled(Content)`
  overflow: hidden;
  padding: 0 15px 65px 15px;
  min-height: 80vh;
  margin-top: 110px;
`;

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
        key: "/products",
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
  {
    key: "item3",
    name: "서브메뉴3",
    root: "sub2",
    iconNormal: <MailOutlined />,
    shouldDisplay: () => true,
    sub: [
      {
        key: "itme3-1",
        name: "서브메뉴3-1",
        shouldDisplay: () => true,
        // subItme: [
        //   {
        //     key: "itm3-1-1",
        //     name: "서브",
        //     href: "/sub",
        //     shouldDisplay: () => true,
        //   },
        //   {
        //     key: "itm3-1-2",
        //     name: "서브",
        //     href: "/sub",
        //     shouldDisplay: () => true,
        //   },
        // ],
      },
    ],
  },
];

const DefaultLayout = (props) => {
  const { Header, Sider } = Layout;
  const { SubMenu } = Menu;
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <LayoutContainer>
        <Header className="navbar-custom">
          <div className="logo-box" style={{ width: !collapsed ? 200 : 80 }}>
            <div className="logo text-center">
              {!collapsed ? (
                <Link to="/" className="logo-lg">
                  <img src={logolight} alt="로고" height="66" />
                </Link>
              ) : (
                <Link to="/" className="logo-sm">
                  <img src={logosm} alt="로고" height="26" />
                </Link>
              )}
            </div>
          </div>
          <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
              <button
                className="button-menu-mobile waves-effect waves-light"
                onClick={toggle}
              >
                <i className="fe-menu" />
              </button>
            </li>
          </ul>
          <Row className="row pt-b1">{/* <SecurityLevel /> */}</Row>
        </Header>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            background: "#fff",
          }}
          className="left-side-menu"
        >
          <Menu mode="inline">
            {menus.map(({ key, name, shouldDisplay, iconNormal, sub }) => {
              if (sub !== undefined) {
                return (
                  <SubMenu key={key} icon={iconNormal} title={name}>
                    {sub.map(({ key, name, href, shouldDisplay, subItme }) => {
                      if (subItme !== undefined) {
                        return (
                          <SubMenu key={key} title={name}>
                            {subItme.map((key, name, href, shouldDisplay) => {
                              return (
                                <Menu.Item key={key}>
                                  <Link to={href}>{name}</Link>
                                </Menu.Item>
                              );
                            })}
                          </SubMenu>
                        );
                      } else {
                        return (
                          <Menu.Item key={key}>
                            <Link to={href}>{name}</Link>
                          </Menu.Item>
                        );
                      }
                    })}
                  </SubMenu>
                );
              } else {
                return (
                  <SubMenu key={key} icon={iconNormal} title={name}></SubMenu>
                );
              }
            })}
          </Menu>
        </Sider>
        <SiteLayout className="site-layout" collapsed={collapsed}>
          <ContentContainer className="bgnone">
            <div className="content">
              <div className="container-fluid">{children}</div>
            </div>
          </ContentContainer>
          <FooterContainer>
            <div className="container-fluid">
              <Row>
                <Col md={12}>
                  COPYRIGHT©2020
                  <Link to="http://www.hunesion.com/"> HUNESION </Link>
                  ALL RIGHTS RESERVED.
                </Col>
              </Row>
            </div>
          </FooterContainer>
        </SiteLayout>
      </LayoutContainer>
    </>
  );
};

export default withRouter(DefaultLayout);
