// Quiz Data - 64 Pertanyaan tentang K-drama & Webtoon "Teach You a Lesson"
const allQuestions = [
    // === KARAKTER & AKTOR (8) ===
    { question: "Siapa nama tokoh utama dalam 'Teach You a Lesson' yang merupakan inspector khusus?", options: ["Na Hwa-jin", "Bong Geun-dae", "Choi Seung-hyo", "Bae Seok-ryu"], correct: 0 },
    { question: "Siapa aktor yang membintangi sebagai Na Hwa-jin?", options: ["Lee Sung-min", "Jin Ki-joo", "Pyo Ji-hoon", "Kim Mu-yeol"], correct: 3 },
    { question: "Apa nama tokoh pendamping Na Hwa-jin yang terkesan biasa saja?", options: ["Bong Geun-dae", "Kang Dan-ho", "Jung Mo-eum", "Lee Tae-hwan"], correct: 0 },
    { question: "Siapa aktor veteran yang bermain di drama ini?", options: ["Lee Sung-min", "Song Joong-ki", "Hyun Bin", "Lee Min-ho"], correct: 0 },
    { question: "Aktris Jin Ki-joo berperan sebagai siapa?", options: ["Guru", "Siswa korban bullying", "Ibu Na Hwa-jin", "Kepala sekolah"], correct: 1 },
    { question: "Pyo Ji-hoon berperan sebagai karakter dengan sifat apa?", options: ["Bully utama", "Siswa pintar", "Guru baik hati", "Polisi"], correct: 0 },
    { question: "Apa pekerjaan Na Hwa-jin sebelum menjadi inspector?", options: ["Guru", "Polisi", "Militer khusus", "Pengacara"], correct: 2 },
    { question: "Bong Geun-dae dikenal sebagai karakter yang bagaimana?", options: ["Agresif", "Unassuming / biasa saja", "Kaya raya", "Jahat"], correct: 1 },
    
    // === PLOT & STORYLINE (8) ===
    { question: "Apa tujuan utama para inspector dalam drama ini?", options: ["Mengajar siswa berprestasi", "Menghukum siswa dan orang tua yang melanggar", "Membangun sekolah baru", "Menyelenggarakan lomba"], correct: 1 },
    { question: "Apa yang memicu Na Hwa-jin menjadi inspector?", options: ["Dendam pribadi", "Keinginan membantu korban bullying", "Perintah atasan", "Uang"], correct: 1 },
    { question: "Konflik utama dalam drama ini berpusat di mana?", options: ["Kantor polisi", "Sekolah", "Rumah sakit", "Pengadilan"], correct: 1 },
    { question: "Apa yang dilakukan Na Hwa-jin terhadap pelaku bullying?", options: ["Menasehati dengan lembut", "Menggunakan special ops skills", "Melaporkan ke polisi", "Membiarkan saja"], correct: 1 },
    { question: "Siapa yang dilindungi Na Hwa-jin di sekolah?", options: ["Siswa yang ingin belajar", "Siswa populer", "Guru senior", "Kepala sekolah"], correct: 0 },
    { question: "Apa yang terjadi pada otoritas guru di sekolah tersebut?", options: ["Menguat", "Runtuh / collapse", "Tetap sama", "Tidak ada"], correct: 1 },
    { question: "Bagaimana cara Na Hwa-jin menangani geng sekolah?", options: ["Diplomasi", "Special ops skills", "Negosiasi", "Mengabaikan"], correct: 1 },
    { question: "Apa yang membuat drama ini berbeda dari drama sekolah biasa?", options: ["Ada romansa", "Ada action brutal", "Ada komedi", "Ada musik"], correct: 1 },
    
    // === WEBTOON SUMBER (8) ===
    { question: "Drama 'Teach You a Lesson' didasarkan pada webtoon apa?", options: ["Love Next Door", "Get Schooled / True Education", "The World of the Married", "School 2026"], correct: 1 },
    { question: "Apa judul asli webtoon dalam bahasa Korea?", options: ["참교육 (Chamgyoyuk)", "학교 (Hakgyo)", "교육 (Gyoyuk)", "선생님 (Seonsaengnim)"], correct: 0 },
    { question: "Apa arti 'Chamgyoyuk' dalam bahasa Indonesia?", options: ["Pendidikan sejati", "Sekolah baru", "Guru hebat", "Siswa pintar"], correct: 0 },
    { question: "Webtoon 'Get Schooled' bercerita tentang apa?", options: ["Romansa sekolah", "Program khusus untuk menghukum siswa/orang tua", "Lomba akademik", "Klub musik"], correct: 1 },
    { question: "Siapa penulis skenario drama ini yang juga terlibat di webtoon?", options: ["Lee Nam-kyu", "Kim Da-hee", "Moon Jong-ho", "Tidak diketahui"], correct: 0 },
    { question: "Apa genre webtoon aslinya?", options: ["Romance", "Action/School", "Horror", "Fantasy"], correct: 1 },
    { question: "Webtoon ini populer di platform apa?", options: ["Webtoon/Naver", "Instagram", "Twitter", "Facebook"], correct: 0 },
    { question: "Apa tema utama webtoon ini?", options: ["Cinta segitiga", "Pendidikan & keadilan", "Petualangan", "Misteri"], correct: 1 },
    
    // === PRODUKSI & RILIS (8) ===
    { question: "Kapan drama 'Teach You a Lesson' tayang di Netflix?", options: ["2024", "2025", "2026", "2023"], correct: 2 },
    { question: "Berapa episode total drama 'Teach You a Lesson'?", options: ["8 episode", "10 episode", "12 episode", "16 episode"], correct: 1 },
    { question: "Di platform apa drama ini streaming?", options: ["Disney+", "Netflix", "Viki", "iQIYI"], correct: 1 },
    { question: "Siapa saja penulis skenario drama ini?", options: ["Lee Nam-kyu, Kim Da-hee, Moon Jong-ho", "Hong Sisters", "Kim Eun-sook", "Park Hae-young"], correct: 0 },
    { question: "Apa rating usia untuk drama ini?", options: ["TV-PG", "TV-14", "TV-MA", "G"], correct: 2 },
    { question: "Genre apa yang melekat pada drama ini?", options: ["Romance", "Action, Crime, Comedy, Mystery", "Fantasy", "Historical"], correct: 1 },
    { question: "Bahasa asli drama ini?", options: ["Jepang", "Mandarin", "Korea", "Inggris"], correct: 2 },
    { question: "Apa judul internasional drama ini?", options: ["True Education", "Teach You a Lesson", "School Inspector", "Get Schooled"], correct: 1 },
    
    // === TEMA & GENRE (8) ===
    { question: "Apa tema utama dari drama 'Teach You a Lesson'?", options: ["Romansa di sekolah", "Komedi pendidikan", "Action dan penanganan bullying", "Drama keluarga"], correct: 2 },
    { question: "Drama ini mengangkat isu sosial apa?", options: ["Kemiskinan", "Bullying di sekolah", "Korupsi politik", "Perceraian"], correct: 1 },
    { question: "Apa pesan moral utama drama ini?", options: ["Cinta itu buta", "Keadilan harus ditegakkan", "Uang segalanya", "Keluarga nomor satu"], correct: 1 },
    { question: "Bagaimana drama ini menggambarkan sistem pendidikan?", options: ["Sempurna", "Runtuh dan butuh perbaikan", "Tidak ada", "Ideal"], correct: 1 },
    { question: "Apa yang dikritik dalam drama ini?", options: ["Sistem pendidikan & otoritas guru", "Industri musik", "Politik", "Olahraga"], correct: 0 },
    { question: "Drama ini termasuk jenis drama apa?", options: ["Sageuk (historical)", "School/Action", "Medical", "Legal"], correct: 1 },
    { question: "Apa tone utama drama ini?", options: ["Light & fluffy", "Dark & intense", "Comedic", "Romantic"], correct: 1 },
    { question: "Drama ini cocok untuk penonton yang suka genre apa?", options: ["Romance", "Action & thriller", "Slice of life", "Fantasy"], correct: 1 },
    
    // === EPISODE SPESIFIK (8) ===
    { question: "Berapa menit rata-rata durasi per episode?", options: ["30 menit", "45-60 menit", "90 menit", "120 menit"], correct: 1 },
    { question: "Apa yang terjadi di 8 menit pertama episode 1?", options: ["Perkenalan karakter", "Premis drama menjadi jelas", "Plot twist", "Ending"], correct: 1 },
    { question: "Bagaimana struktur cerita drama ini?", options: ["Linear", "Non-linear", "Flashback-heavy", "Anthology"], correct: 0 },
    { question: "Apa yang membuat episode-episode terasa cepat?", options: ["Durasi pendek", "Pacing cepat & action", "Banyak dialog", "Sedikit adegan"], correct: 1 },
    { question: "Apakah ada plot twist di drama ini?", options: ["Tidak ada", "Ya, beberapa", "Hanya di akhir", "Setiap episode"], correct: 1 },
    { question: "Bagaimana ending drama ini?", options: ["Open ending", "Happy ending", "Sad ending", "Cliffhanger"], correct: 1 },
    { question: "Apa yang terjadi pada pelaku bullying di akhir cerita?", options: ["Lolos", "Dihukum", "Pindah sekolah", "Tidak jelas"], correct: 1 },
    { question: "Apakah ada season 2?", options: ["Sudah dikonfirmasi", "Belum ada info", "Sudah tayang", "Dibatalkan"], correct: 1 },
    
    // === LOKASI & SETTING (8) ===
    { question: "Di mana setting utama drama ini?", options: ["Seoul", "Busan", "Kota fiktif di Korea", "Pedesaan"], correct: 2 },
    { question: "Apa jenis sekolah yang ditampilkan?", options: ["SD", "SMP", "SMA", "Universitas"], correct: 2 },
    { question: "Bagaimana kondisi sekolah di drama ini?", options: ["Bersih & teratur", "Kacau & penuh bullying", "Mewah", "Tradisional"], correct: 1 },
    { question: "Apa yang unik dari sekolah ini?", options: ["Fasilitas lengkap", "Guru tidak berdaya", "Siswa semua pintar", "Tidak ada masalah"], correct: 1 },
    { question: "Di mana Na Hwa-jin pertama kali muncul?", options: ["Di sekolah", "Di kantor polisi", "Di jalanan", "Di rumah"], correct: 0 },
    { question: "Apa yang terlihat di latar belakang sekolah?", options: ["Pegunungan", "Kota besar", "Pantai", "Hutan"], correct: 1 },
    { question: "Bagaimana suasana kelas di drama ini?", options: ["Tenang", "Tegang & tidak terkendali", "Ceria", "Sepi"], correct: 1 },
    { question: "Apa yang sering terjadi di lorong sekolah?", options: ["Siswa belajar", "Bullying", "Guru mengajar", "Tidak ada"], correct: 1 },
    
    // === RATING & RECEPTION (8) ===
    { question: "Bagaimana rating drama ini di Rotten Tomatoes?", options: ["Rendah", "Sedang", "Tinggi/positif", "Belum ada"], correct: 2 },
    { question: "Apa kata Forbes tentang drama ini?", options: ["Buruk", "Salah satu drama terbaik tahun ini", "Biasa saja", "Tidak review"], correct: 1 },
    { question: "Bagaimana respons penonton Korea?", options: ["Negatif", "Campuran", "Positif", "Tidak ada respons"], correct: 2 },
    { question: "Apa yang dipuji dari drama ini?", options: ["Akting & cerita", "Kostum", "Lagu", "Lokasi"], correct: 0 },
    { question: "Drama ini dibandingkan dengan karya apa?", options: ["Crash Landing on You", "Get Schooled (webtoon)", "Goblin", "Vincenzo"], correct: 1 },
    { question: "Apa yang dikritik dari drama ini?", options: ["Durasi terlalu pendek", "Terlalu brutal untuk sebagian orang", "Akting buruk", "Cerita membosankan"], correct: 1 },
    { question: "Bagaimana popularitas drama ini di media sosial?", options: ["Tidak ada", "Sedang", "Viral/trending", "Dilarang"], correct: 2 },
    { question: "Apa yang membuat drama ini viral?", options: ["Adegan action & tema bullying", "Romansa", "Komed", "Musik"], correct: 0 }
];

