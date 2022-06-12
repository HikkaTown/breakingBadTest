import { Col, Row, Typography } from 'antd'
import 'antd/dist/antd.min.css'
import { useEpisodesState } from '../../context'
import EpisodesList from '../EpisodesList'
import GetDataBtn from '../GetDataBtn'
import SortingBtns from '../SoringBtns'
import './App.scss'

const { Title } = Typography

function App() {
  const { episodes } = useEpisodesState()

  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Title>Список эпизодов Breaking Bad</Title>
        </Col>
      </Row>

      {!episodes.length ? (
        <Row>
          <Col span={8} offset={8}>
            <GetDataBtn />
          </Col>
        </Row>
      ) : (
        <SortingBtns />
      )}

      {episodes.length ? <EpisodesList episodes={episodes} /> : ''}
    </>
  )
}

export default App
