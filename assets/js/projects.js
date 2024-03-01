function loadTableProjects(main, others) {
    let events = {};
    fetch('./assets/json/events.json')
        .then((response) => response.json())
        .then((json) => manageJSON(json, main, others));



}

function manageJSON(json, main, others) {
    let events = json;
    console.log(events)
    if (main && events && events.MainEvents)
        printMainTable(events.MainEvents);

    if (others && events && events.SmallEvents)
        printSmallTable(events.SmallEvents);


    if (others && events && events.UXUIProjects)
        printUXUITable(events.UXUIProjects);
}

function printMainTable(events) {
    let strHTML = "";
    strHTML += '<div class="d-none d-lg-flex row">'
    for (let i = 0; i < events.length; i++) {
        //DESKTOP

        strHTML += '<div class="col-12 col-md-6 col-xl-3" style="margin-bottom:35px" id="imgBig' + i + '">';
        //strHTML += '<a href="' + events[i].Url + '" target="_blank">';
        strHTML += '<a href="./details.html?code=' + events[i].Code + '">';
        strHTML += '<div class="card w-100" >';
        strHTML += '<div class="';
        if(events[i].Dark != true)
            strHTML += 'card-text-section ';
            else
                strHTML += 'card-text-section-dark ';
        strHTML += 'text-center" style="height:250px">';
        strHTML += '<table style="width:100%; height:100%"><tr><td><img class="card-img-big" style="max-height:200px; max-width:100%" src="./assets/images/events_logos/' + events[i].Logo + '"/></td></tr></table>';
        strHTML += '</div>';
        strHTML += '<hr style="color: white;">';
        strHTML += '<div class="w-100 card-text-section">';
        //Description
        if (events[i].Description) {
            strHTML += '<span class="card-title"><img class="icon" src="./assets/images/icons/medal.svg"/>' + events[i].Description + '</span>';

        }
        //Location
        if (events[i].Place) {
            strHTML += '<br/>';
            strHTML += '<span class="card-place"><img class="icon" src="./assets/images/icons/location.svg"/>' + events[i].Place + '</span>';
        }
        //Date
        if (events[i].Date) {
            strHTML += '<br/>';
            strHTML += '<span class="card-year"><img class="icon" src="./assets/images/icons/calendar.svg"/>' + events[i].Date + '</span>';

        }


        strHTML += '</div>';
        if (events[i] && events[i].SkillsUsed && events[i].SkillsUsed.length && events[i].SkillsUsed.length > 0) {
            strHTML += '<hr style="color:white"/>';
            strHTML += '<div class="w-100 card-text-section">';
            strHTML += '<div class="w-100 text-center">';
            for (let iSkill = 0; iSkill < events[i].SkillsUsed.length; iSkill++) {
                strHTML += '<img class="icon bottom-projects-icon" src="./assets/images/icons/' + events[i].SkillsUsed[iSkill].FileName + '"/>';

            }
            strHTML += '</div>';
            strHTML += '</div>';

        }
        strHTML += '</div>';
        strHTML += '</a>';
        strHTML += '</div>';




    }

    strHTML += '</div>';
    //MOBILE
    strHTML += '<div class="d-block d-lg-none">';
    strHTML += '<div class="slideshow-container">';
    for (let i = 0; i < events.length; i++) {
        strHTML += '<div class="mySlides fade">';
        strHTML += '<div class="w-70 text-center mlr-auto">';
        //strHTML += '<a href="' + events[i].Url + '" target="_blank">';
        strHTML += '<a href="./details.html?code=' + events[i].Code + '">';
        strHTML += '<div class="card w-100" >';
        strHTML += '<div class="';
        if(events[i].Dark != true)
            strHTML += 'card-text-section ';
            else
                strHTML += 'card-text-section-dark ';
        strHTML += 'text-center" style="height:250px">';
        strHTML += '<table style="width:100%; height:100%"><tr><td><img class="card-img-big" style="max-height:200px; max-width:100%" src="./assets/images/events_logos/' + events[i].Logo + '"/></td></tr></table>';
        strHTML += '</div>';
        strHTML += '<hr style="color: white;">';
        strHTML += '<div class="w-100 card-text-section text-start">';
        //Description
        if (events[i].Description) {
            strHTML += '<span class="card-title"><img class="icon" src="./assets/images/icons/medal.svg"/>' + events[i].Description + '</span>';

        }
        //Location
        if (events[i].Place) {
            strHTML += '<br/>';
            strHTML += '<span class="card-place"><img class="icon" src="./assets/images/icons/location.svg"/>' + events[i].Place + '</span>';
        }
        //Date
        if (events[i].Date) {
            strHTML += '<br/>';
            strHTML += '<span class="card-year"><img class="icon" src="./assets/images/icons/calendar.svg"/>' + events[i].Date + '</span>';

        }
        strHTML += '</div>';
        if (events[i] && events[i].SkillsUsed && events[i].SkillsUsed.length && events[i].SkillsUsed.length > 0) {
            strHTML += '<hr style="color:white"/>';
            strHTML += '<div class="w-100 card-text-section">';
            strHTML += '<div class="w-100 text-center">';
            for (let iSkill = 0; iSkill < events[i].SkillsUsed.length; iSkill++) {
                strHTML += '<img class="icon bottom-projects-icon" src="./assets/images/icons/' + events[i].SkillsUsed[iSkill].FileName + '"/>';

            }
            strHTML += '</div>';
            strHTML += '</div>';

        }
        strHTML += '</div>';
        strHTML += '</a>';
        strHTML += '</div>';
        strHTML += '</div>';
    }


    strHTML += '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>';
    strHTML += '<a class="next" onclick="plusSlides(1)">&#10095;</a>';
    strHTML += '</div>';
    strHTML += '<br>';
    strHTML += '<div style="text-align:center">';
    strHTML += '<span class="dot" onclick="currentSlide(1)">';
    strHTML += '</span>';
    strHTML += '<span class="dot" onclick="currentSlide(2)">';
    strHTML += '</span>';
    strHTML += '<span class="dot" onclick="currentSlide(3)">';
    strHTML += '</span>';
    strHTML += '<span class="dot" onclick="currentSlide(4)">';
    strHTML += '</span>';
    strHTML += '</div>';
    strHTML += '</div>';
    document.getElementById("mainProjects").innerHTML = strHTML;
    currentSlide(1);
}

