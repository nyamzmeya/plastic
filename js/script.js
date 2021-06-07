$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
        autoplay: true,
		speed:1000,
		autoplaySpeed:800,
	});
	$('.slider2').slick({
		arrows:true,
		dots:true,
		slidesToShow: 2,
		slidesToScroll: 2,
		rows: 3,
        autoplay: false,
		speed:1000,
		autoplaySpeed:800,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}],
		customPaging : function(slider, i) {
			let thumb = $(slider.$slides[i]).data();
			return '<a class="dot">'+ `${i+ 1}` + '</a>';
		}
	});
});

$('.dropbtn').click(function() {
    $('.dropdown-content').toggle();
    $(this).toggleClass('active');
    return false;
})


let menu = document.querySelector(".navbar");
let ham = document.querySelector(".hamburger");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
	ham.classList.toggle('isactive');
	menu.classList.toggle('showMenu');
}



