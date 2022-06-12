import { Col, Row } from 'antd'
import { VariableSizeList } from 'react-window'
import EpisodeCard from '../EpisodeCard'

function rowItem({ style }, ...args) {
  const item = args[1]
  return <EpisodeCard key={item} item={item} style={style} />
}

function getSize() {
  return 130
}

function EpisodesList({ episodes }) {
  return (
    <Row style={{ marginTop: 25 }}>
      <Col span={8} offset={8}>
        <VariableSizeList
          height={350}
          width={500}
          itemSize={getSize}
          itemCount={episodes.length}
        >
          {(index, style) => rowItem(index, style, episodes[index.index])}
        </VariableSizeList>
      </Col>
    </Row>
  )
}

export default EpisodesList
