document.addEventListener("DOMContentLoaded", function() {
    // Get the payment method radio buttons
    const paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
  
    // Get the payment details sections
    const cardDetails = document.getElementById("card-details");
    const instaPayForm = document.getElementById("instapay-form");
    const paypalForm = document.getElementById("paypal-form");
    const fawryForm = document.getElementById("fawry-form");
  
    // Show or hide the appropriate payment details section based on the selected payment method
    function togglePaymentDetails() {
      if (this.value === "credit-card") {
        cardDetails.style.display = "block";
        instaPayForm.style.display = "none";
        paypalForm.style.display = "none";
        fawryForm.style.display = "none";
      } else if (this.value === "instapay") {
        cardDetails.style.display = "none";
        instaPayForm.style.display = "block";
        paypalForm.style.display = "none";
        fawryForm.style.display = "none";
      } else if (this.value === "paypal") {
        cardDetails.style.display = "none";
        instaPayForm.style.display = "none";
        paypalForm.style.display = "block";
        fawryForm.style.display = "none";
      } else if (this.value === "fawry") {
        cardDetails.style.display = "none";
        instaPayForm.style.display = "none";
        paypalForm.style.display = "none";
        fawryForm.style.display = "block";
      } else {
        cardDetails.style.display = "none";
        instaPayForm.style.display = "none";
        paypalForm.style.display = "none";
        fawryForm.style.display = "none";
      }
    }
  
    // Attach event listener to the payment method radio buttons
    paymentMethodRadios.forEach(function(radio) {
      radio.addEventListener("change", togglePaymentDetails);
    });
  
    // Hide the Fawry message initially
    const fawryMessage = document.getElementById("fawry-message");
    fawryMessage.style.display = "none";
  
    // Show the Fawry message when the user clicks on the Fawry payment method
    const fawryRadio = document.getElementById("fawry-radio");
    fawryRadio.addEventListener("change", function() {
      if (this.checked) {
        fawryMessage.style.display = "block";
      } else {
        fawryMessage.style.display = "none";
      }
    });
  });
  


  