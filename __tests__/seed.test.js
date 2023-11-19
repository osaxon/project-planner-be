const db = require("../src/db/");
const data = require("../src/db/data/dev-data");
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
    });
});
