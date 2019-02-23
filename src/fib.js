// Re-set the document title
document.title = 'TODO: Dynamic Fibonacci Sequence in JavaScript';

// Create a red div in the body of the document
var div = document.createElement('div');
div.setAttribute('class', 'red fib-container');
document.querySelector('body').appendChild(div);

// Make a paragraph to hold some instructions
var para = document.createElement('p');
para.textContent = "Write code necessary to";
div.appendChild(para);

var ol = document.createElement('ol');
div.appendChild(ol)

var li = document.createElement('li');
li.textContent = "create a <form>";
ol.appendChild(li);

li = document.createElement('li');
li.textContent = "an <input> of type 'range' with the 'onchange' attribute which calls a JavaScript function";
ol.appendChild(li);

li = document.createElement('li');
li.textContent = "as well as any other functions needed to compute the Fibonacci numbers recursively";
ol.appendChild(li);


li = document.createElement('li');
li.textContent = "and create a <div> for each recursive function call";
ol.appendChild(li);
