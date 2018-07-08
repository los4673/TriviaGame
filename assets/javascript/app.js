$(document).ready(function () {
    var winCount;
    var lossCount;
    var unanswered;
    var questionCount;
    var correctAnswer;
    var myTimer;
    var quizTimer;
    var number = 20;
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
        }, 20000);
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
            questionCount++;
            $("#startGame").hide();
            quizTimer = setInterval(decrement, 1000);
            $("#quizTimer").html("<h2>" + "Time left: " + number + " Seconds" + "</h2>");
            var question = quiz[num].question;
            $("#question").html(question);
            correctAnswer = quiz[num].correct;
            var answers = quiz[num].answers;
            for (var i = 0; i < answers.length; i++) {
                var button = $('<button/>', {
                    text: answers[i],
                    value: answers[i],
                    click: function () { checkAsnwer(this.value, correctAnswer); }
                });
                $("#buttons").append(button);
                $("#buttons").append("<br/>");
            }
            startTimer();
        }
        else {
            endGame();
        }
    };

    function outOfTime() {
        number = 20;
        unanswered++;
        clearInterval(quizTimer);
        $("#buttons").empty();
        $("#question").html("Out of Time!" + "<br/>" + "Correct answer is: " + correctAnswer);
        setTimeout(function () {
            questionFlow(questionCount);
        }, 5000);
    }

    function checkAsnwer(answer, correctAnswer) {
        resetTimer();
        if (answer === correctAnswer) {
            number = 20;
            winCount++;
            clearInterval(quizTimer);
            $("#buttons").empty();
            $("#question").html("Correct Answer!");
            setTimeout(function () {
                questionFlow(questionCount);
            }, 5000);

        } else {
            number = 20;
            lossCount++;
            clearInterval(quizTimer);
            $("#buttons").empty();
            $("#question").html("Wrong answer!" + "<br/>" + "Correct answer is: " + correctAnswer);
            setTimeout(function () {
                questionFlow(questionCount);
            }, 5000);
        }
    }

    function endGame() {
        number = 20;
        $("#quizTimer").empty();
        $("#question").html("Quiz Results" + "<br/>" + "Correct answers: " + winCount + "<br/>" + "Wrong asnwers: " + lossCount + "<br/>" + "Unanswered: " + unanswered);
        $("#startGame").html("Play Again?");
        $("#startGame").show();
    }

    $("#startGame").on("click", function () {
        winCount = 0;
        lossCount = 0;
        unanswered = 0;
        questionCount = 0;
        questionFlow(questionCount);
    });
});