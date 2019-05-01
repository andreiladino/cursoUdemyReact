import * as React from 'react';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Intro textss="tales1" />
        <Intro textss="tales11111" />
      </div>
    );
  }
}

export default App;
