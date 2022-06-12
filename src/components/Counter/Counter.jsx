import { Button } from 'antd'
import { useEpisodesDispatch } from '../../context'
import wordsEnd from '../../lib'
import s from './Counter.module.scss'

export default function Counter({ item }) {
  const dispatch = useEpisodesDispatch()
  const handleDecrement = () => {
    dispatch({ type: 'decrementCharters', item })
  }

  const handleIncrement = () => {
    dispatch({ type: 'incrementCharters', item })
  }
  return (
    <div>
      <Button type="primary" onClick={handleDecrement}>
        -
      </Button>
      <span className={s.characters}>{item.characters.length}</span>
      <Button
        type="primary"
        style={{ marginRight: 15 }}
        onClick={handleIncrement}
      >
        +
      </Button>
      <span className={s.text}>{wordsEnd(item.characters.length)}</span>
    </div>
  )
}
