import { Button, Col, Row } from 'antd'
import { useEpisodesDispatch } from '../../context/episodeContext'

export default function SortingBtns() {
  const dispatch = useEpisodesDispatch()

  const handleDescending = () => {
    dispatch({ type: 'sortDescendingCharacters' })
  }

  const handleIncrease = () => {
    dispatch({ type: 'sortIncreaseCharacters' })
  }

  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Button style={{ marginBottom: 10 }} onClick={handleDescending}>
            Сортировать по убыванию количества персонажей
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <Button onClick={handleIncrease}>
            Сортировать по возрастанию количества персонажей
          </Button>
        </Col>
      </Row>
    </>
  )
}
