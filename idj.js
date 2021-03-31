const d_name="BOLT13819450";
const api_key="44b2de6b-7e68-40e7-a27f-814b58afe008";
const  base_url = "https://cloud.boltiot.com/remote/";

function digitalWrite(pin,val){
    var p = new XMLHttpRequest(); 
    p.open("GET", base_url+api_key+"/digitalWrite?pin="+pin+"&state="+val+"&deviceName="+d_name,true);
    p.send();    
}
