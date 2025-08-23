console.log("hello from sw.js")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'textSelected') {
    const highlightedText = request.text;
    console.log("Received message from:", sender.tab ? sender.tab.url : "the extension");
    // Perform action here ...
    console.log("highlighted text:", highlightedText);
    model_response = getModelResponse(highlightedText)

    sendResponse({status: "success", message: "Action performed"});
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
