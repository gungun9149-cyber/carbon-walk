<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="Log in.css">
    <link rel="icon" href="image/Logo.png">
</head>
<body>

    <div class="background">
        <img class="icon" src="image/Logo.png" alt="Logo">
    </div>
    
    <div class="login-box">
        <h2>กรุณาเข้าสู่ระบบ</h2>
        <form onsubmit="return login()">
            <input type="text" id="username" placeholder="ชื่อผู้ใช้" required>
            <input type="password" id="password" placeholder="รหัสผ่าน" required>
            <button type="submit">Login</button>
            <p class="error" id="error"></p>
        </form>
    </div>
</body>
<script>
  function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // ตัวอย่าง (ตั้งค่าเอง)
    const correctUser = "admin";
    const correctPass = "1234";

    if (user === correctUser && pass === correctPass) {
      alert("เข้าสู่ระบบสำเร็จ!");
      window.location.href = "index.html"; // ไปหน้าอื่น
      return false;
    } else {
      document.getElementById("error").innerText = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
      return false;
    }
  }
</script>
</html>