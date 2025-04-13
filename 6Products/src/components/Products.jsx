import React from "react";
import "./products.css";
import { useState } from "react";
import { Toaster, toast } from "sonner";

function Products() {
  const [cart, setCart] = useState(0);

  const productData = [
    {
      id: 1,
      title: "Nike Shoe",
      description: "color: red",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Water bottle",
      description: "color: Olive green",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Ray Ban sun glasses",
      description: "color: black",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Smart Watch",
      description: "color: black",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Head Phone",
      description: "color: gray",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Bag pack",
      description: "color: olive green",
      image:
        "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Airbeds",
      description: "color: white",
      image:
        "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "T-shirt",
      description: "color: white",
      image:
        "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      title: "Bicycle",
      description: "color: black",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      title: "Mug",
      description: "color: white",
      image:
        "https://plus.unsplash.com/premium_photo-1719289799337-9cb436447965?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      title: "Bag pack",
      description: "color: navy blue",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      title: "Shoes",
      description: "color: maroon",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleBuyBtn = (product) => {
    const quantity = cart[product.id] || 0;
    if (quantity > 0) {
      toast.success(
        `Your order for ${product.title} is confirmed. Quantity: ${quantity}`
      );
    } else {
      toast.warning(`You have to select product more than ${quantity}`);
    }
  };

  const increaseCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="products_container">
        {productData.map((product) => (
          <div className="product_card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product_image"
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>

            <div className="cart">
              <button onClick={() => decreaseCart(product.id)}>-</button>
              <p>{cart[product.id] || 0}</p>
              <button onClick={() => increaseCart(product.id)}>+</button>
            </div>

            <div className="buy">
              <button onClick={() => handleBuyBtn(product)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
