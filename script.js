// Konsaktants parole vienam semestrim
const CORRECT_PASSWORD = 'vecakiem2025';

// Pilni grafika dati latviešu valodā (parsēti no PDF)
const scheduleData = [
    {
        name: "1. klašu koris",
        hours: 2,
        location: "Kalnciema iela 160 / zāle, 108.",
        teacher: "Laila Kondratjeva",
        mon: "",
        tue: "14.00-14.40 (1.a,b kl.)",
        wed: "",
        thu: "",
        fri: "13.10-13.50 (1.m kl.)",
        classes: "1.a, 1.b, 1.m"
    },
    {
        name: "2. –4. klašu koris",
        hours: 2,
        location: "Kalnciema iela 160 / zāle, 108., 3.m, zāle, 101.",
        teacher: "Dace Valdemāre, Inga Bērziņa",
        mon: "14.00-14.50 (2.m-3.m)",
        tue: "",
        wed: "",
        thu: "14.00-14.50 (2.-4. a,b kl. koristi (3.m, 4.m meit.))",
        fri: "14.00-15.00 (2.-4. kl.)",
        classes: "2.a, 2.b, 2.m, 3.m, 4.m"
    },
    {
        name: "4. –7. klašu zēnu koris",
        hours: 2,
        location: "Šampētera iela 98 / 414.",
        teacher: "Didzis Soste",
        mon: "14.40-16.00 (4.m, 5.m klase)",
        tue: "",
        wed: "",
        thu: "",
        fri: "",
        classes: "4.m, 5.m"
    },
    {
        name: "Vokālais ansamblis „Mellenes” 2. klase",
        hours: 3,
        location: "Kalnciema iela 160 / zāle,108.",
        teacher: "Anda Upeniece",
        mon: "",
        tue: "",
        wed: "14.00-15.00",
        thu: "",
        fri: "13.15-14.15",
        classes: "2"
    },
    {
        name: "Vokālais ansamblis „Mellenes” 3. klase",
        hours: 3,
        location: "Kalnciema iela 160 / zāle, 108.",
        teacher: "Anda Upeniece",
        mon: "",
        tue: "13.00-14.00",
        wed: "13.00-14.00",
        thu: "",
        fri: "",
        classes: "3"
    },
    {
        name: "Vokālais ansamblis „Mellenes” 4. -6. klase",
        hours: 3,
        location: "Kalnciema iela 160 / zāle, 108.",
        teacher: "Anda Upeniece",
        mon: "",
        tue: "14.00-15.00",
        wed: "",
        thu: "",
        fri: "14.15-15.15",
        classes: "4, 5, 6"
    },
    {
        name: "2. –4. klašu vokālais ansamblis",
        hours: 2,
        location: "Kalnciema iela 160 / 2.",
        teacher: "Laila Kondratjeva",
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "14.50-15.30 (4.m klases meit.)",
        classes: "4.m"
    },
    {
        name: "Orķestris 5.-6. klasei",
        hours: 2,
        location: "Kalnciema iela 160 / zāle, 108.",
        teacher: "Edmunds Jonaitis",
        mon: "",
        tue: "",
        wed: "14.00-14.40; 14.50-15.00",
        thu: "",
        fri: "",
        classes: "5, 6"
    },
    {
        name: "Stīgu orķestris (vijoles spēle)",
        hours: 4,
        location: "Kalnciema iela 160 / zāle, 108.",
        teacher: "Dina Dorofejeva",
        mon: "",
        tue: "15.30-16.10 (orķestris)",
        wed: "13.10-13.50 (2.m kl.)",
        thu: "",
        fri: "",
        classes: "2.m"
    },
    {
        name: "Ģitāras studija",
        hours: 6,
        location: "Kalnciema iela 160 / 310.",
        teacher: "Atis Pelčers",
        mon: "",
        tue: "13.10-13.50 (3.kl.); 14.00-15.20 (4.-5.kl.); 15.30-16.10 (2.kl.); 16.20-17.40 (6.-9.kl.)",
        wed: "",
        thu: "",
        fri: "",
        classes: "2, 3, 4, 5, 6, 7, 8, 9"
    },
    {
        name: "Lietišķā māksla",
        hours: 8,
        location: "Kalnciema iela 160 / 84.",
        teacher: "Elīna Šteinberga",
        mon: "",
        tue: "",
        wed: "13.00-13.40 (1.a kl.); 13.50-14.30 (1.b kl.); 14.40-15.10 (1.m kl.); 15.20-16.00 (3.-4.kl.); 16.10-16.50 (2.a kl.); 17.00-18.00 (2.b kl.)",
        thu: "",
        fri: "17.00-18.00 (2.m kl.)",
        classes: "1.a, 1.b, 1.m, 2.a, 2.b, 2.m, 3, 4"
    },
    {
        name: "Vizuālās mākslas studija",
        hours: 3,
        location: "Kalnciema iela 160 / 1. st. 3.a kl. un 84.",
        teacher: "Elīna Šteinberga",
        mon: "",
        tue: "",
        wed: "",
        thu: "13.10-13.50 (3.klases); 14.00-15.30 (4.kl.-5.kl.)",
        fri: "",
        classes: "3, 4, 5"
    },
    {
        name: "Vizuālās mākslas studija (gleznošana)",
        hours: 3,
        location: "Kalnciema iela 160 / 84.",
        teacher: "Sanita Beķere",
        mon: "",
        tue: "16.20-17.00 (1.a kl.); 17.05-17.45 (1.b kl.)",
        wed: "",
        thu: "",
        fri: "",
        classes: "1.a, 1.b"
    },
    {
        name: "Vizuālās mākslas studija (gleznošana)",
        hours: 3,
        location: "Kalnciema iela 160 / 84.",
        teacher: "Enrike Heidemane",
        mon: "",
        tue: "15.30-16.10 (1.m kl.)",
        wed: "",
        thu: "",
        fri: "",
        classes: "1.m"
    },
    {
        name: "Tekstildarbi",
        hours: 3,
        location: "Kalnciema iela 160 / 84.",
        teacher: "Elīna Šteinberga",
        mon: "",
        tue: "",
        wed: "",
        thu: "14.50-17.00 (5.-6.kl.)",
        fri: "",
        classes: "5., 6."
    },
    {
        name: "Veidošana",
        hours: 10,
        location: "Kalnciema iela 160 / 84.",
        teacher: "Sanita Beķere",
        mon: "",
        tue: "",
        wed: "",
        thu: "12.00-12.40 (5.b kl.); 13.10-13.50 (5.a kl.)",
        fri: "8.30-9.10 (5.m kl.); 9.20-10.00 (5.m kl.); 10.20-11.00 (5.b kl.); 12.00-12.40 (5.a kl.); 13.50-14.30 (2./3./4.kl. (mainās pa nedēļām)); 14.40-15.20 (1.a); 15.30-16.10 (1.b); 16.20-17.00 (1.m)",
        classes: "1.a, 1.b, 1.m, 2., 3., 4., 5.a, 5.b, 5.m"
    },
    {
        name: "Kokapstrādes pulciņš",
        hours: 16,
        location: "Kalnciema iela 160 / 107.",
        teacher: "Guntis Bērzs- Bērziņš",
        mon: "",
        tue: "15.40-16.20 (4.m kl.); 16.30-17.10 (2.b kl.); 17.20-18.00 (2.a kl.)",
        wed: "13.10-13.50 (3.a kl.); 14.00-14.40 (3.b, m kl.); 15.00-15.40 (4.b kl.); 15.50-16.30 (4.a kl.); 16.40-17.20 (2.m kl.)",
        thu: "",
        fri: "",
        classes: "2.a, 2.b, 2.m, 3.a, 3.b, 3.m, 4.a, 4.b, 4.m"
    },
    {
        name: "Dabaszinību pulciņš",
        hours: 2,
        location: "Kalnciema iela 160 / 310.",
        teacher: "Laura Katrīna Baumane",
        mon: "",
        tue: "14.00-15.30 (3.-4.kl.)",
        wed: "",
        thu: "",
        fri: "",
        classes: "3., 4."
    },
    {
        name: "Koriģējošā vingrošana",
        hours: 3,
        location: "Kalnciema iela 160 / Eirtmijas zāle, 102.",
        teacher: "Ilze Spīķe",
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "13.10-13.50 (3., 4.kl.); 15.20-16.00 (2.kl. - 5.kl.); 16.10-16.50 (1.kl.)",
        classes: "1., 2., 3., 4., 5."
    },
    {
        name: "Spēļu vingrošana",
        hours: 6,
        location: "Kalnciema iela 160 / Sporta zāle, 83.",
        teacher: "Lolita Krasone",
        mon: "",
        tue: "",
        wed: "",
        thu: "13.10-13.50 (3.a kl.); 16.35-17.15 (1.m kl.); 17.20-18.00 (1.a, 1.b)",
        fri: "15.05-15.45 (3.-4.kl.); 15.50-16.30 (2.m kl.); 16.35-17.15 (2.a, 2.b kl.)",
        classes: "1.a, 1.b, 1.m, 2.a, 2.b, 2.m, 3.a, 3., 4."
    },
    {
        name: "Vispusīga fiziskā sagatavotība \"Mazie sportisti\"",
        hours: 3,
        location: "Kalnciema iela 160 / Sporta zāle, 83.",
        teacher: "Lolita Krasone",
        mon: "",
        tue: "",
        wed: "",
        thu: "15.30-16.30 (5.-6.kl.)",
        fri: "14.00-15.00 (4.kl.)",
        classes: "4., 5., 6."
    },
    {
        name: "Galda teniss 2.-6. klasei",
        hours: 2,
        location: "Kalnciema iela 160 / Sporta zāle, 83.",
        teacher: "Edmunds Jonaitis",
        mon: "",
        tue: "15.35-17.05",
        wed: "",
        thu: "",
        fri: "",
        classes: "2., 3., 4., 5., 6."
    },
    {
        name: "Mazais dancis",
        hours: 6,
        location: "Kalnciema iela 160 / Eiritmijas zāle, 102.",
        teacher: "Elizbete Olengoviča",
        mon: "14.00-14.40 (2.-3.kl.); 15.00-15.40 (1.a, m kl.); 15.40-16.20 (1.b kl.)",
        tue: "",
        wed: "14.50-15.30 (2.-3.kl.); 15.40-16.20 (1.a., m kl.); 16.30-17.10 (1.b kl.)",
        thu: "",
        fri: "",
        classes: "1.a, 1.b, 1.m, 2., 3."
    },
    {
        name: "Teātris",
        hours: 3,
        location: "Kalnciema iela 160 / 310.",
        teacher: "Stefānija Toma",
        mon: "",
        tue: "",
        wed: "13.10-14.10 (2.-3.kl.)",
        thu: "14.00-15.00 (4.-6.kl.)",
        fri: "",
        classes: "2., 3., 4., 5., 6."
    },
    {
        name: "Eiritmija",
        hours: 22,
        location: "Kalnciema iela 160 / Zāle, 102.",
        teacher: "Jūlija Jansone",
        mon: "10.20-11.00 (3.a kl.); 11.10-11.50 (6.a kl.); 13.10-13.50 (1.m kl.); 14.00-14.40 (4.b. kl.)",
        tue: "10.20-11.00 (1.b. kl.); 11.10-11.50 (5.b kl.); 12.20-13.00 (2.b kl.); 13.10-13.50 (5.a kl.); 14.00-14.40 (2.a kl.); 15.00-15.40 (2.m kl.)",
        wed: "10.20-11.00 (1.a kl.); 11.30-12.10 (4.m kl.); 12.00-12.40 (5.a kl.); 13.10-13.50 (6.a kl.); 14.00-14.40 (4.a kl.)",
        thu: "10.20-11.00 (3.b kl.); 11.10-11.50 (6.b kl.); 12.20-13.00 (3.m kl.); 13.10-13.50 (6.b kl.); 14.00-14.40 (5.b kl.)",
        fri: "",
        classes: "1.a, 1.b, 1.m, 2.a, 2.b, 2.m, 3.a, 3.b, 3.m, 4.a, 4.b, 4.m, 5.a, 5.b, 6.a, 6.b"
    },
    {
        name: "Liras spēle",
        hours: 6,
        location: "Kalnciema iela 160 / 211.-1.a kl., 213.-1.b kl., 212.-1.m kl.",
        teacher: "Laila Kondratjeva",
        mon: "10.20-11.00 (1.b kl.)",
        tue: "10.20-11.00 (1.a kl.)",
        wed: "11.10-11.50 (1.m kl.)",
        thu: "11.10-11.50 (1.m kl.)",
        fri: "10.20-11.00 (1.b kl.); 11.10-11.50 (1.a kl.)",
        classes: "1.a, 1.b, 1.m"
    },
    {
        name: "Kokles spēle",
        hours: 12,
        location: "Kalnciema iela 160 / 108., 209., 310., 311., 313.",
        teacher: "Elizbete Olengoviča",
        mon: "12.20-13.00 (3.m kl.); 13.10-13.50 (4.b kl.)",
        tue: "10.20-11.00 (3.b kl.); 11.30-12.10 (3.a kl.); 12.20-13.00 (4.a kl.)",
        wed: "10.20-11.00 (3.b kl.); 11.30-12.10 (3.a kl.); 12.20-13.00 (4.a kl.); 13.10-13.50; 14.00-14.40 (4.m kl.)",
        thu: "11.30-12.10 (3.m kl.)",
        fri: "10.20-11.00 (4.b kl.)",
        classes: "3.a, 3.b, 3.m, 4.a, 4.b, 4.m"
    },
    // Entries from sheet "Š98" (higher grades, different location)
    {
        name: "5. –9. klašu koris „Rīta spārni”",
        hours: 8,
        location: "Šampētera iela 98 / Zāle, 413.",
        teacher: "Dace Valdemāre, Arta Pakalne-Stārka",
        mon: "15.00-16.20; 15.20-16.00",
        tue: "",
        wed: "14.40-16.00; 15.20-16.00",
        thu: "",
        fri: "",
        classes: "5, 6, 7, 8, 9"
    },
    {
        name: "5. –7. klašu zēnu koris",
        hours: 4,
        location: "Šampētera iela 98 / 414.",
        teacher: "Didzis Soste",
        mon: "14.40-16.00",
        tue: "",
        wed: "14.40-16.00",
        thu: "",
        fri: "",
        classes: "5., 6., 7."
    },
    {
        name: "5. –9. klašu zēnu vokālais ansamblis",
        hours: 2,
        location: "Šampētera iela 98 / 413.",
        teacher: "Arta Pakalne-Stārka",
        mon: "14.40-15.20",
        tue: "",
        wed: "14.40-15.20",
        thu: "",
        fri: "",
        classes: "5., 6., 7., 8., 9."
    },
    {
        name: "Orķestris",
        hours: 2,
        location: "Šampētera iela 98 / 413.",
        teacher: "Edmunds Jonaitis",
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "16.20-17.00; 17.10-17.50",
        classes: "5., 6., 7., 8., 9." // Assumed based on context
    },
    {
        name: "Galda teniss 6.-9.kl.",
        hours: 2,
        location: "Šampētera iela 98",
        teacher: "Edmunds Jonaitis",
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "14.50-16.10",
        classes: "6., 7., 8., 9."
    }
];

