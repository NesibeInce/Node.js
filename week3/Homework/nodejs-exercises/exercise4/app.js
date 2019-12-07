const Handlebars = require('handlebars');

subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];

punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets",
  "go to the moon", "achieve world piece", "help people learn programing"
]

var randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
var randomPunchlines = punchlines[Math.floor(Math.random() * punchlines.length)];

var source = `_{{Subject}}_ is great to _{{Punchline}}_`;
var template = Handlebars.compile(source);

var data = {
  'Subject': randomSubject,
  'Punchline': randomPunchlines
};
var result = template(data);

console.log(result);