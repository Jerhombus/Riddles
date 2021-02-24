var questions = [
  ["What can fill a room but takes up no space?", "Silence"],
  ["David's father has three sons: Snap, Crackle...", "David"],
  ["What runs around the whole yard without moving?", "Fence"],
  ["Give it food and it will live; give it water and it will die.", "Fire"],
  ["The more there is, the less you see", "Darkness"]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

// Creates print function to eliminate the usage of 'document.getElementById();
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = "<ol>";
    for(var i=0;i<arr.length;i++) {
      listHTML += "<li>" + arr[i] + "</li>";
    }
  listHTML += "</ol>";
  return listHTML;
}

for(var i=0;i<questions.length;i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if(response.toLowerCase() === answer.toLowerCase()) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question); 
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += "<h2>Riddles right:</h2>";
html += buildList(correct);
html += "<h2>Riddles wrong:</h2>";
html += buildList(wrong);
print(html);
