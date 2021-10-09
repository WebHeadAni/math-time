player_1 = localStorage.getItem("player1");
player_2 = localStorage.getItem("player2");

P1s = 0;
P2s = 0;

document.getElementById("player1_name").innerHTML = player_1 + " : ";
document.getElementById("player2_name").innerHTML = player_2 + " : ";
document.getElementById("player1_score").innerHTML = P1s;
document.getElementById("player2_score").innerHTML = P2s;
document.getElementById("player_question").innerHTML = "question turn - " + player_1;
document.getElementById("player_answer").innerHTML = "answer turn - " + player_2;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lgt_by_2  = Math.floor(word.length/2);
    charAt2 = word.charAt(lgt_by_2);
    console.log(charAt2);
    lgt_minus1 = word.length-1;
    charAt3 = word.charAt(lgt_minus1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt1.replace(charAt3,"_");
    console.log(remove_charAt3);

    questionword = "<h4 id='qw'>Q . " + remove_charAt3 +"</h4>";
    answerword = "<br> Answer : <input type='text' id='aw'>";
    checkbutton =  "<br><br> <button class='btn btn-info' onclick='check()'> check</button>";
    row = questionword+answerword+checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}