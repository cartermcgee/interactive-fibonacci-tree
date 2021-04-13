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
label.textContent = "ListFib(0)";

var input = document.createElement('input');
input.setAttribute('id', 'list-slider');
input.setAttribute('type', 'range');
input.setAttribute('min', '0');
input.setAttribute('max', '20');
input.setAttribute('value', '0');
input.setAttribute('oninput', 'listSlider(this)');

//add to div
listForm.appendChild(label);
listForm.appendChild(input);
listDiv.appendChild(listForm);

//create default value
var d1 = document.createElement('div');
d1.setAttribute('class', 'fib-list');
var d2 = document.createElement('div');
d2.setAttribute('class', 'fib-item');
var p1 = document.createElement('p');
p1.textContent = "0";
d2.appendChild(p1);
d1.appendChild(d2);
listDiv.appendChild(d1);


//create a div to hold the fibonacci sequence as a tree
var treeDiv = document.createElement('div');
treeDiv.setAttribute('class', 'black fib-container');
document.querySelector('body').appendChild(treeDiv);

//create a form which contains a slider
var treeForm = document.createElement('form');

var treeLabel = document.createElement('label');
treeLabel.setAttribute('id', 'tree-label');
treeLabel.setAttribute('for', 'tree-slider');
treeLabel.textContent = "TreeFib(0)";

var treeInput = document.createElement('input');
treeInput.setAttribute('id', 'tree-slider');
treeInput.setAttribute('type', 'range');
treeInput.setAttribute('min', '0');
treeInput.setAttribute('max', '11');
treeInput.setAttribute('value', '0');
treeInput.setAttribute('oninput', 'treeSlider(this)');

//add to div
treeForm.appendChild(treeLabel);
treeForm.appendChild(treeInput);
treeDiv.appendChild(treeForm);

//create default value
var div1 = document.createElement('div');
div1.setAttribute('class', 'fib-container');
div1.setAttribute('id', 'tree-of-divs')
var div2 = document.createElement('div');
div2.setAttribute('class', 'fib-item');
var pg1 = document.createElement('p');
pg1.textContent = "Fib(0) = 0";
div2.appendChild(pg1);
div1.appendChild(div2);
treeDiv.appendChild(div1);


//function that turns a number into its fibonacci sequence value
var numToFib = function(num) {
    if (num==1) return 1;
    if (num==0) return 0;
    return numToFib(num - 1) + numToFib(num - 2);
}

//function that takes input from the tree slider and displays the fib. sequence to that value
var treeSlider = function(me) {
    
    var parent = me.parentNode;
    var value = parseInt(me.value);
    
    //display base cases
    if (value === 0 | value === 1){
        pg1.textContent = `Fib(${value}) = ${value}`;
    }
    
    //change the label to match the current value
    var changeLabel = document.querySelector('#tree-label');
    changeLabel.textContent = `TreeFib(${value})`;
    
    //delete any existing tree
    var fibTree = document.querySelector('#tree-of-divs');
    if (fibTree) fibTree.remove();
    
    //create a new tree to be filled in
    tree = document.createElement('div');
    tree.setAttribute('id', 'tree-of-divs');
    tree.setAttribute('class', 'fib-container');
    
    //fills the tree recursively
    var treeObj = recursiveBinTree(value);
    tree.appendChild(treeObj);

    parent.parentNode.appendChild(tree);
    
}


var recursiveBinTree = function(depth) {
    
    //create and store data at the new depth in the tree
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'fib-item');
    var newP = document.createElement('p');
    newP.textContent = `Fib(${depth}) = ${numToFib(depth)}`;
    newDiv.appendChild(newP);

    //return when you hit the base cases
    if (depth === 0 | depth === 1) {
        return newDiv;
    }
    else { //iterate through the tree, similar to numToFib but with more elements
        var left = recursiveBinTree(depth - 1);
        var getClass = left.getAttribute('class');
        left.setAttribute('class', `fib-left ${getClass}`);
        newDiv.appendChild(left);
        

        var right = recursiveBinTree(depth - 2);
        getClass = right.getAttribute('class');
        right.setAttribute('class', `fib-right ${getClass}`);
        newDiv.appendChild(right);

        return newDiv;
    }
}

//function that takes input from the list slider and displays the fib. sequence to that value
var listSlider = function(me) {
    
    //change the label to match the current value
    var value = me.value;
    var changeLabel = document.querySelector('#list-label');
    changeLabel.textContent = `ListFib(${value})`;
    
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

