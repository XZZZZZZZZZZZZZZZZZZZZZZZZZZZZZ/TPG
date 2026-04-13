const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// השורה החדשה: מאפשרת לשרת להציג תמונות וקבצים שנמצאים בתיקייה
app.use(express.static(__dirname));

// מגיש את האתר - כל מי שנכנס לקישור השרת יראה את האתר של TPG
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// מפעיל את השרת
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 TPG Website is running on port ${PORT}`);
});
