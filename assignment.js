// feetToMile
function feetToMile(feet) {
  if (feet < 0) {
    return "negative number doesn't support"; /*if you insert a negative value*/
  }
  var mile = feet / 5280;
  return mile.toFixed(2);
}
// for check
var jhankarVaiResultMile = feetToMile(-10000);
console.log("jhankar vai apnar Mile value is:", jhankarVaiResultMile);

// woodCalculator
function woodCalculator(chair, table, khat) {
  const isValid = (value) => {
    if (value < 0 || value == undefined) {
      /*if you insert a negative value or you forget to insert a value, the result will be 0*/
      return 0;
    } else {
      return value;
    }
  };

  var chairWoodAmount = isValid(chair) * 1;
  var tableWoodAmount = isValid(table) * 3;
  var khatWoodAmount = isValid(khat) * 5;
  var totalWoodAmount = chairWoodAmount + tableWoodAmount + khatWoodAmount;
  return totalWoodAmount;
}
// for check
var jhankarVaiOrder = woodCalculator(2, 2, 2);
console.log("Jhankar vai er kath lagbe total:", jhankarVaiOrder, "cubic feet");

// brickCalculator
function brickCalculator(numberOfFloors) {
  if (numberOfFloors < 1 || numberOfFloors == undefined) {
    return "insert the right value";
  } else {
    if (numberOfFloors <= 10) {
      return numberOfFloors * 15 * 1000;
    } else if (numberOfFloors > 10 && numberOfFloors <= 20) {
      return 10 * 15 * 1000 + (numberOfFloors - 10) * 12 * 1000;
    } else {
      return (
        10 * 15 * 1000 + 10 * 12 * 1000 + (numberOfFloors - 20) * 10 * 1000
      );
    }
  }
}
//  for check
var buildingSize = brickCalculator(21);
console.log("jhankar vai , brick lagbe :", buildingSize);

// tinyFriend
function tinyFriend(friendList) {
  if (friendList.length == 0) {
    return "The array is empty !";
  } else {
    var shortestName = friendList[0];
    for (var i = 1; i < friendList.length; i++) {
      if (friendList[i].length < shortestName.length) {
        shortestName = friendList[i];
      }
    }
    return shortestName;
  }
}
// for check
var shortestName = tinyFriend(["abdul", "kim", "jack"]);
console.log("jhankar vai er tiny friend:", shortestName);
