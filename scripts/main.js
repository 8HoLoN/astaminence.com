(function(){
    fetch('json/slogan.json')
    .then(function(response){
        return response.json();
    })
    .then(function(json) {
      marquee(json,document.querySelector('#slogan-marquee'))
    });

})();