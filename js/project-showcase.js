const screenshots = [
  {
    file: 'home-desktop.png',
    title: 'Dashboard Landing',
    desc: 'Startansicht des Trading-Dashboards.',
  },
  {
    file: 'login.png',
    title: 'Login',
    desc: 'Anmeldung zur App.',
  },
  {
    file: 'profile.png',
    title: 'Profilansicht',
    desc: 'Profilseite mit Kerninfos.',
  },
  {
    file: 'profile2.png',
    title: 'Profil (unterer Bereich)',
    desc: 'Unterer Teil der Profilseite, abgeschnitten im Hauptscreen.',
  },
  {
    file: 'lightmode-example.png',
    title: 'Light Mode UI',
    desc: 'Helle Oberfläche mit Karten.',
  },
  {
    file: 'lightmode-example2.png',
    title: 'Light Mode Details',
    desc: 'Weitere Ansichten im Light Mode.',
  },
  {
    file: 'trading-formular.png',
    title: 'Trading Formular',
    desc: 'Eingabemaske für Trades.',
  },
  {
    file: 'trading-formular3.png',
    title: 'Trade Vorbereitung',
    desc: 'Weitere Formular-Variante.',
  },
  {
    file: 'tradinformular2.png',
    title: 'Formular Varianten',
    desc: 'Alternative Formular-Ansicht.',
  },
  {
    file: 'trading-quiz.png',
    title: 'Trading Quiz',
    desc: 'Quiz-Start und Fragenansicht.',
  },
  {
    file: 'quizergebnisse.png',
    title: 'Quiz Ergebnisse',
    desc: 'Quiz-Auswertung / Ergebnisse.',
  },
  {
    file: 'gesamtergebnis.png',
    title: 'Gesamtergebnis',
    desc: 'Zusammenfassung der Gesamtauswertung.',
  },
  {
    file: 'trading-quiz3.png',
    title: 'Quiz Fragekarte',
    desc: 'Einzelne Fragekarte.',
  },
  {
    file: 'trading-strategie-guide.png',
    title: 'Strategie Guide',
    desc: 'Guided Steps Übersicht.',
  },
  {
    file: 'trading-strategie-guide2.png',
    title: 'Strategie Workflow',
    desc: 'Weiterer Step-Flow.',
  },
  {
    file: 'tradingstrategie-detail.png',
    title: 'Strategie Details',
    desc: 'Detailansicht der Steps.',
  },
  {
    file: 'statistics.png',
    title: 'Statistiken',
    desc: 'Statistiken und Diagramme.',
  },
  {
    file: 'statistics2.png',
    title: 'Charts & KPIs',
    desc: 'Weitere Diagramm-Ansicht.',
  },
  {
    file: 'grafana-dashboard.png',
    title: 'Grafana Dashboard',
    desc: 'Monitoring-Dashboard in Grafana.',
  },
  {
    file: 'prometheus.png',
    title: 'Prometheus Targets',
    desc: 'Targets-Übersicht in Prometheus.',
  },
  {
    file: 'alert-manager.png',
    title: 'Alert Manager',
    desc: 'Alertmanager-Ansicht.',
  },
  {
    file: 'csv-export.png',
    title: 'CSV Export',
    desc: 'Export-Ansicht (CSV).',
  },
  {
    file: 'pdf-export.png',
    title: 'PDF Export',
    desc: 'Export-Ansicht (PDF).',
  },
  {
    file: 'impressum.png',
    title: 'Impressum',
    desc: 'Impressum-Seite der Anwendung.',
  },
  {
    file: 'datenschutzerklärung.png',
    title: 'Datenschutzerklärung',
    desc: 'Datenschutz-Hinweise und Richtlinien.',
  },
  {
    file: 'risikohinweis.png',
    title: 'Risikohinweis',
    desc: 'Risikohinweise zum Trading.',
  },
  {
    file: 'todos.png',
    title: 'Aufgabenboard',
    desc: 'To-do Board Ansicht.',
  },
  {
    file: 'about.png',
    title: 'About / Hilfe',
    desc: 'About-/Help-Seite.',
  },
];

const gallery = document.querySelector('[data-gallery]');
const modal = document.querySelector('[data-modal]');
const modalImage = modal?.querySelector('img');
const modalTitle = modal?.querySelector('[data-modal-title]');
const modalDesc = modal?.querySelector('[data-modal-desc]');
const counter = document.querySelector('[data-shot-count]');

function renderGallery() {
  if (!gallery) return;

  gallery.innerHTML = '';
  screenshots.forEach((shot) => {
    const figure = document.createElement('figure');
    figure.className = 'shot';
    figure.innerHTML = `
      <div class="shot__img">
        <img src="images/my-fullstack-app/${shot.file}" alt="${shot.title}">
      </div>
      <figcaption>
        <h3>${shot.title}</h3>
        <p>${shot.desc}</p>
      </figcaption>
    `;
    figure.addEventListener('click', () => openModal(shot));
    gallery.appendChild(figure);
  });

  if (counter) {
    counter.textContent = `${screenshots.length} Screenshots`;
  }
}

function openModal(shot) {
  if (!modal || !modalImage || !modalTitle || !modalDesc) return;
  modal.classList.add('is-open');
  modalImage.src = `images/my-fullstack-app/${shot.file}`;
  modalImage.alt = shot.title;
  modalTitle.textContent = shot.title;
  modalDesc.textContent = shot.desc;
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
}

if (modal) {
  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target === modal || target.closest('[data-close]')) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

renderGallery();
