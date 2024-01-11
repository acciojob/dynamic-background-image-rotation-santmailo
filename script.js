//your JS code here. If required.
function setBodyBackground() {
        // Get the screen width and height
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        // Determine the screen orientation
        var isPortrait = screenHeight > screenWidth;

        // Get the body element
        var body = document.body;

        // Set the background image based on the screen orientation
        if (isPortrait) {
            body.style.backgroundImage = 'url("https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg")';
        } else {
            body.style.backgroundImage = 'url("https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg")';
        }
    }

    // Call the function on page load and when the screen is resized
    window.addEventListener('load', setBodyBackground);
    window.addEventListener('resize', setBodyBackground);
