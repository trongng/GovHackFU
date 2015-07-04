var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'template.html',
        link: function(scope, elem, attrs) {
            scope.start = function() {
                scope.id = 0; // id of current question
                scope.quizOver = false;
                scope.inProgress = true;
                scope.getQuestion();

                scope.characterTags = [];
                scope.charAttributes = {'strength': 0};

            };

            scope.reset = function() {
                scope.inProgress = false;
                scope.characterTags = [];
                scope.charAttributes = {};
            };

            scope.getQuestion = function() {
                var q = quizFactory.getQuestion(scope.id);
                if(q) {
                    scope.question = q.question;
                    scope.options = q.options;
                    scope.answer = q.answer;
                    scope.answerMode = true;
                } else {
                    scope.quizOver = true;
                }
            };

            scope.assignTag = function(tag) {
                if(!$('input[name=answer]:checked').length) return;

                var ans = $('input[name=answer]:checked').val();
                // assign the tag to the character
                scope.characterTags.push(ans);

                // don't need to check if answer correct

                scope.answerMode = false;
            };

            scope.nextQuestion = function() {
                scope.id++;
                scope.getQuestion();
            };

            scope.returnJSON = function() {
                return scope.characterTags;
            };

            scope.reset();

        }
    }
});

// Factory returns a question when an id is given
app.factory('quizFactory', function() {
    var questions = [
        {
            question: "Are you an indoor or outdoor person?",
            options: ["Indoor", "Outdoor"]
        },
        {
            question: "What was your favourite subject in school?",
            options: ["Maths", "Biology", "English", "Sports"]
        },
        {
            question: "Are you...",
            options: ["Creative", "Logical", "Business-oriented", "Hands on"]
        }
    ];

    return {
        getQuestion: function(id) {
            if(id < questions.length) {
                return questions[id];
            } else {
                return false;
            }
        }
    };
});