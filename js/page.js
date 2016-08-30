/* Copyright 2016 Jeffrey Forms. All rights reserved. */
/* global $ */
ready();

function append(data) {
	console.log(data);
	var id = data.id;
	var type = data.type;
	var val = data.val;
	var required = data.required;
	var validate = data.validate !== null;

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
	var toappend = '<div id="form-input-box-' + id + '" class="form-input-box input-box ' + type + '-box ' + special + '">' + content + '<p id="form-input-box-' + id + '-error" class="text-danger error"></p></div>';

	console.log(toappend);
	$("#main-content-box-page-1").append(toappend);
	if (validate) {
		var d = validate;
		var cr = check($("#form-input-box-" + id).val(), type); //check result

		$("#form-input-box-" + id).blur(function() {
			if (cr.pass) {
				//pass
				window.valid = true;
			}
			else {
				//fail
				$("#form-input-box-" + id + "-error").html(cr.message);
				window.valid = false;
			}
		});
	}

	function check(check, question) {
		var type = d.type;
		var condition = d.condition;
		var value = d.value || null;
		var result;
		var message;
		if (question === "text") {
			if (type === "text") {
				if (condition === "contains") {
					result = check.indexOf(value) > -1;
					message = "Data must contain " + value;
				}
				else if (condition === "dosent_contain") {
					result = check.indexOf(value) === -1;
					message = "Data must not contain " + value;

				}
				else if (condition === "is_email") {
					result = check.match(new RegExp("[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})"));
					message = "Data must be an email";
				}
				else if (condition === "matches") {
					result = check === value;
					message = "Data must match " + value;
				}
			}
			else if (type === "number") {
				if (condition === "is_number") {
					result = !isNaN(check);
					message = "Data must be a number";
				}
				else if (condition === "is_integer") {
					var n = ~~Number(check);
					result = String(n) === check;
					message = "Data must be an integer";
				}
				else if (condition === "greater_than") {
					result = check > value;
					message = "Data must be greater than " + value;
				}
				else if (condition === "less_than") {
					result = check < value;
					message = "Data must be less than " + value;
				}
				else if (condition === "greater_than_or_equal_to") {
					result = check >= value;
					message = "Data must be greater than or equal to " + value;
				}
				else if (condition === "less_than_or_equal_to") {
					result = check <= value;
					message = "Data must be less than or equal to " + value;
				}
				else if (condition === "equals") {
					result = check === value;
					message = "Data must be equal to " + value;
				}
				else if (condition === "between") {
					result = check < value.max && check > value.min;
					message = "Data must be between " + value.min + " and " + value.max + " exclusive.";
				}
			}
			else if (type === "regex") {
				if (value.indexOf("/") > -1) {
					result = new RegExp(value.split("/")[1], value.split("/")[2]).test(check);
				}
				else {
					result = new RegExp(value);
				}
				message = "Data must match the custom regular expression: " + value;
			}
			else if (type === "length") {
				if (condition === "greater_than") {
					result = check.length > value;
					message = "length must be greater than or equal to " + value;
				}
				else if (condition === "less_than") {
					result = check.length < value;
					message = "length must be less than" + value;
				}
				else if (condition === "greater_than_or_equal_to") {
					result = check.length >= value;
					message = "length must be greater than or equal to" + value;
				}
				else if (condition === "less_than_or_equal_to") {
					result = check.length <= value;
					message = "length must be less than or equal to" + value;
				}
				else if (condition === "equals") {
					result = check.length === value;
					message = "length must be equal to" + value;
				}
				else if (condition === "between") {
					result = check.length < value.max && check.length > value.min;
					message = "length must be between " + value.min + " and " + value.max + " exclusive.";
				}
			}
		}
		return {
			pass: result,
			message: data.message || message
		};
	}
}

function ready() {
	var data = [{
		id: "-SKdjaijfuaisdvmadsoI",
		type: "text",
		val: "What is your full name?",
		required: true,
		validate: {
			type: "text",
			condition: "contains",
			value: "dog"
		}
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
