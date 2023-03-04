import React, {useContext} from 'react'

import ScoreTab from './ScoreTab';
import { scoreContext } from '../App';
import Button from './Button';

function Lower() {

  const scores = useContext(scoreContext);

  return (
    <div className='lower-portion'>
      <h3>Summary</h3>
      {
        scores.map((score,index) => (
          <ScoreTab key = {index} values = {score}/>
        ))
      }
      <Button />
    </div>
  )
}

export default Lower

