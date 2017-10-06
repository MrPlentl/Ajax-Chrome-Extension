// controller.js

// Note that the jsonUrl fetched here must match the URL listed in the permissions in the manifest.json file!
const jsonUrl = "http://www.mocky.io/v2/5185415ba171ea3a00704eed"; // Return: {"hello": "world"}

function goGetResponse()
{
    // Documentation
    // sendRequest − chrome.extension.sendRequest(string extensionId (optional), any request, function responseCallback (optional))
    chrome.extension.sendRequest(
        {
            'myCommand' : 'fetch_data',
            'url' : jsonUrl
        },
        function(responseData)
        {
            let jsonObj = JSON.parse(responseData);   // Expected response: {"hello": "world"}
            document.getElementById("ajax-response").innerHTML = jsonObj.hello;
        }
    );
}

// When the User clicks the extension icon, the view.html page
//      loads in and includes this JavaScript file
// When the view is loaded/ready, fire off the
//      goGetResponse() function
document.addEventListener("DOMContentLoaded", function(event) {
    goGetResponse();
});