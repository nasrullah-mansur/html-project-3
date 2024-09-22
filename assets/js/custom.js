init();

function menu_responsive() {
    let menuToggle = document.getElementById('menu-toggle');
    let menuList = document.getElementById('menu-list');

    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('active');    
    });
}

// ****************** Function Init **************************
function init() {
    menu_responsive();
    foodCategories();
    randomFoods();
}

// ****************** Helper Functions **************************
function foodCart(food) {
    return `<div class="col-lg-4 col-md-6 mb-4">
            <div class="food-cart-item">
                <div class="img position-relative">
                    <img class="img-fluid w-100" src="${food.image}" alt="img">
                    <div class="overlay position-absolute d-flex align-items-center">
                        <span>Price: ${food.price}/=</span>
                        <i class="fa-solid fa-star"></i>
                        <span> ${food.rating} (${food.rating_count})</span>
                    </div>
                </div>
                <div class="text">
                    <h4 class="pb-2">${food.name}</h4>
                    <ul class="list-unstyled d-flex flex-wrap">
                        <li class="position-relative">4 chicken legs</li>
                        <li class="position-relative">Chili sauce</li>
                        <li class="position-relative">4 chicken legs</li>
                        <li class="position-relative">Soft Drinks</li>
                        <li class="position-relative">Soft Drinks</li>
                        <li class="position-relative">Chili sauce</li>
                    </ul>
                </div>
                <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span class="d-inline-block">Add to cart</span>
                </a>
            </div>
        </div>`;
}

async function appendFoodItemsToHtml(link) {
    try {
        let response = await fetch(link);
        let data = await response.json();
        document.getElementById('food_gallery').innerHTML = '';

        data = Array.isArray(data) ? data : data.data;

        let finalOutput = data.map(food => {
            document.getElementById('food_gallery').innerHTML += foodCart(food);
        });


    } catch (error) {
        console.log(error);
    }
}

// ****************** Handler Functions **************************
async function foodCategories() {

    try {
        let response = await fetch('https://course.divinecoder.com/food-categories');
        let data = await response.json();
        
        document.getElementById('category_list').innerHTML = '';

        data.forEach((item) => {
            document.getElementById('category_list').innerHTML += `<li data-id="${item.id}"><a class="text-decoration-none d-inline-block text-uppercase" href="#">${item.name}</a></li>`;
        })

        foodItemsByCategory();

    } catch (error) {
        console.log(error);
    }
    
}

function randomFoods() {
    appendFoodItemsToHtml("https://course.divinecoder.com/food/random/6");
}

async function foodItemsByCategory() {
    let lis = document.querySelectorAll('#category_list li');
    
    let finalLiList = Array.from(lis).map(li => {
        li.addEventListener('click', function(event) {
            event.preventDefault();
            let categoryId = li.getAttribute('data-id');

            appendFoodItemsToHtml(`https://course.divinecoder.com/food/by-category/${categoryId}/6`);
            
        })
    })

}

