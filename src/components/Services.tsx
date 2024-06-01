// src/Components/Container .jsx
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const Container: React.FC = () => {
  return (
    <div className="services">
      <Row>
        <Col sm={24}>
          <Title level={2} >Services</Title>
        </Col>
      </Row>
      <Row>
        <Col span={8}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</Col>
        <Col span={8}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.</Col>
        <Col span={8}>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc</Col>
      </Row>
    </div>
  );
};

export default Container;
