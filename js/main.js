$(function () {

    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

});



document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполниет поле имя");
    } else if (document.getElementById("surname").value === "") {
        alert("Заполниет поле фамилия");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполниет поле телефон");
    } else if (document.getElementById("color").value === "") {
        alert("Заполниет поле цвет");
    } else {
        alert("Спасибо за заявку. Мы свяжемся с Вами в ближайшее время");
    }
};