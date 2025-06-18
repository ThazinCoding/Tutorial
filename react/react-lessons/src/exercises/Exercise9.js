"use client";
import styles from "./exercise.module.css";
import { useState } from "react";
export default function ProductList() {
    const [products, setProducts] = useState([{ id: 1, name: "phone", price: 3000 },
                                              { id: 2, name: "tablet", price: 5000 },
                                              { id: 3, name: "earphone", price: 800 },
    ]);
    const [newProductName, setNewProductName] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");
    const addProduct = () => {
        if (newProductName.trim() && parseFloat(newProductPrice) > 0 ){const newID=products.length>0? Math.max(...products.map(p => p.id)) + 1 : 1;
        const newProduct = { id: newID, name: newProductName, price: parseFloat(newProductPrice), };
        setProducts([...products, newProduct]);
        setNewProductName("");
        setNewProductPrice("");
    }else{
        alert("Please check your product! ");
    }


};
const removeProduct = (idToRemove) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== idToRemove));
};
return (
    <div className={styles.container}>
        <h1>My Products</h1>
        <div className={styles.addForm}>
            <input type="text"
                placeholder="product name"
                value={newProductName} onChange={(e) => setNewProductName(e.target.value)}
                className={styles.inputField} />
            <input type="number"
                placeholder="price"
                value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)}
                className={styles.inputField} />
            <button onClick={addProduct} className={styles.addButton}>Click</button>
        </div><br/>
        <ul className={styles.productList}>
            {products.length > 0 ? (products.map((product) => (
                <li key={product.id} className={styles.productItem}>
                    <span>{product.name}-${product.price.toFixed(2)}</span>
                    <button onClick={() => removeProduct(product.id)} className={styles.removeButton}>
                        remove
                    </button>

                </li>
            ))
            ) : (
        <li>No Product</li>
        )}
        </ul><br/>
    </div>
);
}
