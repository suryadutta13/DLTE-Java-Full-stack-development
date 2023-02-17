function script(){
    let json=[
        {
            "id":"surya",
            "password":"12345"
        },
        {
            "id":"san",
            "password":"1234"
        },
        {
            "id":"rocky",
            "password":"1234"
        }
    ]
    let uid=document.forms['login'].id.value;
    let upass=document.forms['login'].pass.value;
    json.forEach((item) => {
        if(item.id == uid && item.password==upass ){
            window.location.href="http://127.0.0.1:5500/assgg.html"
        }
    });
}