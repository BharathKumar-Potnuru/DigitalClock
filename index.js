function clock()
{
    var date = new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var ms=date.getMilliseconds()
    var day = date.getDay()
    var dt=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()

    if(mo==0)
    {
       mo="Jan" 
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Non"
    }
    else
    {
        mo="Dec"
    }

    switch(day)
    {
        case 0 : {
            day="Sunday"
            document.getElementById("a").style.backgroundImage="URL(./Sunday.jpg)"
        }
        break;
        case 1 : {
            day="Monday"
            document.getElementById("a").style.backgroundImage="URL(./Monday.jpg)"
        }
        break;
        case 2 : {
            day="Tuesday"
            document.getElementById("a").style.backgroundImage="URL(./Tuesday.jpg)"
        }
        break;
        case 3 : {
            day="Wednesday"
            document.getElementById("a").style.backgroundImage="URL(./Wednesday.jpg)"
        }
        break;
        case 4 : {
            day="Thursday"
            document.getElementById("a").style.backgroundImage="URL(./Thursday.jpg)"
        }
        break;
        case 5 : {
            day="Friday"
            document.getElementById("a").style.backgroundImage="URL(./Friday.jpg)"
        }
        break;
        case 6 : {
            day="Saturday"
            document.getElementById("a").style.backgroundImage="URL(./Saturday.jpg)"
        }
        break;
    }
    var am_pm = "AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
        hh=12
    }
    var finalTime = hh+":"+mm+":"+ss+" "+am_pm
    document.getElementById("time").innerHTML=finalTime

    var finalDate = dt+"/"+mo+"/"+yy
    document.getElementById("date").innerHTML=finalDate

    document.getElementById("day").innerHTML=day

    var timer = setTimeout(function(){clock()},1000)
}

function greet()
{
    var date = new Date()
    var hh = date.getHours()
    if(hh>=6 && hh<12)
    {
        window.alert("Good Morning")
    }
    else if(hh>=12 && hh<16)
    {
        window.alert("Good Afternoon")
    }
    else if(hh>=16)
    {
        window.alert("Good Evening")
    }
    else{
        window.alert("Good Night")
    }
}
greet()