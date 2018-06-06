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
        title:"Karel-Chatbot",
        exp:"Final year project @ KdG. Chatbot for KdG students!",
        img:"karelchatbot.jpg",
        git:"https://github.com/alessandroaussems/karel-chatbot",
        online:"https://karel-chatbot.be/"
    },
    {
        title:"Restaumator",
        exp:"Restaurant automatization. With Arduino",
        img:"restaumator.jpg",
        git:"https://github.com/RobLui/Restaumator",
        online:"http://restaumator.com"
    },
    {
        title:"Tinkle",
        exp:"A toilet any place, any time. AirBnB for toilets!",
        img:"tinkle.jpg",
        git:"https://github.com/alessandroaussems/Tinkle",
        online:"https://tinkletoilets.com/"
    },
    {
        title:"Codepolice",
        exp:"Find plagiarism code on the internet!",
        img:"codepolice.jpg",
        git:"https://github.com/alessandroaussems/Codepolice",
        online:"https://alessandroaussems.be/codepolice/"
    },
    {
        title:"Blackjack",
        exp:"Blackjack with Javascript observables.",
        img:"KH.jpg",
        git:"https://github.com/alessandroaussems/Blackjack",
        online:"https://alessandroaussems.github.io/Blackjack/"
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
        online:"https://alessandroaussems.be/hackernews/"
    },
    {
        title:"HanGit",
        exp:"Javascript game based on the well known Hangman",
        img:"hangit.jpg",
        git:"https://github.com/alessandroaussems/HangIt",
        online:"https://alessandroaussems.be/hangit/"
    },
    {
        title:"The Case: Teaser",
        exp:"Teaser for a fictional series, Montage by me!",
        img:"thecase.jpg",
        git:"none",
        online:"https://www.youtube.com/embed/xQ6TH2SYqss"
    }
];
var bottomline=document.getElementsByClassName("bottomline")[0];
var inputfield=document.getElementById('typeline');
var lines=document.getElementsByClassName("lines")[0];
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 650px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}
function WidthChange(mq)
{
    if (mq.matches)
    {
        CheckCommand("clear","mobile");
        CreateIntro("Hi welcome to my interactive portfolio. You can type commands to get to know me!");
    }
    else
    {
        CheckCommand("clear","mobile");
        CreateIntro("Hi welcome to my portfolio!");
        CheckCommand("skills","mobile");
        CheckCommand("projects","mobile");
        CheckCommand("contact","mobile");
    }
}
function CheckCommand(value,event)
{
    if(event.keyCode==13 || event=="mobile")
    {
        value=value.toLowerCase();
        CreateJustTypedLine(value);
        switch(value)
        {
            case "contact":
                if(event=="mobile")
                {
                    Contact(0);
                }
                else
                {
                    Contact(750);
                }
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
            default:
                CommandNotFound();
                CreateNewBottomLine();
        }
    }
}
function CreateJustTypedLine(value)
{
    var newlistitem=document.createElement("li");
    newlistitem.innerHTML="~"+value;
    bottomline.parentNode.replaceChild(newlistitem,bottomline);
}
function CreateNewBottomLine()
{
    var newbottomline=document.createElement("li");
    newbottomline.setAttribute("class","bottomline clearfix");
    var newtext=document.createElement("p");
    newtext.innerHTML="~";
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
    if(document.body.clientWidth<650)
    {
        window.scrollTo(0,0);
    }
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
function Contact(timeout)
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
                    if(i==1)
                    {
                        var maillink=document.createElement("a");
                        maillink.setAttribute("href","mailto:hello@alessandroaussems.be");
                        maillink.appendChild(document.createTextNode(contactdata[i]));
                        pretag.appendChild(maillink);
                    }
                    else
                    {
                        pretag.appendChild(document.createTextNode(contactdata[i]))
                    }
                }
                newline.appendChild(pretag);
                lines.appendChild(newline);
                newline.scrollIntoView(true);
                if(i==(contactdata.length-1))
                {
                    CreateNewBottomLine();
                }
        }, i * timeout);
        }(i));
    }
}
function CreateIntro(theintro)
{
    var introtext=document.createElement("li");
    introtext.appendChild(document.createTextNode(theintro))
    lines.insertBefore(introtext, lines.firstChild);
}
