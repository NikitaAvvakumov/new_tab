function saveOptions(event) {
    event.preventDefault();
    if (window.broswer) {
        saveOptionsInFirefox();
    } else if (window.chrome) {
        saveOptionsInChrome();
    }
}

function saveOptionsInFirefox() {
    browser.storage.local.set({
        new_tabDegrees: document.querySelector("input[name='degrees']:checked").value,
        new_tabCity: document.querySelector("#cityChoice").value
    })
    .then(() => {
        showSuccessFlash();
    })
    .catch(error => {
        console.error("error saving options", error);
        showFailureFlash();
    });
    
}

function saveOptionsInChrome() {
    chrome.storage.local.set({
        new_tabDegrees: document.querySelector("input[name='degrees']:checked").value,
        new_tabCity: document.querySelector("#cityChoice").value
    }, (() => {
        if (chrome.runtime.lastError) {
            console.error("error saving options", error);
            showFailureFlash();
        } else {
            showSuccessFlash();
        }
    }));
}

function showFailureFlash() {
    const flashContainer = document.querySelector("#flash-container");
    flashContainer.textContent = "failed to save options";
    flashContainer.className = "flash failure";
}

function showSuccessFlash() {
    const flashContainer = document.querySelector("#flash-container");
    flashContainer.textContent = "options saved";
    flashContainer.className = "flash success";
}

function restoreOptions() {
    if (window.browser) {
        restoreOptionsInFirefox();
    } else if (window.chrome) {
        restoreOptionsinChrome();
    }
}

function restoreOptionsInFirefox() {
    browser.storage.local.get(["new_tabDegrees", "new_tabCity"])
    .then(options => {
        cb(options);
    })
    .catch(error => {
        console.error("error fetching weather options", error);
        cb({new_tabDegrees: "metric", new_tabCity: "Tartu"});
    });
}

function restoreOptionsinChrome() {
    chrome.storage.local.get(["new_tabDegrees", "new_tabCity"], (options => {
        cb(options);
    }));
}

function cb(options) {
    const {new_tabDegrees, new_tabCity} = options;
    const degreeRadios = document.getElementsByName("degrees");
    for (let radio of degreeRadios) {
        if (radio.value === new_tabDegrees) {
            radio.checked = true;
        }
    }
    document.querySelector("#cityChoice").value = new_tabCity;
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);