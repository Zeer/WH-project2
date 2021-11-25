function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5soundClassifier('https://teachablemachine.withgoogle.com/models/AjBJ67CIP/model.json', modelReady);
    
}
function modelReady()
{
    classifier.classify(gotResults);
}