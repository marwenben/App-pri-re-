// ═══════════════════════════════════════════════════════════════════
// INITIALISATION DES NOUVEAUX MODALS
// Hadiths et Paramètres
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Initialisation des modals supplémentaires...');
    
    // ──────────────────────────────────────────────────────────────
    // MODAL HADITHS
    // ──────────────────────────────────────────────────────────────
    const hadithsBtn = document.getElementById('hadiths-btn');
    const hadithsModal = document.getElementById('hadiths-modal');
    const closeHadiths = document.getElementById('close-hadiths');
    
    if (hadithsBtn) {
        hadithsBtn.addEventListener('click', function() {
            if (hadithsModal) {
                hadithsModal.style.display = 'flex';
                // Charger les hadiths si pas déjà chargés
                if (typeof loadHadiths === 'function') {
                    loadHadiths();
                }
                console.log('📚 Modal Hadiths ouvert');
            }
        });
    }
    
    if (closeHadiths) {
        closeHadiths.addEventListener('click', function() {
            if (hadithsModal) {
                hadithsModal.style.display = 'none';
                console.log('📚 Modal Hadiths fermé');
            }
        });
    }
    
    // ──────────────────────────────────────────────────────────────
    // MODAL PARAMÈTRES
    // ──────────────────────────────────────────────────────────────
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettings = document.getElementById('close-settings');
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            if (settingsModal) {
                settingsModal.style.display = 'flex';
                console.log('⚙️ Modal Paramètres ouvert');
            }
        });
    }
    
    if (closeSettings) {
        closeSettings.addEventListener('click', function() {
            if (settingsModal) {
                settingsModal.style.display = 'none';
                console.log('⚙️ Modal Paramètres fermé');
            }
        });
    }
    
    // ──────────────────────────────────────────────────────────────
    // FERMER EN CLIQUANT EN DEHORS
    // ──────────────────────────────────────────────────────────────
    window.addEventListener('click', function(e) {
        if (e.target === hadithsModal) {
            hadithsModal.style.display = 'none';
        }
        if (e.target === settingsModal) {
            settingsModal.style.display = 'none';
        }
    });
    
    // ──────────────────────────────────────────────────────────────
    // PWA INSTALLATION
    // ──────────────────────────────────────────────────────────────
    let deferredPrompt;
    const installBtn = document.getElementById('install-pwa-btn');
    const installHint = document.getElementById('install-hint');
    
    window.addEventListener('beforeinstallprompt', (e) => {
        // Empêcher le mini-infobar par défaut
        e.preventDefault();
        // Sauvegarder l'événement
        deferredPrompt = e;
        // Afficher le bouton d'installation
        if (installBtn) {
            installBtn.style.display = 'block';
            console.log('📱 Bouton d\'installation PWA affiché');
        }
        if (installHint) {
            installHint.style.display = 'block';
        }
    });
    
    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (!deferredPrompt) {
                alert('L\'installation est déjà effectuée ou n\'est pas disponible sur votre appareil.');
                return;
            }
            
            // Afficher le prompt d'installation
            deferredPrompt.prompt();
            
            // Attendre la réponse de l'utilisateur
            const { outcome } = await deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                console.log('✅ PWA installée');
                alert('✅ Application installée avec succès!');
            } else {
                console.log('❌ Installation PWA refusée');
            }
            
            // Réinitialiser
            deferredPrompt = null;
            installBtn.style.display = 'none';
            if (installHint) installHint.style.display = 'none';
        });
    }
    
    // Détecter si déjà installé
    window.addEventListener('appinstalled', () => {
        console.log('✅ PWA installée');
        if (installBtn) installBtn.style.display = 'none';
        if (installHint) {
            installHint.textContent = '✅ Application installée!';
        }
    });
    
    console.log('✅ Modals supplémentaires initialisés');
});
