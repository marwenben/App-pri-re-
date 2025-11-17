// ========== BASE CORAN COMPLET (114 SOURATES) ==========

const quranSurahs = [
    { number: 1, name: "Al-Fatiha", nameAr: "الفاتحة", verses: 7, revelation: "Mecque" },
    { number: 2, name: "Al-Baqara", nameAr: "البقرة", verses: 286, revelation: "Médine" },
    { number: 3, name: "Al-Imran", nameAr: "آل عمران", verses: 200, revelation: "Médine" },
    { number: 4, name: "An-Nisa", nameAr: "النساء", verses: 176, revelation: "Médine" },
    { number: 5, name: "Al-Ma'ida", nameAr: "المائدة", verses: 120, revelation: "Médine" },
    { number: 6, name: "Al-An'am", nameAr: "الأنعام", verses: 165, revelation: "Mecque" },
    { number: 7, name: "Al-A'raf", nameAr: "الأعراف", verses: 206, revelation: "Mecque" },
    { number: 8, name: "Al-Anfal", nameAr: "الأنفال", verses: 75, revelation: "Médine" },
    { number: 9, name: "At-Tawba", nameAr: "التوبة", verses: 129, revelation: "Médine" },
    { number: 10, name: "Yunus", nameAr: "يونس", verses: 109, revelation: "Mecque" },
    { number: 11, name: "Hud", nameAr: "هود", verses: 123, revelation: "Mecque" },
    { number: 12, name: "Yusuf", nameAr: "يوسف", verses: 111, revelation: "Mecque" },
    { number: 13, name: "Ar-Ra'd", nameAr: "الرعد", verses: 43, revelation: "Médine" },
    { number: 14, name: "Ibrahim", nameAr: "ابراهيم", verses: 52, revelation: "Mecque" },
    { number: 15, name: "Al-Hijr", nameAr: "الحجر", verses: 99, revelation: "Mecque" },
    { number: 16, name: "An-Nahl", nameAr: "النحل", verses: 128, revelation: "Mecque" },
    { number: 17, name: "Al-Isra", nameAr: "الإسراء", verses: 111, revelation: "Mecque" },
    { number: 18, name: "Al-Kahf", nameAr: "الكهف", verses: 110, revelation: "Mecque" },
    { number: 19, name: "Maryam", nameAr: "مريم", verses: 98, revelation: "Mecque" },
    { number: 20, name: "Ta-Ha", nameAr: "طه", verses: 135, revelation: "Mecque" },
    { number: 21, name: "Al-Anbiya", nameAr: "الأنبياء", verses: 112, revelation: "Mecque" },
    { number: 22, name: "Al-Hajj", nameAr: "الحج", verses: 78, revelation: "Médine" },
    { number: 23, name: "Al-Mu'minun", nameAr: "المؤمنون", verses: 118, revelation: "Mecque" },
    { number: 24, name: "An-Nur", nameAr: "النور", verses: 64, revelation: "Médine" },
    { number: 25, name: "Al-Furqan", nameAr: "الفرقان", verses: 77, revelation: "Mecque" },
    { number: 26, name: "Ash-Shu'ara", nameAr: "الشعراء", verses: 227, revelation: "Mecque" },
    { number: 27, name: "An-Naml", nameAr: "النمل", verses: 93, revelation: "Mecque" },
    { number: 28, name: "Al-Qasas", nameAr: "القصص", verses: 88, revelation: "Mecque" },
    { number: 29, name: "Al-Ankabut", nameAr: "العنكبوت", verses: 69, revelation: "Mecque" },
    { number: 30, name: "Ar-Rum", nameAr: "الروم", verses: 60, revelation: "Mecque" },
    { number: 31, name: "Luqman", nameAr: "لقمان", verses: 34, revelation: "Mecque" },
    { number: 32, name: "As-Sajda", nameAr: "السجدة", verses: 30, revelation: "Mecque" },
    { number: 33, name: "Al-Ahzab", nameAr: "الأحزاب", verses: 73, revelation: "Médine" },
    { number: 34, name: "Saba", nameAr: "سبإ", verses: 54, revelation: "Mecque" },
    { number: 35, name: "Fatir", nameAr: "فاطر", verses: 45, revelation: "Mecque" },
    { number: 36, name: "Ya-Sin", nameAr: "يس", verses: 83, revelation: "Mecque" },
    { number: 37, name: "As-Saffat", nameAr: "الصافات", verses: 182, revelation: "Mecque" },
    { number: 38, name: "Sad", nameAr: "ص", verses: 88, revelation: "Mecque" },
    { number: 39, name: "Az-Zumar", nameAr: "الزمر", verses: 75, revelation: "Mecque" },
    { number: 40, name: "Ghafir", nameAr: "غافر", verses: 85, revelation: "Mecque" },
    { number: 41, name: "Fussilat", nameAr: "فصلت", verses: 54, revelation: "Mecque" },
    { number: 42, name: "Ash-Shura", nameAr: "الشورى", verses: 53, revelation: "Mecque" },
    { number: 43, name: "Az-Zukhruf", nameAr: "الزخرف", verses: 89, revelation: "Mecque" },
    { number: 44, name: "Ad-Dukhan", nameAr: "الدخان", verses: 59, revelation: "Mecque" },
    { number: 45, name: "Al-Jathiya", nameAr: "الجاثية", verses: 37, revelation: "Mecque" },
    { number: 46, name: "Al-Ahqaf", nameAr: "الأحقاف", verses: 35, revelation: "Mecque" },
    { number: 47, name: "Muhammad", nameAr: "محمد", verses: 38, revelation: "Médine" },
    { number: 48, name: "Al-Fath", nameAr: "الفتح", verses: 29, revelation: "Médine" },
    { number: 49, name: "Al-Hujurat", nameAr: "الحجرات", verses: 18, revelation: "Médine" },
    { number: 50, name: "Qaf", nameAr: "ق", verses: 45, revelation: "Mecque" },
    { number: 51, name: "Adh-Dhariyat", nameAr: "الذاريات", verses: 60, revelation: "Mecque" },
    { number: 52, name: "At-Tur", nameAr: "الطور", verses: 49, revelation: "Mecque" },
    { number: 53, name: "An-Najm", nameAr: "النجم", verses: 62, revelation: "Mecque" },
    { number: 54, name: "Al-Qamar", nameAr: "القمر", verses: 55, revelation: "Mecque" },
    { number: 55, name: "Ar-Rahman", nameAr: "الرحمن", verses: 78, revelation: "Médine" },
    { number: 56, name: "Al-Waqi'a", nameAr: "الواقعة", verses: 96, revelation: "Mecque" },
    { number: 57, name: "Al-Hadid", nameAr: "الحديد", verses: 29, revelation: "Médine" },
    { number: 58, name: "Al-Mujadila", nameAr: "المجادلة", verses: 22, revelation: "Médine" },
    { number: 59, name: "Al-Hashr", nameAr: "الحشر", verses: 24, revelation: "Médine" },
    { number: 60, name: "Al-Mumtahana", nameAr: "الممتحنة", verses: 13, revelation: "Médine" },
    { number: 61, name: "As-Saff", nameAr: "الصف", verses: 14, revelation: "Médine" },
    { number: 62, name: "Al-Jumu'a", nameAr: "الجمعة", verses: 11, revelation: "Médine" },
    { number: 63, name: "Al-Munafiqun", nameAr: "المنافقون", verses: 11, revelation: "Médine" },
    { number: 64, name: "At-Taghabun", nameAr: "التغابن", verses: 18, revelation: "Médine" },
    { number: 65, name: "At-Talaq", nameAr: "الطلاق", verses: 12, revelation: "Médine" },
    { number: 66, name: "At-Tahrim", nameAr: "التحريم", verses: 12, revelation: "Médine" },
    { number: 67, name: "Al-Mulk", nameAr: "الملك", verses: 30, revelation: "Mecque" },
    { number: 68, name: "Al-Qalam", nameAr: "القلم", verses: 52, revelation: "Mecque" },
    { number: 69, name: "Al-Haqqa", nameAr: "الحاقة", verses: 52, revelation: "Mecque" },
    { number: 70, name: "Al-Ma'arij", nameAr: "المعارج", verses: 44, revelation: "Mecque" },
    { number: 71, name: "Nuh", nameAr: "نوح", verses: 28, revelation: "Mecque" },
    { number: 72, name: "Al-Jinn", nameAr: "الجن", verses: 28, revelation: "Mecque" },
    { number: 73, name: "Al-Muzzammil", nameAr: "المزمل", verses: 20, revelation: "Mecque" },
    { number: 74, name: "Al-Muddaththir", nameAr: "المدثر", verses: 56, revelation: "Mecque" },
    { number: 75, name: "Al-Qiyama", nameAr: "القيامة", verses: 40, revelation: "Mecque" },
    { number: 76, name: "Al-Insan", nameAr: "الإنسان", verses: 31, revelation: "Médine" },
    { number: 77, name: "Al-Mursalat", nameAr: "المرسلات", verses: 50, revelation: "Mecque" },
    { number: 78, name: "An-Naba", nameAr: "النبإ", verses: 40, revelation: "Mecque" },
    { number: 79, name: "An-Nazi'at", nameAr: "النازعات", verses: 46, revelation: "Mecque" },
    { number: 80, name: "Abasa", nameAr: "عبس", verses: 42, revelation: "Mecque" },
    { number: 81, name: "At-Takwir", nameAr: "التكوير", verses: 29, revelation: "Mecque" },
    { number: 82, name: "Al-Infitar", nameAr: "الإنفطار", verses: 19, revelation: "Mecque" },
    { number: 83, name: "Al-Mutaffifin", nameAr: "المطففين", verses: 36, revelation: "Mecque" },
    { number: 84, name: "Al-Inshiqaq", nameAr: "الإنشقاق", verses: 25, revelation: "Mecque" },
    { number: 85, name: "Al-Buruj", nameAr: "البروج", verses: 22, revelation: "Mecque" },
    { number: 86, name: "At-Tariq", nameAr: "الطارق", verses: 17, revelation: "Mecque" },
    { number: 87, name: "Al-A'la", nameAr: "الأعلى", verses: 19, revelation: "Mecque" },
    { number: 88, name: "Al-Ghashiya", nameAr: "الغاشية", verses: 26, revelation: "Mecque" },
    { number: 89, name: "Al-Fajr", nameAr: "الفجر", verses: 30, revelation: "Mecque" },
    { number: 90, name: "Al-Balad", nameAr: "البلد", verses: 20, revelation: "Mecque" },
    { number: 91, name: "Ash-Shams", nameAr: "الشمس", verses: 15, revelation: "Mecque" },
    { number: 92, name: "Al-Layl", nameAr: "الليل", verses: 21, revelation: "Mecque" },
    { number: 93, name: "Ad-Duha", nameAr: "الضحى", verses: 11, revelation: "Mecque" },
    { number: 94, name: "Ash-Sharh", nameAr: "الشرح", verses: 8, revelation: "Mecque" },
    { number: 95, name: "At-Tin", nameAr: "التين", verses: 8, revelation: "Mecque" },
    { number: 96, name: "Al-Alaq", nameAr: "العلق", verses: 19, revelation: "Mecque" },
    { number: 97, name: "Al-Qadr", nameAr: "القدر", verses: 5, revelation: "Mecque" },
    { number: 98, name: "Al-Bayyina", nameAr: "البينة", verses: 8, revelation: "Médine" },
    { number: 99, name: "Az-Zalzala", nameAr: "الزلزلة", verses: 8, revelation: "Médine" },
    { number: 100, name: "Al-Adiyat", nameAr: "العاديات", verses: 11, revelation: "Mecque" },
    { number: 101, name: "Al-Qari'a", nameAr: "القارعة", verses: 11, revelation: "Mecque" },
    { number: 102, name: "At-Takathur", nameAr: "التكاثر", verses: 8, revelation: "Mecque" },
    { number: 103, name: "Al-Asr", nameAr: "العصر", verses: 3, revelation: "Mecque" },
    { number: 104, name: "Al-Humaza", nameAr: "الهمزة", verses: 9, revelation: "Mecque" },
    { number: 105, name: "Al-Fil", nameAr: "الفيل", verses: 5, revelation: "Mecque" },
    { number: 106, name: "Quraysh", nameAr: "قريش", verses: 4, revelation: "Mecque" },
    { number: 107, name: "Al-Ma'un", nameAr: "الماعون", verses: 7, revelation: "Mecque" },
    { number: 108, name: "Al-Kawthar", nameAr: "الكوثر", verses: 3, revelation: "Mecque" },
    { number: 109, name: "Al-Kafirun", nameAr: "الكافرون", verses: 6, revelation: "Mecque" },
    { number: 110, name: "An-Nasr", nameAr: "النصر", verses: 3, revelation: "Médine" },
    { number: 111, name: "Al-Masad", nameAr: "المسد", verses: 5, revelation: "Mecque" },
    { number: 112, name: "Al-Ikhlas", nameAr: "الإخلاص", verses: 4, revelation: "Mecque" },
    { number: 113, name: "Al-Falaq", nameAr: "الفلق", verses: 5, revelation: "Mecque" },
    { number: 114, name: "An-Nas", nameAr: "الناس", verses: 6, revelation: "Mecque" }
];

