import { Button } from 'antd'
import { useState } from 'react'
import { useEpisodesDispatch } from '../../context/episodeContext'

export default function GetDataBtn() {
  const [loading, setLoading] = useState(false)
  const dispatch = useEpisodesDispatch()
  const handleClick = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch('https://breakingbadapi.com/api/episodes')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        if (data?.length) {
          dispatch({ type: 'setEpisodes', item: data })
        }
        return data
      })
  }
  return (
    <Button type="primary" onClick={handleClick} loading={loading}>
      {!loading ? 'Загрузить эпизоды' : 'Загрузка...'}
    </Button>
  )
}
