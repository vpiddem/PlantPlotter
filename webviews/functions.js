// JavaScript Document
var qNum = 0;
var response = "";
var correctAnswers = [0, 1, 2, 3, 4];
var questions = ["",
"Why are leaves green?", 
"How many of the leaves have unfolded?", 
"Why do plants have flowers?",
"How many flowers are there?", 
"Why do plants bear fruit?", 
"How ripe is the fruit?", 
""];
var images = [["","","","",""],
["japanese-maple-leaf.jpg","","","",""],
["", "no-leaves.jpg","few-leaves.jpg","many-leaves.jpg","most-leaves.jpg"],
["japanese-maple-flowers.jpg","","","",""],
["","jack.jpg","jack.jpg","jack.jpg","jack.jpg"],
["japanese-maple-fruit.jpg","","","",""],
["","jack.jpg","jack.jpg","jack.jpg","jack.jpg"],
["back-button.png","","","",""]];
var responses = [["","a","b","c","d"],
["Leaves on deciduous trees change throughout the seasons. Leaves begin to grow in the spring as buds. The bud opens and the tiny leaf’s life begins. The leaves of a Japanese Maple will turn from bright red in the spring, to dark ruddy red in the summer, then back to bright red in the fall before losing its leaves.","a","b","c","d"],
["", "No leaves","Just a few leaves","Many leaves","Most leaves"], 
["The flowers of a plant are very important. Is it because they’re so pretty? Because they might smell nice? Actually, they are important because this is how plants reproduce, or make new plants. The flowers on the red lace-leaf maple appear in the spring with the leaves, but are not very showy. They grow in a loose branching cluster called a panicle.","a","b","c","d"],
["", "No flowers", "Just a few flowers", "Many flowers", "Most flowers have wilted or fallen off"],
["You might think plants bear fruit so we can enjoy their sweet goodness. But Fruits are a way which many plants spread their seeds. Fruits are formed after the flower is fertilized with pollen. The ovules in the pistil will become seeds and the flower will transform into a fruit. The fruit of a Japanese Maple is is a pair of winged samaras. Each samara is two to three centimeters long with a six to eight millimeter seed.","a","b","c","d"],
["", "No ripe fruit", "Just a few ripe fruits", "Many ripe fruits", "Most fruit or seeds have fallen or been eaten"],
["Great Job! Your responses have been recorded. Click to return to the map.","a","b","c","d"]];

function checkResponse(resp) {
	window.speechSynthesis.cancel();
	if (resp == 0 && qNum == 7) {
		window.location = "index.html?l1=y";
	}
	if (qNum < 7) {
		$('#info').hide();
		$('#response1').show();
		$('#response2').show();
		$('#response3').show();
		$('#response4').show();
		qNum = qNum + 1;
		populateTable();
	};
	if (qNum == 7 || qNum == 5 || qNum == 3 || qNum == 1) {
		$('#info_text').text(responses[qNum][0]);
		$('#info_image').attr('src',  "images/" + images[qNum][0]);
		$('#info').show();
		$('#response1').hide();
		$('#response2').hide();
		$('#response3').hide();
		$('#response4').hide();
		var msg = new SpeechSynthesisUtterance(responses[qNum][0]);
		msg.rate = .25; // 0.1 to 10
		msg.pitch = 1; //0 to 2
		var utterance = window.speechSynthesis.speak(msg);
	}
};

function populateTable() {
	$('#question').text(questions[qNum]);
	
	$('#text1').text(responses[qNum][1]);
	$('#image1').attr('src', "images/" + images[qNum][1]);

	$('#text2').text(responses[qNum][2]);
	$('#image2').attr('src', "images/" + images[qNum][2]);

	$('#text3').text(responses[qNum][3]);
	$('#image3').attr('src', "images/" + images[qNum][3]);

	$('#text4').text(responses[qNum][4]);
	$('#image4').attr('src', "images/" + images[qNum][4]);
};
