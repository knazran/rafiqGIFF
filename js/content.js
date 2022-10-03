console.log("in content");

const words = ["Takaful"];
document.body.innerHTML = document.body.innerHTML.replaceAll(
  "Takaful",
  '<span class="bg-yellow-200">Takaful</span><button class="rounded-full bg-blue-100 p-1">Info</button>'
);

// const textBasedElements = ["h1", "h2", "h3", "p", "div", "span", "b"];

// textBasedElements.forEach((el) => {
//   let aa = document.getElementsByTagName(el);
//   for (i = 0; i <= aa.length; i++) {
//     if (aa[i]) {
//       aa[i].innerHTML = aa[i].innerHTML.replaceAll(
//         "Takaful",
//         '<span class="bg-yellow-200">Takaful</span><button class="rounded-full bg-blue-100 p-1">Info</button>'
//       );
//     }
//   }
// });

// document.body.innerText = document.body.innerText.replaceAll(
//   "Mudharabah",
//   '<span class="bg-yellow-200">Mudharabah</span><button class="rounded-full bg-blue-100 p-1">Info</button>'
// );

$(document).ready(function () {
  // console.log("in content");
  // document.body.innerHTML = document.body.innerHTML.replaceAll(
  //   "Chrome",
  //   '<span class="bg-yellow-200">Chrome</span><button class="rounded-full bg-blue-100 p-1">Info</button>'
  // );
  let currentUrl = window.location.href;
  // console.log(currentUrl)
  if (currentUrl === "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/online_banking/shariah_compliant_products_listing.page?"){
      $("div.sectionTitle").text("Rafiq App!");
      renderWidget("html/intro_widget.html");
  }
});

function renderWidget(htmlTemplate) {
  if ($("#rafiq-side-widget").length < 1) {
    $("body").append("<div id='rafiq-side-widget'></div>");
    let widgetHTMLPath = chrome.extension.getURL(htmlTemplate);
    $("#rafiq-side-widget").load(widgetHTMLPath);
  }
}
