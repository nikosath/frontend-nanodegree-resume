// Beware of script concatenation
"use strict"

$(document).click(function(event) {
  logClicks(event.pageX, event.pageY)
})

var bio = {
  "name": "Nikos Athanasakis",
  "role": "Web Developer",
  "contacts": {
    "email": "emidekol@gmail.com"
  },
  "bioPic": "images/me.png",
  "welcomeMsg": "Welcome!",
  "skills": ["Html", "Css", "JavaScript"]
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
        "images/me.png",
        "images/me.png"
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
        imgUrls.append(HTMLprojectImage.replace("%data%"), imgUrl)
      })
      return imgUrls
    }())

    $("#projects").append(HTMLprojectStart + formattedHTMLprojectTitle + formattedHTMLprojectDates + formattedHTMLprojectImages)
  })
}

projects.display()

if (bio.skills.length > 0) {
  console.log(bio.skills)
  $("#header").append(HTMLskillsStart)
  for (var skillNumber = 0; skillNumber < bio.skills.length; skillNumber++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillNumber])
    $("#skills").append(formattedSkill)
  }
}

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
console.log(inName(bio.name))
console.log(bio.name)

$("#main").append(internationalizeButton)

work.currentJob = "student"
work.employer = "myself"
work.years = "all my life"
work.city = "Athens, Greece"

var education = {}
education["lastSchool"] = "Technological Educational Institute of Athens"
education["graduationYear"] = "2014"
education["city"] = "Athens, Greece"

var formattedName = HTMLheaderName.replace("%data%", bio.name)
var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg)

// Using bracket and dot notation (as per Udacity's instructions)
var formattedCurrentJob = HTMLworkTitle.replace("%data%", work["currentJob"])
var formattedLastSchool = HTMLschoolName.replace("%data%", education.lastSchool)

formattedCurrentJob = work["currentJob"]
formattedLastSchool = education.lastSchool

$("#header").prepend(formattedBioPic)
$("#header").prepend(formattedWelcomeMsg)
$("#header").prepend(formattedEmail)
$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)
// $("#workExperience").append(formattedCurrentJob)
//
// $("#education").append(HTMLschoolStart)
// $(".education-entry").append(formattedLastSchool)
