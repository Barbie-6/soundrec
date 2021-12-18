function start() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YzRsI8ngg/model.json", modelloaded);
}
function modelloaded() {
    console.log("model is loaded");
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);

    
        label = results[0].label;
        accuracy = results[0].confidence;

        document.getElementById('result').innerHTML = "I can hear - " + label;
        document.getElementById('accuracy').innerHTML = "Accuracy - " + (accuracy * 100).toFixed(2) + "%";

        img1 = document.getElementById("main_image");
       

        if(label == "Barking") {
            img1.src = "dog.gif";
        }
        else if(label == "Meow") {
            img1.src = "cat.gif";
        }
        else if(label == "Ribbit") {
            img1.src = "frog.gif";
        }
        else if(label == "Howl") {
            img1.src = "wolf.gif";
        }
        else {
            img1.src = "human-ear1.png";
        }
    }


}