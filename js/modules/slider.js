function slider({container, slidesSelector, previuosSelector, nextSelector, totalSelector, currentSelector,slidesWrapperSelector, slidesFieldSelector}) {
    /*Slider*/

    const slides = document.querySelectorAll(slidesSelector),
          slider = document.querySelector(container),
          previuos = document.querySelector(previuosSelector),
          next = document.querySelector(nextSelector),
          total = document.querySelector(totalSelector),
          current = document.querySelector(currentSelector),
          slidesWrapper = document.querySelector(slidesWrapperSelector),
          slidesField = document.querySelector(slidesFieldSelector),
          widthSlidesWrapper = window.getComputedStyle(slidesWrapper).width,
          widthField = slidesField.style.width = 100 * slides.length +`%`;


    let slideIndex = 1;
    let offset = 0;
    // console.log(+widthSlidesWrapper.slice(0, widthSlidesWrapper.length - 2));


    slidesField.style.cssText = `
        width: ${widthField};
        display: flex;
        transition: .8s all;
    `;

    
    slides.forEach(slide => {
        slide.style.width = widthSlidesWrapper;
    });

    slidesWrapper.style.overflow = `hidden`;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slider.style.position = `relative`;

    const indicators = document.createElement(`ol`),
          dots = [];
          
    indicators.classList.add(`carousel-indicators`);
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement(`li`);
        dot.classList.add(`dot`);
        dot.setAttribute(`data-slide-to`, i + 1);
        indicators.append(dot);

        if (i == 0) {
            dot.style.opacity = 1;
        }

        dots.push(dot);
    }

    function getWidthSlidesWrapper(width) {
        return +width.replace(/\D/g, ``);
    }

    function setDotOpacity() {
        dots.forEach(dot => dot.style.opacity = `.5`);
        dots[slideIndex - 1].style.opacity = 1;
    }

    function setCurrentSlide() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function setTransform() {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    next.addEventListener(`click`, (e) => {

        if (offset == getWidthSlidesWrapper(widthSlidesWrapper) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += getWidthSlidesWrapper(widthSlidesWrapper);
        }

        setTransform();

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        setCurrentSlide();

        setDotOpacity();
    });

    previuos.addEventListener(`click`, (e) => {

        if (offset == 0) {
            offset = getWidthSlidesWrapper(widthSlidesWrapper) * (slides.length - 1);
        } else {
            offset -= getWidthSlidesWrapper(widthSlidesWrapper);
        }

        setTransform();

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        setCurrentSlide();

        setDotOpacity();
    });

    dots.forEach(dot => {
        dot.addEventListener(`click`, (e) => {
            const slideTo = e.target.getAttribute(`data-slide-to`);

            slideIndex = slideTo;

            offset = getWidthSlidesWrapper(widthSlidesWrapper) * (slideTo - 1);

            setTransform();

            setDotOpacity();

            setCurrentSlide();
            
        });
    });
}

export default slider;