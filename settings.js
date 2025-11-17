// ═══════════════════════════════════════════════════════════════════
// SETTINGS.JS - GESTION COMPLÈTE DES PARAMÈTRES
// ═══════════════════════════════════════════════════════════════════

console.log('⚙️ settings.js chargé!');

// ═══════════════════════════════════════════════════════════════════
// VARIABLES GLOBALES
// ═══════════════════════════════════════════════════════════════════

let notificationsEnabled = false;
let adhanEnabled = false;
let selectedAdhan = 'adhan1.mp3';
let adhanVolume = 80;
let notifDelay = 0;
let adhanAudio = null;
let deferredPrompt = null;

// ═══════════════════════════════════════════════════════════════════
// INITIALISATION AUTOMATIQUE
// ═══════════════════════════════════════════════════════════════════

// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

function initAll() {
    console.log('🚀 Initialisation de settings.js...');
    
    // Charger les paramètres sauvegardés
    loadSettings();
    
    // Initialiser tous les systèmes
    initNotifications();
    initNotificationDelay();
    initAdhan();
    initHadithSearch();
    initPWA();
    
    // Vérifier les prières toutes les minutes
    setInterval(checkPrayerNotifications, 60000);
    
    console.log('✅ settings.js initialisé!');
}

// ═══════════════════════════════════════════════════════════════════
// CHARGEMENT DES PARAMÈTRES
// ═══════════════════════════════════════════════════════════════════

function loadSettings() {
    notificationsEnabled = localStorage.getItem('notifications') === 'true';
    adhanEnabled = localStorage.getItem('adhan') === 'true';
    selectedAdhan = localStorage.getItem('selectedAdhan') || 'adhan1.mp3';
    adhanVolume = parseInt(localStorage.getItem('volume') || '80');
    notifDelay = parseInt(localStorage.getItem('notifDelay') || '0');
    
    console.log('📂 Paramètres chargés:', {
        notifications: notificationsEnabled,
        adhan: adhanEnabled,
        selectedAdhan: selectedAdhan,
        volume: adhanVolume,
        delay: notifDelay
    });
}

// ═══════════════════════════════════════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════════

function initNotifications() {
    console.log('🔔 Init notifications...');
    
    const toggle = document.getElementById('notifications-toggle');
    const status = document.getElementById('notification-status');
    
    if (!toggle) {
        console.error('❌ Toggle notifications introuvable!');
        return;
    }
    
    // Appliquer l'état sauvegardé
    toggle.checked = notificationsEnabled;
    updateNotifStatus(status, notificationsEnabled);
    
    // Événement toggle
    toggle.addEventListener('change', async function() {
        console.log('🔔 Toggle:', this.checked);
        
        if (this.checked) {
            if ('Notification' in window) {
                const permission = await Notification.requestPermission();
                console.log('🔔 Permission:', permission);
                
                if (permission === 'granted') {
                    notificationsEnabled = true;
                    localStorage.setItem('notifications', 'true');
                    updateNotifStatus(status, true);
                    
                    // Test
                    new Notification('✅ Notifications activées!', {
                        body: 'Vous recevrez une notification pour chaque prière.',
                        icon: 'icon-192.png'
                    });
                } else {
                    this.checked = false;
                    updateNotifStatus(status, false);
                }
            } else {
                alert('Votre navigateur ne supporte pas les notifications.');
                this.checked = false;
            }
        } else {
            notificationsEnabled = false;
            localStorage.setItem('notifications', 'false');
            updateNotifStatus(status, false);
        }
    });
}

function updateNotifStatus(element, enabled) {
    if (!element) return;
    
    if (enabled) {
        element.textContent = '✅ Activé';
        element.style.color = '#4ade80';
    } else {
        element.textContent = '⭕ Désactivé';
        element.style.color = '#94a3b8';
    }
}

function initNotificationDelay() {
    console.log('⏰ Init délai...');
    
    const select = document.getElementById('notification-delay');
    if (!select) {
        console.error('❌ Select delay introuvable!');
        return;
    }
    
    select.value = notifDelay;
    
    select.addEventListener('change', function() {
        notifDelay = parseInt(this.value);
        localStorage.setItem('notifDelay', notifDelay);
        console.log('⏰ Délai:', notifDelay);
    });
}

