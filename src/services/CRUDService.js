const connection = require("../config/database")

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM users');
    return results
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user
}

const updateUserById = async (userId, email, name, city) => {
    let [results, fields] = await connection.query('UPDATE users SET email = ?, name = ?, city = ? WHERE id = ?', [email, name, city, userId]);
}

const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query('DELETE FROM users WHERE id = ?', [userId]);
}

module.exports = {
    getAllUsers, getUserById, updateUserById, deleteUserById
}