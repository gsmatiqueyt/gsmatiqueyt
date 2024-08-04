document.addEventListener("DOMContentLoaded", function() {
    // Create the ad container
    var adContainer = document.createElement('div');
    adContainer.style.position = 'relative';
    adContainer.style.width = '728px';
    adContainer.style.height = '90px';

    // Create the overlay
    var overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.backgroundColor = '#00ff0f';
    overlay.style.color = 'black';
    overlay.style.padding = '5px';
    overlay.style.fontSize = '12px';
    overlay.style.zIndex = '10';
    overlay.style.fontFamily = 'arial,Impact';

    var overlayLink = document.createElement('a');
    overlayLink.href = 'https://www.youtube.com/@gsm_atique';
    overlayLink.target = '_blank';
    overlayLink.style.color = 'black';
    overlayLink.style.textDecoration = 'none';
    overlayLink.textContent = 'GSM ATIQUE YT';
    overlay.appendChild(overlayLink);

    adContainer.appendChild(overlay);

    // Google ad script
    var adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.text = `
        google_ad_client = "pub-9131020934902256";
        google_ad_host = "pub-8726151893822553";
        google_ad_width = 728;
        google_ad_height = 90;
        google_ad_type = "text_image";
        google_color_border = "FFFFFF";
        google_color_bg = "ffffff";
        google_color_link = "0000ff";
        google_color_text = "000000";
        google_color_url = "008000";
        google_page_url = "https://yo.fan/hahbazjan/";
    `;
    var adShowScript = document.createElement('script');
    adShowScript.src = 'https://pagead2.googlesyndication.com/pagead/show_ads.js';
    adShowScript.type = 'text/javascript';

    adContainer.appendChild(adScript);
    adContainer.appendChild(adShowScript);

    document.body.appendChild(adContainer);
});
