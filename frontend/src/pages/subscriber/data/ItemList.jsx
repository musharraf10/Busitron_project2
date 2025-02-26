  
import React from "react";
import ItemCard from "../components/ItemCard";

const items = [
  {
    id: 1,
    title: "Understanding AI",
    body: "A detailed guide on artificial intelligence and its applications.",
    type: "article",
    author_id: 101,
    publish_date: "2025-02-21",
    tags: ["tech", "AI"],
    status: "published",
    price: 10,
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    body: "An introductory video on JavaScript basics.",
    type: "video",
    author_id: 102,
    publish_date: "2025-02-20",
    tags: ["coding", "JavaScript"],
    status: "draft",
    price: 20,
  },
  {
    id: 3,
    title: "React Beginner's Guide",
    body: "A step-by-step guide to getting started with React.",
    type: "guide",
    author_id: 103,
    publish_date: "2025-02-19",
    tags: ["web dev", "React"],
    status: "published",
    price: 30,
  },
];

export const ItemList = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Available Items</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
