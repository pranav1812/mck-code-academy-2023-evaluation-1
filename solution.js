const getScore= (rolls)=> {
  if (!Array.isArray(rolls) || rolls.some(roll=> typeof roll != 'number')) throw new Error('Invalid argument')
  // we have to return total score
  let framePinLimit= 10;
  // let frameBowlLimit= 2;

  let frameScores= [];
  let rollInd= 0;
  let frameStart= 0;
  for (let frame= 0; frame< 10; ++frame) {
    if (rolls[frameStart]=== 10) {
      // strike
      frameScores.push(10 + rolls[rollInd+1]+rolls[rollInd+2]) // no need tto handle index range errors here 
    } else {
      // buffer : spare or open
      let buff= framePinLimit - rolls[frameStart];
      rollInd= frameStart + 1;
      if (rolls[rollInd]> buff) throw new Error('wrong input')
      else if (rolls[rollInd]=== buff) {
        // spare
        frameScores.push(10 + rolls[rollInd+1])
      }
      else {
        // open
        frameScores.push(rolls[frameStart] + rolls[rollInd])
      }
    }

    rollInd++;
    frameStart++;
  }
  return frameScores
}