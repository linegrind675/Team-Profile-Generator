const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('Michael', 45, 'michael.scott@dundermifflin.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Michael', 45, 'michael.scott@dundermifflin.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

module.exports = Employee;
