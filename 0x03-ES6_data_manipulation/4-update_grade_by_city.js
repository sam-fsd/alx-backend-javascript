export default function updateStudentGradeByCity(
  arrOfStudents,
  city,
  newGrades
) {
  const filteredStudents = arrOfStudents.filter(
    (student) => student.location === city
  );
  const updatedStudents = filteredStudents.map((student) => {
    const newGrade = newGrades.filter(
      (newGrade) => newGrade.studentId === student.id
    )[0];
    if (newGrade) {
      return { ...student, grade: newGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudents;
}
