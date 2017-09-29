/*
 * Horoscope Project - Jasper Adams - 9/26/17
 */


function validateName(x) {
    if (x == "") {
        alert("Please Enter Your Name");
        return false;
    }
}

function validateDate(x, y) {
    if (x == "" || y == "") {
        alert("Invalid Date");
        return false;
    }
    if (y == 2 && (x == 31 || x == 30 || x == 29)) {
        alert("Invalid Date");
        return false;
    }
    if (x == 31 && (y == 9 || x == 4 || x == 6 || x == 11)) {
        alert("Invalid Date");
        return false;
    }
    if (x >= 32 || y >= 13) {
        alert("Invalid Date");
        return false;
    }
}

function determineNum(x, y){
    if((y == 1 && x >= 20) || (y == 2 && x <= 18)){
        return 1; //Aquarius
    }
    if((y == 2 && x >= 219) || (y == 3 && x <= 20)){
        return 2; //Pisces
    }
    if((y == 3 && x >= 21) || (y == 4 && x <= 19)){
        return 3; //Aries
    }
    if((y == 4 && x >= 20) || (y == 5 && x <= 20)){
        return 4; //Taurus
    }
    if((y == 5 && x >= 21) || (y == 6 && x <= 20)){
        return 5; //Gemini
    }
    if((y == 6 && x >= 21) || (y == 7 && x <= 22)){
        return 6; //Cancer
    }
    if((y == 7 && x >= 23) || (y == 8 && x <= 22)){
        return 7; //Leo
    }
    if((y == 8 && x >= 23) || (y == 9 && x <= 22)){
        return 8; //Virgo
    }
    if((y == 9 && x >= 23) || (y == 10 && x <= 22)){
        return 9; //Libra
    }
    if((y == 10 && x >= 23) || (y == 11 && x <= 21)){
        return 10; //Scorpio
    }
    if((y == 11 && x >= 22) || (y == 12 && x <= 21)){
        return 11; //Sagittarius
    }
    if((y == 12 && x >= 22) || (y == 1 && x <= 19)){
        return 12; //Capricorn
    }
}

function determineSign(x, y){
    var a = determineNum(x, y);
    var sign = "";
    if(a == 1) {
        sign = "Aquarius";
    }
    if(a == 2) {
        sign = "Pisces";
    }
    if(a == 3) {
        sign = "Aries";
    }
    if(a == 4) {
        sign = "Taurus";
    }
    if(a == 5) {
        sign = "Gemini";
    }
    if(a == 6) {
        sign = "Cancer";
    }
    if(a == 7) {
        sign = "Leo";
    }
    if(a == 8) {
        sign = "Virgo";
    }
    if(a == 9) {
        sign = "Libra";
    }
    if(a == 10) {
        sign = "Scorpio";
    }
    if(a == 11) {
        sign = "Sagittarius";
    }
    if(a == 12) {
        sign = "Capricorn";
    }
    return sign;
}

function determineImage(x, y){
    var a = determineNum(x, y);
    return "img/" + a + ".png"
}

function determineHoroscope(x,y){
    var a = determineNum(x, y);
    var horo = "";
    if(a == 1) {
        horo = "This is a time of great potential and personal growth." +
            " Hard work and success are there, too, but your greatest " +
            "progress may be made internally rather than externally.";
    }
    if(a == 2) {
        horo = "This is a year of pure magic! Take the time to" +
            " distinguish between what's real and what's illusion" +
            " and you'll safely navigate any and all situations. ";
    }
    if(a == 3) {
        horo = "You've got charm, smarts, and the element of" +
            " surprise going for you all year long! Now what do you" +
            " want to do with all these cosmic gifts?";
    }
    if(a == 4) {
        horo = "This year, focus on your own well-being above all else." +
            " You can increase your material wealth and health this way," +
            " and also structure a more stable future.";
    }
    if(a == 5) {
        horo = "Make the most of your people skills, make the big changes" +
            " you want and need, and advance your goals for the future." +
            " You'll have endless ideas and insights.";
    }
    if(a == 6) {
        horo = "This can be a highwater year full of major achievements," +
            " crucial decisions and changes for you. Great things are" +
            " possible with so much transformative energy aimed your way.";
    }
    if(a == 7) {
        horo = "This is a year on fire, pouring energy into your work," +
            " career, and creativity sectors. Keep your ambition and " +
            "work ethic sky high.";
    }
    if(a == 8) {
        horo = "This year will blast off into an adventure of work and" +
            " career possibilities for Virgos. Thoughts and ideas" +
            " to move you ahead will be abundant and achievable all year.";
    }
    if(a == 9) {
        horo = "You can do endless good things. Strong allies, partners," +
            " and friends are there with you. Have a persistent vision," +
            " help and be helpful, and you should have a magnificent year!";
    }
    if(a == 10) {
        horo = "You may not recognize just how lucky you are going to be this" +
            " year! You will be wired, intense, and focused on your chosen work." +
            " Keep an eye out for lucky opportunities and be ready to pounce.";
    }
    if(a == 11) {
        horo = "This is a year wide open with opportunities. There is plenty of" +
            " energy that will prompt you to dig in and make tremendous progress.";
    }
    if(a == 12) {
        horo = "It's your year to charge ahead, make bold changes for progress," +
            " success, and achieve greater respect in the world. You will" +
            " be empowered and emboldened all year long.";
    }
    return horo;
}

function checkBirthday(x, y){
    var res = "";
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() +1 ;
    if(x == dd && y == mm){
        res = "Happy Birthday! ";
    }
    return res;
}

function onSubmit(){
    var name = document.getElementById("Name").value;
    var d = parseInt(document.getElementById("selectDay").value);
    var m = parseInt(document.getElementById("selectMonth").value);
    validateName(name);
    validateDate(d, m);
    document.getElementById("sign").innerHTML = "Hi " + name + ". " + checkBirthday(d, m) + "Your sign is: " + determineSign(d, m);
    document.getElementById("image").src = determineImage(d, m);
    document.getElementById("horoscope").innerHTML = determineHoroscope(d, m);
}
