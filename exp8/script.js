// Sample survey questions
const surveyQuestions = [
    { question: "What is your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
    { question: "How often do you exercise?", options: ["Never", "Once a week", "Several times a week", "Every day"] },
    { question: "Do you prefer tea or coffee?", options: ["Tea", "Coffee", "Neither"] },
    { question: "What is your favorite programming language?", options: ["JavaScript", "Python", "Java", "C#"] },
    { question: "On a scale of 1 to 10, how much do you enjoy coding?", options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
];

// Function to randomly select 5 questions and display them
function displayRandomQuestions() {
    const surveyForm = document.getElementById("survey-form");

    // Shuffle the array of questions to get random selection
    const shuffledQuestions = surveyQuestions.sort(() => Math.random() - 0.5);

    // Display the first 5 questions
    for (let i = 0; i < 5; i++) {
        const questionContainer = document.createElement("div");
        questionContainer.className = "question-container";

        const question = document.createElement("label");
        question.textContent = shuffledQuestions[i].question;

        const options = document.createElement("select");
        options.name = `question${i}`;
        shuffledQuestions[i].options.forEach((option, index) => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            options.appendChild(optionElement);
        });

        questionContainer.appendChild(question);
        questionContainer.appendChild(options);
        surveyForm.appendChild(questionContainer);
    }
}

// Function to submit the survey
function submitSurvey() {
    const formData = new FormData(document.getElementById("survey-form"));
    const responses = {};

    formData.forEach((value, key) => {
        responses[key] = value;
    });

    // For this example, let's just display the responses
    alert("Survey submitted!\n" + JSON.stringify(responses, null, 2));
}

// Initial display of random questions
displayRandomQuestions();
