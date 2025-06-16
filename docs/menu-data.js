const menuData = {
    faasos: [
        {
            id: 'f1',
            name: 'Chicken Tikka Wrap',
            description: 'Succulent chicken tikka wrapped in a soft roti with fresh veggies',
            price: 199,
            category: 'non-veg',
            image: 'https://b.zmtcdn.com/data/pictures/chains/0/37750/5fe78176d3acf65c617ceddeac7ffb28.jpg?fit=around|960:500&crop=960:500;*,*',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.5,
            deliveryTime: '25-30 min'
        },
        {
            id: 'f2',
            name: 'Paneer Tikka Wrap',
            description: 'Grilled paneer tikka wrapped in a soft roti with fresh veggies',
            price: 179,
            category: 'veg',
            image: 'https://static.india.com/wp-content/uploads/2024/10/FEATURE-2024-10-21T050557.205.jpg?impolicy=Medium_Widthonly&w=350&h=263',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.3,
            deliveryTime: '25-30 min'
        },
        {
            id: 'f3',
            name: 'Wrap Combo',
            description: '2 wraps of your choice with fries and a drink',
            price: 299,
            category: 'combo',
            image: 'https://cdn.uengage.io/uploads/49314/image-444565-1740756080.jpeg',
            badges: ['Combo', 'Value'],
            diet: ['Regular'],
            rating: 4.4,
            deliveryTime: '30-35 min'
        },
        {
            id: 'f4',
            name: 'Chicken Keema Wrap',
            description: 'Spiced minced chicken with onions and green chutney in a soft roti',
            price: 189,
            image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: false,
            isSpicy: true
        },
        {
            id: 'f5',
            name: 'Chicken Malai Wrap',
            description: 'Creamy chicken malai with cashew paste and mild spices in a soft roti',
            price: 219,
            image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: false
        },
        {
            id: 'f6',
            name: 'Paneer Malai Wrap',
            description: 'Creamy paneer with cashew paste and mild spices in a soft roti',
            price: 199,
            image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: false,
            isSpicy: false
        },
        {
            id: 'f7',
            name: 'Chicken Seekh Wrap',
            description: 'Spiced minced chicken seekh kebab with onions and mint chutney',
            price: 209,
            image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'f8',
            name: 'Veg Seekh Wrap',
            description: 'Spiced mixed vegetable seekh kebab with onions and mint chutney',
            price: 189,
            image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: false,
            isSpicy: false
        }
    ],
    behrouz: [
        {
            id: 'b1',
            name: 'Chicken Biryani',
            description: 'Fragrant basmati rice cooked with tender chicken pieces and special biryani masala',
            price: 299,
            category: 'non-veg',
            image: 'https://b.zmtcdn.com/data/pictures/chains/0/37750/5fe78176d3acf65c617ceddeac7ffb28.jpg?fit=around|960:500&crop=960:500;*,*',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.6,
            deliveryTime: '30-35 min'
        },
        {
            id: 'b2',
            name: 'Veg Biryani',
            description: 'Aromatic basmati rice cooked with fresh vegetables and special biryani masala',
            price: 249,
            category: 'veg',
            image: 'https://static.india.com/wp-content/uploads/2024/10/FEATURE-2024-10-21T050557.205.jpg?impolicy=Medium_Widthonly&w=350&h=263',
            badges: ['Bestseller'],
            diet: ['Regular'],
            rating: 4.2,
            deliveryTime: '30-35 min'
        },
        {
            id: 'b3',
            name: 'Paneer Biryani',
            description: 'Fragrant biryani with soft paneer cubes and special masala',
            price: 269,
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: false,
            isSpicy: false
        },
        {
            id: 'b4',
            name: 'Mutton Biryani',
            description: 'Traditional biryani with tender mutton pieces and authentic spices',
            price: 349,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'b5',
            name: 'Chicken Tikka Biryani',
            description: 'Special biryani with tandoori chicken tikka pieces and aromatic spices',
            price: 329,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'b6',
            name: 'Hyderabadi Biryani',
            description: 'Traditional Hyderabadi style biryani with special masala and herbs',
            price: 379,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'b7',
            name: 'Veg Dum Biryani',
            description: 'Slow-cooked biryani with mixed vegetables and aromatic spices',
            price: 269,
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: false,
            isSpicy: false
        },
        {
            id: 'b8',
            name: 'Keema Biryani',
            description: 'Fragrant biryani with spiced minced meat and special masala',
            price: 319,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        }
    ],
    'oven-story': [
        {
            id: 'o1',
            name: 'Margherita Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil',
            price: 249,
            category: 'veg',
            image: 'https://b.zmtcdn.com/data/pictures/chains/0/37750/5fe78176d3acf65c617ceddeac7ffb28.jpg?fit=around|960:500&crop=960:500;*,*',
            badges: ['Bestseller'],
            diet: ['Regular'],
            rating: 4.4,
            deliveryTime: '35-40 min'
        },
        {
            id: 'o2',
            name: 'Pepperoni Pizza',
            description: 'Loaded with pepperoni slices, mozzarella cheese, and tomato sauce',
            price: 299,
            category: 'non-veg',
            image: 'https://static.india.com/wp-content/uploads/2024/10/FEATURE-2024-10-21T050557.205.jpg?impolicy=Medium_Widthonly&w=350&h=263',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.5,
            deliveryTime: '35-40 min'
        },
        {
            id: 'o3',
            name: 'Veg Supreme Pizza',
            description: 'Loaded with bell peppers, onions, mushrooms, olives, and extra cheese',
            price: 279,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: false,
            isSpicy: false
        },
        {
            id: 'o4',
            name: 'Chicken Tikka Pizza',
            description: 'Tandoori chicken tikka pieces with onions and capsicum on a pizza',
            price: 329,
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'o5',
            name: 'Farmhouse Pizza',
            description: 'Loaded with fresh vegetables, mushrooms, and extra cheese',
            price: 299,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: true,
            isSpicy: false
        },
        {
            id: 'o6',
            name: 'Chicken Supreme Pizza',
            description: 'Loaded with chicken tikka, pepperoni, bell peppers, and extra cheese',
            price: 349,
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'o7',
            name: 'Paneer Makhani Pizza',
            description: 'Butter paneer with onions and capsicum on a pizza base',
            price: 299,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: false,
            isSpicy: false
        },
        {
            id: 'o8',
            name: 'BBQ Chicken Pizza',
            description: 'BBQ chicken with red onions and capsicum on a pizza',
            price: 329,
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        }
    ],
    'mandarin-oak': [
        {
            id: 'm1',
            name: 'Chicken Noodles',
            description: 'Stir-fried noodles with chicken, vegetables, and special Chinese sauce',
            price: 249,
            category: 'non-veg',
            image: 'https://b.zmtcdn.com/data/pictures/chains/0/37750/5fe78176d3acf65c617ceddeac7ffb28.jpg?fit=around|960:500&crop=960:500;*,*',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.3,
            deliveryTime: '30-35 min'
        },
        {
            id: 'm2',
            name: 'Veg Fried Rice',
            description: 'Classic Chinese fried rice with mixed vegetables and soy sauce',
            price: 199,
            category: 'veg',
            image: 'https://static.india.com/wp-content/uploads/2024/10/FEATURE-2024-10-21T050557.205.jpg?impolicy=Medium_Widthonly&w=350&h=263',
            badges: ['Bestseller'],
            diet: ['Regular'],
            rating: 4.2,
            deliveryTime: '30-35 min'
        },
        {
            id: 'm3',
            name: 'Chicken Manchurian',
            description: 'Crispy chicken balls in spicy, tangy Manchurian sauce',
            price: 279,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'm4',
            name: 'Veg Noodles',
            description: 'Stir-fried noodles with fresh vegetables and Chinese sauces',
            price: 199,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: false,
            isSpicy: false
        },
        {
            id: 'm5',
            name: 'Chicken Fried Rice',
            description: 'Classic Chinese fried rice with chicken and mixed vegetables',
            price: 229,
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: false
        },
        {
            id: 'm6',
            name: 'Veg Manchurian',
            description: 'Crispy vegetable balls in spicy, tangy Manchurian sauce',
            price: 249,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'm7',
            name: 'Chicken Hakka Noodles',
            description: 'Stir-fried Hakka style noodles with chicken and vegetables',
            price: 269,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80',
            category: 'Non-Veg',
            isPopular: true,
            isSpicy: true
        },
        {
            id: 'm8',
            name: 'Veg Hakka Noodles',
            description: 'Stir-fried Hakka style noodles with fresh vegetables',
            price: 229,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80',
            category: 'Veg',
            isPopular: false,
            isSpicy: false
        }
    ],
    combos: [
        {
            id: 'c1',
            name: 'Faasos Meal for 2',
            description: '2 Wraps + 2 Soft Drinks + 1 Fries',
            price: 499,
            category: 'combo',
            image: 'https://cdn.uengage.io/uploads/49314/image-444565-1740756080.jpeg',
            badges: ['Combo', 'Value'],
            diet: ['Regular'],
            rating: 4.4,
            deliveryTime: '30-35 min',
            items: [
                { id: 'f1', quantity: 1 },
                { id: 'f2', quantity: 1 }
            ]
        },
        {
            id: 'c2',
            name: 'Behrouz Family Pack',
            description: '2 Biryanis + 2 Soft Drinks + 1 Raita',
            price: 699,
            category: 'combo',
            image: 'https://cdn.uengage.io/uploads/49314/image-444565-1740756080.jpeg',
            badges: ['Combo', 'Value'],
            diet: ['Regular'],
            rating: 4.5,
            deliveryTime: '35-40 min',
            items: [
                { id: 'b1', quantity: 1 },
                { id: 'b2', quantity: 1 }
            ]
        },
        {
            id: 'c3',
            name: 'Pizza Party Pack',
            description: '2 Medium Pizzas + 2 Soft Drinks + 1 Garlic Bread',
            price: 799,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80',
            items: [
                { id: 'o1', quantity: 1 },
                { id: 'o2', quantity: 1 }
            ],
            category: 'Combo',
            isPopular: true
        },
        {
            id: 'c4',
            name: 'Chinese Feast',
            description: '2 Noodles/Rice + 2 Starters + 2 Soft Drinks',
            price: 599,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80',
            items: [
                { id: 'm1', quantity: 1 },
                { id: 'm2', quantity: 1 }
            ],
            category: 'Combo',
            isPopular: true
        },
        {
            id: 'c5',
            name: 'Faasos Family Feast',
            description: '4 Wraps + 4 Soft Drinks + 2 Fries',
            price: 899,
            image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=80',
            items: [
                { id: 'f1', quantity: 2 },
                { id: 'f2', quantity: 2 }
            ],
            category: 'Combo',
            isPopular: true
        },
        {
            id: 'c6',
            name: 'Behrouz Grand Feast',
            description: '4 Biryanis + 4 Soft Drinks + 2 Raita + 1 Gulab Jamun',
            price: 1299,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
            items: [
                { id: 'b1', quantity: 2 },
                { id: 'b2', quantity: 2 }
            ],
            category: 'Combo',
            isPopular: true
        },
        {
            id: 'c7',
            name: 'Pizza Family Feast',
            description: '3 Medium Pizzas + 4 Soft Drinks + 2 Garlic Bread + 1 Pasta',
            price: 1199,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80',
            items: [
                { id: 'o1', quantity: 1 },
                { id: 'o2', quantity: 1 },
                { id: 'o5', quantity: 1 }
            ],
            category: 'Combo',
            isPopular: true
        },
        {
            id: 'c8',
            name: 'Chinese Family Feast',
            description: '4 Noodles/Rice + 4 Starters + 4 Soft Drinks + 1 Ice Cream',
            price: 999,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80',
            items: [
                { id: 'm1', quantity: 2 },
                { id: 'm2', quantity: 2 }
            ],
            category: 'Combo',
            isPopular: true
        }
    ]
}; 