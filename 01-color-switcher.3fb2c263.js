!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=null;e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.3fb2c263.js.map