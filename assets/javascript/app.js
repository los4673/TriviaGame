$(document).ready(function () {
    var currentQuestion = 0;

    var quiz = {
        0: {
            question: "What is the blockchain?",
            answers: ["distributed database", "nope", "try again", "mmmm", "nawww"],
            correct: "distributed database",
        },
        1: {
            question: "1 is the blockchain?",
            answers: ["1", "nope", "try again", "mmmm", "nawww"],
            correct: "distributed database",
        }

    }

    function postQuestion(num) {
        $("#gameCard").empty();
        $("#gameCard").append("<h1>" + "Blockchain Quiz" + "<h1>");
        $("#gameCard").append("<h3>"+ quiz[num].question + "<h3>");
        for (var i = 0; i < 5; i++) {
            var radioBtn = $('<input type="radio" name="rbtnCount" />');
            var label = $("<span>").html( quiz[num].answers[i]);
            var div = $("<div>");
            div.append(radioBtn);
            div.append(label);
            $("#gameCard").append(div);
            

        }
        var $something= $('<input/>').attr({ type:'button', id:'Next', value:'This Next'});
        $("#gameCard").append($something);

        // var next = $("<button>");
        // $('button:contains(next)').attr("id","next");  
        // next.text("Next");
        // $("#gameCard").append(next);
        

    }
    
    function startGame() {
        postQuestion(currentQuestion);
        currentQuestion++;
        console.log(quiz[1]);
        console.log(quiz[1].question);
        console.log(quiz[1].answers[1]);
        console.log(quiz[1].correct);
        postQuestion();

    }
    
    $("#startGame").on("click", function () {
        console.log("Start Game")
        postQuestion(0);
    });

    $("#Next").on("click", function () {
        console.log("Next Card");
        postQuestion(1);
    });

});