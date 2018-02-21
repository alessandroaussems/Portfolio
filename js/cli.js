var skillsdata=[
                "HTML          : ##########################################",
                "CSS           : ###############################",
                "Markdown      : #####################################",
                "Javascript    : ##################################################",
                "PHP           : ###########################################",
                "Laravel       : #############################",
                "C             : #################",
                "C++           : #############",
                "C#            : #####################",
                "Python        : ###############",
                "Java          : ###################",
                "Angular 2     : ############################",
                "Wordpress     : #################################",
                "Drupal        : ####",
                "Photoshop     : ###############################",
                "Première      : ########################################",
                "After Effects : #############################",
            ];
var contactdata=[
                "Pinging alessandroaussems.be",
                "Reply Email   : hello@alessandroaussems.be",
                "Reply Tel     : +32 (0)471 44 82 10",
                "Reply Location: Lier",
                "Reply Github  : github.com/alessandroaussems",
];
var projectsdata= [
    {
        title:"Restaumator",
        exp:"Restaurant automatization. With Arduino",
        img:"restaumator.jpg",
        git:"https://github.com/RobLui/Restaumator",
        online:"http://restaumator.com"
    },
    {
        title:"Codepolice",
        exp:"Find plagiarism code on the internet!",
        img:"codepolice.jpg",
        git:"https://github.com/alessandroaussems/Codepolice",
        online:"https://codepolice.alessandro.aussems.mtantwerp.eu/"
    },
    {
        title:"Blackjack",
        exp:"Blackjack with Javascript observables.",
        img:"KH.jpg",
        git:"https://github.com/alessandroaussems/Blackjack",
        online:"https://alessandroaussems.github.io/Blackjack/"
    },
    {
        title:"Tinkle",
        exp:"A toilet any place, any time. AirBnB for toilets!",
        img:"tinkle.jpg",
        git:"https://github.com/alessandroaussems/Tinkle",
        online:"https://tinkletoilets.com/"
    },
    {
        title:"As Adventure Contest",
        exp:"Fictional contest, created in Laravel.",
        img:"asadventure.jpg",
        git:"https://github.com/alessandroaussems/AsAdventureContest",
        online:"https://asadventurecontest.alessandro.aussems.mtantwerp.eu/"
    },
    {
        title:"The Supermaze",
        exp:"Modern 'Marble Laberinth', created in one week time!",
        img:"thesupermaze.jpg",
        git:"https://github.com/alessandroaussems/BOOTCAMP",
        online:"https://play.google.com/store/apps/details?id=com.ramp.thesupermaze&hl=nl"
    },
    {
        title:"Hackernews: Remake",
        exp:"Created with pure PHP, no framework!",
        img:"hackernews.jpg",
        git:"https://github.com/alessandroaussems/Hackernews",
        online:"https://hackernews.alessandro.aussems.mtantwerp.eu/"
    },
    {
        title:"HanGit",
        exp:"Javascript game based on the well known Hangman",
        img:"hangit.jpg",
        git:"https://github.com/alessandroaussems/HangIt",
        online:"https://hangit.alessandro.aussems.mtantwerp.eu/"
    },
    {
        title:"The Case: Teaser",
        exp:"Teaser for a fictional series, Montage by me!",
        img:"thecase.jpg",
        git:"none",
        online:"https://www.youtube.com/embed/xQ6TH2SYqss"
    },
];
var bottomline=document.getElementsByClassName("bottomline")[0];
var inputfield=document.getElementById('typeline');
var lines=document.getElementsByClassName("lines")[0];
function CheckCommand(value,event)
{
    if(event.keyCode==13)
    {
        value=value.toLowerCase();
        CreateJustTypedLine(value);
        switch(value)
        {
            case "contact":
                Contact();
                bottomline.scrollIntoView(true);
            break;
            case "projects":
                ShowProjects();
                CreateNewBottomLine();
                bottomline.scrollIntoView(true);
            break;
            case "skills":
                ShowSkills();
                CreateNewBottomLine();
                bottomline.scrollIntoView(true);
            break;
            case "clear":
                Clear();
                CreateNewBottomLine();
                bottomline.scrollIntoView(true);
            break;
            case "time":
                Time();
                CreateNewBottomLine();
                bottomline.scrollIntoView(true);
            break;
            case "question":
                Question();
                bottomline.scrollIntoView(true);
            break;
            default:
                CommandNotFound();
                CreateNewBottomLine();
        }
    }
}
function CreateJustTypedLine(value)
{
    var newlistitem=document.createElement("li");
    newlistitem.innerHTML="C:/Users/AlessandroAussems>"+value;
    bottomline.parentNode.replaceChild(newlistitem,bottomline);
}
function CreateNewBottomLine()
{
    var newbottomline=document.createElement("li");
    newbottomline.setAttribute("class","bottomline clearfix");
    var newtext=document.createElement("p");
    newtext.innerHTML="C:/Users/AlessandroAussems>";
    var newinputfield=document.createElement("input");
    newinputfield.setAttribute("id","typeline");
    newinputfield.setAttribute("type","text");
    //newinputfield.setAttribute("onblur","this.focus()");
    newinputfield.setAttribute("onKeyPress","CheckCommand(this.value,event)");
    newinputfield.setAttribute("spellcheck","false");
    newbottomline.appendChild(newtext);
    newbottomline.appendChild(newinputfield);
    lines.appendChild(newbottomline);
    bottomline=document.getElementsByClassName("bottomline")[0];
    document.getElementById("typeline").focus();
}

