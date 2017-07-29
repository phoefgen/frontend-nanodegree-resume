// Helper functions
var hasContent = function(object){
  // Determine if an object is empty. 
  if (object.length > 0){
    return true
  } 
    return false
}

//work
// work contains an array of jobs. Each object in the jobs array should contain 
// an employer, title, location, dates worked and description strings.

var work = {
          	"jobs": [{
          			"employer": "Demonware",
          			"title": "Service Reliability Engineer",
          			"location": "Vancouver BC",
          			"dates": "May 2014-present.",
          			"description": "Keeping Activision Video games running"
          		},
          		{
          			"employer": "Radiant Communications",
          			"title": "Corporate Network support",
          			"location": "Vancouver BC",
           			"description": "Keeping the coffee flowing.",
          			"dates": "August 2013-May 2014"
          		},
          		{
          			"employer": "iiNet",
          			"title": "Network Administrator",
          			"location": "Perth Australia",
                "dates": "May 2011-June 2013",          			
                "description": "Keeping the internet running"
          		}
            ]
          };     

 work.display = function(){
   // Display only if jobs exist
   if (hasContent(work.jobs)) {
     $("#workExperience").prepend(HTMLworkStart)
     work.jobs.forEach(function (job){
       $("#workExperience").append(HTMLworkEmployer.replace("%data%", job.employer));
       $("#workExperience").append(HTMLworkTitle.replace("%data%", job.title));
       $("#workExperience").append(HTMLworkDates.replace("%data%", job.dates));
       $("#workExperience").append(HTMLworkLocation.replace("%data%", job.location));
       $("#workExperience").append(HTMLworkDescription.replace("%data%", job.description)); 
     })
   }
 }
 work.display()

 //projects
// projects contains an array of projects. Each object in the projects array 
// should contain title, dates and description strings, and an images array with
// URL strings for project images.

var projects = {
	             "projects": [{
	             		"title": "Design and Deployed new Monitoring System",
	             		"dates": "Feb 2016 to present.",
	             		"description": "Building an automation suite for Demonware monitoring.",
                  "images" : [
                    "https://unsplash.it/200?image=10" ]
	             	},
	             	{
	             		"title": "Built exo-suit",
	             		"dates": "Feb 2016-May 2015",
	             		"description": "Built a flying armoured suit.",
                  "images" : ["https://unsplash.it/200?image=14", 
                    "https://unsplash.it/200?image=11"]
	             	},
	             	{
	             		"title": "Exterminated all Rats in New York.",
	             		"dates": "July 2009-May 2014",
	             		"description": "It was a big job, but somebody had to do it.",
                  "images" : [ 
                    "https://unsplash.it/200?image=12"]
	             	}
	             ]
              };

projects.display = function(){
  // Display projects if they exist.
  if (hasContent(projects.projects)){
   $("#projects:first").append(HTMLprojectStart)
  
  // Generate project detail:
   projects.projects.forEach(function(project){
     $("#projects:last").append(HTMLprojectTitle.replace("%data%", project.title));
     $("#projects:last").append(HTMLprojectDates.replace("%data%", project.dates));
     $("#projects:last").append(HTMLprojectDescription.replace("%data%", project.description))

     // Support N project images. 
     project.images.forEach(function(imageUrl){
       $("#projects:first").append(HTMLprojectImage.replace("%data%", imageUrl))
     })
   })
  }
}
projects.display()


// bio
// bio contains name, role, welcomeMessage, and biopic strings, contacts object 
// and skills array of skill strings. The contacts object should contain a 
// mobile number, email address, github username, twitter handle and location. 
// The twitter property is optional.

var bio = {
	          "name": "Paul Hoefgen",
	          "role": "Automation Engineer",
	          "welcomeMessage": "Welcome to a webpage with stuff on it.",
	          "bioPic": "images/fry.jpg",
	          "contacts": {
	          	"mobile": "+1 204 228 0683",
	          	"email": "paul.hoefgen@gmail.com",
	          	"twitter": "@singlelement",
	          	"github": "phoefgen",
	          	"location": "Vancouver, BC"
	          },
	          "skills": ["eating",
	          	"sleeping",
	          	"breakfast"
	          ],
};

bio.display = function(){
  // Display static data:
  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header:last").append(HTMLheaderName.replace("%data%", bio.name));
  $("#header:last").append(HTMLheaderRole.replace("%data%", bio.role));
  $("#header:last").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  // Build top contacts string:
  var contactList =   bio.contacts.twitter + ' '
                    + bio.contacts.location + ' '
                    + 'Github: ' 
                    + bio.contacts.github
  $("#topContacts").append(contactList)
   
  // Display additional data:
  if (hasContent(bio.skills)) {
    $("#header:last").append(HTMLskillsStart);
    bio.skills.forEach(function (skill){
      $("#header:last").append(HTMLskills.replace("%data%", skill));
      })
  }
}
bio.display();

// education
// education contains an array of schools. Each object in the schools array 
// contains name, location, degree dates and url strings, and a majors array of 
// major strings. education also contains an onlineCourses array. Each object in
// the onlineCourses array should contain a title, school, dates and url 
// strings.

var education = {
                	"schools": [{
                			"name": "Trump University",
                			"location": "New York",
                			"majors": ["Womens Studies"
                			],
                			"dates": "May6th2015-May12th2015",
                			"url": "http://trumpuniversity.com/"
                		},
                		{
                			"name": "Trumpet College",
                			"location": "Boston",
                			"majors": ["Eating Steak",
                				"Advanced Womens Studies"
                			],
                			"dates": "May9th2016-May10th2016",
                			"url": "http://trumpetcollege.com/"
                		}
                	],
                	"onlineCourses": [{
                			"title": "Full Stack Nanodegree",
                			"school": "Udacity",
                			"dates": "May9th2016-May10th201",
                			"url": "udacity.com"
                		},
                		{
                			"title": "Front End Nanodegree",
                			"school": "Udacity",
                			"dates": "May9th2017-May10th2018",
                			"url": "udacity.com"
                		}
                	]
                }

education.display = function(){
  if (hasContent(education.schools)){
    $("#education:first").append(HTMLschoolStart);

    education.schools.forEach( function(school){
          $("#education:last").append(HTMLschoolName.replace("%data%", school.name));
          $("#education:last").append(HTMLschoolDates.replace("%data%", school.dates));
          $("#education:last").append(HTMLschoolLocation.replace("%data%", school.location));

          // Support Multiple majors
          if (school.majors.length === 1){
            $("#education:last").append(HTMLschoolMajor.replace("%data%", school.majors))
          } else {
          school.majors.forEach(function (degree){
                      $("#education:last").append(HTMLschoolDegree.replace("%data%", degree));
          }
          )}
    }
    )
  }
  if (hasContent(education.onlineCourses)){
    $("#education:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach( function(course){
      $("#education:last").append(HTMLonlineTitle.replace("%data%", course.title));
      $("#education:last").append(HTMLonlineSchool.replace("%data%", course.school));
      $("#education:last").append(HTMLonlineDates.replace("%data%", course.dates));
      $("#education:last").append(HTMLonlineURL.replace("%data%", course.url));

    }

    )
  }
}  
education.display();
