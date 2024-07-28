import { gsap } from "gsap";

function getImageTextSectionAnimation(element: any) {
  let elementKey = element._key;

  observer();

  function animation() {
    const { textAlignment } = element;
    let contentContainer = `.section-${elementKey} .image-text-wrapper`;
    let title = `.section-${elementKey} .title`;
    let textAnim = gsap.timeline();

    if (document.querySelector(title)) {
      textAnim.to(title, {
        x: textAlignment == "right" ? "-80vw" : "80vw",
        duration: 2,
        opacity: 1,
        ease: "power4.out",
      });
    }

    textAnim
      .to(
        `${contentContainer} > div:last-child`,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 2,
          ease: "power4.inOut",
        },
        title ? "<25%" : ""
      )
      .to(
        `${contentContainer} > div:first-child`,
        {
          x: textAlignment == "right" ? "-80vw" : "80vw",
          duration: 2,
          opacity: 1,
          ease: "power4.out",
        },
        "<10%"
      );
  }

  function observer() {
    var options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: [0.2],
    };

    function callbackFunction(entries: any[]) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.2) {
          animation();
        }
      });
    }

    let observer = new IntersectionObserver(callbackFunction, options);
    let targetElement: Element | null = document.querySelector(
      `.section-${elementKey}`
    );

    if (targetElement) {
      observer.observe(targetElement!);
    }
  }
}
export default getImageTextSectionAnimation;
