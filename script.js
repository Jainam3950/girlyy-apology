/* ================================
   PAGE NAVIGATION
================================ */

function goTo(page) {

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = page;

    }, 300);
}


/* ================================
   PAGE FADE IN
================================ */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});


/* ================================
   FLOATING HEARTS
================================ */

function createFloatingHeart() {

    const container = document.querySelector(".floating-hearts");

    if (!container) return;

    const heart = document.createElement("div");

    heart.classList.add("heart-float");

    const hearts = ["♡", "♥", "✿", "❀", "🤍"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);
}


setInterval(createFloatingHeart, 700);


/* ================================
   FINAL SURPRISE
================================ */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            createFloatingHeart();

        }, i * 100);

    }

    alert("Just wanted you to know... I'm really sorry. 🤍 Love You My Dikuuu..😭🌻");
}