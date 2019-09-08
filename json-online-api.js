fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
  .then(json => {
      let content = document.getElementById('dataCont');
      let output = '';

      for (let i in json) {
          output += `
            <div class="dataAPI">
                <p> id: ${json[i].id}</id>
                <p> name: ${json[i].name}</id>
                <p> email: ${json[i].address.city}</id>
            </div>
          `
      }
      content.innerHTML  = output
  }) 
