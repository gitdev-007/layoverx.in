/**
 * STEP 2: OPTIONS - COMPLETE DATA INTEGRATION
 * Dynamically loads FULL data from all category pages
 * Based on user selections from explore_experiences.html
 */

// Complete data extraction from all category pages
const CATEGORY_DATA = {
    "Hotels": {
        source: "hotel.html",
        data: [
            { id: "hotel_1", category: "Hotels", title: "The Orchid Hotel, Mumbai", duration: "2 HR", price: "Rs 1200", rating: "4.8", ratingValue: 4.8, distance: "0.8 km from BOM", reviews: "482 Verified", popularity: 482, type: "Premium", priceValue: 1200, desc: "Asia's first eco-friendly certified hotel with close proximity to Mumbai Airport.", tags: ["Eco-Friendly", "Luxury", "Airport Proximity"], differentiators: ["Asia's first eco-friendly certified hotel", "Close proximity to Mumbai Airport (BOM)", "Sustainable luxury experience"], featured: true, image: "https://images.unsplash.com/photo-1566073771259-6aafc60441cf?w=400&h=300&fit=crop" },
            { id: "hotel_2", category: "Hotels", title: "Hotel Sahara Star, Mumbai", duration: "2 HR", price: "Rs 1400", rating: "4.7", ratingValue: 4.7, distance: "1.2 km from BOM", reviews: "438 Verified", popularity: 438, type: "Premium", priceValue: 1400, desc: "Iconic glass dome architecture with largest pillar-less convention space.", tags: ["Iconic Architecture", "Convention Space", "Airport Access"], differentiators: ["Iconic glass dome architecture", "Largest pillar-less convention space", "Direct airport access"], image: "https://images.unsplash.com/photo-1564013799939-068fc287560a?w=400&h=300&fit=crop" },
            { id: "hotel_3", category: "Hotels", title: "Taj Santacruz, Mumbai", duration: "2 HR", price: "Rs 1800", rating: "4.9", ratingValue: 4.9, distance: "2.4 km from BOM", reviews: "521 Verified", popularity: 521, type: "Premium", priceValue: 1800, desc: "Signature Taj luxury experience with spacious premium rooms.", tags: ["Taj Luxury", "Spacious Rooms", "Airport Connectivity"], differentiators: ["Signature Taj luxury experience", "Spacious premium rooms", "Excellent airport connectivity"], featured: true, image: "https://images.unsplash.com/photo-1571003123894-1f0594d23b02?w=400&h=300&fit=crop" },
            { id: "hotel_4", category: "Hotels", title: "JW Marriott Sahar, Mumbai", duration: "2 HR", price: "Rs 1700", rating: "4.8", ratingValue: 4.8, distance: "1.6 km from BOM", reviews: "467 Verified", popularity: 467, type: "Premium", priceValue: 1700, desc: "Ultra-luxury near airport with world-class spa and wellness.", tags: ["Ultra-Luxury", "Spa & Wellness", "Fine Dining"], differentiators: ["Ultra-luxury near airport", "World-class spa and wellness", "Fine dining and nightlife"], image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" },
            { id: "hotel_5", category: "Hotels", title: "ITC Maratha, Mumbai", duration: "2 HR", price: "Rs 1500", rating: "4.6", ratingValue: 4.6, distance: "2.1 km from BOM", reviews: "396 Verified", popularity: 396, type: "Premium", priceValue: 1500, desc: "Luxury hotel inspired by Maratha heritage with award-winning fine dining.", tags: ["Maratha Heritage", "Fine Dining", "Business Facilities"], differentiators: ["Luxury hotel inspired by Maratha heritage", "Award-winning fine dining", "High-end business and banquet facilities"], image: "https://images.unsplash.com/photo-1564501049412-61c2a3083761?w=400&h=300&fit=crop" },
            { id: "hotel_6", category: "Hotels", title: "The Leela Mumbai", duration: "2 HR", price: "Rs 1650", rating: "4.8", ratingValue: 4.8, distance: "1.9 km from BOM", reviews: "455 Verified", popularity: 455, type: "Premium", priceValue: 1650, desc: "Lush landscaped gardens with resort-like experience in the city.", tags: ["Gardens", "Resort Experience", "Luxury Hospitality"], differentiators: ["Lush landscaped gardens", "Resort-like experience in the city", "Premium luxury hospitality"], image: "https://images.unsplash.com/photo-1551886585-33d3b7653792?w=400&h=300&fit=crop" },
            { id: "hotel_7", category: "Hotels", title: "Aurika Mumbai", duration: "2 HR", price: "Rs 1450", rating: "4.5", ratingValue: 4.5, distance: "3.0 km from BOM", reviews: "289 Verified", popularity: 289, type: "Premium", priceValue: 1450, desc: "Modern luxury business hotel with premium design and interiors.", tags: ["Modern Luxury", "Business Hotel", "Premium Design"], differentiators: ["Modern luxury business hotel", "Premium design and interiors", "Close to key business districts"], image: "https://images.unsplash.com/photo-1566665797778-3f9a0c7c5b2c?w=400&h=300&fit=crop" },
            { id: "hotel_8", category: "Hotels", title: "Grand Hyatt Mumbai", duration: "2 HR", price: "Rs 1750", rating: "4.7", ratingValue: 4.7, distance: "6.1 km from BOM", reviews: "512 Verified", popularity: 512, type: "Premium", priceValue: 1750, desc: "Large multi-purpose complex with serviced apartments and extensive dining.", tags: ["Multi-Purpose", "Serviced Apartments", "Event Spaces"], differentiators: ["Large multi-purpose complex", "Serviced apartments available", "Extensive dining and event spaces"], image: "https://images.unsplash.com/photo-1571896349842-33c89424de5d?w=400&h=300&fit=crop" },
            { id: "hotel_9", category: "Hotels", title: "Hotel Bawa Intl.", duration: "2 HR", price: "Rs 900", rating: "4.2", ratingValue: 4.2, distance: "1.1 km from BOM", reviews: "214 Verified", popularity: 214, type: "Standard", priceValue: 900, desc: "Affordable comfort near airport with quick check-in for transit guests.", tags: ["Budget-Friendly", "Quick Check-in", "Transit Friendly"], differentiators: ["Affordable comfort near airport", "Quick check-in for transit guests", "Good value for money"], image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop" },
            { id: "hotel_10", category: "Hotels", title: "Hotel Midland", duration: "2 HR", price: "Rs 850", rating: "4.1", ratingValue: 4.1, distance: "2.8 km from BOM", reviews: "176 Verified", popularity: 176, type: "Standard", priceValue: 850, desc: "Budget-friendly stay with convenient airport access and functional rooms.", tags: ["Budget-Friendly", "Functional", "Convenient"], differentiators: ["Budget-friendly stay", "Convenient airport access", "Simple and functional rooms"], image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f4f4f?w=400&h=300&fit=crop" },
            { id: "hotel_11", category: "Hotels", title: "Lemon Tree Premier", duration: "2 HR", price: "Rs 1100", rating: "4.4", ratingValue: 4.4, distance: "3.4 km from BOM", reviews: "248 Verified", popularity: 248, type: "Standard", priceValue: 1100, desc: "Mid-range premium comfort with modern rooms and facilities.", tags: ["Mid-Range", "Modern Rooms", "Great Value"], differentiators: ["Mid-range premium comfort", "Modern rooms and facilities", "Great value business stay"], image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f4f4f?w=400&h=300&fit=crop" },
            { id: "hotel_12", category: "Hotels", title: "Holiday Inn Mumbai", duration: "2 HR", price: "Rs 1000", rating: "4.3", ratingValue: 4.3, distance: "4.2 km from BOM", reviews: "231 Verified", popularity: 231, type: "Standard", priceValue: 1000, desc: "Reliable international brand with business-friendly amenities.", tags: ["International Brand", "Business-Friendly", "Consistent Service"], differentiators: ["Reliable international brand", "Business-friendly amenities", "Consistent service quality"], image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f4f4f?w=400&h=300&fit=crop" }
        ]
    },
    "Food & Dining": {
        source: "restaurant.html",
        data: [
            { id: "rest_1", category: "Food & Dining", title: "Cafe Coffee Day", duration: "1 HR", price: "Rs 399", rating: "4.1", ratingValue: 4.1, distance: "0.3 km from BOM", travelTime: "4 min away", type: "Standard", avgPrice: "Rs 700 for 2", priceValue: 399, desc: "Quick bites inside airport, ideal for short layovers.", tags: ["Quick Bites", "Airport", "Affordable"], differentiators: ["Quick bites inside airport", "Ideal for short layovers", "Affordable beverage and snack combos"], cuisine: "Cafe", image: "https://images.unsplash.com/photo-1521019671266-b41714ee98d5?w=400&h=300&fit=crop" },
            { id: "rest_2", category: "Food & Dining", title: "Thai Naam", duration: "1.5 HR", price: "Rs 1199", rating: "4.6", ratingValue: 4.6, distance: "2.1 km from BOM", travelTime: "12 min away", type: "Premium", avgPrice: "Rs 2800 for 2", priceValue: 1199, desc: "Authentic Thai cuisine with award-winning signature curries.", tags: ["Thai Cuisine", "Award-Winning", "Elegant Dining"], differentiators: ["Authentic Thai cuisine", "Award-winning signature curries", "Elegant premium dining"], featured: true, cuisine: "Asian", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
            { id: "rest_3", category: "Food & Dining", title: "JW Cafe", duration: "2 HR", price: "Rs 1499", rating: "4.7", ratingValue: 4.7, distance: "1.8 km from BOM", travelTime: "10 min away", type: "Premium", avgPrice: "Rs 3200 for 2", priceValue: 1499, desc: "Large global buffet spread with luxury ambience and live counters.", tags: ["Buffet", "Live Counters", "Luxury Ambience"], differentiators: ["Large global buffet spread", "Long layover friendly", "Luxury ambience with live counters"], featured: true, cuisine: "Buffet", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f4f4f?w=400&h=300&fit=crop" },
            { id: "rest_4", category: "Food & Dining", title: "Peshawri", duration: "2 HR", price: "Rs 1599", rating: "4.8", ratingValue: 4.8, distance: "2.4 km from BOM", travelTime: "14 min away", type: "Premium", avgPrice: "Rs 3600 for 2", priceValue: 1599, desc: "Luxury kebab dining with iconic North-West Frontier cuisine.", tags: ["Kebab Dining", "North-West Frontier", "Heritage Service"], differentiators: ["Luxury kebab dining", "Iconic North-West Frontier cuisine", "Signature heritage service"], cuisine: "Indian", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop" },
            { id: "rest_5", category: "Food & Dining", title: "Dum Pukht", duration: "2 HR", price: "Rs 1499", rating: "4.7", ratingValue: 4.7, distance: "2.5 km from BOM", travelTime: "15 min away", type: "Premium", avgPrice: "Rs 3400 for 2", priceValue: 1499, desc: "Authentic Awadhi preparation with slow-cooked signature dishes.", tags: ["Awadhi", "Slow-Cooked", "Royal Dining"], differentiators: ["Authentic Awadhi preparation", "Slow-cooked signature dishes", "Refined royal dining ambience"], cuisine: "Indian", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop" },
            { id: "rest_6", category: "Food & Dining", title: "Bombay High", duration: "2 HR", price: "Rs 1099", rating: "4.5", ratingValue: 4.5, distance: "4.1 km from BOM", travelTime: "22 min away", type: "Premium", avgPrice: "Rs 3000 for 2", priceValue: 1099, desc: "Drinks and nightlife ambience with modern pan-Asian menu.", tags: ["Nightlife", "Pan-Asian", "Social Layovers"], differentiators: ["Drinks + nightlife ambience", "Modern pan-Asian menu", "Ideal for social layovers"], cuisine: "Asian", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop" },
            { id: "rest_7", category: "Food & Dining", title: "Tiqri", duration: "1.5 HR", price: "Rs 799", rating: "4.3", ratingValue: 4.3, distance: "1.9 km from BOM", travelTime: "11 min away", type: "Standard", avgPrice: "Rs 1800 for 2", priceValue: 799, desc: "Reliable regional Indian menu with balanced value and quality.", tags: ["Regional Indian", "Balanced Value", "Business-Friendly"], differentiators: ["Reliable regional Indian menu", "Balanced value and quality", "Business-meal friendly"], cuisine: "Indian", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop" },
            { id: "rest_8", category: "Food & Dining", title: "Boulevard", duration: "1.5 HR", price: "Rs 899", rating: "4.2", ratingValue: 4.2, distance: "2.2 km from BOM", travelTime: "13 min away", type: "Standard", avgPrice: "Rs 1900 for 2", priceValue: 899, desc: "All-day buffet service with transit-friendly timings.", tags: ["All-Day Buffet", "Transit-Friendly", "Multi-Cuisine"], differentiators: ["All-day buffet service", "Transit-friendly timings", "Multi-cuisine options"], cuisine: "Buffet", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f4f4f?w=400&h=300&fit=crop" },
            { id: "rest_9", category: "Food & Dining", title: "Mostly Grills", duration: "2 HR", price: "Rs 1399", rating: "4.6", ratingValue: 4.6, distance: "5.0 km from BOM", travelTime: "25 min away", type: "Premium", avgPrice: "Rs 3100 for 2", priceValue: 1399, desc: "Rooftop grill ambience with premium barbecue menu.", tags: ["Rooftop", "Grill", "Evening Layovers"], differentiators: ["Rooftop grill ambience", "Premium barbecue menu", "Great for evening layovers"], cuisine: "Buffet", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f4f4f?w=400&h=300&fit=crop" },
            { id: "rest_10", category: "Food & Dining", title: "South of Vindhyas", duration: "2 HR", price: "Rs 999", rating: "4.5", ratingValue: 4.5, distance: "2.0 km from BOM", travelTime: "12 min away", type: "Premium", avgPrice: "Rs 2600 for 2", priceValue: 999, desc: "Authentic South Indian classics with regional coastal specialties.", tags: ["South Indian", "Coastal Specialties", "Refined Dining"], differentiators: ["Authentic South Indian classics", "Regional coastal specialties", "Refined yet approachable dining"], cuisine: "Indian", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop" }
        ]
    },
    "Services": {
        source: "spa.html",
        data: [
            { id: "spa_1", category: "Services", title: "Jiva Spa - Taj Santacruz", duration: "1 HR", price: "Rs 3960", rating: "4.8", ratingValue: 4.8, distance: "1.6 km from BOM", travelTime: "6-18 min away", type: "Ayurvedic luxury spa", priceValue: 3960, desc: "Ayurvedic and Panchakarma luxury with signature Taj wellness rituals.", tags: ["Ayurvedic", "Luxury", "Taj Wellness"], differentiators: ["Ayurvedic + Panchakarma luxury", "Signature Taj wellness rituals", "Deep restorative therapies"], category: "Premium", featured: true, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
            { id: "spa_2", category: "Services", title: "Quan Spa - JW Marriott", duration: "1 HR", price: "Rs 4840", rating: "4.7", ratingValue: 4.7, distance: "1.8 km from BOM", travelTime: "8-20 min away", type: "Luxury hydrotherapy spa", priceValue: 4840, desc: "Hydrotherapy and deep tissue focus with premium spa suites.", tags: ["Hydrotherapy", "Deep Tissue", "Premium Suites"], differentiators: ["Hydrotherapy + deep tissue focus", "Premium spa suites", "Curated stress detox journeys"], category: "Premium", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
            { id: "spa_3", category: "Services", title: "The Spa - Leela Mumbai", duration: "1 HR", price: "Rs 4200", rating: "4.7", ratingValue: 4.7, distance: "1.9 km from BOM", travelTime: "8-22 min away", type: "Holistic wellness spa", priceValue: 4200, desc: "Holistic wellness philosophy with luxury ambience and calm gardens.", tags: ["Holistic", "Wellness", "Gardens"], differentiators: ["Holistic wellness philosophy", "Luxury ambience with calm gardens", "Balanced body-mind treatments"], category: "Premium", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
            { id: "spa_4", category: "Services", title: "Kerala Ayurveda Spa", duration: "1 HR", price: "Rs 1840", rating: "4.5", ratingValue: 4.5, distance: "4.6 km from BOM", travelTime: "14-28 min away", type: "Authentic Ayurvedic spa", priceValue: 1840, desc: "Authentic herbal therapy with traditional Ayurvedic oils.", tags: ["Authentic", "Herbal Therapy", "Detox"], differentiators: ["Authentic herbal therapy", "Traditional Ayurvedic oils", "Detox and rejuvenation focused"], category: "Standard", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
            { id: "spa_5", category: "Services", title: "Sawadhee Thai Spa", duration: "1 HR", price: "Rs 1840", rating: "4.4", ratingValue: 4.4, distance: "5.1 km from BOM", travelTime: "16-30 min away", type: "Traditional Thai healing spa", priceValue: 1840, desc: "Traditional Thai healing with stretch-based therapeutic sessions.", tags: ["Thai Healing", "Stretch Therapy", "Fast Rejuvenation"], differentiators: ["Traditional Thai healing", "Stretch-based therapeutic sessions", "Fast rejuvenation for transit travelers"], category: "Standard", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
            { id: "spa_6", category: "Services", title: "Four Fountains Spa", duration: "1 HR", price: "Rs 1490", rating: "4.3", ratingValue: 4.3, distance: "3.7 km from BOM", travelTime: "12-24 min away", type: "Express wellness spa", priceValue: 1490, desc: "Quick express services with urban stress relief concept.", tags: ["Express Services", "Urban Stress Relief", "Great Value"], differentiators: ["Quick express services", "Urban stress relief concept", "Great value therapy menu"], category: "Standard", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
            { id: "spa_7", category: "Services", title: "Myrah Spa", duration: "1 HR", price: "Rs 2600", rating: "4.4", ratingValue: 4.4, distance: "6.3 km from BOM", travelTime: "18-32 min away", type: "Urban luxury spa", priceValue: 2600, desc: "Boutique luxury setting with custom therapy combinations.", tags: ["Boutique Luxury", "Custom Therapy", "Modern Wellness"], differentiators: ["Boutique luxury setting", "Custom therapy combinations", "Modern wellness experience"], category: "Premium", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
            { id: "spa_8", category: "Services", title: "Heavenly Spa - Westin", duration: "1 HR", price: "Rs 5200", rating: "4.8", ratingValue: 4.8, distance: "8.4 km from BOM", travelTime: "22-38 min away", type: "Premium luxury spa", priceValue: 5200, desc: "Premium luxury rituals with high-end therapist expertise.", tags: ["Premium Luxury", "High-End Therapists", "Westin Standards"], differentiators: ["Premium luxury rituals", "High-end therapist expertise", "Signature Westin wellness standards"], category: "Premium", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
            { id: "spa_9", category: "Services", title: "Rewa Escape Spa", duration: "1 HR", price: "Rs 2200", rating: "4.4", ratingValue: 4.4, distance: "5.8 km from BOM", travelTime: "16-30 min away", type: "Couples wellness spa", priceValue: 2200, desc: "Couples spa specializations with relaxed private treatment rooms.", tags: ["Couples Spa", "Private Rooms", "Balanced Pricing"], differentiators: ["Couples spa specializations", "Relaxed private treatment rooms", "Balanced pricing for quick refresh"], category: "Standard", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" }
        ]
    },
    "Experiences": {
        source: "entertainment.html",
        data: [
            { id: "ent_1", category: "Experiences", title: "JUMPP Play Center", duration: "1 HR", price: "Rs 350", rating: "4.3", ratingValue: 4.3, distance: "3.6 km from BOM", travelTime: "15-25 min away", type: "Standard", priceValue: 350, desc: "Dedicated kids play zone with safe supervised indoor setup.", tags: ["Kids Play", "Safe", "Family Transit"], differentiators: ["Dedicated kids play zone", "Safe supervised indoor setup", "Great for family transit breaks"], image: "https://images.unsplash.com/photo-1578612299628-0dc33269c2b2?w=400&h=300&fit=crop" },
            { id: "ent_2", category: "Experiences", title: "KidZania Mumbai", duration: "2 HR", price: "Rs 920", rating: "4.7", ratingValue: 4.7, distance: "7.9 km from BOM", travelTime: "20-35 min away", type: "Premium", priceValue: 920, desc: "60+ roleplay professions in an immersive child-size city.", tags: ["Roleplay", "Educational", "Child-Sized City"], differentiators: ["60+ roleplay professions", "Immersive child-size city", "High educational entertainment value"], featured: true, image: "https://images.unsplash.com/photo-1578612299628-0dc33269c2b2?w=400&h=300&fit=crop" },
            { id: "ent_3", category: "Experiences", title: "Clue Hunt", duration: "1 HR", price: "Rs 900", rating: "4.6", ratingValue: 4.6, distance: "5.4 km from BOM", travelTime: "18-28 min away", type: "Premium", priceValue: 900, desc: "High-intensity puzzle missions with team collaboration focus.", tags: ["Escape Room", "Puzzle Missions", "Team Collaboration"], differentiators: ["High-intensity puzzle missions", "Team collaboration focused", "Time-bound immersive storytelling"], image: "https://images.unsplash.com/photo-1578612299628-0dc33269c2b2?w=400&h=300&fit=crop" },
            { id: "ent_4", category: "Experiences", title: "Timezone", duration: "1 HR", price: "Rs 460", rating: "4.4", ratingValue: 4.4, distance: "6.8 km from BOM", travelTime: "20-30 min away", type: "Standard", priceValue: 460, desc: "Arcade, bowling, and VR mix with flexible game card options.", tags: ["Arcade", "Bowling", "VR", "Flexible Options"], differentiators: ["Arcade + bowling + VR mix", "Great for quick group sessions", "Flexible game card options"], image: "https://images.unsplash.com/photo-1578612299628-0dc33269c2b2?w=400&h=300&fit=crop" },
            { id: "ent_5", category: "Experiences", title: "Shott Gaming", duration: "1 HR", price: "Rs 450", rating: "4.5", ratingValue: 4.5, distance: "6.2 km from BOM", travelTime: "18-28 min away", type: "Premium", priceValue: 450, desc: "Competitive gaming bays with modern e-sports infrastructure.", tags: ["Competitive Gaming", "E-Sports", "Tournaments"], differentiators: ["Competitive gaming bays", "Modern e-sports infrastructure", "Great for group tournaments"], image: "https://images.unsplash.com/photo-1578612299628-0dc33269c2b2?w=400&h=300&fit=crop" },
            { id: "ent_6", category: "Experiences", title: "Zero Latency India", duration: "1 HR", price: "Rs 700", rating: "4.7", ratingValue: 4.7, distance: "8.6 km from BOM", travelTime: "22-35 min away", type: "Premium", priceValue: 700, desc: "Free-roam multiplayer VR with immersive next-gen simulations.", tags: ["Free-Roam VR", "Multiplayer", "Next-Gen Simulations"], differentiators: ["Free-roam multiplayer VR", "Immersive next-gen simulations", "High-impact action experiences"], image: "https://images.unsplash.com/photo-1578612299628-0dc33269c2b2?w=400&h=300&fit=crop" },
            { id: "ent_7", category: "Experiences", title: "SMAAASH", duration: "1 HR", price: "Rs 499", rating: "4.5", ratingValue: 4.5, distance: "7.1 km from BOM", travelTime: "20-32 min away", type: "Premium", priceValue: 499, desc: "Sports simulators and arcade with bowling and cricket simulators.", tags: ["Sports Simulators", "Arcade", "Mixed-Age Groups"], differentiators: ["Sports + simulator hybrid", "Bowling and cricket simulators", "Best for mixed-age groups"], image: "https://images.unsplash.com/photo-1578612299628-0dc33269c2b2?w=400&h=300&fit=crop" },
            { id: "ent_8", category: "Experiences", title: "Snow Kingdom", duration: "1 HR", price: "Rs 399", rating: "4.4", ratingValue: 4.4, distance: "9.2 km from BOM", travelTime: "25-40 min away", type: "Standard", priceValue: 399, desc: "Unique indoor snow experience with family-friendly weather escape.", tags: ["Indoor Snow", "Family-Friendly", "Weather Escape"], differentiators: ["Unique indoor snow experience", "Family-friendly weather escape", "Photo-friendly themed zones"], image: "https://images.unsplash.com/photo-1578612299628-0dc33269c2b2?w=400&h=300&fit=crop" }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const categoryBar = document.getElementById("categoryBar");
    const featuredGrid = document.getElementById("featuredGrid");
    const optionsGrid = document.getElementById("optionsGrid");
    const recommendedSection = document.getElementById("recommendedSection");
    const selectionStatus = document.getElementById("selectionStatus");
    const nextToPriorityBtn = document.getElementById("nextToPriorityBtn");
    const resultCount = document.getElementById("resultCount");

    // Get selected categories from explore_experiences.html
    const selectedServices = JSON.parse(localStorage.getItem('selectedServices') || '[]');
    let currentCategory = selectedServices[0] || "";
    
    // Persistent state for ALL categories
    const savedOptions = JSON.parse(localStorage.getItem('selectedOptions') || '[]');
    const selectedOptionsMap = new Map(savedOptions.map(o => [o.id, o]));

    // 1. Initialize Step Navigation
    if (window.initStepNavigation) window.initStepNavigation(2);

    // 2. Filter categories based on user selection
    function getAvailableCategories() {
        return Object.keys(CATEGORY_DATA).filter(category => 
            selectedServices.includes(category)
        );
    }

    // 3. Render Categories (only selected ones)
    function renderCategoryBar() {
        const availableCategories = getAvailableCategories();
        
        if (availableCategories.length === 0) {
            categoryBar.innerHTML = '<p class="text-zinc-500 text-sm">No categories selected. Please go back and select categories.</p>';
            return;
        }

        categoryBar.innerHTML = availableCategories.map(service => `
            <button class="px-8 py-3 rounded-full transition-all font-headline-md text-sm ${service === currentCategory ? 'bg-orange-500 text-black font-bold shadow-[0_0_20px_rgba(255,140,0,0.4)]' : 'glass-dark text-zinc-300 font-medium hover:border-orange-500/50'}" 
                    data-category="${service}">
                ${service}
            </button>
        `).join('');

        categoryBar.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-category]");
            if (!btn) return;
            currentCategory = btn.getAttribute("data-category");
            renderCategoryBar(); // Re-render for active state
            renderActiveCategory();
        });
    }

    // 4. Get "Most Recommended" item for a category
    function getMostRecommended(categoryData) {
        // First try featured items
        const featured = categoryData.filter(item => item.featured);
        if (featured.length > 0) {
            return featured[0]; // Return first featured item
        }
        
        // If no featured, prefer premium/high-rated items
        const premium = categoryData.filter(item => 
            item.type === 'Premium' || 
            item.category === 'Premium' || 
            (item.ratingValue && item.ratingValue >= 4.7)
        );
        
        if (premium.length > 0) {
            return premium[0];
        }
        
        // Fallback to first item
        return categoryData[0];
    }

    // 5. Render active category with full data
    function renderActiveCategory() {
        const categoryData = CATEGORY_DATA[currentCategory];
        if (!categoryData) {
            optionsGrid.innerHTML = '<p class="text-zinc-500 text-center col-span-full">No data available for this category.</p>';
            recommendedSection.classList.add("hidden");
            return;
        }

        const allItems = categoryData.data;
        const recommendedItem = getMostRecommended(allItems);
        const otherItems = allItems.filter(item => item.id !== recommendedItem.id);

        // Recommended Section
        if (recommendedItem) {
            recommendedSection.classList.remove("hidden");
            featuredGrid.innerHTML = `
                <!-- Hero Featured -->
                <div class="md:col-span-8 group relative overflow-hidden rounded-xl h-[300px] md:h-full">
                    <img src="${recommendedItem.image}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-500 text-[10px] uppercase font-bold tracking-widest">Most Recommended</span>
                            <div class="flex items-center text-orange-400 text-xs font-bold">
                                <span class="material-symbols-outlined text-sm mr-1" style="font-variation-settings: 'FILL' 1;">star</span> ${recommendedItem.rating}
                            </div>
                        </div>
                        <h3 class="font-display-lg text-white mb-2 text-2xl md:text-3xl">${recommendedItem.title}</h3>
                        <p class="text-zinc-300 text-sm max-w-lg mb-4 line-clamp-2">${recommendedItem.desc}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-white font-bold text-xl">${recommendedItem.price} <span class="text-xs font-normal text-zinc-400">/ ${recommendedItem.duration}</span></span>
                            <button class="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-orange-500 transition-colors select-opt-btn" data-id="${recommendedItem.id}">
                                ${selectedOptionsMap.has(recommendedItem.id) ? 'Deselect' : 'Select Now'}
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Secondary Featured (next best item) -->
                ${otherItems.length > 0 ? `
                <div class="md:col-span-4 group relative overflow-hidden rounded-xl h-[200px] md:h-full">
                    <img src="${otherItems[0].image}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-6">
                        <h3 class="font-headline-md text-white mb-2">${otherItems[0].title}</h3>
                        <div class="flex items-center text-zinc-400 text-xs mb-4">
                            <span class="material-symbols-outlined text-sm mr-1">location_on</span> ${otherItems[0].distance || 'Near Airport'}
                        </div>
                        <div class="flex justify-between items-center gap-4">
                             <span class="text-white font-bold text-lg">${otherItems[0].price}</span>
                             <button class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-500 hover:text-black transition-colors select-opt-btn" data-id="${otherItems[0].id}">
                                ${selectedOptionsMap.has(otherItems[0].id) ? 'Deselect' : 'Select'}
                             </button>
                        </div>
                    </div>
                </div>
                ` : ''}
            `;
        } else {
            recommendedSection.classList.add("hidden");
        }

        // Regular Grid (all other items)
        const gridItems = recommendedItem ? 
            otherItems.slice(1) : // Skip the secondary featured too
            allItems;
            
        optionsGrid.innerHTML = gridItems.map(opt => {
            const isSelected = selectedOptionsMap.has(opt.id);
            return `
            <div class="glass-dark rounded-xl overflow-hidden inner-glow transition-all duration-300 group border ${isSelected ? 'border-orange-500/50 ring-1 ring-orange-500/50' : 'border-transparent'}" data-option-id="${opt.id}">
                <div class="relative h-48">
                    <img src="${opt.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute top-4 right-4 px-2 py-1 ${isSelected ? 'bg-orange-500 text-black' : 'bg-black/60 text-white'} backdrop-blur-md rounded text-xs font-bold">
                        ${opt.price}
                    </div>
                    ${isSelected ? `
                    <div class="absolute inset-0 bg-orange-500/10 backdrop-blur-[1px]"></div>
                    <div class="absolute top-4 left-4">
                        <span class="material-symbols-outlined bg-orange-500 text-black rounded-full p-1 text-xs" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                    </div>` : ''}
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-headline-md text-lg text-white">${opt.title}</h4>
                        <div class="flex items-center text-orange-500 text-xs font-bold">
                            <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span> ${opt.rating}
                        </div>
                    </div>
                    <p class="text-zinc-500 text-sm mb-4 line-clamp-2">${opt.desc}</p>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${(opt.tags || []).map(tag => `<span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-tighter">${tag}</span>`).join('')}
                        ${opt.type ? `<span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-tighter">${opt.type}</span>` : ''}
                        ${opt.cuisine ? `<span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-tighter">${opt.cuisine}</span>` : ''}
                    </div>
                    <button class="w-full py-3 rounded-lg border ${isSelected ? 'bg-orange-500 text-black font-bold border-orange-500 shadow-[0_0_15px_rgba(255,140,0,0.3)]' : 'border-zinc-800 text-white font-bold hover:border-orange-500 hover:text-orange-500'} text-sm transition-all active:scale-[0.98] select-opt-btn" data-id="${opt.id}">
                        ${isSelected ? 'Deselect' : 'Select'}
                    </button>
                </div>
            </div>
            `;
        }).join('');

        resultCount.textContent = `Showing ${allItems.length} results`;
    }

    // 6. Event delegation for both Featured and Grid
    document.body.addEventListener("click", (e) => {
        const btn = e.target.closest(".select-opt-btn");
        if (!btn) return;

        const id = btn.getAttribute("data-id");
        
        if (selectedOptionsMap.has(id)) {
            selectedOptionsMap.delete(id);
        } else {
            // Find the object across all categories
            let found = null;
            Object.values(CATEGORY_DATA).forEach(category => {
                const item = category.data.find(o => o.id === id);
                if (item) found = item;
            });
            if (found) selectedOptionsMap.set(id, found);
        }

        saveState();
        renderActiveCategory(); // Refresh UI
        updateFooterStatus();
    });

    // 7. Save state to localStorage
    function saveState() {
        const selectedArray = Array.from(selectedOptionsMap.values());
        localStorage.setItem("selectedOptions", JSON.stringify(selectedArray));
        if (window.initStepNavigation) window.initStepNavigation(2);
    }

    // 8. Update footer status
    function updateFooterStatus() {
        const count = selectedOptionsMap.size;
        selectionStatus.textContent = `${count} option${count === 1 ? '' : 's'} selected`;
        nextToPriorityBtn.disabled = count === 0;
    }

    // 9. Navigation to next step
    nextToPriorityBtn.addEventListener("click", () => {
        window.handleStepNavigation("priority.html");
    });

    // 10. Initialize the page
    function initializePage() {
        renderCategoryBar();
        if (getAvailableCategories().length > 0) {
            renderActiveCategory();
        }
        updateFooterStatus();
    }

    initializePage();
});