// Funkcija, lai ģenerētu ieteikumus datalistam - tikai individuālās paralēlās klases
function generateSuggestions() {
    // Precīzs visu unikālo paralēlo klašu saraksts no grafika
    const allClasses = [
        "1.a", "1.b", "1.m",
        "2.a", "2.b", "2.m",
        "3.a", "3.b", "3.m",
        "4.a", "4.b", "4.m",
        "5.a", "5.b", "5.m",
        "6.a", "6.b"
    ];
    // Sakārto pēc klases numura, tad pēc burta
    const sortedSuggestions = allClasses.sort((a, b) => {
        const gradeA = parseInt(a.match(/(\d+)/)[1]);
        const gradeB = parseInt(b.match(/(\d+)/)[1]);
        if (gradeA !== gradeB) return gradeA - gradeB;
        return a.localeCompare(b);
    });
    const datalist = document.getElementById('suggestions');
    datalist.innerHTML = sortedSuggestions.map(s => `<option value="${s}">`).join('');
}

// Funkcija, lai filtrētu attiecīgos laikus no dienas virknes
function getRelevantTimes(dayTimes, searchClass) {
    if (!dayTimes) return '';
    const parts = dayTimes.split(';');
    const relevant = parts.filter(part => part.toLowerCase().includes(searchClass.toLowerCase()));
    return relevant.join('; ') || '';
}

