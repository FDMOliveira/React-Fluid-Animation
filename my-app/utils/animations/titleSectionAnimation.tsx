import { gsap } from "gsap";

let animationDone = false;

function getTitleSectionAnimation(sectionKey: any) {
  let title = document.querySelector(`.section-${sectionKey} .title`);
  let subTitle = document.querySelector(`.section-${sectionKey} .subtitle`);
  const links = gsap.utils.toArray(`.section-${sectionKey} .item-link`);

  setDefaultPositions();
  observer();

  function setDefaultPositions() {
    if (title) {
      gsap.set(title, {
        yPercent: 150,
        opacity: 0,
      });
    }
    if (subTitle) {
      gsap.set(subTitle, {
        yPercent: 150,
        opacity: 0,
      });
    }
    if (links) {
      links.forEach((link: any, i) => {
        gsap.set(link, {
          transform: `translate(0, 100px)`,
          autoAlpha: 0,
        });
      });
    }
  }

  function observer() {
    var options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: [0.7],
    };

    function callbackFunction(entries: any[]) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.7) {
          animation();
        }
      });
    }

    let observer = new IntersectionObserver(callbackFunction, options);
    let targetElement: Element | null = document.querySelector(
      `.section-${sectionKey}`
    );
    observer.observe(targetElement!);
  }

  function animation() {
    var tl = gsap.timeline();
    if (title) {
      tl.to(title, {
        yPercent: 0,
        ease: "power3.out",
        duration: 1,
        opacity: 1,
      });
    }
    if (subTitle) {
      tl.to(
        subTitle,
        {
          yPercent: 0,
          ease: "power3.out",
          duration: 1,
          opacity: 1,
        },
        `${title ? "<25%" : ""}`
      );
    }

    if (links) {
      links.forEach((link: any, i: number) => {
        let tlPosition = "<50%";
        if (i > 0) {
          tlPosition = "<20%";
        }
        tl.to(
          link,
          {
            transform: `translate(0, 0)`,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
          },
          tlPosition
        );
      });
    }

    animationDone = true;
  }
}

export default getTitleSectionAnimation;
