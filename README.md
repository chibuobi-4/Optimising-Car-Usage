# Optimising-Car-Usage

A group of friends is going on a trip. They all meet at the starting point using N cars. 
Each car is represented by two arrays: * P[K] people who traveled to the meeting point in the car * S[K] seats the car has available 
For example: P = [1, 4, 1] represents three cars with 1 person in the first car, 4 in the second car and 1 in the third car. 
S = [4, 5, 5] represents three cars with 4 seats available in the first car and 5 seats available in the second and third car. 
They want to use as few cars as possible for their holiday and leave the rest parked. 
Your task: 
 Write a function: 
    This function takes two arrays: * P: number of people in each car * S: number of seats in each car 
    It should return the minimum number of cars needed to carry all the people. 
    Examples: 1. P = [1, 4, 1], S = [1, 5, 1] → return 2 (One person from car 0 moves to car 1. Car 0 stays parked.) 
    2. P = [4, 4, 2, 4], S = [5, 5, 2, 5] → return 3 (People from car 2 move to other cars. Car 2 stays parked.) 
    3. P = [2, 3, 4, 2], S = [2, 5, 7, 2] → return 2 (People from cars 0 and 3 move to cars 1 and 2.)
