import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [poster, setPoster] = useState(null);

  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie, poster, setPoster }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
