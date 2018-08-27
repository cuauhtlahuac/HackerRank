function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
    } else if ((grades[i] + 2) % 5 === 0) {
      grades[i] += 2;
    } else if ((grades[i] + 1) % 5 === 0) grades[i] += 1;
  }

  return grades;
}

const arr = [73, 67, 38, 33, 83, 99];
console.log(gradingStudents(arr));
