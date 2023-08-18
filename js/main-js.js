
// JavaScript сайта - добавление функционала - Автор Скоморохова Анита Ильинична П19.1

// Замена логотипа у картинки при классе .activeHeader
$('.activeHeader img') // Ищем IMG в родителе
  .eq(0) // Берём первую картинку 
  .attr('src', 'img/svg/LOGO-BLACK.svg'); // Меняем значение атрибута SRC на своё


// Бургер-меню
const iconMenu = document.querySelector('.btn-menu');
if (iconMenu){
    const menuBody = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
        menuBody.classList.toggle("menuActive");
    });
    iconMenu.addEventListener("click", function(e) {
      iconMenu.classList.toggle("btn-menuActive");
  })
}




// Версия для слабовидящих
// new isvek.Bvi({
//   target: '.bvi-open', // Класс инициализации
//   fontSize: 24, // Размер шрифта
//   theme: 'black' // Цветовая тема сайта
// });