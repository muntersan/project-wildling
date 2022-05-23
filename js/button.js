const menu = () => {
    
    //get elements from DOM
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.menu-dropdown')

    //open menu function
    const openMenu = () => {

        //add class to button
        menuButton.classList.toggle('menu-button--close')

        //add class to menu 
        menu.classList.toggle('menu--opened')
    }



    menuButton.addEventListener('click', openMenu)
}

const heroProduct = () => {

    const productButton = document.querySelector('.hero-product__button')
    const productInfo = document.querySelector('.hero-product__content')

    const showInfo = () => {
        productInfo.classList.toggle('show--product')
    }

    productButton.addEventListener('click', showInfo)

}


menu();
heroProduct();