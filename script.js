const api_url = "/data.json";
// fetch(api_url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// let FAQsElement = document.getElementById("faqs");
// console.log(FAQsElement);




let getResponse=(response)=>{
  return response.json();
}
let getJsonFromResponse=(faqs)=>{
  FontFace(const faq of faqs){
    createFaqElement(faq)
  }
}

fetch(api_url)
.then(getResponse)
.then(getJsonFromResponse)