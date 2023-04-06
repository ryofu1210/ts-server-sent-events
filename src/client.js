// client.ts
document.addEventListener("DOMContentLoaded", function () {
    var timeElement = document.getElementById("time");
    if (timeElement) {
        var eventSource = new EventSource("http://localhost:3000/events");
        eventSource.onmessage = function (event) {
            timeElement.innerHTML = "Current server time: ".concat(event.data);
        };
        eventSource.onerror = function () {
            timeElement.innerHTML = "Connection error";
        };
    }
});
