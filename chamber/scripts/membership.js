const baseURL = "https://dbonoso.github.io/wdd230/chamber/";
const linksURL = "https://dbonoso.github.io/wdd230/chamber/data/members.json";
const article = document.querySelector("article");

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
}

getMembers();

function displayMembers(members) {
    members = shuffleArray(members);
    let num = 0;
    members.forEach(memberIndex => {
        if (memberIndex.memblevel.toLowerCase() === "gold" || memberIndex.memblevel.toLowerCase() === "silver") {
            if (num < 3) {
                num++;
                const memberSection = document.createElement("section");
                memberSection.setAttribute("class", "directory-section index");
                const img = document.createElement("img");
                const title = document.createElement("h4");
                const address = document.createElement("p");
                const phone = document.createElement("p");
                const website = document.createElement("a");
                const level = document.createElement("h4");

                const br = document.createElement("br");

                img.setAttribute("src", baseURL + memberIndex.icon);
                img.setAttribute("alt", memberIndex.name);
                img.setAttribute("class", "directory-img");

                title.textContent = memberIndex.name;
                title.setAttribute("class", "title");
                address.textContent = memberIndex.address;
                phone.textContent = memberIndex.phone;

                website.textContent = "Website";
                website.setAttribute("href", memberIndex.url);
                website.setAttribute("target", "_blank");

                level.textContent = `Level: ${memberIndex.memblevel}`;

                memberSection.appendChild(img);
                memberSection





            }
        }