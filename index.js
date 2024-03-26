const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = tutorials.map((tutorial) => tutorial.split (' '));
// const capitalizeTutorials = titleCased.map(tutorial => tutorial.map((word) => word.charAt(0).toUpperCase() + word.slice(1)));
// const joinCapTutorials= capitalizeTutorials.map((tutorial) => tutorial.join(" "));

// function titleCased(tutorials) {
//   const titleCasedTutorials = tutorials.map(tutorial => {
//     return tutorial.split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//   });
  
//   return titleCasedTutorials;
// }

function titleCased() {
  // Use the global tutorials variable as data
  return tutorials.map(tutorial => {
    // Split each tutorial into words, capitalize the first letter of each word, and join them back into a single string
    return tutorial.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
}