// ═══════════════════════════════════════════════════════════════════
// ADHAN
// ═══════════════════════════════════════════════════════════════════

function initAdhan() {
    console.log('🎵 Init adhan...');
    
    const toggle = document.getElementById('adhan-toggle');
    const select = document.getElementById('adhan-select');
    const volumeSlider = document.getElementById('adhan-volume');
    const volumeValue = document.getElementById('volume-value');
    const testBtn = document.getElementById('test-adhan-btn');
    
    if (!toggle || !select || !volumeSlider || !testBtn) {
        console.error('❌ Éléments adhan introuvables!');
        return;
    }
    
    // Appliquer les valeurs sauvegardées
    toggle.checked = adhanEnabled;
    select.value = selectedAdhan;
    volumeSlider.value = adhanVolume;
    if (volumeValue) volumeValue.textContent = adhanVolume + '%';
    
    // Événements
    toggle.addEventListener('change', function() {
        adhanEnabled = this.checked;
        localStorage.setItem('adhan', adhanEnabled);
        console.log('🎵 Adhan:', adhanEnabled);
    });
    
    select.addEventListener('change', function() {
        selectedAdhan = this.value;
        localStorage.setItem('selectedAdhan', selectedAdhan);
        console.log('🎵 Adhan sélectionné:', selectedAdhan);
    });
    
    volumeSlider.addEventListener('input', function() {
        adhanVolume = parseInt(this.value);
        if (volumeValue) volumeValue.textContent = adhanVolume + '%';
        localStorage.setItem('volume', adhanVolume);
        if (adhanAudio) adhanAudio.volume = adhanVolume / 100;
    });
    
    testBtn.addEventListener('click', function() {
        console.log('🎵 Test adhan...');
        playAdhan(true);
    });
}

function playAdhan(isTest = false) {
    console.log('🎵 Lecture:', selectedAdhan, 'Volume:', adhanVolume);
    
    // Arrêter l'audio en cours
    if (adhanAudio) {
        adhanAudio.pause();
        adhanAudio.currentTime = 0;
    }
    
    // Créer nouvel audio
    adhanAudio = new Audio(selectedAdhan);
    adhanAudio.volume = adhanVolume / 100;
    
    // Jouer
    adhanAudio.play()
        .then(() => {
            console.log('✅ Adhan en lecture');
            if (isTest) {
                if ('Notification' in window && Notification.permission === 'granted') {
                    new Notification('🎵 Test de l\'adhan', {
                        body: 'L\'adhan est en cours de lecture...',
                        icon: 'icon-192.png'
                    });
                }
            }
        })
        .catch(err => {
            console.error('❌ Erreur adhan:', err);
            alert('❌ Impossible de lire l\'adhan. Vérifiez que les fichiers MP3 sont présents.');
        });
    
    // Fin de lecture
    adhanAudio.addEventListener('ended', function() {
        console.log('✅ Adhan terminé');
        adhanAudio = null;
    });
}

// ═══════════════════════════════════════════════════════════════════
// NOTIFICATIONS AUTOMATIQUES POUR LES PRIÈRES
// ═══════════════════════════════════════════════════════════════════