function Clear()
{
    lines.innerHTML = "";
}
function Time()
{
    var d = new Date(); // for now
    var newline=document.createElement("li");
    newline.appendChild(document.createTextNode(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()));
    lines.appendChild(newline);
}
function CommandNotFound()
{
    var newline=document.createElement("li");
    newline.appendChild(document.createTextNode("ERROR: Unfortunatly this command is not found"));
    lines.appendChild(newline);
}
function ShowProjects()
{
    for(var i=0;i<projectsdata.length;i++)
    {
    var newline=document.createElement("li");
    var header=document.createElement("h3");
    var img=document.createElement("img");
    var text=document.createElement("p");
    if(projectsdata[i].git!="none"){var gitlink=document.createElement("a");}
    var onlinelink=document.createElement("a");
    if(projectsdata[i].git!="none"){var gitimg=document.createElement("img");}
    var onlineimg=document.createElement("img");
    if(projectsdata[i].git!="none"){gitimg.setAttribute("src","assets/github.png");}
    onlineimg.setAttribute("src","assets/external.png");
    if(projectsdata[i].git!="none"){gitimg.setAttribute("alt","Link naar github");}
    onlineimg.setAttribute("alt","Link naar de online versie");
    if(projectsdata[i].git!="none"){gitlink.appendChild(gitimg);}
    onlinelink.appendChild(onlineimg);
    if(projectsdata[i].git!="none"){gitlink.setAttribute("href",projectsdata[i].git);}
    onlinelink.setAttribute("href",projectsdata[i].online);
    if(projectsdata[i].git!="none"){gitlink.setAttribute("target","_blank");}
    onlinelink.setAttribute("target","_blank");
    if(projectsdata[i].git!="none"){gitlink.setAttribute("class","gitlink");}
    onlinelink.setAttribute("class","onlinelink");
    img.setAttribute("alt","Afbeelding van "+projectsdata[i].title);
    header.appendChild(document.createTextNode(projectsdata[i].title));
    text.appendChild(document.createTextNode(projectsdata[i].exp));
    img.setAttribute("src","assets/"+projectsdata[i].img);
    newline.appendChild(header);
    newline.appendChild(img);
    newline.appendChild(text);
    newline.appendChild(onlinelink);
    if(projectsdata[i].git!="none"){newline.appendChild(gitlink);}
    newline.setAttribute("class","project clearfix");
    lines.appendChild(newline);
    }
}
function ShowSkills()
{
    for(var i=0;i<skillsdata.length;i++)
    {
        var newline=document.createElement("li");
        var pretag=document.createElement("pre");
        pretag.appendChild(document.createTextNode(skillsdata[i]))
        newline.appendChild(pretag);
        lines.appendChild(newline);
    }
}
function Contact()
{

    for(var i=0;i<contactdata.length;i++)
    {
        // create a closure to preserve the value of "i"
        (function(i)
        {

                window.setTimeout(function(){
                var newline=document.createElement("li");
                var pretag=document.createElement("pre");
                if(i==4)
                {
                    var link=document.createElement("a");
                    link.setAttribute("href","https://github.com/alessandroaussems");
                    link.setAttribute("target","_blank");
                    link.appendChild(document.createTextNode(contactdata[i]));
                    pretag.appendChild(link);
                }
                else
                {
                    pretag.appendChild(document.createTextNode(contactdata[i]))
                }
                newline.appendChild(pretag);
                lines.appendChild(newline);
                newline.scrollIntoView(true);
                if(i==(contactdata.length-1))
                {
                    CreateNewBottomLine();
                }
        }, i * 750);
        }(i));
    }
}
function Question()
{
    CreateNewBottomLine();
    document.getElementById("typeline").removeAttribute("onblur");
    var popup=document.getElementById("popup");
    popup.classList.add("show");
    document.getElementById("email").focus();
}
function CloseQuestion()
{
    document.getElementById("typeline").setAttribute("onblur","this.focus()");
    document.getElementById("typeline").focus();
    var popup=document.getElementById("popup");
    popup.classList.remove("show");
}
function HandleQuestion()
{
    event.preventDefault();
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    if(ValidateEmail(email) && message!="")
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
            {
                var response = this.responseText;
                if(response=="SEND")
                {
                    CloseQuestion();
                    lines.lastChild.innerHTML="";
                    var newline=document.createElement("li");
                    newline.setAttribute("class","animatetextconf");
                    newline.appendChild(document.createTextNode("Thank you for your question!"));
                    lines.appendChild(newline);
                    CreateNewBottomLine();
                }
                else
                {
                    document.getElementById("error").innerHTML="Whoops! Something went wrong. Please try again.";
                }
            }
            else
            {
                document.getElementById("error").innerHTML="Whoops! Something went wrong. Please try again.";
            }
        };
        $data="email="+email+"&message="+message;
        xmlhttp.open("POST", "sendemail.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send($data);
    }
    if(!ValidateEmail(email))
    {
        document.getElementById("error").innerHTML="Your email is not correct!";
    }
    if(message=="")
    {
        document.getElementById("error").innerHTML="Your message cannot be empty";
    }
}
function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}
