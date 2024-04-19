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

gsap.registerPlugin(ScrollTrigger);


//visual 수정

const visual = gsap.timeline()
visual.from(".visual .text_box", { scale: 0.3, rotation: 45, autoAlpha: 0 })
      .to(".visual .text_box", { scale: 1, rotation: 0, autoAlpha: 1 })


//GSAP - profile

gsap.to(".profile", {
  scrollTrigger: ".profile",
});
let tl = gsap.timeline({

  scrollTrigger: {
    trigger: ".profile",
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

  // jQuery
  $('#toggleNav').click(function() {
    $('nav ul').toggleClass('active');
  });