const revealItems = document.querySelectorAll(
  '.service-card, .manifesto-mark, .manifesto > div, .brand-showcase, .brand-copy, .contact-item'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 45, 240)}ms`;
  el.classList.add('reveal');
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = `
  .reveal{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
  .reveal.visible{opacity:1;transform:none}
`;
document.head.appendChild(style);