function printSmallTable(events) {
    let strHTML = "";
    for (let i = 0; i < events.length; i++) {
        strHTML += '<div class="col-12 col-md-6 col-xl-4" style="margin-bottom:35px">';
        //strHTML += '<a href="' + events[i].Url + '" target="_blank">';
        strHTML += '<a href="./details.html?code=' + events[i].Code + '">';
        strHTML += '<div class="card w-100" >';
        strHTML += '<table style="table-layout:fixed;">';
        strHTML += '<tr>';
        strHTML += '<td class="w-40 text-center">';
        strHTML += '<div class="';
        if(events[i].Dark != true)
            strHTML += 'card-text-section ';
        else
            strHTML += 'card-text-section-dark ';
        strHTML += 'w-90">';

        strHTML += '<img class="card-img-small" src="./assets/images/events_logos/' + events[i].Logo + '"/>';
        strHTML += '</div></td>';
        strHTML += '<td class="w-60 card-text-section">';
        //Description
        strHTML += '<span class="card-title"><img class="icon" src="./assets/images/icons/medal.svg"/>' + events[i].Description + '</span>';
        strHTML += '<br/>';
        strHTML += '<span class="card-place"><img class="icon" src="./assets/images/icons/location.svg"/>' + events[i].Place + '</span>';
        strHTML += '<br/>';
        strHTML += '<span class="card-year"><img class="icon" src="./assets/images/icons/calendar.svg"/>' + events[i].Date + '</span>';

        strHTML += '</td>';
        strHTML += '</tr>';
        strHTML += '</table>';
        if (events[i] && events[i].SkillsUsed && events[i].SkillsUsed.length && events[i].SkillsUsed.length > 0) {
            strHTML += '<hr style="color:white"/>';
            strHTML += '<div class="w-100 text-center card-text-section">';
            for (let iSkill = 0; iSkill < events[i].SkillsUsed.length; iSkill++) {
                strHTML += '<img class="icon bottom-projects-icon" src="./assets/images/icons/' + events[i].SkillsUsed[iSkill].FileName + '"/>';

            }
            strHTML += '</div>';

        }
        strHTML += '</div>';
        strHTML += '</a>';
        strHTML += '</div>';
    }
    document.getElementById("smallProjects").innerHTML = strHTML;

}


function printUXUITable(events) {
    let strHTML = "";
    for (let i = 0; i < events.length; i++) {
        strHTML += '<div class="col-12 col-md-6 col-xl-4" style="margin-bottom:35px">';
        //strHTML += '<a href="./assets/documents/' + events[i].Document + '" target="_blank">';
        strHTML += '<a href="./details.html?code=' + events[i].Code + '">';
        strHTML += '<div class="card w-100" >';
        strHTML += '<table style="table-layout:fixed;">';
        strHTML += '<tr>';
        strHTML += '<td class="w-40 text-center">';

        strHTML += '<img class="card-img-small uxui-logo" src="./assets/images/events_logos/' + events[i].Logo + '"/>';
        strHTML += '</td>';
        strHTML += '<td class="w-60 card-text-section">';

        //Description
        strHTML += '<span class="card-title"><img class="icon" src="./assets/images/icons/medal.svg"/>' + events[i].Description + '</span>';
        strHTML += '<br/>';
        strHTML += '<span class="card-year"><img class="icon" src="./assets/images/icons/calendar.svg"/>' + events[i].Date + '</span>';
        strHTML += '</td>';
        strHTML += '</tr>';

        strHTML += '</table>';
        if (events[i] && events[i].SkillsUsed && events[i].SkillsUsed.length && events[i].SkillsUsed.length > 0) {
            strHTML += '<hr style="color:white"/>';
            strHTML += '<div class="w-100 text-center card-text-section">';
            for (let iSkill = 0; iSkill < events[i].SkillsUsed.length; iSkill++) {
                strHTML += '<img class="icon bottom-projects-icon" src="./assets/images/icons/' + events[i].SkillsUsed[iSkill].FileName + '"/>';

            }
            strHTML += '</div>';

        }
        strHTML += '</div>';
        strHTML += '</a>';
        strHTML += '</div>';
    }
    document.getElementById("uxuiProjects").innerHTML = strHTML;

}

