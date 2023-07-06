interface Students {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Students = {
  firstName: "Mesele",
  lastName: "Assefa",
  age: 33,
  location: "Dire Dawa",
};

const student2: Students = {
  firstName: "Ebsau",
  lastName: "Adem",
  age: 32,
  location: "Adama",
};

const studentsList = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const cell1 = document.createElement('td');
  cell1.textContent = student.firstName;
  
  const cell2 = document.createElement('td');
  cell2.textContent = student.location;

  row.appendChild(cell1);
  row.appendChild(cell2);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);

document.body.appendChild(table);
