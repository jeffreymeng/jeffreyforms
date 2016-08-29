/* Copyright 2016 Jeffrey Forms. All rights reserved. */
/* global $ */
ready();

function append(data) {
	console.log(data);
	var id = data.id;
	var type = data.type;
	var val = data.val;
	var required = data.required;
	var validate = data.validate;
	var content;
	var special = "";
	if (required) {
		special = " required";
	}
	if (validate) {
		special += " validate";
	}
	if (type === "text") {
		content = "<p class=' question label-" + type + "'>" + val + "</p><br><input type='text' id='input-" + id + "' class='form-control text-input" + special + "'>";
	}
	else if (type === "number") {
		content = "<p class=' question label-" + type + "'>" + val + "</p><br><input type='number' id='input-" + id + "' class='form-control number-input" + special + "'>";
	}


	console.log(content);
	var toappend = '<div id="form-input-box-' + id + '" class="form-input-box input-box ' + type + '-box ' + special + '">' + content + '</div>';

	console.log(toappend);
	$("#main-content-box-page-1").append(toappend);
}

function ready() {
	var data = [{
		id: "-SKdjaijfuaisdvmadsoI",
		type: "text",
		val: "What is your full name?",
		required: true,
		validate: true
	}];
	var info = {
		submit: "Submit"
	};
	$("#form-submit-btn").html(info.submit);
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
		append(data[i]);
	}

}
