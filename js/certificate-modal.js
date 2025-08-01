// Certificate Modal JavaScript
let currentPage = 1;

function openCertificateModal() {
    document.getElementById('certificateModal').style.display = 'block';
    showPage(1); // Zeige standardmäßig die erste Seite
}

function closeCertificateModal() {
    document.getElementById('certificateModal').style.display = 'none';
}

function showPage(pageNumber) {
    currentPage = pageNumber;
    const modalImage = document.getElementById('modalImage');
    const pageInfo = document.getElementById('pageInfo');
    
    // Pfade zu den drei Seiten des Zertifikats
    const imagePaths = {
        1: 'images/Screenshot 2025-08-01 130043.png',
        2: 'images/Screenshot 2025-08-01 130104.png', 
        3: 'images/Screenshot 2025-08-01 130128.png'
    };
    
    // Alt-Texte für die Seiten
    const altTexts = {
        1: 'Techstarter Zertifikat - Seite 1',
        2: 'Techstarter Zertifikat - Seite 2', 
        3: 'Techstarter Zertifikat - Seite 3'
    };
    
    modalImage.src = imagePaths[pageNumber];
    modalImage.alt = altTexts[pageNumber];
    pageInfo.textContent = `Seite ${pageNumber} von 3`;
    
    // Aktiven Button hervorheben
    const buttons = document.querySelectorAll('.modal-nav-btn');
    buttons.forEach((btn, index) => {
        if (index + 1 === pageNumber) {
            btn.style.backgroundColor = 'cyan';
            btn.style.color = 'black';
        } else {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = 'cyan';
        }
    });
}

function openFullscreen() {
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const modalImage = document.getElementById('modalImage');
    
    fullscreenImage.src = modalImage.src;
    fullscreenImage.alt = modalImage.alt;
    fullscreenModal.style.display = 'flex';
}

function closeFullscreen() {
    document.getElementById('fullscreenModal').style.display = 'none';
}

// Allgemeine Vollbild-Funktion für einzelne Bilder
function openImageFullscreen(imageSrc, imageAlt) {
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenImage = document.getElementById('fullscreenImage');
    
    fullscreenImage.src = imageSrc;
    fullscreenImage.alt = imageAlt;
    fullscreenModal.style.display = 'flex';
}

// Schließe das Modal wenn außerhalb geklickt wird
window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificateModal();
    }
}

// Schließe das Modal mit der Escape-Taste
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const fullscreenModal = document.getElementById('fullscreenModal');
        if (fullscreenModal.style.display === 'flex') {
            closeFullscreen();
        } else {
            closeCertificateModal();
        }
    }
    
    // Pfeiltasten für Navigation
    if (event.key === 'ArrowLeft' && currentPage > 1) {
        showPage(currentPage - 1);
    }
    if (event.key === 'ArrowRight' && currentPage < 3) {
        showPage(currentPage + 1);
    }
});
