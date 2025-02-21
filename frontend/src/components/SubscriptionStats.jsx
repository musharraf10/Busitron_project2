import React, { useState } from "react";
import { Card, Dropdown, Form, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const usersData = [
    { id: 1, name: "John Doe", status: "active", role: "Admin" },
    { id: 2, name: "Jane Smith", status: "expired", role: "Creator" },
    { id: 3, name: "Alice Brown", status: "active", role: "Subscriber" },
    { id: 4, name: "Bob Johnson", status: "upcoming", role: "Moderator" },
];

const transactionsData = [
    { id: 1, user: "John Doe", amount: "$50", status: "Completed", date: "2025-02-19" },
    { id: 2, user: "Jane Smith", amount: "$30", status: "Pending", date: "2025-02-19" },
    { id: 3, user: "Alice Brown", amount: "$40", status: "Completed", date: "2025-02-10" },
    { id: 4, user: "Bob Johnson", amount: "$25", status: "Pending", date: "2025-02-20" },
];

const SubscriptionStats = () => {
    const [filter, setFilter] = useState("totalUsers");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    const filteredUsers = () => {
        let filtered = usersData;
        if (filter === "newSubscriptions") {
            filtered = usersData.filter((user) => user.status === "active");
        } else if (filter === "expiredSubscriptions") {
            filtered = usersData.filter((user) => user.status === "expired");
        } else if (filter === "upcomingExpirations") {
            filtered = usersData.filter((user) => user.status === "upcoming");
        }
        return filtered.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filteredTransactions = () => {
        return selectedDate
            ? transactionsData.filter((tx) => tx.date === selectedDate)
            : transactionsData;
    };

    const totalAmount = filteredTransactions().reduce((sum, tx) => {
        return sum + parseFloat(tx.amount.replace("$", ""));
    }, 0);

    const totalPendingWork = filteredTransactions().filter(tx => tx.status === "Pending").length;

    return (
        <Container fluid className="d-flex justify-content-center align-items-center flex-column">
            <Card className="mt-4 shadow-lg p-4 rounded-4 w-100 mx-auto" style={{ maxWidth: "100%" }}>
                <Card.Header className="bg-dark text-white">
                    <Row className="align-items-center text-end justify-content-between">
                        <Col xs={12} md={4} className="text-start justify-content-start">
                            <h5 className="m-0 ">Subscription Stats</h5>
                        </Col>
                        <Col xs={12} md={4} className="mt-2 mt-md-0">
                            <Form.Control
                                type="text"
                                placeholder="Search by Name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Col>
                        <Col xs={4} md={2} className="mt-2 mt-md-0 " >
                            <Dropdown onSelect={handleFilterChange}>
                                <Dropdown.Toggle variant="light" className="w-100 w-md-auto">
                                    {filter === "totalUsers" ? "Total Users" :
                                        filter === "newSubscriptions" ? "New Subscriptions" :
                                            filter === "expiredSubscriptions" ? "Expired Subscriptions" :
                                                "Upcoming Expirations"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="totalUsers">Total Users</Dropdown.Item>
                                    <Dropdown.Item eventKey="newSubscriptions">New Subscriptions</Dropdown.Item>
                                    <Dropdown.Item eventKey="expiredSubscriptions">Expired Subscriptions</Dropdown.Item>
                                    <Dropdown.Item eventKey="upcomingExpirations">Upcoming Expirations</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>
                    <h5 className="mt-3 text-dark text-start">Users</h5>

                    <ul className="list-group mt-3">
                        {filteredUsers().map((user) => (
                            <li key={user.id} className="list-group-item d-flex flex-wrap justify-content-between align-items-center text-secondary">
                                <strong>{user.name}</strong>
                                <span className={`badge ${user.status === "active" ? "text-success" : user.status === "expired" ? "text-danger" : "text-warning"}`} style={{ minWidth: "12%", textAlign: "end" }}>
                                    {user.status}
                                </span>
                                <span className="badge bg-info text-white" style={{ minWidth: "120px", textAlign: "center" }}>{user.role}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-3 text-secondary text-end m-0">Select Date</p>
                    <Row className="mb-3 justify-content-end">
                        <Col xs={8} sm={3} md={2}>
                            <Form.Control
                                type="date"
                                className="mx-auto"
                                style={{ maxWidth: "100%" }}
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <h5 className="mt-4 text-dark text-start">Transactions</h5>
                    <ul className="list-group">
                        {filteredTransactions().length > 0 ? (
                            filteredTransactions().map((tx) => (
                                <li key={tx.id} className="list-group-item d-flex flex-wrap justify-content-between align-items-center text-secondary">
                                    <strong style={{ minWidth: "30%" }} className="text-secondary">{tx.user}</strong>
                                    <span style={{ minWidth: "15%", textAlign: "center" }}>{tx.amount}</span>
                                    <span className={`badge ${tx.status === "Completed" ? "text-success" : "text-warning"}`} style={{ minWidth: "15%", textAlign: "center" }}>
                                        {tx.status}
                                    </span>
                                    <span className="badge bg-secondary text-white" style={{ minWidth: "20%", textAlign: "center" }}>
                                        {tx.date}
                                    </span>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item text-muted text-center">No transactions found</li>
                        )}
                    </ul>

                    <div className="text-center mt-4">
                        <h5 className="fw-bold text-secondary">
                            Total Transaction Amount: <span className="text-primary">${totalAmount.toFixed(2)}</span>
                        </h5>
                        <h5 className="fw-bold text-secondary mt-2">
                            Total Pending Work: <span className="text-warning">{totalPendingWork}</span>
                        </h5>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SubscriptionStats;