// Meklēšanas un filtrēšanas funkcija
function performSearch(query) {
    if (!query) {
        showAll();
        return;
    }
    const lowerQuery = query.toLowerCase();
    let results = [];
    let searchType = '';

    // Vispirms pārbauda skolotāju
    if (scheduleData.some(item => item.teacher.toLowerCase().includes(lowerQuery))) {
        searchType = 'teacher';
        results = scheduleData.filter(item => item.teacher.toLowerCase().includes(lowerQuery));
    }
    // Tad pulciņu
    else if (scheduleData.some(item => item.name.toLowerCase().includes(lowerQuery))) {
        searchType = 'club';
        results = scheduleData.filter(item => item.name.toLowerCase().includes(lowerQuery));
    }
    // Tad klasi - ar precīzu saskaņošanu paralēlēm un diapazoniem
    else {
        searchType = 'class';
        // Izvelk klases numuru no vaicājuma (piem., "2.a" -> "2")
        const gradeMatch = lowerQuery.match(/(\d+)/);
        const exactClass = lowerQuery.replace(/\s*/g, ''); // Noņem atstarpes, piem. "2.a"
        const isSpecific = /[a-z]/.test(exactClass); // Ja ir burts, tad specifiska paralēle
        if (gradeMatch) {
            const grade = gradeMatch[1];
            results = scheduleData.filter(item => {
                const cls = item.classes.toLowerCase();
                if (isSpecific) {
                    // Ja specifiska paralēle, rāda TIKAI tās, kur classes ietver precīzi šo paralēli (piem. "1.a" -> tikai "1.a")
                    return cls.includes(exactClass);
                } else {
                    // Ja nav specifisks (tikai "2"), parāda visu klasi ar grade + '. vai etc
                    return cls.includes(exactClass) ||
                           cls.includes(grade + '.') ||
                           cls.includes(grade + '.-') ||
                           cls.includes('.' + grade + '.') ||
                           cls.includes(grade + ',');
                }
            });
        } else {
            // Rezerves variants precīzai saskaņošanai
            results = scheduleData.filter(item => item.classes.toLowerCase().includes(lowerQuery));
        }
    }

    if (results.length === 0) {
        document.getElementById('results').innerHTML = '';
        document.getElementById('noResults').classList.remove('hidden');
        return;
    }

    document.getElementById('noResults').classList.add('hidden');
    renderResults(results, searchType, query);
}

