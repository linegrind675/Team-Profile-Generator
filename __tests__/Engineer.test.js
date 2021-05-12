const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Michael', 1, 'michael.scott@dundermifflin.com', 'mscott123');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Michael', 1, 'michael.scott@dundermifflin.com', 'mscott123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Michael', 1, 'michael.scott@dundermifflin.com', 'mscott123');

    expect(engineer.getRole()).toEqual("Engineer");
});