/* --------------------------------------------------
📍 DONNÉES DES ÉTABLISSEMENTS
-------------------------------------------------- */
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

addMarkers();

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


/* --------------------------------------------------
📘 TABLEAU FORMATIONS
-------------------------------------------------- */

const formationsTableData = [
  // Bac+2
  {level:"Bac+2", key:"bac+2", subject:"dev", title:"BTS SIO – SLAM (Développement)", duration:"2 ans", note:"BTS SIO (SLAM) — exemple en lycées / CFA"},
  {level:"Bac+2", key:"bac+2", subject:"cyber", title:"BTS SIO – SISR (Réseaux & Sécurité)", duration:"2 ans", note:"Orientation réseaux/sécurité"},

  // Bac+3
  {level:"Bac+3", key:"bac+3", subject:"dev", title:"BUT Informatique", duration:"3 ans", note:"IUT / BUT (ex-DUT)"},
  {level:"Bac+3", key:"bac+3", subject:"dev", title:"Licence Informatique", duration:"3 ans", note:"Université (parcours général ou cyber)"},
  {level:"Bac+3", key:"bac+3", subject:"dev", title:"Licence Professionnelle Dév Web", duration:"1 an", note:"Licence pro spécialisée"},
  {level:"Bac+3", key:"bac+3", subject:"cyber", title:"Licence Professionnelle Cybersécurité", duration:"1 an", note:"Licence pro spécialisée"},
  {level:"Bac+3", key:"bac+3", subject:"dev", title:"Bachelor Dév Web / Full-Stack", duration:"3 ans", note:"Écoles / privés"},
  {level:"Bac+3", key:"bac+3", subject:"dev", title:"Titre RNCP Dév Web / Web Mobile", duration:"variable", note:"Certifications professionnelles"},

  // Bac+5
  {level:"Bac+5", key:"bac+5", subject:"dev", title:"Cycle ingénieur Informatique", duration:"5 ans", note:"Écoles d'ingénieurs"},
  {level:"Bac+5", key:"bac+5", subject:"cyber", title:"Master Cybersécurité", duration:"2 ans", note:"Université / écoles d’ingénieurs"},
  {level:"Bac+5", key:"bac+5", subject:"cyber", title:"Cycle ingénieur Cybersécurité", duration:"5 ans", note:"Spécialisé cyber"},
  {level:"Bac+5", key:"bac+5", subject:"dev", title:"Parcours long Bachelor → Master", duration:"Bac+5", note:"Formation complète"}
];

const tbody = document.querySelector("#formationsTable tbody");
const levelFilter = document.getElementById("levelFilter");
const subjectFilter = document.getElementById("subjectFilter");
const searchInput = document.getElementById("formationSearch");
const exportBtn = document.getElementById("exportCsv");

/* BADGES */
function badgeLevel(key){
  if(key === "bac+2") return `<span class="badge bac2">Bac+2</span>`;
  if(key === "bac+3") return `<span class="badge bac3">Bac+3</span>`;
  return `<span class="badge bac5">Bac+5</span>`;
}

function badgeSubject(s){
  return s === "dev"
    ? `<span class="badge dev">Dev</span>`
    : `<span class="badge cyber">Cyber</span>`;
}

