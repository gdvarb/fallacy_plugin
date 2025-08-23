function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.getSelection) {
    return document.getSelection().toString();
  } else if (document.selection) {
    return document.selection.createRange().text;
  }
  return '';
}

const selected_text = getSelectedText();
if (selected_text){
  console.log("User highlighted:", selected_text);
} else {
  console.log("No text highlighted")
}

document.addEventListener("mouseup", () => {
  const selected_text = getSelectedText();
  if (selected_text) {
    console.log("Text highlighted after mouse release:", selected_text);
    chrome.runtime.sendMessage({action: 'textSelected', text: selected_text});
  }
});

document.addEventListener("keyup", (event) => {
  const selected_text = getSelectedText();
  if (selected_text) {
    console.log("Text highlighted after key release:", selected_text);
  }
});


document.addEventListener("selectionchange", () => {
  const selected_text = getSelectedText();
  if (selected_text) {
    console.log("Selection changed:", selected_text);
  } else {
    console.log("Selection cleared");
  }
});


