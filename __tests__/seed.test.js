const db = require("../src/db/");
const data = require("../src/db/data/test-data");
const seed = require("../src/db/seed");

beforeAll(() => seed(data));
afterAll(() => db.end());

describe("seed", () => {
    describe("projects", () => {
        test("projects table exists", () => {
            return db
                .query(
                    `SELECT EXISTS (
                    SELECT FROM 
                        information_schema.tables 
                    WHERE 
                        table_name = 'projects'
                    );`
                )
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true);
                });
        });
        test("projects table has project_id column as serial primary key", () => {
            return db
                .query(
                    `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'projects'
                    AND column_name = 'project_id';`
                )
                .then(({ rows: [column] }) => {
                    expect(column.column_name).toBe("project_id");
                    expect(column.data_type).toBe("integer");
                    expect(column.column_default).toBe(
                        "nextval('projects_project_id_seq'::regclass)"
                    );
                });
        });
        test("projects table has seed data", () => {
            return db
                .query(`SELECT * FROM projects;`)
                .then(({ rows, rowCount }) => {
                    expect(rowCount).toBe(3);
                    rows.forEach((project) => {
                        expect(project.project_name).toEqual(
                            expect.any(String)
                        );
                        expect(project.description).toEqual(expect.any(String));
                        expect(project.start_date).toEqual(expect.any(Date));
                    });
                });
        });
    });
    describe("users", () => {
        test("users table exists", () => {
            return db
                .query(
                    `SELECT EXISTS (
                    SELECT FROM 
                        information_schema.tables 
                    WHERE 
                        table_name = 'users'
                    );`
                )
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true);
                });
        });
        test("users table has user_id column as serial primary key", () => {
            return db
                .query(
                    `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'users'
                    AND column_name = 'user_id';`
                )
                .then(({ rows: [column] }) => {
                    expect(column.column_name).toBe("user_id");
                    expect(column.data_type).toBe("integer");
                    expect(column.column_default).toBe(
                        "nextval('users_user_id_seq'::regclass)"
                    );
                });
        });
    });
    describe("tasks", () => {
        test("tasks table exists", () => {
            return db
                .query(
                    `SELECT EXISTS (
                    SELECT FROM 
                        information_schema.tables 
                    WHERE 
                        table_name = 'tasks'
                    );`
                )
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true);
                });
        });
        test("tasks table has task_id column as serial primary key", () => {
            return db
                .query(
                    `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'tasks'
                    AND column_name = 'task_id';`
                )
                .then(({ rows: [column] }) => {
                    expect(column.column_name).toBe("task_id");
                    expect(column.data_type).toBe("integer");
                    expect(column.column_default).toBe(
                        "nextval('tasks_task_id_seq'::regclass)"
                    );
                });
        });
    });
    describe("categories", () => {
        test("categories table exists", () => {
            return db
                .query(
                    `SELECT EXISTS (
                    SELECT FROM 
                        information_schema.tables 
                    WHERE 
                        table_name = 'categories'
                    );`
                )
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true);
                });
        });
        test("categories table has category_id column as serial primary key", () => {
            return db
                .query(
                    `SELECT column_name, data_type, column_default
                    FROM information_schema.columns
                    WHERE table_name = 'categories'
                    AND column_name = 'category_id';`
                )
                .then(({ rows: [column] }) => {
                    expect(column.column_name).toBe("category_id");
                    expect(column.data_type).toBe("integer");
                    expect(column.column_default).toBe(
                        "nextval('categories_category_id_seq'::regclass)"
                    );
                });
        });
    });
});
