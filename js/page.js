/* Copyright 2016 Jeffrey Forms. All rights reserved. */
/* global $ */
ready();

function appendBox(id, type, val, required, validate) {
    var content;
    switch (type.type) {
        case "text":
            content="<input type='text' id='input-" + id + "' class='form-control text-input" + validate === true ? " validate" : "" + validate === true ? " required" : "" + "'>";
            break;
        case "number":
            content="<input type='number' id='input-" + id + "' class='form-control number-input" + validate === true ? " validate" : "" + validate === true ? " required" : "" + "'>";
            break;
        default:
            console.log("Internal Append Box Error: type invalid");
    }

    $("#content-box").append('<div id="form-input-box-' + id + '" class="form-input-box input-box ' + type + '-box' + validate === true ? " validate" : "" + validate === true ? " required" : "" + '">' +
        content +
        '</div>');
}

function ready() {
    appendBox();
}
