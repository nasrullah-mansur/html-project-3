

fetch('https://course.divinecoder.com/food-categories')
            .then(function(res) {
                return res.json();                        
            })
            .then(function(data) {
                console.log(data);
                response = data;

                response.forEach(element => {
                    console.log(element);
                    
                });
            })

            .catch(function(error) {
                console.log(error);
            })
            