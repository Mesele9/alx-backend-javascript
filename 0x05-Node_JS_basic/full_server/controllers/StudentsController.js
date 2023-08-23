import readDatabase from '../utils';

class StudentController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField =await readDatabase(req.app.get('dbPath'));
      // response logic here
      const response = ['This is the list of our students'];

      Object.keys(studentsByField).sort().forEach(field => {
        const numberOfStudents = studentsByField[field].length;
        const studentList = studentsByField[field].join(', ');
        response.push(`Number of students in ${field}: ${numberOfStudents}. List: ${studentList}`);

        res.status(200).send(response.join('\n'));
      })
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const studentsByField = await readDatabase(req.app.get('dbPath'));
       // response logic here
      const major = req.params.major.toUpperCase();
      
      if (major !== 'CS' && !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      const studentList = studentsByField[major].join(', ');

      res.status(200).send(`List: ${studentList}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
