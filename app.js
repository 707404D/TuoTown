let previewSlider = $("#previewSlider");

previewSlider.slick({
   infinite: true,
   // centerMode: true,
   // centerPadding: "0px",
   slidesToShow: 1,
   slidesToScroll: 1,
   // adaptiveHeight: true,

   arrows: true,
   dots: true,
   prevArrow: $('.preview__btn-prev'),
   nextArrow: $('.preview__btn-next'),



});

// mainitems tabs

const MItabs = document.querySelectorAll(".mainitems__tab");
const MItabsCnt = document.querySelectorAll(".mi-cnt");


MItabs.forEach(onTabClick);

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);




      // Проверка: если у кнопки нет класс Active, то он выдается 
      if (!currentBtn.classList.contains('miactivetab')) {
         // Убираем у каждой кнопки класс Active при клике на кнопку
         MItabs.forEach(function (item) {
            item.classList.remove('miactivetab');
         });
         // а затем присваиваем класс Active кнопке на которую нажали
         currentBtn.classList.add('miactivetab');

         //  Тоже самое и с табами и их контентом 
         MItabsCnt.forEach(function (item) {
            item.classList.remove('miactivecnt');
         });
         currentTab.classList.add('miactivecnt');


      }

   });
}

// имитирует клик по первой кнопке (на странице), чтобы не было не активированной кнопки и таба при перезагрузке страницы

if (MItabs.length > 0) {
   document.querySelector('.mainitems__tab').click();
}

//  catalog filter

const filter = document.querySelector(".catalogcat__filter");

var filterbtns = document.querySelectorAll(".catalogcat__filter-tab > button");
var filtertabs = document.querySelectorAll(".catalogcat__filter-tab ");
var i;


for (i = 0; i < filterbtns.length; i++) {
   filterbtns[i].addEventListener("click", function () {
      this.classList.toggle("activebtnfilter");


      var filterbtnsCnt = this.parentNode.querySelector("ul");
      if (filterbtnsCnt.classList.contains("activeulfilter")) {
         filterbtnsCnt.classList.remove("activeulfilter");
      } else {
         filterbtnsCnt.classList.add("activeulfilter");
      }

      var filterlink = this.parentNode.querySelectorAll("a");
      var i;
      for (i = 0; i < filterlink.length; i++) {
         filterlink[i].addEventListener("click", function (e) {
            e.preventDefault();
         });
      }
   });
}



//  serive btn features
const serviceBtnfeatures = document.querySelectorAll(".service__features > ul");
var i;
for (i = 0; i < serviceBtnfeatures.length; i++) {
   serviceBtnfeatures[i].addEventListener("click", function (event) {
      this.classList.toggle("activeulservice");
      // serviceBtnfeatures.classList.toggle("activeulservice");
      var serviceBtnfeaturesLi = this.querySelectorAll("li");
      var i;

      for (i = 0; i < serviceBtnfeaturesLi.length; i++) {
         serviceBtnfeaturesLi[i].addEventListener("click", function () {


            Array.from(serviceBtnfeaturesLi).forEach(item => {
               item.classList.remove("activeliservice");
            });
            this.classList.add("activeliservice");



         });
      }
   });
}


//  service tabs
const serviceTabs = document.querySelectorAll(".service__link");
const serviceTabsCnt = document.querySelectorAll(".service__content");
if (serviceTabs.length > 0) {
   serviceTabs.forEach(onTabClick);

   function onTabClick(item) {
      item.addEventListener("click", function () {
         let currentBtn = item;
         let tabId = currentBtn.getAttribute("data-tab");
         let currentTab = document.querySelector(tabId);




         // Проверка: если у кнопки нет класс Active, то он выдается 
         if (!currentBtn.classList.contains('activeservicelink')) {
            // Убираем у каждой кнопки класс Active при клике на кнопку
            serviceTabs.forEach(function (item) {
               item.classList.remove('activeservicelink');
            });
            // а затем присваиваем класс Active кнопке на которую нажали
            currentBtn.classList.add('activeservicelink');

            //  Тоже самое и с табами и их контентом 
            serviceTabsCnt.forEach(function (item) {
               item.classList.remove('activescnt');
            });
            currentTab.classList.add('activescnt');


         }

      });
   }

   // имитирует клик по первой кнопке (на странице), чтобы не было не активированной кнопки и таба при перезагрузке страницы

   if (serviceTabs.length > 0) {
      document.querySelector('.service__link').click();
   }
}



