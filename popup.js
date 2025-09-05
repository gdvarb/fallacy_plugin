document.addEventListener('DOMContentLoaded', () => {
  
  const displayElement = document.getElementById('analysisParagraph');
  
  // ask for both status and analysisResult
  chrome.storage.local.get(['status', 'analysisResult'], (result) => {
    const analysis = result.analysisResult;
    const status = result.status

    if (status === "loading"){
      displayElement.innerHTML = '<strong>Analysis In Progress...</strong>';
    } else if (status === "error"){
      displayElement.innerHTML= "<strong>Sorry, an error has occurred.</strong>";
    } else if (status === 'complete' && analysis){
      const formattedHtml = `
        <strong>Fallacy Detected:</strong> ${analysis.fallacy}<br>
        <strong>Confidence:</strong> ${Math.round(analysis.confidence * 100)}<br>
        <strong>Explanation:</strong> ${analysis.explanation}
      `;
      displayElement.innerHTML = formattedHtml;
    } else {
      displayElement.textContent = "Highlight text on any page to analyze it.";
    }
  });
});


