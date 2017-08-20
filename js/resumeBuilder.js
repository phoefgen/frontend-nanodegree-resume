// Helper functions
var hasContent = function(object) {
    // Determine if an object is empty. 
    if (object.length > 0) {
        return true
    }
    return false
}

//work
// work contains an array of jobs. Each object in the jobs array should contain 
// an employer, title, location, dates worked and description strings.

var work = {
    "jobs": [{
            "employer": "Activision (Demonware) - Monitoring Team.",
            "title": "Service Reliability Engineer",
            "location": "Vancouver BC",
            "dates": "March 2017-present.",
            "description": "Building tooling, process, and teams to automate modern monitoring services. Developed new tooling, proposed and implemented process that has directly contributed to a 10x decrease in the number of actionable alerts. System design, and peer review of others system design and architecture. Lead product manager on a new observability platform based around data driven automation.",
        },
        {
            "employer": "Activision (Demonware) - NOC",
            "title": "Linux Sys Admin",
            "location": "Vancouver BC, Canada",
            "description": "Ensuring service quality for Call of Duty, Destiny, Diablo, Guitar Hero etc. Performed monitoring, break-fix and emergency management duties for over 7000 hosts",
            "dates": "May 2014-March 2017"
        },
        {
            "employer": " Radiant Communications",
            "title": "Support",
            "location": "Vancouver, BC, Canada",
            "dates": "August 2013-May 2014",
            "description": "Provide corporate network support for secure payment services. Technical Escalation point for last mile services (Fibre, SHDSL, MPLS/VPN, Juniper Routers)"
        },
        {
            "employer": "iiNet",
            "title": "Network Administrator.",
            "location": "Perth, BC, Australia.",
            "dates": "August 2013-May 2014",
            "description": "Detect, triage, and resolve all network and server issues at a National Australian ISP. Monitored and performed break-fix actions on all tech infrastructure (Servers and Network)"
        }
    ]
};

work.display = function() {
    // Display only if jobs exist
    if (hasContent(work.jobs)) {
        // Generate Job Section:
        $("#workExperience").append('<h2> Job History </h2><hr>');
        $("#workExperience").append('<div id="jobs-flexbox">');
        work.jobs.forEach(function(job) {
            // Generate job compnent strings
            var employer = HTMLworkEmployer.replace("%data%", job.employer);
            var title = HTMLworkTitle.replace("%data%", job.title);
            var dates = HTMLworkDates.replace("%data%", job.dates);
            var location = HTMLworkLocation.replace("%data%", job.location);
            var description = HTMLworkDescription.replace("%data%", job.description);
            // Create Job Card
        $("#jobs-flexbox:last").append("<div class='job-item'><div class='job-item-header'>" + title + employer + dates + location + "</div>" + description + "</div>")
        })
     //  $("#workExperience").append('</div>');
    };
}
work.display()

//projects
// projects contains an array of projects. Each object in the projects array 
// should contain title, dates and description strings, and an images array with
// URL strings for project images.

var projects = {
    "projects": [{
            "title": "Product managing the monitoring modernisation project for Demonware/Activision online titles",
            "dates": "Feb 2016 to present.",
            "description": "Managing the transition from 7000+ hosts on Nagios with  Tier1 NOC technicians performing triage  to automated monitoring  pipelines based around Sensu and Stackstorm automation.Implemented Agile process, developed and delivered team upskilling and training, actively contributed code, and driving formal requirements gathering.",
            "images": [
                "images/demonware_logo1.png"
            ]

        },
        {
            "title": "Developed Prototype Monitoring System",
            "dates": "Feb 2016-May 2015",
            "description": "Lead the design, build, support in production of an experimental, monitoring system using Sensu, docker, jenkins, stackstorm, and AWS. Prototype now being extended by a full team into a platform to support Call of Duty in 2017",
            "images": ["images/demonware_logo1.png"]
        },

        {
            "title": "Built a suite of custom monitoring tooling",
            "dates": "July 2009-May 2014",
            "description": "Including writing software to federate 8 monitoring service dashboards into a single pane of glass.",
            "images": [
                "images/demonware_logo1.png",
            ]

        }
    ]
};