// Rezultātu renderēšana kā grupētas kartes
function renderResults(items, searchType, query) {
    const resultsDiv = document.getElementById('results');
    let html = '';

    // Grupēšana: klases meklējumiem - viena galvenā karte ar vaicājuma klasi
    if (searchType === 'class') {
        html += `<div class="card">
            <h3>${query} klase (Pulciņi un laiki)</h3>
            ${items.map(item => `
                <div class="sub-card">
                    <div class="teacher">Skolotāja: ${item.teacher || 'TBD'}</div>
                    <div class="name">${item.name}</div>
                    <div class="location">Nodarbību vieta: ${item.location}</div>
                    ${getRelevantTimes(item.mon, query) ? `<div class="day">Pirmdiena: ${getRelevantTimes(item.mon, query)}</div>` : ''}
                    ${getRelevantTimes(item.tue, query) ? `<div class="day">Otrdiena: ${getRelevantTimes(item.tue, query)}</div>` : ''}
                    ${getRelevantTimes(item.wed, query) ? `<div class="day">Trešdiena: ${getRelevantTimes(item.wed, query)}</div>` : ''}
                    ${getRelevantTimes(item.thu, query) ? `<div class="day">Ceturtdiena: ${getRelevantTimes(item.thu, query)}</div>` : ''}
                    ${getRelevantTimes(item.fri, query) ? `<div class="day">Piektdiena: ${getRelevantTimes(item.fri, query)}</div>` : ''}
                </div>
            `).join('')}
        </div>`;
    } else {
        // Citas meklēšanas - grupē pēc atslēgas
        const grouped = {};
        items.forEach(item => {
            const key = searchType === 'teacher' ? item.teacher : item.name;
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(item);
        });

        Object.keys(grouped).forEach(key => {
            const groupItems = grouped[key];
            const titleSuffix = searchType === 'teacher' ? '(Visas klases un laiki)' : '(Visas klases un laiki)';
            html += `<div class="card">
                <h3>${key} ${titleSuffix}</h3>
                ${groupItems.map(item => `
                    <div class="sub-card">
                        <div class="teacher">Skolotāja: ${item.teacher || 'TBD'}</div>
                        <div class="name">${item.name}</div>
                        <div class="location">Nodarbību vieta: ${item.location}</div>
                        ${item.mon ? `<div class="day">Pirmdiena: ${item.mon}</div>` : ''}
                        ${item.tue ? `<div class="day">Otrdiena: ${item.tue}</div>` : ''}
                        ${item.wed ? `<div class="day">Trešdiena: ${item.wed}</div>` : ''}
                        ${item.thu ? `<div class="day">Ceturtdiena: ${item.thu}</div>` : ''}
                        ${item.fri ? `<div class="day">Piektdiena: ${item.fri}</div>` : ''}
                    </div>
                `).join('')}
            </div>`;
        });
    }

    resultsDiv.innerHTML = html;
}