function checkPrayerNotifications() {
    if (!notificationsEnabled) return;
    
    console.log('🕌 Vérification de l\'heure...');
    
    // Récupérer les horaires depuis localStorage
    const city1Times = localStorage.getItem('city1-times');
    if (!city1Times) {
        console.log('⏰ Pas d\'horaires disponibles');
        return;
    }
    
    const timings = JSON.parse(city1Times);
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const prayers = [
        { name: 'Fajr', emoji: '🌅', label: 'Fajr (Aube)' },
        { name: 'Dhuhr', emoji: '☀️', label: 'Dhuhr (Midi)' },
        { name: 'Asr', emoji: '🌤️', label: 'Asr (Après-midi)' },
        { name: 'Maghrib', emoji: '🌆', label: 'Maghrib (Coucher)' },
        { name: 'Isha', emoji: '🌙', label: 'Isha (Nuit)' }
    ];
    
    prayers.forEach(prayer => {
        const prayerTime = timings[prayer.name];
        if (!prayerTime) return;
        
        const [hours, minutes] = prayerTime.split(':').map(Number);
        const prayerMinutes = hours * 60 + minutes;
        
        // Calculer le moment de notification
        const targetMinutes = prayerMinutes - notifDelay;
        
        if (currentMinutes === targetMinutes) {
            // Vérifier si déjà notifié aujourd'hui
            const notifKey = `notif-${prayer.name}-${notifDelay}-${now.toDateString()}`;
            if (localStorage.getItem(notifKey)) return;
            
            // Envoyer notification
            const body = notifDelay === 0
                ? `Il est temps de prier! (${prayerTime})`
                : `Prière dans ${notifDelay} minutes (${prayerTime})`;
            
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(prayer.emoji + ' ' + prayer.label, {
                    body: body,
                    icon: 'icon-192.png',
                    requireInteraction: true
                });
                
                console.log('🔔 Notification envoyée:', prayer.name);
            }
            
            // Jouer adhan si c'est l'heure exacte
            if (notifDelay === 0 && adhanEnabled) {
                console.log('🎵 Lecture automatique pour', prayer.name);
                setTimeout(() => playAdhan(false), 1000);
            }
            
            // Marquer comme notifié
            localStorage.setItem(notifKey, 'true');
        }
    });
}

// ═══════════════════════════════════════════════════════════════════
// RECHERCHE HADITHS
// ═══════════════════════════════════════════════════════════════════

function initHadithSearch() {
    console.log('🔍 Init recherche hadiths...');
    
    const searchInput = document.getElementById('hadith-search');
    if (!searchInput) {
        console.error('❌ Champ recherche introuvable!');
        return;
    }
    
    // Événement recherche
    searchInput.addEventListener('input', function() {
        const term = this.value.trim().toLowerCase();
        console.log('🔍 Recherche:', term);
        filterHadiths(term);
    });
    
    // Filtres
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const term = searchInput.value.trim().toLowerCase();
            filterHadiths(term);
        });
    });
}

function filterHadiths(searchTerm = '') {
    if (typeof loadHadiths !== 'function' || typeof displayHadiths !== 'function') {
        console.error('❌ Fonctions hadiths introuvables!');
        return;
    }
    
    const activeFilter = document.querySelector('.filter-btn.active');
    const filter = activeFilter ? activeFilter.dataset.filter : 'all';
    
    const hadiths = loadHadiths(filter, searchTerm);
    displayHadiths(hadiths);
    
    console.log(`✅ ${hadiths.length} hadiths affichés`);
}

// ═══════════════════════════════════════════════════════════════════
// PWA INSTALLATION
// ═══════════════════════════════════════════════════════════════════

function initPWA() {
    console.log('📱 Init PWA...');
    
    const installBtn = document.getElementById('install-pwa-btn');
    if (!installBtn) {
        console.error('❌ Bouton install introuvable!');
        return;
    }
    
    // Cacher par défaut
    installBtn.style.display = 'none';
    
    // Écouter beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('📱 beforeinstallprompt');
        e.preventDefault();
        deferredPrompt = e;
        installBtn.style.display = 'block';
    });
    
    // Bouton install
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) {
            alert('✅ L\'application est déjà installée!');
            return;
        }
        
        console.log('📱 Installation...');
        deferredPrompt.prompt();
        
        const { outcome } = await deferredPrompt.userChoice;
        console.log('📱 Résultat:', outcome);
        
        if (outcome === 'accepted') {
            console.log('✅ App installée');
        }
        
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
    
    // Déjà installé
    window.addEventListener('appinstalled', () => {
        console.log('✅ App installée');
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
}

// ═══════════════════════════════════════════════════════════════════
// EXPORTS GLOBAUX
// ═══════════════════════════════════════════════════════════════════

window.playAdhan = playAdhan;
window.filterHadiths = filterHadiths;

console.log('✅ settings.js chargé complètement!');
