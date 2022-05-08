const project1 = {
    name: "Annual Student Move-Out Donation Program",
    description: "During move-out, students donate their usable items through a bin collections system in their dormitory. Volunteers sort the donations during move-out (2-week period); grounds crew distributes and collects the donation bins and manages the donation pick-ups.", 
    location: "Villanova Campus", 
    status: true, 
    timeframe: "Spring 2022", 
    contacts: [{name: "Al Motel", email: "albert.motel@villanova.edu"}]
}  

function main() {
    document.title = project1.name; 
    document.getElementById("projectName").innerHTML = project1.name;
    document.getElementById("projectDescription").innerHTML = project1.description;
    document.getElementById("location").innerHTML = project1.location;
    document.getElementById("status").innerHTML = project1.status == true ? "In Progress" : "Not In Progress";
    document.getElementById("timeframe").innerHTML = project1.timeframe;
    contactList = "";
    project1.contacts.forEach(function (contact) {
        contactListItem = "<li class=secondary-list__item><div class=contacts-list__item-layout><h4>"; 
        contactListItem += contact.name;
        contactListItem += "</h4><h4>"; 
        contactListItem += contact.email; 
        contactListItem += "</h4></div></li>"; 
        contactList += contactListItem; 
    });
    document.getElementById("contacts-list").innerHTML = contactList;

}


main(); 