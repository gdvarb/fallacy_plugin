console.log("hello from sw.js")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'textSelected') {
    const highlightedText = request.text;

    console.log("Received message from:", sender.tab ? sender.tab.url : "the extension");
    console.log("highlighted text:", highlightedText);

    //model_response = getModelResponse(highlightedText)
    chrome.storage.local.set({status: "loading", analysysResult: null});
    getModelResponse(highlightedText).then(model_response => {
      chrome.storage.local.set({status: "complete", analysysResult: model_response})
      sendResponse({status: "success", message: "Analysis saved"});
    });
    return true;
  }
});

async function getModelResponse(text) {
  const url = "need to add";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({highlighted_text: text})
    });
  if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  const result = await response.json();
  console.log(result);
  return result;

  } catch (error) {
    console.error(error.message);
  }
  
}
