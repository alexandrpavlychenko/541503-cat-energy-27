const mainNav=document.querySelector(".main-nav");mainNav.classList.remove("main-nav--open");const mainNavToggle=document.querySelector(".main-nav-toggle");mainNavToggle.onclick=function(){mainNav.classList.contains("main-nav--open")?mainNav.classList.remove("main-nav--open"):mainNav.classList.add("main-nav--open")};