//  product slider img

let productSlider = $("#productSlider");

productSlider.slick({
   infinite: true,
   centerMode: true,
   centerPadding: "150px",
   slidesToShow: 1,
   slidesToScroll: 1,
   adaptiveHeight: true,
   autoplay: true,
   autoplaySpeed: 1000,
   arrows: false,
   dots: false,
   responsive: [


      {
         breakpoint: 1100,
         settings: {
            infinite: true,
            centerMode: true,
            centerPadding: "80px",
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: false,





         }
      },
      {
         breakpoint: 767,
         settings: {

            infinite: true,
            centerMode: true,
            centerPadding: "30px",
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: false,





         }
      },

      {
         breakpoint: 575,
         settings: {
            infinite: true,
            centerMode: true,
            centerPadding: "20px",
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: false,






         }
      },

   ]



});

const prodvideo = document.querySelector(".product__video");
// if (video.length > 0) {

const btnPlay = document.querySelector(".video__play");
const btnStop = document.querySelector(".video__stop");
const video = document.querySelector("#video");


if (document.body.contains(video)) {
   btnPlay.addEventListener("click", startvideo);

   function startvideo() {
      video.play();
      btnPlay.classList.add("activeplay");
      btnStop.classList.add("activestop");

   };


   btnStop.addEventListener("click", stopvideo);
   function stopvideo() {
      video.pause();
      btnPlay.classList.remove("activeplay");
      btnStop.classList.remove("activestop");
      video.load();
   };

}



//  product features btn and more features
const mainBody = document.querySelector("body");
if (mainBody.classList.contains("product")) {
   const productBtnFeat = document.querySelector(".product__features-btn");
   const productFeatCnt = document.querySelector(".product__features-right-inner");
   productBtnFeat.addEventListener("click", function () {
      productBtnFeat.classList.toggle("activefeaturesbtn");
      productFeatCnt.classList.toggle("activefeaturescnt")
   })
}

if (mainBody.classList.contains("body-map")) {
   const mapFeatBtns = document.querySelectorAll(".map__features-item");

   for (i = 0; i < mapFeatBtns.length; i++) {
      mapFeatBtns[i].addEventListener("click", function () {


         Array.from(mapFeatBtns).forEach(item => {
            item.classList.remove("mapactivebtn");
         });
         this.classList.add("mapactivebtn");



      });
   }

}


// cart sum 


if (mainBody.classList.contains("body-cart")) {


   window.onload = function () {
      var oP = document.getElementsByClassName('cart__sum-text')[0];
      var aEm = oP.getElementsByTagName('em');
      var aStrong = oP.getElementsByTagName('strong')[0];
      var oUl = document.getElementById('list');
      var oLi = oUl.getElementsByTagName('li');
      var oStrong = oUl.getElementsByTagName('strong');
      for (var i = 0; i < oLi.length; i++) {
         fn1(oLi[i]);
      }

      function fn1(aLi) {
         var oBtn = aLi.getElementsByTagName('button');
         var oStrong = aLi.getElementsByTagName('strong')[0];
         var oEm = aLi.getElementsByTagName('em')[0];
         var oSpan = aLi.getElementsByTagName('span')[0];
         var n1 = Number(oStrong.innerHTML);
         var n2 = parseFloat(oEm.innerHTML);
         // Чтобы получить итоговую сумму, необходимо сложить все промежуточные итоги
         function fn2() {
            var sum1 = 0; // Определяем временную переменную для хранения количества добавленных частей
            var sum2 = 0; // Определяем временную переменную для хранения добавленного промежуточного итога
            var emMax = 0; // Определяем временную переменную для сравнения размера цены единицы
            for (var i = 0; i < oLi.length; i++) {
               var strongs = oLi[i].getElementsByTagName("strong")[0]; // Получаем количество всех li
               var spans = oLi[i].getElementsByTagName("span")[0]; // Получить все промежуточные итоги li
               var em = oLi[i].getElementsByTagName("em")[0]; // Получаем цену за единицу всех li
               sum1 = sum1 + Number(strongs.innerHTML);
               sum2 = sum2 + parseFloat(spans.innerHTML); // Итог - это результат сложения всех промежуточных итогов. Поскольку есть десятичные числа, используется parseFloat
               if (parseFloat(em.innerHTML) > emMax) {// Наибольшее отдельное значение
                  emMax = parseFloat(em.innerHTML);
               }
            }
            aEm[0].innerHTML = sum1 + '';
            aEm[1].innerHTML = sum2 + '';
            aStrong.innerHTML = emMax + ' ';
         }
         fn2();
         oBtn[0].onclick = function () {
            n1--;
            if (n1 < 0) {
               n1 = 0;
            }
            oStrong.innerHTML = n1;
            oSpan.innerHTML = n1 * n2 + ' ';
            fn2(); // Значение после вызова суммы
         };
         oBtn[1].onclick = function () {
            n1++;
            oStrong.innerHTML = n1;
            oSpan.innerHTML = n1 * n2 + ' ';
            fn2();
         };
      }
   }

   let btndelete = $(".cart__item-delete");

   for (i = 0; i < btndelete.length; i++) {
      btndelete[i].addEventListener("click", function () {

         // Array.from(btndelete).forEach(item => {
         //    item.classList.remove("navactivelink");
         // });
         this.parentNode.remove();



      });
   }


}







