var about = $("<h3>ABOUT ME</h3>");
var aboutText = $("<p>I am a full stack developer with a particular focus on the user experience. My background in hospitality and marketing has given me a unique perspective on the many phases of the user interaction. I am driven by my passion for finding multiple solutions to any given problem - I've found there’s rarely a single right answer - and continue to expand on my professional experience as well as my academic foundations in psychology and media studies.</p><a href='./assets/clary-resume.pdf' target='_blank' title='Resume'><h6>RESUME</h6></a>");
var skills = $("<h3>SKILLS</h3>");
var skillsText = $("<p> HTML5 | CSS | PHP | JavaScript | jQuery | AJAX React | Bootstrap | MySQL | MongoDB </p>");
var projects = $("<h3>Projects</h3>");
var projectsText = $("<p><a href='#blackWhite' rel='modal:open'>Black + White Portfolio</a></p><p><a href='#zeroMark' rel='modal:open'>ZeroMark</a></p><p><a href='#safeChex' rel='modal:open'>Safe Chex</a></p>");
var contact = $("<h3>GET IN TOUCH</h3>");
var contactText = $("<p>Working on a project? Whether it's still an idea in your head or something that you've already got rolling, I'd like to get involved. Let's see what we can create.</p><a href='mailto:kimclary@mac.com?Subject=Let's%20work%20together title= 'Email'><h6><i class='fas fa-paper-plane'></i> Let's Chat</h6><div class='center-txt'><a href='https://www.linkedin.com/in/clarykimberly/' title='LinkedIn' target='_blank'><i class='fab fa-linkedin'></i></a><a href='https://github.com/Bee406' title='GitHub' target='_blank'><i class='fab fa-github'></i></a>");
var photo2 = "assets/images/JHN_7861.jpg";
var photo3 = "assets/images/JHN_7862.jpg";
var photo4 = "assets/images/JHN_7867.jpg";
var photo5 = "assets/images/JHN_7877.jpg";


function jumboText(subject, text, photo) {
    $(".jumbotron-title").html(subject);
    $(".jumbotron-text").html(text);
    $(".jumbotron-photo").attr("src", photo);
  };



var modal = document.getElementsByClassName("modal");

var btn = document.getElementsByClassName("modal-open");

var cls = document.getElementsByClassName("cls-btn");


for (var i = 0; i < btn.length; i++) {
    var thisBtn = btn[i];
    thisBtn.onclick = function () {
        var modal = document.getElementById(this.dataset.modal);
        modal.style.display = "block";
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        for (var i = 0; i < cls.length; i++) {
            var thisCls = cls[i];
            thisCls.onclick = function () {
                modal.style.display = "none";
            }
        }
    }

};



