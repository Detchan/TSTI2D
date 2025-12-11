/* --------------------------------------------------
📍 DONNÉES DES ÉTABLISSEMENTS
-------------------------------------------------- */
const places = [
  {id:1, name:"42 Le Havre", lat:49.4944, lon:0.1079, type:"dev", level:"bac+3", url:"https://www.42lehavre.fr"},
  {id:2, name:"IUT Le Havre – Informatique", lat:49.5048, lon:0.1127, type:"dev", level:"bac+3", url:"https://iut-lehavre.univ-lehavre.fr"},
  {id:3, name:"Université du Havre – Master Sécurité SI", lat:49.4944, lon:0.1079, type:"cyber", level:"bac+5", url:"https://www.univ-lehavre.fr"},
  {id:4, name:"CESI Rouen – Ingénieur Informatique", lat:49.4431, lon:1.0993, type:"dev", level:"bac+5", url:"https://ecole-ingenieurs.cesi.fr"},
  {id:5, name:"ESIGELEC Rouen – Cybersécurité", lat:49.3930, lon:1.0700, type:"cyber", level:"bac+5", url:"https://www.esigelec.fr"},
  {id:6, name:"IUT Rouen – Réseaux & Télécoms", lat:49.4431, lon:1.0993, type:"cyber", level:"bac+3", url:"https://iutrouen.univ-rouen.fr"},
  {id:7, name:"Université de Rouen – Master Informatique", lat:49.4431, lon:1.0993, type:"dev", level:"bac+5", url:"https://www.univ-rouen.fr"},
  {id:8, name:"EXIA CESI Caen – Développement", lat:49.1829, lon:-0.3707, type:"dev", level:"bac+5", url:"https://caen.cesi.fr"},
  {id:9, name:"IUT Caen – Informatique", lat:49.1829, lon:-0.3707, type:"dev", level:"bac+3", url:"https://iutcaen.unicaen.fr"},
  {id:10, name:"ENSICAEN – Génie Informatique + Cyber", lat:49.1837, lon:-0.3644, type:"cyber", level:"bac+5", url:"https://www.ensicaen.fr"},
  {id:11, name:"Normandigital School Caen", lat:49.1820, lon:-0.3700, type:"dev", level:"bac+3", url:"https://normandigital.fr"},
  {id:12, name:"Université Caen – Master Cyber", lat:49.1829, lon:-0.3707, type:"cyber", level:"bac+5", url:"https://www.unicaen.fr"},
  {id:13, name:"IUT Évreux – Informatique", lat:49.0240, lon:1.1508, type:"dev", level:"bac+3", url:"https://iutevreux.univ-rouen.fr"},
  {id:14, name:"Campus Sup Saint-Lô – BTS SIO", lat:49.1167, lon:-1.0833, type:"dev", level:"bac+2", url:"https://www.saint-lo.fr"},
  {id:15, name:"CFA Hubert Germain – Cybersécurité", lat:49.4431, lon:1.0993, type:"cyber", level:"bac+3", url:"https://www.cfa-normandie.fr"},
  {id:16, name:"42 Paris", lat:48.8966, lon:2.3185, type:"dev", level:"bac+3", url:"https://www.42.fr"},
  {id:17, name:"EPITA Paris – Cybersecurity", lat:48.8185, lon:2.3631, type:"cyber", level:"bac+5", url:"https://www.epita.fr"},
  {id:18, name:"Efrei Paris – Informatique & Cyber", lat:48.8146, lon:2.3679, type:"cyber", level:"bac+5", url:"https://www.efrei.fr"},
  {id:19, name:"IUT Paris – Informatique", lat:48.8462, lon:2.3545, type:"dev", level:"bac+3", url:"https://iutparis-seine.u-paris.fr"},
  {id:20, name:"Université Paris-Saclay – Cyber", lat:48.7090, lon:2.1710, type:"cyber", level:"bac+5", url:"https://www.universite-paris-saclay.fr"},
  {id:21, name:"IUT Rennes – Informatique", lat:48.1173, lon:-1.6778, type:"dev", level:"bac+3", url:"https://iutrennes.univ-rennes.fr"},
  {id:22, name:"ENSIBS Vannes – Cyberdéfense", lat:47.6582, lon:-2.7608, type:"cyber", level:"bac+5", url:"https://www-ensibs.univ-ubs.fr"},
  {id:23, name:"IUT Brest – Réseaux & Télécoms", lat:48.3904, lon:-4.4861, type:"cyber", level:"bac+3", url:"https://iut-brest.univ-brest.fr"},
  {id:24, name:"ENI École Informatique Rennes", lat:48.1173, lon:-1.6778, type:"dev", level:"bac+3", url:"https://www.eni-ecole.fr"},
  {id:25, name:"IUT Lille – Informatique", lat:50.6292, lon:3.0573, type:"dev", level:"bac+3", url:"https://iutlille.univ-lille.fr"},
  {id:26, name:"Université Lille – Cyber", lat:50.6292, lon:3.0573, type:"cyber", level:"bac+5", url:"https://www.univ-lille.fr"},
  {id:27, name:"IMT Lille Douai – Informatique", lat:50.3700, lon:3.0800, type:"dev", level:"bac+5", url:"https://imt-lille-douai.fr"},
  {id:28, name:"IUT Amiens – Informatique", lat:49.8920, lon:2.3000, type:"dev", level:"bac+3", url:"https://iut-amiens.u-picardie.fr"},
  {id:29, name:"IUT Chartres – Info", lat:48.4460, lon:1.4890, type:"dev", level:"bac+3", url:"https://www.iutchartres.univ-orleans.fr"},
  {id:30, name:"IUT Orléans – Réseaux", lat:47.9020, lon:1.9093, type:"cyber", level:"bac+3", url:"https://www.univ-orleans.fr"},
  {id:31, name:"Le Reacteur – École Dev Paris", lat:48.8708, lon:2.3785, type:"dev", level:"bac+3", url:"https://www.lereacteur.io"},
  {id:32, name:"Holberton School Paris", lat:48.8566, lon:2.3522, type:"dev", level:"bac+3", url:"https://www.holbertonschool.com"}
];

