// Hiệu ứng cho slider feedback
document.getElementById('next').onclick = () => {
    const widthItem = document.querySelector(".feedback-item").offsetWidth + 20;
    document.getElementById("form-list").scrollLeft += widthItem;
}


document.getElementById('prev').onclick = () => {
    const widthItem = document.querySelector(".feedback-item").offsetWidth + 20;
    document.getElementById("form-list").scrollLeft -= widthItem;
}



const mybutton = document.getElementById("scroll-top-btn");
const scrollTop2 = document.getElementById("btn-scroll-top-2");
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





  // <!-- Xử lý cho hiệu ứng filter ở Projects -->

  var $galleryContainer = $('.gallery').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function () {
    $('.button-group .button').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
        filter: value
    })
})





// Xử lý hiệu ứng scroll ở banner

$(window).scroll(function(){
    if($(window).scrollTop()) {
        $("header").addClass("bg-secondary")
    } else {
        $("header").removeClass("bg-secondary")
    }
})






// Lặp qua tất cả các nút và thêm sự kiện click
document.querySelectorAll('ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Lấy id của phần tử mục tiêu từ href
        const targetId = this.getAttribute('href').substring(1);

        // Lấy phần tử mục tiêu
        const targetElement = document.getElementById(targetId);

        // Cuộn đến phần tử mục tiêu
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


scrollTop2.addEventListener("click", () => {
    console.log("click")
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const scrollTophome = document.getElementById("btn-scroll-top-home");

scrollTophome.addEventListener("click", () => {
    console.log("click")
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




// Hiệu ứng sau khi chuyển trang có # thì scroll đến element chỉ định

if (window.location.href.includes("#projects")) {
    var element = document.getElementById("projects");
element.scrollIntoView({behavior: "smooth"});
}