/* RENDER TABLEAU */
function renderFormations(){
  tbody.innerHTML = "";
  const lvl = levelFilter.value;
  const subj = subjectFilter.value;
  const q = searchInput.value.trim().toLowerCase();

  formationsTableData.forEach(row => {
    if (lvl !== "all" && row.key !== lvl) return;
    if (subj !== "all" && row.subject !== subj) return;
    if (q && !row.title.toLowerCase().includes(q) && !row.note.toLowerCase().includes(q)) return;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${badgeLevel(row.key)}</td>
      <td>${row.title}</td>
      <td>${row.duration}</td>
      <td>${badgeSubject(row.subject)}</td>
      <td>${row.note}</td>
    `;
    tbody.appendChild(tr);
  });
}

/* EXPORT CSV */
function exportToCsv(filename="formations.csv"){
  const rows = [["Niveau","Intitulé","Durée","Matière","Remarques"]];
  formationsTableData.forEach(r => {
    rows.push([r.level, r.title, r.duration, r.subject, r.note]);
  });
  const csv = rows.map(r => r.join(",")).join("\n");
  const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

/* EVENTS TABLEAU */
levelFilter.addEventListener("change", renderFormations);
subjectFilter.addEventListener("change", renderFormations);
searchInput.addEventListener("input", renderFormations);
exportBtn.addEventListener("click", exportToCsv);

renderFormations();

/***************************
 *   QUIZ
 ***************************/
const quizData = [
  {
    question: "Que signifie HTML ?",
    choices: [
      "HyperText Markup Language",
      "Hyper Transfer Mail Link",
      "Home Tool Modern Language"
    ],
    answer: 0
  },
  {
    question: "Quel est le rôle du CSS ?",
    choices: [
      "Gérer l'apparence visuelle d'un site",
      "Gérer une base de données",
      "Protéger le réseau"
    ],
    answer: 0
  },
  {
    question: "Quel métier identifie et exploite des failles de sécurité pour les corriger ?",
    choices: [
      "Data Scientist",
      "Pentester",
      "Chef de projet"
    ],
    answer: 1
  },
  {
    question: "Quel langage est principalement utilisé côté client (front-end) ?",
    choices: [
      "Python",
      "JavaScript",
      "SQL"
    ],
    answer: 1
  },
  {
    question: "Quel est l'objectif d'un pare-feu (firewall) ?",
    choices: [
      "Accélérer Internet",
      "Bloquer ou autoriser le trafic réseau",
      "Créer un site web"
    ],
    answer: 1
  }
];

function startQuiz() {
  const container = document.getElementById("quiz-container");
  let index = 0;
  let score = 0;

  function showQuestion() {
    const q = quizData[index];

    container.innerHTML = `
      <h3>${q.question}</h3>
      <div class="quiz-choices">
        ${q.choices
          .map(
            (c, i) =>
              `<button class="quiz-choice" data-id="${i}">${c}</button>`
          )
          .join("")}
      </div>
      <p class="quiz-feedback"></p>
    `;

    document.querySelectorAll(".quiz-choice").forEach((btn) => {
      btn.addEventListener("click", () => {
        const fb = document.querySelector(".quiz-feedback");

        if (Number(btn.dataset.id) === q.answer) {
          fb.textContent = "✔️ Bonne réponse !";
          fb.style.color = "green";
          score++;
        } else {
          fb.textContent = "❌ Mauvaise réponse...";
          fb.style.color = "red";
        }

        setTimeout(() => {
          index++;
          if (index < quizData.length) showQuestion();
          else showResult();
        }, 700);
      });
    });
  }

  function showResult() {
    let message = "";

    if (score === 5) message = "🔥 Parfait, tu es un expert !";
    else if (score >= 3) message = "👏 Bien joué, bonnes connaissances !";
    else message = "💡 Continue à apprendre, tu vas y arriver !";

    container.innerHTML = `
      <h3>🎉 Quiz terminé !</h3>
      <p>Score : <strong>${score} / ${quizData.length}</strong></p>
      <p>${message}</p>
      <button id="retry">Rejouer</button>
    `;

    document.getElementById("retry").onclick = () => startQuiz();
  }

  showQuestion();
}

startQuiz();

/***************************
 *   MINI-JEU : "CLASSE-LES !"
 ***************************/
const items = [
  { text: "HTML", category: "Développement" },
  { text: "Firewall", category: "Cybersécurité" },
  { text: "JavaScript", category: "Développement" },
  { text: "Phishing", category: "Cybersécurité" }
];

const categories = ["Développement", "Cybersécurité"];

function initGame() {
  const dragBox = document.querySelector(".draggables");
  const targetBox = document.querySelector(".targets");

  dragBox.innerHTML = "";
  targetBox.innerHTML = "";

  let correct = 0;

  /*************
   * Zones cibles
   *************/
  categories.forEach(cat => {
    const zone = document.createElement("div");
    zone.className = "dropzone";
    zone.dataset.cat = cat;
    zone.innerHTML = `<h4>${cat}</h4>`;
    targetBox.appendChild(zone);
  });

  /*************
   * Éléments à trier
   *************/
  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "draggable";
    div.draggable = true;
    div.textContent = item.text;

    // ➤ Identifiant permanent pour éviter les bugs
    div.dataset.id = index;
    div.dataset.cat = item.category;

    dragBox.appendChild(div);

    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", div.dataset.id);
      div.classList.add("dragging");
    });

    div.addEventListener("dragend", () => div.classList.remove("dragging"));
  });

  /*************
   * Gestion du drop
   *************/
  document.querySelectorAll(".dropzone").forEach(zone => {
    zone.addEventListener("dragover", e => e.preventDefault());

    zone.addEventListener("drop", e => {
      e.preventDefault();

      const id = e.dataTransfer.getData("text/plain");
      const item = items[id];

      // On récupère le bon élément grâce à data-id (fix du bug)
      const dragged = document.querySelector(`.draggable[data-id='${id}']`);

      if (item.category === zone.dataset.cat) {

        // Ajouter dans la bonne zone
        zone.appendChild(dragged);
        correct++;

        zone.classList.add("success");
        setTimeout(() => zone.classList.remove("success"), 300);

        // Victoire UNE SEULE FOIS quand tout est correct
        if (correct === items.length) {
          setTimeout(() => {
            alert("🎉 Bravo ! Tu as tout bien classé !");
            initGame();
          }, 400);
        }

      } else {
        zone.classList.add("error");
        setTimeout(() => zone.classList.remove("error"), 300);
      }
    });
  });
}

initGame();

/* --------------------------------------------------
📱 PWA INSTALL
-------------------------------------------------- */
let deferredPrompt;
const installBtn = document.querySelector(".install");

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  deferredPrompt.prompt();
  installBtn.classList.add("hidden");

});

