import { gsap } from "gsap";
import { isIOS } from "react-device-detect";

function getRichTextSectionAnimation(
  elementKey: any,
  isLastSection: boolean = false,
) {
  let title = `.section-${elementKey} .title`;
  let contentContainer = `.section-${elementKey} .content-wrapper > div:last-child`;
  let firstComponent = `${contentContainer} > div:first-child`;
  let lastComponent = `${contentContainer} > div:last-child`;
  let onlyOneChild =
    document.querySelector(firstComponent) ==
    document.querySelector(lastComponent);
  let mm = gsap.matchMedia();

  let ctx = gsap.context(() => {
    if (!isIOS) {
      mm.add("(min-width: 1280px)", () => {
        if (document.querySelector(title)) {
          gsap.set(title, {
            yPercent: -30,
            opacity: 0,
            duration: 1.4,
            ease: "power4.out",
          });
        }
        gsap.set(firstComponent, {
          xPercent: -150,
          duration: 1.4,
          ease: "power4.out",
        });
        if (!onlyOneChild) {
          gsap.set(lastComponent, {
            xPercent: 250,
            duration: 1.4,
            ease: "power4.out",
          });
        }

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.section-${elementKey}`,
            start: isLastSection ? "top-=1000px" : "top-=400px",
          },
        });

        if (document.querySelector(title)) {
          tl.to(title, {
            yPercent: 0,
            duration: 1.4,
            opacity: 1,
            ease: "power4.out",
          });
        }

        if (!onlyOneChild) {
          tl.to(
            firstComponent,
            {
              xPercent: 0,
              duration: 1.4,
              ease: "power4.out",
            },
            "<",
          ).to(
            lastComponent,
            {
              xPercent: 0,
              duration: 1.4,
              ease: "power4.out",
            },
            "<25%",
          );
        } else {
          tl.to(
            firstComponent,
            {
              xPercent: 0,
              duration: 1.4,
              ease: "power4.out",
            },
            "<",
          );
        }
      });
    }
  });
}

export default getRichTextSectionAnimation;
