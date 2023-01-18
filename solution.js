const getScore= (rolls)=> {
  if (!Array.isArray(rolls) || rolls.some(roll=> typeof roll != 'number')) throw new Error('Invalid argument')
  // we have to return total score
  let framePinLimit= 10;
  // let frameBowlLimit= 2;

  let frameScores= [];
  let rollInd= 0;
  let frameStart= 0;
  for (let frame= 0; frame< 10; ++frame) {
    console.log(frame, rollInd, frameStart, rolls[rollInd])
    if (rolls[frameStart]=== 10) {
      // strike
      console.log('strike');
      frameScores.push(10 + rolls[rollInd+1]+rolls[rollInd+2]) // no need tto handle index range errors here 
    } else {
      // buffer : spare or open
      let buff= framePinLimit - rolls[frameStart];
      rollInd= ++frameStart;
      if (rolls[rollInd]> buff) {
        console.log(rolls[rollInd], buff)
        throw new Error('wrong input')
      }
      else if (rolls[rollInd]=== buff) {
        // spare
        console.log('spare')
        frameScores.push(10 + rolls[rollInd+1])
      }
      else {
        // open
        console.log('open')
        frameScores.push(rolls[frameStart] + rolls[rollInd])
      }
    }

    rollInd++;
    frameStart++;
    console.log(frameScores)
  }
  return frameScores.reduce((scr, curr)=> scr+curr);
}

const getBestScores= (games)=> {
  if (!Array.isArray(rolls) || games.some(game=> !Array.isArray(game)) ) throw new Error('Invalid argument')
  return Math.max(...games.map(rolls=> getScore(rolls)));
}


console.log(getScore([10, 5, 5, 9, 0]))

module.exports= {
  getBestScores,
  getScore
}