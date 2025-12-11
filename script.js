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
  {id:20, name:"Université Paris-Saclay – Cyber", lat:48.7090, lon:2.1710, type:"cyber", level:"bac+5", url:"https://www.universite-paris-saclay.fr"}
];

/* --------------------------------------------------
📍 ICÔNES
-------------------------------------------------- */
const iconDev = L.icon({
  iconUrl: "image/icon-dev.png",
  iconSize: [34, 34],
  iconAnchor: [17, 34]
});
const iconCyber = L.icon({
  iconUrl: "image/icon-cyber.png",
  iconSize: [34, 34],
  iconAnchor: [17, 34]
});
const iconMixed = L.icon({
  iconUrl: "image/icon-mixed.png",
  iconSize: [34, 34],
  iconAnchor: [17, 34]
});

/* --------------------------------------------------
🗺️ CARTE — VERSION UNIQUE
-------------------------------------------------- */
const map = L.map("map").setView([48.9, 1], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19
}).addTo(map);

const clusterGroup = L.markerClusterGroup();
map.addLayer(clusterGroup);

function getIcon(type) {
  if (type === "dev") return iconDev;
  if (type === "cyber") return iconCyber;
  return iconMixed;
}

/* --------------------------------------------------
🔍 AJOUT DES MARQUEURS + FILTRES
-------------------------------------------------- */
function addMarkers(subject = "all", level = "all") {
  clusterGroup.clearLayers();

  places.forEach(p => {
    if (subject !== "all" && p.type !== subject) return;
    if (level !== "all" && p.level !== level) return;

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

function updateMapFilters() {
  const level = document.getElementById("mapLevelFilter").value;
  const subject = document.getElementById("mapSubjectFilter").value;
  addMarkers(subject, level);
}

document.getElementById("mapLevelFilter").addEventListener("change", updateMapFilters);
document.getElementById("mapSubjectFilter").addEventListener("change", updateMapFilters);

// Charger au démarrage
addMarkers();

/* --------------------------------------------------
📚 FORMATIONS
-------------------------------------------------- */
const formations = [
  { level:"bac+3", title:"BUT Informatique", duration:"3 ans", subject:"dev", note:"IUT / BUT (ex-DUT)" },
  { level:"bac+3", title:"Licence Informatique", duration:"3 ans", subject:"dev", note:"Université" },
  { level:"bac+3", title:"Licence Pro Dév Web", duration:"1 an", subject:"dev", note:"Licence pro" },
  { level:"bac+3", title:"Licence Pro Cybersécurité", duration:"1 an", subject:"cyber", note:"Licence pro" },
  { level:"bac+3", title:"Bachelor Dév Web", duration:"3 ans", subject:"dev", note:"Écoles privées" }
];

function badgeLevel(level) {
  return `<span class="badge ${level.replace("+","")}">${level.toUpperCase()}</span>`;
}

function badgeSubject(sub) {
  return `<span class="badge ${sub}">${sub === "dev" ? "Développement" : "Cybersécurité"}</span>`;
}

function loadTable() {
  const tbody = document.querySelector("#formationsTable tbody");
  tbody.innerHTML = "";

  const levelFilter = document.getElementById("levelFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;
  const search = document.getElementById("formationSearch").value.toLowerCase();

  formations
    .filter(f => levelFilter === "all" || f.level === levelFilter)
    .filter(f => subjectFilter === "all" || f.subject === subjectFilter)
    .filter(f => f.title.toLowerCase().includes(search))
    .forEach(row => {
      tbody.innerHTML += `
        <tr>
          <td>${badgeLevel(row.level)}</td>
          <td>${row.title}</td>
          <td>${row.duration}</td>
          <td>${badgeSubject(row.subject)}</td>
          <td>${row.note}</td>
        </tr>
      `;
    });
}

document.getElementById("levelFilter").addEventListener("change", loadTable);
document.getElementById("subjectFilter").addEventListener("change", loadTable);
document.getElementById("formationSearch").addEventListener("input", loadTable);

loadTable();

/* --------------------------------------------------
📄 EXPORT CSV
-------------------------------------------------- */
document.getElementById("exportCsv").addEventListener("click", () => {
  let csv = "Niveau;Intitulé;Durée;Matière;Remarques\n";

  document.querySelectorAll("#formationsTable tbody tr").forEach(row => {
    const cols = [...row.querySelectorAll("td")].map(td => td.innerText);
    csv += cols.join(";") + "\n";
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "formations.csv";
  link.click();
});

/* --------------------------------------------------
🎯 QUIZ
-------------------------------------------------- */
const quizData = [
  { question:"Que signifie HTML ?", choices:["HyperText Markup Language","Hyper Transfer Mail Link","Home Tool Modern Language"], answer:0 },
  { question:"Quel est le rôle du CSS ?", choices:["Gérer l'apparence","Gérer une base","Protéger le réseau"], answer:0 },
  { question:"Métier qui cherche des failles ?", choices:["Data Scientist","Pentester","Chef de projet"], answer:1 }
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
        ${q.choices.map((c,i)=>`<button class="quiz-choice" data-id="${i}">${c}</button>`).join("")}
      </div>
      <p class="quiz-feedback"></p>
    `;

    document.querySelectorAll(".quiz-choice").forEach(btn => {
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
    container.innerHTML = `
      <h3>Quiz terminé</h3>
      <p>Score : <strong>${score} / ${quizData.length}</strong></p>
      <button id="retry">Rejouer</button>
    `;

    document.getElementById("retry").onclick = () => startQuiz();
  }

  showQuestion();
}

startQuiz();

/* --------------------------------------------------
🎮 MINI-JEU
-------------------------------------------------- */
const items = [
  { text:"HTML", category:"Développement" },
  { text:"Firewall", category:"Cybersécurité" },
  { text:"JavaScript", category:"Développement" },
  { text:"Phishing", category:"Cybersécurité" }
];

const categories = ["Développement", "Cybersécurité"];

function initGame() {
  const dragBox = document.querySelector(".draggables");
  const targetBox = document.querySelector(".targets");
  dragBox.innerHTML = "";
  targetBox.innerHTML = "";

  let correct = 0;

  categories.forEach(cat => {
    const zone = document.createElement("div");
    zone.className = "dropzone";
    zone.dataset.cat = cat;
    zone.innerHTML = `<h4>${cat}</h4>`;
    targetBox.appendChild(zone);
  });

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "draggable";
    div.draggable = true;
    div.textContent = item.text;
    div.dataset.cat = item.category;
    div.dataset.id = index;

    dragBox.appendChild(div);

    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", index);
    });
  });

  document.querySelectorAll(".dropzone").forEach(zone => {
    zone.addEventListener("dragover", e => e.preventDefault());

    zone.addEventListener("drop", e => {
      const id = e.dataTransfer.getData("text/plain");
      const dragged = document.querySelector(`.draggable[data-id="${id}"]`);
      const item = items[id];

      if (item.category === zone.dataset.cat) {
        zone.appendChild(dragged);
        correct++;
        if (correct === items.length) {
          setTimeout(() => {
            alert("🎉 Bravo ! Tu as tout bien classé !");
            initGame();
          }, 400);
        }
      }
    });
  });
}

initGame();

/* --------------------------------------------------
📱 PWA
-------------------------------------------------- */
let deferredPrompt;
const installBtn = document.querySelector(".install");

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", () => {
  deferredPrompt.prompt();
  installBtn.classList.add("hidden");
});
