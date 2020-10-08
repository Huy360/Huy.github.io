let fullName = "Huy Nguyen"; // 9 characters in name...not including space

// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
let header = document.querySelector(".header");
header.innerHTML = fullName + "'s Lab 4 ";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let paragraph1 = document.createElement("p1"); 
let paragraph2 = document.createElement("p2");
paragraph1.className = "content1";
paragraph2.className = "content2"; 
let newParagraphs = document.querySelector(".content");
newParagraphs.append(paragraph1);
newParagraphs.append(paragraph2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let lengthName = document.createTextNode("My name has "+ fullName.length+" characters");
paragraph1.append(lengthName);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
let thirdChar = document.createTextNode(fullName.charAt(2).toUpperCase());
paragraph2.append(thirdChar);

// 6 Add a new line to your second paragraph
let newbreak = document.createElement("br");
paragraph2.append(newbreak);

// 7 Return the final three characters of your last name to that new line
let lastLetters = document.createTextNode(fullName.substr(-3));
paragraph2.append(lastLetters);

// 8 Substring your first and last name into two separate variables
var firstName = fullName.substring(0, 3);
var lastName = fullName.substring(13, 18);

// 9 Add the total length of your first and last names together
var nameLength = firstName.length + lastName.length;

// 10 Display that total next to your name in your header
document.querySelector(".header").append("The length of my name is " + nameLength);
