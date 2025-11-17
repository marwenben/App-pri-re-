// ═══════════════════════════════════════════════════════════════════
// SYSTÈME DE NOTIFICATIONS ET ADHAN
// Support pour les 2 fichiers MP3 uploadés par l'utilisateur
// ═══════════════════════════════════════════════════════════════════

let notificationsEnabled = false;
let adhanEnabled = false;
let selectedAdhan = 'adhan1.mp3'; // Par défaut: adhan1
let adhanVolume = 0.8;
let notificationDelay = 0; // minutes avant la prière

// Élément audio
let adhanAudio = null;

// ═══════════════════════════════════════════════════════════════════
// INITIALISATION
// ═══════════════════════════════════════════════════════════════════

function initNotifications() {
    console.log('🔔 Initialisation du système de notifications...');
    
    // Charger les paramètres sauvegardés
    loadNotificationSettings();
    
    // Créer l'élément audio pour l'adhan
    adhanAudio = new Audio();
    adhanAudio.volume = adhanVolume;
    adhanAudio.src = selectedAdhan;
    
    // Vérifier si les notifications sont supportées
    if (!('Notification' in window)) {
        console.error('❌ Les notifications ne sont pas supportées par ce navigateur');
        return;
    }
    
    console.log('✅ Système de notifications chargé');
    console.log('✅ 2 adhans disponibles (adhan1.mp3, adhan2.mp3)');
    console.log('🎵 Adhan sélectionné:', selectedAdhan);
}

// ═══════════════════════════════════════════════════════════════════
// GESTION DES PARAMÈTRES
// ═══════════════════════════════════════════════════════════════════

function loadNotificationSettings() {
    // Charger depuis localStorage
    notificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
    adhanEnabled = localStorage.getItem('adhanEnabled') === 'true';
    selectedAdhan = localStorage.getItem('selectedAdhan') || 'adhan1.mp3';
    adhanVolume = parseFloat(localStorage.getItem('adhanVolume')) || 0.8;
    notificationDelay = parseInt(localStorage.getItem('notificationDelay')) || 0;
    
    // Mettre à jour l'interface
    updateSettingsUI();
}

function saveNotificationSettings() {
    localStorage.setItem('notificationsEnabled', notificationsEnabled);
    localStorage.setItem('adhanEnabled', adhanEnabled);
    localStorage.setItem('selectedAdhan', selectedAdhan);
    localStorage.setItem('adhanVolume', adhanVolume);
    localStorage.setItem('notificationDelay', notificationDelay);
    
    // Mettre à jour l'audio
    if (adhanAudio) {
        adhanAudio.src = selectedAdhan;
        adhanAudio.volume = adhanVolume;
    }
    
    console.log('💾 Paramètres sauvegardés');
}

function updateSettingsUI() {
    const notifToggle = document.getElementById('notifications-toggle');
    const adhanToggle = document.getElementById('adhan-toggle');
    const adhanSelect = document.getElementById('adhan-select');
    const volumeSlider = document.getElementById('adhan-volume');
    const volumeValue = document.getElementById('volume-value');
    const delaySelect = document.getElementById('notification-delay');
    
    if (notifToggle) notifToggle.checked = notificationsEnabled;
    if (adhanToggle) adhanToggle.checked = adhanEnabled;
    if (adhanSelect) adhanSelect.value = selectedAdhan;
    if (volumeSlider) {
        volumeSlider.value = adhanVolume * 100;
        if (volumeValue) volumeValue.textContent = Math.round(adhanVolume * 100) + '%';
    }
    if (delaySelect) delaySelect.value = notificationDelay;
}

// ═══════════════════════════════════════════════════════════════════
// DEMANDER LA PERMISSION
// ═══════════════════════════════════════════════════════════════════

async function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('❌ Les notifications ne sont pas supportées par votre navigateur');
        return false;
    }
    
    if (Notification.permission === 'granted') {
        console.log('✅ Permission notifications déjà accordée');
        return true;
    }
    
    if (Notification.permission !== 'denied') {
        console.log('📢 Demande de permission notifications...');
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('✅ Permission notifications accordée');
            return true;
        } else {
            console.log('❌ Permission notifications refusée');
            return false;
        }
    }
    
    console.log('❌ Permission notifications déjà refusée');
    return false;
}

