import { useState } from 'react';

function ProductSection({addProduct}){
    const [name, setName] = useState ("");
    const [price, setPrice] = useState ("");
    const [image, setImage] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            name,
            price: parseFloat(price),
            image,
        };
        addProduct(newProduct);
        setName("");
        setPrice("");
        setImage("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-10">
            <input
            type="text"
            value={name}
            onChange={(e)} => setName(e.target.value)}
            placeholder="Product Price"
            required
            className="border p-2 round w-full mb-2"
            />
            
            <input
            type="text"
            value={image}


    )

}