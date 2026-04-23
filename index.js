<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NU HealthyZerocarbon</title>
    <link rel="icon" href="image/Logo.png">
    <link rel="stylesheet" href="index.css">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>

    <div class="device-container">
        <header class="app-header">
            <div class="user-info">
                <div class="avatar-circle"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sariya" alt="">
                </div>
                <div class="welcome-msg">
                    <span>Welcome 👋</span>
                    <h2>Miss Sariya</h2>
                </div>
            </div>
            <div class="header-icons">
                <button class="icon-btn"><i class="fa-solid fa-search"></i></button>
                <button class="icon-btn notification"><i class="fa-solid fa-bell"></i></button>
            </div>
        </header>

        <div class="scroll-content">

            <section class="padding-x">
                <div class="challenge-card">
                    <div class="card-header">
                        <span class="tag"><i class="fa-solid fa-bolt"></i> Daily Challenge</span>
                        <i class="fa-solid fa-xmark close"></i>
                    </div>
                    <p>วิ่ง 30 วินาที ทำซ้ำ<br>แบบนี้ 5 รอบ</p>
                    <button class="done-btn">Done ></button>
                </div>
            </section>

            <section class="stats-section">
                <div class="padding-x title-row">
                    <h3>Today Stats</h3>
                    <a href="#">See All ></a>
                </div>
                <div class="horizontal-scroll">
                    <div class="stat-card white">
                        <span class="label">👣 Daily Steps</span>
                        <div class="graph-svg">
                            <svg viewBox="0 0 100 40">
                                <path d="M0 30 Q 25 5, 50 25 T 100 15" fill="none" stroke="#bdf1a3" stroke-width="4" />
                            </svg>
                        </div>
                        <div class="value">900 <small>Steps</small></div>
                    </div>
                    <div class="stat-card red">
                        <span class="label">🔥 Calories</span>
                        <div class="bar-chart">
                            <div class="bar" style="height: 40%"></div>
                            <div class="bar" style="height: 80%"></div>
                            <div class="bar" style="height: 60%"></div>
                            <div class="bar" style="height: 90%"></div>
                        </div>
                        <div class="value">150 <small>kkal</small></div>
                    </div>
                    <div class="stat-card pink">
                        <span class="label">❤️ Heart Rate</span>
                        <div class="pulse-line"></div>
                        <div class="value">80 <small>bpm</small></div>
                    </div>
                </div>
            </section>

            <section class="padding-x running-section">
                <h3>Running</h3>
                <a href="walk.html" style="text-decoration: none; color: inherit;">
                    <div class="ready-btn" id="runBtn">
                        <div class="play-icon"><i class="fa-solid fa-play" id="playStatus"></i></div>
                        <span class="btn-text">READY GO!</span>
                    </div>
                </a>
            </section>

            <section class="padding-x map-section">
                <div class="title-row">
                    <h3>Map</h3>
                    <a href="#">See All ></a>
                </div>
               <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <style>
        #map { 
            height: 300px; 
            width: 100%; 
            border-radius: 20px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
        }
    </style>
</head>
<body>
    <div id="map"></div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <script>
        const map = L.map('map').setView([13.7563, 100.5018], 15);

// 2. ดึงลายแผนที่ (ใช้ OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let marker, circle, path;
let trackLog = []; // เก็บพิกัดเพื่อวาดเส้นทางที่วิ่งผ่าน

// 3. ฟังก์ชันติดตามตำแหน่ง
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            const currentPos = [latitude, longitude];

            // อัปเดต Marker (จุดสีแดง/น้ำเงินในแผนที่)
            if (!marker) {
                marker = L.marker(currentPos).addTo(map);
                circle = L.circle(currentPos, { radius: accuracy, fillOpacity: 0.1 }).addTo(map);
                path = L.polyline([], {color: '#4CAF50', weight: 5}).addTo(map); // เส้นสีเขียวแบบแอปฯ วิ่ง
            } else {
                marker.setLatLng(currentPos);
                circle.setLatLng(currentPos);
                circle.setRadius(accuracy);
            }

            // วาดเส้นทางที่วิ่งผ่านมา (Tracing)
            trackLog.push(currentPos);
            path.setLatLngs(trackLog);

            // เลื่อนแผนที่ตามเราไปเรื่อยๆ
            map.setView(currentPos);
        },
        (error) => {
            console.error("Error getting location: ", error);
        },
        {
            enableHighAccuracy: true, // เปิด GPS เพื่อความแม่นยำสูง
            maximumAge: 0,
            timeout: 5000
        }
    );
} else {
    alert("เบราว์เซอร์ของคุณไม่รองรับการระบุตำแหน่ง");
}
    </script>
            </section>

            <section class="padding-x activity-section">
                <div class="title-row">
                    <h3>Recent Activity</h3>
                </div>
                <div class="activity-card">
                    <div class="date-badge">01 Jun</div>
                    <div class="activity-info">
                        <i class="fa-solid fa-clock"></i> 08:00 AM
                        <p>Jogging at Park</p>
                    </div>
                </div>
            </section>

            <div class="spacer"></div>
        </div>

        <nav class="bottom-nav">
            <button class="nav-btn active"><i class="fa-solid fa-house"></i></button>
            <div class="nav-center">
            </div>
            <button class="nav-btn"><i class="fa-solid fa-user"></i></button>
        </nav>
    </div>

    <script src="index.js"></script>
</body>

</html>