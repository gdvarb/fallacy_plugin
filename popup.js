document.addEventListener('DOMContentLoaded', () => {
  
  const displayElement = document.getElementById('analysisParagraph');

  chrome.storage.local.get(["analysisResult"]).then((result) => {
    const analysis = result.analysisResult;
    console.log("Value is:", analysis);

    if (analysis){

      const formattedHtml = `
        <strong>Fallacy Detected:</strong> ${analysis.fallacy}<br>
        <strong>Confidence:</strong> ${Math.round(analysis.confidence * 100)}<br>
        <strong>Explanation:</strong> ${analysis.explanation}
      `;
      displayElement.textContent = formattedHtml;
    } else {
      const formattedHtml = `<strong>Analysis In Progress...</strong>`
      displayElement.textContent = formattedHtml;
    }
  });
});


