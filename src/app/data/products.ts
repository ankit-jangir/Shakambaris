import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium California Almonds',
    category: 'Almonds',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMG51dHN8ZW58MXx8fHwxNzY2NTY2NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 247,
    description: 'Our premium California almonds are hand-selected for their superior quality, rich flavor, and exceptional crunch. Packed fresh daily to ensure maximum freshness.',
    healthBenefits: [
      'Rich in Vitamin E and antioxidants',
      'Supports heart health',
      'Helps in weight management',
      'Improves skin health',
      'Good source of protein and fiber'
    ],
    origin: 'California, USA',
    nutritionFacts: {
      calories: 160,
      protein: '6g',
      fat: '14g',
      carbs: '6g',
      fiber: '3.5g'
    },
    weights: [
      { value: '250g', price: 24.99 },
      { value: '500g', price: 45.99 },
      { value: '1kg', price: 85.99 }
    ],
    isBestSeller: true,
    isOrganic: true
  },
  {
    id: 2,
    name: 'Organic Cashew Nuts',
    category: 'Cashews',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1649103990366-ec254eb38c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwb3JnYW5pY3xlbnwxfHx8fDE3NjY1NjY1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 312,
    description: 'Buttery, creamy, and absolutely delicious. Our organic cashews are sourced from the finest farms and roasted to perfection.',
    healthBenefits: [
      'Rich in copper and magnesium',
      'Supports bone health',
      'Promotes heart health',
      'Boosts immunity',
      'Good for brain function'
    ],
    origin: 'Kerala, India',
    nutritionFacts: {
      calories: 157,
      protein: '5g',
      fat: '12g',
      carbs: '9g',
      fiber: '1g'
    },
    weights: [
      { value: '250g', price: 29.99 },
      { value: '500g', price: 55.99 },
      { value: '1kg', price: 105.99 }
    ],
    isBestSeller: true,
    isOrganic: true
  },
  {
    id: 3,
    name: 'Roasted Pistachios',
    category: 'Pistachios',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1502825751399-28baa9b81efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW9zJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjY1NjY1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 189,
    description: 'Lightly salted and perfectly roasted pistachios with a distinctive green color and rich, nutty flavor.',
    healthBenefits: [
      'High in antioxidants',
      'Supports eye health',
      'Aids in weight loss',
      'Promotes healthy gut bacteria',
      'Rich in protein and fiber'
    ],
    origin: 'California, USA',
    nutritionFacts: {
      calories: 159,
      protein: '6g',
      fat: '13g',
      carbs: '8g',
      fiber: '3g'
    },
    weights: [
      { value: '250g', price: 32.99 },
      { value: '500g', price: 62.99 },
      { value: '1kg', price: 119.99 }
    ],
    isBestSeller: true,
    isOrganic: false
  },
  {
    id: 4,
    name: 'Walnut Halves',
    category: 'Walnuts',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1724829260119-3db605c50a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXRzJTIwd29vZGVuJTIwYm93bHxlbnwxfHx8fDE3NjY1NjY1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviews: 156,
    description: 'Fresh, premium walnut halves with a mild, earthy flavor. Perfect for snacking or baking.',
    healthBenefits: [
      'Rich in Omega-3 fatty acids',
      'Supports brain health',
      'Reduces inflammation',
      'Improves heart health',
      'May help prevent cancer'
    ],
    origin: 'California, USA',
    nutritionFacts: {
      calories: 185,
      protein: '4g',
      fat: '18g',
      carbs: '4g',
      fiber: '2g'
    },
    weights: [
      { value: '250g', price: 27.99 },
      { value: '500g', price: 52.99 },
      { value: '1kg', price: 99.99 }
    ],
    isOrganic: true
  },
  {
    id: 5,
    name: 'Golden Raisins',
    category: 'Raisins',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1608842850202-06e70ead4c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlzaW5zJTIwZHJpZWQlMjBmcnVpdHN8ZW58MXx8fHwxNzY2NTY2NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    reviews: 203,
    description: 'Sweet, plump golden raisins with no added sugar. Naturally dried to preserve their flavor and nutrients.',
    healthBenefits: [
      'Rich in iron and potassium',
      'Aids digestion',
      'Boosts energy levels',
      'Supports bone health',
      'Natural source of antioxidants'
    ],
    origin: 'California, USA',
    nutritionFacts: {
      calories: 129,
      protein: '1g',
      fat: '0g',
      carbs: '34g',
      fiber: '2g'
    },
    weights: [
      { value: '250g', price: 15.99 },
      { value: '500g', price: 28.99 },
      { value: '1kg', price: 54.99 }
    ],
    isOrganic: true
  },
  {
    id: 6,
    name: 'Medjool Dates',
    category: 'Dates',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1717276850243-80657c246333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRlcyUyMGZydWl0cyUyMHByZW1pdW18ZW58MXx8fHwxNzY2NTY2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 278,
    description: 'Premium Medjool dates, known as the "king of dates." Naturally sweet and incredibly delicious.',
    healthBenefits: [
      'Natural energy booster',
      'Rich in fiber',
      'Supports digestive health',
      'High in antioxidants',
      'Promotes brain health'
    ],
    origin: 'Jordan',
    nutritionFacts: {
      calories: 277,
      protein: '2g',
      fat: '0g',
      carbs: '75g',
      fiber: '7g'
    },
    weights: [
      { value: '250g', price: 22.99 },
      { value: '500g', price: 42.99 },
      { value: '1kg', price: 79.99 }
    ],
    isBestSeller: true,
    isOrganic: true
  },
  {
    id: 7,
    name: 'Organic Dried Figs',
    category: 'Figs',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1601379759471-d2df573e7d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZpZ3MlMjBvcmdhbmljfGVufDF8fHx8MTc2NjU2NjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 134,
    description: 'Tender, chewy dried figs with a sweet honey-like flavor. Perfect for snacking or cooking.',
    healthBenefits: [
      'Excellent source of fiber',
      'Rich in minerals',
      'Supports bone health',
      'Aids in weight management',
      'Improves digestive health'
    ],
    origin: 'Turkey',
    nutritionFacts: {
      calories: 249,
      protein: '3g',
      fat: '1g',
      carbs: '64g',
      fiber: '10g'
    },
    weights: [
      { value: '250g', price: 19.99 },
      { value: '500g', price: 37.99 },
      { value: '1kg', price: 72.99 }
    ],
    isOrganic: true
  },
  {
    id: 8,
    name: 'Premium Mixed Nuts',
    category: 'Mixed',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1764436988814-4eff7322ee9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBhc3NvcnRtZW50fGVufDF8fHx8MTc2NjU2NjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 421,
    description: 'A perfect blend of almonds, cashews, pistachios, and walnuts. Ideal for gifting or daily snacking.',
    healthBenefits: [
      'Complete nutrition in one mix',
      'Rich in healthy fats',
      'Supports overall health',
      'Great protein source',
      'Boosts energy and vitality'
    ],
    origin: 'Multi-origin',
    nutritionFacts: {
      calories: 170,
      protein: '5g',
      fat: '15g',
      carbs: '7g',
      fiber: '3g'
    },
    weights: [
      { value: '250g', price: 34.99 },
      { value: '500g', price: 65.99 },
      { value: '1kg', price: 125.99 }
    ],
    isBestSeller: true,
    isOrganic: false
  }
];
