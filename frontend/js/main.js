/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        nav: true,
        navText: [
            '<div class="Subject-Arrow-Left-Column"><div class="Subject-Left-SpriteMaterial"></div></div>',
            '<div class="Subject-Arrow-Right-Column"><div class="Subject-Right-SpriteMaterial"></div></div>'
        ],
        navContainerClass: 'Subject-Slider-Control',
        navClass: [
            'slider-control-centerleft',
            'slider-control-centerright'
        ],
        navElement: 'div',
        stageOuterClass: 'Subject-Stage-Outer',
        stageClass: 'Subject-Stage',
        dotsContainer: '#carousel-custom-dots',
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
            $(actives[item]).addClass('active').siblings().removeClass('active');

        }

    });
    $('.Subject-Carousel-Pager').click(function() {
        $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
        $(this).addClass('active').siblings().removeClass('active');

    });
    $('.Gellary').owlCarousel({
        stageOuterClass: 'About-Pic-Column',
        stageClass: 'About-Pic',
        nav: true,
        navContainerClass: 'Subject-Slider-Control',
        navClass: [
            'slider-control-centerleft',
            'slider-control-centerright'
        ],
        dotsClass: 'About-Dots-Container',
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
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300,
        speedAsDuration: true
    });
});