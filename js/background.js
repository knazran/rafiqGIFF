// chrome.tabs.onActivated.addListener((tab, info, tad) => {
//   chrome.tabs.get(tab.tabId, (current_tab_info) => {
//     console.log(current_tab_info.url);
//     injectDependeciesScripts(tab.id);
//     chrome.tabs.executeScript(tab.id, { file: "js/content.js" }, () =>
//       console.log("2 injected")
//     );
//   });
// });

chrome.webNavigation.onCompleted.addListener((details) => {
  injectDependeciesScripts(details.tabId);
  chrome.tabs.executeScript(details.tabId, { file: "js/content.js" }, () =>
    console.log("2 injected")
  );
});

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   // chrome.tabs.get(tabId, (current_tab_info) => {
//   //   console.log(current_tab_info.url);
//   //   injectDependeciesScripts(tab.id);
//   //   chrome.tabs.executeScript(null, { file: "js/content.js" }, () =>
//   //     console.log("2 injected")
//   //   );
//   // });
//   if (changeInfo.status === "complete") {
//     /* checking & injecting stuff */
//     injectDependeciesScripts(tabId);
//     chrome.tabs.executeScript(
//       tabId,
//       { file: "js/content.js" },
//       () => console.log("2 injected"),
//       "document_end"
//     );
//   }
// });

// Helper function to inject any script dependencies so our content script can use
function injectDependeciesScripts(tab_id) {
  chrome.tabs.executeScript(tab_id, {
    file: "js/libraries/jquery-3.5.1.min.js",
  });
  chrome.tabs.insertCSS(tab_id, {
    file: "css/tailwind.min.css",
  });
  chrome.tabs.insertCSS(tab_id, {
    file: "css/content.css",
  });
}
