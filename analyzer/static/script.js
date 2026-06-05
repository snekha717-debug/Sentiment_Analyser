const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async () => {

    const text = document.getElementById("textInput").value;
    const result = document.getElementById("result");

    if(text.trim() === ""){
        result.innerHTML =
        `<div class="result-box">
            Please enter some text.
        </div>`;
        return;
    }

    result.innerHTML =
    `<div class="result-box">
        Analyzing...
    </div>`;

    try{

        const response = await fetch("/analyze/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                text:text
            })
        });

        const data = await response.json();

        if(data.error){
            result.innerHTML =
            `<div class="result-box">
                ${data.error}
            </div>`;
        }
        else{
            result.innerHTML =
            `<div class="result-box">
                <p>Sentiment: ${data.sentiment}</p>
                <p>Score: ${data.score}</p>
            </div>`;
        }

    }
    catch(error){

        result.innerHTML =
        `<div class="result-box">
            Something went wrong.
        </div>`;
    }

});