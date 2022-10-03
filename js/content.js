const ifWords = ["Mudarabah", "Sukuk", "Crypto", "Takaful", "Muamalat", "Hibah", "Cryptocurrency", "Cryptocurrencies", "Bitcoin", "Ethereum"];

  const infoIcon = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12.5" fill="#016D33"/>
<g clip-path="url(#clip0_2_245)">
<path d="M12.5 2.26971C12.5423 2.26971 12.5843 2.26971 12.6259 2.26971C12.2142 2.64197 11.9495 3.14285 11.878 3.68527C11.8064 4.2277 11.9324 4.77738 12.2342 5.23876C12.5359 5.70014 12.9943 6.04405 13.5297 6.21071C14.065 6.37737 14.6434 6.35625 15.1644 6.151C14.964 6.62018 14.6364 7.02763 14.2167 7.32988C13.797 7.63213 13.3008 7.81786 12.781 7.86724C12.2613 7.91662 11.7376 7.82781 11.2656 7.61028C10.7937 7.39274 10.3914 7.05465 10.1014 6.63206C9.81154 6.20948 9.64496 5.71824 9.61949 5.21077C9.59402 4.70329 9.71061 4.1986 9.95683 3.75054C10.203 3.30248 10.5696 2.92785 11.0175 2.66662C11.4654 2.40538 11.9778 2.26734 12.5 2.26722V2.26971Z" fill="white"/>
<path d="M14.1026 2.58155C14.1026 2.74697 14.1701 2.90561 14.2903 3.02257C14.4105 3.13954 14.5736 3.20525 14.7436 3.20525C14.5736 3.20525 14.4105 3.27096 14.2903 3.38793C14.1701 3.5049 14.1026 3.66354 14.1026 3.82895C14.1026 3.66354 14.035 3.5049 13.9148 3.38793C13.7946 3.27096 13.6316 3.20525 13.4615 3.20525C13.6316 3.20525 13.7946 3.13954 13.9148 3.02257C14.035 2.90561 14.1026 2.74697 14.1026 2.58155Z" fill="white"/>
<path d="M14.7436 4.76448H15.3846ZM15.0641 4.45263V5.07633Z" fill="white"/>
<path d="M14.7436 4.76448H15.3846M15.0641 4.45263V5.07633" stroke="white" stroke-width="0.19863" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<rect x="10.4376" y="8.93911" width="3.50104" height="13.8614" rx="1.08524" fill="white" stroke="white" stroke-width="0.241164"/>
<defs>
<clipPath id="clip0_2_245">
<rect width="7.69231" height="7.48441" fill="white" transform="translate(8.65384 1.33409)"/>
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
        ifWords.forEach((word) => {
          aa[i].innerHTML = aa[i].innerHTML.replaceAll(
            word,
            `<span class="bg-yellow-200">${word}</span><button style="background-color:transparent; padding:6px; border:0px; min-width:0px" type="button" data-word="${word}" id="">${infoIcon}</button>`
          );
          aa[i].innerHTML = aa[i].innerHTML.replaceAll(
            word.toLowerCase(),
            `<span class="bg-yellow-200">${word.toLowerCase()}</span><button style="background-color:transparent; padding:6px; border:0px; min-width:0px" type="button" data-word="${word}" id="">${infoIcon}</button>`
          );
        });

        ifWords.forEach((word) => {
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
    // } else if (currentUrl === "https://www.malaysiakini.com/news/571676") {
  } else if (
    currentUrl ===
    "https://www.thestar.com.my/business/business-news/2022/09/12/moody039s-expects-global-sukuk-issuance-to-moderate-further-in-h2-at-us70-80bil"
  ) {
    $("div.sectionTitle").text("Rafiq App!");
    renderWidget("html/sukuk_widget.html");
  }  else if (
    currentUrl ===
    "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/loans/investment/asb_financing_i.page?"
  ) {
    console.log("crypto")
    renderWidget("html/crypto_widget.html");
  }
});

function renderWidget(htmlTemplate) {
  if ($("#rafiq-side-widget").length < 1) {
    $("body").append("<div id='rafiq-side-widget'></div>");
    let widgetHTMLPath = chrome.extension.getURL(htmlTemplate);
    $("#rafiq-side-widget").load(widgetHTMLPath);
  }
}
