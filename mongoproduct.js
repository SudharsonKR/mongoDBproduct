//Created a Data Base
//use products
db.createCollection("productsDetails")

//insert query to add data
db.productsDetails.insertMany(
    [
        {
            "id": "1",
            "product_name": "Intelligent Fresh Chips",
            "product_price": 655.00,
            "product_material": "Concrete",
            "product_color": "mint green"
        },
        {
            "id": "2",
            "product_name": "Practical Fresh Sausages",
            "product_price": 911.0,
            "product_material": "Cotton",
            "product_color": "indigo"
        },
        {
            "id": "3",
            "product_name": "Refined Steel Car",
            "product_price": 690.00,
            "product_material": "Rubber",
            "product_color": "gold"
        },
        {
            "id": "4",
            "product_name": "Gorgeous Plastic Pants",
            "product_price": 492.00,
            "product_material": "Soft",
            "product_color": "plum"
        },
        {
            "id": "5",
            "product_name": "Sleek Cotton Chair",
            "product_price": 33.00,
            "product_material": "Fresh",
            "product_color": "black"
        },
        {
            "id": "6",
            "product_name": "Awesome Wooden Towels",
            "product_price": 474.00,
            "product_material": "Plastic",
            "product_color": "orange"
        },
        {
            "id": "7",
            "product_name": "Practical Soft Shoes",
            "product_price": 500.00,
            "product_material": "Rubber",
            "product_color": "pink"
        },
        {
            "id": "8",
            "product_name": "Incredible Steel Hat",
            "product_price": 78.00,
            "product_material": "Rubber",
            "product_color": "violet"
        },
        {
            "id": "9",
            "product_name": "Awesome Wooden Ball",
            "product_price": 28.00,
            "product_material": "Soft",
            "product_color": "azure"
        },
        {
            "id": "10",
            "product_name": "Generic Wooden Pizza",
            "product_price": 84.00,
            "product_material": "Frozen",
            "product_color": "indigo"
        },
        {
            "id": "11",
            "product_name": "Unbranded Wooden Cheese",
            "product_price":26.00,
            "product_material": "Soft",
            "product_color": "black"
        },
        {
            "id": "12",
            "product_name": "Unbranded Plastic Salad",
            "product_price": 89.00,
            "product_material": "Wooden",
            "product_color": "pink"
        },
        {
            "id": "13",
            "product_name": "Gorgeous Cotton Keyboard",
            "product_price": 37.00,
            "product_material": "Concrete",
            "product_color": "sky blue"
        },
        {
            "id": "14",
            "product_name": "Incredible Steel Shirt",
            "product_price": 54.00,
            "product_material": "Metal",
            "product_color": "white"
        },
        {
            "id": "15",
            "product_name": "Ergonomic Cotton Hat",
            "product_price": 43.00,
            "product_material": "Rubber",
            "product_color": "mint green"
        },
        {
            "id": "16",
            "product_name": "Small Soft Chair",
            "product_price": 47.00,
            "product_material": "Cotton",
            "product_color": "teal"
        },
        {
            "id": "17",
            "product_name": "Incredible Metal Car",
            "product_price":36.00,
            "product_material": "Fresh",
            "product_color": "indigo"
        },
        {
            "id": "18",
            "product_name": "Licensed Plastic Bacon",
            "product_price":88.00,
            "product_material": "Steel",
            "product_color": "yellow"
        },
        {
            "id": "19",
            "product_name": "Intelligent Cotton Chips",
            "product_price": 46.00,
            "product_material": "Soft",
            "product_color": "azure"
        },
        {
            "id": "20",
            "product_name": "Handcrafted Wooden Bacon",
            "product_price": 36.00,
            "product_material": "Concrete",
            "product_color": "lime"
        },
        {
            "id": "21",
            "product_name": "Unbranded Granite Chicken",
            "product_price": 90.00,
            "product_material": "Metal",
            "product_color": "gold"
        },
        {
            "id": "22",
            "product_name": "Ergonomic Soft Hat",
            "product_price": 99.00,
            "product_material": "Rubber",
            "product_color": "black"
        },
        {
            "id": "23",
            "product_name": "Intelligent Steel Pizza",
            "product_price": 95.00,
            "product_material": "Cotton",
            "product_color": "azure"
        },
        {
            "id": "24",
            "product_name": "Tasty Rubber Cheese",
            "product_price":47.00,
            "product_material": "Frozen",
            "product_color": "orchid"
        },
        {
            "id": "25",
            "product_name": "Licensed Steel Car",
            "product_price":20.00,
            "product_material": "Cotton",
            "product_color": "indigo"
        }
    ]
)

//1. query for all the information about each products
db.productsDetails.find().toArray()

