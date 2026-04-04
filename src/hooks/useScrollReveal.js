import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: unobserve after showing once
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    const elements = document.querySelectorAll('.reveal-anim');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
};

export default useScrollReveal;
