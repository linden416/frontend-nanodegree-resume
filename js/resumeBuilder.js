var bio = {
    "name":"Gordon Seeler",
    "role":"Web Developer",
    "contacts":{
        "email":"linden416@gmail.com",
        "github":"linden416",
        "mobile":"678.230.1122",
        "location":"Atlanta"
    },
    "picture URL":"images/gs.jpg",
    "welcome message":"IT Professionals-- Enable and Automate!",
    "skills":["CSS", "HTML", "JavaScript", "jQuery", "JSON", "Bootstrap", "Responsive Web Design"]
}

function displayBIO()
{
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio["picture URL"]));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLtwitter.replace("%data%", "&nbsp;"));
    $("#topContacts").append(HTMLblog.replace("%data%", "&nbsp;"));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    
    $("#header").append(HTMLWelcomeMsg.replace("%data%", bio["welcome message"]));

    if (bio.skills.length > 0)
    {
    	$("#header").append(HTMLskillsStart);
    	for (i = 0; i < bio.skills.length; i++)
    	{
    		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));	
    		console.log(HTMLskills.replace("%data%",bio.skills[i]));
        }
	}
}

var work = {
	"jobs":[
	 {
		"employer":"AT&amp;T",
		"title":"Principle Member of Tech Staff",
		"location":"Atlanta",
		"dates":"2006-present",
		"description":"Lead developer in group that customizes eGRC Governance, Risk, and Compliance solutions"
	},		
	{
		"employer":"Nielsen Media",
		"title":"Network Tech",
		"location":"Atlanta",
		"dates":"2003-2005",
		"description":"Supported remote office network, desktops, and servers"
	},
	{
		"employer":"Prudential",
		"title":"Lead Systems Analyst",
		"location":"Newark, NJ",
		"dates":"1986-2003",
		"description":"IT programmer, administrator, and team lead building and supporting new and existing systems"
	}
	]
}

function displayWORK()
{
    for(job in work.jobs)
    {
    	$("#workExperience").append(HTMLworkStart);
    	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer) +
				HTMLworkTitle.replace("%data%",work.jobs[job].title) +
                HTMLworkDates.replace("%data%", work.jobs[job].dates) +
                HTMLworkLocation.replace("%data%", work.jobs[job].location) +
                HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

var education = {
    "schools": [
        {
            "name": "Moravian College",
            "location": "Bethlehem, PA",
            "degree": "BS",
            "majors": ["CompSci/Econ"],
            "dates": "1983",
	        "url":"http://www.moravian.edu"
        },
        {
            "name": "Seton Hall",
            "location": "South Orange, NJ",
            "degree": "MS",
            "majors": ["InfoSys"],
            "dates": "2001",
	        "url": "http://www.shu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": 2015,
    	    "url": "https://www.udacity.com/course/c-ud804-nd"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
    	    "url": "https://www.udacity.com/course/c-ud304-nd"
        }
    ],
    "display": function(){
        for(school in education.schools)
        {
            var myHTMLschoolName = HTMLschoolName.replace("#", education.schools[school].url);
            myHTMLschoolName = myHTMLschoolName.replace("%data%",education.schools[school].name);

        	$("#education").append(HTMLschoolStart);
        	$(".education-entry:last").append(
                myHTMLschoolName  +
				HTMLschoolDegree.replace("%data%",education.schools[school].degree) +
                HTMLschoolDates.replace("%data%", education.schools[school].dates) +
                HTMLschoolLocation.replace("%data%", education.schools[school].location) +
                HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]));
        }

        $(".education-entry:last").append(HTMLonlineClasses);
        for(oschool in education.onlineCourses)
        {
            var myHTMLonlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[oschool].url);
            myHTMLonlineTitle = myHTMLonlineTitle.replace("%data%",education.onlineCourses[oschool].title);

        	$(".education-entry:last").append(
                myHTMLonlineTitle + 
				HTMLonlineSchool.replace("%data%",education.onlineCourses[oschool].school) +
                HTMLonlineDates.replace("%data%", education.onlineCourses[oschool].dates));  
            //    HTMLonlineURL.replace("%data%", education.onlineCourses[oschool].url));
        }
    }
}

