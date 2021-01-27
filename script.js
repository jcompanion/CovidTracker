

var ctx = document.getElementById('myChart').getContext('2d');
let day;
let date = [];
let deaths = [];




fetch('https://api.covidtracking.com/v1/us/daily.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        console.log(data[0].date)
        for (let i = 0; i < 10; i += 1) {
          date.push(data[i].date);
          
          deaths.push(data[i].death)
          
        }

        // reverse data
        date.reverse();
        deaths.reverse();
        
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'bar',
      
          // The data for our dataset
          data: {
              labels: date,
              datasets: [{
                  label: 'Covid Tracker - US Deaths - Last 10 Days',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: deaths,
              }]
          },
      
          // Configuration options go here
          options: {}
    
        });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

 