// ═══════════════════════════════════════════════════════════════════
// ENVOYER UNE NOTIFICATION
// ═══════════════════════════════════════════════════════════════════

function sendPrayerNotification(prayerName, prayerTime) {
    if (!notificationsEnabled) {
        console.log('⏭️ Notifications désactivées');
        return;
    }
    
    if (Notification.permission === 'granted') {
        const title = `🕌 ${prayerName}`;
        const body = notificationDelay > 0 
            ? `Dans ${notificationDelay} minutes (${prayerTime})`
            : `Il est l'heure de prier (${prayerTime})`;
        
        const notification = new Notification(title, {
            body: body,
            icon: 'icon-192.png',
            badge: 'icon-192.png',
            tag: prayerName,
            requireInteraction: false,
            silent: false
        });
        
        notification.onclick = function() {
            window.focus();
            this.close();
        };
        
        console.log(`✅ Notification envoyée: ${prayerName} à ${prayerTime}`);
        
        // Jouer l'adhan si activé et délai = 0 (heure exacte)
        if (adhanEnabled && notificationDelay === 0) {
            console.log('🎵 Lancement de l\'adhan...');
            playAdhan();
        }
    } else {
        console.log('❌ Permission notifications non accordée');
    }
}

// ═══════════════════════════════════════════════════════════════════
// JOUER L'ADHAN
// ═══════════════════════════════════════════════════════════════════

function playAdhan() {
    if (!adhanAudio) {
        console.error('❌ Élément audio non initialisé');
        return;
    }
    
    try {
        adhanAudio.currentTime = 0;
        adhanAudio.volume = adhanVolume;
        
        const playPromise = adhanAudio.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log(`🎵 Adhan en cours de lecture (${selectedAdhan}, volume: ${Math.round(adhanVolume * 100)}%)`);
                })
                .catch(error => {
                    console.warn('⚠️ Erreur lecture adhan (interaction utilisateur requise):', error.message);
                    // Sur certains navigateurs, l'autoplay audio nécessite une interaction utilisateur
                });
        }
    } catch (error) {
        console.error('❌ Erreur lors de la lecture de l\'adhan:', error);
    }
}

function stopAdhan() {
    if (adhanAudio && !adhanAudio.paused) {
        adhanAudio.pause();
        adhanAudio.currentTime = 0;
        console.log('⏹️ Adhan arrêté');
    }
}

// ═══════════════════════════════════════════════════════════════════
// PLANIFIER LES NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════════

function schedulePrayerNotifications(prayerTimes, cityName) {
    if (!notificationsEnabled) {
        console.log('⏭️ Notifications désactivées, pas de planification');
        return;
    }
    
    console.log(`⏰ Planification des notifications pour ${cityName}...`);
    
    const now = new Date();
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    let scheduled = 0;
    
    prayers.forEach(prayer => {
        const prayerTime = prayerTimes[prayer];
        if (!prayerTime) return;
        
        const [hours, minutes] = prayerTime.split(':').map(Number);
        const prayerDate = new Date(now);
        prayerDate.setHours(hours, minutes - notificationDelay, 0, 0);
        
        // Si l'heure est passée, programmer pour demain
        if (prayerDate < now) {
            prayerDate.setDate(prayerDate.getDate() + 1);
        }
        
        const timeUntilPrayer = prayerDate - now;
        
        // Planifier seulement si dans les prochaines 24h
        if (timeUntilPrayer > 0 && timeUntilPrayer < 24 * 60 * 60 * 1000) {
            setTimeout(() => {
                sendPrayerNotification(prayer, prayerTime);
            }, timeUntilPrayer);
            
            const minutesUntil = Math.round(timeUntilPrayer / 60000);
            console.log(`  ✅ ${prayer} programmé pour ${prayerTime} (dans ${minutesUntil} min)`);
            scheduled++;
        }
    });
    
    if (scheduled > 0) {
        console.log(`✅ ${scheduled} notifications programmées pour ${cityName}`);
    } else {
        console.log(`⏭️ Aucune notification à programmer pour ${cityName}`);
    }
}