// ============ STATE VARIABLES ============
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timer;
let timeLeft = 15;
let shuffledQuestions = [];
const QUESTIONS_PER_SESSION = 8;

// ============ DOM ELEMENTS ============
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const questionContainer = document.getElementById('questionContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const timerElement = document.getElementById('timer');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const historyBtn = document.getElementById('historyBtn');
const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const historyModal = document.getElementById('historyModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtn2 = document.getElementById('closeModalBtn2');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyList = document.getElementById('historyList');

// ============ UTILITY FUNCTIONS ============

// Fisher-Yates Shuffle
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Format tanggal & waktu
function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    const options = {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    };
    return date.toLocaleDateString('id-ID', options);
}

// ============ LOCALSTORAGE FUNCTIONS ============

function getHistory() {
    const data = localStorage.getItem('teachYouALessonHistory');
    return data ? JSON.parse(data) : [];
}

function saveHistory(entry) {
    const history = getHistory();
    history.unshift(entry);
    const limited = history.slice(0, 20);
    localStorage.setItem('teachYouALessonHistory', JSON.stringify(limited));
}

function clearHistory() {
    localStorage.removeItem('teachYouALessonHistory');
    renderHistory();
}

function getHighScore() {
    const history = getHistory();
    if (history.length === 0) return 0;
    return Math.max(...history.map(h => h.score));
}

// ============ RENDER FUNCTIONS ============

function renderHistory() {
    const history = getHistory();
    const highScore = getHighScore();
    
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-history';
        empty.textContent = 'Belum ada riwayat. Main quiz dulu! 🎮';
        historyList.appendChild(empty);
        return;
    }
    
    history.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        
        if (entry.score === highScore && entry.score > 0) {
            item.classList.add('best');
        }
        
        const rank = document.createElement('span');
        rank.className = 'history-rank';
        rank.textContent = `#${index + 1}`;
        
        const scoreEl = document.createElement('span');
        scoreEl.className = 'history-score';
        scoreEl.textContent = `${entry.score}/${entry.total}`;
        
        const dateEl = document.createElement('div');
        dateEl.className = 'history-date';
        dateEl.textContent = formatDateTime(entry.timestamp);
        
        const leftSide = document.createElement('div');
        leftSide.style.display = 'flex';
        leftSide.style.alignItems = 'center';
        leftSide.appendChild(rank);
        leftSide.appendChild(scoreEl);
        
        item.appendChild(leftSide);
        item.appendChild(dateEl);
        historyList.appendChild(item);
    });
}

