var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');

Chart.defaults.global.defaultFontColor = 'dimgrey';
Chart.defaults.global.defaultFontSize = 16;

var data = {
     labels: ["Seventy Five 75%", "Twenty Five 25 %"],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                'dimgrey',
                'lightgrey'],
            data: [25, 75],
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data
});
