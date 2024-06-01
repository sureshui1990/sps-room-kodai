// src/Components/Container .jsx
import { Row, Col } from 'antd'

const Container:React.FC = () => {


    return (<Row className='container'>
        <Col xs={1} sm={2}></Col>
        <Col xs={22} sm={20}>
          {/* { props.children } */}
        </Col>
        <Col xs={1} sm={2}></Col>
      </Row>)
}

export default Container;