projects.display = function() {
    // Display projects if they exist.
    if (hasContent(projects.projects)) {
        // Generate project Section:
        $("#projects:first").append('<h2> Recent Projects </h2><hr>')
        projects.projects.forEach(function(project) {
            // Generate project div component strings:
           var title = HTMLprojectTitle.replace("%data%", project.title);
           var dates = HTMLprojectDates.replace("%data%", project.dates);
           var description = HTMLprojectDescription.replace("%data%", project.description);

            // Support n project images. 
            var projectImages = '';
            project.images.forEach(function(imageUrl) {
                projectImages = projectImages + HTMLprojectImage.replace("%data%", imageUrl);
            });
            // Create a project.
            $("#projects:last").append("<div class='project-item'>" + projectImages + title + description + dates + "</div>");
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
    "role": "Process Engineer",
    "welcomeMessage": "Building Observability and process automation tooling at scale.",
    "bioPic": "images/me_jeep.jpg",
    "contacts": {
        "mobile": "+1 204 228 0683",
        "email": "paul.hoefgen@gmail.com",
        "twitter": "@singlelement",
        "github": "phoefgen",
        "location": "Vancouver, BC"
    },
    "skills": ["Python",
        "Flask",
        "Sensu",
        "Nagios",
        "Stackstorm",
        "Docker",
        "Product Mangagement",
        "Linux",
        "Process Automation",
        "System Design"
    ],
};

bio.display = function() {
    // Display static data:
    $("#headShot").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#headLine:last").append(HTMLheaderName.replace("%data%", bio.name));
    $("#headLine:last").append(HTMLheaderRole.replace("%data%", bio.role));

    // Build top contacts icons:
    $("#headLine").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    // Display additional data:
    if (hasContent(bio.skills)) {
        $("#glanceSkills:last").append(HTMLskillsStart);
        $("#skills-list:last").append(HTMLskills.replace("%data%", "Skills ["));
        bio.skills.forEach(function(skill) {
            $("#skills-list:last").append(HTMLskills.replace("%data%", skill));
        })
        $("#skills-list:last").append(HTMLskills.replace("%data%", ']'));

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
        "name": "Royal Melbourne Institue of Technology",
        "location": "Melbourne, Australia",
        "degree": "Computer Science",
        "majors": ["Handicrafts", "Woodworking"],
        "dates": "May 6th 2015 - May 12th 2015",
        "url": "http://rmit.edu.au/"
    },
    {
        "name": "Hogwarts",
        "location": "England",
        "degree": "Computer Magic",
        "majors": ["Reboots", "Virus Spells"],
        "dates": "May 6th 2015 - May 12th 2015",
        "url": "http://rmit.edu.au/"
    }],
    "onlineCourses": [{
            "title": "Full Stack Nanodegree",
            "school": "Udacity",
            "dates": "Febuary 2016 - August 2017",
            "url": "https://udacity.com"
        },
        {
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "dates": "Feburary 2017 - Ongoing",
            "url": "https://udacity.com"
        }
    ]
}

education.display = function() {
    if (hasContent(education.schools)) {
        $("#education:first").append('<h2>Education</h2><hr>')

        education.schools.forEach(function(school) {
            var name = HTMLschoolName.replace("%data%", school.name);
            var date = HTMLschoolDates.replace("%data%", school.dates);
            var location = HTMLschoolLocation.replace("%data%", school.location);
            var degree = HTMLschoolMajor.replace("%data%", school.degree);
            var minors = ''
            // Fixed API spec, adjusting variable names to correct  semantics.
            school.majors.forEach(function(major) {
            minors += major + ' ';
            })
            $("#education:last").append("<div class='education-item'><h6>Traditional Facility</h6>" + location + date + name + degree + "<h5>Minors in: " + minors + "</h5>"  + "</div>");
        })
    }
   if (hasContent(education.onlineCourses)) {
        education.onlineCourses.forEach(function(course) {
            var title = HTMLonlineTitle.replace("%data%", course.title);
            var dates = HTMLonlineDates.replace("%data%", course.dates);

            //Construct URL:
            var url = HTMLonlineURL.replace("%data%", course.url);
            var link = '<a href="%link%"> %school%'.replace('%link%', url);
            var school = HTMLonlineSchool.replace("%data%", course.school);
            link = link.replace('%school%', school);


            $("#education:last").append("<div class='education-item'><h6>Online/Certifications</h6>" + dates + school + title  + link + "</div>");
        })
    }
}
education.display();


$("#mapdiv").append(googleMap);