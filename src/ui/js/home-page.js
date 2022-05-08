const project1 = {
    name: "Annual Student Move-Out Donation Program",
    description: "During move-out, students donate their usable items through a bin collections system in their dormitory. Volunteers sort the donations during move-out (2-week period); grounds crew distributes and collects the donation bins and manages the donation pick-ups.", 
    location: "Villanova Campus", 
    status: true, 
    timeframe: "Spring 2022", 
    contacts: {"Al Motel": "albert.motel@villanova.edu"}
}   

const project2 = {
    name: "Integration of Sustainability into Courses",
    description: "Project to encourage the creation of more sustainability courses and integrate sustainability concepts into courses across all colleges. Efforts underway to develop a plan to integrate options for sustainability classes in every department by 2021; long-term goal to achieve 100% departmental coverage by 2030. ",
    location: "Villanova Campus", 
    status: true, 
    timeframe: "Spring 2022-Fall 2022", 
    contacts: {"Alfonso Ortega": "alfonso.ortega@villanova.edu", "Joseph Lennon": "joseph.lennon@villanova.edu"}
}  

const project3 = {
    name: "CRC Watershed Restoration",
    description: "CRC provides the opportunity for volunteers to assist with stream cleanups and education in local communities. This project specifically focuses on stream cleanup sites that are lacking in volunteers in the spring, and tree planting in the fall. Sometimes tasks include removal of invasive species and maintaining existing plantings. ",
    location: "Communities around Villanova", 
    status: true, 
    timeframe: "Spring 2022-Fall 2022", 
    contacts: {"Chris Townend": "chris.townend@villanova.edu"}
}   

const projects = [project1, project2, project3]; 

function main() {
    projectList = "";
    projects.forEach(function (project) {
        projectListItem = "<li class=project-list__item><div class=project-list__item--heading><a class=button href=project-page.html><h1 class=project-list__heading--left>";
        projectListItem += project.name;
        projectListItem += "</h1></a></div><div class=project-list__item--description><h4 align=center>"; 
        projectListItem += project.description; 
        projectListItem += "</div></li>"; 
        projectList += projectListItem; 
    });
    document.getElementById("project-list").innerHTML = projectList; 
}
main(); 


