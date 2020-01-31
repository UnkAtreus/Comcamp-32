// เอา config ที่ไม่ใช่เห็นทันทีไว้ในนี้ เพื่อลดเวลารัน

// Carousel
$(".owl-carousel").owlCarousel({
    margin: 10,
    nav: true,
    navText: [
        '<div class="Subject-Arrow-Left-Column"><div class="Subject-Left-SpriteMaterial"></div></div>',
        '<div class="Subject-Arrow-Right-Column"><div class="Subject-Right-SpriteMaterial"></div></div>'
    ],
    navContainerClass: "Subject-Slider-Control",
    navClass: ["slider-control-centerleft", "slider-control-centerright"],
    navElement: "div",
    stageOuterClass: "Subject-Stage-Outer",
    stageClass: "Subject-Stage",
    dotsContainer: "#carousel-custom-dots",
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    },
    onChanged: function(event) {
        var item = event.item.index;
        var actives = document.getElementsByClassName("Subject-Carousel-Pager");
        $(actives[item])
            .addClass("active")
            .siblings()
            .removeClass("active");
    }
});
$(".Subject-Carousel-Pager").click(function() {
    $(".owl-carousel").trigger("to.owl.carousel", [$(this).index(), 300]);
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
});
$(".Gellary").owlCarousel({
    stageOuterClass: "About-Pic-Column",
    stageClass: "About-Pic",
    loop: true,
    autoplay: true,
    nav: true,
    navContainerClass: "Subject-Slider-Control",
    navClass: ["slider-control-centerleft", "slider-control-centerright"],
    dotsClass: "About-Dots-Container",
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// Accordion
var items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
}
items.forEach(item => item.addEventListener("click", toggleAccordion));