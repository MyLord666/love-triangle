/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var firstSpichonee = preferences[i] - 1;
    if(firstSpichonee === i) continue;

    var secondSpichonee = preferences[firstSpichonee] - 1;
    if(secondSpichonee === firstSpichonee) continue;

    var thirdSpichonee = preferences[secondSpichonee] - 1;
    if(thirdSpichonee === secondSpichonee) continue;

    if(thirdSpichonee === i) count++;
  }
  return count/3;
};
