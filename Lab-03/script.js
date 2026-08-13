// 1. Three product objects
const item1 = { name: "Register", price: 150, qty: 2 };
const item2 = { name: "Scale", price: 30, qty: 5 };
const item3 = { name: "Diary", price: 110, qty: 1 };


// 2. Check prices are Numbers
console.log(typeof item1.price);
console.log(typeof item2.price);
console.log(typeof item3.price);


// Calculate subtotals
const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;


// Grand total
const grandTotal = subtotal1 + subtotal2 + subtotal3;


// 3. Tiered discount
const discountPercent = grandTotal >= 5000 ? 20 :
                        grandTotal >= 2000 ? 10 :
                        grandTotal >= 1000 ? 5 :
                        0;

const discountAmount = grandTotal * discountPercent / 100;

const afterDiscount = grandTotal - discountAmount;


// 4. GST 18%
const gst = afterDiscount * 18 / 100;

const finalAmount = afterDiscount + gst;


// 5. Free shipping
const freeShipping = afterDiscount >= 1500 || 3 >= 3;


// Bonus: Loyalty points
const loyaltyPoints = finalAmount / 100;


// 7. Receipt
const shippingStatus = freeShipping
    ? "FREE"
    : "₹100 shipping charge";

const receipt =
`----- SHOPPING RECEIPT -----

${item1.name}: ₹${subtotal1}
${item2.name}: ₹${subtotal2}
${item3.name}: ₹${subtotal3}

Grand Total: ₹${grandTotal.toFixed(2)}

Discount: ${discountPercent}%
Discount Amount: ₹${discountAmount.toFixed(2)}

After Discount: ₹${afterDiscount.toFixed(2)}

GST (18%): ₹${gst.toFixed(2)}

Final Payable: ₹${finalAmount.toFixed(2)}

Shipping: ${shippingStatus}

Loyalty Points: ${loyaltyPoints}
`;

console.log(receipt);

document.getElementById("receipt").textContent = receipt;