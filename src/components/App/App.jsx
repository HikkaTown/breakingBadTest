import { Button, Col, Row } from "antd";
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <>
      <Row>
        <Col span={23} offset={1}>
          <h1>Список эпизодов Breaking Bad</h1>
        </Col>
      </Row>
      <Row>
        <Col span={23} offset={1}>
          <Button type="primary">Загрузить эпизоды</Button>
        </Col>
      </Row>
    </>
  );
}

export default App;
