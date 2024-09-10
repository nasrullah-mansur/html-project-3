let categories = [
    {
        "id": 2,
        "name": "Fast Food",
        "created_at": "2024-09-10T09:50:58.000000Z",
        "updated_at": "2024-09-10T09:50:58.000000Z"
    },
    {
        "id": 3,
        "name": "Healthy",
        "created_at": "2024-09-10T09:51:08.000000Z",
        "updated_at": "2024-09-10T09:51:08.000000Z"
    },
    {
        "id": 4,
        "name": "Japanese",
        "created_at": "2024-09-10T09:51:16.000000Z",
        "updated_at": "2024-09-10T09:51:16.000000Z"
    },
    {
        "id": 5,
        "name": "Ice Cream",
        "created_at": "2024-09-10T09:51:27.000000Z",
        "updated_at": "2024-09-10T09:51:27.000000Z"
    }
];

let favoriteFoods = [
    {
        "id": 11,
        "category_id": 3,
        "image": "images/1725963164.jpg",
        "name": "Lani Cardenas",
        "price": "842",
        "rating": "34",
        "rating_count": "24",
        "facilities": "In fugit voluptate",
        "category_name": "Healthy"
    },
    {
        "id": 9,
        "category_id": 3,
        "image": "images/1725963136.jpg",
        "name": "Tatiana Kaufman",
        "price": "907",
        "rating": "82",
        "rating_count": "76",
        "facilities": "Qui dolorum eveniet",
        "category_name": "Healthy"
    },
    {
        "id": 12,
        "category_id": 5,
        "image": "images/1725963179.jpg",
        "name": "Wallace Marks",
        "price": "64",
        "rating": "35",
        "rating_count": "80",
        "facilities": "Sed culpa perspiciat",
        "category_name": "Ice Cream"
    },
    {
        "id": 10,
        "category_id": 3,
        "image": "images/1725963151.jpg",
        "name": "Rana Oneil",
        "price": "570",
        "rating": "16",
        "rating_count": "99",
        "facilities": "Cupiditate delectus",
        "category_name": "Healthy"
    },
    {
        "id": 14,
        "category_id": 5,
        "image": "images/1725963215.jpg",
        "name": "Emi Summers",
        "price": "447",
        "rating": "63",
        "rating_count": "43",
        "facilities": "Delectus culpa in n",
        "category_name": "Ice Cream"
    },
    {
        "id": 3,
        "category_id": 2,
        "image": "images/1725962806.jpg",
        "name": "Sawyer Cruz",
        "price": "399",
        "rating": "17",
        "rating_count": "38",
        "facilities": "Ipsum est et aperiam",
        "category_name": "Fast Food"
    },
]

let foodItems = [
    {
        "id": 11,
        "category_id": 3,
        "image": "images/1725963164.jpg",
        "name": "Lani Cardenas",
        "price": "842",
        "rating": "34",
        "rating_count": "24",
        "facilities": "In fugit voluptate",
        "category_name": "Healthy"
    },
    {
        "id": 9,
        "category_id": 3,
        "image": "images/1725963136.jpg",
        "name": "Tatiana Kaufman",
        "price": "907",
        "rating": "82",
        "rating_count": "76",
        "facilities": "Qui dolorum eveniet",
        "category_name": "Healthy"
    },
    {
        "id": 12,
        "category_id": 5,
        "image": "images/1725963179.jpg",
        "name": "Wallace Marks",
        "price": "64",
        "rating": "35",
        "rating_count": "80",
        "facilities": "Sed culpa perspiciat",
        "category_name": "Ice Cream"
    },
    {
        "id": 10,
        "category_id": 3,
        "image": "images/1725963151.jpg",
        "name": "Rana Oneil",
        "price": "570",
        "rating": "16",
        "rating_count": "99",
        "facilities": "Cupiditate delectus",
        "category_name": "Healthy"
    },
    {
        "id": 14,
        "category_id": 5,
        "image": "images/1725963215.jpg",
        "name": "Emi Summers",
        "price": "447",
        "rating": "63",
        "rating_count": "43",
        "facilities": "Delectus culpa in n",
        "category_name": "Ice Cream"
    },
    {
        "id": 3,
        "category_id": 2,
        "image": "images/1725962806.jpg",
        "name": "Sawyer Cruz",
        "price": "399",
        "rating": "17",
        "rating_count": "38",
        "facilities": "Ipsum est et aperiam",
        "category_name": "Fast Food"
    },
    {
        "id": 7,
        "category_id": 2,
        "image": "images/1725962895.jpg",
        "name": "McKenzie Greer",
        "price": "928",
        "rating": "61",
        "rating_count": "21",
        "facilities": "Incidunt nihil sit",
        "category_name": "Fast Food"
    },
    {
        "id": 6,
        "category_id": 2,
        "image": "images/1725962884.jpg",
        "name": "Quintessa Gross",
        "price": "176",
        "rating": "30",
        "rating_count": "100",
        "facilities": "Sit id cillum tempo",
        "category_name": "Fast Food"
    },
    {
        "id": 4,
        "category_id": 2,
        "image": "images/1725962860.jpg",
        "name": "Tate Keith",
        "price": "413",
        "rating": "9",
        "rating_count": "33",
        "facilities": "Enim doloremque proi",
        "category_name": "Fast Food"
    },
    {
        "id": 8,
        "category_id": 2,
        "image": "images/1725962921.jpg",
        "name": "Cassandra Santos",
        "price": "745",
        "rating": "11",
        "rating_count": "21",
        "facilities": "Sit rerum non quia",
        "category_name": "Fast Food"
    },
    {
        "id": 5,
        "category_id": 2,
        "image": "images/1725962872.jpg",
        "name": "Jessamine Wynn",
        "price": "223",
        "rating": "79",
        "rating_count": "71",
        "facilities": "Adipisci sequi ut co",
        "category_name": "Fast Food"
    },
    {
        "id": 13,
        "category_id": 4,
        "image": "images/1725963189.jpg",
        "name": "Kenneth Osborn",
        "price": "635",
        "rating": "53",
        "rating_count": "29",
        "facilities": "Magni qui architecto",
        "category_name": "Japanese"
    }
]


