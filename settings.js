// ═══════════════════════════════════════════════════════════════════
// SETTINGS.JS - GESTION DES PARAMÈTRES
// ═══════════════════════════════════════════════════════════════════

console.log('⚙️ settings.js chargé');

// ═══════════════════════════════════════════════════════════════════
// VARIABLES GLOBALES
// ═══════════════════════════════════════════════════════════════════

let notificationsEnabled = false;
let adhanEnabled = false;
let selectedAdhan = 'adhan1.mp3';
let adhanVolume = 50;
let notificationDelay = '0'; // 0 = à l'heure exacte

// ═══════════════════════════════════════════════════════════════════
// SYSTÈME DE NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════════

async function initNotifications() {
    console.log('🔔 Initialisation des notifications...');
    
    const toggle = document.getElementById('notifications-toggle');
    const status = document.getElementById('notification-status');
    
    if (!toggle) {
        console.error('❌ Toggle notifications introuvable!');
        return;
    }
    
    // Charger l'état sauvegardé
    const saved = localStorage.getItem('notificationsEnabled');
    if (saved === 'true') {
        toggle.checked = true;
        notificationsEnabled = true;
        updateNotificationStatus(status, 'enabled');
    }
    
    // Événement toggle
    toggle.addEventListener('change', async function() {
        console.log('🔔 Toggle notifications:', this.checked);
        
        if (this.checked) {
            // Activer les notifications
            if ('Notification' in window) {
                const permission = await Notification.requestPermission();
                console.log('🔔 Permission:', permission);
                
                if (permission === 'granted') {
                    notificationsEnabled = true;
                    localStorage.setItem('notificationsEnabled', 'true');
                    updateNotificationStatus(status, 'enabled');
                    
                    // Afficher notification de test
                    showTestNotification();
                } else {
                    this.checked = false;
                    notificationsEnabled = false;
                    updateNotificationStatus(status, 'denied');
                }
            } else {
                alert('❌ Votre navigateur ne supporte pas les notifications!');
                this.checked = false;
            }
        } else {
            // Désactiver les notifications
            notificationsEnabled = false;
            localStorage.setItem('notificationsEnabled', 'false');
            updateNotificationStatus(status, 'disabled');
        }
    });
}

function updateNotificationStatus(statusElement, state) {
    if (!statusElement) return;
    
    switch(state) {
        case 'enabled':
            statusElement.textContent = '✅ Activé';
            statusElement.style.color = '#4ade80';
            break;
        case 'disabled':
            statusElement.textContent = '⭕ Désactivé';
            statusElement.style.color = '#94a3b8';
            break;
        case 'denied':
            statusElement.textContent = '❌ Refusé par le navigateur';
            statusElement.style.color = '#f87171';
            break;
    }
}

function showTestNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('✅ Notifications activées!', {
            body: 'Vous recevrez une notification pour chaque prière.',
            icon: 'icon-192.png',
            badge: 'icon-192.png'
        });
    }
}

// ═══════════════════════════════════════════════════════════════════
// SYSTÈME DE DÉLAI DE NOTIFICATION
// ═══════════════════════════════════════════════════════════════════

function initNotificationDelay() {
    console.log('⏰ Initialisation du délai de notification...');
    
    const delaySelect = document.getElementById('notification-delay');
    if (!delaySelect) {
        console.error('❌ Select notification-delay introuvable!');
        return;
    }
    
    // Charger le délai sauvegardé (par défaut 0 = à l'heure exacte)
    const savedDelay = localStorage.getItem('notificationDelay') || '0';
    delaySelect.value = savedDelay;
    notificationDelay = savedDelay;
    
    // Événement changement
    delaySelect.addEventListener('change', function() {
        notificationDelay = this.value;
        localStorage.setItem('notificationDelay', this.value);
        console.log('⏰ Délai de notification:', this.value, 'minutes');
    });
}

// ═══════════════════════════════════════════════════════════════════
// SYSTÈME D'ADHAN
// ═══════════════════════════════════════════════════════════════════

let adhanAudio = null;

