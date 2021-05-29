document.addEventListener("DOMContentLoaded", () => {
    const randomBtn = document.querySelector(".random-btn")

    randomBtn?.addEventListener("click", () => {
        document.location.href = LINKS[getRandomInt(5)]
    })


    const linkElems = document.querySelectorAll("a.row-item")
    linkElems.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault()
            const timeout = setTimeout(() => {
                document.location.href = link.href
            }, 3000)
            linkElems.forEach((link, idx) => {
                if (idx === 1) {
                    link.style.animation = `go-top 3.5s ease`
                } else {
                    link.style.animation = `go-down 3.5s ease`
                }
            })
        })
    })
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const LINKS = [
    "red.html",
    "green.html",
    "yellow.html",
    "blue.html",
    "pink.html",
]