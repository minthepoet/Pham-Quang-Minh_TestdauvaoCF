
  
//   function alternatingSums(a) {
//     var teamWeights = [0, 0],
//         i = 0,
//         whichTeam = 0;
//     while (i < a.length) {
//       teamWeights[whichTeam] += a[i];
//       i++;
//       whichTeam = (whichTeam + 1) % 2;
//     }
//     return teamWeights;
//   }
  
//   (function main () {
//     var a = [60, 40, 55, 75, 64];
//     log(alternatingSums(a));
//   })();
const input = [60, 40, 55, 75, 64]
function findWeightForEachTeam (peopleLine){
    const finalResult = [];
    const a = 0;
    const iterator = peopleLine.keys();
    const teamEven = [];
    const teamOdd = [];
    for (const index of iterator){
        console.log(index);
        if (index % 2 == 0 ){
            teamEven.push(peopleLine.at(index));
        } else {
            teamOdd.push(peopleLine.at(index));
        }
    }
   console.log(teamEven)
    let teamEvenSum = 0;
    for (let i = 0; i < teamEven.length; i++){
        teamEvenSum += teamEven[i];
    }
    console.log(teamEvenSum);
        finalResult.push(teamEvenSum);

    let teamOddSum = 0;
    for (let j = 0; j < teamOdd.length; j++){
        teamOddSum += teamOdd[j];
    }
    console.log(teamOddSum);
    finalResult.push(teamOddSum);
    console.log(finalResult)
}

console.log(findWeightForEachTeam(input))