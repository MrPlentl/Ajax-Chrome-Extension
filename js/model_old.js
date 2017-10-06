// The model.js is loaded when the browser starts up

//
function onRequest(request, sender, callback) {
    if (request.myCommand === 'fetch_data') {
        gettingResponse(request.url, callback);
    }
}

function gettingResponse(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(data) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = xhr.responseText;
                callback(data);
            } else {
                alert("FAIL");
                callback(null);
            }
        }
    };

    // Note that any URL fetched here must be matched by
    // the permission in the manifest.json file!
    xhr.open('GET', url, true);
    xhr.send();
}

// Startup the listener to wait for a request from the user
// When a request is made to the model.js (when the user clicks in this case),
// the listener will send it to the onRequest() function
chrome.extension.onRequest.addListener( onRequest );   // .addListener(any request (optional), sender, function callback)