const words = ["Mudarabah", "Sukuk", "Crypto", "Takaful", "Muamalat"];

const infoIcon = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.5" cy="14.5" r="14.5" fill="#016D33"/>
<g clip-path="url(#clip0_2_245)">
<path d="M14.4999 2.63287C14.549 2.63287 14.5977 2.63287 14.6461 2.63287C14.1684 3.06469 13.8614 3.6457 13.7784 4.27492C13.6954 4.90413 13.8416 5.54175 14.1916 6.07696C14.5417 6.61216 15.0734 7.0111 15.6944 7.20443C16.3154 7.39775 16.9863 7.37325 17.5907 7.13516C17.3582 7.67941 16.9783 8.15205 16.4914 8.50266C16.0044 8.85327 15.4289 9.06871 14.826 9.126C14.2231 9.18328 13.6155 9.08026 13.0681 8.82792C12.5207 8.57558 12.054 8.1834 11.7177 7.69319C11.3814 7.20299 11.1881 6.63316 11.1586 6.04449C11.129 5.45581 11.2643 4.87038 11.5499 4.35063C11.8355 3.83088 12.2608 3.39631 12.7803 3.09328C13.2999 2.79024 13.8942 2.63012 14.4999 2.62997V2.63287Z" fill="white"/>
<path d="M16.359 2.9946C16.359 3.18648 16.4373 3.3705 16.5768 3.50618C16.7162 3.64187 16.9054 3.71809 17.1026 3.71809C16.9054 3.71809 16.7162 3.79432 16.5768 3.93C16.4373 4.06568 16.359 4.2497 16.359 4.44158C16.359 4.2497 16.2806 4.06568 16.1412 3.93C16.0017 3.79432 15.8126 3.71809 15.6154 3.71809C15.8126 3.71809 16.0017 3.64187 16.1412 3.50618C16.2806 3.3705 16.359 3.18648 16.359 2.9946Z" fill="white"/>
<path d="M17.1025 5.5268H17.8461H17.1025ZM17.4743 5.16505V5.88855V5.16505Z" fill="white"/>
<path d="M17.1025 5.5268H17.8461M17.4743 5.16505V5.88855" stroke="white" stroke-width="0.19863" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<rect x="12.0884" y="10.3501" width="4.09979" height="16.1178" rx="1.08524" fill="white" stroke="white" stroke-width="0.241164"/>
<defs>
<clipPath id="clip0_2_245">
<rect width="8.92308" height="8.68191" fill="white" transform="translate(10.0385 1.54755)"/>
</clipPath>
</defs>
</svg>
`;

$(document).ready(function () {
  console.log("in content.js");

  let buttonIds = [];

  const textBasedElements = ["p"];
  textBasedElements.forEach((el) => {
    let aa = document.getElementsByTagName(el);
    for (i = 0; i <= aa.length; i++) {
      if (aa[i]) {
        words.forEach((word) => {
          aa[i].innerHTML = aa[i].innerHTML.replaceAll(
            word,
            `<span class="bg-yellow-200">${word}</span><button type="button" data-word="${word}" id="">${infoIcon}</button>`
          );
          aa[i].innerHTML = aa[i].innerHTML.replaceAll(
            word.toLowerCase(),
            `<span class="bg-yellow-200">${word.toLowerCase()}</span><button type="button" data-word="${word}" id="">${infoIcon}</button>`
          );
        });

        words.forEach((word) => {
          const elements = document.querySelectorAll(`[data-word="${word}"]`);
          elements.forEach((elem) => {
            const buttonId = `${word}-${Math.floor(Math.random() * 10000) + 1}`;
            elem.setAttribute("id", buttonId);

            if (!buttonIds.includes(buttonId)) {
              buttonIds.push(buttonId);
            }
          });
        });
      }
    }
  });

  buttonIds.forEach((buttonId) => {
    document.getElementById(buttonId)?.addEventListener("click", () => {
      // TODO popup
      console.log("Noice, clicked on", buttonId);
    });
  });

  let currentUrl = window.location.href;
  // console.log(currentUrl)
  if (
    currentUrl ===
    "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/online_banking/shariah_compliant_products_listing.page?"
  ) {
    $("div.sectionTitle").text("Rafiq App!");
    renderWidget("html/mudarabah_widget.html");
  }
});

function renderWidget(htmlTemplate) {
  if ($("#rafiq-side-widget").length < 1) {
    $("body").append("<div id='rafiq-side-widget'></div>");
    let widgetHTMLPath = chrome.extension.getURL(htmlTemplate);
    $("#rafiq-side-widget").load(widgetHTMLPath);
  }
}
