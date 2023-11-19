const db = require("./");

const seed = ({ projects, tasks, categories, users }) => {
    return Promise.all([
        dropTable("tasks"),
        dropTable("categories"),
        dropTable("users"),
        dropTable("projects"),
    ])
        .then(() => {
            return createProjectsTable();
        })
        .then(() => {
            return createUsersTable();
        })
        .then(() => {
            console.log("tables created 😎");
        })
        .catch((error) => console.log(error));
};

function dropTable(tableName) {
    return db.query(`DROP TABLE IF EXISTS ${tableName}`);
}

function createProjectsTable() {
    return db.query(`CREATE TABLE projects (
                project_id SERIAL PRIMARY KEY,
                project_name VARCHAR(50) NOT NULL,
                start_date DATE NOT NULL
            );`);
}

function createUsersTable() {
    return db.query(`CREATE TABLE users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL
    )`);
}

module.exports = seed;
