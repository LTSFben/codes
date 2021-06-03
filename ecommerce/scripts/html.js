import { products } from "./products.js";
import { purchase, myPurchase } from "./cart.js";

function productsDOM() {
  products.forEach((e) => {
    const father = document.getElementsByClassName("products")[0];
    const product = document.createElement("div");
    product.classList.add("product");
    product.classList.add("style");
    const img = document.createElement("img");
    img.src = products[e.id].img;
    img.alt = `img product id: ${e.id}`;
    product.appendChild(img);
    const h2 = document.createElement("h2");
    h2.textContent = products[e.id].name;
    product.appendChild(h2);
    const p = document.createElement("p");
    p.textContent = `$${products[e.id].price}`;
    product.appendChild(p);
    const button = document.createElement("button");
    button.textContent = "ADD";
    button.classList.add("btn-add");
    button.id = e.id;
    button.addEventListener("click", (btn) => {
      purchase(btn);
      cartDOM(e);
    });
    product.appendChild(button);
    father.appendChild(product);
  });
}

function cartDOM(e) {
  let exist = myPurchase.find((element) => element.quantity > 1);
  if (exist) {
    console.log("exist!");
  } else {
    console.log("de not exist :(");
    const father = document.getElementsByClassName("cart")[0];
    const line = document.createElement("div");
    line.classList.add("line");
    line.classList.add("style");
    const pName = document.createElement("p");
    pName.classList.add("cart-child");
    pName.textContent = products[e.id].name;
    line.appendChild(pName);
    const div = document.createElement("div");
    const pQuantity = document.createElement("p");
    pQuantity.classList.add("cart-child");
    pQuantity.textContent = 1;
    const buttonSum = document.createElement("button");
    buttonSum.classList.add("btn-cart");
    buttonSum.textContent = "+";
    const buttonSub = document.createElement("button");
    buttonSub.classList.add("btn-cart");
    buttonSub.textContent = "-";
    const buttonErase = document.createElement("button");
    buttonErase.classList.add("btn-cart");
    buttonErase.textContent = "DEL";
    div.appendChild(pQuantity);
    div.appendChild(buttonSum);
    div.appendChild(buttonSub);
    div.appendChild(buttonErase);
    line.appendChild(div);
    const pTotal = document.createElement("p");
    pTotal.classList.add("cart-child");
    pTotal.textContent = products[e.id].price;
    line.appendChild(pTotal);
    father.appendChild(line);
  }
}

export { productsDOM, cartDOM };