// modal


const headermodalBtn = document.querySelector(".header__icon-features");

headermodalBtn.addEventListener("click", function () {
   const modal = document.querySelector(".header__modal");
   modal.classList.add("activemodal");
   mainBody.classList.add("bodyactivemodal");
   const modalCloseBtn = document.querySelector(".header__modal-close");
   modalCloseBtn.addEventListener("click", function () {
      modal.classList.remove("activemodal");
      mainBody.classList.remove("bodyactivemodal");
   });

   $(document).on('click', function (e) {
      if (!$(e.target).closest(".header__icon-features").length) {
         if (!$(e.target).closest(".header__modal-wrapper").length) {

            modal.classList.remove("activemodal");
            mainBody.classList.remove("bodyactivemodal");
         }
         e.stopPropagation();
      }

   });






});




//  slider for catalog small items

let preview = document.querySelector(".preview");
if (preview.classList.contains("catalog")) {
   let catalogSmSlider = $("#catalogSmItems");

   catalogSmSlider.slick({
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,

      arrows: false,
      dots: false,

      responsive: [

         {
            breakpoint: 1200,
            settings: {

               infinite: true,
               slidesToShow: 6,
               slidesToScroll: 1,

               arrows: false,
               dots: false,





            }
         },
         {
            breakpoint: 989,
            settings: {

               infinite: true,
               slidesToShow: 5,
               slidesToScroll: 1,

               arrows: false,
               dots: false,





            }
         },
         {
            breakpoint: 767,
            settings: {

               infinite: true,
               slidesToShow: 4,
               slidesToScroll: 1,

               arrows: false,
               dots: false,





            }
         },
         {
            breakpoint: 575,
            settings: {

               infinite: true,
               slidesToShow: 3,
               slidesToScroll: 1,

               arrows: false,
               dots: false,





            }
         },
         {
            breakpoint: 375,
            settings: {

               infinite: true,
               slidesToShow: 2,
               slidesToScroll: 1,

               arrows: false,
               dots: false,





            }
         },
      ]

   });
}


// service nav slider

if (mainBody.classList.contains("service")) {
   let serviceSlider = $("#serviceNav");

   serviceSlider.slick({
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,

      arrows: false,
      dots: false,

      responsive: [


         {
            breakpoint: 989,
            settings: {
               infinite: false,

               slidesToShow: 4,
               slidesToScroll: 1,

               arrows: false,
               dots: false,





            }
         },
         {
            breakpoint: 575,
            settings: {

               infinite: false,
               slidesToShow: 3,
               slidesToScroll: 1,

               arrows: false,
               dots: false,





            }
         },

         {
            breakpoint: 475,
            settings: {

               infinite: false,
               slidesToShow: 2,
               slidesToScroll: 1,

               arrows: false,
               dots: false,





            }
         },

      ]

   });
}







// for (i = 0; i < filtertabs.length; i++) {
//    filtertabs[i].addEventListener("click", function () {

