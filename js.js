// Hiệu ứng cho slider feedback

document.getElementById('next').onclick = () => {
    const widthItem = document.querySelector(".feedback-item").offsetWidth;

    console.log(widthItem, 'le')
    document.getElementById("form-list").scrollLeft += widthItem;
}


document.getElementById('prev').onclick = () => {
    const widthItem = document.querySelector(".feedback-item").offsetWidth;

    console.log(widthItem, 'le')
    document.getElementById("form-list").scrollLeft -= widthItem;
}



const mybutton = document.getElementById("scroll-top-btn");
const header = document.getElementById("header");
const sections = document.querySelectorAll('section');
const threshold = 100; // Khoảng cách từ đầu trang để hiển thị thanh header
let isHeaderVisible = false;

window.onscroll = function () {
    // Logic cho nút scroll top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    // Logic cho hiển thị header
    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollPos > threshold && !isHeaderVisible) {
        header.style.top = "0";
        isHeaderVisible = true;
    } else if (currentScrollPos <= threshold && isHeaderVisible) {
        header.style.top = "-60px";
        isHeaderVisible = false;
    }

    // Logic cho hiển thị phần tử khi scroll
    let top = currentScrollPos;
    let windowHeight = window.innerHeight; // Chiều dài của trang
    let offset = (1/2) * windowHeight;

    sections.forEach(sec => {
        let secOffset = sec.offsetTop - offset;
        let secHeight = sec.offsetHeight;

        if (top >= secOffset && top < secOffset + secHeight) {
            sec.classList.add('show-animate');
        } else {
            // sec.classList.remove('show-animate');
        }
    });
};

mybutton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
