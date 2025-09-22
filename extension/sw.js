console.log("hello from sw.js")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'textSelected') {
    const highlightedText = request.text;

    console.log("Received message from:", sender.tab ? sender.tab.url : "the extension");
    console.log("highlighted text:", highlightedText);

    //model_response = getModelResponse(highlightedText)
    chrome.storage.local.set({status: "loading", analysisResult: null});
    getModelResponse(highlightedText).then(model_response => {
      chrome.storage.local.set({status: "complete", analysisResult: model_response})
      sendResponse({status: "success", message: "Analysis saved"});
    });
    return true;
  }
});

async function getModelResponse(text) {
  const url = "http://127.0.0.1:8000/analyze";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({highlighted_text: text})
    });
  if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  const result = await response.json();
  console.log(result);
  return result;

  } catch (error) {
    console.error("Analysis Failed:", error.message);
    chrome.storage.local.set({status: "error", analysisResult: null})
  }
  
}
