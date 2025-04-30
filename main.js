const tableBody = document.querySelector("#mountain-table tbody");
const searchInput = document.querySelector("#search");
const tempUnit = document.querySelector("#temp-unit");
const elevUnit = document.querySelector("#elevation-unit");
const currency = document.querySelector("#currency");

let mountainData = [];

function loadMountains() {
  fetch("data/mountains.json")
    .then(res => res.json())
    .then(data => {
      mountainData = data;
      renderTable(data);
    });
}

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(m => {
    const temp = convertTemp(m.temperature_c);
    const elev = convertElevation(m.elevation_m);
    const price = convertCurrency(m.price_usd);
    const row = `<tr>
      <td>${m.name}</td>
      <td>${m.location}</td>
      <td>${temp}</td>
      <td>${elev}</td>
      <td>${price}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function convertTemp(c) {
  return tempUnit.value === "f" ? `${(c * 9/5 + 32).toFixed(1)} °F` : `${c} °C`;
}

function convertElevation(m) {
  return elevUnit.value === "ft" ? `${(m * 3.281).toFixed(0)} ft` : `${m} mdpl`;
}

function convertCurrency(usd) {
  let rate = { idr: 16000, eur: 0.9, usd: 1 }[currency.value];
  let symbol = { idr: "Rp", eur: "€", usd: "$" }[currency.value];
  return `${symbol}${(usd * rate).toLocaleString()}`;
}

function filterMountains() {
  const query = searchInput.value.toLowerCase();
  const filtered = mountainData.filter(m => m.name.toLowerCase().includes(query));
  renderTable(filtered);
}

[tempUnit, elevUnit, currency, searchInput].forEach(el =>
  el.addEventListener("change", () => filterMountains())
);
searchInput.addEventListener("keyup", () => filterMountains());

loadMountains();
