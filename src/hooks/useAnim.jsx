import { useEffect } from 'react';

function useAnim(_class) {
  useEffect(() => {
    const Anims = document.querySelectorAll('.' + _class);

    const appearOptions = {
      threshold: 0,
      rootMargin: '0px 0px -120px 0px',
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    Anims.forEach((anim) => {
      appearOnScroll.observe(anim);
    });
  });

  return;
}

export default useAnim;
