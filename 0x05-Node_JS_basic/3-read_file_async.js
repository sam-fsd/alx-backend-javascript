const fs = require('fs');

const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const rows = data.split('\n').slice(1);
      console.log(`Number of students: ${rows.length}`);
      const csStudents = [];
      const sweStudents = [];
      rows.forEach((row) => {
        const student = row.split(',');
        if (student[3] === 'CS') {
          csStudents.push(student[0]);
        } else if (student[3] === 'SWE') {
          sweStudents.push(student[0]);
        }
      });
      console.log(
        `Number of students in CS: ${
          csStudents.length
        }. List: ${csStudents.join(', ')}`
      );
      console.log(
        `Number of students in SWE: ${
          sweStudents.length
        }. List: ${sweStudents.join(', ')}`
      );
      resolve();
    });
  });
};

module.exports = countStudents;
