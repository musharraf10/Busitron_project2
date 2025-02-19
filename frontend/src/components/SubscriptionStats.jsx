import React, { useState } from "react";
import { Card, Button, Dropdown, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Sample data for users and transactions
const usersData = [
  { id: 1, name: "John Doe", status: "active" },
  { id: 2, name: "Jane Smith", status: "expired" },
  { id: 3, name: "Alice Brown", status: "active" },
  { id: 4, name: "Bob Johnson", status: "upcoming" },
];

const transactionsData = [
  { id: 1, user: "John Doe", amount: "$50", status: "Completed", date: "2025-02-19" },
  { id: 2, user: "Jane Smith", amount: "$30", status: "Pending", date: "2025-02-19" },
  { id: 3, user: "Alice", amount: "$40", status: "Completed", date: "2025-02-10" },
];

const SubscriptionStats = () => {
  const [filter, setFilter] = useState("totalUsers");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredUsers = () => {
    switch (filter) {
      case "newSubscriptions":
        return usersData.filter((user) => user.status === "active");
      case "expiredSubscriptions":
        return usersData.filter((user) => user.status === "expired");
      case "upcomingExpirations":
        return usersData.filter((user) => user.status === "upcoming");
      default:
        return usersData;
    }
  };

  const filteredTransactions = () => {
    return transactionsData.filter(
      (tx) => tx.date === selectedDate.toISOString().split("T")[0]
    );
  };

  return (
    <div>
      <Card className="mt-4 shadow">
        <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
          <h5>Subscription Stats</h5>
          {/* Filter Button */}
          <Dropdown>
            <Dropdown.Toggle variant="light" className="text-dark">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFilterChange("totalUsers")}>
                Total Users
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange("newSubscriptions")}>
                New Subscriptions
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange("expiredSubscriptions")}>
                Expired Subscriptions
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange("upcomingExpirations")}>
                Upcoming Expirations (Next 10 Days)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>

        <Card.Body>
          {/* Date Picker */}
          <Form.Group controlId="datePicker">
            <Form.Label>Select Date:</Form.Label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
            />
          </Form.Group>

          {/* Display Filtered Data */}
          <div className="mt-3">
            <h4>
              {filter === "totalUsers" ? "Total Users" : filter === "newSubscriptions" ? "New Subscriptions" : filter === "expiredSubscriptions" ? "Expired Subscriptions" : "Upcoming Expirations"}
            </h4>

            {/* Display Users who belong to the selected category */}
            <h5>Users:</h5>
            <ul>
              {filteredUsers().map((user) => (
                <li key={user.id}>{user.name} - {user.status}</li>
              ))}
            </ul>

            {/* Display Transactions for the selected day */}
            <h5>Transactions for {selectedDate.toISOString().split("T")[0]}:</h5>
            <ul>
              {filteredTransactions().map((tx) => (
                <li key={tx.id}>
                  {tx.user} - {tx.amount} - {tx.status}
                </li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubscriptionStats;
