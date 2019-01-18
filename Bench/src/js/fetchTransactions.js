$(document).ready(function() {
  $.ajax({
    dataType: "json",
    url: "http://resttest.bench.co/transactions/1.json"
  }).then(data => {
    console.log(data);
    $(".greeting-id").append(data.id);
    $(".greeting-content").append(data.content);
  });
});
