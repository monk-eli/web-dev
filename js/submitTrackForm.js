function onSubmitAddTrack(event) {
    event.preventDefault();
    const fieldValue = document.querySelector('#push-field').value;
    if (fieldValue.length === 0) {
        alert("Enter the track name, bro")
    } else {
        document.querySelector('#track-list').innerHTML += `
            <div class="track">
                <span id="track-name">
                    ${fieldValue}
                </span>
                <div class="track-on-validation">
                    On Validation
                </div>
            </div>
        `;

        const trackList = document.getElementById("track-list");
        localStorage.setItem('track-list', trackList.outerHTML);
    }
}

if (localStorage.getItem('track-list') == null) {
    document.querySelector('#submit-container').innerHTML += '<div id="track-list"></div>\n';
    const trackList = document.getElementById("track-list");
    localStorage.setItem('track-list', trackList.outerHTML);
} else {
    const trackList = localStorage.getItem("track-list");
    document.querySelector('#submit-container').innerHTML += trackList;
}

const form = document.getElementById('submit-track-form');
form.addEventListener('submit', onSubmitAddTrack);
