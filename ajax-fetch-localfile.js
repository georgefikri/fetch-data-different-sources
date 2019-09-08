  /* working with local file */
  fetch('restaurants.json')
  .then(response => response.json())
  .then(data => {
    let content = document.getElementById('dataCont');
    let output = '';

    for (let i in data.restaurants) {
        output += `
          <div class="dataAPI">
              <p> name: ${data.restaurants[i].name}</id>
              <p> neighborhood: ${data.restaurants[i].neighborhood}</id>
              <p> address: ${data.restaurants[i].address}</id>
          </div>
        `
    }
    content.innerHTML  = output
  })
 