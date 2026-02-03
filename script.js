let watchId = null;
let lastPosition = null;
let totalDistance = 0;

const CAR_CO2_PER_KM = 120;

function startTracking() {
  if (!navigator.geolocation) {
    alert("อุปกรณ์ไม่รองรับ GPS");
    return;
  }

  watchId = navigator.geolocation.watchPosition(
    onSuccess,
    onError,
    {
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 10000
    }
  );
}

function stopTracking() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
  }
  watchId = null;
  lastPosition = null;
}

function onSuccess(position) {
  const { latitude, longitude, accuracy } = position.coords;

  // กรอง GPS ไม่แม่น
  if (accuracy > 30) return;

  if (lastPosition) {
    const distance = calculateDistance(
      lastPosition.latitude,
      lastPosition.longitude,
      latitude,
      longitude
    );

    // กรองค่ากระโดด (เกิน 20 เมตร)
    if (distance < 0.02) {
      totalDistance += distance;
      updateUI();
    }
  }

  lastPosition = { latitude, longitude };
}

function onError(error) {
  alert("GPS error: " + error.message);
}

function updateUI() {
  const carbonSaved = totalDistance * CAR_CO2_PER_KM;

  document.getElementById("distance").textContent =
    totalDistance.toFixed(3);

  document.getElementById("carbon").textContent =
    carbonSaved.toFixed(1);
}

// Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}