// client.ts

document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");

  if (timeElement) {
    const eventSource = new EventSource("http://localhost:3000/events");

    eventSource.onmessage = (event: MessageEvent) => {
      timeElement.innerHTML = `Current server time: ${event.data}`;
    };

    eventSource.onerror = () => {
      timeElement.innerHTML = "Connection error";
    };
  }
});
