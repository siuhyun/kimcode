// let projectSection = document.querySelector('#project').offsetTop;
// // console.log(projectSection); //1870
// window.addEventListener('scroll', () => {
//   // console.log(window.scrollX, window.scrollY);
//   if ()
// })

// const navEl = document.querySelector('#project nav')
// const navTop = navEl.getBoundingClientRect().top + window.scrollY;
// console.log(navTop);
// window.addEventListener('scroll', function(){
//   if(window.scrollY >= navTop){
//     navEl.classList.add('fixed');
//   }
// });
/* scroll마다 한 페이지씩 이동하기 */
window.onload = function () {
  const navEl = document.querySelector('#project nav')
  const navTop = navEl.getBoundingClientRect().top + window.scrollY;
  const elm = document.querySelectorAll("#project section");
  const elmCount = elm.length;
  
  window.addEventListener('scroll', function(){
    if(window.scrollY >= navTop){
      navEl.classList.add('fixed');
    }
  });
  elm.forEach(function (item, index) {
    item.addEventListener("mousewheel", function (event) {
      event.preventDefault();
      let delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0) {
        if (elmSelector !== elmCount - 1) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.nextElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }

      // wheel up : move to previous section
      else {
        if (elmSelector !== 0 && elmSelector.id !== "home") {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.previousElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }

      const body = document.querySelector("html");
      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    });
  });
};

