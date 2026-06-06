Working of the Application
The user enters a sentence, review, feedback, or any text into the input area.
When the Analyze Sentiment button is clicked, JavaScript captures the text and sends it to the Django backend using the Fetch API.
The Django server receives the text and processes it using the TextBlob Natural Language Processing (NLP) library.
TextBlob calculates a polarity score ranging from -1 to +1:
Positive Score (> 0) → Positive 😊
Negative Score (< 0) → Negative 😞
Zero Score (= 0) → Neutral 😐
The backend returns the sentiment result and score as a JSON response.
JavaScript receives the response and updates the webpage dynamically without refreshing the page.
The user can immediately view:
Sentiment Category (Positive / Negative / Neutral)
Sentiment Score
📊 Sentiment Classification Logic
Polarity Score	Sentiment
Greater than 0	Positive 😊
Less than 0	Negative 😞
Equal to 0	Neutral 😐
🔁 Application Workflow
User Input
    ↓
Analyze Button Click
    ↓
JavaScript Fetch API Request
    ↓
Django Backend
    ↓
TextBlob Sentiment Analysis
    ↓
Sentiment Score Calculation
    ↓
JSON Response
    ↓
Display Result on Webpage
💡 Example

Input:

I really enjoyed using this application.

Output:

Sentiment: Positive 😊
Score: 0.65

Input:

This is the worst experience I have ever had.

Output:

Sentiment: Negative 😞
Score: -1.0
