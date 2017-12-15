document.getElementById('lbsInput').addEventListener('input',function(e){
    var pounds=e.target.value;
    
    document.getElementById('gramsOutput').innerHTML=pounds/.0022046;
    document.getElementById('kgOutput').innerHTML=pounds/2.204622;
    document.getElementById('ozOutput').innerHTML=pounds/0.0625;

})