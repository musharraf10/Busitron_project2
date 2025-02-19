import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import {
  FaUsers,
  FaMoneyBillWave,
  FaClipboardList,
  FaDollarSign,
} from "react-icons/fa";

const Dashboard = ({ props }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Generate dynamic numbers on load
    const generateStats = [
      {
        title: "Total Users",
        value: Math.floor(Math.random() * 5000) + 1000,
        icon: <FaUsers />,
        bg: "linear-gradient(45deg, #2196F3, #00BCD4)",
      },
      {
        title: "Total Revenue",
        value: `$${(Math.random() * 50000 + 5000).toFixed(2)}`,
        icon: <FaMoneyBillWave />,
        bg: "linear-gradient(45deg, #4CAF50, #8BC34A)",
      },
      {
        title: "New Subscriptions",
        value: Math.floor(Math.random() * 500) + 50,
        icon: <FaClipboardList />,
        bg: "linear-gradient(45deg, #FFC107, #FF9800)",
      },
      {
        title: "Pending Approvals",
        value: Math.floor(Math.random() * 50) + 5,
        icon: <FaDollarSign />,
        bg: "linear-gradient(45deg, #F44336, #E91E63)",
      },
    ];
    setStats(generateStats);
  }, []);

  const transactions = [
    { id: 1, user: "John Doe", amount: "$50", status: "Completed" },
    { id: 2, user: "Jane Smith", amount: "$30", status: "Pending" },
    { id: 3, user: "Alice Brown", amount: "$100", status: "Failed" },
    { id: 4, user: "Bob Johnson", amount: "$75", status: "Completed" },
  ];

  return (
    <div>
      <h2 className="mb-4 text-dark">Welcome, {props.name}</h2>

      {/* Dashboard Stats */}
      <div className="d-flex gap-3 flex-wrap">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="text-white p-3 shadow"
            style={{
              width: "18rem",
              background: stat.bg,
              borderRadius: "12px",
              color: "#fff",
            }}
          >
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title>{stat.title}</Card.Title>
                <Card.Text className="fs-3 fw-bold">{stat.value}</Card.Text>
              </div>
              <div className="fs-1">{stat.icon}</div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Recent Transactions */}
      <Card className="mt-4 shadow">
        <Card.Header className="bg-primary text-white">
          <h5>Recent Transactions</h5>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.id}</td>
                  <td>{tx.user}</td>
                  <td>{tx.amount}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        tx.status === "Completed"
                          ? "success"
                          : tx.status === "Pending"
                          ? "warning"
                          : "danger"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
