function currentPage(uri) {
    if (uri === undefined) {
        return window.location.href
    } else {
        window.location.replace(uri)
    }
}

function ghRedirect() {
    if (currentPage().toLowerCase().includes("/gh/")) {
        let trimURL = window.location.pathname.replace("/gh/","joshuah345/")
        let newURL = ("https://github.com/" + trimURL)
        console.log("redirecting to github...")
        currentPage(newURL)
    } else {
        currentPage(window.location.origin)
    }
}