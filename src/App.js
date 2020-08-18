import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { HighOrderComponentTranslated } from './components/HOC/HighOrderComponent'
import { HeaderComponent } from './components/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback="loading">
          <HeaderComponent />
          <HighOrderComponentTranslated />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