// ============ QUIZ FUNCTIONS ============

function startQuiz() {
    startScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    quizScreen.classList.add('fade-in');
    
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(QUESTIONS_PER_SESSION).fill(null);
    
    // Acak 64 soal, lalu ambil 8 soal pertama
    shuffledQuestions = shuffleArray(allQuestions).slice(0, QUESTIONS_PER_SESSION);
    
    renderQuestion();
    startTimer();
}

function renderQuestion() {
    const q = shuffledQuestions[currentQuestion];
    
    const progress = ((currentQuestion + 1) / QUESTIONS_PER_SESSION) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `Soal ${currentQuestion + 1} dari ${QUESTIONS_PER_SESSION}`;
    
    questionContainer.innerHTML = '';
    
    const qNumber = document.createElement('div');
    qNumber.className = 'question-number';
    qNumber.textContent = `PERTANYAAN ${currentQuestion + 1}`;
    questionContainer.appendChild(qNumber);
    
    const qText = document.createElement('div');
    qText.className = 'question-text';
    qText.textContent = q.question;
    questionContainer.appendChild(qText);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, index) => {
        const option = document.createElement('div');
        option.className = 'option';
        if (userAnswers[currentQuestion] !== null) {
            option.classList.add('disabled');
            if (index === q.correct) option.classList.add('correct');
            else if (index === userAnswers[currentQuestion]) option.classList.add('wrong');
        }
        
        const letter = document.createElement('div');
        letter.className = 'option-letter';
        letter.textContent = letters[index];
        
        const text = document.createElement('div');
        text.textContent = opt;
        
        option.appendChild(letter);
        option.appendChild(text);
        option.dataset.index = index;
        optionsDiv.appendChild(option);
    });
    
    questionContainer.appendChild(optionsDiv);
    
    btnPrev.disabled = currentQuestion === 0;
    btnNext.textContent = currentQuestion === QUESTIONS_PER_SESSION - 1 ? 'Lihat Hasil' : 'Selanjutnya →';
}

