const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creats an Intern object', () => {
    const intern = new Intern('Michael', 1, 'michael.scott@dundermifflin.com', 'SPU');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Michael', 1, 'michael.scott@dundermifflin.com', 'SPU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Michael', 1, 'michael.scott@dundermifflin.com', 'SPU');

    expect(intern.getRole()).toEqual("Intern");
});