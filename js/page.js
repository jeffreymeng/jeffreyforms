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
    switch (type) {
        case "text":
            content = "<label for='input-" + id + "' class='label question label-" + type + "'>" + val + "<br><input type='text' id='input-" + id + "' class='form-control text-input" + validate === true ? " validate" : "" + required === true ? " required" : "" + "'>";
            break;
        case "number":
            content = "<label for='input-" + id + "' class='label question label-" + type + "'>" + val + "<input type='number' id='input-" + id + "' class='form-control number-input" + validate === true ? " validate" : "" + required === true ? " required" : "" + "'>";
            break;
        default:
            console.log("Internal Append Box Error: type invalid");
    }

    $("#main-content-box-page-1").append('<div id="form-input-box-' + id + '" class="form-input-box input-box ' + type + '-box' + validate === true ? " validate" : "" + required === true ? " required" : "" + '">' +
        content +
        '</div>');
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