/* --------------------------------------------------
📍 ICÔNES
-------------------------------------------------- */
const iconDev = L.icon({ iconUrl: "image/icon-dev.png", iconSize: [34,34], iconAnchor:[17,34] });
const iconCyber = L.icon({ iconUrl: "image/icon-cyber.png", iconSize: [34,34], iconAnchor:[17,34] });
const iconMixed = L.icon({ iconUrl: "image/icon-mixed.png", iconSize: [34,34], iconAnchor:[17,34] });

/* --------------------------------------------------
🗺️ CARTE
-------------------------------------------------- */
const map = L.map("map").setView([48.9, 1], 7);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(map);

const clusterGroup = L.markerClusterGroup();
map.addLayer(clusterGroup);

function getIcon(type) {
  if (type === "dev") return iconDev;
  if (type === "cyber") return iconCyber;
  return iconMixed;
}

/* --------------------------------------------------
🔍 AJOUT DES MARQUEURS AVEC DOUBLE FILTRE
-------------------------------------------------- */
function addMarkers(subject = "all", search = "", level = "all") {
  clusterGroup.clearLayers();

  const query = search.trim().toLowerCase();

  places.forEach(p => {
    if (subject !== "all" && p.type !== subject) return;
    if (level !== "all" && p.level !== level) return;
    if (query && !p.name.toLowerCase().includes(query)) return;

    const marker = L.marker([p.lat, p.lon], { icon: getIcon(p.type) });

    marker.bindPopup(`
      <strong>${p.name}</strong><br>
      Matière : ${p.type === "dev" ? "Développement" : "Cybersécurité"}<br>
      Niveau : ${p.level.toUpperCase()}<br>
      <a href="${p.url}" target="_blank">Voir le site</a>
    `);

    clusterGroup.addLayer(marker);
  });
}

/* --------------------------------------------------
📍 LIEN TABLEAU ↔ CARTE
-------------------------------------------------- */
function updateMapByFilters() {
  const level = document.getElementById("mapLevelFilter").value;
  const subject = document.getElementById("mapSubjectFilter").value;

  addMarkers(subject, "", level);
}

/* évènements filtres carte */
document.getElementById("mapLevelFilter").addEventListener("change", updateMapByFilters);
document.getElementById("mapSubjectFilter").addEventListener("change", updateMapByFilters);

