const Data = [
    {
        name: "USE ME AS TEST TRANSACTION",
        category: "windbreaker",
        available: 5,
        price: 0.5,
        season: "Autumn",
        image: "https://images.stockx.com/images/Yeezy-Gap-Sateen-Anorak-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1653661053",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. Praesent eget nisi elit. Pellentesque blandit ultricies nisl at finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        itemNum: "1203"
    },
    {
        name: "Raincoat",
        category: "windbreaker",
        available: 8,
        price: 150,
        season: "Rainy Season",
        image: "https://images.stockx.com/images/Yeezy-Gap-Sateen-Anorak-Dark-Green.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1653661053",
        description: "Stay dry in the wettest weather with this durable, waterproof raincoat.",
        itemNum: "1204"
    },

    // T-Shirts
    {
        name: "Shirt",
        category: "t-shirt",
        available: 20,
        price: 50,
        season: "Summer",
        image: "https://images.stockx.com/images/Nike-x-Wu-Tang-Clan-T-shirt-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1731431858",
        description: "Comfortable cotton T-shirt perfect for casual wear.",
        itemNum: "102391823"
    },
    {
        name: "Graphic Tee",
        category: "t-shirt",
        available: 15,
        price: 30,
        season: "Summer",
        image: "https://images.stockx.com/images/Nike-Kobe-Bryant-Broken-Not-Beaten-T-shirt-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1728304314",
        description: "Bold graphic designs for a trendy, casual look.",
        itemNum: "102391824"
    },

    // Sweaters
    {
        name: "Formal Shirt",
        category: "sweater",
        available: 3,
        price: 320,
        season: "Any",
        image: "https://images.stockx.com/images/vertical/Nike-X-Stussy-Knit-Sweater-Natural_1.jpg?fit=fill&bg=FFFFFF&w=396&h=504&q=60&dpr=1",
        description: "A cozy sweater for both formal and casual occasions.",
        itemNum: "1012322223"
    },
    {
        name: "Hooded Sweater",
        category: "sweater",
        available: 10,
        price: 90,
        season: "Winter",
        image: "https://images.stockx.com/images/Supreme-Snow-White-Sweater-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1728565994",
        description: "Soft and warm hoodie perfect for the cold winter days.",
        itemNum: "1012322224"
    },

    // Office Suits
    {
        name: "Formal Shirt",
        category: "office-suit",
        available: 3,
        price: 320,
        season: "Any",
        image: "https://images.stockx.com/images/Supreme-Brushed-Wool-Suit-Teal.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1729779591",
        description: "A sophisticated shirt for your office suit.",
        itemNum: "5"
    },
    {
        name: "Black Blazer",
        category: "office-suit",
        available: 10,
        price: 150,
        season: "Any",
        image: "https://images.stockx.com/images/Supreme-Brushed-Wool-Suit-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1729779570%201x,%20https://images.stockx.com/images/Supreme-Brushed-Wool-Suit-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=57&dpr=2&trim=color&updated_at=1729779570%202x,%20https://images.stockx.com/images/Supreme-Brushed-Wool-Suit-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=41&dpr=3&trim=color&updated_at=1729779570%203x",
        description: "A sleek black blazer to complement any office suit.",
        itemNum: "6"
    },

    // Underwear
    {
        name: "Boxer Briefs",
        category: "underwear",
        available: 15,
        price: 25,
        season: "Any",
        image: "https://images.stockx.com/images/OFF-WHITE-Single-Pack-Slip-Underwear-Black-Yellow-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1627945619",
        description: "Comfortable and stylish boxer briefs for all-day wear.",
        itemNum: "12345"
    },
    {
        name: "Not a Tank Top",
        category: "underwear",
        available: 10,
        price: 30,
        season: "Summer",
        image: "https://images.stockx.com/images/Telfar-x-UGG-Underwear-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1624889371",
        description: "Breathable tank top perfect for layering or lounging.",
        itemNum: "12346"
    },
    {
        name: "Lace Bralette",
        category: "underwear",
        available: 25,
        price: 20,
        season: "Any",
        image: "https://images.stockx.com/images/Telfar-x-UGG-Underwear-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1624889372",
        description: "Delicate lace bralette for everyday comfort and style.",
        itemNum: "12347"
    },
    {
        name: "Not a Sports Bra",
        category: "underwear",
        available: 20,
        price: 35,
        season: "Any",
        image: "https://images.stockx.com/images/Telfar-x-UGG-Underwear-Pink.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1637083079",
        description: "Supportive sports bra for active wear.",
        itemNum: "12348"
    },

    // Jeans
    {
        name: "Slim Fit Jeans",
        category: "jeans",
        available: 20,
        price: 70,
        season: "Any",
        image: "https://images.stockx.com/images/Denim-Tears-x-Levis-Cotton-Wreath-Jean-Black-Product.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1716218143",
        description: "Stylish slim fit jeans for casual wear.",
        itemNum: "201"
    },
    {
        name: "Bootcut Jeans",
        category: "jeans",
        available: 10,
        price: 90,
        season: "Any",
        image: "https://images.stockx.com/images/Chrome-Hearts-Green-Leopard-Cross-Patch-Jeans-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1673488944",
        description: "Classic bootcut jeans for a relaxed look.",
        itemNum: "202"
    },

    // Shoes
    {
        name: "Running Shoes",
        category: "shoes",
        available: 30,
        price: 120,
        season: "Any",
        image: "https://images.stockx.com/360/Puma-Suede-One-Piece-Blackbeard/Images/Puma-Suede-One-Piece-Blackbeard/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1712255491&h=384",
        description: "Comfortable and durable running shoes.",
        itemNum: "3001"
    },
    {
        name: "Leather Boots",
        category: "shoes",  
        available: 12,
        price: 150,
        season: "Winter",
        image: "https://images.stockx.com/360/Puma-Suede-One-Piece-Whitebeard/Images/Puma-Suede-One-Piece-Whitebeard/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1712259045&h=384",
        description: "Stylish leather boots for cold weather.",
        itemNum: "3002"
    },

    // Jackets
    {
        name: "Leather Jacket",
        category: "jackets",
        available: 8,
        price: 250,
        season: "Winter",
        image: "https://images.stockx.com/images/Supreme-The-North-Face-Nuptse-Jacket-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1729170639",
        description: "Classic leather jacket for a sleek, stylish look.",
        itemNum: "4001"
    },
    {
        name: "Bomber Jacket",
        category: "jackets",
        available: 15,
        price: 180,
        season: "Autumn",
        image: "https://images.stockx.com/images/Supreme-Mitchell-Ness-NCAA-Hooded-Stadium-Jacket-Woodland-Camo.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1730992227",
        description: "Trendy bomber jacket perfect for casual outings.",
        itemNum: "4002"
    },

    // Shorts
    {
        name: "Cargo Shorts",
        category: "shorts",
        available: 15,
        price: 45,
        season: "Summer",
        image: "https://images.stockx.com/images/Fear-of-God-Essentials-Sweatshort-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1686151916",
        description: "Stylish cargo shorts with plenty of pockets.",
        itemNum: "7001"
    },
    {
        name: "Denim Shorts",
        category: "shorts",
        available: 12,
        price: 40,
        season: "Summer",
        image: "https://images.stockx.com/images/Eric-Emanuel-EE-Basic-Short-Black-Skyline.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1650039316",
        description: "Classic denim shorts for a casual summer look.",
        itemNum: "7002"
    },
    
];

export default Data;