//       var filtercatname = this.querySelector("h3");
//       if (filtercatname.classList.contains("activebtnfilter")) {
//          filtercatname.classList.remove("activebtnfilter");
//       } else {
//          filtercatname.classList.add("activebtnfilter");
//       }
//       var filtertabsCnt = this.querySelector("ul");
//       if (filtertabsCnt.classList.contains("activeulfilter")) {
//          filtertabsCnt.classList.remove("activeulfilter");
//       } else {
//          filtertabsCnt.classList.add("activeulfilter");
//       }
//       var filterlink = this.querySelectorAll("a");
//       var i;
//       for (i = 0; i < filterlink.length; i++) {
//          filterlink[i].addEventListener("click", function (e) {
//             e.preventDefault();
//          });
//       }

//    });
// }




// menu nav

// var menuNavLinks = document.getElementsByClassName("nav__link");
// var i;

// for (i = 0; i < menuNavLinks.length; i++) {
//    menuNavLinks[i].addEventListener("click", function () {

//       Array.from(menuNavLinks).forEach(item => {
//          item.classList.remove("navactivelink");
//       });
//       this.classList.add("navactivelink");



//    });
// }

// $(document).ready(function () {


//    $(".nav__inner").on("click", "a", function (event) {
//       // event.preventDefault();
//       var id = $(this).attr('href'),
//          top = $(id).position().top;
//       $('body,html').animate({ scrollTop: top - 60 }, 1000);
//    });


//    $(".footer__btn").on("click", function (event) {
//       // event.preventDefault();
//       var id = $(this).attr('href'),
//          top = $(id).position().top;
//       $('body,html').animate({ scrollTop: top }, 1000);
//    });


// });

// /* Fixed Header */
// let body = $("#body");
// let preview = $(".preview");

// let previewH = preview.innerHeight();
// let header = $(".header");

// let headerH = header.innerHeight();

// let prevH = headerH + previewH;
// let scrollPos = $(window).scrollTop();
// let menu = $(".menu");
// let menuH = menu.innerHeight();

// // let nav = $("#nav");
// // let navToggle = $("#navToggle");

// checkScroll(scrollPos, prevH);

// $(window).on("scroll resize", function () {
//    prevH = headerH + previewH;
//    scrollPos = $(this).scrollTop();
//    // let mainH = menuH + prevH;
//    checkScroll(scrollPos, prevH);
//    checkScrollmenu(scrollPos, menuH);


// });

// function checkScroll(scrollPos, prevH) {
//    if (scrollPos > prevH) {
//       menu.addClass("menuscrollgrad");

//    } else {
//       menu.removeClass("menuscrollgrad");

//    }

// }
// function checkScrollmenu(scrollPos, menuH) {
//    if (scrollPos >= 2000) {
//       menu.removeClass("menuscrollgrad");
//    } else {
//    }

// }







// //  btn add to cart
// var btntocart = document.querySelectorAll(".menu__btn-incart");
// var i;

// for (i = 0; i < btntocart.length; i++) {
//    btntocart[i].addEventListener("click", function (event) {
//       event.preventDefault();

//       var parentglobal = this.parentNode.parentNode.parentNode;
//       parentglobal.classList.add("menuactiveitem");



//    });

// };

// // count for menu items

// $(document).ready(function () {
//    $('.menu__btn-minus').click(function () {
//       var $input = $(this).parent().find('input');
//       var count = parseInt($input.val()) - 1;
//       count = count < 1 ? 1 : count;
//       $input.val(count);
//       $input.change();
//       return false;
//    });
//    $('.menu__btn-plus').click(function () {
//       var $input = $(this).parent().find('input');
//       $input.val(parseInt($input.val()) + 1);
//       $input.change();
//       return false;

//    });
// });

// //  count for cartdeliv items
// let mainBody = document.querySelector("#body");
// if (mainBody.classList.contains("body-cartdeliv")) {
//    window.onload = function () {
//       var oP = document.getElementsByClassName('cartdeliv__sum-text')[0];
//       var aEm = oP.getElementsByTagName('em');
//       var aStrong = oP.getElementsByTagName('strong')[0];
//       var oUl = document.getElementById('list');
//       var oLi = oUl.getElementsByTagName('li');
//       var oStrong = oUl.getElementsByTagName('strong');
//       for (var i = 0; i < oLi.length; i++) {
//          fn1(oLi[i]);
//       }

