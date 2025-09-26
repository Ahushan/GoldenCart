import React, { useState } from "react";

const dummyTrackingData = {
  "123456": {
    status: "Shipped",
    estimatedDelivery: "2025-10-01",
    history: [
      { date: "2025-09-25", event: "Order placed" },
      { date: "2025-09-26", event: "Order processed" },
      { date: "2025-09-27", event: "Shipped" },
    ],
  },
  "654321": {
    status: "Delivered",
    estimatedDelivery: "2025-09-28",
    history: [
      { date: "2025-09-22", event: "Order placed" },
      { date: "2025-09-23", event: "Order processed" },
      { date: "2025-09-24", event: "Shipped" },
      { date: "2025-09-28", event: "Delivered" },
    ],
  },
};

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  const handleTrackOrder = () => {
    if (dummyTrackingData[orderNumber]) {
      setTrackingInfo(dummyTrackingData[orderNumber]);
      setNotFound(false);
    } else {
      setTrackingInfo(null);
      setNotFound(true);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 24 }}>
      <h1>Order Tracking</h1>
      <p>Enter your order number to track your order status.</p>
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Order Number"
          style={{ padding: 8, width: "70%" }}
        />
        <button
          onClick={handleTrackOrder}
          style={{
            padding: "8px 16px",
            marginLeft: 8,
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Track
        </button>
      </div>
      {trackingInfo && (
        <div style={{ border: "1px solid #ccc", borderRadius: 4, padding: 16 }}>
          <h2>Status: {trackingInfo.status}</h2>
          <p>Estimated Delivery: {trackingInfo.estimatedDelivery}</p>
          <h3>Order History:</h3>
          <ul>
            {trackingInfo.history.map((item: any, idx: number) => (
              <li key={idx}>
                <strong>{item.date}:</strong> {item.event}
              </li>
            ))}
          </ul>
        </div>
      )}
      {notFound && (
        <div style={{ color: "red", marginTop: 16 }}>
          Order not found. Please check your order number.
        </div>
      )}
    </div>
  );
};

export default OrderTracking;