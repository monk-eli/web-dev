const gallery = document.querySelector("#gallery")
const preloader = document.querySelector("#pre-loader")
const error = document.querySelector('#error-handle')

let imagesList

window.addEventListener("load", async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(data => {
            let lowerRange = Math.random() * 4500;
            imagesList = data.slice(lowerRange, lowerRange + 8);

            imagesList.forEach(img => {
                gallery.innerHTML += `
                    <div class="view overlay hm-black-light gallery-item">
                        <img src="${img.url}" class="img-fluid" alt="">
                    </div>
                `;
            })

            gallery.style.display = "grid";
            preloader.style.display = "none";
        })
        .catch(() => {
            error.style.display = "block";
            preloader.style.display = "none";
            gallery.style.display = "none";
        });
});