function loadJsonFile() {
    var a = new XMLHttpRequest();
    a.open("GET", "./assets/json/events.json", true);
    a.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var json = window.JSON ? JSON.parse(this.reponseText) : eval("(" + this.responseText + ")");
                console.log(json)
                // do something with json
            }
            else alert("HTTP error " + this.status + " " + this.statusText);
        }
    }
    a.send();
}

function loadSelectedProjectJson() {
    let events = {};
    fetch('./assets/json/events.json')
        .then((response) => response.json())
        .then((json) => loadSelectedProject(json));



}

function loadSelectedProject(json) {
    let code = getSelectedProjectCode();
    let indexMain = -1;
    let indexOthers = -1;
    let indexUIUX = -1;

    indexMain = json.MainEvents.findIndex(object => {
        return object.Code == code;
    });

    if (indexMain == -1) {
        indexOthers = json.SmallEvents.findIndex(object => {
            return object.Code == code;
        });
    }

    if (indexOthers == -1) {
        indexUIUX = json.UXUIProjects.findIndex(object => {
            return object.Code == code;
        });
    }


    let project = {};
    if (indexMain != -1 || indexOthers != -1 || indexUIUX != -1) {
        if (indexMain != -1) project = json.MainEvents[indexMain];
        else if (indexOthers != -1) project = json.SmallEvents[indexOthers];
        else if (indexUIUX != -1) project = json.UXUIProjects[indexUIUX];

        let strHTML = "";

        strHTML += "<div class='col-12 col-lg-3 text-center'>"
        strHTML += "<img class='";
        if(project.Dark != true)
            strHTML += "logo-container ";
            else
        strHTML += "logo-container-dark ";
        strHTML += "project-logo-details' src='./assets/images/events_logos/" + project.Logo + "'/>";
        if (project.Url)
            strHTML += "<div class='details-page-link'><a class='details-page-link' href=" + project.Url + " target='_blank'><div class='button-link'>Visit Website <img class='icon' src='./assets/images/icons/open_new.svg'/></div></a></div>";
        if (project.CaseStudy)
            strHTML += "<div class='details-page-link'><a href=./assets/case_studies/" + project.CaseStudy + " target='_blank'><div class='button-link'>View Case Study <img class='icon' src='./assets/images/icons/case_study.png'/></div></a></div>";
        strHTML += "</div>";
        strHTML += "<div class='d-block d-lg-none col-12'><hr></div>";
        strHTML += "<div class='col-12 col-lg-9'>";

        if (project.Description)
            strHTML += "<h2>" + project.Description + "</h2>";
        if (project.Place)
            strHTML += "<h4><table><tr><td><img class=\"icon\" src=\"./assets/images/icons/location.svg\"/></td><td>" + project.Place + "</td></tr></table></h4>";
        if (project.Date)
            strHTML += "<h4><table><tr><td><img class=\"icon\" src=\"./assets/images/icons/calendar.svg\"/></td><td>" + project.Date + "</td></tr></table></h4>";


        if (project.SkillsUsed && project.SkillsUsed.length && project.SkillsUsed.length > 0) {
            strHTML += "<hr/><div class='skills-container-details'>";
            for (let iSkill = 0; iSkill < project.SkillsUsed.length; iSkill++) {
                strHTML += "<div class='skill-used skills-details text-center'><img class='icon bottom-projects-icon' src='./assets/images/icons/" + project.SkillsUsed[iSkill].FileName + "'/><br><span>" + project.SkillsUsed[iSkill].Description + "</span></div>";
            }
            strHTML += "</div>";
        }
        strHTML += "</div>";

        if(project.AdditionalDescription && project.AdditionalDescription != ''){
            strHTML += "<div class='col-12'><hr></div>";
            strHTML += "<h5>Description</h5>"
            strHTML += "<span>"+project.AdditionalDescription+"</span>";

        }

        document.getElementById("selectedProject").innerHTML = strHTML;
    }


}

function getSelectedProjectCode() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('code');
}