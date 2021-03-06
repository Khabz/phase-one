"use strict";

const add_to_cart = document.getElementById("add-to-cart");
const cart_modal = document.getElementById("cart-modal");
const selected_color = document.getElementById("selected-color");
const selected_color_modal = document.getElementById("selected-color-modal");
const detail_colors = document.querySelectorAll("#details-colors");
const agreeButton = document.getElementById("agreeButton");
const checkOutButton = document.getElementById("add-to-cart");

let selectedColorId;
let colorName;
let discountAmount;

// Select and change color
function selectColor(id) {
    switch (id) {
        case "electric_red":
            colorName = "Electric Red";
            discountAmount = "$16.95";
            break;
        case "purple":
            colorName = "Purple";
            discountAmount = "$12.73"
            break;
        case "black":
            colorName = "Purple";
            discountAmount = "$14.83"
            break;
        case "orange":
            colorName = "Orange";
            discountAmount = "$15.95"
            break;
        case "yellow":
            colorName = "Yellow";
            discountAmount = "$12.73"
            break;
        case "blue":
            colorName = "Blue";
            discountAmount = "$11.73"
            break;
        case "dark_green":
            colorName = "Dark Blue";
            discountAmount = "$10.73";
            // default:
            //     colorName = "";
            //     discountAmount = "$14.99"
    }
    selectedColorId = id;
    add_to_cart.disabled = false;
    selected_color.innerHTML = colorName;
    document.getElementById("discount-price").innerHTML = discountAmount
}

let count = 0;

function increment() {
    count++;
    document.getElementById("modal-counter").innerHTML = count;
    document.getElementById("quantity-counter").innerHTML = count;
}

function decrement() {
    if (count > 0) {
        count--;
        document.getElementById("modal-counter").innerHTML = count;
        document.getElementById("quantity-counter").innerHTML = count;
    }
}

// close cart modal when user clicks agree
agreeButton.addEventListener("click", function() {
    var text = "Checkout Now";
    document.getElementById("add-to-cart").innerHTML = text;
    $(".modal").modal("hide");
    populateDetailColors();
});

// populate selected colors with number of quantity
function populateDetailColors() {
    var i = 0;
    var node = document.getElementById(selectedColorId);
    while (i < count) {
        document.getElementById("details-colors").appendChild(node.cloneNode(true));
        i++;
    }
}

// Open Cart Modal
add_to_cart.addEventListener("click", function() {
    selected_color_modal.innerHTML = colorName;
    $("#cart_modal").modal("show");
});