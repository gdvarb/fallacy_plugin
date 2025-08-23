console.log("hello from sw.js")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'textSelected') {
    const highlightedText = request.text;
    console.log("Received message from:", sender.tab ? sender.tab.url : "the extension");
    // Perform action here ...
    console.log("highlighted text:", highlightedText)

    sendResponse({status: "success", message: "Action performed"});
  }
});
