function filterMembersByLevel(members, level) {
  return members.filter(member => member.memblevel === level);
}


fetch("members.json").then(response => response.json()).then(members => {

  const goldMembers = filterMembersByLevel(members, "gold");
  const silverMembers = filterMembersByLevel(members, "silver");

  const qualifiedMembers = goldMembers.concat(silverMembers);

 
  const selectedMembers = [];
  for (let i = 0; i < Math.min(3, qualifiedMembers.length); i++) {
    const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
    selectedMembers.push(qualifiedMembers[randomIndex]);
    qualifiedMembers.splice(randomIndex, 1);
  }

 
  const spotlightSection = document.createElement("section");
  spotlightSection.classList.add("banner");

  selectedMembers.forEach(member => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("member-card");
    memberCard.innerHTML = `
      <img src="${member.url}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.memblevel}</p>
    `;

    spotlightSection.appendChild(memberCard);
  });

  document.getElementById("banner").appendChild(spotlightSection);
});

const date = new Date();
const isMeetAndGreetTime = date.getDay() <= 3 && date.getHours() < 19;

if (date) {

  const banner = document.createElement("div");
  banner.classList.add("banner");


  banner.innerHTML = `
    <h3>Join us for the Chamber of Commerce Meet and Greet!</h3>
    <p>Wednesday at 7:00 PM</p>
    <button id="close-banner">Close</button>
  `;

  document.getElementById(".banner-container").appendChild(banner);

  document.getElementById(".close-banner").addEventListener("click", () => {
    banner.remove();
  });
}


