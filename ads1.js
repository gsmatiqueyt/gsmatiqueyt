(function() {
    function loadAd() {
        var googleAdClient = "pub-9131020934902256";
        var googleAdHost = "pub-8726151893822553";
        var googleAdWidth = 728;
        var googleAdHeight = 90;
        var googleAdType = "text_image";
        var googleColorBorder = "FFFFFF";
        var googleColorBg = "ffffff";
        var googleColorLink = "0000ff";
        var googleColorText = "000000";
        var googleColorUrl = "008000";
        var googlePageUrl = "https://yo.fan/hahbazjan/";

        // Remove existing ad script if present
        var existingScript = document.getElementById('ad-script');
        if (existingScript) {
            existingScript.remove();
        }

        // Create and append the new ad script
        var adScript = document.createElement('script');
        adScript.type = 'text/javascript';
        adScript.id = 'ad-script';
        adScript.text = `
            google_ad_client = "${googleAdClient}";
            google_ad_host = "${googleAdHost}";
            google_ad_width = ${googleAdWidth};
            google_ad_height = ${googleAdHeight};
            google_ad_type = "${googleAdType}";
            google_color_border = "${googleColorBorder}";
            google_color_bg = "${googleColorBg}";
            google_color_link = "${googleColorLink}";
            google_color_text = "${googleColorText}";
            google_color_url = "${googleColorUrl}";
            google_page_url = "${googlePageUrl}";
        `;

        var script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/show_ads.js';
        script.type = 'text/javascript';

        document.head.appendChild(adScript);
        document.head.appendChild(script);
    }

    // Load ad initially
    loadAd();

    // Reload ad every 10 seconds
    setInterval(loadAd, 10000);
})();
