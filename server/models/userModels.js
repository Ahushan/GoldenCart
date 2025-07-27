import { pool as db } from "../config/db.js";

const createUser = async (id, name, email, password, phone, address, role = "user") => {
  try {
    const [result] = await db.query(
      "INSERT INTO users (id, name, email, password, phone, address, role) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [id, name, email, password, phone, address, role]
    );
    return {
      success: true,
      message: "User insertion successful.",
      userId: result.insertId,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed in user insertion.",
      error: error.message,
    };
  }
};

const getUserById = async (id) => {
  try {
    const [result] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  } catch (error) {
    return {
      success: false,
      message: "Failed to get user by ID.",
      error: error.message,
    };
  }
};

const getUserByEmail = async (email) => {
  try {
    const [result] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (result.length === 0) {
      return null;
    }
    return result[0];
  } catch (error) {
    return {
      success: false,
      message: "Failed to get user by email.",
      error: error.message,
    };
  }
};

const deleteUserById = async (id) => {
  try {
    const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "No user found with the given ID.",
      };
    }

    return {
      success: true,
      message: "User deleted successfully.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete user by ID.",
      error: error.message,
    };
  }
};

const changeAdminById = async (id) => {
  try {
    const user = await getUserById(id);

    if (!user) {
      return {
        success: false,
        message: "No user found with the given ID.",
      };
    }

    if (user.role === "admin") {
      return {
        success: false,
        message: "User is already an admin.",
      };
    }

    const [result] = await db.query("UPDATE users SET role = ? WHERE id = ?", ["admin", id]);

    return {
      success: true,
      message: "User role updated to admin.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to change user role to admin.",
      error: error.message,
    };
  }
};

const updateUserById = async (id, name, phone, address) => {
  try {
    const [result] = await db.query(
      "UPDATE users SET name = ?, phone = ?, address = ? WHERE id = ?",
      [name, phone, address, id]
    );

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "No user found with the given ID to update.",
      };
    }

    return {
      success: true,
      message: "User data updated.",
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update user data.",
      error: error.message,
    };
  }
};

const getALLUsers = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch all user data.",
      error: error.message,
    };
  }
};

const searchUsersByName = async (searchQuery) => {
  try {
    const [results] = await db.query(
      "SELECT * FROM users WHERE name LIKE ?",
      [`%${searchQuery}%`]
    );
    return results;
  } catch (error) {
    return {
      success: false,
      message: "Failed to search users.",
      error: error.message,
    };
  }
};

export default {
  createUser,
  getUserById,
  getUserByEmail,
  deleteUserById,
  changeAdminById,
  updateUserById,
  getALLUsers,
  searchUsersByName
};