function initAdhan() {
    console.log('🎵 Initialisation de l\'adhan...');
    
    const adhanToggle = document.getElementById('adhan-toggle');
    const adhanSelect = document.getElementById('adhan-select');
    const volumeSlider = document.getElementById('adhan-volume');
    const volumeValue = document.getElementById('volume-value');
    const testButton = document.getElementById('test-adhan-btn');
    
    if (!adhanToggle || !adhanSelect || !volumeSlider || !testButton) {
        console.error('❌ Éléments adhan introuvables!');
        return;
    }
    
    // Charger les paramètres sauvegardés
    const savedEnabled = localStorage.getItem('adhanEnabled');
    const savedAdhan = localStorage.getItem('selectedAdhan') || 'adhan1';
    const savedVolume = localStorage.getItem('adhanVolume') || '50';
    
    adhanEnabled = savedEnabled === 'true';
    selectedAdhan = savedAdhan;
    adhanVolume = parseInt(savedVolume);
    
    adhanToggle.checked = adhanEnabled;
    adhanSelect.value = selectedAdhan;
    volumeSlider.value = adhanVolume;
    volumeValue.textContent = adhanVolume + '%';
    
    console.log('🎵 Adhan chargé:', {
        enabled: adhanEnabled,
        selected: selectedAdhan,
        volume: adhanVolume
    });
    
    // Événement toggle adhan
    adhanToggle.addEventListener('change', function() {
        adhanEnabled = this.checked;
        localStorage.setItem('adhanEnabled', this.checked);
        console.log('🎵 Adhan activé:', this.checked);
    });
    
    // Événement sélection adhan
    adhanSelect.addEventListener('change', function() {
        selectedAdhan = this.value;
        localStorage.setItem('selectedAdhan', this.value);
        console.log('🎵 Adhan sélectionné:', this.value);
    });
    
    // Événement volume
    volumeSlider.addEventListener('input', function() {
        adhanVolume = parseInt(this.value);
        volumeValue.textContent = adhanVolume + '%';
        localStorage.setItem('adhanVolume', this.value);
        
        // Ajuster le volume si l'audio est en cours
        if (adhanAudio) {
            adhanAudio.volume = adhanVolume / 100;
        }
    });
    
    // Événement bouton test
    testButton.addEventListener('click', function() {
        console.log('🎵 Test de l\'adhan...');
        playAdhan(true); // true = mode test
    });
}

function playAdhan(isTest = false) {
    console.log('🎵 Lecture de l\'adhan:', selectedAdhan, 'Volume:', adhanVolume);
    
    // Arrêter l'audio en cours si existe
    if (adhanAudio) {
        adhanAudio.pause();
        adhanAudio.currentTime = 0;
    }
    
    // Créer nouvel audio (selectedAdhan contient déjà .mp3)
    adhanAudio = new Audio(selectedAdhan);
    adhanAudio.volume = adhanVolume / 100;
    
    // Jouer
    adhanAudio.play()
        .then(() => {
            console.log('✅ Adhan en cours de lecture');
            if (isTest) {
                // Notification de test
                if ('Notification' in window && Notification.permission === 'granted') {
                    new Notification('🎵 Test de l\'adhan', {
                        body: 'L\'adhan est en cours de lecture...',
                        icon: 'icon-192.png'
                    });
                }
            }
        })
        .catch(err => {
            console.error('❌ Erreur lecture adhan:', err);
            alert('❌ Erreur: Impossible de lire l\'adhan. Vérifiez que les fichiers adhan1.mp3 et adhan2.mp3 sont présents.');
        });
    
    // Événement fin de lecture
    adhanAudio.addEventListener('ended', function() {
        console.log('✅ Adhan terminé');
        adhanAudio = null;
    });
}

// ═══════════════════════════════════════════════════════════════════
// SYSTÈME DE NOTIFICATION AUTOMATIQUE POUR LES PRIÈRES
// ═══════════════════════════════════════════════════════════════════

function checkPrayerTime() {
    if (!notificationsEnabled) return;
    
    console.log('🕌 Vérification de l\'heure de prière...');
    
    // Récupérer les horaires actuels depuis le localStorage
    const city1Times = localStorage.getItem('city1-times');
    const city2Times = localStorage.getItem('city2-times');
    
    if (!city1Times) {
        console.log('⏰ Pas d\'horaires disponibles');
        return;
    }
    
    const timings = JSON.parse(city1Times);
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    // Parcourir les prières
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    prayers.forEach(prayer => {
        const prayerTime = timings[prayer];
        if (!prayerTime) return;
        
        const [hours, minutes] = prayerTime.split(':').map(Number);
        const prayerMinutes = hours * 60 + minutes;
        
        let shouldNotify = false;
        let notifTime = '';
        
        // Convertir le délai en nombre
        const delayMinutes = parseInt(notificationDelay);
        
        switch(delayMinutes) {
            case 0:
                // À l'heure exacte
                if (currentTime === prayerMinutes) {
                    shouldNotify = true;
                    notifTime = 'maintenant';
                }
                break;
            case 5:
                // 5 minutes avant
                if (currentTime === prayerMinutes - 5) {
                    shouldNotify = true;
                    notifTime = 'dans 5 minutes';
                }
                break;
            case 10:
                // 10 minutes avant
                if (currentTime === prayerMinutes - 10) {
                    shouldNotify = true;
                    notifTime = 'dans 10 minutes';
                }
                break;
            case 15:
                // 15 minutes avant
                if (currentTime === prayerMinutes - 15) {
                    shouldNotify = true;
                    notifTime = 'dans 15 minutes';
                }
                break;
        }
        
        if (shouldNotify) {
            // Vérifier si on a déjà notifié (pour éviter les doublons)
            const notifKey = `notified-${prayer}-${prayerMinutes}-${notificationDelay}`;
            const lastNotif = localStorage.getItem(notifKey);
            const today = now.toDateString();
            
            if (lastNotif !== today) {
                // Envoyer la notification
                sendPrayerNotification(prayer, prayerTime, notifTime);
                
                // Marquer comme notifié
                localStorage.setItem(notifKey, today);
                
                // Jouer l'adhan si c'est l'heure exacte (délai = 0)
                if (parseInt(notificationDelay) === 0 && adhanEnabled) {
                    console.log('🎵 Lecture automatique de l\'adhan pour', prayer);
                    setTimeout(() => playAdhan(false), 1000); // 1 sec de délai
                }
            }
        }
    });
}

