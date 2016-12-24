// Beware of script concatenation
// "use strict";

var bio = {
  "name": "Nikos Athanasakis",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(+30)6957621670",
    "email": "emidekol@gmail.com",
    "github": "nikosath",
    "location": "Marousi, Greece"
  },
  "welcomeMessage": "Welcome!",
  "skills": ["Html", "Css", "JavaScript"],
  "biopic": "images/me.png"
};

bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#topContacts").append(formattedEmail + formattedMobile + formattedGithub + formattedLocation);

  $("#header").prepend(formattedName + formattedRole);
  $("#header").append(formattedBioPic + formattedWelcomeMsg);

  if (bio.skills.length > 0) {
    // console.log(bio.skills);
    $("#header").append(HTMLskillsStart);
    for (var skillNumber = 0; skillNumber < bio.skills.length; skillNumber++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillNumber]);
      $("#skills").append(formattedSkill);
    }
  }

};

var education = {
  "schools": [{
    "name": "Technological Educational Institute of Athens",
    "location": "Aigaleo, Greece",
    "degree": "Bachelor's degree",
    "majors": ["Software Engineering"],
    "dates": "2014",
    "url": "http://www.teiath.gr/?lang=en",
  }],
  "onlineCourses": [{
    "title": "Frontent Nanodegree",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }]
};

education.display = function () {
  // Preparing school entries
  this.schools.forEach(function (school) {
    var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);

    var formattedHTMLschoolMajors = (function () {
      var majors = "";
      school.majors.forEach(function (major) {
        majors = majors.concat(HTMLschoolMajor.replace("%data%", major));
      });
      return majors;
    }());

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolLocation + formattedHTMLschoolDegree + formattedHTMLschoolDates + formattedHTMLschoolMajors);
  });

  // Preparing online courses entries
  $("#education").append(HTMLonlineClasses);
  this.onlineCourses.forEach(function (course) {

    var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", course.url);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool + formattedHTMLonlineDates + formattedHTMLonlineURL);
  });

};

var work = {
  "jobs": [{
    "employer": "INOI Hotel",
    "title": "Reception Manager",
    "location": "Athens, Greece",
    "dates": "2010 – 2016",
    "description": "More like, the underpaid hotel manager."
  }]
};

work.display = function () {
  if (this.jobs.length > 0) {
    for (var jobIdx = 0; jobIdx < this.jobs.length; jobIdx++) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[jobIdx].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", this.jobs[jobIdx].title);
      var formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[jobIdx].dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", this.jobs[jobIdx].description);
      $(".work-entry:last").append(formattedEmployer + " " + formattedWorkTitle + formattedWorkDates + formattedWorkDescription);
    }
  }
};

var projects = {
  "projects": [{
      "title": "Resume Page",
      "dates": "2016",
      "description": "It's a resume page",
      "images": [
        "images/fry.jpg",
        "images/fry.jpg"
      ]
    }, {
      "title": "Future Project",
      "dates": "dates",
      "description": "description",
      "images": [
        "images/fry.jpg",
        "images/fry.jpg"
      ]
    }

  ]
};

projects.display = function () {
  // console.log(this.projects)
  this.projects.forEach(function (project) {
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
    var formattedHTMLprojectImages = (function () {
      var imgUrls = "";
      project.images.forEach(function (imgUrl) {
        imgUrls = imgUrls.concat(HTMLprojectImage.replace("%data%", imgUrl));
      });
      return imgUrls;
    }());

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedHTMLprojectTitle + formattedHTMLprojectDates + formattedHTMLprojectDescription + formattedHTMLprojectImages);
  });
};

bio.display();
work.display();
projects.display();
education.display();

// function capitalize(name) {
//   return name[0].toUpperCase() + name.slice(1).toLowerCase();
// 
// }
//
// function inName(name) {
//   var parts = name.split(" ");
//   return (capitalize(parts[0]) + " " + parts[1].toUpperCase());
// }

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

// Replicating contacts, from header to footer
$("#footerContacts").html($("#topContacts").html());
