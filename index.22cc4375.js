document.querySelectorAll("input").forEach(function(e){var t,r,o=e.getAttribute("id"),a=(t=e.getAttribute("name"),r="",t.split("").forEach(function(e,t){0===t?r+=e.toUpperCase():e===e.toUpperCase()?r+=" ".concat(e):r+=e}),r),l=document.createElement("label"),n=document.createElement("placeholder");l.classList.add("field-label"),l.setAttribute("for",o),l.textContent=a,n=a,e.parentNode.insertBefore(l,e),e.setAttribute("placeholder",n)});
//# sourceMappingURL=index.22cc4375.js.map
