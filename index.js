// Code your solution in this file!
function distanceFromHqInBlocks(someNumber){
  return Math.abs(42-someNumber)
}

function distanceFromHqInFeet(someNumber){
  return 264*distanceFromHqInBlocks(someNumber);
}

function distanceTravelledInFeet(startBlock, stopBlock){
  return 264*Math.abs(startBlock - stopBlock)
}


function calculatesFarePrice(startBlock, stopBlock) {
  let dist = distanceTravelledInFeet(startBlock, stopBlock);
  if (dist <= 400) {
    return 0
  } else if (dist > 400 && 2000){
    
  }
}
