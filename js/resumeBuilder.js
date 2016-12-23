// Beware of script concatenation
"use strict"

$(document).click(function(event) {
  logClicks(event.pageX, event.pageY)
})

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
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name)
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic)
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)

  $("#topContacts").append(formattedEmail + formattedMobile + formattedGithub + formattedLocation)

  $("#header").prepend(formattedName + formattedRole)
  $("#header").append(formattedBioPic + formattedWelcomeMsg)

  if (bio.skills.length > 0) {
    // console.log(bio.skills)
    $("#header").append(HTMLskillsStart)
    for (var skillNumber = 0; skillNumber < bio.skills.length; skillNumber++) {
      formattedSkill = formattedSkills.concat(HTMLskills.replace("%data%", bio.skills[skillNumber]))
      $("#skills").append(formattedSkill)
    }
  }

}
var education = {}
education["lastSchool"] =
education["graduationYear"] = "2014"
education["city"] = "Athens, Greece"

var education = {
  "schools": [
    {
      "name": "Technological Educational Institute of Athens",
      "location": "Aigaleo, Greece",
      "degree dates": "2014",
      "url": "http://www.teiath.gr/?lang=en",
      "majors": ["Software Engineering"]
    }
  ]
}
var work = {
  "jobs": [
    {
      "employer": "INOI Hotel",
      "title": "Reception Manager",
      "location": "Athens, Greece",
      "dates": "2010 – 2016",
      "description": "More like, the underpaid hotel manager."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "project1",
      "dates": "dates",
      "description": "description",
      "images": [
        "images/fry.jpg",
        "images/fry.jpg"
      ]
    },
    {
      "title": "project2",
      "dates": "dates",
      "description": "description",
      "images": [
        "images/fry.jpg",
        "images/fry.jpg"
      ]
    }

  ]
}

projects.display = function() {
  // console.log(this.projects)
  this.projects.forEach(function(project) {
    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title)
    var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates)
    var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description)
    var formattedHTMLprojectImages = (function(){
      var imgUrls = ""
      project.images.forEach(function(imgUrl) {
        imgUrls =  imgUrls.concat(HTMLprojectImage.replace("%data%", imgUrl))
      })
      return imgUrls
    }());

    $("#projects").append(HTMLprojectStart)
    $(".project-entry:last").append(formattedHTMLprojectTitle + formattedHTMLprojectDates + formattedHTMLprojectDescription + formattedHTMLprojectImages)
  })
}

bio.display()
projects.display()

displayWork(work)
// var displayWork = function(work) {
function displayWork(work) {
  if (work.jobs.length > 0) {
    for (var jobIdx = 0; jobIdx < work.jobs.length; jobIdx++) {
      $("#workExperience").append(HTMLworkStart)
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIdx].employer)
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIdx].title)
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobIdx].dates)
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIdx].description)
      $(".work-entry:last").append(formattedEmployer + " " + formattedWorkTitle + formattedWorkDates + formattedWorkDescription)
    }
  }
}
function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();

}
function inName(name) {
  var parts = name.split(" ")
  return (capitalize(parts[0]) + " " + parts[1].toUpperCase())
}

$("#mapDiv").append(googleMap)
$("#main").append(internationalizeButton)
