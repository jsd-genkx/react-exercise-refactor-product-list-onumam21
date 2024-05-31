import React, { useState } from 'react';

function ProductSection(props) {
  // สร้าง state สำหรับ name, price, และ image
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // ฟังก์ชัน handleSubmit สำหรับจัดการการส่งฟอร์ม
  function handleSubmit(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บเมื่อฟอร์มถูกส่ง

    // สร้างอ็อบเจ็กต์สินค้าใหม่จากค่า state
    const newProduct = {
      name: name,
      price: parseFloat(price), // แปลง price จากสตริงเป็นตัวเลขทศนิยม
      image: image,
    };

    // เรียกใช้ฟังก์ชัน addProduct ที่ได้รับจาก props
    props.addProduct(newProduct);

    // รีเซ็ตค่า state เพื่อเคลียร์ฟอร์ม
    setName("");
    setPrice("");
    setImage("");
  }

  // การแสดงผลฟอร์ม
  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        required
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Product Image URL"
        required
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
}

export default ProductSection;