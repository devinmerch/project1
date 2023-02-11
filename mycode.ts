type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
  }

type Company = {
    name: string,           // Ex: "MSFT"
    abbreviation: string,   // Ex: Microsoft
    url: string             // Ex: https://microsoft.com
}

type SocialMedia = {
    icon: string;   // this can be a name of a local image or a URL to a remote image
    url: string;    // URL of the said social media company
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
    },
]


const myCompany: Company[] = [
    { name: "MSFT", abbreviation: "Microsoft", url: "https://microsoft.com" },
    { name: "AAPL", abbreviation: "Apple", url: "https://apple.com" },
    { name: "GOOG", abbreviation: "Google", url: "https://google.com" }
  ];

  const mySocialMedia: SocialMedia[] = [
    { icon: "icons8-github-60.png", url: "https://github.com" },
    { icon: "icons8-twitter-60.png", url: "https://twitter.com" },
    { icon: "icons8-linkedin-circled-60.png", url: "https://linkedin.com" },
    { icon: "icons8-class-60.png", url: "https://blackboard.com" }
  ];

//get element
const tArea4 = document.getElementById("area4-table");
//create a table
const table = document.createElement("table");

//Header Row
const headerRow = document.createElement("tr");
//Course number
const courseNumberHeader = document.createElement("th");
courseNumberHeader.innerText = "Course Number";
headerRow.appendChild(courseNumberHeader);
//Course name
const courseNameHeader = document.createElement("th");
courseNameHeader.innerText = "Course Name";
headerRow.appendChild(courseNameHeader);
//Semester taken
const semesterTakenHeader = document.createElement("th");
semesterTakenHeader.innerText = "Semester Taken";
headerRow.appendChild(semesterTakenHeader);

//Append header row
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

// Get element
const area6 = document.getElementById("area6");

for (const company of myCompany) {
const li = document.createElement("li");
const a = document.createElement("a");
a.href = company.url;
a.innerText = company.abbreviation;
a.target = "_blank";
li.appendChild(a);
area6.appendChild(li);
}


// Get element
const area8 = document.getElementById("area8");

for (const socialMedia of mySocialMedia) {
  const a = document.createElement("a");
  a.href = socialMedia.url;

  const img = document.createElement("img");
  img.src = socialMedia.icon;
  img.alt = socialMedia.url;

  a.appendChild(img);
  area8.appendChild(a);
}





