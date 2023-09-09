
// ---------- Togglo settings-----------
$(function(){
    $('#click').on("click", function(){
        $('#settings-menu').slideToggle();
    })
    
})
$('#dark-btn').on("click", function(){
    $('#dark-btn').classList.toggle("dark-btn-on");
});


// ---------- Dark Mode -----------

let dark = document.getElementById('dark-btn');

dark.onclick = function(){
    dark.classList.toggle("dark-btn-on");
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}


if(localStorage.getItem("theme") == "light"){
    dark.classList.remove("dark-btn-on");
    document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem("theme") == "dark"){
    dark.classList.add("dark-btn-on");
    document.body.classList.add('dark-theme');
}
else{
    localStorage.setItem("theme", "light");
}




