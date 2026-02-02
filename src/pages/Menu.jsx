import MenuHero from "../components/Menu/MenuHero";
import MenuCategory from "../components/Menu/MenuCategory";
import MenuCTA from "../components/Menu/MenuCTA";

/* ✅ WORKING IMAGE POOL (reuse safely) */
const images = [
  "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
  "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
  "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg",
  "https://images.pexels.com/photos/374349/pexels-photo-374349.jpeg",
];

const Menu = () => {
  const appetizers = [
    {
      name: "Seared Salmon Bites",
      description: "Lightly seared salmon with herb oil",
      price: 18,
      image: images[0],
    },
    {
      name: "Gourmet Bruschetta",
      description: "Toasted bread with fresh tomato & basil",
      price: 12,
      image: images[3],
    },
    {
      name: "Duck Confit Starter",
      description: "Slow-cooked duck with cherry glaze",
      price: 20,
      image: images[3],
    },
    {
      name: "Classic Steak Tartare",
      description: "Finely chopped beef with mustard & capers",
      price: 22,
      image: images[1],
    },
    {
      name: "Sea Bass Salad",
      description: "Grilled sea bass with seasonal greens",
      price: 16,
      image: images[2],
    },
    {
      name: "Chef’s Tasting Plate",
      description: "Selection of chef-curated small bites",
      price: 24,
      image: images[2],
    },
  ];

  const mainCourses = [
    {
      name: "Pan-Seared Salmon",
      description: "Herb-crusted salmon with seasonal vegetables",
      price: 48,
      image: images[0],
    },
    {
      name: "Ribeye Steak",
      description: "Juicy ribeye with garlic butter sauce",
      price: 58,
      image: images[1],
    },
    {
      name: "Lobster Tail",
      description: "Butter-poached lobster with lemon zest",
      price: 68,
      image: images[2],
    },
    {
      name: "Duck Confit",
      description: "Slow-roasted duck with cherry gastrique",
      price: 52,
      image: images[3],
    },
    {
      name: "Filet Mignon",
      description: "Tender beef filet with red wine jus",
      price: 62,
      image: images[1],
    },
    {
      name: "Sea Bass Fillet",
      description: "Grilled sea bass with citrus herbs",
      price: 54,
      image: images[2],
    },
  ];

  const desserts = [
    {
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla cream",
      price: 14,
      image: images[1],
    },
    {
      name: "Classic Tiramisu",
      description: "Espresso-soaked layers with mascarpone",
      price: 12,
      image: images[2],
    },
    {
      name: "Berry Cheesecake",
      description: "Creamy cheesecake with seasonal berries",
      price: 15,
      image: images[3],
    },
    {
      name: "Crème Brûlée",
      description: "Vanilla custard with caramelized sugar",
      price: 13,
      image: images[2],
    },
    {
      name: "Chocolate Lava Cake",
      description: "Rich molten chocolate center",
      price: 14,
      image: images[1],
    },
    {
      name: "Chef’s Dessert Selection",
      description: "Assorted mini desserts",
      price: 18,
      image: images[3],
    },
  ];

  const beverages = [
    {
      name: "Vintage Red Wine",
      description: "Full-bodied wine with dark fruit notes",
      price: 120,
      image: images[1],
    },
    {
      name: "Champagne Brut",
      description: "Crisp champagne with fine bubbles",
      price: 85,
      image: images[1],
    },
    {
      name: "Espresso Martini",
      description: "Vodka, espresso & coffee liqueur",
      price: 16,
      image: images[2],
    },
    {
      name: "French 75",
      description: "Gin, lemon & champagne",
      price: 14,
      image: images[3],
    },
    {
      name: "Italian Espresso",
      description: "Rich single-origin espresso",
      price: 6,
      image: images[1],
    },
    {
      name: "Signature Tea",
      description: "Curated premium loose-leaf teas",
      price: 8,
      image: images[2],
    },
  ];

  return (
    <div className="min-h-screen">
      <MenuHero />

      <MenuCategory
        title="Appetizers"
        description="Begin your dining experience with refined starters"
        items={appetizers}
      />

      <MenuCategory
        title="Main Courses"
        description="Signature dishes crafted with premium ingredients"
        items={mainCourses}
      />

      <MenuCategory
        title="Desserts"
        description="Elegant desserts to complete your meal"
        items={desserts}
      />

      <MenuCategory
        title="Beverages"
        description="Fine wines, cocktails, and handcrafted beverages"
        items={beverages}
      />

      <MenuCTA />
    </div>
  );
};

export default Menu;
