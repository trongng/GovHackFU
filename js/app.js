var app = angular.module('quizApp', []);

/*
app.controller('degreesCtrl', function($scope, $http) {
    
  $http.get('data/degree.json').then(function(res) {
      $scope.degrees = {};
      $scope.$watch("degrees", function(newValue, oldValue){
                // console.log("old:" + oldValue);
                // console.info("new:" + newValue);
            });
      $scope.degrees = res.data[0]; // dictionary level
      // console.log($scope.degrees["Bachelor of Information Technology"]);
      
      for(var key in $scope.degrees) {
          var tagsArray = $scope.degrees[key]
          // console.log(key);
          // console.log(tagsArray);
        }

      console.log($scope.degrees);
  }); 

});
*/
app.directive('quiz', function(quizFactory) {
    return {
        controller: function($scope, $http) {
            $scope.degrees = {};
            // adds scope.degrees to the watch list
            $scope.$watch("degrees", function(newValue, oldValue){
                console.log("old:" + oldValue);
                console.info("new:" + newValue);
            });
            $scope.foo = 'ok';
            $http.get('data/degree.json').then(function(result) {
                    $scope.degrees = result.data[0]; // dictionary level
                    console.log($scope.degrees["Bachelor of Information Technology"]);

        // console.log($scope.degrees);
        });
            
        },
        restrict: 'AE',
        // require:"^ngController",
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
                    console.log(data[0]);
                    scope.JSON.degree = data[0].TITLE;
                    scope.JSON.faculty = data[0].FACULTY;
                    scope.JSON.career = ((data[0].CAREER_OPPORTUNITIES != "") ? data[0].CAREER_OPPORTUNITIES : "N/A");
                    scope.JSON.description = data[0].PROGRAM_OUTLINE;
                    // scope.descriptionHTML = sce.trustAsHtml(scope.JSON.description);

                    // console.log(scope.degreeJSON);
                });

            };

            scope.reset = function() {
                scope.inProgress = false;
                scope.characterTags = [];
                scope.charAttributes = {};
                scope.setHTML();
                scope.foo
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

            // stub
            scope.returnJSON = function() {
                return scope.characterTags;
            };

            scope.setHTML = function() {
                $("#career").html(scope.JSON.career);
                $("#description").html(scope.JSON.description);
            };

            // scope.reset();
            // scope.setHTML();
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
            question: "What was your favourite subject in high school?",
            options: ["Agriculture", "Business Education", "Art", "Computer","Dance","Criminal Science",
                "Health & Physical Education","Mathematics","Music","Chemistry","Physics","Biology","Geography"]
        },
        {
            question: "Which field/environment do you like to work in?",
            options: ["Built_Environment ", "Business", "Communication", "Creative_Arts","Cultural","Design",
                "Education","Engineering","Environment","Health","Information_Techonology"]
        },
        {
            question: "What activities are you interested in?",
            options: ["Artistic ", "Business", "People_Contact", "Creative_Arts","Mechanical","Scientific"]
        },
        {
            question: "What important to you?",
            options: ["Achievement", "Challenge", "Creativity", "Expertise","Independence","Leading", "Responsibility" ]
        },
        {
            question: "How would you describe working style?",
            options: ["Enthusiastic  ", "Imaginative", "Structured", "Logical" ]
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