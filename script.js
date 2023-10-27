//    this logic is for slider----------------------------------
let flag = 0;
function slideShow(number) {
  let slides = document.querySelectorAll(".slide");

  if (number == slides.length) {
    flag = 0;
    number = 0;
  }
  if (number < 0) {
    flag = slides.length - 1;
    number = slides.length - 1;
  }

  for (let key of slides) {
    key.style.display = "none";
  }
  slides[number].style.display = "block";
}
slideShow(flag);

function controller(x) {
  flag = flag + x;
  slideShow(flag);
}

//    see more pe add event listener  //

let All = document.querySelector(".All");
let allList = document.querySelector(".allList");
let wrapper = document.querySelector(".wrapper");

All.addEventListener("click", () => {
  allList.classList.add("active");
});

let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  allList.classList.remove("active");
});

// fetching the data from the Api and store in the ui

let ProductsCard = document.querySelector(".ProductsCard");
let heroSection = document.querySelector(".heroSection");
let heroSectionTwo = document.querySelector(".heroSectionTwo");
let imageBox = document.querySelector(".imageBox");

async function callData() {
  const response = await fetch(`https://dummyjson.com/products`);
  const data = await response.json();

  console.log("response :-", data);
  data.products.forEach((element) => {
    // console.log(element);
    let newElement = document.createElement("a");
    newElement.setAttribute("href", `./details.html?id=${element.id}`);
    newElement.classList.add("card");
    newElement.innerHTML = `
        <img src=${element?.images[0]} alt=${element?.brand}/>
     <div class="configuration">
            <div class="discount">Upto ${element?.discountPercentage}%</div>
            <div class="title">${element?.title}</div>
     </div>
    <div class="desc">${element?.description}</div>`;
    ProductsCard.appendChild(newElement);

    // adding event listener on for each of the data
  });
}
callData();
