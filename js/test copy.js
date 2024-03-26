const header = document.querySelector('header')
const nav_li = document.querySelectorAll('nav li a')
let headerHeight = header.offsetHeight;
window.addEventListener('scroll', function(){
  let windowTop = window.scrollY;

  if(windowTop >= headerHeight) {
    header.classList.add('drop')
  } else {
    header.classList.remove('drop')
  }
})

// Gsap - visual
/*
gsap.to(".visual .text_box", {
  scrollTrigger: ".visual .text_box",
  y: 0,
});
let visual = gsap.timeline({

  scrollTrigger: {
    trigger: ".visual .inner .text_box",
    pin: true,
    start: "-50% 40%",
    end: "+=500",
    scrub: 1,
    snap: {
      snapTo: "labels",
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: "power1.inOut",
    },
  },
});

visual.addLabel("start")
.from(".visual .text_box", { scale: 0.3, rotation: 45, autoAlpha: 0 })
.addLabel("end");
*/

gsap.registerPlugin(ScrollTrigger);


//visual 수정
const visual = gsap.timeline()
visual.from(".visual .text_box", { scale: 0.3, rotation: 45, autoAlpha: 0 })
      .to(".visual .text_box", { scale: 1, rotation: 0, autoAlpha: 1 })


//GSAP - profile
gsap.to(".profile", {
  scrollTrigger: ".profile",
  // x: 500,
});
let tl = gsap.timeline({

  scrollTrigger: {
    trigger: ".profile",
    // pin: true,
    start: "-20% 40%",
    end: "+=500",
    scrub: 1,
    snap: {
      snapTo: "labels",
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: "power1.inOut",
    },
  },
});

// add animations and labels to the timeline
tl.addLabel("start")
  .from(".profile .img_box", { scale: 0.3, rotation: 45, autoAlpha: 0 })
  .addLabel("end");


  // const sections = document.querySelectorAll(".project_web");
  // const menus = document.querySelectorAll(".project .nav__menu > li > a")
  // const navEl = document.querySelector('#project nav')
  // const navTop = navEl.getBoundingClientRect().top + window.scrollY;

  // window.addEventListener("scroll",()=>{
  //     //현재 영역의 id값
  //     let current=""

  //     sections.forEach(section=>{
  //         //각 section의 top 위치(절대적 위치)
  //         const sectionTop = window.scrollY + section.getBoundingClientRect().top;

  //         //누적된 스크롤이 section의 top위치에 도달했거나 section의 안에 위치할 경우
  //         if(window.scrollY >= sectionTop) {
  //           current = section.getAttribute("id");
  //           navEl.classList.add('fixed');
  //         }

  //         menus.forEach(menu=>{
  //             menu.classList.remove("nav__menu--foused");
  //             const href = menu.getAttribute("href").substring(1);
  //             if(href===current) {
  //                 //현재 있는 영역의 id와 메뉴의 링크주소가 일치할때
  //                 menu.classList.add("nav__menu--foused");
  //             }
  //         })
  //     })
  // })


  const ani1 = gsap.timeline();
  ani1 .to("#project nav", {y:0})

  ScrollTrigger.create({
      animation: ani1,
      trigger: "#project nav",
      start: "top top",
      endTrigger: "#project",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      anticipatePin: 1,
  });


  const scrollLinks = document.querySelectorAll('#project nav a');
  const projectStart = document.querySelector('#project').offsetTop
  console.log(projectStart);


  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const targetOffset = projectStart + targetSection.offsetTop;

        console.log(targetOffset);

        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
        scrollLinks.forEach(function(link) {
          link.classList.remove('nav__menu--foused');
        });

        this.classList.add('nav__menu--foused');
      }
    });
  });

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(function(section) {
      const sectionId = '#' + section.getAttribute('id');
      const sectionOffset = section.offsetTop +projectStart;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {

        document.querySelector('a[href="' + sectionId + '"]').classList.add('nav__menu--foused');
      } else {
        document.querySelector('a[href="' + sectionId + '"]').classList.remove('nav__menu--foused');
      }
    });
  });