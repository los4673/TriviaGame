$(document).ready(function () {
    var questionCount = 0;
    var correctAnswer;
    var winCount = 0;
    var lossCount = 0;
    var unnasnwered = 0;
    var myTimer;
    var number = 10;
    var quizTimer;
    var quiz = [
        {
            question: "Each block of a Blockchain consist of which of the following?",
            answers: ["A hash pointer to the previous block", "Timestamp", "List of transactions", "All of the above"],
            correct: "All of the above",
        },
        {
            question: "Which of the following is first distributed blockchain implementation?",
            answers: ["Bitcoin", "Ethereum"],
            correct: "Bitcoin",
        },
        {
            question: "Bitcoin is based on _______ blockchain?",
            answers: ["Private", "Public", "Public Permissioned", "Permissioned"],
            correct: "Public",
        },
        {
            question: "Blockchain can be stored as which of the following?",
            answers: ["A flat file", "A Database", "Both of the above", "None of the above"],
            correct: "Both of the above",
        },
        {
            question: "In blockchain, blocks are linked ________?",
            answers: ["Backward to the previous block", "Forward to next block", "Not linked with each other"],
            correct: "Backward to the previous block",
        },
        {
            question: "The primary benefit of immutability is....",
            answers: ["Scalability", "Improved Security", "Tamper Proof", "Increased Efficiency"],
            correct: "Increased Efficiency",
        },
        {
            question: "Hash identifying each block in the Blockchain is generated using which of the following cryotographic algorithm?",
            answers: ["SHA128", "SHA256"],
            correct: "SHA256",
        },
        {
            question: "A block in the blockchain can never have more than one parent block?",
            answers: ["True", "False"],
            correct: "True",
        },
        {
            question: "Blockchain forks can result in which of the following?",
            answers: ["Multiple parent blocks", "Multiple children blocks"],
            correct: "Multiple children blocks",
        },
        {
            question: "Which of the following is asymmetric encryption Algorithm?",
            answers: ["Blofish", "Twofish", "RSA", "Tripple DEA"],
            correct: "RSA",
        },
    ];


    function startTimer() {
        myTimer = setTimeout(function () {
            outOfTime();
        }, 10000);

    }

    function resetTimer() {
        clearTimeout(myTimer);
    }
    function decrement() {
        number--;
        $("#quizTimer").html("<h2>" + "Time left: " + number + " Seconds" + "</h2>");

    }

    function questionFlow(num) {
        if (questionCount < quiz.length) {
            $("#quizTimer").html("<h2>" + "Time left: " + number + " Seconds" + "</h2>");
            quizTimer = setInterval(decrement, 1000);
            correctAnswer = quiz[num].correct;
            questionCount++;
            var question = quiz[num].question;
            var answers = quiz[num].answers;
            $("#startGame").hide();
            correctAnswer = quiz[num].correct;
            $("#question").html(question);
            for (var i = 0; i < answers.length; i++) {
                var button = $('<button/>', {
                    text: answers[i],
                    value: answers[i],
                    click: function () { checkAsnwer(this.value, correctAnswer); }
                });
                $("#buttons").append(button);
            }
            startTimer();
        }
        else {
            endGame();
        }
    };

    function outOfTime() {
        number = 10;
        clearInterval(quizTimer);
        unnasnwered++;
        $("#buttons").empty();
        $("#question").html("Out of Time!" + "<br/>" + "Correct answer is: " + correctAnswer);
        setTimeout(function () {
            questionFlow(questionCount);
        }, 5000);
    }

    function checkAsnwer(answer, correctAnswer) {
        resetTimer();
        if (answer === correctAnswer) {
            number = 10;
            clearInterval(quizTimer);
            winCount++;
            $("#buttons").empty();
            $("#question").html("Correct Answere!");
            setTimeout(function () {
                questionFlow(questionCount);
            }, 5000);

        } else {
            number = 10;
            clearInterval(quizTimer);
            lossCount++;
            $("#buttons").empty();
            $("#question").html("Wrong answer!" + "<br/>" + "Correct answer is: " + correctAnswer);
            setTimeout(function () {
                questionFlow(questionCount);
            }, 5000);
        }
    }

    function endGame() {
        number = 10;
        questionCount = 0;
        $("#startGame").html("Play Again?");
        $("#question").html("Quiz Results" + "<br/>" + "Wins: " + winCount + "<br/>" + "Losses: " + lossCount + "<br/>" + "unnanswered: " + unnasnwered);
        $("#startGame").show();
        $("#quizTimer").empty();
    }


    $("#startGame").on("click", function () {
        winCount = 0;
        lossCount = 0;
        unnasnwered = 0;
        questionFlow(questionCount);
    });
});