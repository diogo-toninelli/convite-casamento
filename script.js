
function show_contatos(element)
{
    element.innerHTML = contatos_HTML
}

function show_info(element)
{
element.innerHTML = info_HTML}

function show_igreja(element)
{
    element.innerHTML = igreja_HTML
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fade(element, type) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            if(type == 'contato')
            {
                show_contatos(element)
            }
            else if (type == 'info')
            {
                show_info(element)
            }
            else
            {
                show_igreja(element)
            }
            unfade(element)
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function contato()
{
    document.getElementById('contato').style.filter = 'opacity(0.5) drop-shadow(rgb(138, 75, 24) 0px 0px 0px)'
    document.getElementById('info').style.filter = ''
    document.getElementById('igreja').style.filter = ''
    fade(document.getElementById("texts"), 'contato')
}

function igreja()
{    document.getElementById('igreja').style.filter = 'opacity(0.5) drop-shadow(rgb(138, 75, 24) 0px 0px 0px)'
document.getElementById('contato').style.filter = ''
document.getElementById('info').style.filter = ''
fade(document.getElementById("texts"), 'igreja')}


function info()
{
    document.getElementById('info').style.filter = 'opacity(0.5) drop-shadow(rgb(138, 75, 24) 0px 0px 0px)'
    document.getElementById('contato').style.filter = ''
    document.getElementById('igreja').style.filter = ''
    fade(document.getElementById("texts"), 'info')
}

window.onload = function(){
const urlParams = new URLSearchParams(location.search);
element = document.getElementById('convidado')
element.innerText = urlParams.get('name')

info_HTML = document.getElementById("texts").innerHTML

gen = urlParams.get('f')

if (gen == 'f')
{text = 'Você e sua família foram convidados para o casamento de'}
else if (gen == 'm')
{text = 'Você foi convidada para o casamento de'}
else {
text = 'Você foi convidado para o casamento de'
}

document.getElementById('gen-text').innerText = text

contatos_HTML = `<div><span class="convidado">Telefones</span>
<br><br>
Diogo - 27 99772-3161 -
<a href="https://wa.me/5527997723161" target="_blank">Whatsapp do Diogo</a>

<br><br>

Ana Júlia - 34 98403-2177 - 
<a href="https://wa.me/5534984032177" target="_blank">Whatsapp da Ana Júlia</a>

<br><br><br>

<span class="convidado">Instagram</span><br><br>
Diogo - @diogo.toninelli - <a href="https://www.instagram.com/diogo.toninelli/" target="_blank">Perfil do Diogo</a>
<br><br>

Ana Júlia - @anaj_chagas - <a href="https://www.instagram.com/anaj_chagas/" target="_blank">Perfil da Ana</a></div>`
igreja_HTML = `Igreja Santo Antônio de Pádua Localizada na Av. Bicanga.
<br><br><br>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.172078645638!2d-40.20394858521993!3d-20.21016918644747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81c446c6ad565%3A0xca3eef8312e5eaf1!2sComunidade%20Santo%20Ant%C3%B4nio%20(CEB)%20-%20Bicanga!5e0!3m2!1spt-BR!2sbr!4v1677367891909!5m2!1spt-BR!2sbr" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`


};

