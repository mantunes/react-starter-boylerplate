import React from 'react';
import DropdownLabel from '../../atoms/DropdownLabel'
import TimerInput from '../../atoms/TimerInput'
import TimerCounter from '../../atoms/TimerCounter'
import {ButtonPlay, ButtonStop, ButtonClose} from '../../atoms/Button';

import styles   from './styles.scss';
import card     from '../../../styles/_card.scss';
import wrappers from '../../../styles/_wrappers.scss';

const TimerBar = () =>
  <div className={`${card.card} ${styles.timer_bar_wrapper}`}>
    <TimerInput />
    <div className={wrappers.flex_vam}>
      <DropdownLabel />
      <TimerCounter />
      <ButtonStop />
    </div>
  </div>

export default TimerBar;