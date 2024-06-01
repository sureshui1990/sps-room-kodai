import React from "react";
import {
  ConfigProvider,
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Typography,
  Col,
  Row,
} from "antd";
import Banner from './components/Banner';

import Services from './components/Services';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const items = [
  {
    key:'1',
    label:'Services'
  },
  {
    key:'12',
    label:'About us'
  },
  {
    key:'123',
    label:'Gallery'
  },
  {
    key:'12345',
    label:'Contact us'
  }
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="app-container">
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Row style={{width:'100%'}}>
              <Col span={6}>
                <div className="demo-logo">
                  <Title
                    level={1}
                    color="colorBgContainer"
                    style={{ color: "#fff",margin:'9px 0' }}
                  >
                    SPS Rooms
                  </Title>
                </div>
              </Col>

              <Col span={12}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                  items={items}
                  style={{ flex: 1, minWidth: 0 }}
                />
              </Col>
            </Row>
          </Header>
          <Content style={{ padding: "0 48px" }}>
            <Breadcrumb
              style={{ margin: "16px 0" }}
              items={[{ title: "home" }, { title: "contact" }]}
            />
            <div
              style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Banner />
              <Services />
              
            </div>
          </Content>
        </Layout>
      </ConfigProvider>
    </div>
  );
};

export default App;