//Result:
[
    {
      _id: ObjectId("653102db70a4d4501d5f0227"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0228"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0229"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022a"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022b"),
      id: '5',
      product_name: 'Sleek Cotton Chair',
      product_price: 33,
      product_material: 'Fresh',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022c"),
      id: '6',
      product_name: 'Awesome Wooden Towels',
      product_price: 474,
      product_material: 'Plastic',
      product_color: 'orange'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022d"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022e"),
      id: '8',
      product_name: 'Incredible Steel Hat',
      product_price: 78,
      product_material: 'Rubber',
      product_color: 'violet'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022f"),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0230"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0231"),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0232"),
      id: '12',
      product_name: 'Unbranded Plastic Salad',
      product_price: 89,
      product_material: 'Wooden',
      product_color: 'pink'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0233"),
      id: '13',
      product_name: 'Gorgeous Cotton Keyboard',
      product_price: 37,
      product_material: 'Concrete',
      product_color: 'sky blue'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0234"),
      id: '14',
      product_name: 'Incredible Steel Shirt',
      product_price: 54,
      product_material: 'Metal',
      product_color: 'white'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0235"),
      id: '15',
      product_name: 'Ergonomic Cotton Hat',
      product_price: 43,
      product_material: 'Rubber',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0236"),
      id: '16',
      product_name: 'Small Soft Chair',
      product_price: 47,
      product_material: 'Cotton',
      product_color: 'teal'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0237"),
      id: '17',
      product_name: 'Incredible Metal Car',
      product_price: 36,
      product_material: 'Fresh',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0238"),
      id: '18',
      product_name: 'Licensed Plastic Bacon',
      product_price: 88,
      product_material: 'Steel',
      product_color: 'yellow'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0239"),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023a"),
      id: '20',
      product_name: 'Handcrafted Wooden Bacon',
      product_price: 36,
      product_material: 'Concrete',
      product_color: 'lime'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023b"),
      id: '21',
      product_name: 'Unbranded Granite Chicken',
      product_price: 90,
      product_material: 'Metal',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023c"),
      id: '22',
      product_name: 'Ergonomic Soft Hat',
      product_price: 99,
      product_material: 'Rubber',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023d"),
      id: '23',
      product_name: 'Intelligent Steel Pizza',
      product_price: 95,
      product_material: 'Cotton',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023e"),
      id: '24',
      product_name: 'Tasty Rubber Cheese',
      product_price: 47,
      product_material: 'Frozen',
      product_color: 'orchid'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023f"),
      id: '25',
      product_name: 'Licensed Steel Car',
      product_price: 20,
      product_material: 'Cotton',
      product_color: 'indigo'
    }
  ]

//2.product price which are between 400 to 800
db.productsDetails.find({product_price: {$gte:400, $lte:800}})

