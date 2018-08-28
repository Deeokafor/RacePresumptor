//race presumptor 0.01
//app has been developed totally for fun and shouldnt be used otherwise
//first, define a global arrays of races
//secondly, 
//"use strict";

/*
1. define variables for elements 
2. create conditionals for combinations
3. write results of conditionals to document
*/

const caucasian = ['white','long','green','average','oval'];
const asian = ['yellow','mid','red','short','round']; 
const african = ['black','short','brown','tall','oblong'];  

function raceSelector(){
	//get elements from the html by their id's
	let colour = document.getElementById('one');
	let hairLength = document.getElementById('two');
	let eyeColour = document.getElementById('three');
	let height = document.getElementById('four');
	let faceShape = document.getElementById('five');
	let display = document.getElementById('display');
	//check input for emptiness
	if(one.value == "" || two.value == "" || three.value == "" || four.value =="" || five.value == ""){
		display.innerHTML = "you should fill the boxes.";
		colour.style.border = "1px solid red";
		hairLength.style.border = "1px solid red";
		eyeColour.style.border = "1px solid red";
		height.style.border = "1px solid red";
		faceShape.style.border = "1px solid red";

		
	} else {
		//handles original properties of pure breeds
		if(one.value == caucasian[0] && two.value == caucasian[1] && three.value == caucasian[2] && four.value == caucasian[3] && five.value == caucasian[4]){
			display.innerHTML = "I can safely say you are caucasian.";
			/*colour.style.border = "1px solid amber";
			hairLength.style.border = "1px solid amber";
			eyeColour.style.border = "1px solid amber";
			height.style.border = "1px solid amber";
			faceShape.style.border = "1px solid amber";*/
		}else if(one.value == african[0] && two.value == african[1] && three.value == african[2] && four.value == african[3] && five.value == african[4]){
			display.innerHTML = "I can safely say you are african.";
		}else if(one.value == asian[0] && two.value == asian[1] && three.value == asian[2] && four.value == asian[3] && five.value == asian[4]){
			display.innerHTML = "I can safely say you are asian.";
		//handles derived properities of mixed breeds
		}else if((one.value == asian[0] || caucasian[0]) && (two.value == asian[1] || caucasian[1]) && (three.value == asian[2] || caucasian[2]) && (four.value == asian[3] || caucasian[3]) && (five.value == asian[4] || caucasian[4])){
			display.innerHTML = "I can safely say you are a first generation asian-caucasian hybrid.";
		}else if((one.value == asian[0] || african[0]) && (two.value == asian[1] || african[1]) && (three.value == asian[2] || african[2]) && (four.value == asian[3] || african[3]) && (five.value == asian[4] || african[4])){
			display.innerHTML = "I can safely say you are a first generation african-asian hybrid.";
		}else if((one.value == caucasian[0] || african[0]) && (two.value == caucasian[1] || african[1]) && (three.value == caucasian[2] || african[2]) && (four.value == caucasian[3] || african[3]) && (five.value == caucasian[4] || african[4])){
			display.innerHTML = "I can safely say you are a first generation african-caucasian hybrid.";
		}else{
			
			display.innerHTML = "you are unique. the very first of your kind.";}
	//	}
	};
};
		