//       function fn1(aLi) {
//          var oBtn = aLi.getElementsByTagName('button');
//          var oStrong = aLi.getElementsByTagName('strong')[0];
//          var oEm = aLi.getElementsByTagName('em')[0];
//          var oSpan = aLi.getElementsByTagName('span')[0];
//          var n1 = Number(oStrong.innerHTML);
//          var n2 = parseFloat(oEm.innerHTML);
//          // Чтобы получить итоговую сумму, необходимо сложить все промежуточные итоги
//          function fn2() {
//             var sum1 = 0; // Определяем временную переменную для хранения количества добавленных частей
//             var sum2 = 0; // Определяем временную переменную для хранения добавленного промежуточного итога
//             var emMax = 0; // Определяем временную переменную для сравнения размера цены единицы
//             for (var i = 0; i < oLi.length; i++) {
//                var strongs = oLi[i].getElementsByTagName("strong")[0]; // Получаем количество всех li
//                var spans = oLi[i].getElementsByTagName("span")[0]; // Получить все промежуточные итоги li
//                var em = oLi[i].getElementsByTagName("em")[0]; // Получаем цену за единицу всех li
//                sum1 = sum1 + Number(strongs.innerHTML);
//                sum2 = sum2 + parseFloat(spans.innerHTML); // Итог - это результат сложения всех промежуточных итогов. Поскольку есть десятичные числа, используется parseFloat
//                if (parseFloat(em.innerHTML) > emMax) {// Наибольшее отдельное значение
//                   emMax = parseFloat(em.innerHTML);
//                }
//             }
//             aEm[0].innerHTML = sum1 + '';
//             aEm[1].innerHTML = sum2 + '';
//             aStrong.innerHTML = emMax + ' ';
//          }
//          fn2();
//          oBtn[0].onclick = function () {
//             n1--;
//             if (n1 < 0) {
//                n1 = 0;
//             }
//             oStrong.innerHTML = n1;
//             oSpan.innerHTML = n1 * n2 + ' ';
//             fn2(); // Значение после вызова суммы
//          };
//          oBtn[1].onclick = function () {
//             n1++;
//             oStrong.innerHTML = n1;
//             oSpan.innerHTML = n1 * n2 + ' ';
//             fn2();
//          };
//       }
//    }
// }



// if (mainBody.classList.contains("body-cart")) {
//    $(document).ready(function () {
//       $('.cartdeliv__item-btn-minus').click(function () {
//          var $input = $(this).parent().find('input');
//          var count = parseInt($input.val()) - 1;
//          count = count < 1 ? 1 : count;
//          $input.val(count);
//          $input.change();
//          return false;
//       });
//       $('.cartdeliv__item-btn-plus').click(function () {
//          var $input = $(this).parent().find('input');
//          $input.val(parseInt($input.val()) + 1);
//          $input.change();
//          return false;

//       });
//    });


//    // cart count and sum






//    // cart btn delete

//    let btndelete = $(".cartdeliv__item-btn-delete");

//    for (i = 0; i < btndelete.length; i++) {
//       btndelete[i].addEventListener("click", function () {

//          // Array.from(btndelete).forEach(item => {
//          //    item.classList.remove("navactivelink");
//          // });
//          this.parentNode.remove();



//       });
//    }

// }

// //  cartform input count
// if (mainBody.classList.contains("body-cartform")) {
//    $(document).ready(function () {
//       $('.cartform__when-col-btn-minus').click(function () {
//          var $input = $(this).parent().find('input');
//          var count = parseInt($input.val()) - 1;
//          count = count < 1 ? 1 : count;
//          $input.val(count);
//          $input.change();
//          return false;
//       });
//       $('.cartform__when-col-btn-plus').click(function () {
//          var $input = $(this).parent().find('input');
//          $input.val(parseInt($input.val()) + 1);
//          $input.change();
//          return false;

//       });
//    });


//    // cartdeliv btns

//    let delivBtns = $(".cartform__deliv-btn");

//    for (i = 0; i < delivBtns.length; i++) {
//       delivBtns[i].addEventListener("click", function (e) {

//          Array.from(delivBtns).forEach(item => {

//             item.classList.remove("activedelivbtn");

