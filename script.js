/* Function called when click occurs */
function sayHappyNewYear(){

    /* Receive data from DOM */
    let enterData = document.getElementById('langChoice').value
    let resultSpace = document.getElementById('result')
    
    /* After selecting the value, displays the message */
    switch(enterData){
        case 'lang1':
            resultSpace.innerHTML = 'Frohes Neues Jahr!'
            break;
        case 'lang2':
            resultSpace.innerHTML = 'سنة سعيدة (sana sa’eedah)!'
            break;
        case 'lang3':
            resultSpace.innerHTML = 'Feliç any nou!'
            break;
        case 'lang4':
            resultSpace.innerHTML = 'Godt nytår!'
            break;
        case 'lang5':
            resultSpace.innerHTML = 'Šťastný nový rok!'
            break;
        case 'lang6':
            resultSpace.innerHTML = 'Feliz año nuevo!'
            break;
        case 'lang7':
            resultSpace.innerHTML = 'Bonne année!'
            break;
        case 'lang8':
            resultSpace.innerHTML = 'Καλή χρονιά (Kali chronia)!'
            break;
        case 'lang9':
            resultSpace.innerHTML = 'સાલ મુબારક (saal mubarak)!'
            break;
        case 'lang10':
            resultSpace.innerHTML = '	שָׁנָה טוֹבָה (shana tova)!'
            break;
        case 'lang11':
            resultSpace.innerHTML = 'Kung Hee Huat Tsai!'
            break;
        case 'lang12':
            resultSpace.innerHTML = 'Gelukkig Nieuwjaar!'
            break;
        case 'lang13':
            resultSpace.innerHTML = 'Happy New Year!'
            break;
        case 'lang14':
            resultSpace.innerHTML = 'Buon anno!'
            break;
        case 'lang15':
            resultSpace.innerHTML = 'あけまして おめでとう ございます (Akemashite Omedetou Gozaimasu)!'
            break;
        case 'lang16':
            resultSpace.innerHTML = 'Laimīgu Jauno gadu!'
            break;
        case 'lang17':
            resultSpace.innerHTML = 'Laimingu naujuju metu!'
            break;
        case 'lang18':
            resultSpace.innerHTML = '新年快乐 (Xin Nian Kuai Le)!'
            break;
        case 'lang19':
            resultSpace.innerHTML = 'Szczęśliwego nowego roku!'
            break;
        case 'lang20':
            resultSpace.innerHTML = 'Feliz ano novo!'
            break;
        case 'lang21':
            resultSpace.innerHTML = 'La mulți ani!'
            break;
        case 'lang22':
            resultSpace.innerHTML = 'С Новым Годом (S novim godom)!'
            break;
        case 'lang23':
            resultSpace.innerHTML = 'Srećna nova godina!'
            break;
        case 'lang24':
            resultSpace.innerHTML = 'Buiti iseri irumu!'
            break;
        case 'lang25':
            resultSpace.innerHTML = 'Sawatdee Pi Mai!'
            break;
        case 'lang26':
            resultSpace.innerHTML = 'Yeni yılınız kutlu olsun!'
            break;
        
            
    }
    
}

let btnClicked = 0

function openAbout(){
    let openAbout = document.getElementById('resultAbout')
    
    if(btnClicked === 0)    {
        openAbout.innerHTML = 'Welcome to my first app here at SoloLearn! I want to enjoy to wish a Happy 2020! May this year be full of learning and achievements for all of us!<br><br>A big hug, <br><a href="https://www.sololearn.com/Profile/4410458">Rafael Marchesin</a>'
        btnClicked = 1
    } else {
        openAbout.innerHTML = ""
        btnClicked = 0
    }
    
    
}