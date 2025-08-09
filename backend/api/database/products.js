const products = [
  // Electronics
  {
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    description: {
      features: "Noise cancellation, 20-hour battery, premium sound.",
      deliveryInfo: "Delivered in 3-5 days via tracked shipping."
    },
    image: "https://images.pexels.com/photos/11199906/pexels-photo-11199906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    name: "Smartphone Tripod Stand",
    price: 29.99,
    description: {
      features: "Adjustable height, 360° rotation, universal mount.",
      deliveryInfo: "Delivery in 4-6 days. Free returns available."
    },
    image: "https://images.pexels.com/photos/14541004/pexels-photo-14541004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    name: "Portable Power Bank 20000mAh",
    price: 39.99,
    description: {
      features: "Dual USB output, fast charging, compact design.",
      deliveryInfo: "Standard shipping in 3-5 business days."
    },
    image: "https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    name: "Smart LED Bulb (Pack of 2)",
    price: 19.99,
    description: {
      features: "Wi-Fi enabled, voice control, 16M colors.",
      deliveryInfo: "Delivered within 5 days."
    },
    image: "https://images.pexels.com/photos/11605252/pexels-photo-11605252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    name: "Bluetooth Speaker",
    price: 45.00,
    description: {
      features: "Water-resistant, portable, 10-hour battery life.",
      deliveryInfo: "Delivery in 2-4 business days."
    },
    image: "https://images.pexels.com/photos/5511714/pexels-photo-5511714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    name: "Wireless Charging Pad",
    price: 25.00,
    description: {
      features: "Qi-compatible, fast charging, sleek design.",
      deliveryInfo: "Ships in 3-5 days."
    },
    image: "https://images.pexels.com/photos/7952558/pexels-photo-7952558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    name: "USB-C Hub Adapter",
    price: 34.99,
    description: {
      features: "4K HDMI, SD card reader, 3 USB ports.",
      deliveryInfo: "Delivery in 3-6 business days."
    },
    image: "https://images.pexels.com/photos/4675007/pexels-photo-4675007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    name: "Smart Fitness Band",
    price: 49.00,
    description: {
      features: "Heart rate monitor, step counter, waterproof.",
      deliveryInfo: "Delivered in 5 days or less."
    },
    image: "https://images.pexels.com/photos/7671475/pexels-photo-7671475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },
  {
    name: "1080p Webcam",
    price: 69.99,
    description: {
      features: "Auto-focus, noise-reduction mic, wide angle.",
      deliveryInfo: "Delivered within a week."
    },
    image: "https://images.unsplash.com/photo-1623949556303-b0d17d198863?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics"
  },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    description: {
      features: "RGB lighting, blue switches, anti-ghosting.",
      deliveryInfo: "Ships in 3 days."
    },
    image: "https://images.pexels.com/photos/8288049/pexels-photo-8288049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics"
  },

  // Fashion
  {
    name: "Men's Denim Jacket",
    price: 79.99,
    description: {
      features: "100% cotton, classic fit, durable stitching.",
      deliveryInfo: "Delivery in 4-7 days."
    },
    image: "https://via.placeholder.com/300x300?text=Denim+Jacket",
    category: "Fashion"
  },
  {
    name: "Women's Casual Sneakers",
    price: 54.99,
    description: {
      features: "Breathable, lightweight, trendy design.",
      deliveryInfo: "Free delivery within 5 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Sneakers",
    category: "Fashion"
  },
  {
    name: "Unisex Aviator Sunglasses",
    price: 29.99,
    description: {
      features: "UV400 protection, classic metal frame.",
      deliveryInfo: "Ships in 2-4 days."
    },
    image: "https://via.placeholder.com/300x300?text=Sunglasses",
    category: "Fashion"
  },
  {
    name: "Women's Handbag",
    price: 69.99,
    description: {
      features: "Faux leather, spacious, includes shoulder strap.",
      deliveryInfo: "Standard delivery in 5-7 days."
    },
    image: "https://via.placeholder.com/300x300?text=Handbag",
    category: "Fashion"
  },
  {
    name: "Men's Leather Belt",
    price: 24.99,
    description: {
      features: "Genuine leather, adjustable, classic buckle.",
      deliveryInfo: "Delivery in 3-5 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Belt",
    category: "Fashion"
  },
  {
    name: "Cotton T-Shirt (Pack of 2)",
    price: 34.99,
    description: {
      features: "Soft fabric, slim fit, machine washable.",
      deliveryInfo: "Delivered within a week."
    },
    image: "https://via.placeholder.com/300x300?text=T-Shirts",
    category: "Fashion"
  },
  {
    name: "Stylish Analog Watch",
    price: 119.99,
    description: {
      features: "Water-resistant, leather strap, quartz movement.",
      deliveryInfo: "Delivered in 4-6 days."
    },
    image: "https://via.placeholder.com/300x300?text=Watch",
    category: "Fashion"
  },
  {
    name: "Men's Chinos Pants",
    price: 49.99,
    description: {
      features: "Slim fit, stretchable, wrinkle-resistant.",
      deliveryInfo: "Ships in 3-6 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Chinos",
    category: "Fashion"
  },
  {
    name: "Women's Floral Dress",
    price: 59.99,
    description: {
      features: "Lightweight, breathable, knee-length.",
      deliveryInfo: "Free delivery in 5 days."
    },
    image: "https://via.placeholder.com/300x300?text=Floral+Dress",
    category: "Fashion"
  },
  {
    name: "Winter Woolen Scarf",
    price: 19.99,
    description: {
      features: "Soft wool, warm, stylish patterns.",
      deliveryInfo: "Ships in 2-3 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Scarf",
    category: "Fashion"
  },

  // Home & Kitchen
  {
    name: "Stainless Steel Cookware Set",
    price: 129.99,
    description: {
      features: "10-piece set, dishwasher safe, induction compatible.",
      deliveryInfo: "Delivered in 4-7 days."
    },
    image: "https://via.placeholder.com/300x300?text=Cookware+Set",
    category: "Home & Kitchen"
  },
  {
    name: "Electric Kettle 1.5L",
    price: 39.99,
    description: {
      features: "Auto shut-off, boil dry protection, fast boiling.",
      deliveryInfo: "Delivery in 2-4 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Kettle",
    category: "Home & Kitchen"
  },
  {
    name: "Memory Foam Pillow",
    price: 44.99,
    description: {
      features: "Ergonomic design, washable cover, orthopedic support.",
      deliveryInfo: "Ships in 3-5 days."
    },
    image: "https://via.placeholder.com/300x300?text=Pillow",
    category: "Home & Kitchen"
  },
  {
    name: "Non-Stick Frying Pan",
    price: 24.99,
    description: {
      features: "PFOA-free, easy-clean, soft handle.",
      deliveryInfo: "Delivered in 5 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Frying+Pan",
    category: "Home & Kitchen"
  },
  {
    name: "Ceramic Dinner Set",
    price: 89.99,
    description: {
      features: "16-piece set, microwave safe, elegant design.",
      deliveryInfo: "Ships in 4-6 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Dinner+Set",
    category: "Home & Kitchen"
  },
  {
    name: "LED Desk Lamp",
    price: 29.99,
    description: {
      features: "Touch control, dimmable, USB charging port.",
      deliveryInfo: "Delivered in 3-5 days."
    },
    image: "https://via.placeholder.com/300x300?text=Desk+Lamp",
    category: "Home & Kitchen"
  },
  {
    name: "Wooden Bookshelf",
    price: 119.99,
    description: {
      features: "5-tier storage, natural finish, easy to assemble.",
      deliveryInfo: "Delivered in 7 days."
    },
    image: "https://via.placeholder.com/300x300?text=Bookshelf",
    category: "Home & Kitchen"
  },
  {
    name: "Air Purifier",
    price: 149.99,
    description: {
      features: "HEPA filter, quiet operation, for large rooms.",
      deliveryInfo: "Delivery in 5-8 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Air+Purifier",
    category: "Home & Kitchen"
  },
  {
    name: "Insulated Water Bottle",
    price: 19.99,
    description: {
      features: "Keeps hot/cold for 12+ hours, leakproof, BPA-free.",
      deliveryInfo: "Ships in 2-4 days."
    },
    image: "https://via.placeholder.com/300x300?text=Water+Bottle",
    category: "Home & Kitchen"
  },
  {
    name: "Kitchen Knife Set",
    price: 59.99,
    description: {
      features: "Stainless steel, 6 pieces with block, razor sharp.",
      deliveryInfo: "Delivered within a week."
    },
    image: "https://via.placeholder.com/300x300?text=Knife+Set",
    category: "Home & Kitchen"
  },

  // Beauty
  {
    name: "Vitamin C Serum",
    price: 24.99,
    description: {
      features: "Brightens skin, reduces spots, paraben-free.",
      deliveryInfo: "Delivery in 3-5 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Serum",
    category: "Beauty"
  },
  {
    name: "Moisturizing Face Cream",
    price: 29.99,
    description: {
      features: "Hydrates skin, suitable for all skin types.",
      deliveryInfo: "Delivered in 2-4 days."
    },
    image: "https://via.placeholder.com/300x300?text=Face+Cream",
    category: "Beauty"
  },
  {
    name: "Hair Dryer 2000W",
    price: 49.99,
    description: {
      features: "Ionic technology, 2 heat settings, compact design.",
      deliveryInfo: "Ships within 5 days."
    },
    image: "https://via.placeholder.com/300x300?text=Hair+Dryer",
    category: "Beauty"
  },
  {
    name: "Natural Lip Balm",
    price: 9.99,
    description: {
      features: "Organic, non-sticky, long-lasting moisture.",
      deliveryInfo: "Standard shipping in 3-5 days."
    },
    image: "https://via.placeholder.com/300x300?text=Lip+Balm",
    category: "Beauty"
  },
  {
    name: "Makeup Brush Set",
    price: 34.99,
    description: {
      features: "10 brushes, soft bristles, easy to clean.",
      deliveryInfo: "Ships in 4 days."
    },
    image: "https://via.placeholder.com/300x300?text=Brush+Set",
    category: "Beauty"
  },
  {
    name: "Aloe Vera Gel",
    price: 19.99,
    description: {
      features: "Soothes skin, multi-purpose, 100% natural.",
      deliveryInfo: "Delivered in 2-3 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Aloe+Vera",
    category: "Beauty"
  },
  {
    name: "Charcoal Face Mask",
    price: 14.99,
    description: {
      features: "Deep cleansing, unclogs pores, peel-off formula.",
      deliveryInfo: "Delivery in 4-6 days."
    },
    image: "https://via.placeholder.com/300x300?text=Face+Mask",
    category: "Beauty"
  },
  {
    name: "Eyeliner Pen",
    price: 12.99,
    description: {
      features: "Smudge-proof, waterproof, fine tip.",
      deliveryInfo: "Ships within 3 days."
    },
    image: "https://via.placeholder.com/300x300?text=Eyeliner",
    category: "Beauty"
  },
  {
    name: "Face Roller & Gua Sha Set",
    price: 27.99,
    description: {
      features: "Jade stone, improves circulation, relaxes skin.",
      deliveryInfo: "Delivered in 5 business days."
    },
    image: "https://via.placeholder.com/300x300?text=Face+Roller",
    category: "Beauty"
  },
  {
    name: "Compact Mirror with Light",
    price: 22.99,
    description: {
      features: "LED ring light, portable, rechargeable.",
      deliveryInfo: "Standard delivery in 5-7 days."
    },
    image: "https://via.placeholder.com/300x300?text=Mirror",
    category: "Beauty"
  }
];
  
