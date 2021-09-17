export default function GetApi(){
    function Episodios(){
        fetch('https://www.breakingbadapi.com/api/episodes').then(function(res){
            return res.json()
        }).then(function(data){
           
            for(var i=0;i<61;i++){ 
                console.log(data[i])
                var div = document.createElement('div')
                div.setAttribute('id','conteudo')
                 var title = document.createElement('H1');
                 title.innerHTML = data[i].title
                document.body.appendChild(title)
                // episode number
                var epiNumber = document.createElement('H3')
                epiNumber.innerHTML = data[i].episode
                document.body.appendChild(epiNumber)
                // date
                var date = document.createElement('P')
                date.innerHTML = data[i].air_date
                var season = document.createElement('h5')
                season.innerHTML = data[i].season
                div.appendChild(title)
                div.appendChild(epiNumber)
                div.appendChild(date)
                document.body.appendChild(div,title,epiNumber,date,season)
            }
           
        })
    }
    // personagens
    function Personagens(){
        fetch('https://www.breakingbadapi.com/api/characters').then(function(res){
            return res.json()
        }).then(function(data){
             console.log(data)
        
            for(var i=0;i<=60;i++){
                // create a div
             var div = document.createElement('div')
             div.setAttribute('id','conteudo')
             var h1 = document.createElement("h1")
             var imagem = document.createElement('img')
             var occupation = document.createElement('h3')
             var birthday = document.createElement('P')
             birthday.innerHTML = data[i].birthday
             occupation.innerHTML = data[i].occupation[0]
             imagem.setAttribute('src',data[i].img)
             h1.innerHTML = data[i].name;
             div.appendChild(h1)
             div.appendChild(imagem)
             div.appendChild(occupation)
             div.appendChild(birthday)
             document.body.appendChild(div,h1,imagem,occupation,birthday)

   
    }
       })
    
     }

    return(<>
    
        <button onClick={Episodios}>Episodios</button>
        <button onClick={Personagens}>Personagens</button>
        
        
   </> )
}