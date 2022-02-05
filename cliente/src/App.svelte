<script>
  export let name ='';

  function fetchMessage () {
    fetch('http://localhost:3000/saludo')
      .then(response => response.json())
        .then(response => {
            console.log(response)
            name=response
          })
        .catch(error => console.log(error));
  }
</script>

<button on:click={fetchMessage}>Saludar</button>
{name}

