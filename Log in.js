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