
import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"

import "./infoabout.scss"



const items = document.querySelectorAll(
  '.photoPresentation__body, .naturalAuroma__img, .newsletter__image'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('_show');
    }
  });
});


items.forEach(el => observer.observe(el));

