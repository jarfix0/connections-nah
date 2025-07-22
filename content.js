function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replace(/connection/gi, "Friend");
      node.textContent = node.textContent.replace(/connect/gi, "Friends");
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (const child of node.childNodes) {
      replaceText(child);
    }
  }
}

replaceText(document.body);

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      replaceText(node);
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
