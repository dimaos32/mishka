let navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),buyActionLinks=document.querySelectorAll(".js-add-to-cart"),buyActionPopup=document.querySelector(".modal"),buyActionClose=document.querySelector(".modal .btn--modal"),buyActionPage=document.querySelector(".page__body");if(navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))})),buyActionLinks.length>0){for(const n of buyActionLinks)n.addEventListener("click",(function(n){n.preventDefault(),buyActionPopup.classList.add("modal__show"),buyActionPage.classList.add("page__dim")})),buyActionClose.addEventListener("click",(function(n){n.preventDefault(),buyActionPopup.classList.remove("modal__show"),buyActionPage.classList.remove("page__dim")}));window.addEventListener("keydown",(function(n){if(27===n.keyCode)for(const e of buyActionLinks)buyActionPopup.classList.contains("modal__show")&&(n.preventDefault,buyActionPopup.classList.remove("modal__show"),buyActionPage.classList.remove("page__dim"))}))}