// ═══════════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le système
    initNotifications();
    
    // ──────────────────────────────────────────────────────────────
    // TOGGLE NOTIFICATIONS
    // ──────────────────────────────────────────────────────────────
    const notifToggle = document.getElementById('notifications-toggle');
    if (notifToggle) {
        notifToggle.addEventListener('change', async function() {
            if (this.checked) {
                const granted = await requestNotificationPermission();
                if (granted) {
                    notificationsEnabled = true;
                    saveNotificationSettings();
                    alert('✅ Notifications activées! Vous recevrez des alertes pour chaque prière.');
                } else {
                    this.checked = false;
                    alert('❌ Veuillez autoriser les notifications dans votre navigateur pour utiliser cette fonctionnalité.');
                }
            } else {
                notificationsEnabled = false;
                saveNotificationSettings();
                console.log('❌ Notifications désactivées');
            }
        });
    }
    
    // ──────────────────────────────────────────────────────────────
    // TOGGLE ADHAN
    // ──────────────────────────────────────────────────────────────
    const adhanToggle = document.getElementById('adhan-toggle');
    if (adhanToggle) {
        adhanToggle.addEventListener('change', function() {
            adhanEnabled = this.checked;
            saveNotificationSettings();
            console.log(adhanEnabled ? '✅ Adhan activé' : '❌ Adhan désactivé');
        });
    }
    
    // ──────────────────────────────────────────────────────────────
    // SÉLECTION ADHAN
    // ──────────────────────────────────────────────────────────────
    const adhanSelect = document.getElementById('adhan-select');
    if (adhanSelect) {
        adhanSelect.addEventListener('change', function() {
            selectedAdhan = this.value;
            saveNotificationSettings();
            console.log('🎵 Adhan changé:', selectedAdhan);
            
            // Afficher un message à l'utilisateur
            const adhanName = selectedAdhan === 'adhan1.mp3' ? 'Adhan 1 (Long - 5.9 MB)' : 'Adhan 2 (Court - 285 KB)';
            console.log(`✅ ${adhanName} sélectionné`);
        });
    }
    
    // ──────────────────────────────────────────────────────────────
    // VOLUME ADHAN
    // ──────────────────────────────────────────────────────────────
    const volumeSlider = document.getElementById('adhan-volume');
    const volumeValue = document.getElementById('volume-value');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            adhanVolume = this.value / 100;
            if (volumeValue) volumeValue.textContent = this.value + '%';
            if (adhanAudio) adhanAudio.volume = adhanVolume;
            saveNotificationSettings();
        });
    }
    
    // ──────────────────────────────────────────────────────────────
    // DÉLAI NOTIFICATION
    // ──────────────────────────────────────────────────────────────
    const delaySelect = document.getElementById('notification-delay');
    if (delaySelect) {
        delaySelect.addEventListener('change', function() {
            notificationDelay = parseInt(this.value);
            saveNotificationSettings();
            const delayText = notificationDelay === 0 ? 'à l\'heure exacte' : `${notificationDelay} minutes avant`;
            console.log(`⏰ Notifications: ${delayText}`);
        });
    }
    
    // ──────────────────────────────────────────────────────────────
    // TEST ADHAN
    // ──────────────────────────────────────────────────────────────
    const testAdhanBtn = document.getElementById('test-adhan-btn');
    if (testAdhanBtn) {
        testAdhanBtn.addEventListener('click', function() {
            console.log('🎵 Test de l\'adhan...');
            console.log(`   Fichier: ${selectedAdhan}`);
            console.log(`   Volume: ${Math.round(adhanVolume * 100)}%`);
            playAdhan();
        });
    }
});

// ═══════════════════════════════════════════════════════════════════
// EXPORT POUR UTILISATION EXTERNE
// ═══════════════════════════════════════════════════════════════════

window.schedulePrayerNotifications = schedulePrayerNotifications;
window.playAdhan = playAdhan;
window.stopAdhan = stopAdhan;
window.requestNotificationPermission = requestNotificationPermission;

console.log('✅ Module notifications.js chargé (avec support pour 2 adhans)');
