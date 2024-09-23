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
    appendFoodItemsToHtml("https://course.divinecoder.com/food/random/6");
}

// ****************** Helper Functions **************************
let activeFoodItems = [];

let activeCartItems = [
    {
    "id": 27,
    "category_id": "16",
    "image": "https://course.divinecoder.com/images/1727075607.jpeg",
    "name": "chicken Fry",
    "price": "894",
    "rating": "42",
    "rating_count": "35",
    "facilities": "best food",
    "category_name": "Chicken Fry"
    },
    {
    "id": 17,
    "category_id": "18",
    "image": "https://course.divinecoder.com/images/1726940737.jpg",
    "name": "Shawarma",
    "price": "199",
    "rating": "50",
    "rating_count": "100",
    "facilities": "This is a healthful",
    "category_name": "text admin"
    },
    {
    "id": 35,
    "category_id": "44",
    "image": "https://course.divinecoder.com/images/1727082062.jpg",
    "name": "spring rools",
    "price": "678",
    "rating": "54",
    "rating_count": "21",
    "facilities": "best food",
    "category_name": "Spring rools"
    },
    {
    "id": 43,
    "category_id": "18",
    "image": "https://course.divinecoder.com/images/1727083199.jpeg",
    "name": "shawarma",
    "price": "534",
    "rating": "11",
    "rating_count": "21",
    "facilities": "best food",
    "category_name": "text admin"
    },
    {
    "id": 45,
    "category_id": "18",
    "image": "https://course.divinecoder.com/images/1727083299.jpeg",
    "name": "shawarma",
    "price": "324",
    "rating": "12",
    "rating_count": "13",
    "facilities": "food",
    "category_name": "text admin"
    },
    {
    "id": 42,
    "category_id": "16",
    "image": "https://course.divinecoder.com/images/1727082896.jpg",
    "name": "chicken Fry",
    "price": "343",
    "rating": "23",
    "rating_count": "21",
    "facilities": "food",
    "category_name": "Chicken Fry"
    }
    ];

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
                <a href="#" class="${food.isAddedToCart ? "active" : ''} add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span class="d-inline-block">${food.isAddedToCart ? "Already added" : 'Add to cart'}</span>
                </a>
            </div>
        </div>`;
}

async function appendFoodItemsToHtml(link, callback = () => {}) {
    try {
        let response = await fetch(link);
        let data = await response.json();
        document.getElementById('food_gallery').innerHTML = '';

        data = Array.isArray(data) ? data : data.data;

        activeFoodItems = data.map(item => {

            let checkActivity = activeCartItems.some(activeItem => activeItem.id == item.id);

            return {
                ...item,
                isAddedToCart: checkActivity,
            };
        })

        console.log(activeFoodItems);
        

        document.getElementById('food_gallery').innerHTML = activeFoodItems.map(food => foodCart(food)).join('');

        callback();


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

        document.getElementById('category_list').innerHTML = data.map(item => `<li data-id="${item.id}"><a class="text-decoration-none d-inline-block text-uppercase" href="#">${item.name}</a></li>`).join('');

        foodItemsByCategory();

    } catch (error) {
        console.log(error);
    }
    
}

async function foodItemsByCategory() {
    let lis = document.querySelectorAll('#category_list li');
    
    let finalLiList = Array.from(lis).map(li => {
        li.addEventListener('click', function(event) {
            event.preventDefault();
            let categoryId = li.getAttribute('data-id');
            li.classList.add('active');

            appendFoodItemsToHtml(`https://course.divinecoder.com/food/by-category/${categoryId}/6`, () => {
                li.classList.remove('active');
            });
            
        })
    })

}

function myCart() {

}