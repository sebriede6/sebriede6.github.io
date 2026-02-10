const screenshots = [
  {
    file: 'home-desktop.png',
    title: 'Dashboard Landing',
    desc: 'Einstiegsseite mit schnellen KPIs und Navigation.',
  },
  {
    file: 'login.png',
    title: 'Login Flow',
    desc: 'Reduziertes Login mit klaren Aktionen.',
  },
  {
    file: 'profile.png',
    title: 'Profilansicht',
    desc: 'User-Profil mit Kennzahlen und Schnellzugriffen.',
  },
  {
    file: 'profile2.png',
    title: 'Profil (Light Mode)',
    desc: 'Helle Variante der Profil- und KPI-Karten.',
  },
  {
    file: 'lightmode-example.png',
    title: 'Light Mode UI',
    desc: 'Lesefreundliche helle Oberfläche.',
  },
  {
    file: 'lightmode-example2.png',
    title: 'Light Mode Details',
    desc: 'Komponenten, Karten und Tabellen im hellen Stil.',
  },
  {
    file: 'trading-formular.png',
    title: 'Trading Formular',
    desc: 'Order-Eingabe mit strukturierten Feldern.',
  },
  {
    file: 'trading-formular3.png',
    title: 'Trade Vorbereitung',
    desc: 'Checkliste und Risikokontrolle vor dem Absenden.',
  },
  {
    file: 'tradinformular2.png',
    title: 'Formular Varianten',
    desc: 'Alternatives Layout mit klarer Typografie.',
  },
  {
    file: 'trading-quiz.png',
    title: 'Trading Quiz',
    desc: 'Interaktives Quiz zur Wissensabfrage.',
  },
  {
    file: 'trading-quiz2.png',
    title: 'Quiz Ergebnisse',
    desc: 'Auswertung mit Score und Feedback.',
  },
  {
    file: 'trading-quiz3.png',
    title: 'Quiz Fragekarte',
    desc: 'Fragenkarten mit Primär-Call-to-Action.',
  },
  {
    file: 'trading-strategie-guide.png',
    title: 'Strategie Guide',
    desc: 'Guided Steps mit klarer Typografie.',
  },
  {
    file: 'trading-strategie-guide2.png',
    title: 'Strategie Workflow',
    desc: 'Schritt-für-Schritt mit Progress-Anzeige.',
  },
  {
    file: 'trading-strategie-guide3.png',
    title: 'Strategie Details',
    desc: 'Detailkarten und Checklisten.',
  },
  {
    file: 'statistics.png',
    title: 'Statistiken',
    desc: 'Charts und Kennzahlen kompakt.',
  },
  {
    file: 'statistics2.png',
    title: 'Charts & KPIs',
    desc: 'Vergleichsansichten und Verlauf.',
  },
  {
    file: 'grafana-dashboard.png',
    title: 'Grafana Dashboard',
    desc: 'Systemmetriken und Panels in Grafana.',
  },
  {
    file: 'prometheus.png',
    title: 'Prometheus Targets',
    desc: 'Monitoring-Targets und Scrape Status.',
  },
  {
    file: 'alert-manager.png',
    title: 'Alert Manager',
    desc: 'Regeln und laufende Alerts im Blick.',
  },
  {
    file: 'csv-export.png',
    title: 'CSV Export',
    desc: 'Tabellen mit Export-Optionen.',
  },
  {
    file: 'pdf-export.png',
    title: 'PDF Export',
    desc: 'Dokument-Export und Kontrolle.',
  },
  {
    file: 'todos.png',
    title: 'Aufgabenboard',
    desc: 'To-do-Workflow mit Statusanzeigen.',
  },
  {
    file: 'about.png',
    title: 'About / Hilfe',
    desc: 'Erklärung der App und Quicklinks.',
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
