import { useState } from "react";
import "./Purchase.css";

export const demo = [
    {
        id: 1,
        title: "React Course",
        description: "Learn React from scratch with hands-on projects.",
        image: "https://via.placeholder.com/150", 
    },
    {
        id: 2,
        title: "JavaScript Course",
        description: "Master JavaScript and become a frontend expert.",
        image: "https://via.placeholder.com/150",
    },
];

export const Purchase = () => {
    const [data, setData] = useState(null);

    const clickHandler1 = () => {
        setData(demo.length ? demo : [{ title: "You don't have any course purchases" }]);
    };

    const clickHandler2 = () => {
        setData([{ title: "You don't have any transactions for a subscription plan" }]);
    };

    const clickHandler3 = () => {
        setData([{ title: "You don't have any pending or completed refunds" }]);
    };

    return (
        <div className="purchase-container mt-5"><br />
            <h2 className="purchase-title">Purchase History</h2>
            <div className="purchase-menu">
                <h4 className="purchase-option" onClick={clickHandler1}>Courses</h4>
                <h4 className="purchase-option" onClick={clickHandler2}>Subscriptions</h4>
                <h4 className="purchase-option" onClick={clickHandler3}>Refunds</h4>
            </div>

            <div className="purchase-content">
                <i className="fa-solid fa-cart-shopping purchase-icon"></i>
                {data &&
                    data.map((item, index) => (
                        <div key={index} className="purchase-item">
                            {/* {item.image && <img src={item.image} alt={item.title} className="purchase-image" />} */}
                            <h3 className="purchase-item-title">{item.title}</h3>
                            {item.description && <p className="purchase-item-description">{item.description}</p>}
                        </div>
                    ))}
            </div>
        </div>
    );
}  
