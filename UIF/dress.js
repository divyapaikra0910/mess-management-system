document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const sendOtpButton = document.getElementById("send-otp");
    const otpGroup = document.getElementById("otp-group");
    const verifyOtpButton = document.getElementById("verify-otp");
    const message = document.getElementById("message");

    sendOtpButton.addEventListener("click", function () {
        // Simulate sending OTP (in a real scenario, this would involve API calls)
        sendOtpButton.style.display = "none";
        otpGroup.style.display = "block";
        verifyOtpButton.style.display = "block";
        message.textContent = "OTP sent to your phone.";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulate OTP verification (in a real scenario, this would involve checking the OTP)
        const otp = document.getElementById("otp").value;

        if (otp === "123456") { // Replace with your actual OTP validation logic
            message.textContent = "Phone number verified!";
        } else {
            message.textContent = "Invalid OTP. Please try again.";
        }
    });
});
