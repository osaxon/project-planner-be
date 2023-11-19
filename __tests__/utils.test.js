const { formatData } = require("../src/utils");

describe("formatData", () => {
    test("returns a nested array with the values from a given object", () => {
        const data = [
            {
                project_name: "Badger",
                description: "A new project planning tool in the making :-)",
                start_date: "2023-11-19",
            },
        ];
        expect(formatData(data)).toEqual([
            [
                "Badger",
                "A new project planning tool in the making :-)",
                "2023-11-19",
            ],
        ]);
    });
});
