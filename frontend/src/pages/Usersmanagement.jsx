import { useState, useEffect } from "react";
import { Table, Button, Input, Select, Space, Modal, message, Card } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import "./Userm.css"; // Import custom CSS for hover effect

const { Option } = Select;

const UserManagement = () => {
  const [usersData, setUsersData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubscriberDetailsVisible, setIsSubscriberDetailsVisible] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);

  const generateUserId = (name) => {
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${name.slice(0, 4).toLowerCase()}${randomNumbers}`;
  };

  useEffect(() => {
    const defaultUsers = [
      { name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
      { name: "Alice Smith", email: "alice.smith@example.com", role: "Editor", status: "Inactive" },
      { name: "Bob Johnson", email: "bob.johnson@example.com", role: "Subscriber", status: "Active" },
      { name: "David Wilson", email: "david.wilson@example.com", role: "Admin", status: "Active" },
      { name: "Eva Turner", email: "eva.turner@example.com", role: "Editor", status: "Inactive" },
      { name: "Sophia Brown", email: "sophia.brown@example.com", role: "Subscriber", status: "Active" },
      { name: "Lucas White", email: "lucas.white@example.com", role: "Editor", status: "Active" },
      { name: "Liam Green", email: "liam.green@example.com", role: "Subscriber", status: "Inactive" },
    ];

    const usersWithIds = defaultUsers.map(user => ({
      ...user,
      userId: generateUserId(user.name)
    }));

    setUsersData(usersWithIds);
  }, []);

  const handleEditUser = (record) => {
    setEditingUser(record);
    setIsModalVisible(true);
  };

  const handleSaveEdit = () => {
    setUsersData(usersData.map(user => 
      user.userId === editingUser.userId ? { ...user, role: editingUser.role } : user
    ));
    setIsModalVisible(false);
    setEditingUser(null);
    message.success("User role updated successfully");
  };

  const handleDelete = (id) => {
    setUsersData(usersData.filter(user => user.userId !== id));
    message.error("User deleted");
  };

  const handleDeactivate = (id) => {
    setUsersData(usersData.map(user => 
      user.userId === id ? { ...user, status: "Inactive" } : user
    ));
    message.success("User deactivated successfully");
  };

  const handleActivate = (id) => {
    setUsersData(usersData.map(user => 
      user.userId === id ? { ...user, status: "Active" } : user
    ));
    message.success("User activated successfully");
  };

  const handleSubscriberDetails = (record) => {
    if (record.role) {
      setSelectedSubscriber(record);
      setIsSubscriberDetailsVisible(true);
    }
  };

  const handleCloseDetails = () => {
    setIsSubscriberDetailsVisible(false);
  };

  const columns = [
    { title: "User ID", dataIndex: "userId", key: "userId" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role", render: (_, record) => (
        <span
          onClick={() => handleSubscriberDetails(record)}
          className="hover-pointer"
        >
          {record.role}
        </span>
      )
    },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Actions", key: "actions", render: (_, record) => (
        <Space>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleEditUser(record)}>
            <EditOutlined style={{ color: "blue" }} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleDelete(record.userId)}>
            <DeleteOutlined style={{ color: "red" }} />
          </motion.button>
        </Space>
      )
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div className="section" style={{ marginBottom: "30px" }}>
        <h2>User Oversight</h2>
        <Table 
          dataSource={usersData} 
          columns={columns} 
          rowKey="userId" 
          pagination={false} 
          rowClassName="hover-row" 
        />
      </div>

      {/* Modal for Editing User */}
      <Modal title="Edit User" visible={isModalVisible} onOk={handleSaveEdit} onCancel={() => setIsModalVisible(false)}>
        <Input placeholder="Name" value={editingUser?.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} />
        <Input placeholder="Email" value={editingUser?.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} />
        <Select value={editingUser?.role} onChange={(value) => setEditingUser({ ...editingUser, role: value })}>
          <Option value="Editor">Editor</Option>
          <Option value="Subscriber">Subscriber</Option>
        </Select>
      </Modal>

      {/* Subscriber Details Card */}
      <Modal
        title="Subscriber Details"
        visible={isSubscriberDetailsVisible}
        onCancel={handleCloseDetails}
        footer={null}
      >
        {selectedSubscriber && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#f9f9f9" }}
          >
            <Card className="subscriber-card">
  <h3>Username: {selectedSubscriber.name}</h3>
  <p><strong>Full Name:</strong> {selectedSubscriber.name}</p>
  <p><strong>UserID:</strong> {selectedSubscriber.userId}</p>
  <p><strong>Subscribed Date:</strong> 2025-01-01</p>
  <p><strong>End Date:</strong> 2025-12-31</p>
  <p><strong>Subscribe Type:</strong> Premium</p>
  <p><strong>Subscribed for Notifications:</strong> Email, WhatsApp</p>
  <p><strong>Ads:</strong> Yes</p>

  <Button
    type={selectedSubscriber.status === "Inactive" ? "primary" : "danger"}
    onClick={() => selectedSubscriber.status === "Inactive" ? handleActivate(selectedSubscriber.userId) : handleDeactivate(selectedSubscriber.userId)}
    className="activate-deactivate-button"
  >
    {selectedSubscriber.status === "Inactive" ? "Activate" : "Deactivate"}
  </Button>
</Card>

          </motion.div>
        )}
      </Modal>
    </div>
  );
};

export default UserManagement;
