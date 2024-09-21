function menu_responsive() {
    let menuToggle = document.getElementById('menu-toggle');
    let menuList = document.getElementById('menu-list');

    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('active');    
    });
}

menu_responsive();


// Food menus;

foodCategories();

async function foodCategories() {

    try {
        let response = await fetch('https://course.divinecoder.com/food-categories');
        let data = await response.json();
        
        document.getElementById('category_list').innerHTML = '';

        data.forEach((item) => {
            document.getElementById('category_list').innerHTML += `<li><a class="text-decoration-none d-inline-block text-uppercase" href="#">${item.name}</a></li>`;
        })

    } catch (error) {
        console.log(error);
    }


    
}