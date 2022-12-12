(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.querySelector(".pageLoadTime").innerText = `loading took: ${endTime - startTime} ms`;
    });
})();