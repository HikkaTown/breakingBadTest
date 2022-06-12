import { Button } from 'antd'
import { useEpisodesDispatch } from '../../context/episodeContext'
import wordsEnd from '../../lib/wordsEnd'
import s from './Counter.module.scss'

export default function Counter({ item }) {
  const dispatch = useEpisodesDispatch()

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          dispatch({ type: 'decrementCharters', item })
        }}
      >
        -
      </Button>
      <span className={s.characters}>{item.characters.length}</span>
      <Button
        type="primary"
        style={{ marginRight: 15 }}
        onClick={() => {
          dispatch({ type: 'incrementCharters', item })
        }}
      >
        +
      </Button>
      <span className={s.text}>{wordsEnd(item.characters.length)}</span>
    </div>
  )
}
