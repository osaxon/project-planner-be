const db = require("../src/db/");
const data = require("../src/db/data/dev-data");
const seed = require("../src/db/seed");

beforeAll(() => seed(data));
afterAll(() => db.end());

describe("seed", () => {
    describe("tables", () => {
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
});
