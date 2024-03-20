//Code your solution in this file!
//Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

//Returns the number of feet from Scuber's headquarters to the pickup location. 
//Uses `distanceFromHqInBlocks` function to help return the correct value here. 
function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

//Calculates the number of feet a passenger travels given a starting block and an ending block — 
//it only calculates distance North and South (uptown/downtown). 
//It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

//Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. 
//The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). 
//Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet. Finally, 
//Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
