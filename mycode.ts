type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
  }

const myCourses: Array<Course> = [ 
    {
    courseNumber: "CIS241", 
    courseName: "System Level Utilities", 
    semesterTaken: "Winter 2022"
    },

    {
    courseNumber: "CIS350", 
    courseName: "Intro to Software Engineering", 
    semesterTaken: "Fall 2022"
    },

    {
    courseNumber: "CIS351", 
    courseName: "Computer Organization and Assembly", 
    semesterTaken: "Winter 2022"
    }
]


const tArea4 = document.getElementsByClassName("area4")

const table = document.createElement("table");
table.setAttribute("border", "1");

const headerRow = document.createElement("tr");
const courseNumberHeader = document.createElement("th");
courseNumberHeader.innerText = "Course Number";

headerRow.appendChild(courseNumberHeader);
const courseNameHeader = document.createElement("th");
courseNameHeader.innerText = "Course Name";

headerRow.appendChild(courseNameHeader);
const semesterTakenHeader = document.createElement("th");
semesterTakenHeader.innerText = "Semester Taken";
headerRow.appendChild(semesterTakenHeader);

table.appendChild(headerRow);

for (const course of myCourses) {
  const row = document.createElement("tr");
  const courseNumber = document.createElement("td");
  courseNumber.innerText = course.courseNumber;
  row.appendChild(courseNumber);
  const courseName = document.createElement("td");
  courseName.innerText = course.courseName;
  row.appendChild(courseName);
  const semesterTaken = document.createElement("td");
  semesterTaken.innerText = course.semesterTaken;
  row.appendChild(semesterTaken);
  table.appendChild(row);
}

tArea4.appendChild(table);