var projects = {
   "projects": [
	{
		"title":"Git Reflections",
		"dates":"2014",
		"description":"My opinion on Git and GitHub",
		"images":[]
	},
	{
		"title":"Frontend Nanodegree Resume",
		"dates":"2014",
		"description":"A dynamically produced web page using JavaScript representing a person's resume.",
		"images":[]
	},
	{
		"title":"Recipes",
		"dates":"2014",
		"description":"A set of recipes",
		"images":[]
	}
   ],
   "display": function(){
    for(projX in projects.projects)
    {
    	$("#projects").append(HTMLprojectStart);
    	$(".project-entry:last").append(
				HTMLprojectTitle.replace("%data%",projects.projects[projX].title) +
                HTMLprojectDates.replace("%data%", projects.projects[projX].dates) +
                HTMLprojectDescription.replace("%data%", projects.projects[projX].description) +
                HTMLprojectImage.replace("%data%", projects.projects[projX].description));
    }
   }
}

displayBIO();
displayWORK();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


//************
function getRelationship(x, y) {
            if (arguments.length < 2)
            {
                if (typeof arguments[0] == 'string')
                {
                    return "Can't compare relationships because " + x + " and undefined are not numbers";
                }
                else if (typeof arguments[0] == 'undefined')
                {
                    return "Can't compare relationships because undefined and undefined are not numbers";    
                }
                else if (isNaN(arguments[0]))
                {
                    return "Can't compare relationships because NaN and undefined are not numbers";    
                }
                else if (typeof arguments[0] == 'number')
                {
                    return "Can't compare relationships because undefined is not a number";
                }
            }

            else if (arguments.length == 2)
            {
                if (typeof arguments[0] == 'string' && typeof arguments[1] == 'string')
                {
                   return "Can't compare relationships because " + x + " and " + y + " are not numbers";
                }

                else if (typeof arguments[0] == 'string' && !isNaN(arguments[1]) )
                {
                   return "Can't compare relationships because " + x + " is not a number";
                }

                else if (typeof arguments[0] == 'string' && 
                    (isNaN(arguments[1]) || typeof arguments[1] == 'undefined'))
                {
                   return "Can't compare relationships because " + x + " and undefined are not numbers";
                }

                else if (!isNaN(arguments[0])  &&  typeof arguments[1] == 'string')
                {
                   return "Can't compare relationships because " + y + " is not a number";
                }

                else if ((isNaN(arguments[0]) || typeof arguments[1] == 'undefined') &&
                    typeof arguments[1] == 'string')
                {
                   return "Can't compare relationships because undefined and " + y + " are not numbers";
                }

                else if (isNaN(arguments[0]) && typeof arguments[1] == 'undefined')
                {
                    return "Can't compare relationships because NaN and undefined are not numbers";    
                }
 
                else if (isNaN(arguments[0]) && isNaN(arguments[1]))
                {
                    return "Can't compare relationships because NaN and NaN are not numbers";    
                }

                else if (typeof arguments[0] == 'undefined' && typeof arguments[1] == 'undefined')
                {
                    return "Can't compare relationships because undefined and undefined are not numbers";    
                }
 
                else if (isNaN(arguments[0]) && typeof arguments[1] == 'undefined')
                {
                    return "Can't compare relationships because NaN and undefined are not numbers";    
                }
            }

             if (x < y) {
                return "<";
            }
            else if (x === y) {
                return "=";
            }
            else if (x > y) {
                return ">";
            }
}

// Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing strings 
//of names and returns an alphabetized array of names in lastname, firstname format.
function alphabetizer(_names) {
    var alphaRay = [];
    var sortedRay = [];
    var currIx = 0;
    var currVal = "";

    for(ix in _names)
    {
        var harry = _names[ix].split(" ");
        alphaRay[ix] = harry[1] + " " + harry[0];
    }

    for(ix in alphaRay){
        currVal = alphaRay[ix];

        for(z = ix; z < alphaRay.length; z++)
        {
            if (currVal <= alphaRay[z]) {
                console.log("ok");
            }
            else {
                //sortedRay[ix] = alphaRay[x];
                alphaRay[ix] = alphaRay[z];
                alphaRay[z] = currVal;
                currVal = alphaRay[ix];
            }
        }
    }
    return alphaRay;
}

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
  var resArr = [];
 
  for (var i in results.formattedResults.ruleResults) {
      
      var ruleName = results.formattedResults.ruleResults[i].localizedRuleName;
    
      if (typeof ruleName != 'undefined'){
          if (typeof ruleName == 'string'){
              if (ruleName){
                   resArr.push(ruleName);
              }
          }
      }
  }
    
  return resArr;  
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var stats = results.pageStats;
    var iTot = 0;

    for(var key in stats) {
        if (key.indexOf("Bytes") > -1){
            iTot = iTot + Number(stats[key]);
        }    
    }
    return iTot;
}
