import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import {
  FaUsers,
  FaMoneyBillWave,
  FaClipboardList,
  FaDollarSign,
  FaCheckCircle,
  FaTimesCircle,
  FaFileAlt,
  FaVideo,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import MyChart from "../../components/CanvasHandiler";
import SubscriptionStats from "../../components/SubscriptionStats";
import "./Dashboard.css"
const Dashboard = ({ props }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Generate dynamic numbers on load
    const generateStats = [
      {
        title: "Total Users",
        value: Math.floor(Math.random() * 5000) + 1000,
        icon: <FaUsers />,
        bg: "#000000", // Solid black
        color: "#FFFFFF", // White text
      },
      {
        title: "Total Revenue",
        value: `${(Math.random() * 50000 + 5000).toFixed(2)}`,
        icon: <FaMoneyBillWave />,
        bg: "#FFFFFF", // Solid white
        color: "#000000", // Black text
      },
      {
        title: "New Subscriptions",
        value: Math.floor(Math.random() * 500) + 50,
        icon: <FaClipboardList />,
        bg: "#000000", // Solid black
        color: "#FFFFFF", // White text
      },
      {
        title: "Active Users",
        value: Math.floor(Math.random() * 3000) + 500,
        icon: <FaCheckCircle />,
        bg: "#FFFFFF", // Solid white
        color: "#000000", // Black text
      },
      {
        title: "Inactive Users",
        value: Math.floor(Math.random() * 1000) + 200,
        icon: <FaTimesCircle />,
        bg: "#000000", // Solid black
        color: "#FFFFFF", // White text
      },
      {
        title: "Paid Subscribers",
        value: Math.floor(Math.random() * 4000) + 500,
        icon: <FaDollarSign />,
        bg: "#FFFFFF", // Solid white
        color: "#000000", // Black text
      },
      {
        title: "Unpaid Subscribers",
        value: Math.floor(Math.random() * 1000) + 100,
        icon: <FaClipboardList />,
        bg: "#000000", // Solid black
        color: "#FFFFFF", // White text
      },
      {
        title: "Published Articles",
        value: Math.floor(Math.random() * 1000) + 100,
        icon: <FaFileAlt />,
        bg: "#FFFFFF", // Solid white
        color: "#000000", // Black text
      },
      {
        title: "Published Videos",
        value: Math.floor(Math.random() * 500) + 50,
        icon: <FaVideo />,
        bg: "#000000", // Solid black
        color: "#FFFFFF", // White text
      },
    ];
    
    
    
    setStats(generateStats);
  }, []);

  // const transactions = [
  //   { id: 1, user: "John Doe", amount: "$50", status: "Completed" },
  //   { id: 2, user: "Jane Smith", amount: "$30", status: "Pending" },
  //   { id: 3, user: "Alice Brown", amount: "$100", status: "Failed" },
  //   { id: 4, user: "Bob Johnson", amount: "$75", status: "Completed" },
  // ];

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "User Growth",
        data: [1000, 2000, 1500, 3000, 3500, 4000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="mb-4 text-dark text-center fs-1 mt-5 mb-5 ">Welcome, <span className="text-primary">{props.name}</span></h2>

      {/* Dashboard Stats */}
      <div className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-md-evenly">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="cardsdata p-3 border-0 text-capitalize my-3"
            style={{
              width: "18rem",
              // background: stat.bg,
              borderRadius: "12px",
              // color: stat.color,
            }}
          >
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title>{stat.title}</Card.Title>
                <Card.Text className="fs-3 ">{stat.value}</Card.Text>
              </div>
              <div className="fs-2">{stat.icon}</div>
            </Card.Body>
          </Card>
        ))}
      </div>
      {/* Recent Transactions */}
      <Card className="border-0 mt-4 ">
        <Card.Body>
          <SubscriptionStats/>
        </Card.Body>
      </Card>

      {/* Traffic Chart */}
          <h5 className="text-center fs-2 mt-3 mb-3 text-primary">Traffic Overview</h5>
      <Card className="mt-4  border-0">
        
        <Card.Body >
          <div style={{ height: "300px", width: "100%" }}>
            {/* <Line data={chartData} options={{ maintainAspectRatio: false }} /> */}
            <MyChart data={chartData} options={{ maintainAspectRatio: false }}/>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
