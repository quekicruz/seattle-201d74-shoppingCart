/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('items')) || [];
  cart = new Cart(cartItems);
}

console.log(typeof(cart));

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbodyElem = document.getElementsByTagName('tbody')[0]; 
  tbodyElem.innerHtml = ' ';
<<<<<<< HEAD
}

=======

}
>>>>>>> 665836335d85cd84971432fa69bdd8ad62fc64c0

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let tbodyElem = document.getElementsByTagName('tbody')[0]; 

  // TODO: Iterate over the items in the cart
  for(let i=0; i < cart.length; i++) {

    // TODO: Create a TR
    let trElem = document.createElement('tr');

    // TODO: Create a TD for the delete link, quantity,  and the item
    let tdElemDelete = document.createElement('td');
    tdElemDelete.textContent = 'Delete Item';
    tdElemDelete.setAttribute("id", cart.items[i].product)
    console.log(cart.items[i].product);
    let tdElemQuantity = document.createElement('td');
    let tdElemLink = document.createElement('td');

    trElem.appendChild(tdElemDelete);
    trElem.appentChild(tdElemQuantity);
    trElem.appentChild(tdElemLink);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbodyElem.appendChild(trElem);
``
  // TODO: Find the table body
  let tbodyElem = document.getElementsByTagName('tbody')[0]; 

  // TODO: Iterate over the items in the cart
<<<<<<< HEAD
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }
=======
  for(let i=0; i < cart.length; i++) {

    // TODO: Create a TR
    let trElem = document.createElement('tr');

    // TODO: Create a TD for the delete link, quantity,  and the item
    let tdElemDelete = document.createElement('td');
    tdElemDelete.textContent = 'Delete Item';
    tdElemDelete.setAttribute("id", cart.items[i].product)
    console.log(cart.items[i].product);
    let tdElemQuantity = document.createElement('td');
    let tdElemLink = document.createElement('td');

    trElem.appendChild(tdElemDelete);
    trElem.appentChild(tdElemQuantity);
    trElem.appentChild(tdElemLink);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbodyElem.appendChild(trElem);

  }

>>>>>>> 665836335d85cd84971432fa69bdd8ad62fc64c0
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item


  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
