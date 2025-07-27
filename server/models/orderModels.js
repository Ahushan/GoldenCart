import { pool as db } from "../config/db.js";

export const createOrderWithItems = async (
  userId,
  items = [],
  totalPrice,
  shippingAddress,
  paymentMethod = "cod",
  paymentStatus = "pending",
  paymentId = null
) => {
  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    const [orderResult] = await connection.query(
      `INSERT INTO orders (
        user_id,
        status,
        total_price,
        payment_method,
        shipping_address,
        payment_status,
        payment_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        "pending",
        totalPrice,
        paymentMethod,
        shippingAddress,
        paymentStatus,
        paymentId,
      ]
    );

    const orderId = orderResult.insertId;

    for (const item of items) {
      const { product_id, quantity, price_each } = item;
      await connection.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price_each)
         VALUES (?, ?, ?, ?)`,
        [orderId, product_id, quantity, price_each]
      );
    }

    await connection.commit();
    connection.release();

    return {
      success: true,
      message: "Order placed successfully.",
      orderId,
    };
  } catch (error) {
    await connection.rollback();
    connection.release();
    return {
      success: false,
      message: "Failed to place order.",
      error: error.message,
    };
  }
};

export const getOrdersByUserId = async (userId) => {
  try {
    const [result] = await db.query(
      `SELECT
        o.order_id,
        o.order_date,
        o.status,
        o.total_price,
        o.payment_method,
        o.payment_status,
        o.payment_id,
        o.shipping_address,
        ap.product_name,
        ap.product_image,
        ap.discount,
        ap.product_price,
        oi.quantity,
        oi.price_each
      FROM order_items oi
      JOIN allproducts ap ON oi.product_id = ap.product_id
      JOIN orders o ON oi.order_id = o.order_id
      WHERE o.user_id = ?`,
      [userId]
    );

    if (result.length === 0) {
      return {
        success: false,
        message: "No orders found.",
      };
    }

    return {
      success: true,
      orders: result,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to retrieve orders.",
      error: error.message,
    };
  }
};

export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const [result] = await db.query(
      `UPDATE orders SET status = ? WHERE order_id = ?`,
      [newStatus, orderId]
    );

    return {
      success: true,
      message: "Order status updated.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update order status.",
      error: error.message,
    };
  }
};

export const updatePaymentStatus = async (
  orderId,
  paymentStatus,
  paymentId = null
) => {
  try {
    const [result] = await db.query(
      `UPDATE orders SET payment_status = ?, payment_id = ? WHERE order_id = ?`,
      [paymentStatus, paymentId, orderId]
    );

    return {
      success: true,
      message: "Payment status updated.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update payment status.",
      error: error.message,
    };
  }
};

export const getAllOrders = async () => {
  try {
    const [result] = await db.query(`
      SELECT 
        o.*, 
        u.name AS user_name,
        COUNT(oi.order_item_id) AS items_count
      FROM orders o
      JOIN users u ON o.user_id = u.id
      LEFT JOIN order_items oi ON o.order_id = oi.order_id
      GROUP BY o.order_id
      ORDER BY o.order_date DESC
    `);

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch all orders.",
      error: error.message,
    };
  }
};

export default {
  getAllOrders,
  getOrdersByUserId,
  createOrderWithItems,
  updateOrderStatus,
  updatePaymentStatus,
};
