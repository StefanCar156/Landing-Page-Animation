tl = gsap.timeline({ defaults: { duration: 1 } });

tl.to(".dot", {
  opacity: 1,
  stagger: 0.6,
  delay: 0.5,
})
  .to(
    "#progress-fill",
    {
      width: "100%",
      ease: Circ.ease,
      duration: 2,
    },
    "=-1.8"
  )
  .to(".anim-container", {
    left: "100%",
  })
  .to(
    "#image",
    {
      left: "0%",
      opacity: 1,
    },
    "=-0.4"
  )
  .to("#text *", {
    opacity: 1,
    top: 0,
    stagger: 0.3,
  });
