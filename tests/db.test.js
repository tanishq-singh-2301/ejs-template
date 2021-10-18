const test_schema = require('../server/database/schema/test-schema');

test('DB test', () => {
    expect(() => {
        test_schema.create({
            name: "kaju",
            email: "kaju@gmail.com",
            body: "body"
        })
    }).not.toBeNull()
});