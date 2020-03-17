import React from 'react';

import GlobalStyles from "./theme/global";
import Header from "./components/Header";
import Posts from './components/Posts';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Posts />
    </>
  );
}

export default App;
