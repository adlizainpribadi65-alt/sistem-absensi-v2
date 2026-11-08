/* AbsensiPro Application Logic - SPA Controller */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Real-time Elements
    updateClock();
    setInterval(updateClock, 1000);
    
    // 2. Render Component Data
    renderDashboard();
    initCharts();
    
    // 3. Navigation Controller
    initNavigation();
    
    // 4. Lucide Icons Refresher
    if (window.lucide) {
        lucide.createIcons();
    }
    
    console.log("AbsensiPro Dashboard Initialized Successfully.");
});

/* --- UI Renderers --- */

function renderDashboard() {
    // Render Department Scores
    const deptList = document.getElementById('dept-scores-list');
    if (deptList) {
        deptList.innerHTML = INITIAL_DATA.departments.map(dept => `
            <tr>
                <td><strong>${dept.name}</strong></td>
                <td>${dept.present} / ${dept.total}</td>
                <td>
                    <div class="mini-trend">
                        <span>${dept.score}%</span>
                    </div>
                </td>
                <td><span class="badge-${dept.status.toLowerCase()}">${dept.status}</span></td>
            </tr>
        `).join('');
    }

    // Render Shift Progress
    const shiftList = document.getElementById('shift-progress-list');
    if (shiftList) {
        shiftList.innerHTML = INITIAL_DATA.shifts.map(shift => `
            <div class="shift-item">
                <div class="shift-info">
                    <span>${shift.name}</span>
                    <span>${Math.round((shift.active / shift.capacity) * 100)}%</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${(shift.active / shift.capacity) * 100}%; background: ${shift.color}"></div>
                </div>
            </div>
        `).join('');
    }

    // Render Recent Activity Feed
    const feedList = document.getElementById('recent-activity-feed');
    if (feedList) {
        feedList.innerHTML = INITIAL_DATA.recentActivity.map(act => `
            <div class="feed-item">
                <img src="${act.avatar}" class="feed-avatar" alt="${act.name}">
                <div class="feed-content">
                    <p><strong>${act.name}</strong> ${act.action === 'Check-in' ? 'melakukan scan masuk' : 'melakukan scan keluar'}</p>
                    <div class="feed-meta">
                        <span><i data-lucide="map-pin" style="width:12px; vertical-align:middle"></i> ${act.dept}</span>
                        <span class="time-tag">Jam ${act.time}</span>
                    </div>
                </div>
                <div class="status-dot ${act.status.toLowerCase() === 'late' ? 'rose' : 'emerald'}"></div>
            </div>
        `).join('');
        if (window.lucide) lucide.createIcons();
    }
}

/* --- Charts Initialization --- */

function initCharts() {
    const ctx = document.getElementById('attendanceTrendChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: INITIAL_DATA.weeklyTrend.labels,
            datasets: [
                {
                    label: 'Kehadiran Karyawan',
                    data: INITIAL_DATA.weeklyTrend.datasets[0].data,
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                },
                {
                    label: 'Keterlambatan',
                    data: INITIAL_DATA.weeklyTrend.datasets[1].data,
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.05)',
                    fill: false,
                    tension: 0.4,
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#94a3b8',
                        font: { family: 'Inter', size: 11 },
                        usePointStyle: true
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1e293b',
                    titleColor: '#fff',
                    bodyColor: '#cbd5e1',
                    padding: 12,
                    cornerRadius: 8
                }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                    ticks: { color: '#64748b', font: { size: 10 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#64748b', font: { size: 10 } }
                }
            }
        }
    });
}

/* --- Event Handlers & Utils --- */

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const views = document.querySelectorAll('.view');
    const pageTitle = document.getElementById('page-title');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = link.getAttribute('data-view');
            
            // Toggle Active Link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Toggle Section View
            views.forEach(v => {
                v.classList.remove('active');
                if (v.id === `${targetView}-view`) {
                    v.classList.add('active');
                }
            });

            // Update Header Name
            const names = {
                'dashboard': 'Dashboard Operasional',
                'log': 'Log Kehadiran Karyawan',
                'employees': 'Database SDM',
                'reports': 'Laporan & Analisis',
                'shifts': 'Manajemen Jadwal Shift',
                'settings': 'Pengaturan Sistem'
            };
            pageTitle.textContent = names[targetView] || 'AbsensiPro';
        });
    });
}

function updateClock() {
    const clockEl = document.getElementById('live-clock');
    const dateEl = document.getElementById('live-date');
    if (!clockEl) return;

    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('en-US', { hour12: false });
    
    // Format Date: 10 April 2026
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('id-ID', options);
}

// Add random interaction simulation
setInterval(() => {
    // Slightly fluctuate stats to make dashboard look real
    const totalEl = document.getElementById('stat-present');
    if (totalEl && Math.random() > 0.7) {
        let current = parseInt(totalEl.innerText.replace(',', ''));
        const change = Math.random() > 0.5 ? 1 : -1;
        totalEl.innerText = (current + change).toLocaleString();
    }
}, 5000);
