const elem = document.querySelector('.portfolio__works');
const iso = new Isotope(elem, {
    // options
    itemSelector: '.portfolio__works_item',
    layoutMode: 'masonry'
});

document.querySelectorAll('.portfolio__nav_item').forEach(el => {
    el.addEventListener('click', (e) => {

        let filter = e.currentTarget.dataset.filter;
        iso.arrange({ filter: `${filter}` });
    });
});
