/* AbsensiPro Mock Database - Garment Factory Context */

const INITIAL_DATA = {
    stats: {
        totalEmployees: 1420,
        presentToday: 1385,
        lateToday: 18,
        absentToday: 12,
        onLeave: 5,
        overtimeActive: 24
    },
    
    departments: [
        { id: 'cut', name: 'Potong Kulit (Cutting)', present: 145, total: 150, score: 98, status: 'Optimal' },
        { id: 'stich', name: 'Penjahitan (Stitching)', present: 840, total: 865, score: 92, status: 'Padat' },
        { id: 'sole', name: 'Perakitan Sol (Assembly)', present: 210, total: 215, score: 95, status: 'Optimal' },
        { id: 'qc', name: 'Cek Kualitas (QC)', present: 110, total: 110, score: 100, status: 'Sempurna' },
        { id: 'log', name: 'Gudang & Logistik', present: 80, total: 80, score: 100, status: 'Sempurna' }
    ],
    
    shifts: [
        { name: 'Shift Pagi (07:00 - 15:00)', active: 850, capacity: 900, color: '#6366f1' },
        { name: 'Shift Siang (15:00 - 23:00)', active: 450, capacity: 500, color: '#0ea5e9' },
        { name: 'Shift Malam (23:00 - 07:00)', active: 85, capacity: 100, color: '#10b981' }
    ],
    
    recentActivity: [
        { id: 101, name: 'Ahmad Faisal', action: 'Check-in', time: '16:55:12', dept: 'Line Stitching', status: 'On-time', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad' },
        { id: 102, name: 'Siti Aminah', action: 'Check-out', time: '16:52:05', dept: 'QC Akhir', status: 'End Shift', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti' },
        { id: 103, name: 'Budi Raharjo', action: 'Check-in', time: '16:48:30', dept: 'Potong Kulit', status: 'Late', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi' },
        { id: 104, name: 'Leli Riani', action: 'Check-in', time: '16:45:00', dept: 'Perakitan Sol', status: 'On-time', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leli' },
        { id: 105, name: 'Eko Prasetyo', action: 'Check-out', time: '16:40:15', dept: 'Warehouse', status: 'Permit', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eko' },
        { id: 106, name: 'Dewi Lestari', action: 'Check-in', time: '16:35:22', dept: 'QC In-line', status: 'On-time', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi' }
    ],
    
    weeklyTrend: {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        datasets: [
            { label: 'Hadir', data: [1380, 1405, 1390, 1410, 1385, 950, 200], color: '#6366f1' },
            { label: 'Terlambat', data: [22, 15, 28, 12, 18, 10, 2], color: '#f59e0b' }
        ]
    }
};

const EMPLOYEES = [
    { id: 'EMP001', name: 'Ahmad Faisal', dept: 'Sewing', position: 'Operator', joinDate: '2023-01-15' },
    { id: 'EMP002', name: 'Siti Aminah', dept: 'Finishing', position: 'Supervisor', joinDate: '2022-05-10' },
    { id: 'EMP003', name: 'Budi Raharjo', dept: 'Cutting', position: 'Staff', joinDate: '2021-11-20' },
    { id: 'EMP004', name: 'Leli Riani', dept: 'Sewing', position: 'Operator', joinDate: '2023-03-01' },
    { id: 'EMP005', name: 'Eko Prasetyo', dept: 'Logistic', position: 'Staff', joinDate: '2022-09-12' },
    { id: 'EMP006', name: 'Dewi Lestari', dept: 'Quality Control', position: 'Inspector', joinDate: '2023-06-15' }
];
