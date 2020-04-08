const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// drop if exists command?
const productsdb = new Schema(
  [
    {
      "id": 0,
      "name": "Anonymous",
      "slogan": "Who am I?",
      "description": "Describe me if you can!",
      "category": "farce",
      "default_price": 100,
      "features": [
        {
          "feature": "Irony",
          "value": "Strong",
        }
      ],
      "styles": [
        {
          "id": 0,
          "name": "my style",
          "sale_price": 50,
          "original_price": 100,
          "default_style": 1,
          "photos": [
            {
              "thumbnail": "",
              "url": "", 
            }
          ],
          "skus": {
            "size": "L",
            "quantity": 3,
          }
        }
      ]
    }    
  ]
);