menu_responsive();
getCategoriesHandler();
favoriteFoodHandler();
foodItemByCategoryHandler();

function menu_responsive() {
    let menuToggle = document.getElementById('menu-toggle');
    let menuList = document.getElementById('menu-list');

    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('active');    
    });
}

function getCategoriesHandler() {
    let categoryElem = function(name, id) {
        return `<li><a data-id="${id}" class="text-decoration-none d-inline-block text-uppercase" href="#">${name}</a></li>`;
    }

    let finalElementList = categories.map(item => categoryElem(item.name, item.id));
    document.getElementById('category_list').innerHTML = finalElementList.join('');

}

function favoriteFoodHandler() {
    favoriteFoods = favoriteFoods.map(item => {
        return {
            ...item,
            isAddedToCart: true,
        }
    })

    console.log(favoriteFoods);
    
    
    let favoriteItemElementWithData = favoriteFoods.map(food => foodCartElement(food));
    document.getElementById('food_gallery').innerHTML = favoriteItemElementWithData.join('');
}

function foodCartElement(food) {
    return `<div class="col-lg-4 col-md-6 mb-4">
                <div class="food-cart-item">
                    <div class="img position-relative">
                        <img class="img-fluid w-100" src="https://res.test/${food.image}" alt="img">
                        <div class="overlay position-absolute d-flex align-items-center">
                            <span>Price: ${food.price}/=</span>
                            <i class="fa-solid fa-star"></i>
                            <span> ${food.rating} (${food.rating_count}))</span>
                        </div>
                    </div>
                    <div class="text">
                        <h4 class="pb-2">${food.name}</h4>
                        <p>${food.category_name}</p>
                        <ul class="list-unstyled d-flex flex-wrap">
                            <li class="position-relative">4 chicken legs</li>
                            <li class="position-relative">Chili sauce</li>
                            <li class="position-relative">4 chicken legs</li>
                            <li class="position-relative">Soft Drinks</li>
                            <li class="position-relative">Soft Drinks</li>
                            <li class="position-relative">Chili sauce</li>
                        </ul>
                    </div>
                    <a data-id="${food.id}" href="#" class="${food.isAddedToCart == true ? 'active' : ''} add-to-cart d-flex justify-content-center align-items-center text-decoration-none">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span class="d-inline-block">Add to cart</span>
                    </a>
                </div>
            </div>`
}


function foodItemByCategoryHandler() {
    let buttons = document.querySelectorAll('.special-menu ul li a');
       

    Array.from(buttons).forEach(function(btn) {
        
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            
            Array.from(buttons).map(item => {
                item.classList.remove('active');                
            })

            event.target.classList.add('active');

            let id = event.target.getAttribute('data-id');

            let updateFilterData = foodItems.filter(function(item) {
                return item.category_id == id;
            })

            let foodElementsAfterFilter = updateFilterData.map(food => foodCartElement(food));
            document.getElementById('food_gallery').innerHTML = foodElementsAfterFilter.join('');


        })        
    })
    
}