// Event Delegation for Options
questionContainer.addEventListener('click', function(e) {
    const option = e.target.closest('.option');
    if (!option || option.classList.contains('disabled')) return;
    
    const selectedIndex = parseInt(option.dataset.index);
    userAnswers[currentQuestion] = selectedIndex;
    
    const options = questionContainer.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === shuffledQuestions[currentQuestion].correct) {
            opt.classList.add('correct');
        } else if (idx === selectedIndex) {
            opt.classList.add('wrong');
        }
    });
    
    clearInterval(timer);
    
    setTimeout(() => {
        if (currentQuestion < QUESTIONS_PER_SESSION - 1) {
            nextQuestion();
        } else {
            showResults();
        }
    }, 1000);
});

function startTimer() {
    timeLeft = 15;
    timerElement.textContent = `⏱️ ${timeLeft}`;
    timerElement.classList.remove('warning');
    
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `⏱️ ${timeLeft}`;
        
        if (timeLeft <= 5) timerElement.classList.add('warning');
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            userAnswers[currentQuestion] = -1;
            
            const options = questionContainer.querySelectorAll('.option');
            options.forEach((opt, idx) => {
                opt.classList.add('disabled');
                if (idx === shuffledQuestions[currentQuestion].correct) {
                    opt.classList.add('correct');
                }
            });
            
            setTimeout(() => {
                if (currentQuestion < QUESTIONS_PER_SESSION - 1) {
                    nextQuestion();
                } else {
                    showResults();
                }
            }, 1000);
        }
    }, 1000);
}

