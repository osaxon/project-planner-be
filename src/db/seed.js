const db = require("./");

const seed = async ({ projects, tasks, categories, users }) => {
    try {
        await dropTable("tasks");
        await dropTable("categories");
        await dropTable("users");
        await dropTable("projects");

        await createUsersTable();
        await createProjectsTable();
        console.log("Tables created 😎");
    } catch (error) {
        throw error;
    }
};

async function dropTable(tableName) {
    try {
        await db.query(`DROP TABLE IF EXISTS ${tableName}`);
    } catch (error) {
        throw error;
    }
}

async function createProjectsTable() {
    try {
        await db.query(`CREATE TABLE projects (
                project_id SERIAL PRIMARY KEY,
                project_name VARCHAR(50) NOT NULL,
                start_date DATE NOT NULL
            );`);
    } catch (error) {
        throw error;
    }
}

async function createUsersTable() {
    try {
        db.query(`CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL
    )`);
    } catch (error) {
        throw error;
    }
}

module.exports = seed;
