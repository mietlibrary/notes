// Data structure for subject notes and question papers
const libraryData = {
    "CS101": {
        "notes": "https://drive.google.com/file/d/1AwOH9ViEQLDvmVZRN6_BQu2iryfMnmwL/view?usp=drive_link",
        "questionPaper": "https://drive.google.com/file/d/1PCIA56gss09RifqKO5eWxNITjD0qjlOM/view?usp=drive_link"
    },
    "CS102": {
        "notes": "https://drive.google.com/your-cs102-notes-url",
        "questionPaper": "https://drive.google.com/your-cs102-question-paper-url"
    }
    // Add more subjects here
};

// Normalize keys in the library data to handle case-insensitive search
const normalizedLibraryData = {};
for (const code in libraryData) {
    normalizedLibraryData[code.toLowerCase()] = libraryData[code];
}

document.getElementById('search-btn').addEventListener('click', function() {
    const subjectCode = document.getElementById('subject-code').value.toLowerCase();
    const selection = document.getElementById('selection').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (normalizedLibraryData[subjectCode]) {
        const subjectData = normalizedLibraryData[subjectCode];
        let linkText = '';
        let linkUrl = '';

        if (selection === 'notes') {
            linkText = 'View Notes';
            linkUrl = subjectData.notes;
        } else if (selection === 'questionPaper') {
            linkText = 'View Question Paper';
            linkUrl = subjectData.questionPaper;
        }

        resultsContainer.innerHTML = `
            <div class="result-item">
                <strong>${linkText}:</strong> <a href="${linkUrl}" target="_blank">${linkText}</a>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = '<p>No data found for this subject code.</p>';
    }
});
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const button = document.getElementById('redirectButton');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Redirect to another website
        window.location.href = 'https://mietlibrary.github.io/project/';
    });
});
