const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
let selectedCategoryNum = 5;
let showFAQAns = false;

function removeItemsBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShowClass() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

function selectItem(e) {
  removeItemsBorder();
  removeShowClass();
  this.classList.add("tab-border");
  // this.classList.add("show");
  // console.log(this);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // console.log(tabContentItem);
  tabContentItem.classList.add("show");
}

tabItems.forEach(item => item.addEventListener("click", selectItem));

/* Movie/TV Show Categories */
const categories = document.querySelectorAll(".select-category");
const carouselImages = document.querySelectorAll(".ci");

function showSelectedCategory(elmtID) {
  // Remove Category Title & Image style
  // category title
  categories.forEach(category =>
    category.classList.remove("carousel-titles-selected")
  );
  // Images
  carouselImages.forEach(img => img.classList.remove("show-carousel-img"));
  console.log(elmtID);
  console.log(categories[elmtID - 1]);
  categories[elmtID - 1].classList.add("carousel-titles-selected");
  carouselImages[elmtID - 1].classList.add("show-carousel-img");
}

function removeCategoryStyle(elmt) {
  // Remove Category Title & Image style
  // category title
  categories.forEach(category =>
    category.classList.remove("carousel-titles-selected")
  );
  // Images
  carouselImages.forEach(img => img.classList.remove("show-carousel-img"));
  const selCatIdNum = elmt.id.substring(3);
  selectedCategoryNum = selCatIdNum;
  console.log(selCatIdNum);
  document
    .getElementById(`ci-${selCatIdNum}`)
    .classList.add("show-carousel-img");
}

function selectedCategory(e) {
  removeCategoryStyle(this);
  // console.log(this);
  this.classList.add("carousel-titles-selected");
}

function NextCategory(e) {
  console.log(`Current Category No ${selectedCategoryNum}`);

  /* document
    .getElementById(`ci-${selectedCategoryNum + 1}`)
    .classList.add("show-carousel-img"); */
  if (selectedCategoryNum >= 10) {
    selectedCategoryNum = 1;
  } else {
    selectedCategoryNum = parseInt(selectedCategoryNum) + 1;
  }

  showSelectedCategory(selectedCategoryNum);
}

function PreviousCategory(e) {
  // console.log(`Selected Category ${selectedCategoryNum}`);
  if (selectedCategoryNum <= 1) {
    selectedCategoryNum = 10;
  } else {
    selectedCategoryNum = selectedCategoryNum - 1;
  }

  showSelectedCategory(selectedCategoryNum);
}

categories.forEach(category =>
  category.addEventListener("click", selectedCategory)
);

const previousCategory = document.getElementById("prevBtn");
const nextCategory = document.getElementById("nxtBtn");

previousCategory.addEventListener("click", PreviousCategory);
nextCategory.addEventListener("click", NextCategory);

showSelectedCategory(selectedCategoryNum);

// Expand/Collapse FAQ Answers

function showHideAnswer(e) {
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle("show");
  // this.firstChild.classList.toggle("hide");
  // this.lastChild.classList.toggle("show");
  console.log(this.childNodes);
  // this.childNodes[1].classList.toggle("hideIcon"); // Plus
  // this.childNodes[3].classList.toggle("showIcon"); // Times
  if (!showFAQAns) {
    this.childNodes[1].classList.remove("fa-plus");
    this.childNodes[1].classList.add("fa-times");
    showFAQAns = true;
  } else {
    // alert("Hello");
    this.childNodes[1].classList.remove("fa-times");
    this.childNodes[1].classList.add("fa-plus");
    showFAQAns = false;
  }
}

const faqBtns = document.querySelectorAll(".faq-question");

faqBtns.forEach(btn => btn.addEventListener("click", showHideAnswer));
