<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personalized Learning Roadmap</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .roadmap {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>

<h2>Create Your Personalized Learning Roadmap</h2>

<form id="roadmapForm">
    <label for="name">Student Name:</label>
    <input type="text" id="name" required><br><br>

    <label for="subject">Choose Subject:</label>
    <select id="subject" required>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Language">Language</option>
    </select><br><br>

    <label for="hours">Hours per week:</label>
    <input type="number" id="hours" required><br><br>

    <label for="weeks">Goal Duration (in weeks):</label>
    <input type="number" id="weeks" required><br><br>

    <button type="submit">Generate Roadmap</button>
</form>

<div id="roadmap" class="roadmap"></div>

<script>
    const topics = {
        'Math': ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
        'Science': ['Physics', 'Chemistry', 'Biology'],
        'Computer Science': ['Data Structures', 'Algorithms', 'Machine Learning', 'Databases'],
        'Language': ['Grammar', 'Comprehension', 'Essay Writing', 'Literature']
    };

    document.getElementById('roadmapForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        const hoursPerWeek = parseInt(document.getElementById('hours').value);
        const goalDurationInWeeks = parseInt(document.getElementById('weeks').value);

        generateRoadmap(name, subject, hoursPerWeek, goalDurationInWeeks);
    });

    function generateRoadmap(name, subject, hoursPerWeek, goalDurationInWeeks) {
        const selectedTopics = topics[subject];
        const numTopics = selectedTopics.length;
        const weeksPerTopic = Math.max(1, Math.floor(goalDurationInWeeks / numTopics));

        let roadmap = `<h3>Roadmap for ${name}</h3>`;
        roadmap += `<p>Subject: ${subject}</p>`;
        roadmap += `<p>Study ${hoursPerWeek} hours per week for ${goalDurationInWeeks} weeks.</p>`;
        roadmap += '<ul>';

        let startDate = new Date();
        for (let i = 0; i < selectedTopics.length; i++) {
            let topicEndDate = new Date(startDate);
            topicEndDate.setDate(startDate.getDate() + (weeksPerTopic * 7));
            
            roadmap += `<li><strong>Topic ${i+1}: ${selectedTopics[i]}</strong> - ${startDate.toDateString()} to ${topicEndDate.toDateString()}</li>`;
            startDate = topicEndDate;
        }

        roadmap += '</ul>';

        document.getElementById('roadmap').innerHTML = roadmap;
    }
</script>

</body>
</html>
