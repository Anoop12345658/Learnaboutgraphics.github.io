    "use strict";

    function getPlatform() {
        let platform = "Unknown";
        if (navigator.userAgent.includes("Android")) {
            platform = "Android";
        } else if (navigator.userAgent.includes("Win")) {
            platform = "Windows";
        } else if (navigator.userAgent.includes("Mac")) {
            platform = "MacOS";
        }
        return platform;
    }

    switch (getPlatform()) {
      case "Android":
        document.getElementById("Android-tab").checked = true;
        break;
      case "MacOS":
        document.getElementById("macOS-tab").checked = true;
        break;
      case "Windows":
        document.getElementById("windows-tab").checked = true;
        break;
    }