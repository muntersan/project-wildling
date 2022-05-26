const headerScroll = () => {
    // get header from DOM
    const header = document.querySelector('.site-header')
    const dropDown = document.querySelector('.menu-dropdown')

    const addClassToHeader = () => {

        if ( window.scrollY >100) {
            header.classList.add('site-header--scrolled')
            dropDown.classList.add('dropdown--scrolled')
        } else {
            header.classList.remove('site-header--scrolled')
            dropDown.classList.remove('dropdown--scrolled')

        }


    }

    window.addEventListener('scroll', addClassToHeader)
}

headerScroll()