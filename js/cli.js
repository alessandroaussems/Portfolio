var skillsdata=[
                "[HTML]",
                "[CSS]",
                "[SCSS]",
                "[Markdown]",
                "[Javascript]",
                "[JQuery]",
                "[PHP]",
                "[Laravel]",
                "[C]",
                "[C++]",
                "[C#]",
                "[Python]",
                "[Java]",
                "[Angular]",
                "[Vue]",
                "[Wordpress]",
                "[Drupal]",
            ];
var contactdata=[
                "Pinging alessandroaussems.be",
                "Reply Email     : me@alessandroaussems.be",
                "Reply Tel       : +32 (0)471 44 82 10",
                "Reply Location  : Lier",
                "Reply Github    : github.com/alessandroaussems",
                "Reply LinkedIn  : linkedin.com/in/alessandroaussems"
];
var projectsdata= [
    {
        title:"Delen Hackathon 2019",
        exp:"Best UX price with our project: Delen-Connect",
        img:"delen-connect.jpg",
        git:"https://github.com/alessandroaussems/delen-connect",
        online:"https://www.instagram.com/p/Bt6QHyinch5/"
    },
    {
        title:"Karel-Chatbot",
        exp:"Final year project @ KdG. Chatbot for KdG students!",
        img:"karelchatbot.jpg",
        git:"https://github.com/alessandroaussems/karel-chatbot",
        online:"none"
    },
    {
        title:"Delen Hackathon 2018",
        exp:"Second place Delen Hackathon 2018. With our project Tilis",
        img:"tilis.jpg",
        git:"none",
        online:"https://blog.exellys.com/the-hackathon-aftermath/"
    },
    {
        title:"Restaumator",
        exp:"Restaurant automatization. With Arduino",
        img:"restaumator.jpg",
        git:"https://github.com/RobLui/Restaumator",
        online:"https://www.youtube.com/embed/mxV8K7mM3-0"
    },
    {
        title:"Tinkle",
        exp:"A toilet any place, any time. AirBnB for toilets!",
        img:"tinkle.jpg",
        git:"https://github.com/alessandroaussems/Tinkle",
        online:"none"
    },
    {
        title:"Codepolice",
        exp:"Find plagiarism code on the internet!",
        img:"codepolice.jpg",
        git:"https://github.com/alessandroaussems/Codepolice",
        online:"none"
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
        online:"none"
    },
    {
        title:"HanGit",
        exp:"Javascript game based on the well known Hangman",
        img:"hangit.jpg",
        git:"https://github.com/alessandroaussems/HangIt",
        online:"none"
    },
    {
        title:"The Case: Teaser",
        exp:"Teaser for a fictional series, Montage by me!",
        img:"thecase.jpg",
        git:"none",
        online:"#"
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
                    Contact(0,"noreply");
                }
                else
                {
                    Contact(750,"reply");
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
    if(projectsdata[i].git!="none"){
        var gitlink=document.createElement("a");
        var gitimg=document.createElement("img");
        gitimg.setAttribute("src","assets/github.png");
        gitimg.setAttribute("alt","Link naar github");
        gitlink.appendChild(gitimg);
        gitlink.setAttribute("href",projectsdata[i].git);
        gitlink.setAttribute("target","_blank");
        gitlink.setAttribute("class","gitlink");
    }
    if(projectsdata[i].online!="none"){
        var onlinelink=document.createElement("a");
        var onlineimg=document.createElement("img");
        onlineimg.setAttribute("src","assets/external.png");
        onlineimg.setAttribute("alt","Link naar de online versie");
        onlinelink.appendChild(onlineimg);
        onlinelink.setAttribute("href",projectsdata[i].online);
        onlinelink.setAttribute("target","_blank");
        onlinelink.setAttribute("class","onlinelink");
    }
    img.setAttribute("alt","Afbeelding van "+projectsdata[i].title);
    header.appendChild(document.createTextNode(projectsdata[i].title));
    text.appendChild(document.createTextNode(projectsdata[i].exp));
    img.setAttribute("src","assets/"+projectsdata[i].img);
    newline.appendChild(header);
    newline.appendChild(img);
    newline.appendChild(text);
    if(projectsdata[i].online=="none" && projectsdata[i].git!="none" ||
        projectsdata[i].git=="none" && projectsdata[i].online!="none"){
        newline.setAttribute("class","project clearfix onechild");
    }
    else{
        newline.setAttribute("class","project clearfix");
    }
    if(projectsdata[i].online!="none"){newline.appendChild(onlinelink);}
    if(projectsdata[i].git!="none"){newline.appendChild(gitlink);}
    lines.appendChild(newline);
    }
}
function ShowSkills()
{
    var line=document.createElement('li');
    for(var i=0;i<skillsdata.length;i++)
    {
        var span=document.createElement("span");
        span.appendChild(document.createTextNode(skillsdata[i]));
        span.setAttribute("class","skill");
        line.appendChild(span);
        var wbr=document.createElement("wbr");
        line.appendChild(wbr);
    }
    lines.appendChild(line);
}
function Contact(timeout,reply)
{

    for(var i=0;i<contactdata.length;i++)
    {
        // create a closure to preserve the value of "i"
        (function(i)
        {
                if(reply=="noreply")
                {
                    contactdata[i]=contactdata[i].substring(contactdata[i].indexOf(":") + 1);
                }
                window.setTimeout(function(){
                var newline=document.createElement("li");
                var pretag=document.createElement("pre");
                if(i==1)
                {
                    var maillink=document.createElement("a");
                    maillink.setAttribute("href","mailto:hello@alessandroaussems.be");
                    maillink.appendChild(document.createTextNode(contactdata[i]));
                    pretag.appendChild(maillink);
                }
                if(i==2)
                {
                    var tellink=document.createElement("a");
                    tellink.setAttribute("href","tel:+32471448210");
                    tellink.appendChild(document.createTextNode(contactdata[i]));
                    pretag.appendChild(tellink);
                }
                if(i==4)
                {
                    var link=document.createElement("a");
                    link.setAttribute("href","https://github.com/alessandroaussems");
                    link.setAttribute("target","_blank");
                    link.appendChild(document.createTextNode(contactdata[i]));
                    pretag.appendChild(link);
                }
                if(i==5)
                {
                    var link=document.createElement("a");
                    link.setAttribute("href","https://linkedin.com/in/alessandroaussems");
                    link.setAttribute("target","_blank");
                    link.appendChild(document.createTextNode(contactdata[i]));
                    pretag.appendChild(link);
                }
                if(i!=1 && i!=2 && i!=4 && i!=5)
                {
                    if(timeout==0 && i==0)
                    {

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