// Rādīt visu (sākotnējais skats)
function showAll() {
    renderResults(scheduleData, 'club', '');
}

// Notīrīt meklēšanu
function clearSearch() {
    document.getElementById('searchInput').value = '';
    showAll();
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    const toggleBtn = document.querySelector('#theme-toggle');
    toggleBtn.innerHTML = isDark ? '☀️' : '🌙';
}

// Login modal functions
function closeLogin() {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) loginModal.style.display = 'none';
    alert('Lai turpinātu, lūdzu, ievadiet paroli!');
}

function logout() {
    const mainContent = document.getElementById('mainContent');
    const loginModal = document.getElementById('loginModal');
    const loginError = document.getElementById('loginError');
    if (mainContent) mainContent.classList.add('hidden');
    if (loginModal) loginModal.style.display = 'block';
    if (loginError) loginError.classList.add('hidden');
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    generateSuggestions();
    showAll(); // Sagatavo saturu fonā

    // Ielādē saglabāto dark mode
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        const toggleBtn = document.querySelector('#theme-toggle');
        if (toggleBtn) toggleBtn.innerHTML = '☀️';
    }

    // Rādi login modalu, slēpj galveno saturu
    const mainContent = document.getElementById('mainContent');
    const loginModal = document.getElementById('loginModal');
    if (mainContent) mainContent.classList.add('hidden');
    if (loginModal) loginModal.classList.remove('hidden');

    // Event listeners
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const passwordInput = document.getElementById('passwordInput');
            const password = passwordInput ? passwordInput.value : '';
            const loginError = document.getElementById('loginError');
            if (password === CORRECT_PASSWORD) {
                if (loginModal) loginModal.style.display = 'none';
                if (mainContent) mainContent.classList.remove('hidden');
                if (passwordInput) passwordInput.value = '';
                if (loginError) loginError.classList.add('hidden');
            } else {
                if (loginError) loginError.classList.remove('hidden');
            }
        });
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', (e) => performSearch(e.target.value));

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) themeToggle.addEventListener('click', toggleDarkMode);
});
