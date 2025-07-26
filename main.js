function OptimiseCarUsage(P, S) {
  let totalNumOfPeople = 0;
  for (let i = 0; i < P.length; i++) {
    totalNumOfPeople += P[i];
  }

  S.sort().reverse();

  let minNumOfCars = 0;
  let peopleSeated = 0;

  for (let j = 0; j < S.length && peopleSeated < totalNumOfPeople; j++) {
    peopleSeated += S[j];
    minNumOfCars++;
  }

  return minNumOfCars;
}

const P = [1, 4, 1];
const S = [1, 5, 1];

const A = [4, 4, 2, 4];
const B = [5, 5, 2, 5];

const C = [2, 3, 4, 2];
const D = [2, 5, 7, 2];

console.log("Minimum number of cars is: " + OptimiseCarUsage(P, S));
console.log("Minimum number of cars is: " + OptimiseCarUsage(A, B));
console.log("Minimum number of cars is: " + OptimiseCarUsage(C, D));
