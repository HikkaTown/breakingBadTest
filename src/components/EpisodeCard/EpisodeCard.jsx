import { CloseSquareOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { useEpisodesDispatch } from '../../context'
import Counter from '../Counter'
import s from './EpisodeCard.module.scss'

const { Title } = Typography
export default function EpisodeCard({ item, style }) {
  const dispatch = useEpisodesDispatch()

  const handleRemove = () => {
    dispatch({ type: 'removeEpisode', item })
  }

  return (
    <div style={style} className={s.card}>
      <div>
        <Title level={4}>Эпизод №{item.episode_id}</Title>
        <Counter item={item} />
      </div>
      <Button
        type="danger"
        icon={<CloseSquareOutlined />}
        onClick={handleRemove}
      />
    </div>
  )
}
