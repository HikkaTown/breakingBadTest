import { Col, Row, Typography } from 'antd'
import 'antd/dist/antd.min.css'
import { useEpisodesState } from '../../context/episodeContext'
import EpisodesList from '../EpisodesList/EpisodesList'
import GetDataBtn from '../GetDataBtn/GetDataBtn'
import SortingBtns from '../SoringBtns/SortingBtns'
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
