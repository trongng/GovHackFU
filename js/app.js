var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
    return {
        controller: function($scope, $http) {
            $scope.degrees = {};
            
            // adds scope.degrees to the watch list
            $scope.$watch("degrees", function(newValue, oldValue){
                // console.log("old:" + oldValue);
                // console.info("new:" + newValue);
            });
            $scope.foo = 'ok';
            $http.get('data/degree.json').then(function(result) {
                    $scope.degrees = result.data[0]; // dictionary level
                    console.log($scope.degrees["Bachelor of Information Technology"]);
                
                for(key in $scope.degrees) {
                    
                }
        });
            
        },
        restrict: 'AE',
        scope: {},
        templateUrl: 'template.html',
        link: function(scope, elem, attrs) {
            scope.start = function() {
                scope.id = 0; // id of current question
                scope.quizOver = false;
                scope.battleOverlay = false;
                scope.inProgress = true;
                scope.getQuestion();

                scope.characterTags = [];
                scope.charAttributes = {'strength': 0};
                scope.attributes = {default: [6, 6, 6, 6, 6, 6]};   
                scope.JSON = {};

                /* Fed Uni CSV Fields
                 * ------------------
                 * TITLE
                 * FACULTY
                 * CAREER
                 * DESCRIPTION
                 * */
                d3.csv("data/PROGRAM_DATA_BACHELOR.csv", function(data) {
                    var index = 91; // geoscience
                    console.log(data[index]);
                    scope.JSON.degree = data[index].TITLE;
                    scope.JSON.faculty = data[index].FACULTY;
                    scope.JSON.career = ((data[index].CAREER_OPPORTUNITIES != "") ? data[0].CAREER_OPPORTUNITIES : "N/A");
                    scope.JSON.description = data[index].PROGRAM_OUTLINE;
                    // scope.descriptionHTML = sce.trustAsHtml(scope.JSON.description);

                });

            };

            scope.reset = function() {
                scope.inProgress = false;
                scope.battleOverlay = false;
                scope.characterTags = [];
                scope.charAttributes = {};
                // scope.recommendDegree();
            };
            
            scope.displayResults = function() {
                scope.setHTML();
            }
            
            scope.displayBattle = function() {
                scope.quizOver = false;
                scope.battleOverlay = true;
            }

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

            // stub
            scope.returnJSON = function() {
                return scope.characterTags;
            };

            scope.setHTML = function() {
                $("#degree").html(scope.JSON.degree);
                $("#faculty").html(scope.JSON.faculty);
                $("#career").html(scope.JSON.career);
                $("#description").html(scope.JSON.description);
            };
            
            scope.recommendDegree = function() {
                for(var tag in scope.characterTags) {
                    console.log(tag);
                }
            };
            
            console.log(scope.degrees);
            

            // scope.reset();
            // scope.setHTML();
        }


    }
});

// Factory returns a question when an id is given
app.factory('quizFactory', function() {
    var questions = [
        {
            question: "Adventurer, do you seek fortune in lands far away, or prefer the comfort of a warm tavern?",
            options: ["Lands far away", "Tavern"]
        } /*, 
        {
            question: "Where did you spend your time training for battle?",
            options: ["Agriculture", "Business Education", "Art", "Computer","Dance","Criminal Science",
                "Health & Physical Education","Mathematics","Music","Chemistry","Physics","Biology","Geography"]
        },
        {
            question: "Where did you spend time honing your skills?",
            options: ["Building Environment ", "Business", "Communication", "Creative Arts","Cultural","Design",
                "Education","Engineering","Environment","Health","Information Technology"]
        },
        {
            question: "What activities are you interested in?",
            options: ["Artistic ", "Business", "Social", "Creative Arts","Mechanical","Scientific"]
        },
        {
            question: "What important to you?",
            options: ["Achievement", "Challenge", "Creativity", "Expertise","Independence","Leading", "Responsibility" ]
        },
        {
            question: "How would you describe working style?",
            options: ["Enthusiastic", "Imaginative", "Structured", "Logical"]
        } */
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