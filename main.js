import { years_list } from './students_birth_years.js';

window.changeTab = function(tab) {
  const menuUtama = document.getElementById('main-menu');
  const daftarSiswa = document.getElementById('students-list');
  const tentangPembuat = document.getElementById('about-dev');
  const jadwal = document.getElementById('timetable');
  const strukturKls = document.getElementById('class-structure');

  if (tab === 'mainMenu') {
    menuUtama.style.display = 'block';
    daftarSiswa.style.display = 'none';
    tentangPembuat.style.display = 'none';
    jadwal.style.display = 'none';
    strukturKls.style.display = 'none';
  } else if (tab === 'daftarSiswa') {
    menuUtama.style.display = 'none';
    daftarSiswa.style.display = 'block';
    tentangPembuat.style.display = 'none';
    jadwal.style.display = 'none';
    strukturKls.style.display = 'none';
  } else if (tab === 'tentangPembuat') {
    menuUtama.style.display = 'none';
    daftarSiswa.style.display = 'none';
    tentangPembuat.style.display = 'block';
    jadwal.style.display = 'none';
    strukturKls.style.display = 'none';
  } else if (tab === 'jadwal') {
    menuUtama.style.display = 'none';
    daftarSiswa.style.display = 'none';
    tentangPembuat.style.display = 'none';
    jadwal.style.display = 'block';
    strukturKls.style.display = 'none';
  } else if (tab === 'strukturKls') {
    menuUtama.style.display = 'none';
    daftarSiswa.style.display = 'none';
    tentangPembuat.style.display = 'none';
    jadwal.style.display = 'none';
    strukturKls.style.display = 'block';
  }
};

window.calculateAge = function(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

window.populateTable = function() {
  const students = [
    { name: 'Adelfio Fatihul Ihsan', birthDate: 'Orangnya gk inget \n-_-', birthYear: years_list[0] },
    { name: 'Andika Pratama', birthDate: `15 Februari ${years_list[1]}`, birthYear: years_list[1] },
    { name: 'Arya Mahendra', birthDate: `Tidak tau`, birthYear: years_list[2] },
    { name: 'Bagas Septa Ramadana', birthDate: `16 September ${years_list[3]}`, birthYear: years_list[3] },
    { name: 'Dicky Alif Farizi', birthDate: `10 Desember ${years_list[4]}`, birthYear: years_list[4] },
    { name: 'Dzainul Mustakim', birthDate: `25 Agustus ${years_list[5]}`, birthYear: years_list[5] },
    { name: 'Moh Sholeman', birthDate: `15 September ${years_list[6]}`, birthYear: years_list[6] },
    { name: 'Moh Sulton Nul Wafi', birthDate: `8 April ${years_list[7]}`, birthYear: years_list[7] },
    { name: 'Mohammad Halid', birthDate: `2 Mei ${years_list[8]}`, birthYear: years_list[8] },
    { name: 'Mohammad Ridwan', birthDate: `20 Juli ${years_list[9]}`, birthYear: years_list[9] },
    { name: 'Muchammad Alam Syah', birthDate: `16 Juni ${years_list[10]}`, birthYear: years_list[10] },
    { name: 'Muhammad Naufil Efendi', birthDate: `30 November ${years_list[11]}`, birthYear: years_list[11] },
    { name: 'Rendi Ardiansah', birthDate: `15 September ${years_list[12]}`, birthYear: years_list[12] },
    { name: 'Reyhan Indarwan Ismail', birthDate: `13 September ${years_list[13]}`, birthYear: years_list[13] },
    { name: 'Rifki Al Acsari', birthDate: 'Tahun tidak valid', birthYear: years_list[14] },
    { name: 'Rihan', birthDate: `8 April ${years_list[15]}`, birthYear: years_list[15] },
    { name: 'Syahrur Ridho Farel', birthDate: `10 Oktober ${years_list[16]}`, birthYear: years_list[16] },
    { name: 'Wildan Nizam Pratama', birthDate: `20 Januari ${years_list[17]}`, birthYear: years_list[17] },
    { name: 'Zhafi Ainun Na\'im', birthDate: `22 Desember ${years_list[18]}`, birthYear: years_list[18] },
    { name: 'Zhafran Qorish Al Ghifari', birthDate: `19 Oktober ${years_list[19]}`, birthYear: years_list[19] },
    { name: 'Zidni Gybre Mukorrobin', birthDate: `16 Juni ${years_list[20]}`, birthYear: years_list[20] }
  ];

  const table = document.querySelector('#students-list table');

  students.forEach((student, index) => {
    const row = document.createElement('tr');

    const cellNo = document.createElement('td');
    cellNo.innerText = (index + 1).toString();
    row.appendChild(cellNo);

    const cellName = document.createElement('td');
    cellName.innerText = student.name;
    row.appendChild(cellName);

    const cellBirthDate = document.createElement('td');
    cellBirthDate.innerText = student.birthDate;
    row.appendChild(cellBirthDate);

    const cellAge = document.createElement('td');
    cellAge.innerText = student.birthYear ? calculateAge(student.birthYear).toString() : '';
    cellAge.classList.add('umur');
    row.appendChild(cellAge);

    table.appendChild(row);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const switchThemeButton = document.querySelector('.switch-theme .icon');

  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.style.setProperty('--col-theme', '#fefefe');
      document.documentElement.style.setProperty('--inv-col-theme', '#333');
      switchThemeButton.classList.remove('ion-md-moon');
      switchThemeButton.classList.add('ion-md-sunny');
    } else {
      document.documentElement.style.setProperty('--col-theme', '#333');
      document.documentElement.style.setProperty('--inv-col-theme', '#fefefe');
      switchThemeButton.classList.remove('ion-md-sunny');
      switchThemeButton.classList.add('ion-md-moon');
    }
  }

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  switchThemeButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.style.getPropertyValue('--col-theme') === '#333' ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  populateTable();
});
