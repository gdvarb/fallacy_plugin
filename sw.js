console.log("hello from sw.js")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "textSelected") {
    const highlightedText = request.text;
    // Perform action here ...
    console.log("highlighted text:", highlightedText)
  }
});