//Result:
[
    {
      _id: ObjectId("653102db70a4d4501d5f0227"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0229"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022a"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022c"),
      id: '6',
      product_name: 'Awesome Wooden Towels',
      product_price: 474,
      product_material: 'Plastic',
      product_color: 'orange'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022d"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    }
  ]

//3.product price which are not between 400 to 600
db.productsDetails.find({product_price: {$not: {$gt:400, $lt:600}}}).toArray()

//Result:
[
    {
      _id: ObjectId("653102db70a4d4501d5f0227"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0228"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0229"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022b"),
      id: '5',
      product_name: 'Sleek Cotton Chair',
      product_price: 33,
      product_material: 'Fresh',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022e"),
      id: '8',
      product_name: 'Incredible Steel Hat',
      product_price: 78,
      product_material: 'Rubber',
      product_color: 'violet'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022f"),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0230"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0231"),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0232"),
      id: '12',
      product_name: 'Unbranded Plastic Salad',
      product_price: 89,
      product_material: 'Wooden',
      product_color: 'pink'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0233"),
      id: '13',
      product_name: 'Gorgeous Cotton Keyboard',
      product_price: 37,
      product_material: 'Concrete',
      product_color: 'sky blue'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0234"),
      id: '14',
      product_name: 'Incredible Steel Shirt',
      product_price: 54,
      product_material: 'Metal',
      product_color: 'white'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0235"),
      id: '15',
      product_name: 'Ergonomic Cotton Hat',
      product_price: 43,
      product_material: 'Rubber',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0236"),
      id: '16',
      product_name: 'Small Soft Chair',
      product_price: 47,
      product_material: 'Cotton',
      product_color: 'teal'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0237"),
      id: '17',
      product_name: 'Incredible Metal Car',
      product_price: 36,
      product_material: 'Fresh',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0238"),
      id: '18',
      product_name: 'Licensed Plastic Bacon',
      product_price: 88,
      product_material: 'Steel',
      product_color: 'yellow'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0239"),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023a"),
      id: '20',
      product_name: 'Handcrafted Wooden Bacon',
      product_price: 36,
      product_material: 'Concrete',
      product_color: 'lime'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023b"),
      id: '21',
      product_name: 'Unbranded Granite Chicken',
      product_price: 90,
      product_material: 'Metal',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023c"),
      id: '22',
      product_name: 'Ergonomic Soft Hat',
      product_price: 99,
      product_material: 'Rubber',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023d"),
      id: '23',
      product_name: 'Intelligent Steel Pizza',
      product_price: 95,
      product_material: 'Cotton',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023e"),
      id: '24',
      product_name: 'Tasty Rubber Cheese',
      product_price: 47,
      product_material: 'Frozen',
      product_color: 'orchid'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023f"),
      id: '25',
      product_name: 'Licensed Steel Car',
      product_price: 20,
      product_material: 'Cotton',
      product_color: 'indigo'
    }
  ]

//4.four product which are grater than 500 in price
db.productsDetails.find({product_price: {$gte:500}}).limit(4)

//Result:
[
    {
      _id: ObjectId("653102db70a4d4501d5f0227"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0228"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0229"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022d"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    }
  ]

  //5.product name and product material of each products
  db.productsDetails.find().forEach(function(prod)
    {
        print("product_id:", prod.id)
        print("product_name:", prod.product_name)
        print("product_material:", prod.product_material)
  })

  //Result:
//   product_id: 1
// product_name: Intelligent Fresh Chips
// product_material: Concrete
// product_id: 2
// product_name: Practical Fresh Sausages
// product_material: Cotton
// product_id: 3
// product_name: Refined Steel Car
// product_material: Rubber
// product_id: 4
// product_name: Gorgeous Plastic Pants
// product_material: Soft
// product_id: 5
// product_name: Sleek Cotton Chair
// product_material: Fresh
// product_id: 6
// product_name: Awesome Wooden Towels
// product_material: Plastic
// product_id: 7
// product_name: Practical Soft Shoes
// product_material: Rubber
// product_id: 8
// product_name: Incredible Steel Hat
// product_material: Rubber
// product_id: 9
// product_name: Awesome Wooden Ball
// product_material: Soft
// product_id: 10
// product_name: Generic Wooden Pizza
// product_material: Frozen
// product_id: 11
// product_name: Unbranded Wooden Cheese
// product_material: Soft
// product_id: 12
// product_name: Unbranded Plastic Salad
// product_material: Wooden
// product_id: 13
// product_name: Gorgeous Cotton Keyboard
// product_material: Concrete
// product_id: 14
// product_name: Incredible Steel Shirt
// product_material: Metal
// product_id: 15
// product_name: Ergonomic Cotton Hat
// product_material: Rubber
// product_id: 16
// product_name: Small Soft Chair
// product_material: Cotton
// product_id: 17
// product_name: Incredible Metal Car
// product_material: Fresh
// product_id: 18
// product_name: Licensed Plastic Bacon
// product_material: Steel
// product_id: 19
// product_name: Intelligent Cotton Chips
// product_material: Soft
// product_id: 20
// product_name: Handcrafted Wooden Bacon
// product_material: Concrete
// product_id: 21
// product_name: Unbranded Granite Chicken
// product_material: Metal
// product_id: 22
// product_name: Ergonomic Soft soft
// product_material: Rubber
// product_id: 23
// product_name: Intelligent Steel Pizza
// product_material: Cotton
// product_id: 24
// product_name: Tasty Rubber Cheese
// product_material: Frozen
// product_id: 25
// product_name: Licensed Steel Car
// product_material: Cotton

//6.product with a row id of 10

db.productsDetails.find({id: '10'})

//Result:
[
    {
      _id: ObjectId("653102db70a4d4501d5f0230"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    }
  ]

  //7.only the product name and product material

  db.productsDetails.find({$or: [{product_name: "Ergonomic Soft Hat"}, {product_material: "Metal"}]})

  //Result:
  [
    {
      _id: ObjectId("653102db70a4d4501d5f0234"),
      id: '14',
      product_name: 'Incredible Steel Shirt',
      product_price: 54,
      product_material: 'Metal',
      product_color: 'white'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023b"),
      id: '21',
      product_name: 'Unbranded Granite Chicken',
      product_price: 90,
      product_material: 'Metal',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023c"),
      id: '22',
      product_name: 'Ergonomic Soft Hat',
      product_price: 99,
      product_material: 'Rubber',
      product_color: 'black'
    }
  ]

  //8.products which contain the value of soft in product material 
  db.productsDetails.find({product_material: "Soft"})

  //result
  [
    {
      _id: ObjectId("653102db70a4d4501d5f022a"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022f"),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0231"),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0239"),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    }
  ]

  //9.products which contain product color indigo  and product price 492.00
  db.productsDetails.find({$or: [{product_color: "indigo"}, {product_price: 492}]})

//result
[
    {
      _id: ObjectId("653102db70a4d4501d5f0228"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022a"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0230"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0237"),
      id: '17',
      product_name: 'Incredible Metal Car',
      product_price: 36,
      product_material: 'Fresh',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023f"),
      id: '25',
      product_name: 'Licensed Steel Car',
      product_price: 20,
      product_material: 'Cotton',
      product_color: 'indigo'
    }
  ]

  //10.Delete the products which product price value are same
  db.productsDetails.aggregate([
    {$group :{
        _id:"$product_price",
        duplicate:{$addToSet:"$_id"},
        Totalcount : {$sum :1}
    }},
    {
        $match : {
            Totalcount : {$gt:1} 
        }
    }
]).forEach((doc)=>{
    doc.duplicate.shift(); 
    db.productsDetails.deleteMany({_id:{$in:doc.duplicate}})
})

//results

[
    {
      _id: ObjectId("653102db70a4d4501d5f0227"),
      id: '1',
      product_name: 'Intelligent Fresh Chips',
      product_price: 655,
      product_material: 'Concrete',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0228"),
      id: '2',
      product_name: 'Practical Fresh Sausages',
      product_price: 911,
      product_material: 'Cotton',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0229"),
      id: '3',
      product_name: 'Refined Steel Car',
      product_price: 690,
      product_material: 'Rubber',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022a"),
      id: '4',
      product_name: 'Gorgeous Plastic Pants',
      product_price: 492,
      product_material: 'Soft',
      product_color: 'plum'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022b"),
      id: '5',
      product_name: 'Sleek Cotton Chair',
      product_price: 33,
      product_material: 'Fresh',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022c"),
      id: '6',
      product_name: 'Awesome Wooden Towels',
      product_price: 474,
      product_material: 'Plastic',
      product_color: 'orange'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022d"),
      id: '7',
      product_name: 'Practical Soft Shoes',
      product_price: 500,
      product_material: 'Rubber',
      product_color: 'pink'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022e"),
      id: '8',
      product_name: 'Incredible Steel Hat',
      product_price: 78,
      product_material: 'Rubber',
      product_color: 'violet'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f022f"),
      id: '9',
      product_name: 'Awesome Wooden Ball',
      product_price: 28,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0230"),
      id: '10',
      product_name: 'Generic Wooden Pizza',
      product_price: 84,
      product_material: 'Frozen',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0231"),
      id: '11',
      product_name: 'Unbranded Wooden Cheese',
      product_price: 26,
      product_material: 'Soft',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0232"),
      id: '12',
      product_name: 'Unbranded Plastic Salad',
      product_price: 89,
      product_material: 'Wooden',
      product_color: 'pink'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0233"),
      id: '13',
      product_name: 'Gorgeous Cotton Keyboard',
      product_price: 37,
      product_material: 'Concrete',
      product_color: 'sky blue'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0234"),
      id: '14',
      product_name: 'Incredible Steel Shirt',
      product_price: 54,
      product_material: 'Metal',
      product_color: 'white'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0235"),
      id: '15',
      product_name: 'Ergonomic Cotton Hat',
      product_price: 43,
      product_material: 'Rubber',
      product_color: 'mint green'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0237"),
      id: '17',
      product_name: 'Incredible Metal Car',
      product_price: 36,
      product_material: 'Fresh',
      product_color: 'indigo'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0238"),
      id: '18',
      product_name: 'Licensed Plastic Bacon',
      product_price: 88,
      product_material: 'Steel',
      product_color: 'yellow'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f0239"),
      id: '19',
      product_name: 'Intelligent Cotton Chips',
      product_price: 46,
      product_material: 'Soft',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023b"),
      id: '21',
      product_name: 'Unbranded Granite Chicken',
      product_price: 90,
      product_material: 'Metal',
      product_color: 'gold'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023c"),
      id: '22',
      product_name: 'Ergonomic Soft Hat',
      product_price: 99,
      product_material: 'Rubber',
      product_color: 'black'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023d"),
      id: '23',
      product_name: 'Intelligent Steel Pizza',
      product_price: 95,
      product_material: 'Cotton',
      product_color: 'azure'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023e"),
      id: '24',
      product_name: 'Tasty Rubber Cheese',
      product_price: 47,
      product_material: 'Frozen',
      product_color: 'orchid'
    },
    {
      _id: ObjectId("653102db70a4d4501d5f023f"),
      id: '25',
      product_name: 'Licensed Steel Car',
      product_price: 20,
      product_material: 'Cotton',
      product_color: 'indigo'
    }
  ]