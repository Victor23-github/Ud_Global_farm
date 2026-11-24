const cartCount = document.querySelector(".cart-count");
const enquiryLink = document.querySelector(".cart-link");
const enquiryMessage = document.querySelector(".enquiry-message");
let enquiryItems = 0;

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    enquiryItems += 1;
    cartCount.textContent = enquiryItems;
    enquiryLink.setAttribute(
      "aria-label",
      `Enquiry list, ${enquiryItems} ${enquiryItems === 1 ? "item" : "items"}`,
    );
    enquiryMessage.textContent = `${button.dataset.product} added to your enquiry list.`;
  });
});

document
  .querySelector(".newsletter-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector(".form-message").textContent =
      "Thanks for your interest. This demo form is not connected to an inbox yet.";
    event.currentTarget.reset();
  });
