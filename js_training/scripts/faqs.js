const faqs_divs = document.querySelectorAll(".faqs_div");

faqs_divs.forEach((faq) => {
  faq.addEventListener("click", faqs);
});

function faqs(e) {
  const faqs_childrens = document.querySelectorAll(".faqs_childrens");
  faqs_childrens.forEach((children) => {
    children.classList.add("display");
  });
  const children = e.target.childNodes[1];
  children.classList.toggle("display");
}

export { faqs };