// Charger le Coran
function loadQuranContent() {
    const content = document.getElementById('quran-content');
    
    content.innerHTML = `
        <div class="quran-list">
            ${quranSurahs.map(surah => `
                <div class="surah-card" onclick="openSurah(${surah.number})">
                    <div class="surah-number">${surah.number}</div>
                    <div class="surah-info">
                        <div class="surah-name">
                            <span class="name-fr">${surah.name}</span>
                            <span class="name-ar">${surah.nameAr}</span>
                        </div>
                        <div class="surah-details">
                            ${surah.verses} versets • ${surah.revelation}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Rechercher dans le Coran
function searchQuran() {
    const query = document.getElementById('quran-search-input').value.toLowerCase();
    const content = document.getElementById('quran-content');
    
    if (!query) {
        loadQuranContent();
        return;
    }
    
    const results = quranSurahs.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.nameAr.includes(query) ||
        s.number.toString() === query
    );
    
    if (results.length === 0) {
        content.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 20px;">Aucune sourate trouvée</p>';
        return;
    }
    
    content.innerHTML = `
        <div class="quran-list">
            ${results.map(surah => `
                <div class="surah-card" onclick="openSurah(${surah.number})">
                    <div class="surah-number">${surah.number}</div>
                    <div class="surah-info">
                        <div class="surah-name">
                            <span class="name-fr">${surah.name}</span>
                            <span class="name-ar">${surah.nameAr}</span>
                        </div>
                        <div class="surah-details">
                            ${surah.verses} versets • ${surah.revelation}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Ouvrir une sourate (lien externe)
function openSurah(number) {
    window.open(`https://quran.com/${number}`, '_blank');
}

console.log('✅ Base Coran chargée (114 sourates)');

// ========== FIN CORAN ==========