function sendPrayerNotification(prayer, time, delay) {
    if ('Notification' in window && Notification.permission === 'granted') {
        const prayerNames = {
            'Fajr': '🌅 Fajr (Aube)',
            'Dhuhr': '☀️ Dhuhr (Midi)',
            'Asr': '🌤️ Asr (Après-midi)',
            'Maghrib': '🌆 Maghrib (Coucher)',
            'Isha': '🌙 Isha (Nuit)'
        };
        
        const title = prayerNames[prayer] || prayer;
        const body = delay === 'maintenant' 
            ? `Il est temps de prier! (${time})`
            : `Prière ${delay} (${time})`;
        
        console.log('🔔 Notification:', title, body);
        
        new Notification(title, {
            body: body,
            icon: 'icon-192.png',
            badge: 'icon-192.png',
            tag: `prayer-${prayer}`,
            requireInteraction: true
        });
    }
}

// Vérifier toutes les minutes
setInterval(checkPrayerTime, 60000); // 60 secondes

// ═══════════════════════════════════════════════════════════════════
// RECHERCHE DANS LES HADITHS
// ═══════════════════════════════════════════════════════════════════

function initHadithSearch() {
    console.log('🔍 Initialisation de la recherche de hadiths...');
    
    const searchInput = document.getElementById('hadith-search');
    if (!searchInput) {
        console.error('❌ Champ de recherche hadiths introuvable!');
        return;
    }
    
    // Événement de recherche
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        console.log('🔍 Recherche:', searchTerm);
        
        // Obtenir le filtre actif
        const activeFilter = document.querySelector('.filter-btn.active');
        const filter = activeFilter ? activeFilter.dataset.filter : 'all';
        
        // Charger et afficher les hadiths
        if (typeof loadHadiths === 'function' && typeof displayHadiths === 'function') {
            const hadiths = loadHadiths(filter, searchTerm);
            displayHadiths(hadiths);
            console.log(`✅ ${hadiths.length} hadiths trouvés`);
        } else {
            console.error('❌ Fonctions loadHadiths ou displayHadiths introuvables!');
        }
    });
    
    // Filtres
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Désactiver tous les filtres
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Activer ce filtre
            this.classList.add('active');
            
            // Obtenir la recherche
            const searchTerm = searchInput.value.trim();
            
            // Filtrer
            const filter = this.dataset.filter;
            console.log('🔍 Filtre:', filter);
            
            if (typeof loadHadiths === 'function' && typeof displayHadiths === 'function') {
                const hadiths = loadHadiths(filter, searchTerm);
                displayHadiths(hadiths);
                console.log(`✅ ${hadiths.length} hadiths affichés`);
            }
        });
    });
}

// ═══════════════════════════════════════════════════════════════════
// INSTALLATION PWA
// ═══════════════════════════════════════════════════════════════════

let deferredPrompt = null;

function initPWA() {
    console.log('📱 Initialisation PWA...');
    
    const installBtn = document.getElementById('install-pwa-btn');
    if (!installBtn) {
        console.error('❌ Bouton install-pwa-btn introuvable!');
        return;
    }
    
    // Cacher le bouton par défaut
    installBtn.style.display = 'none';
    
    // Écouter l'événement beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('📱 beforeinstallprompt déclenché');
        e.preventDefault();
        deferredPrompt = e;
        installBtn.style.display = 'block';
    });
    
    // Bouton d'installation
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) {
            alert('✅ L\'application est déjà installée ou votre navigateur ne supporte pas l\'installation.');
            return;
        }
        
        console.log('📱 Demande d\'installation...');
        deferredPrompt.prompt();
        
        const { outcome } = await deferredPrompt.userChoice;
        console.log('📱 Résultat:', outcome);
        
        if (outcome === 'accepted') {
            alert('✅ Application installée avec succès!');
        }
        
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
    
    // Vérifier si déjà installé
    window.addEventListener('appinstalled', () => {
        console.log('✅ Application installée');
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
}

// ═══════════════════════════════════════════════════════════════════
// INITIALISATION
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    console.log('⚙️ Initialisation de settings.js...');
    
    // Initialiser tous les systèmes
    initNotifications();
    initNotificationDelay();
    initAdhan();
    initHadithSearch();
    initPWA();
    
    // Première vérification de l'heure
    setTimeout(checkPrayerTime, 1000);
    
    console.log('✅ settings.js initialisé');
});

// Export pour utilisation externe
window.playAdhan = playAdhan;
window.checkPrayerTime = checkPrayerTime;
window.sendPrayerNotification = sendPrayerNotification;

console.log('✅ Module settings.js chargé');
