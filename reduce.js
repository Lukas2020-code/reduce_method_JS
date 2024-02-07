  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];

// The call back function takes two paramethers (NOT ONE like in the other two - map and filter functions)
// The two paramethers that it takes are usually called accumulator (acc) and current value (curr)
// The accululator represents the value that will be returned from the reduce method
// The current value represents the current aray item that the call back function is being run on
let sum = nums.reduce((acc, curr ) => acc + curr);    //or
console.log(sum)

//Expand the function to see exactly how it works
let sum2 = nums.reduce((acc, curr) => {
  console.log(
      "Accumulator: ", acc,
      "Current Value: ", curr,
      "Total: ", acc + curr  
  )
    return acc + curr     // return the acc + curr to have the total at the end
}, 0);    //That 0 tell us the current value which will be passed to call back function. If we don't specify that the call back functio starts with second element in the array as current value because the first element is our accumulator. Using initial value is a good way to add more to a previously calculated subtotal, add more items to existing array or inject aditional properties into an existing object
console.log(sum2)

//Simplify the code to => let sum = nums.reduce((acc, curr ) => acc + curr, 0)

//-------------------------------------------------------------------------------//

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',                 // if we add a new object into array the reduce() will updatet its result next time when we run it
    profession: 'Manager',        // { Developer: 12, Designer: 4, Manager: 10 }
    yrsExperience: 10
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);  // => its good to initiate the initial value because it show the starting point for curent value
console.log(totalExperience);

// Grouping by a property, and totaling it too

/* It'a a good way to think about what type the answer we want object, array, int, string itd. This will determine the solution for grouping and totaling the numbers
{Developer: 12, Designer 4}
*/

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }

  return acc;
} , {});          // =>  second {} (empty object) that's the initial value for our object. This is where the accumulator will be on its first pass
console.log(experienceByProfession)

let employesName = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [curr.name];
  } else {
    acc[key].push(curr.name);
  }

  return acc;
}, {});
console.log(employesName);