function nextQuestion() {
    if (currentQuestion < QUESTIONS_PER_SESSION - 1) {
        currentQuestion++;
        renderQuestion();
        if (userAnswers[currentQuestion] === null) startTimer();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        if (userAnswers[currentQuestion] === null) startTimer();
    }
}

function showResults() {
    score = 0;
    userAnswers.forEach((answer, idx) => {
        if (answer === shuffledQuestions[idx].correct) score++;
    });
    
    const historyEntry = {
        score: score,
        total: QUESTIONS_PER_SESSION,
        timestamp: Date.now()
    };
    saveHistory(historyEntry);
    
    const highScore = getHighScore();
    
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    resultScreen.classList.add('fade-in');
    
    const scoreDisplay = document.getElementById('scoreDisplay');
    const scoreMessage = document.getElementById('scoreMessage');
    const highScoreValue = document.getElementById('highScoreValue');
    const lastScoreValue = document.getElementById('lastScoreValue');
    const lastScoreTime = document.getElementById('lastScoreTime');
    
    scoreDisplay.textContent = `${score}/${QUESTIONS_PER_SESSION}`;
    highScoreValue.textContent = `${highScore}/${QUESTIONS_PER_SESSION}`;
    lastScoreValue.textContent = `${score}/${QUESTIONS_PER_SESSION}`;
    lastScoreTime.textContent = formatDateTime(historyEntry.timestamp);
    
    if (score === QUESTIONS_PER_SESSION) scoreMessage.textContent = '🎉 Sempurna! Kamu fans berat!';
    else if (score >= 6) scoreMessage.textContent = '👏 Bagus sekali! Pengetahuanmu luas!';
    else if (score >= 4) scoreMessage.textContent = '👍 Lumayan! Tapi bisa lebih baik!';
    else scoreMessage.textContent = '📚 Nonton dramanya dulu deh!';
}

// Modal functions
function openModal() {
    renderHistory();
    historyModal.style.display = 'flex';
}

function closeModal() {
    historyModal.style.display = 'none';
}

function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
}

// ============ EVENT LISTENERS ============

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);
darkModeBtn.addEventListener('click', toggleDarkMode);
historyBtn.addEventListener('click', openModal);
viewHistoryBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
closeModalBtn2.addEventListener('click', closeModal);

clearHistoryBtn.addEventListener('click', function() {
    if (confirm('Yakin mau hapus semua riwayat skor?')) {
        clearHistory();
    }
});

btnPrev.addEventListener('click', prevQuestion);
btnNext.addEventListener('click', nextQuestion);

historyModal.addEventListener('click', function(e) {
    if (e.target === historyModal) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (quizScreen.style.display === 'block') {
        if (e.key === 'ArrowRight') nextQuestion();
        else if (e.key === 'ArrowLeft') prevQuestion();
        else if (e.key >= '1' && e.key <= '4') {
            const options = questionContainer.querySelectorAll('.option');
            const index = parseInt(e.key) - 1;
            if (options[index] && !options[index].classList.contains('disabled')) {
                options[index].click();
            }
        }
    }
    if (e.key === 'Escape' && historyModal.style.display === 'flex') {
        closeModal();
    }
});