//          });
//          this.classList.add("activedelivbtn");

//       });
//    };


//    // cartform pay btn

//    let payBtns = $(".cartform__pay-btn");

//    for (i = 0; i < payBtns.length; i++) {
//       payBtns[i].addEventListener("click", function (e) {

//          Array.from(payBtns).forEach(item => {

//             item.classList.remove("activepaybtn");

//          });
//          this.classList.add("activepaybtn");

//       });
//    };

//    let whenBtns = $(".cartform__when-btn");

//    for (i = 0; i < whenBtns.length; i++) {
//       whenBtns[i].addEventListener("click", function (e) {

//          Array.from(whenBtns).forEach(item => {

//             item.classList.remove("activewhenbtn");

//          });
//          this.classList.add("activewhenbtn");

//       });
//    };
//    let btnDeliv = document.getElementById("btnDeliv");
//    btnDeliv.addEventListener("click", function () {
//       let cartform = document.querySelector(".cartform__inner");
//       if (cartform.classList.contains("activeout")) {
//          cartform.classList.remove("activeout");
//       }

//    });
//    let btnOut = document.getElementById("btnOut");
//    btnOut.addEventListener("click", function () {
//       let cartform = document.querySelector(".cartform__inner");
//       cartform.classList.add("activeout");
//    });



//    // select restoran



//    //  select


//    const select = document.querySelector('.restselect');

//    select.addEventListener('blur', () => selectEvent());
//    select.addEventListener('click', () => selectEvent());

//    selectEvent = () => {
//       if (event.type == 'click') {
//          if (select.classList.contains('selrotate')) {
//             select.classList.remove('selrotate');
//          } else {
//             select.classList.add('selrotate');
//          }
//       }
//       if (event.type == 'blur') {
//          select.classList.remove('selrotate');
//       }
//    };


//    // styles fo select

//    $('.restselect').each(function () {
//       const _this = $(this),
//          selectOption = _this.find('option'),
//          selectOptionLength = selectOption.length,
//          selectedOption = selectOption.filter(':selected'),
//          duration = 450; // длительность анимации

//       _this.hide();
//       _this.wrap('<div class="restselect"></div>');
//       $('<div>', {
//          class: 'new-select',
//          text: _this.children('option:disabled').text()
//       }).insertAfter(_this);

//       const selectHead = _this.next('.new-select');
//       $('<div>', {
//          class: 'new-select__list'
//       }).insertAfter(selectHead);

//       const selectList = selectHead.next('.new-select__list');
//       for (let i = 1; i < selectOptionLength; i++) {
//          $('<span>', {
//             class: 'new-select__item',
//             html: $('<span>', {
//                text: selectOption.eq(i).text()
//             })
//          })
//             .attr('href', selectOption.eq(i).val())
//             .appendTo(selectList);
//       }

//       const selectItem = selectList.find('.new-select__item');
//       selectList.slideUp(0);
//       selectHead.on('click', function () {
//          if (!$(this).hasClass('on')) {
//             $(this).addClass('on');
//             selectList.slideDown(duration);

//             selectItem.on('click', function () {
//                let chooseItem = $(this).data('value');

//                $('select').val(chooseItem).attr('selected', 'selected');
//                selectHead.text($(this).find('span').text());

//                selectList.slideUp(duration);
//                selectHead.removeClass('on');
//             });

//          } else {
//             $(this).removeClass('on');
//             selectList.slideUp(duration);
//          }
//       });
//    });






























// }

// const spoilers = document.querySelectorAll(".delivery__spoiler");

// if (spoilers.length > 0) {

//    for (let spoiler of spoilers) {
//       spoiler.addEventListener('click', function () {
//          spoiler.classList.toggle("activespoiler");
//       });
//    };
// }

// // footer smooth links

// $(document).ready(function () {



//    $(".footer__links").on("click", "a", function (event) {
//       // event.preventDefault();
//       var id = $(this).attr('href'),
//          top = $(id).offset().top;
//       $('body,html').animate({ scrollTop: top - 100 }, 1000);
//    });




// });


// //  btn check menu

// $("[data-scroll]").on("click", function (event) {
//    event.preventDefault();

//    let elementId = $(this).data('scroll');
//    let elementOffset = $(elementId).offset().top;

