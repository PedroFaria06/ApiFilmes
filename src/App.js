// App.js
import React from "react";
import { MovieProvider} from "../src/modules/MovieContext"
import Home from "./pages/home/Home";


function App() {
  return (
    <MovieProvider>
      <div>
        <Home />
      </div>
    </MovieProvider>
  );
}
export default App;
