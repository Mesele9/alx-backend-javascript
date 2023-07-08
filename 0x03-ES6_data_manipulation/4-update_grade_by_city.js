export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchgGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = matchgGrade ? matchgGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
