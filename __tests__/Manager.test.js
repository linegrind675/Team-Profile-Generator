const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Michael', 50, 'michael.scott@dundermifflin.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Michael', 50, 'michael.scott@dundermifflin.com');

    expect(manager.getRole()).toEqual("Manager");
});