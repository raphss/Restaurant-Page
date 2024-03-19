import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const redColor = '#e83737b0';

const clockIcon = `
    <svg fill="none" height="4vh" viewBox="0 0 24 24" width="4vh" xmlns="http://www.w3.org/2000/svg">
        <path d="m12 2c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm4.35 13.57c-.14.24-.39.37-.65.37-.13 0-.26-.03-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03z" fill="${redColor}"/>
    </svg>
`;

const phoneIcon = `
    <svg height="4vh" width="4vh" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="m497.39 361.8-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6a370.66 370.66 0 0 1 -177.19-177.19l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112a24.16 24.16 0 0 0 -27.5-13.9l-104 24a24 24 0 0 0 -18.6 23.39c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0 -14.01-27.6z" fill="${redColor}"/>
    </svg>
`;

const mapMarkerIcon = `
    <svg height="4vh" width="4vh" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        <path d="m172.268 501.67c-145.298-210.639-172.268-232.257-172.268-309.67 0-106.039 85.961-192 192-192s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zm19.732-229.67c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" fill="${redColor}"/>
    </svg>
`;

function settingsMap() {
  const latitude = 35.694323;
  const longitude = 139.70161;

  const mapMarkerIcon2 = `
    <svg height="8vh" width="8vh" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        <path d="m172.268 501.67c-145.298-210.639-172.268-232.257-172.268-309.67 0-106.039 85.961-192 192-192s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zm19.732-229.67c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" fill="#be0000"/>
    </svg>
`;

  const map = L.map('map').setView([latitude, longitude], 18);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  L.marker([latitude, longitude], {
    icon: L.divIcon({
      className: 'custom-icon',
      html: mapMarkerIcon2,
    }),
  }).addTo(map);
}

function createAbout() {
  const about = document.createElement('div');
  about.classList.add('about');

  const aboutText = document.createElement('h2');
  aboutText.textContent = 'Best japanese food in your country';
  const orderText = document.createElement('h3');
  orderText.textContent = 'Place your order by calling or visiting us!';

  const info = document.createElement('div');
  info.classList.add('info');

  const schedule = document.createElement('p');
  schedule.innerHTML = `
        <span style="vertical-align: middle">${clockIcon}</span> 
        Monday-Thusday: 8am-8pm 
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Friday-Sunday: 8am-11pm
    `;

  const contactNum = document.createElement('p');
  contactNum.innerHTML = `<span style="vertical-align: middle">${phoneIcon}</span>&nbsp;0123-456-789`;

  const address = document.createElement('p');
  address.innerHTML = `
        <span style="vertical-align: middle">${mapMarkerIcon}</span>
        1 Chome-19 Kabukichō,
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Tokyo 160-0021, Japan
    `;

  info.appendChild(schedule);
  info.appendChild(contactNum);
  info.appendChild(address);

  const mapDiv = document.createElement('div');
  mapDiv.id = 'map';

  const container = document.createElement('div');
  container.classList.add('container');

  container.appendChild(info);
  container.appendChild(mapDiv);

  about.appendChild(aboutText);
  about.appendChild(orderText);
  about.appendChild(container);

  return about;
}

function about() {
  const content = document.getElementById('content');
  content.textContent = '';
  content.appendChild(createAbout());
  settingsMap();
}

export default about;
