# ✨ Sentiment Analysis Web App

## Project Overview

This is a **Sentiment Analysis Web Application** developed using **Python, Django, HTML, CSS, and JavaScript**. The application analyzes user-entered text and classifies it as:

- 😊 Positive
- 😞 Negative
- 😐 Neutral

using the **TextBlob NLP library**.

---

## Features

- Analyze text sentiment
- User-friendly interface
- Real-time sentiment detection
- Displays sentiment score
- Built using Django framework
- Responsive design
- AJAX-based communication

---

## Technologies Used

- Python
- Django
- HTML5
- CSS3
- JavaScript
- TextBlob

---

## Working of the Application

1. User enters text into the input field.
2. Clicking **Analyze Sentiment** sends the text to the Django backend.
3. TextBlob analyzes the sentiment polarity.
4. The sentiment is classified as:
   - 😊 Positive
   - 😞 Negative
   - 😐 Neutral
5. The result and score are displayed instantly without refreshing the page.

---

## Application Workflow

```text
User Input
    ↓
Analyze Button
    ↓
Fetch API Request
    ↓
Django Backend
    ↓
TextBlob Analysis
    ↓
Sentiment Classification
    ↓
Display Result
```

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/snekha717-debug/Sentiment_Analyser.git
```

### 2. Navigate to Project Folder

```bash
cd Sentiment_Analyser
```

### 3. Install Dependencies

```bash
pip install django
pip install textblob
```

### 4. Download TextBlob Corpora

```bash
python -m textblob.download_corpora
```

### 5. Run Server

```bash
python manage.py migrate
python manage.py runserver
```

### 6. Open Browser

```text
http://127.0.0.1:8000/
```

---

## Sample Inputs & Outputs

### Positive Example

**Input**

```text
I love this application. It is amazing!
```

**Output**

```text
😊 Positive
Score: 0.75
```

---

### Negative Example

**Input**

```text
This is the worst experience I have ever had.
```

**Output**

```text
😞 Negative
Score: -0.80
```

---

### Neutral Example

**Input**

```text
The meeting starts at 10 AM.
```

**Output**

```text
😐 Neutral
Score: 0.00
```

---

## Project Structure

```text
Sentiment_Analyser/
│
├── analyzer/
├── sentiment_project/
├── manage.py
├── requirements.txt
└── README.md
```

---

## Developer

**Snekha**

B.Tech Computer Science Student

GitHub: https://github.com/snekha717-debug
