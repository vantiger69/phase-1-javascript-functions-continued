// code your solution here
// Saturday Fun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Monday Work
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Wrap Adjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
