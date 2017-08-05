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
        $("#workExperience").prepend(HTMLworkStart)
        work.jobs.forEach(function(job) {
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
            "title": "Product manager on monitoring modernisation project for Activision online titles",
            "dates": "Feb 2016 to present.",
            "description": "Managing the transition from 7000+ hosts on Nagios with  Tier1 NOC technicians performing triage  to automated monitoring  pipelines based around Sensu and Stackstorm automation.Implemented Agile process, developed and delivered team upskilling and training, actively contributed code, and driving formal requirements gathering.",
            "images": [
                "images/fry.jpg"
            ]
        },
        {
            "title": "Developed Prototype Monitoring System",
            "dates": "Feb 2016-May 2015",
            "description": "Lead the design, build, support in production of an experimental, monitoring system using Sensu, docker, jenkins, stackstorm, and AWS. Prototype now being extended by a full team into a platform to support Call of Duty in 2017",
            "images": ["images/fry.jpg"]
        },
        {
            "title": "Built a suite of custom monitoring tooling",
            "dates": "July 2009-May 2014",
            "description": "Including writing software to federate 8 monitoring service dashboards into a single pane of glass.",
            "images": [
                "images/fry.jpg"
            ]
        }
    ]
};

projects.display = function() {
    // Display projects if they exist.
    if (hasContent(projects.projects)) {
        // Generate project detail:
        projects.projects.forEach(function(project) {


            
            $("#projects.last").append("<div class='project-item'> <h2>poop</h2></div>");
            $("#projects:last").append(HTMLprojectTitle.replace("%data%", project.title));
            $("#projects:last").append(HTMLprojectDates.replace("%data%", project.dates));
            $("#projects:last").append(HTMLprojectDescription.replace("%data%", project.description))
            // Support N project images. 
            project.images.forEach(function(imageUrl) {
                $("#projects:last").append(HTMLprojectImage.replace("%data%", imageUrl))
            })
            $("#projects.last").append('</div>')
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
        bio.skills.forEach(function(skill) {
            $("#glanceSkills:last").append(HTMLskills.replace("%data%", skill));
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
        "name": "Royal Melbourne Institue of Technology",
        "location": "New York",
        "degree": "Handicrafts",
        "majors": ["Computer Science"],
        "dates": "May 6th 2015 - May 12th 2015",
        "url": "http://rmit.edu.au/"
    }],
    "onlineCourses": [{
            "title": "Full Stack Nanodegree",
            "school": "Udacity",
            "dates": "Febuary 2016 - August 2017",
            "url": "udacity.com"
        },
        {
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "dates": "Feburary 2017 - Ongoing",
            "url": "udacity.com"
        }
    ]
}

education.display = function() {
    if (hasContent(education.schools)) {
        $("#education:first").append(HTMLschoolStart);

        education.schools.forEach(function(school) {
            $("#education:last").append(HTMLschoolName.replace("%data%", school.name));
            $("#education:last").append(HTMLschoolDates.replace("%data%", school.dates));
            $("#education:last").append(HTMLschoolLocation.replace("%data%", school.location));
            $("#education:last").append(HTMLschoolMajor.replace("%data%", school.degree));
            school.majors.forEach(function(major) {
                $("#education:last").append(HTMLschoolDegree.replace("%data%", major))
            })
        })
    }

    if (hasContent(education.onlineCourses)) {
        $("#education:last").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(course) {
                $("#education:last").append(HTMLonlineTitle.replace("%data%", course.title));
                $("#education:last").append(HTMLonlineSchool.replace("%data%", course.school));
                $("#education:last").append(HTMLonlineDates.replace("%data%", course.dates));
                $("#education:last").append(HTMLonlineURL.replace("%data%", course.url));

            }

        )
    }
}
education.display();

$("mapDiv").append(googleMap);