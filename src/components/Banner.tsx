// src/Components/Container .jsx
import { Row, Col,Image } from 'antd';
import Banner from '../assets/banner-about.jpg';

const Container:React.FC = () => {

    return (<Row className='container'>
        <Col sm={24}>
          <Image src={Banner} alt="sps room kodai" title="sps room - kodai"  />
        </Col>
      </Row>)
}

export default Container;