elements = document.querySelectorAll(".table__elem");


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
        for (let x = 0; x < elements.length; x++) {
            elements[x].classList.remove("active");            
        }
        elements[i].classList.add("active");
    })
}
