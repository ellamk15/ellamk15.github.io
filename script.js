//Show More
function showMore() {
	let myMessage = document.getElementById("mymessage");
	let link = document.getElementById("link");
	
	if (myMessage.classList.contains("hidden")) {
		myMessage.classList.remove("hidden");
		link.innerHTML = "Show Less...";
	} else {
		myMessage.classList.add("hidden");
		link.innerHTML = "Show More...";
	}
}

function showMoreTwo() {
	let myMessageTwo = document.getElementById("mymessagetwo");
	let linkTwo = document.getElementById("linkTwo");
	
	if (myMessageTwo.classList.contains("hidden")) {
		myMessageTwo.classList.remove("hidden");
		linkTwo.innerHTML = "Show Less...";
	} else {
		myMessageTwo.classList.add("hidden");
		linkTwo.innerHTML = "Show More...";
	}
}

//Quiz
function showResults() {
	let resultsDiv = document.getElementById("results");
	let questionOne = document.getElementById("sel-one").value;
	let questionTwo = document.getElementById("sel-two").value;
	let questionThree = document.getElementById("sel-three").value;
	let questionFour = document.getElementById("sel-four").value;
	
	let oneAnswer = document.getElementById("question-one");
	let twoAnswer = document.getElementById("question-two");
	let threeAnswer = document.getElementById("question-three");
	let fourAnswer = document.getElementById("question-four");
	let total = document.getElementById("total");
	let correct = 0;

	if(questionOne=="Added to an HTML tag and changes the way the tag is displayed") {
		oneAnswer.innerHTML="Question 1 - Correct";
		correct +=1
	} else {
		oneAnswer.innerHTML="Question 1 - Incorrect";
	}
	if(questionTwo=="Ordered lists displays the items as numbers while unordered lists displays the items as bullet points") {
		twoAnswer.innerHTML="Question 2 - Correct";
		correct +=1
	} else {
		twoAnswer.innerHTML="Question 2 - Incorrect";
	}
	if(questionThree=="It makes the website look nice") {
		threeAnswer.innerHTML="Question 3 - Correct";
		correct +=1
	} else {
		threeAnswer.innerHTML="Question 3 - Incorrect";
	}
	if(questionFour==".value") {
		fourAnswer.innerHTML="Question 4 - Correct";
		correct +=1
	} else {
		fourAnswer.innerHTML="Question 4 - Incorrect";
	}
	total.innerHTML=correct + "/4";
}

//Slideshow 
let images = true;

function changeSlide() {
	let axidImg = document.getElementById("axid").src;
	document.getElementById("axid").src = document.getElementById("raven").src;
	document.getElementById("raven").src = document.getElementById("usc").src;
	document.getElementById("usc").src = document.getElementById("hhi").src;
	document.getElementById("hhi").src = axidImg;
}

function slideShow() { 
	if(images) {
	changeSlide();
	}
}
setInterval(changeSlide, 10000);
	
	
	