/* ===========================
   Données formations
=========================== */

const formations = [
  {
    level: "bac+2",
    title: "BTS SIO (SLAM / SISR)",
    duration: "2 ans",
    subject: "dev",
    note: "Bon choix pour débuter"
  },
  {
    level: "bac+2",
    title: "DUT Informatique (ex-IUT)",
    duration: "2 ans",
    subject: "dev",
    note: "Formation polyvalente"
  },
  {
    level: "bac+3",
    title: "BUT Informatique",
    duration: "3 ans",
    subject: "dev",
    note: "IUT / BUT (ex-DUT)"
  },
  {
    level: "bac+3",
    title: "Licence Informatique",
    duration: "3 ans",
    subject: "dev",
    note: "Université (parcours général ou cyber)"
  },
  {
    level: "bac+3",
    title: "Licence Professionnelle Dév Web",
    duration: "1 an",
    subject: "dev",
    note: "Licence pro spécialisée"
  },
  {
    level: "bac+3",
    title: "Licence Professionnelle Cybersécurité",
    duration: "1 an",
    subject: "cyber",
    note: "Licence pro spécialisée"
  },
  {
    level: "bac+3",
    title: "Bachelor Dév Web / Full-Stack",
    duration: "3 ans",
    subject: "dev",
    note: "Écoles / privés"
  },
  {
    level: "bac+3",
    title: "Titre RNCP Dév Web / Web Mobile",
    duration: "variable",
    subject: "dev",
    note: "Certifications professionnelles"
  }
];

/* ================================
      AFFICHAGE TABLEAU FORMATIONS
================================ */

