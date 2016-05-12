// function for loading the information for the left side
function leftside(){
	// make ajax call for uneaten
	$.ajax({
		method: "get",
		url: "api/uneaten"
	}).done(function(data) {
		// create the div
		var theDiv = $("<div>").addClass("uneaten")
		// go through each row of data
		for (var i = 0; i < data.length; i++) {
			// make another div
			var innerDiv = $("<div>").addClass("leftInner");
			// make text representing burger
			var burger = $("<p>").addClass("aBurger")
									 .text(data[i].burger_name)
									 .attr("data-name", data[i].burger_name);
			// make a button for eating the burger
			var eater = $("<button class='btn btn-warning btn-xs'>").addClass("eatBurger")
									.text("Eat!!")
									.attr("data-name", data[i].burger_name);
			// append this info to the div
			innerDiv.append(burger, eater);
			// append the inner div to the father div
			theDiv.append(innerDiv);
		}
		// with the loop finished, append this div to the site
		$("#leftside").html(theDiv);
	})
}

// function adds a burger
function addBurger(){
	// first we need to grab the text in the input field
	var data = {'name': ($('#addBurg').val().trim())};
	// kill the function if data is nothing
	if (!data) {
		return false;
	}
	// if it is, though, make sure we clear out the input
	else {
		$('#addBurg').val('');
	}
	// and let's continue by making the ajax call
	$.post("api/add", data)
	.done(function(data){
		leftside();
	})
}

// function for loading the information for the left side
function rightside(){
	// make ajax call for uneaten
	$.ajax({
		method: "GET",
		url: "api/eaten"
	}).done(function(data) {
		// create the div
		var theDiv = $("<div>").addClass("eaten")
		// go through each row of data
		for (var i = 0; i < data.length; i++) {
			// make another div
			var innerDiv = $("<div>").addClass("leftInner");
			// make text representing burger
			var burger = $("<p>").addClass("aBurger")
									 .text(data[i].burger_name)
									 .attr("data-name", data[i].burger_name);
			// append this info to the div
			innerDiv.append(burger);
			// append the inner div to the father div
			theDiv.append(innerDiv);
		}
		// with the loop finished, append this div to the site
		$("#rightside").html(theDiv);
	})
}

// eat a burger
function eatBurger(burger) {
	// set up data
	var data = {"name": burger};
	// make ajax call
	$.ajax({
		method: "PUT",
		url: "api/eat",
		data: data
	}).done(function(data){
		leftside();
		rightside();
	});
}

// calls
// when doc is ready
$(document).ready(function(){
	leftside();
	rightside();
})

// when we press the add button
$(document).on("click", "#addIt", function(){
	addBurger();
	return false;
})

// when we press one of the eat buttons;
$(document).on("click", ".eatBurger", function(){
	eatBurger($(this).attr('data-name'));
})

