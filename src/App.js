import React from 'react';
import './styles/_index.scss';
import {ButtonPlay, ButtonStop, ButtonClose} from './components/atoms/Button';
import TimerBar from './components/ecosystems/TimerBar'

const App = () => (
  <div>
    <ButtonPlay/>
    <ButtonStop/>
    <ButtonClose/>
    <TimerBar/>
  </div>
);

export default App;
