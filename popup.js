chrome.storage.local.get(["analysisResult"]).then((result) => {
  const analysis = result.analysisResult;
  console.log("Value is:", analysis);
});

