var options = ['rock','paper','scissors'];
var selected = 0;
var elementt = $('#target2');
var rps1 = "1rock";
var rps2 = "1paper";
var rps3 = "1scissors";

function rpsselection(playerSelection){
    selected = Math.floor(Math.random() * (options.length));
    document.getElementById("rpsDisplay").innerHTML = options[selected];
    // elementt.html(options[selected]);
    if (playerSelection === 1){
        if(selected == 0){
            document.getElementById("rpsresult").innerHTML = "draw";
            document.getElementById("rpsresult2").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult4").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠸⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult5").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣆⠀⣻⣿⣿⣄⣤⣄⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⠋⣸⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult6").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⠙⠉⣉⣿⡿⣿⣿⡏⠙⢉⣉⣛⠛⣛⣶⣶⣤⣾⣿⡛⠀⣤⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠘⣄⡹⣿⡀⣿⣿⡇⠀⠀⠁⠉⠀⢀⣿⠛⣻⣿⣇⠀⢀⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣴⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢠⣼⣿⡇⣼⡘⢻⣄⣾⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣇⣿⣿⣿⣿⣿⣿⡆⡷⠀⠀⠀⢸⡏⣹⣿⣿⣿⣧⣼⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣮⡛⠿⢿⢿⣿⠀⠃⠀⢀⢰⡏⢰⣿⣿⣿⣿⣿⢿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡿⣿⣿⣿⣿⣿⣿⠶⣶⣾⣏⠀⠀⠀⠀⠙⣷⣿⡟⠛⠛⣋⣤⣾⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult12").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠉⠙⣿⣷⣀⣀⣀⣠⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡿⢿⡽⠀⠀⠘⣿⣿⣿⣿⣿⣿⠃⠀⣤⣿⣿⣿⣿⣿⣿⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣽⣾⡟⠃⠐⠀⠀⠀⠀⠹⣿⣿⡿⠋⠁⠀⠘⠛⠛⢿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult15").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣷⣤⣀⣤⣀⣒⣚⣴⣿⣿⡁⠀⠀⠀⠀⠀⠀⢹⣿⣿⢿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣶⣶⣿⠛⣁⣼⣿⣿⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult17").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult18").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult19").innerHTML = "                                                       "
            document.getElementById("rpsresult20").innerHTML = "                                                       "   
            ;
        }
        if(selected == 1){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
            document.getElementById("rpsresult2").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⣾⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣪⣽⣿⣿⣦⣄⣀⢀⣀⣀⣀⢀⢀⣀⣠⣴⣶⣿⣿⣿⣿⠏"
            document.getElementById("rpsresult4").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⡿⠃⠀"
            document.getElementById("rpsresult5").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣄⢠⢿⣽⣿⣿⣯⣿⣾⣶⣷⣿⣿⣿⣿⣿⣿⣿⣏⣻⣿⣿⣿⡟⠁⠀⠀"
            document.getElementById("rpsresult6").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠈⣿⣿⣿⣿⣮⣿⣻⡯⣽⣿⣿⣾⣿⣿⣻⡿⢿⣫⣿⣾⣾⡗⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⠀⣯⡿⣿⣿⣿⣷⣾⣴⣽⣏⡄⢘⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⣿⣿⣦⣍⠟⡛⠿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣻⡏⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = " ⠀⠀⠀⠀⠀⠀⡠⠤⠦⠤⠤⡇⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣤⡀⠀⠀⠉⠉⠀⣀⣴⣿⣿⣿⠅⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = " ⠀⠀⢀⣀⣀⣀⡅⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⡿⠿⠟⠿⠿⣿⣿⣿⠀⢀⣠⣿⣿⣿⣿⢿⡿⠂⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = " ⠀⣠⠊⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠈⠉⠛⣿⣿⣿⣿⣿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult12").innerHTML = " ⣰⠓⠀⠀⠀⣻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣙⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = " ⢹⡁⠀⠀⠀⢟⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡾⠿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = " ⠀⡜⢶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣬⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult15").innerHTML = " ⠀⠀⠈⠹⢶⣆⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣰⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = " ⠀⠀⠀⠀⠀⠈⠛⠕⠲⠤⢤⢀⣀⣀⣀⣀⣀⣠⣤⡤⠼⠟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult17").innerHTML = "                                                       "
            document.getElementById("rpsresult18").innerHTML = "                                                       "
            document.getElementById("rpsresult19").innerHTML = "                                                       "
            document.getElementById("rpsresult20").innerHTML = "                                                       "   
            ;
        }
        if(selected == 2){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
            document.getElementById("rpsresult2").innerHTML = "⠀⠀ ⠀⠀  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣵⣶⣶⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = "⣰⣶⣶⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣟⢻⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult4").innerHTML = "⠘⢿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣠⣤⣤⣄⡤⢆⣰⣴⣤⣾⣿⣿⣿⣿⣷⣾⣿⣿⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult5").innerHTML = "⠀⠀⠹⣿⣷⣽⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult6").innerHTML = "⠀⠀⠀⠘⣿⣿⣿⣿⣿⢿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⡿⠟⠉⠙⠃⢔⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = "⠀⠀⠀⠀⣿⣿⣿⣿⣿⠻⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⡏⢻⡿⠿⣋⣼⠇⠀⠀⠀⠀⠀⠨⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = "⠀⠀⠀⠀⠉⢿⣿⣿⣿⣶⣵⣿⣿⣿⣿⣿⠏⠉⢹⣿⡿⠬⠖⣽⣿⣽⡇⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = "⠀⠀⠀⠀⠀⠀⠈⠹⠿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣷⣿⣿⣾⣵⣦⣮⡿⠀⠀⠀⠀⠀⠀⠰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣸⡙⠛⠿⠿⠿⣿⣿⣿⣿⡿⠿⠛⢉⢨⠀⠀⠀⠀⠀⠀⠀⢰⠇⣀⡀⣀⣀⣀⣀⣀⢠⣀⣀⣀⣀⣀⡀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣷⣤⣄⡀⠀⠀⠀⠀⢀⠀⣴⠕⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⢀⣀⣁⣀⡀⢀⣈⣂⡐⠋⠃⠖"
            document.getElementById("rpsresult12").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡿⡖⠊⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠊⡡⠄⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⡛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠥⠀⠠⠄⠠⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⡿⣟⠷⢤⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⡀⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐"
            document.getElementById("rpsresult15").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡤⢤⡴⢭⡈⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⠄⠑⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠉⠑⡜⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠁⢀⠊⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⢀"
            document.getElementById("rpsresult17").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⡁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠠⠀⠁⡀⢐⠂⠀⠀⢀⡀⠀⠒⢈⡙"
            document.getElementById("rpsresult18").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠰⢡⢡⠃⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠞⠁⠈⠀⠀⠀⠈⠁⠀⠀⠈⠙"
            document.getElementById("rpsresult19").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠘⠠⠠⠄⣄⡀⠑⠀⠀⠈⠐⠒⠛⢥⣄⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠈⣢⡀⡒⠒⣒⡒⣐⡒⢒⣒⠪⣊⠯"
            document.getElementById("rpsresult20").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠐⠤⢀⠐⠀⢀⡀⠁⢀⠈⠈⠁⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠈⠀⡠⠌⡊⠡⠐⠒⣀⡴⠁"            ;
        }
    }
    else if (playerSelection === 2){
        if(selected == 1){
            document.getElementById("rpsresult").innerHTML = "draw";
            document.getElementById("rpsresult2").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult4").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠸⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult5").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣆⠀⣻⣿⣿⣄⣤⣄⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⠋⣸⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult6").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⠙⠉⣉⣿⡿⣿⣿⡏⠙⢉⣉⣛⠛⣛⣶⣶⣤⣾⣿⡛⠀⣤⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠘⣄⡹⣿⡀⣿⣿⡇⠀⠀⠁⠉⠀⢀⣿⠛⣻⣿⣇⠀⢀⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣴⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢠⣼⣿⡇⣼⡘⢻⣄⣾⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣇⣿⣿⣿⣿⣿⣿⡆⡷⠀⠀⠀⢸⡏⣹⣿⣿⣿⣧⣼⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣮⡛⠿⢿⢿⣿⠀⠃⠀⢀⢰⡏⢰⣿⣿⣿⣿⣿⢿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡿⣿⣿⣿⣿⣿⣿⠶⣶⣾⣏⠀⠀⠀⠀⠙⣷⣿⡟⠛⠛⣋⣤⣾⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult12").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠉⠙⣿⣷⣀⣀⣀⣠⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡿⢿⡽⠀⠀⠘⣿⣿⣿⣿⣿⣿⠃⠀⣤⣿⣿⣿⣿⣿⣿⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣽⣾⡟⠃⠐⠀⠀⠀⠀⠹⣿⣿⡿⠋⠁⠀⠘⠛⠛⢿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult15").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣷⣤⣀⣤⣀⣒⣚⣴⣿⣿⡁⠀⠀⠀⠀⠀⠀⢹⣿⣿⢿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣶⣶⣿⠛⣁⣼⣿⣿⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult17").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult18").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult19").innerHTML = "                                                       "
            document.getElementById("rpsresult20").innerHTML = "                                                       "   
            ;
        }
        if(selected == 2){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
            document.getElementById("rpsresult2").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⣾⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣪⣽⣿⣿⣦⣄⣀⢀⣀⣀⣀⢀⢀⣀⣠⣴⣶⣿⣿⣿⣿⠏"
            document.getElementById("rpsresult4").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⡿⠃⠀"
            document.getElementById("rpsresult5").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣄⢠⢿⣽⣿⣿⣯⣿⣾⣶⣷⣿⣿⣿⣿⣿⣿⣿⣏⣻⣿⣿⣿⡟⠁⠀⠀"
            document.getElementById("rpsresult6").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠈⣿⣿⣿⣿⣮⣿⣻⡯⣽⣿⣿⣾⣿⣿⣻⡿⢿⣫⣿⣾⣾⡗⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⠀⣯⡿⣿⣿⣿⣷⣾⣴⣽⣏⡄⢘⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⣿⣿⣦⣍⠟⡛⠿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣻⡏⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = " ⠀⠀⠀⠀⠀⠀⡠⠤⠦⠤⠤⡇⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣤⡀⠀⠀⠉⠉⠀⣀⣴⣿⣿⣿⠅⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = " ⠀⠀⢀⣀⣀⣀⡅⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⡿⠿⠟⠿⠿⣿⣿⣿⠀⢀⣠⣿⣿⣿⣿⢿⡿⠂⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = " ⠀⣠⠊⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠈⠉⠛⣿⣿⣿⣿⣿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult12").innerHTML = " ⣰⠓⠀⠀⠀⣻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣙⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = " ⢹⡁⠀⠀⠀⢟⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡾⠿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = " ⠀⡜⢶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣬⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult15").innerHTML = " ⠀⠀⠈⠹⢶⣆⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣰⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = " ⠀⠀⠀⠀⠀⠈⠛⠕⠲⠤⢤⢀⣀⣀⣀⣀⣀⣠⣤⡤⠼⠟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀";
            document.getElementById("rpsresult17").innerHTML = "                                                       "
            document.getElementById("rpsresult18").innerHTML = "                                                       "
            document.getElementById("rpsresult19").innerHTML = "                                                       "
            document.getElementById("rpsresult20").innerHTML = "                                                       "       ;
        }
        if(selected == 0){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
            document.getElementById("rpsresult2").innerHTML = "⠀⠀ ⠀⠀  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣵⣶⣶⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = "⣰⣶⣶⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣟⢻⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult4").innerHTML = "⠘⢿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣠⣤⣤⣄⡤⢆⣰⣴⣤⣾⣿⣿⣿⣿⣷⣾⣿⣿⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult5").innerHTML = "⠀⠀⠹⣿⣷⣽⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult6").innerHTML = "⠀⠀⠀⠘⣿⣿⣿⣿⣿⢿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⡿⠟⠉⠙⠃⢔⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = "⠀⠀⠀⠀⣿⣿⣿⣿⣿⠻⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⡏⢻⡿⠿⣋⣼⠇⠀⠀⠀⠀⠀⠨⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = "⠀⠀⠀⠀⠉⢿⣿⣿⣿⣶⣵⣿⣿⣿⣿⣿⠏⠉⢹⣿⡿⠬⠖⣽⣿⣽⡇⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = "⠀⠀⠀⠀⠀⠀⠈⠹⠿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣷⣿⣿⣾⣵⣦⣮⡿⠀⠀⠀⠀⠀⠀⠰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣸⡙⠛⠿⠿⠿⣿⣿⣿⣿⡿⠿⠛⢉⢨⠀⠀⠀⠀⠀⠀⠀⢰⠇⣀⡀⣀⣀⣀⣀⣀⢠⣀⣀⣀⣀⣀⡀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣷⣤⣄⡀⠀⠀⠀⠀⢀⠀⣴⠕⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⢀⣀⣁⣀⡀⢀⣈⣂⡐⠋⠃⠖"
            document.getElementById("rpsresult12").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡿⡖⠊⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠊⡡⠄⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⡛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠥⠀⠠⠄⠠⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⡿⣟⠷⢤⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⡀⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐"
            document.getElementById("rpsresult15").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡤⢤⡴⢭⡈⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⠄⠑⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠉⠑⡜⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠁⢀⠊⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⢀"
            document.getElementById("rpsresult17").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⡁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠠⠀⠁⡀⢐⠂⠀⠀⢀⡀⠀⠒⢈⡙"
            document.getElementById("rpsresult18").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠰⢡⢡⠃⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠞⠁⠈⠀⠀⠀⠈⠁⠀⠀⠈⠙"
            document.getElementById("rpsresult19").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠘⠠⠠⠄⣄⡀⠑⠀⠀⠈⠐⠒⠛⢥⣄⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠈⣢⡀⡒⠒⣒⡒⣐⡒⢒⣒⠪⣊⠯"
            document.getElementById("rpsresult20").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠐⠤⢀⠐⠀⢀⡀⠁⢀⠈⠈⠁⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠈⠀⡠⠌⡊⠡⠐⠒⣀⡴⠁"            ;
        }
    }
    else if (playerSelection === 3){
        if(selected == 2){
            document.getElementById("rpsresult").innerHTML = "draw";
            document.getElementById("rpsresult2").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult4").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠸⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult5").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣆⠀⣻⣿⣿⣄⣤⣄⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⠋⣸⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult6").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⠙⠉⣉⣿⡿⣿⣿⡏⠙⢉⣉⣛⠛⣛⣶⣶⣤⣾⣿⡛⠀⣤⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠘⣄⡹⣿⡀⣿⣿⡇⠀⠀⠁⠉⠀⢀⣿⠛⣻⣿⣇⠀⢀⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣴⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢠⣼⣿⡇⣼⡘⢻⣄⣾⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣇⣿⣿⣿⣿⣿⣿⡆⡷⠀⠀⠀⢸⡏⣹⣿⣿⣿⣧⣼⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣮⡛⠿⢿⢿⣿⠀⠃⠀⢀⢰⡏⢰⣿⣿⣿⣿⣿⢿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡿⣿⣿⣿⣿⣿⣿⠶⣶⣾⣏⠀⠀⠀⠀⠙⣷⣿⡟⠛⠛⣋⣤⣾⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult12").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠉⠙⣿⣷⣀⣀⣀⣠⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡿⢿⡽⠀⠀⠘⣿⣿⣿⣿⣿⣿⠃⠀⣤⣿⣿⣿⣿⣿⣿⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣽⣾⡟⠃⠐⠀⠀⠀⠀⠹⣿⣿⡿⠋⠁⠀⠘⠛⠛⢿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult15").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣷⣤⣀⣤⣀⣒⣚⣴⣿⣿⡁⠀⠀⠀⠀⠀⠀⢹⣿⣿⢿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣶⣶⣿⠛⣁⣼⣿⣿⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult17").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult18").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult19").innerHTML = "                                                       "
            document.getElementById("rpsresult20").innerHTML = "                                                       "   
            ;
        }
        if(selected == 0){
            document.getElementById("rpsresult").innerHTML = "You Lose :(";
            document.getElementById("rpsresult2").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⣾⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣪⣽⣿⣿⣦⣄⣀⢀⣀⣀⣀⢀⢀⣀⣠⣴⣶⣿⣿⣿⣿⠏"
            document.getElementById("rpsresult4").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⡿⠃⠀"
            document.getElementById("rpsresult5").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣄⢠⢿⣽⣿⣿⣯⣿⣾⣶⣷⣿⣿⣿⣿⣿⣿⣿⣏⣻⣿⣿⣿⡟⠁⠀⠀"
            document.getElementById("rpsresult6").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠈⣿⣿⣿⣿⣮⣿⣻⡯⣽⣿⣿⣾⣿⣿⣻⡿⢿⣫⣿⣾⣾⡗⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⠀⣯⡿⣿⣿⣿⣷⣾⣴⣽⣏⡄⢘⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⣿⣿⣦⣍⠟⡛⠿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣻⡏⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = " ⠀⠀⠀⠀⠀⠀⡠⠤⠦⠤⠤⡇⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣤⡀⠀⠀⠉⠉⠀⣀⣴⣿⣿⣿⠅⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = " ⠀⠀⢀⣀⣀⣀⡅⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⡿⠿⠟⠿⠿⣿⣿⣿⠀⢀⣠⣿⣿⣿⣿⢿⡿⠂⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = " ⠀⣠⠊⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠈⠉⠛⣿⣿⣿⣿⣿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult12").innerHTML = " ⣰⠓⠀⠀⠀⣻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣙⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = " ⢹⡁⠀⠀⠀⢟⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡾⠿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = " ⠀⡜⢶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣬⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult15").innerHTML = " ⠀⠀⠈⠹⢶⣆⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣰⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = " ⠀⠀⠀⠀⠀⠈⠛⠕⠲⠤⢤⢀⣀⣀⣀⣀⣀⣠⣤⡤⠼⠟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀";
            document.getElementById("rpsresult17").innerHTML = "                                                       "
            document.getElementById("rpsresult18").innerHTML = "                                                       "
            document.getElementById("rpsresult19").innerHTML = "                                                       "
            document.getElementById("rpsresult20").innerHTML = "                                                       "   
        }
        if(selected == 1){
            document.getElementById("rpsresult").innerHTML = "You Win :D";
            document.getElementById("rpsresult2").innerHTML = "⠀⠀ ⠀⠀  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣵⣶⣶⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult3").innerHTML = "⣰⣶⣶⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣟⢻⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult4").innerHTML = "⠘⢿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣠⣤⣤⣄⡤⢆⣰⣴⣤⣾⣿⣿⣿⣿⣷⣾⣿⣿⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult5").innerHTML = "⠀⠀⠹⣿⣷⣽⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult6").innerHTML = "⠀⠀⠀⠘⣿⣿⣿⣿⣿⢿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⡿⠟⠉⠙⠃⢔⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult7").innerHTML = "⠀⠀⠀⠀⣿⣿⣿⣿⣿⠻⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⡏⢻⡿⠿⣋⣼⠇⠀⠀⠀⠀⠀⠨⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult8").innerHTML = "⠀⠀⠀⠀⠉⢿⣿⣿⣿⣶⣵⣿⣿⣿⣿⣿⠏⠉⢹⣿⡿⠬⠖⣽⣿⣽⡇⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult9").innerHTML = "⠀⠀⠀⠀⠀⠀⠈⠹⠿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣷⣿⣿⣾⣵⣦⣮⡿⠀⠀⠀⠀⠀⠀⠰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult10").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣸⡙⠛⠿⠿⠿⣿⣿⣿⣿⡿⠿⠛⢉⢨⠀⠀⠀⠀⠀⠀⠀⢰⠇⣀⡀⣀⣀⣀⣀⣀⢠⣀⣀⣀⣀⣀⡀⠀⠀"
            document.getElementById("rpsresult11").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣷⣤⣄⡀⠀⠀⠀⠀⢀⠀⣴⠕⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⢀⣀⣁⣀⡀⢀⣈⣂⡐⠋⠃⠖"
            document.getElementById("rpsresult12").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡿⡖⠊⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠊⡡⠄⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀"
            document.getElementById("rpsresult13").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⡛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠥⠀⠠⠄⠠⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀"
            document.getElementById("rpsresult14").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⡿⣟⠷⢤⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⡀⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐"
            document.getElementById("rpsresult15").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡤⢤⡴⢭⡈⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⠄⠑⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            document.getElementById("rpsresult16").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠉⠑⡜⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠁⢀⠊⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⢀"
            document.getElementById("rpsresult17").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⡁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠠⠀⠁⡀⢐⠂⠀⠀⢀⡀⠀⠒⢈⡙"
            document.getElementById("rpsresult18").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠰⢡⢡⠃⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠞⠁⠈⠀⠀⠀⠈⠁⠀⠀⠈⠙"
            document.getElementById("rpsresult19").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠘⠠⠠⠄⣄⡀⠑⠀⠀⠈⠐⠒⠛⢥⣄⡀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠈⣢⡀⡒⠒⣒⡒⣐⡒⢒⣒⠪⣊⠯"
            document.getElementById("rpsresult20").innerHTML = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠐⠤⢀⠐⠀⢀⡀⠁⢀⠈⠈⠁⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠈⠀⡠⠌⡊⠡⠐⠒⣀⡴⠁"            ;
        }
    }
}