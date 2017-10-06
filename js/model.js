// The model.js is loaded when the browser starts up

//
function onRequest(request, sender, callback) {
	// The myCommand variable was defined in the sendRequest
	if (request.myCommand === 'fetch_data') {
		makingRequest(request.url, callback);
	}
}

function makingRequest(url, callback) {
	let xhr = new XMLHttpRequest();
    let responseData;

	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				responseData = xhr.responseText;
				callback(responseData);   // Remember that the callback() function has been passed in and along when the sendRequest was created in the goGetResponse function (controller.js)
			} else {
				alert("Something Failed. Check the URL to make sure it is valid.");
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