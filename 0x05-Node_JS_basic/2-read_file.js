const fs = require('fs');

const countStudents = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const rows = [];
    const CSList = [];
    const SWEList = [];

    data.split('\n').forEach((line, index) => {
      // Skip the header line if needed
      if (index === 0) return;

      // Split the line by comma (or any delimiter you're using)
      const values = line.split(',');

      // Assuming each line has the same number of columns
      rows.push(values);
    });

    rows.forEach((student, index) => {
      if (student[3] === 'CS') {
        CSList.push(student[0]);
      } else {
        SWEList.push(student[0]);
      }
    });

    console.log(`Number of studentS: ${rows.length}`);
    console.log(
      `Number of students in CS: ${CSList.length} List: ${CSList.join(', ')}`
    );
    console.log(
      `Number of students in CS: ${SWEList.length} List: ${SWEList.join(', ')}`
    );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
