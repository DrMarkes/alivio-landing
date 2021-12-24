if (!CSS.supports('object-fit', 'cover')) {
    const images = document.querySelectorAll('img.object-fit');
    images.forEach(image => {
        const parent = image.parentElement;
        const src = image.src;
        parent.classList.add('object-fit-parent');
        parent.style.backgroundImage = `url(${src})`;
    });
}