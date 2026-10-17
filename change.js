const change = document.getElementById("change")

function change_all() {
    if(document.getElementsByTagName('div')[4].innerText==='Mastykina'){
        document.getElementsByTagName('div')[4].innerText='Мастыкина';
        document.getElementsByTagName('div')[5].innerText='Александра';
        document.getElementsByTagName('div')[6].innerText='Дмитриевна';
        document.getElementsByTagName('div')[7].innerText='жен';
        document.getElementsByTagName('div')[9].innerText='г. Москва';
        document.getElementById('change').innerText='English';
    }
    else {
        document.getElementsByTagName('div')[4].innerText='Mastykina';
        document.getElementsByTagName('div')[5].innerText='Aleksandra';
        document.getElementsByTagName('div')[6].innerText='Dmitrievna';
        document.getElementsByTagName('div')[7].innerText='fem';
        document.getElementsByTagName('div')[9].innerText='Moscow';
        document.getElementById('change').innerText='Русский';
    }
}

change.addEventListener("click", change_all)