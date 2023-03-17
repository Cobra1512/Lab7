function licreate(s, i){
    var b = document.createElement("b");
    b.append("5 points");
    var li = document.createElement("li");
    li.append(s);
    li.append(b);
    if (i == 0){
        li.append(");");
    } else {
        li.append(").");
    }
    
    return li;
}

var h1 = document.getElementsByTagName("h1")[0];
h1.remove();
var body = document.getElementsByTagName("body")[0];

var h1 = document.createElement("h1");
h1.style.color = "blue";
h1.append("Lab7 Assignment");
body.appendChild(h1);

var hr = document.createElement("hr");
body.append(hr);

var h2 = document.createElement("h2");
h2.style.color = "red";
h2.append("Task");
body.append(h2);

var p = document.createElement("p");
p.append("In this task you have to reproduce this HTML page as is using ");
body.append(p);
var b = document.createElement("b");
b.append("only");
p.append(b);
p.append(" JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:")

var ul = document.createElement("ul");
liarr = new Array();

liarr.push(licreate("find elements in the DOM (", 0));
liarr.push(licreate("create/add/remove elements (", 0));
liarr.push(licreate("change content of the elements (", 0));
liarr.push(licreate("change styles of the elements (", 0));
liarr.push(licreate("change attributes of the elements (", 0));
liarr.push(licreate("change classes of the elements (", 1));

for (let i = 0; i<liarr.length; i++){
    if (i%2 == 0){
        liarr[i].style.color = "green";
        liarr[i].class = "even";
        ul.append(liarr[i]);
    } else {
        liarr[i].style.color = "purple";
        liarr[i].class = "odd";
        ul.append(liarr[i]);
    }
}
body.append(ul);

body.append(document.createElement("p"));
body.append(document.createElement("hr"));

var h2 = document.createElement("h2");
h2.style.color = "red";
h2.append("Submission");
body.append(h2);

var p = document.createElement("p");
p.append("To submit your work, follow these instructions:");
body.append(p);

var ul = document.createElement("ul");
liarr = new Array();

li = document.createElement("li");
li.append("Create a new repository on Github, named ");
b = document.createElement("b");
b.append("lab7");
li.append(b);
li.append(" (");
b = document.createElement("b");
b.append("1 point");
li.append(b);
li.append(").");
liarr.push(li);

li = document.createElement("li");
li.append("Clone this repository to your local machine and work inside it.");
liarr.push(li);

li = document.createElement("li");
li.append("Create a new HTML file, called ");
b = document.createElement("b");
b.append("index.html");
li.append(b);
li.append(', which has only one <h1> tag with "Hello, World!" message (');
b = document.createElement("b");
b.append("1 point");
li.append(b);
li.append(").");
liarr.push(li);

li = document.createElement("li");
li.append("Create a new JavaScript file, called ");
b = document.createElement("b");
b.append("main.js");
li.append(b);
li.append(", which must contain your program (assignment) described above (");
b = document.createElement("b");
b.append("1 point");
li.append(b);
li.append(").");
liarr.push(li);

li = document.createElement("li");
li.append("Link this ");
b = document.createElement("b");
b.append("main.js");
li.append(b);
li.append(" file to your ");
b = document.createElement("b");
b.append("index.html");
li.append(b);
li.append(" file (Note: place your script at the end of the ");
b = document.createElement("b");
b.append("body");
li.append(b);
li.append(" section).");
liarr.push(li);

li = document.createElement("li");
li.append("Write a JavaScript program in ");
b = document.createElement("b");
b.append("main.js");
li.append(b);
li.append(" to make your ");
b = document.createElement("b");
b.append("index.html");
li.append(b);
li.append(" look identical to this HTML file (");
b = document.createElement("b");
b.append("5 points");
li.append(b);
li.append(").");
liarr.push(li);

li = document.createElement("li");
li.append("After you finish your work, submit it to the Github (");
b = document.createElement("b");
b.append("2 points");
li.append(b);
li.append(").");
liarr.push(li);

for (let i = 0; i<liarr.length; i++){
    if (i%2 == 0){
        liarr[i].style.color = "green";
        liarr[i].class = "even";
        ul.append(liarr[i]);
    } else {
        liarr[i].style.color = "purple";
        liarr[i].class = "odd";
        ul.append(liarr[i]);
    }
}
body.append(ul);
body.append(document.createElement("hr"));



