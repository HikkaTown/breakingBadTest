import * as React from 'react'

const EpisodesStateContext = React.createContext()
const EpisodeDispatchContext = React.createContext()

function episodeReducer(state, action) {
  switch (action.type) {
    case 'setEpisodes': {
      return { episodes: action.item }
    }
    case 'updateEpisode': {
      return ''
    }
    case 'incrementCharters': {
      return {
        episodes: state.episodes.map((item) => {
          if (item.episode_id === action.item.episode_id) {
            const newItem = {
              ...action.item,
              characters: [...action.item.characters, 'new person'],
            }
            return newItem
          }
          return item
        }),
      }
    }
    case 'decrementCharters': {
      return {
        episodes: state.episodes.map((item) => {
          if (item.episode_id === action.item.episode_id) {
            const newItem = {
              ...action.item,
              characters: action.item.characters?.length
                ? [
                    ...action.item.characters.slice(
                      0,
                      action.item.characters.length - 1
                    ),
                  ]
                : [],
            }
            return newItem
          }
          return item
        }),
      }
    }
    case 'removeEpisode': {
      return {
        episodes: state.episodes.filter(
          (item) => item.episode_id !== action.item.episode_id
        ),
      }
    }
    case 'sortDescendingCharacters': {
      return {
        episodes: state.episodes.sort(
          (a, b) => a.characters.length - b.characters.length
        ),
      }
    }
    case 'sortIncreaseCharacters': {
      return {
        episodes: state.episodes.sort(
          (a, b) => b.characters.length - a.characters.length
        ),
      }
    }
    default: {
      throw new Error('Отсутствует такой экшн')
    }
  }
}

function EpisodesProvider({ children }) {
  const [state, dispatch] = React.useReducer(episodeReducer, {
    episodes: [],
    sortingEpisodes: [],
  })
  return (
    <EpisodesStateContext.Provider value={state}>
      <EpisodeDispatchContext.Provider value={dispatch}>
        {children}
      </EpisodeDispatchContext.Provider>
    </EpisodesStateContext.Provider>
  )
}

function useEpisodesState() {
  const context = React.useContext(EpisodesStateContext)
  if (context === undefined) {
    throw new Error('Хук можно использовать только внутри провайдера')
  }
  return context
}

function useEpisodesDispatch() {
  const context = React.useContext(EpisodeDispatchContext)
  if (context === undefined) {
    throw new Error('Хук можно использовать только внутри провайдера')
  }
  return context
}

export { EpisodesProvider, useEpisodesDispatch, useEpisodesState }
