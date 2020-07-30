function buildDash(){
    var url="/api/state_population";
    d3.json(url).then((data)=>{
        console.log(data)

    })
}

buildDash()