// Re-set the document title
document.title = 'Dynamic Fibonacci Sequence';

//create a div to hold the fibonacci sequence as a list
var listDiv = document.createElement('div');
listDiv.setAttribute('class', 'red fib-container');
document.querySelector('body').appendChild(listDiv);

//create the form which contains the slider
var listForm = document.createElement('form');
listForm.setAttribute('id', 'list-of-divs');

var label = document.createElement('label');
label.setAttribute('id', 'list-label');
label.setAttribute('for', 'list-slider');
label.textContent = "List(0)";

var input = document.createElement('input');
input.setAttribute('id', 'list-slider');
input.setAttribute('type', 'range');
input.setAttribute('min', '0');
input.setAttribute('max', '20');
input.setAttribute('value', '0');
input.setAttribute('oninput', 'listSlider(this)');

listForm.appendChild(label);
listForm.appendChild(input);
listDiv.appendChild(listForm);


//function that turns a number into its fibonacci sequence value
var numToFib = function(num) {
    if (num==1) return 1;
    if (num==0) return 0;
    return numToFib(num - 1) + numToFib(num - 2);
}

//function that takes input from the list slider and displays the fib. sequence to that value
var listSlider = function(me) {
    
    //change the label to match the current value
    var value = me.value
    var changeLabel = document.querySelector('#list-label');
    changeLabel.textContent = `List(${value})`;
    
    //remove all previous values from the div and initialize our empty div
    var fibList = document.querySelector('div.fib-list');
    if (fibList) fibList.remove();
    fibList = document.createElement('div');
    fibList.setAttribute('class', 'fib-list');
    
    //add divs containing a fib number to the fib-list div
    for (var i = 0; i <= value; i++) {
        var d = document.createElement('div');
        d.setAttribute('class', 'fib-item');
        var p = document.createElement('p');
        p.textContent = numToFib(i);
        d.appendChild(p);
        fibList.appendChild(d);
    }
    
    //add to document
    var theForm = document.querySelector('#list-of-divs');
    theForm.appendChild(fibList);
}

