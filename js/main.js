const body = document.body;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    body.classList.add("mobile");
} else {
    body.classList.remove("mobile");
}