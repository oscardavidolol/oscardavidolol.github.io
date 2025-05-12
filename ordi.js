fetch('https://randomuser.me/api/?results=1')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
 
    const html = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <h4 class="fw-bold">${user.name.first} ${user.name.last}</h4>
 
      <p><i class="bi bi-person"></i> ${user.name.first} ${user.name.last}</p>
      <p><i class="bi bi-telephone"></i> ${user.phone}</p>
      <p><i class="bi bi-envelope"></i> ${user.email}</p>
      <p><i class="bi bi-geo-alt"></i> ${user.location.city}, ${user.location.country}</p>
    `;
 
    document.getElementById('user-card').innerHTML = html;
  })
  .catch(error => console.error('Error al cargar usuario:', error));