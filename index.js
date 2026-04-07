// ฟังก์ชันปุ่ม Running
const runBtn = document.getElementById('runBtn');
const playStatus = document.getElementById('playStatus');
const btnText = document.querySelector('.btn-text');
let isRunning = false;

<script>
    document.getElementById("runBtn").addEventListener("click", function() {
        window.location.href = "index.html"
    });
</script>

runBtn.addEventListener('click', () => {
    isRunning = !isRunning;
    if (isRunning) {
        btnText.innerText = "RUNNING...";
        playStatus.className = "fa-solid fa-pause";
        runBtn.style.transform = "scale(0.96)";
        setTimeout(() => runBtn.style.transform = "scale(1)", 100);
    } else {
        btnText.innerText = "READY GO!";
        playStatus.className = "fa-solid fa-play";
    }
    
});

// ฟังก์ชันสลับเมนู Bottom Nav
const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        navBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// ฟังก์ชันจำลอง Animation กราฟแท่ง
const bars = document.querySelectorAll('.bar');
setInterval(() => {
    if (isRunning) {
        bars.forEach(bar => {
            const h = Math.floor(Math.random() * 60) + 30;
            bar.style.height = h + "%";
        });
    }
}, 800);