function calculateBill() {
  const qty = parseFloat(document.getElementById("qty").value) || 0;
  const price = parseFloat(document.getElementById("price").value) || 0;

  const subtotal = qty * price;
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  document.getElementById("subtotal").innerText = "₹" + subtotal.toFixed(2);
  document.getElementById("gst").innerText = "₹" + gst.toFixed(2);
  document.getElementById("total").innerText = "₹" + total.toFixed(2);
}

function printBill() {
  window.print();
}
