import * as React from "react";

const EpisodesStateContext = React.createContext();
const EpisodeDispatchContext = React.createContext();

function episodeReducer(state, action) {
  switch (action.type) {
    case "setData": {
      console.log(action);
      return { items: [] };
    }
    default: {
      throw new Error("Отсутствует");
    }
  }
}

function EpisodesProvider({ children }) {
  const [state, dispatch] = React.useReducer(episodeReducer, { items: [] });
  const value = { state, dispatch };
  return (
    <EpisodesStateContext.Provider value={value}>
      <EpisodeDispatchContext value={dispatch}>
        {children}
      </EpisodeDispatchContext>
      {children}
    </EpisodesStateContext.Provider>
  );
}

function useEpisodesState() {
  const context = React.useContext(EpisodesStateContext);
  if (context === undefined) {
    throw new Error("Хук можно использовать только внутри провайдера");
  }
  return context;
}

function useEpisodesDispatch() {
  const context = React.useContext(EpisodeDispatchContext);
  if (context === undefined) {
    throw new Error("Хук можно использовать только внутри провайдера");
  }
  return context;
}

export { EpisodesProvider, useEpisodesDispatch, useEpisodesState };
