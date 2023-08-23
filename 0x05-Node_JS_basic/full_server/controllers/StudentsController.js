import readDatabase from '../utils';

class StudentController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField =await readDatabase(req.app.get('dbPath'));
      // response logic here
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const studentsByField = await readDatabase(req.app.get('dbPath'));
       // response logic here
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