//    // nav.removeClass("show");

//    $("html, body").animate({
//       scrollTop: elementOffset - 70
//    }, 700);
// });

// /* Menu Toggle */
// let menuHeader = document.querySelector(".header__menu");
// menuHeader.addEventListener("click", function () {
//    let header = document.querySelector(".header");
//    let burger = document.querySelector(".header__burger");
//    header.classList.toggle("activemenu");
//    burger.classList.toggle("activeburger");
// });






// //  menu sliders

// if (menu.length > 0) {
//    let menuSlider_1 = $("#menuSlider_1");

//    menuSlider_1.slick({
//       infinite: true,
//       // centerMode: true,
//       // centerPadding: "0px",
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       adaptiveHeight: true,

//       arrows: false,
//       dots: false,
//       // nextArrow: $('.combo__btn-next1'),

//       responsive: [

//          {
//             breakpoint: 1200,
//             settings: {

//                infinite: true,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 3,
//                slidesToScroll: 3,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 875,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 2,
//                slidesToScroll: 2,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 610,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },


//       ]




//    });

//    let menuSlider_2 = $("#menuSlider_2");

//    menuSlider_2.slick({
//       infinite: true,
//       // centerMode: true,
//       // centerPadding: "0px",
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       adaptiveHeight: true,

//       arrows: false,
//       dots: false,
//       // nextArrow: $('.combo__btn-next1'),
//       responsive: [

//          {
//             breakpoint: 1200,
//             settings: {

//                infinite: true,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 3,
//                slidesToScroll: 3,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 875,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 2,
//                slidesToScroll: 2,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 610,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },


//       ]


//    });

//    let menuSlider_3 = $("#menuSlider_3");

//    menuSlider_3.slick({
//       infinite: true,
//       // centerMode: true,
//       // centerPadding: "0px",
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       adaptiveHeight: true,

//       arrows: false,
//       dots: false,
//       // nextArrow: $('.combo__btn-next1'),
//       responsive: [

//          {
//             breakpoint: 1200,
//             settings: {

//                infinite: true,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 3,
//                slidesToScroll: 3,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 875,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 2,
//                slidesToScroll: 2,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 610,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },


//       ]


//    });


//    let menuSlider_4 = $("#menuSlider_4");

//    menuSlider_4.slick({
//       infinite: true,
//       // centerMode: true,
//       // centerPadding: "0px",
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       adaptiveHeight: true,

//       arrows: false,
//       dots: false,
//       // nextArrow: $('.combo__btn-next1'),
//       responsive: [

//          {
//             breakpoint: 1200,
//             settings: {

//                infinite: true,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 3,
//                slidesToScroll: 3,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 875,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 2,
//                slidesToScroll: 2,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 610,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },


//       ]


//    });


//    let menuNav = $("#menuNav");

//    menuNav.slick({

//       responsive: [
//          {
//             breakpoint: 2000,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 8,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 989,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 4,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 675,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 3,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },


//       ]

//    });


//    // if (menu.classList.contains("menu-itemcart")) {

//    let menuSlider_itemcart = $("#menuSlider_itemcart");

//    menuSlider_itemcart.slick({
//       infinite: true,
//       // centerMode: true,
//       // centerPadding: "0px",
//       slidesToShow: 4,
//       adaptiveHeight: true,

//       arrows: false,
//       dots: false,
//       // nextArrow: $('.combo__btn-next1'),
//       responsive: [

//          {
//             breakpoint: 1200,
//             settings: {

//                infinite: true,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 3,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 875,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 2,
//                slidesToScroll: 2,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 530,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },


//       ]


//    });




// }
// // }

// const nav = document.querySelector(".nav");
// if (nav.classList.contains("nav-cartform")) {
//    let menuNav = $("#menuNav");
//    menuNav.slick({

//       responsive: [
//          {
//             breakpoint: 2000,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 8,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 989,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 4,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },
//          {
//             breakpoint: 675,
//             settings: {

//                infinite: false,
//                // centerMode: true,
//                // centerPadding: "0px",
//                slidesToShow: 3,
//                slidesToScroll: 1,
//                // adaptiveHeight: true,

//                arrows: false,
//                dots: false,
//                // nextArrow: $('.combo__btn-next1'),




//             }
//          },


//       ]

//    });
// }