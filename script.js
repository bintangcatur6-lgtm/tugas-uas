console.log("Website Eigenface berhasil dijalankan!");

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.05)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });

});