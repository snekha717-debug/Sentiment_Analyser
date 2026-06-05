from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from textblob import TextBlob
import json

def home(request):
    return render(request, 'index.html')

@csrf_exempt
def analyze_sentiment(request):
    if request.method == "POST":
        data = json.loads(request.body)
        text = data.get("text", "").strip()

        if not text:
            return JsonResponse({"error": "Please enter some text."}, status=400)

        blob = TextBlob(text)
        score = blob.sentiment.polarity

        if score > 0:
            sentiment = "Positive 😊"
        elif score < 0:
            sentiment = "Negative 😞"
        else:
            sentiment = "Neutral 😐"

        return JsonResponse({
            "sentiment": sentiment,
            "score": round(score, 2)
        })

    return JsonResponse({"error": "Invalid request"}, status=400)