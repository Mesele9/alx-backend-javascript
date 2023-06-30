export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;

      return {
        next() {
          if (index < employees.length) {
            return {
              value: employees[index++],
              done: false,
            };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}
