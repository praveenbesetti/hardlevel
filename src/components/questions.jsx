// questionsData.js

const questionsData = [
  {
    name: "Technology",
    questions: [
      {
        id: "favLanguage",
        question: "What is your favorite programming language?",
        options: ["JavaScript", "Python", "Java", "C#"]
      },
      {
        id: "yearsExperience",
        question: "How many years of experience do you have?",
        options: null
      }
    ]
  },
  {
    name: "Health",
    questions: [
      {
        id: "exerciseFrequency",
        question: "How often do you exercise?",
        options: ["Daily", "Weekly", "Monthly", "Rarely"]
      },
      {
        id: "dietPreference",
        question: "What is your diet preference?",
        options: ["Vegetarian", "Vegan", "Non-Vegetarian"]
      }
    ]
  },
  {
    name: "Education",
    questions: [
      {
        id: "highestQualification",
        question: "What is your highest qualification?",
        options: ["High School", "Bachelor's", "Master's", "PhD"]
      },
      {
        id: "fieldOfStudy",
        question: "What is your field of study?",
        options: null
      }
    ]
  }
];

export default questionsData;
