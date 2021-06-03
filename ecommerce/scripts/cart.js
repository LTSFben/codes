import { products } from "./products.js";

const myPurchase = [];

class CartItem {
  constructor(id, name, unitPrice, quantity) {
    this.id = id;
    this.name = name;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }
  get total() {
    return this.quantity * this.unitPrice;
  }
}

function purchase(btn) {
  const myBtn = btn.target.id;
  const cartItem = myPurchase.find((e) => e.id == products[myBtn].id);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    const myItem = new CartItem(
      products[myBtn].id,
      products[myBtn].name,
      products[myBtn].price,
      1
    );
    myPurchase.push(myItem);
  }
  let myTotal = 0;
  myPurchase.forEach((e) => {
    myTotal += e.total;
  });
  const total = document.getElementsByClassName("total")[0];
  total.textContent = `$${myTotal}`;
  // console.log(myPurchase);
}

export { purchase, myPurchase };
