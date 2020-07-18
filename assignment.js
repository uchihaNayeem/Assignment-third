//1st problem
function feetToMile(feet){
  var result = feet / 5280;
  return result;
}

var feetResult = feetToMile(90000000);
var roundedResult = feetResult.toFixed(4);
console.log(roundedResult, 'miles');

// 2nd problem

function woodCalculator(chair, table, bed){
  var totalWood = chair*1 + table*3 + bed*5 ;
  return totalWood;
}
var woodResult = woodCalculator(14,5,12);
console.log(woodResult, 'cubic feet wood');

// 3rd problem

function brickCalculator(floorNum){
  if (floorNum <=10 && floorNum >=1){
      var brickNum = floorNum * 15000;
      return brickNum + ' bricks';
  }
  else if (floorNum > 10 && floorNum <= 20) {
      var brickNo = ((floorNum - 10) * 12000) + 150000;
      return brickNo + ' bricks';
  }
  else if (floorNum > 20){
      var brickNo =((floorNum - 20) * 10000) + 270000;
      return brickNo + ' bricks';
  }
  else {
      return 'Sorry 0 and -1 cannot be a floor number.';
  }
};

var resultFloor = brickCalculator(78);
console.log(resultFloor);

//4th problem

function tinyFriend(name) {
  var smallestName = name[0];
  for (var i = 0; i < name.length; i++) {
      var currentName = name[i];
      if(currentName.length < smallestName.length) {
          smallestName = currentName;
      }
  }
  return smallestName;
};

var nameResult = tinyFriend(["fahim saleh", "ajmaien", "abu", "raju", "kolim uddin"]);
console.log(nameResult);