function renderTable() {
  const tbody = document.querySelector("#formationsTable tbody");
  const level = document.getElementById("levelFilter").value;
  const subject = document.getElementById("subjectFilter").value;
  const search = document.getElementById("formationSearch").value.trim().toLowerCase();

  tbody.innerHTML = "";

  formations
    .filter(f =>
      (level === "all" || f.level === level) &&
      (subject === "all" || f.subject === subject) &&
      (f.title.toLowerCase().includes(search))
    )
    .forEach(f => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="badge">${f.level.toUpperCase()}</span></td>
        <td>${f.title}</td>
        <td>${f.duration}</td>
        <td>${f.subject === "dev" ? "Développement" : "Cybersécurité"}</td>
        <td>${f.note}</td>
      `;
      tbody.appendChild(tr);
    });
}

/* événements tableau */
document.getElementById("levelFilter").addEventListener("change", renderTable);
document.getElementById("subjectFilter").addEventListener("change", renderTable);
document.getElementById("formationSearch").addEventListener("input", renderTable);

renderTable();

/* ================================
   DONNÉES DES ÉTABLISSEMENTS (CARTE)
================================ */

const places = [
  {
    name: "IUT Informatique",
    lat: 48.8566,
    lon: 2.3522,
    type: "dev",
    level: "bac+3",
    url: "https://iut.fr"
  },
  {
    name: "École Cybersécurité Paris",
    lat: 48.85,
    lon: 2.29,
    type: "cyber",
    level: "bac+5",
    url: "https://cyber.com"
  },
  {
    name: "Campus Dév Web Lyon",
    lat: 45.75,
    lon: 4.85,
    type: "dev",
    level: "bac+2",
    url: "https://devlyon.com"
  },
  {
    name: "Institut Cyber Toulouse",
    lat: 43.60,
    lon: 1.44,
    type: "cyber",
    level: "bac+3",
    url: "https://cybertlse.com"
  }
];

/* ================================
          INITIALISATION CARTE
================================ */

const map = L.map("map").setView([46.6, 1.88], 6);

// fond de carte
L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// cluster
const clusterGroup = L.markerClusterGroup();
map.addLayer(clusterGroup);

/* ================================
        ICONES PERSONNALISÉES
================================ */

function getIcon(type) {
  const color = type === "dev" ? "blue" : "red";
  return L.icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });
}

/* ================================
     AJOUT DES MARKERS FILTRÉS
================================ */

function addMarkers(typeFilter = "all", search = "", levelFilter = "all") {
  clusterGroup.clearLayers();
  const query = search.trim().toLowerCase();

  places.forEach(p => {
    if (typeFilter !== "all" && p.type !== typeFilter) return;
    if (levelFilter !== "all" && p.level !== levelFilter) return;
    if (query && !p.name.toLowerCase().includes(query)) return;

    const marker = L.marker([p.lat, p.lon], { icon: getIcon(p.type) });

    marker.bindPopup(`
      <strong>${p.name}</strong><br>
      Matière : ${p.type === "dev" ? "Développement" : "Cybersécurité"}<br>
      Niveau : ${p.level.toUpperCase()}<br>
      <a href="${p.url}" target="_blank">Voir le site</a>
    `);

    clusterGroup.addLayer(marker);
  });
}

/* ================================
        MISE À JOUR DE LA CARTE
================================ */

function updateMap() {
  const level = document.getElementById("mapLevelFilter").value;
  const subject = document.getElementById("mapSubjectFilter").value;

  addMarkers(subject, "", level);
}

document.getElementById("mapLevelFilter").addEventListener("change", updateMap);
document.getElementById("mapSubjectFilter").addEventListener("change", updateMap);

addMarkers();

/* ============================================
                🎯 QUIZ
============================================ */

const quizData = [
  {
    q: "Quel langage est principalement utilisé pour créer des pages web ?",
    a: ["Python", "HTML", "C++"],
    correct: 1
  },
  {
    q: "Quel domaine s’occupe de la protection des systèmes informatiques ?",
    a: ["Cybersécurité", "Graphisme", "Marketing"],
    correct: 0
  },
  {
    q: "Quel outil permet d'afficher des cartes interactives ?",
    a: ["Photoshop", "Leaflet", "Excel"],
    correct: 1
  }
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizData.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "quiz-question";

    let answersHTML = "";
    item.a.forEach((ans, i) => {
      answersHTML += `
        <label>
          <input type="radio" name="q${index}" value="${i}"> ${ans}
        </label><br>
      `;
    });

    div.innerHTML = `
      <p><strong>${item.q}</strong></p>
      ${answersHTML}
    `;

    container.appendChild(div);
  });

  const btn = document.createElement("button");
  btn.textContent = "Valider";
  btn.onclick = checkQuiz;
  container.appendChild(btn);

  const result = document.createElement("p");
  result.id = "quiz-result";
  container.appendChild(result);
}

function checkQuiz() {
  let score = 0;

  quizData.forEach((q, index) => {
    const resp = document.querySelector(`input[name="q${index}"]:checked`);
    if (resp && Number(resp.value) === q.correct) score++;
  });

  document.getElementById("quiz-result").textContent =
    `Score : ${score} / ${quizData.length}`;
}

loadQuiz();

/* ============================================
              🎮 MINI-JEU DRAG & DROP
============================================ */

const gameItems = [
  { name: "HTML", cat: "dev" },
  { name: "Pentest", cat: "cyber" },
  { name: "CSS", cat: "dev" },
  { name: "Firewall", cat: "cyber" }
];

function loadGame() {
  const drag = document.querySelector(".draggables");
  const targets = document.querySelector(".targets");

  drag.innerHTML = "";
  targets.innerHTML = `
    <div class="target" data-cat="dev">Développement</div>
    <div class="target" data-cat="cyber">Cybersécurité</div>
  `;

  gameItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "draggable";
    div.draggable = true;
    div.textContent = item.name;
    div.dataset.cat = item.cat;
    drag.appendChild(div);
  });

  // drag events
  document.querySelectorAll(".draggable").forEach(el => {
    el.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text", e.target.dataset.cat + "|" + e.target.textContent);
    });
  });

  document.querySelectorAll(".target").forEach(t => {
    t.addEventListener("dragover", e => e.preventDefault());

    t.addEventListener("drop", e => {
      const [cat, name] = e.dataTransfer.getData("text").split("|");

      if (cat === t.dataset.cat) {
        t.innerHTML += `<div class="success">${name}</div>`;
      } else {
        t.innerHTML += `<div class="error">${name}</div>`;
      }
    });
  });
}

loadGame();

/* ============================================
              📱 INSTALLATION PWA
============================================ */

let deferredPrompt;
const installBtn = document.querySelector(".install");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  installBtn.classList.add("hidden");
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
});

/* ============================================
             📁 NAVIGATION MOBILE
============================================ */

document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});
