import fs from 'fs/promise';

async fucntion readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const fields = lines[0].split(',');
    const studentsByField = {};

    fields.forEach((field, index) => {
      studentsByField[field] = lines
        .slice(1)
	.map(line => line.split(',')[index])
	.filter(firstName => firstName);
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}


module.export = readDatabase;
