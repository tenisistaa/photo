export const menuUp = (pageId) => {
  if (pageId === "banner-studio" || pageId === "banner-kindergarten") {
    const element = document.getElementById(pageId);
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    return;
  }
  setTimeout(function () {
    const element = document.getElementById(pageId);
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
  }, 10);
}

const onScroll = () => {
  window.requestAnimationFrame(function () {
    scrollPage(window.scrollY);
  });
}
let banner;
let backColor;
let navBelt;
let wh;
export const startScrolling = () => {
  banner = document.querySelector('.banner');
  backColor = document.querySelector('.back-color');
  navBelt = document.querySelector('.belt-nav');
  wh = window.innerHeight;
  window.addEventListener('scroll', onScroll);
}
export const stopScrolling = () => {
  window.removeEventListener('scroll', onScroll);
}

export const scrollPage = (scroll_pos) => {
  var pos = scroll_pos;
  if (navBelt !== null) {
    if (wh < pos + 70) {
      if (!navBelt.classList.contains('belt-nav-top')) {
        navBelt.classList.add('belt-nav-top');
        backColor.style = 'transform: translateY(0)';
      }
    } else {
      if (navBelt.classList.contains('belt-nav-top')) {
        navBelt.classList.remove('belt-nav-top');
        backColor.style.cssText = '';
      }
    }
    banner.style = `transform: translateY( ${-pos / 2}px)`;
  }
}

export const showElement = () => {
  const showText = document.querySelector('.show-text');
  showText.style.width = '160px';
  showText.style.transform = 'translateX(0) rotate(0) scale(1)';
  showText.style.color = '#f59692';
}

export const hideElement = () => {
  const showText = document.querySelector('.show-text');
  showText.style.cssText = '';
}

