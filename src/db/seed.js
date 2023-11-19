const db = require("./");

const seed = async ({ projects, tasks, categories, users }) => {
    try {
        await dropTable("tasks");
        await dropTable("categories");
        await dropTable("users");
        await dropTable("projects");

        await createUsersTable();
        await createProjectsTable();
        await createCategoriesTable();
        await createTasksTable();
        console.log("Tables created 😎");
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
};

async function dropTable(tableName) {
    try {
        await db.query(`DROP TABLE IF EXISTS ${tableName}`);
    } catch (error) {
        console.error(error);
        throw new Error(error);
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
        console.error(error);
        throw new Error(error);
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
        console.error(error);
        throw new Error(error);
    }
}

async function createCategoriesTable() {
    try {
        await db.query(`
            CREATE TABLE categories (
                category_id SERIAL PRIMARY KEY,
                category_name VARCHAR(50) NOT NULL
            );
        `);
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

async function createTasksTable() {
    try {
        await db.query(`
            CREATE TABLE tasks (
                task_id SERIAL PRIMARY KEY,
                task_name VARCHAR(100) NOT NULL,
                description TEXT,
                start_date DATE NOT NULL,
                end_date DATE,
                status VARCHAR(20),
                priority VARCHAR(20),
                project_id INT REFERENCES projects(project_id)
            );
        `);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = seed;
