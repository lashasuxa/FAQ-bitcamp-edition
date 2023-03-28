const api_url = "data.json";
let FAQsElement = document.getElementById("faqs");

// standard fetch starts here

// fetch(api_url)
//   .then((response) => response.json())
//   .then((faqs) => console.log(faqs));

//ends here

//this is the same code for more clear picture

// let getResponse = (response) => {
//   return response.json();
// };
// let getJsonFromResponse = (data) => {

//   console.log(data);
// };
// fetch(api_url).then(getResponse).then(getJsonFromResponse);

// clear picture ends here

// let FAQsElement = document.getElementById("faqs");

let createFaqElement = (faq) => {
  const faqElement = document.createElement("li");
  faqElement.textContent = faq.name;
  const faqElementDescription = document.createElement("p");
  faqElementDescription.textContent = faq.description;
  faqElement.appendChild(faqElementDescription);
  FAQsElement.appendChild(faqElement);
  const paragraphElement = faqElement.querySelector("p");
  if (faq.collapsed) {
    //this if statement adds hidden to the data.json data, we can handle number or queuing of open FAQs by changing data collapsed values
    paragraphElement.classList.add("hidden");
  }
  faqElement.addEventListener("click", (event) => {
    paragraphElement.classList.toggle("hidden");
  });
};

fetch(api_url)
  .then((response) => response.json())
  .then((faqs) => {
    for (const faq of faqs) {
      createFaqElement(faq);
    }
  });
