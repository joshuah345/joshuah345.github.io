function currentPage(uri) {
    if (uri === undefined) {
        return window.location.href
    } else {
        window.location.href = `${uri}`
    }
}

 function ghRedirect() {
    if (currentPage().toLowerCase().includes("/gh")) {
        var trimURL = window.location.pathname.replace("gh","joshuah345")
        var newURL = ("https://github.com" + trimURL)
        console.log("redirecting to github...")
     } else {
        newURL = window.location.origin
    }
    currentPage(newURL)
} 


