exports.seed = function(knex) {
    return knex('cars').insert([
        {
            "make": "ford",
            "mileage": 333999,        
            "model": "explorer",      
            "title": "chaz carbis",   
            "transmission": "Automatic",   
            "vin": "11111111111111111"
        },
        {
            "make": "BMW",
            "mileage": 333999,        
            "model": "i8 Base",      
            "title": "chaz carbis",   
            "transmission": "Manual",   
            "vin": "11111111222111111"
        },
    ])
}