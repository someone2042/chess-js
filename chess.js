
var tl = new Array()
var td = new Array()
var n=0
var rockdarkmove=false;

//declaration des varriable du tableau
var kd = document.createElement("img");
kd.src='chess-img/Chess_kdt60.png';

var kl = document.createElement("img");
kl.src='chess-img/Chess_klt60.png';

var qd = document.createElement("img");
qd.src='chess-img/Chess_qdt60.png';

var ql = document.createElement("img");
ql.src='chess-img/Chess_qlt60.png';

var bl = document.createElement("img");
bl.src='chess-img/Chess_blt60.png';
var bl1 = document.createElement("img");
bl1.src='chess-img/Chess_blt60.png';

var bd = document.createElement("img");
bd.src='chess-img/Chess_bdt60.png';
var bd1 = document.createElement("img");
bd1.src='chess-img/Chess_bdt60.png';

var pd = document.createElement("img");
pd.src='chess-img/Chess_pdt60.png';
var pd1 = document.createElement("img");
pd1.src='chess-img/Chess_pdt60.png';
var pd2 = document.createElement("img");
pd2.src='chess-img/Chess_pdt60.png';
var pd3 = document.createElement("img");
pd3.src='chess-img/Chess_pdt60.png';
var pd4 = document.createElement("img");
pd4.src='chess-img/Chess_pdt60.png';
var pd5 = document.createElement("img");
pd5.src='chess-img/Chess_pdt60.png';
var pd6 = document.createElement("img");
pd6.src='chess-img/Chess_pdt60.png';
var pd7 = document.createElement("img");
pd7.src='chess-img/Chess_pdt60.png';

var pl = document.createElement("img");
pl.src='chess-img/Chess_plt60.png';
var pl1 = document.createElement("img");
pl1.src='chess-img/Chess_plt60.png';
var pl2 = document.createElement("img");
pl2.src='chess-img/Chess_plt60.png';
var pl3 = document.createElement("img");
pl3.src='chess-img/Chess_plt60.png';
var pl4 = document.createElement("img");
pl4.src='chess-img/Chess_plt60.png';
var pl5 = document.createElement("img");
pl5.src='chess-img/Chess_plt60.png';
var pl6 = document.createElement("img");
pl6.src='chess-img/Chess_plt60.png';
var pl7 = document.createElement("img");
pl7.src='chess-img/Chess_plt60.png';

var rl = document.createElement("img");
rl.src='chess-img/Chess_rlt60.png';
var rl1 = document.createElement("img");
rl1.src='chess-img/Chess_rlt60.png';

var rd1 = document.createElement("img");
rd1.src='chess-img/Chess_rdt60.png';
var rd = document.createElement("img");
rd.src='chess-img/Chess_rdt60.png';

var nl = document.createElement("img");
nl.src='chess-img/Chess_nlt60.png';
var nl1 = document.createElement("img");
nl1.src='chess-img/Chess_nlt60.png';

var nd = document.createElement("img");
nd.src='chess-img/Chess_ndt60.png';
var nd1 = document.createElement("img");
nd1.src='chess-img/Chess_ndt60.png';

//une image vid pour remplir les case vid
var vid =document.createElement('img');

//la matrice principal qui represent la table 
var m=[[rd,nd,bd,qd,kd,bd1,nd1,rd1],[pd,pd1,pd2,pd3,pd4,pd5,pd6,pd7],[vid,vid,vid,vid,vid,vid,vid,vid],[vid,vid,vid,vid,vid,vid,vid,vid],[vid,vid,vid,vid,vid,vid,vid,vid],[vid,vid,vid,vid,vid,vid,vid,vid],[pl,pl1,pl2,pl3,pl4,pl5,pl6,pl7],[rl,nl,bl,ql,kl,bl1,nl1,rl1]];

var time = new Array()
time[0]=m;
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


function start()
{
    //fonction pour remplir le table html apartir la matrice
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            document.getElementById((i*10)+j).appendChild(m[i][j]);
        }
    }
}



window.onload = function(){start();};

// the main function that is on every button
function base(i,j)
{
    if((m[i][j]==pd)||(m[i][j]==pd1)||(m[i][j]==pd2)||(m[i][j]==pd3)||(m[i][j]==pd4)||(m[i][j]==pd5)||(m[i][j]==pd6)||(m[i][j]==pd7))
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        movepd(i,j);
        start();
    }
    if((m[i][j]==pl)||(m[i][j]==pl1)||(m[i][j]==pl2)||(m[i][j]==pl3)||(m[i][j]==pl4)||(m[i][j]==pl5)||(m[i][j]==pl6)||(m[i][j]==pl7))
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        movepl(i,j);
        start();
    }
    if((m[i][j]==rl)||(m[i][j]==rl1))
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        moverl(i,j);
        start();
    }
    if((m[i][j]==rd)||(m[i][j]==rd1))
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        moverd(i,j);
        start();
    }
    if((m[i][j]==nd)||(m[i][j]==nd1))
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        movend(i,j);
        start();
    }
    if((m[i][j]==nl)||(m[i][j]==nl1))
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        movenl(i,j);
        start();
    } 
    if((m[i][j]==bl)||(m[i][j]==bl1))
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        movebl(i,j);
        start();
    } 
    if((m[i][j]==bd)||(m[i][j]==bd1))
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        movebd(i,j);
        start();
    } 
    if(m[i][j]==kd)
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        movekd(i,j);
        start();
    } 
    if(m[i][j]==kl)
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        movekl(i,j);
        start();
    } 
    if(m[i][j]==ql)
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        moveql(i,j);
        start();
    } 
    if(m[i][j]==qd)
    {
        setcolor();
        setbutton();
        document.getElementById(i*10+j).style.backgroundColor="rgb(243, 255, 116)";
        moveqd(i,j);
        start();
    }
    
}

//it reset the color of the borde
function setcolor()
{
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if((i+j)%2==0)
            {
                document.getElementById(i*10+j).style.backgroundColor="#fff";
            }
            else
            {
                document.getElementById(i*10+j).style.backgroundColor="#000";
            }
        }
    }
}

//the function that make the rule of pawn dark
function movepd(i,j)
{
    if(m[i+1][j]==vid || m[i+1][j]==null)
    {
        document.getElementById((i+1)*10+j).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+1)*10+j).setAttribute("onclick","swap("+i+","+j+","+(i+1)+","+j+");")
        
        if((i==1)&&(m[i+2][j]==vid || m[i+2][j]==null))
        {
            document.getElementById((i+2)*10+j).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((i+2)*10+j).setAttribute("onclick","swap("+i+","+j+","+(i+2)+","+j+");")
        }
    }
    if((m[i+1][j+1]==pl)||(m[i+1][j+1]==pl1)||(m[i+1][j+1]==pl2)||(m[i+1][j+1]==pl3)||(m[i+1][j+1]==pl4)||(m[i+1][j+1]==pl5)||(m[i+1][j+1]==pl6)||(m[i+1][j+1]==pl7)||(m[i+1][j+1]==kl)||(m[i+1][j+1]==ql)||(m[i+1][j+1]==bl)||(m[i+1][j+1]==bl1)||(m[i+1][j+1]==nl)||(m[i+1][j+1]==nl1)||(m[i+1][j+1]==rl)||(m[i+1][j+1]==rl1))
    {
        document.getElementById((i+1)*10+j+1).style.backgroundColor="#f00";
        document.getElementById((i+1)*10+j+1).setAttribute("onclick","swap("+i+","+j+","+(i+1)+","+(j+1)+");");
        

    }
    if((m[i+1][j-1]==pl)||(m[i+1][j-1]==pl1)||(m[i+1][j-1]==pl2)||(m[i+1][j-1]==pl3)||(m[i+1][j-1]==pl4)||(m[i+1][j-1]==pl5)||(m[i+1][j-1]==pl6)||(m[i+1][j-1]==pl7)||(m[i+1][j-1]==kl)||(m[i+1][j-1]==ql)||(m[i+1][j-1]==bl)||(m[i+1][j-1]==bl1)||(m[i+1][j-1]==nl)||(m[i+1][j-1]==nl1)||(m[i+1][j-1]==rl)||(m[i+1][j-1]==rl1))
    {
        document.getElementById((i+1)*10+j-1).style.backgroundColor="#f00";
        document.getElementById((i+1)*10+j-1).setAttribute("onclick","swap("+i+","+j+","+(i+1)+","+(j-1)+");")
    }
    tl.push(i+1,j+1)
    tl.push(i+1,j-1)


}

//reset all the button on the game 
function setbutton()
{
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            document.getElementById((i)*10+j).setAttribute("onclick","base("+i+","+j+");")
        }
    }
}
var rockdarkmove1=false;
var  kinglightmove=false;

var rocklightmove=false;
var rocklightmove1=false;
//change the the places of the pieces
function swap(i,j,k,l)
{
    if(m[i][j]==kd)
    {
        kingdarkmove=true;
    }
    if(m[i][j]==rd)
    {
        rockdarkmove=true;
    }
    if(m[i][j]==rd1)
    {
        rockdarkmove1=true;
    }
    if(m[i][j]==kl)
    {
        kinglightmove=true;
    }
    if(m[i][j]==rl)
    {
        rocklightmove=true;
    }
    if(m[i][j]==rl1)
    {
        rocklightmove1=true;
    }

    m[k][l]=vid;
    document.getElementById((k)*10+l).innerHTML='<img>';
    m[k][l]=m[i][j]
    m[i][j]=vid;
    start();
    setcolor();
    setbutton();
    rot();

}

//the responsibel function on the rules of the white pawn 
function movepl(i,j)
{
    
    if(m[i-1][j]==vid || m[i-1][j]==null)
    {
        document.getElementById((i-1)*10+j).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-1)*10+j).setAttribute("onclick","swap("+i+","+j+","+(i-1)+","+j+");");
        
        if((i==6)&&(m[i-2][j]==vid || m[i-2][j]==null))
        {
            document.getElementById((i-2)*10+j).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((i-2)*10+j).setAttribute("onclick","swap("+i+","+j+","+(i-2)+","+j+");");

        }
    }
    
    if((m[i-1][j+1]==pd)||(m[i-1][j+1]==pd1)||(m[i-1][j+1]==pd2)||(m[i-1][j+1]==pd3)||(m[i-1][j+1]==pd4)||(m[i-1][j+1]==pd5)||(m[i-1][j+1]==pd6)||(m[i-1][j+1]==pd7)||(m[i-1][j+1]==kd)||(m[i-1][j+1]==qd)||(m[i-1][j+1]==bd)||(m[i-1][j+1]==bd1)||(m[i-1][j+1]==nd)||(m[i-1][j+1]==nd1)||(m[i-1][j+1]==rd)||(m[i-1][j+1]==rd1))
    {
        document.getElementById((i-1)*10+j+1).style.backgroundColor="#f00";
        document.getElementById((i-1)*10+j+1).setAttribute("onclick","swap("+i+","+j+","+(i-1)+","+(j+1)+");")

    }
    if((m[i-1][j-1]==pd)||(m[i-1][j-1]==pd1)||(m[i-1][j-1]==pd2)||(m[i-1][j-1]==pd3)||(m[i-1][j-1]==pd4)||(m[i-1][j-1]==pd5)||(m[i-1][j-1]==pd6)||(m[i-1][j-1]==pd7)||(m[i-1][j-1]==kd)||(m[i-1][j-1]==qd)||(m[i-1][j-1]==bd)||(m[i-1][j-1]==bd1)||(m[i-1][j-1]==nd)||(m[i-1][j-1]==nd1)||(m[i-1][j-1]==rd)||(m[i-1][j-1]==rd1))
    {
        document.getElementById((i-1)*10+j-1).style.backgroundColor="#f00";
        document.getElementById((i-1)*10+j-1).setAttribute("onclick","swap("+i+","+j+","+(i-1)+","+(j-1)+");")
    }
}

//the responsibel function on the rules of the dark horses
function movend(i,j)
{

    if((i<6 && j<7)&&((m[i+2][j+1])==vid||(m[i+2][j+1])==null||(m[i+2][j+1]==pl)||(m[i+2][j+1]==pl1)||(m[i+2][j+1]==pl2)||(m[i+2][j+1]==pl3)||(m[i+2][j+1]==pl4)||(m[i+2][j+1]==pl5)||(m[i+2][j+1]==pl6)||(m[i+2][j+1]==pl7)||(m[i+2][j+1]==kl)||(m[i+2][j+1]==ql)||(m[i+2][j+1]==bl)||(m[i+2][j+1]==bl1)||(m[i+2][j+1]==nl)||(m[i+2][j+1]==nl1)||(m[i+2][j+1]==rl)||(m[i+2][j+1]==rl1)))
    {
        document.getElementById((i+2)*10+j+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+2)*10+j+1).setAttribute("onclick","swap("+i+","+j+","+(i+2)+","+(j+1)+");")
        if(!((m[i+2][j+1])==vid||(m[i+2][j+1])==null))
        {
            document.getElementById((i+2)*10+j+1).style.backgroundColor="#f00";
        }
    }
    if((i<6 && j>0)&&((m[i+2][j-1])==vid||(m[i+2][j-1])==null||(m[i+2][j-1]==pl)||(m[i+2][j-1]==pl1)||(m[i+2][j-1]==pl2)||(m[i+2][j-1]==pl3)||(m[i+2][j-1]==pl4)||(m[i+2][j-1]==pl5)||(m[i+2][j-1]==pl6)||(m[i+2][j-1]==pl7)||(m[i+2][j-1]==kl)||(m[i+2][j-1]==ql)||(m[i+2][j-1]==bl)||(m[i+2][j-1]==bl1)||(m[i+2][j-1]==nl)||(m[i+2][j-1]==nl1)||(m[i+2][j-1]==rl)||(m[i+2][j-1]==rl1)))
    {
        document.getElementById((i+2)*10+j-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+2)*10+j-1).setAttribute("onclick","swap("+i+","+j+","+(i+2)+","+(j-1)+");")
        if(!((m[i+2][j-1])==vid||(m[i+2][j-1])==null))
        {
            document.getElementById((i+2)*10+j-1).style.backgroundColor="#f00";
        }
    }
    if((i<7 && j<6)&&((m[i+1][j+2])==vid||(m[i+1][j+2])==null||(m[i+1][j+2]==pl)||(m[i+1][j+2]==pl1)||(m[i+1][j+2]==pl2)||(m[i+1][j+2]==pl3)||(m[i+1][j+2]==pl4)||(m[i+1][j+2]==pl5)||(m[i+1][j+2]==pl6)||(m[i+1][j+2]==pl7)||(m[i+1][j+2]==kl)||(m[i+1][j+2]==ql)||(m[i+1][j+2]==bl)||(m[i+1][j+2]==bl1)||(m[i+1][j+2]==nl)||(m[i+1][j+2]==nl1)||(m[i+1][j+2]==rl)||(m[i+1][j+2]==rl1)))
    {
        document.getElementById((i+1)*10+j+2).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+1)*10+j+2).setAttribute("onclick","swap("+i+","+j+","+(i+1)+","+(j+2)+");")
        if(!((m[i+1][j+2])==vid||(m[i+1][j+2])==null))
        {
            document.getElementById((i+1)*10+j+2).style.backgroundColor="#f00";
        }
    }
    if((i<7 && j>1)&&((m[i+1][j-2])==vid||(m[i+1][j-2])==null||(m[i+1][j-2]==pl)||(m[i+1][j-2]==pl1)||(m[i+1][j-2]==pl2)||(m[i+1][j-2]==pl3)||(m[i+1][j-2]==pl4)||(m[i+1][j-2]==pl5)||(m[i+1][j-2]==pl6)||(m[i+1][j-2]==pl7)||(m[i+1][j-2]==kl)||(m[i+1][j-2]==ql)||(m[i+1][j-2]==bl)||(m[i+1][j-2]==bl1)||(m[i+1][j-2]==nl)||(m[i+1][j-2]==nl1)||(m[i+1][j-2]==rl)||(m[i+1][j-2]==rl1)))
    {
        document.getElementById((i+1)*10+j-2).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+1)*10+j-2).setAttribute("onclick","swap("+i+","+j+","+(i+1)+","+(j-2)+");")
        if(!((m[i+1][j-2])==vid||(m[i+1][j-2])==null))
        {
            document.getElementById((i+1)*10+j-2).style.backgroundColor="#f00";
        }
    }
    if((i>1 && j<7)&&((m[i-2][j+1])==vid||(m[i-2][j+1])==null||(m[i-2][j+1]==pl)||(m[i-2][j+1]==pl1)||(m[i-2][j+1]==pl2)||(m[i-2][j+1]==pl3)||(m[i-2][j+1]==pl4)||(m[i-2][j+1]==pl5)||(m[i-2][j+1]==pl6)||(m[i-2][j+1]==pl7)||(m[i-2][j+1]==kl)||(m[i-2][j+1]==ql)||(m[i-2][j+1]==bl)||(m[i-2][j+1]==bl1)||(m[i-2][j+1]==nl)||(m[i-2][j+1]==nl1)||(m[i-2][j+1]==rl)||(m[i-2][j+1]==rl1)))
    {
        document.getElementById((i-2)*10+j+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-2)*10+j+1).setAttribute("onclick","swap("+i+","+j+","+(i-2)+","+(j+1)+");")
        if(!((m[i-2][j+1])==vid||(m[i-2][j+1])==null))
        {
            document.getElementById((i-2)*10+j+1).style.backgroundColor="#f00";
        }
    }
    if((i>1 && j>0)&&((m[i-2][j-1])==vid||(m[i-2][j-1])==null||(m[i-2][j-1]==pl)||(m[i-2][j-1]==pl1)||(m[i-2][j-1]==pl2)||(m[i-2][j-1]==pl3)||(m[i-2][j-1]==pl4)||(m[i-2][j-1]==pl5)||(m[i-2][j-1]==pl6)||(m[i-2][j-1]==pl7)||(m[i-2][j-1]==kl)||(m[i-2][j-1]==ql)||(m[i-2][j-1]==bl)||(m[i-2][j-1]==bl1)||(m[i-2][j-1]==nl)||(m[i-2][j-1]==nl1)||(m[i-2][j-1]==rl)||(m[i-2][j-1]==rl1)))
    {
        document.getElementById((i-2)*10+j-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-2)*10+j-1).setAttribute("onclick","swap("+i+","+j+","+(i-2)+","+(j-1)+");")
        if(!((m[i-2][j-1])==vid||(m[i-2][j-1])==null))
        {
            document.getElementById((i-2)*10+j-1).style.backgroundColor="#f00";
        }
    }
    if((i>0 && j<6)&&((m[i-1][j+2])==vid||(m[i-1][j+2])==null||(m[i-1][j+2]==pl)||(m[i-1][j+2]==pl1)||(m[i-1][j+2]==pl2)||(m[i-1][j+2]==pl3)||(m[i-1][j+2]==pl4)||(m[i-1][j+2]==pl5)||(m[i-1][j+2]==pl6)||(m[i-1][j+2]==pl7)||(m[i-1][j+2]==kl)||(m[i-1][j+2]==ql)||(m[i-1][j+2]==bl)||(m[i-1][j+2]==bl1)||(m[i-1][j+2]==nl)||(m[i-1][j+2]==nl1)||(m[i-1][j+2]==rl)||(m[i-1][j+2]==rl1)))
    {
        document.getElementById((i-1)*10+j+2).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-1)*10+j+2).setAttribute("onclick","swap("+i+","+j+","+(i-1)+","+(j+2)+");")
        if(!((m[i-1][j+2])==vid||(m[i-1][j+2])==null))
        {
            document.getElementById((i-1)*10+j+2).style.backgroundColor="#f00";
        }
    }
    if((i>0 && j>1)&&((m[i-1][j-2])==vid||(m[i-1][j-2])==null||(m[i-1][j-2]==pl)||(m[i-1][j-2]==pl1)||(m[i-1][j-2]==pl2)||(m[i-1][j-2]==pl3)||(m[i-1][j-2]==pl4)||(m[i-1][j-2]==pl5)||(m[i-1][j-2]==pl6)||(m[i-1][j-2]==pl7)||(m[i-1][j-2]==kl)||(m[i-1][j-2]==ql)||(m[i-1][j-2]==bl)||(m[i-1][j-2]==bl1)||(m[i-1][j-2]==nl)||(m[i-1][j-2]==nl1)||(m[i-1][j-2]==rl)||(m[i-1][j-2]==rl1)))
    {
        document.getElementById((i-1)*10+j-2).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-1)*10+j-2).setAttribute("onclick","swap("+i+","+j+","+(i-1)+","+(j-2)+");")
        if(!((m[i-1][j-2])==vid||(m[i-1][j-2])==null))
        {
            document.getElementById((i-1)*10+j-2).style.backgroundColor="#f00";
        }
    }
    tl.push(i+2,j+1)
    tl.push(i+2,j-1)
    tl.push(i-2,j-1)
    tl.push(i-2,j+1)
    tl.push(i+1,j+2)
    tl.push(i+1,j-2)
    tl.push(i-1,j+2)
    tl.push(i-1,j-2)
}

function movenl(i,j)
{
    if((i<6 && j<7)&&((m[i+2][j+1])==vid||(m[i+2][j+1])==null||(m[i+2][j+1]==pd)||(m[i+2][j+1]==pd1)||(m[i+2][j+1]==pd2)||(m[i+2][j+1]==pd3)||(m[i+2][j+1]==pd4)||(m[i+2][j+1]==pd5)||(m[i+2][j+1]==pd6)||(m[i+2][j+1]==pd7)||(m[i+2][j+1]==kd)||(m[i+2][j+1]==qd)||(m[i+2][j+1]==bd)||(m[i+2][j+1]==bd1)||(m[i+2][j+1]==nd)||(m[i+2][j+1]==nd1)||(m[i+2][j+1]==rd)||(m[i+2][j+1]==rd1)))
    {
        document.getElementById((i+2)*10+j+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+2)*10+j+1).setAttribute("onclick","swap("+i+","+j+","+(i+2)+","+(j+1)+");")
        if(!((m[i+2][j+1])==vid||(m[i+2][j+1])==null))
        {
            document.getElementById((i+2)*10+j+1).style.backgroundColor="#f00";
        }
    }
    if((i<6 && j>0)&&((m[i+2][j-1])==vid||(m[i+2][j-1])==null||(m[i+2][j-1]==pd)||(m[i+2][j-1]==pd1)||(m[i+2][j-1]==pd2)||(m[i+2][j-1]==pd3)||(m[i+2][j-1]==pd4)||(m[i+2][j-1]==pd5)||(m[i+2][j-1]==pd6)||(m[i+2][j-1]==pd7)||(m[i+2][j-1]==kd)||(m[i+2][j-1]==qd)||(m[i+2][j-1]==bd)||(m[i+2][j-1]==bd1)||(m[i+2][j-1]==nd)||(m[i+2][j-1]==nd1)||(m[i+2][j-1]==rd)||(m[i+2][j-1]==rd1)))
    {
        document.getElementById((i+2)*10+j-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+2)*10+j-1).setAttribute("onclick","swap("+i+","+j+","+(i+2)+","+(j-1)+");")
        if(!((m[i+2][j-1])==vid||(m[i+2][j-1])==null))
        {
            document.getElementById((i+2)*10+j-1).style.backgroundColor="#f00";

        }

    }
    if((i<7 && j<6)&&((m[i+1][j+2])==vid||(m[i+1][j+2])==null||(m[i+1][j+2]==pd)||(m[i+1][j+2]==pd1)||(m[i+1][j+2]==pd2)||(m[i+1][j+2]==pd3)||(m[i+1][j+2]==pd4)||(m[i+1][j+2]==pd5)||(m[i+1][j+2]==pd6)||(m[i+1][j+2]==pd7)||(m[i+1][j+2]==kd)||(m[i+1][j+2]==qd)||(m[i+1][j+2]==bd)||(m[i+1][j+2]==bd1)||(m[i+1][j+2]==nd)||(m[i+1][j+2]==nd1)||(m[i+1][j+2]==rd)||(m[i+1][j+2]==rd1)))
    {
        document.getElementById((i+1)*10+j+2).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+1)*10+j+2).setAttribute("onclick","swap("+i+","+j+","+(i+1)+","+(j+2)+");")
        if(!((m[i+1][j+2])==vid||(m[i+1][j+2])==null))
        {
            document.getElementById((i+1)*10+j+2).style.backgroundColor="#f00";

        }

    }
    if((i<7 && j>1)&&((m[i+1][j-2])==vid||(m[i+1][j-2])==null||(m[i+1][j-2]==pd)||(m[i+1][j-2]==pd1)||(m[i+1][j-2]==pd2)||(m[i+1][j-2]==pd3)||(m[i+1][j-2]==pd4)||(m[i+1][j-2]==pd5)||(m[i+1][j-2]==pd6)||(m[i+1][j-2]==pd7)||(m[i+1][j-2]==kd)||(m[i+1][j-2]==qd)||(m[i+1][j-2]==bd)||(m[i+1][j-2]==bd1)||(m[i+1][j-2]==nd)||(m[i+1][j-2]==nd1)||(m[i+1][j-2]==rd)||(m[i+1][j-2]==rd1)))
    {
        document.getElementById((i+1)*10+j-2).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i+1)*10+j-2).setAttribute("onclick","swap("+i+","+j+","+(i+1)+","+(j-2)+");")
        if(!((m[i+1][j-2])==vid||(m[i+1][j-2])==null))
        {
            document.getElementById((i+1)*10+j-2).style.backgroundColor="#f00";
        }
    }
    if((i>1 && j<7)&&((m[i-2][j+1])==vid||(m[i-2][j+1])==null||(m[i-2][j+1]==pd)||(m[i-2][j+1]==pd1)||(m[i-2][j+1]==pd2)||(m[i-2][j+1]==pd3)||(m[i-2][j+1]==pd4)||(m[i-2][j+1]==pd5)||(m[i-2][j+1]==pd6)||(m[i-2][j+1]==pd7)||(m[i-2][j+1]==kd)||(m[i-2][j+1]==qd)||(m[i-2][j+1]==bd)||(m[i-2][j+1]==bd1)||(m[i-2][j+1]==nd)||(m[i-2][j+1]==nd1)||(m[i-2][j+1]==rd)||(m[i-2][j+1]==rd1)))
    {
        document.getElementById((i-2)*10+j+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-2)*10+j+1).setAttribute("onclick","swap("+i+","+j+","+(i-2)+","+(j+1)+");")
        if(!((m[i-2][j+1])==vid||(m[i-2][j+1])==null))
        {
            document.getElementById((i-2)*10+j+1).style.backgroundColor="#f00";
        }

    }
    if((i>1 && j>0)&&((m[i-2][j-1])==vid||(m[i-2][j-1])==null||(m[i-2][j-1]==pd)||(m[i-2][j-1]==pd1)||(m[i-2][j-1]==pd2)||(m[i-2][j-1]==pd3)||(m[i-2][j-1]==pd4)||(m[i-2][j-1]==pd5)||(m[i-2][j-1]==pd6)||(m[i-2][j-1]==pd7)||(m[i-2][j-1]==kd)||(m[i-2][j-1]==qd)||(m[i-2][j-1]==bd)||(m[i-2][j-1]==bd1)||(m[i-2][j-1]==nd)||(m[i-2][j-1]==nd1)||(m[i-2][j-1]==rd)||(m[i-2][j-1]==rd1)))
    {
        document.getElementById((i-2)*10+j-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-2)*10+j-1).setAttribute("onclick","swap("+i+","+j+","+(i-2)+","+(j-1)+");")
        if(!((m[i-2][j-1])==vid||(m[i-2][j-1])==null))
        {
            document.getElementById((i-2)*10+j-1).style.backgroundColor="#f00";

        }
        
    }
    if((i>0 && j<6)&&((m[i-1][j+2])==vid||(m[i-1][j+2])==null||(m[i-1][j+2]==pd)||(m[i-1][j+2]==pd1)||(m[i-1][j+2]==pd2)||(m[i-1][j+2]==pd3)||(m[i-1][j+2]==pd4)||(m[i-1][j+2]==pd5)||(m[i-1][j+2]==pd6)||(m[i-1][j+2]==pd7)||(m[i-1][j+2]==kd)||(m[i-1][j+2]==qd)||(m[i-1][j+2]==bd)||(m[i-1][j+2]==bd1)||(m[i-1][j+2]==nd)||(m[i-1][j+2]==nd1)||(m[i-1][j+2]==rd)||(m[i-1][j+2]==rd1)))
    {
        document.getElementById((i-1)*10+j+2).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-1)*10+j+2).setAttribute("onclick","swap("+i+","+j+","+(i-1)+","+(j+2)+");")
        if(!((m[i-1][j+2])==vid||(m[i-1][j+2])==null))
        {
            document.getElementById((i-1)*10+j+2).style.backgroundColor="#f00";

        }

    }
    if((i>0 && j>1)&&((m[i-1][j-2])==vid||(m[i-1][j-2])==null||(m[i-1][j-2]==pd)||(m[i-1][j-2]==pd1)||(m[i-1][j-2]==pd2)||(m[i-1][j-2]==pd3)||(m[i-1][j-2]==pd4)||(m[i-1][j-2]==pd5)||(m[i-1][j-2]==pd6)||(m[i-1][j-2]==pd7)||(m[i-1][j-2]==kd)||(m[i-1][j-2]==qd)||(m[i-1][j-2]==bd)||(m[i-1][j-2]==bd1)||(m[i-1][j-2]==nd)||(m[i-1][j-2]==nd1)||(m[i-1][j-2]==rd)||(m[i-1][j-2]==rd1)))
    {
        document.getElementById((i-1)*10+j-2).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((i-1)*10+j-2).setAttribute("onclick","swap("+i+","+j+","+(i-1)+","+(j-2)+");")
        if(!((m[i-1][j-2])==vid||(m[i-1][j-2])==null))
        {
            document.getElementById((i-1)*10+j-2).style.backgroundColor="#f00";

        }

    }
}

//qzertyuijytrerdtyfuihity
function moverd(i,j)
{
    var bool=true;
    var k=i,l=j;
    while(bool&& k<7 && k>-1 && l<8 && l>-1)
    {
        if((m[k+1][l])==vid||(m[k+1][l])==null||(m[k+1][l]==pl)||(m[k+1][l]==pl1)||(m[k+1][l]==pl2)||(m[k+1][l]==pl3)||(m[k+1][l]==pl4)||(m[k+1][l]==pl5)||(m[k+1][l]==pl6)||(m[k+1][l]==pl7)||(m[k+1][l]==kl)||(m[k+1][l]==ql)||(m[k+1][l]==bl)||(m[k+1][l]==bl1)||(m[k+1][l]==nl)||(m[k+1][l]==nl1)||(m[k+1][l]==rl)||(m[k+1][l]==rl1))
        {
            document.getElementById((k+1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l)+");");
            if(!((m[k+1][l])==vid||(m[k+1][l])==null))
            {
                document.getElementById((k+1)*10+l).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(k+1,l)
            k++;
        }
        else{bool=false;}

    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<8 && l>-1)
    {
        if((m[k-1][l])==vid||(m[k-1][l])==null||(m[k-1][l]==pl)||(m[k-1][l]==pl1)||(m[k-1][l]==pl2)||(m[k-1][l]==pl3)||(m[k-1][l]==pl4)||(m[k-1][l]==pl5)||(m[k-1][l]==pl6)||(m[k-1][l]==pl7)||(m[k-1][l]==kl)||(m[k-1][l]==ql)||(m[k-1][l]==bl)||(m[k-1][l]==bl1)||(m[k-1][l]==nl)||(m[k-1][l]==nl1)||(m[k-1][l]==rl)||(m[k-1][l]==rl1))
        {
            document.getElementById((k-1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l)+");");
            if(!((m[k-1][l])==vid||(m[k-1][l])==null))
            {
                document.getElementById((k-1)*10+l).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(k-1,l)
            k--;
        }
        else{bool=false;}

    }
//eertyuikjssssssssdsjkdjksdfsdjkdfjk
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>-1 && l<7 && l>-1)
    {
        if((m[k][l+1])==vid||(m[k][l+1])==null||(m[k][l+1]==pl)||(m[k][l+1]==pl1)||(m[k][l+1]==pl2)||(m[k][l+1]==pl3)||(m[k][l+1]==pl4)||(m[k][l+1]==pl5)||(m[k][l+1]==pl6)||(m[k][l+1]==pl7)||(m[k][l+1]==kl)||(m[k][l+1]==ql)||(m[k][l+1]==bl)||(m[k][l+1]==bl1)||(m[k][l+1]==nl)||(m[k][l+1]==nl1)||(m[k][l+1]==rl)||(m[k][l+1]==rl1))
        {
            document.getElementById((k)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k)+","+(l+1)+");");
            if(!((m[k][l+1])==vid||(m[k][l+1])==null))
            {
                document.getElementById((k)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(k,l+1)
            l++;
        }
        else{bool=false;}

    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>-1 && l<8 && l>0)
    {
        if((m[k][l-1])==vid||(m[k][l-1])==null||(m[k][l-1]==pl)||(m[k][l-1]==pl1)||(m[k][l-1]==pl2)||(m[k][l-1]==pl3)||(m[k][l-1]==pl4)||(m[k][l-1]==pl5)||(m[k][l-1]==pl6)||(m[k][l-1]==pl7)||(m[k][l-1]==kl)||(m[k][l-1]==ql)||(m[k][l-1]==bl)||(m[k][l-1]==bl1)||(m[k][l-1]==nl)||(m[k][l-1]==nl1)||(m[k][l-1]==rl)||(m[k][l-1]==rl1))
        {
            document.getElementById((k)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k)+","+(l-1)+");");
            if(!((m[k][l-1])==vid||(m[k][l-1])==null))
            {
                document.getElementById((k)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(k,l-1)
            l--;
        }
        else{bool=false;}

    }
}


function moverl(i,j)
{
    var bool=true;
    var k=i,l=j;
    while(bool&& k<7 && k>-1 && l<8 && l>-1)
    {
        if((m[k+1][l])==vid||(m[k+1][l])==null||(m[k+1][l]==pd)||(m[k+1][l]==pd1)||(m[k+1][l]==pd2)||(m[k+1][l]==pd3)||(m[k+1][l]==pd4)||(m[k+1][l]==pd5)||(m[k+1][l]==pd6)||(m[k+1][l]==pd7)||(m[k+1][l]==kd)||(m[k+1][l]==qd)||(m[k+1][l]==bd)||(m[k+1][l]==bd1)||(m[k+1][l]==nd)||(m[k+1][l]==nd1)||(m[k+1][l]==rd)||(m[k+1][l]==rd1))
        {
            document.getElementById((k+1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l)+");");
            if(!((m[k+1][l])==vid||(m[k+1][l])==null))
            {
                document.getElementById((k+1)*10+l).style.backgroundColor="#f00";

                bool=false;
            }

            k++;
        }
        else{bool=false;}
    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<8 && l>-1)
    {
        if((m[k-1][l])==vid||(m[k-1][l])==null||(m[k-1][l]==pd)||(m[k-1][l]==pd1)||(m[k-1][l]==pd2)||(m[k-1][l]==pd3)||(m[k-1][l]==pd4)||(m[k-1][l]==pd5)||(m[k-1][l]==pd6)||(m[k-1][l]==pd7)||(m[k-1][l]==kd)||(m[k-1][l]==qd)||(m[k-1][l]==bd)||(m[k-1][l]==bd1)||(m[k-1][l]==nd)||(m[k-1][l]==nd1)||(m[k-1][l]==rd)||(m[k-1][l]==rd1))
        {
            document.getElementById((k-1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l)+");");
            if(!((m[k-1][l])==vid||(m[k-1][l])==null))
            {
                document.getElementById((k-1)*10+l).style.backgroundColor="#f00";
                bool=false;
            }
            k--;
        }
        else{bool=false;}
    }
//eertyuikjssssssssdsjkdjksdfsdjkdfjk
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>-1 && l<7 && l>-1)
    {
        if((m[k][l+1])==vid||(m[k][l+1])==null||(m[k][l+1]==pd)||(m[k][l+1]==pd1)||(m[k][l+1]==pd2)||(m[k][l+1]==pd3)||(m[k][l+1]==pd4)||(m[k][l+1]==pd5)||(m[k][l+1]==pd6)||(m[k][l+1]==pd7)||(m[k][l+1]==kd)||(m[k][l+1]==qd)||(m[k][l+1]==bd)||(m[k][l+1]==bd1)||(m[k][l+1]==nd)||(m[k][l+1]==nd1)||(m[k][l+1]==rd)||(m[k][l+1]==rd1))
        {

            document.getElementById((k)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k)+","+(l+1)+");");
            if(!((m[k][l+1])==vid||(m[k][l+1])==null))
            {
                document.getElementById((k)*10+l+1).style.backgroundColor="#f00";

                bool=false;
            }

            l++;
        }
        else{bool=false;}
    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>-1 && l<8 && l>0)
    {
        if((m[k][l-1])==vid||(m[k][l-1])==null||(m[k][l-1]==pd)||(m[k][l-1]==pd1)||(m[k][l-1]==pd2)||(m[k][l-1]==pd3)||(m[k][l-1]==pd4)||(m[k][l-1]==pd5)||(m[k][l-1]==pd6)||(m[k][l-1]==pd7)||(m[k][l-1]==kd)||(m[k][l-1]==qd)||(m[k][l-1]==bd)||(m[k][l-1]==bd1)||(m[k][l-1]==nd)||(m[k][l-1]==nd1)||(m[k][l-1]==rd)||(m[k][l-1]==rd1))
        {
            document.getElementById((k)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k)+","+(l-1)+");");
            if(!((m[k][l-1])==vid||(m[k][l-1])==null))
            {
                document.getElementById((k)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            l--;
        }
        else{bool=false;}
    }
}


function movebl(i,j)
{
    var bool=true;
    var k=i,l=j;
    while(bool&& k<7 && k>-1 && l<7 && l>-1)
    {
        if((m[k+1][l+1])==vid||(m[k+1][l+1])==null||(m[k+1][l+1]==pd)||(m[k+1][l+1]==pd1)||(m[k+1][l+1]==pd2)||(m[k+1][l+1]==pd3)||(m[k+1][l+1]==pd4)||(m[k+1][l+1]==pd5)||(m[k+1][l+1]==pd6)||(m[k+1][l+1]==pd7)||(m[k+1][l+1]==kd)||(m[k+1][l+1]==qd)||(m[k+1][l+1]==bd)||(m[k+1][l+1]==bd1)||(m[k+1][l+1]==nd)||(m[k+1][l+1]==nd1)||(m[k+1][l+1]==rd)||(m[k+1][l+1]==rd1))
        {
            document.getElementById((k+1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l+1)+");");
            if(!((m[k+1][l+1])==vid||(m[k+1][l+1])==null))
            {
                document.getElementById((k+1)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            k++;
            l++;
        }
        else{bool=false;}
    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<8 && l>0)
    {
        if((m[k-1][l-1])==vid||(m[k-1][l-1])==null||(m[k-1][l-1]==pd)||(m[k-1][l-1]==pd1)||(m[k-1][l-1]==pd2)||(m[k-1][l-1]==pd3)||(m[k-1][l-1]==pd4)||(m[k-1][l-1]==pd5)||(m[k-1][l-1]==pd6)||(m[k-1][l-1]==pd7)||(m[k-1][l-1]==kd)||(m[k-1][l-1]==qd)||(m[k-1][l-1]==bd)||(m[k-1][l-1]==bd1)||(m[k-1][l-1]==nd)||(m[k-1][l-1]==nd1)||(m[k-1][l-1]==rd)||(m[k-1][l-1]==rd1))
        {
            document.getElementById((k-1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l-1)+");");
            if(!((m[k-1][l-1])==vid||(m[k-1][l-1])==null))
            {
                document.getElementById((k-1)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            k--;
            l--;
        }
        else{bool=false;}
    }
//eertyuikjssssssssdsjkdjksdfsdjkdfjk
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<7 && l>-1)
    {
        if((m[k-1][l+1])==vid||(m[k-1][l+1])==null||(m[k-1][l+1]==pd)||(m[k-1][l+1]==pd1)||(m[k-1][l+1]==pd2)||(m[k-1][l+1]==pd3)||(m[k-1][l+1]==pd4)||(m[k-1][l+1]==pd5)||(m[k-1][l+1]==pd6)||(m[k-1][l+1]==pd7)||(m[k-1][l+1]==kd)||(m[k-1][l+1]==qd)||(m[k-1][l+1]==bd)||(m[k-1][l+1]==bd1)||(m[k-1][l+1]==nd)||(m[k-1][l+1]==nd1)||(m[k-1][l+1]==rd)||(m[k-1][l+1]==rd1))
        {

            document.getElementById((k-1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l+1)+");");
            if(!((m[k-1][l+1])==vid||(m[k-1][l+1])==null))
            {
                document.getElementById((k-1)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            l++;
            k--;
        }
        else{bool=false;}
    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<7 && k>-1 && l<8 && l>0)
    {
        if((m[k+1][l-1])==vid||(m[k+1][l-1])==null||(m[k+1][l-1]==pd)||(m[k+1][l-1]==pd1)||(m[k+1][l-1]==pd2)||(m[k+1][l-1]==pd3)||(m[k+1][l-1]==pd4)||(m[k+1][l-1]==pd5)||(m[k+1][l-1]==pd6)||(m[k+1][l-1]==pd7)||(m[k+1][l-1]==kd)||(m[k+1][l-1]==qd)||(m[k+1][l-1]==bd)||(m[k+1][l-1]==bd1)||(m[k+1][l-1]==nd)||(m[k+1][l-1]==nd1)||(m[k+1][l-1]==rd)||(m[k+1][l-1]==rd1))
        {

            document.getElementById((k+1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l-1)+");");
            if(!((m[k+1][l-1])==vid||(m[k+1][l-1])==null))
            {
                document.getElementById((k+1)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            l--;
            k++;
        }
        else{bool=false;}
    }
}


function movebd(i,j)
{
    var bool=true;
    var k=i,l=j;
    while(bool&& k<7 && k>-1 && l<7 && l>-1)
    {
        if((m[k+1][l+1])==vid||(m[k+1][l+1])==null||(m[k+1][l+1]==pl)||(m[k+1][l+1]==pl1)||(m[k+1][l+1]==pl2)||(m[k+1][l+1]==pl3)||(m[k+1][l+1]==pl4)||(m[k+1][l+1]==pl5)||(m[k+1][l+1]==pl6)||(m[k+1][l+1]==pl7)||(m[k+1][l+1]==kl)||(m[k+1][l+1]==ql)||(m[k+1][ l+1]==bl)||(m[k+1][l+1]==bl1)||(m[k+1][l+1]==nl)||(m[k+1][l+1]==nl1)||(m[k+1][l+1]==rl)||(m[k+1][l+1]==rl1))
        {
            
            document.getElementById((k+1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l+1)+");");
            if(!((m[k+1][l+1])==vid||(m[k+1][l+1])==null))
            {
                document.getElementById((k+1)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(k+1,l+1)
            k++;
            l++;
        }
        else{bool=false;}

    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<8 && l>0)
    {
        if((m[k-1][l-1])==vid||(m[k-1][l-1])==null||(m[k-1][l-1]==pl)||(m[k-1][l-1]==pl1)||(m[k-1][l-1]==pl2)||(m[k-1][l-1]==pl3)||(m[k-1][l-1]==pl4)||(m[k-1][l-1]==pl5)||(m[k-1][l-1]==pl6)||(m[k-1][l-1]==pl7)||(m[k-1][l-1]==kl)||(m[k-1][l-1]==ql)||(m[k-1][ l-1]==bl)||(m[k-1][l-1]==bl1)||(m[k-1][l-1]==nl)||(m[k-1][l-1]==nl1)||(m[k-1][l-1]==rl)||(m[k-1][l-1]==rl1))
        {
            document.getElementById((k-1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l-1)+");");
            if(!((m[k-1][l-1])==vid||(m[k-1][l-1])==null))
            {
                document.getElementById((k-1)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(k-1,l-1);
            k--;
            l--;
        }
        else{bool=false;}

    }

    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<7 && l>-1)
    {
        if((m[k-1][l+1])==vid||(m[k-1][l+1])==null||(m[k-1][l+1]==pl)||(m[k-1][l+1]==pl1)||(m[k-1][l+1]==pl2)||(m[k-1][l+1]==pl3)||(m[k-1][l+1]==pl4)||(m[k-1][l+1]==pl5)||(m[k-1][l+1]==pl6)||(m[k-1][l+1]==pl7)||(m[k-1][l+1]==kl)||(m[k-1][l+1]==ql)||(m[k-1][ l+1]==bl)||(m[k-1][l+1]==bl1)||(m[k-1][l+1]==nl)||(m[k-1][l+1]==nl1)||(m[k-1][l+1]==rl)||(m[k-1][l+1]==rl1))
        {
            document.getElementById((k-1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l+1)+");");
            if(!((m[k-1][l+1])==vid||(m[k-1][l+1])==null))
            {
                document.getElementById((k-1)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(k-1,l+1)
            l++;
            k--;
        }
        else{bool=false;}

    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<7 && k>-1 && l<8 && l>0)
    {
        if((m[k+1][l-1])==vid||(m[k+1][l-1])==null||(m[k+1][l-1]==pl)||(m[k+1][l-1]==pl1)||(m[k+1][l-1]==pl2)||(m[k+1][l-1]==pl3)||(m[k+1][l-1]==pl4)||(m[k+1][l-1]==pl5)||(m[k+1][l-1]==pl6)||(m[k+1][l-1]==pl7)||(m[k+1][l-1]==kl)||(m[k+1][l-1]==ql)||(m[k+1][ l-1]==bl)||(m[k+1][l-1]==bl1)||(m[k+1][l-1]==nl)||(m[k+1][l-1]==nl1)||(m[k+1][l-1]==rl)||(m[k+1][l-1]==rl1))
        {
            document.getElementById((k+1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l-1)+");");
            if(!((m[k+1][l-1])==vid||(m[k+1][l-1])==null))
            {
                document.getElementById((k+1)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(k+1,l-1)
            l--;
            k++;
        }
        else{bool=false;}

    }
}


function moveqd(i,j)
{
    var bool=true;
    var k=i,l=j;
    while(bool&& k<7 && k>-1 && l<7 && l>-1)
    {
        if((m[k+1][l+1])==vid||(m[k+1][l+1])==null||(m[k+1][l+1]==pl)||(m[k+1][l+1]==pl1)||(m[k+1][l+1]==pl2)||(m[k+1][l+1]==pl3)||(m[k+1][l+1]==pl4)||(m[k+1][l+1]==pl5)||(m[k+1][l+1]==pl6)||(m[k+1][l+1]==pl7)||(m[k+1][l+1]==kl)||(m[k+1][l+1]==ql)||(m[k+1][ l+1]==bl)||(m[k+1][l+1]==bl1)||(m[k+1][l+1]==nl)||(m[k+1][l+1]==nl1)||(m[k+1][l+1]==rl)||(m[k+1][l+1]==rl1))
        {
            document.getElementById((k+1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l+1)+");");
            if(!((m[k+1][l+1])==vid||(m[k+1][l+1])==null))
            {
                document.getElementById((k+1)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(++k,++l)
            k++;
            l++;
        }
        else{bool=false;}

    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<8 && l>0)
    {
        if((m[k-1][l-1])==vid||(m[k-1][l-1])==null||(m[k-1][l-1]==pl)||(m[k-1][l-1]==pl1)||(m[k-1][l-1]==pl2)||(m[k-1][l-1]==pl3)||(m[k-1][l-1]==pl4)||(m[k-1][l-1]==pl5)||(m[k-1][l-1]==pl6)||(m[k-1][l-1]==pl7)||(m[k-1][l-1]==kl)||(m[k-1][l-1]==ql)||(m[k-1][ l-1]==bl)||(m[k-1][l-1]==bl1)||(m[k-1][l-1]==nl)||(m[k-1][l-1]==nl1)||(m[k-1][l-1]==rl)||(m[k-1][l-1]==rl1))
        {
            document.getElementById((k-1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l-1)+");");
            if(!((m[k-1][l-1])==vid||(m[k-1][l-1])==null))
            {
                document.getElementById((k-1)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(--k,--l)
            k--;
            l--;
        }
        else{bool=false;}

    }

    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<7 && l>-1)
    {
        if((m[k-1][l+1])==vid||(m[k-1][l+1])==null||(m[k-1][l+1]==pl)||(m[k-1][l+1]==pl1)||(m[k-1][l+1]==pl2)||(m[k-1][l+1]==pl3)||(m[k-1][l+1]==pl4)||(m[k-1][l+1]==pl5)||(m[k-1][l+1]==pl6)||(m[k-1][l+1]==pl7)||(m[k-1][l+1]==kl)||(m[k-1][l+1]==ql)||(m[k-1][ l+1]==bl)||(m[k-1][l+1]==bl1)||(m[k-1][l+1]==nl)||(m[k-1][l+1]==nl1)||(m[k-1][l+1]==rl)||(m[k-1][l+1]==rl1))
        {
            document.getElementById((k-1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l+1)+");");
            if(!((m[k-1][l+1])==vid||(m[k-1][l+1])==null))
            {
                document.getElementById((k-1)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            tl.push(--k,++l)
            l++;
            k--;
        }
        else{bool=false;}

    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<7 && k>-1 && l<8 && l>0)
    {
        if((m[k+1][l-1])==vid||(m[k+1][l-1])==null||(m[k+1][l-1]==pl)||(m[k+1][l-1]==pl1)||(m[k+1][l-1]==pl2)||(m[k+1][l-1]==pl3)||(m[k+1][l-1]==pl4)||(m[k+1][l-1]==pl5)||(m[k+1][l-1]==pl6)||(m[k+1][l-1]==pl7)||(m[k+1][l-1]==kl)||(m[k+1][l-1]==ql)||(m[k+1][ l-1]==bl)||(m[k+1][l-1]==bl1)||(m[k+1][l-1]==nl)||(m[k+1][l-1]==nl1)||(m[k+1][l-1]==rl)||(m[k+1][l-1]==rl1))
        {
            document.getElementById((k+1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l-1)+");");
            if(!((m[k+1][l-1])==vid||(m[k+1][l-1])==null))
            {
                document.getElementById((k+1)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            l--;
            k++;
            tl.push(k,l)
        }
        else{bool=false;}

    }
    var bool=true;
    var k=i,l=j;
    while(bool&& k<7 && k>-1 && l<8 && l>-1)
    {
        if((m[k+1][l])==vid||(m[k+1][l])==null||(m[k+1][l]==pl)||(m[k+1][l]==pl1)||(m[k+1][l]==pl2)||(m[k+1][l]==pl3)||(m[k+1][l]==pl4)||(m[k+1][l]==pl5)||(m[k+1][l]==pl6)||(m[k+1][l]==pl7)||(m[k+1][l]==kl)||(m[k+1][l]==ql)||(m[k+1][l]==bl)||(m[k+1][l]==bl1)||(m[k+1][l]==nl)||(m[k+1][l]==nl1)||(m[k+1][l]==rl)||(m[k+1][l]==rl1))
        {
            document.getElementById((k+1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l)+");");
            if(!((m[k+1][l])==vid||(m[k+1][l])==null))
            {
                document.getElementById((k+1)*10+l).style.backgroundColor="#f00";
                bool=false;
            }
            k++;
            tl.push(k,l)
        }
        else{bool=false;}

    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<8 && l>-1)
    {
        if((m[k-1][l])==vid||(m[k-1][l])==null||(m[k-1][l]==pl)||(m[k-1][l]==pl1)||(m[k-1][l]==pl2)||(m[k-1][l]==pl3)||(m[k-1][l]==pl4)||(m[k-1][l]==pl5)||(m[k-1][l]==pl6)||(m[k-1][l]==pl7)||(m[k-1][l]==kl)||(m[k-1][l]==ql)||(m[k-1][l]==bl)||(m[k-1][l]==bl1)||(m[k-1][l]==nl)||(m[k-1][l]==nl1)||(m[k-1][l]==rl)||(m[k-1][l]==rl1))
        {
            document.getElementById((k-1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l)+");");
            if(!((m[k-1][l])==vid||(m[k-1][l])==null))
            {
                document.getElementById((k-1)*10+l).style.backgroundColor="#f00";
                bool=false;
            }
            k--;
            tl.push(k,l)
        }
        else{bool=false;}

    }
//eertyuikjssssssssdsjkdjksdfsdjkdfjk
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>-1 && l<7 && l>-1)
    {
        if((m[k][l+1])==vid||(m[k][l+1])==null||(m[k][l+1]==pl)||(m[k][l+1]==pl1)||(m[k][l+1]==pl2)||(m[k][l+1]==pl3)||(m[k][l+1]==pl4)||(m[k][l+1]==pl5)||(m[k][l+1]==pl6)||(m[k][l+1]==pl7)||(m[k][l+1]==kl)||(m[k][l+1]==ql)||(m[k][l+1]==bl)||(m[k][l+1]==bl1)||(m[k][l+1]==nl)||(m[k][l+1]==nl1)||(m[k][l+1]==rl)||(m[k][l+1]==rl1))
        {
            document.getElementById((k)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k)+","+(l+1)+");");
            if(!((m[k][l+1])==vid||(m[k][l+1])==null))
            {
                document.getElementById((k)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            l++;
            tl.push(k,l)
        }
        else{bool=false;}

    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>-1 && l<8 && l>0)
    {
        if((m[k][l-1])==vid||(m[k][l-1])==null||(m[k][l-1]==pl)||(m[k][l-1]==pl1)||(m[k][l-1]==pl2)||(m[k][l-1]==pl3)||(m[k][l-1]==pl4)||(m[k][l-1]==pl5)||(m[k][l-1]==pl6)||(m[k][l-1]==pl7)||(m[k][l-1]==kl)||(m[k][l-1]==ql)||(m[k][l-1]==bl)||(m[k][l-1]==bl1)||(m[k][l-1]==nl)||(m[k][l-1]==nl1)||(m[k][l-1]==rl)||(m[k][l-1]==rl1))
        {
            document.getElementById((k)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k)+","+(l-1)+");");
            if(!((m[k][l-1])==vid||(m[k][l-1])==null))
            {
                document.getElementById((k)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            l--;
            tl.push(k,l)
        }
        else{bool=false;}

    }
}



function moveql(i,j)
{
    var bool=true;
    var k=i,l=j;
    while(bool&& k<7 && k>-1 && l<7 && l>-1)
    {
        if((m[k+1][l+1])==vid||(m[k+1][l+1])==null||(m[k+1][l+1]==pd)||(m[k+1][l+1]==pd1)||(m[k+1][l+1]==pd2)||(m[k+1][l+1]==pd3)||(m[k+1][l+1]==pd4)||(m[k+1][l+1]==pd5)||(m[k+1][l+1]==pd6)||(m[k+1][l+1]==pd7)||(m[k+1][l+1]==kd)||(m[k+1][l+1]==qd)||(m[k+1][l+1]==bd)||(m[k+1][l+1]==bd1)||(m[k+1][l+1]==nd)||(m[k+1][l+1]==nd1)||(m[k+1][l+1]==rd)||(m[k+1][l+1]==rd1))
        {
            document.getElementById((k+1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l+1)+");");
            if(!((m[k+1][l+1])==vid||(m[k+1][l+1])==null))
            {
                document.getElementById((k+1)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            k++;
            l++;
        }
        else{bool=false;}
    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<8 && l>0)
    {
        if((m[k-1][l-1])==vid||(m[k-1][l-1])==null||(m[k-1][l-1]==pd)||(m[k-1][l-1]==pd1)||(m[k-1][l-1]==pd2)||(m[k-1][l-1]==pd3)||(m[k-1][l-1]==pd4)||(m[k-1][l-1]==pd5)||(m[k-1][l-1]==pd6)||(m[k-1][l-1]==pd7)||(m[k-1][l-1]==kd)||(m[k-1][l-1]==qd)||(m[k-1][l-1]==bd)||(m[k-1][l-1]==bd1)||(m[k-1][l-1]==nd)||(m[k-1][l-1]==nd1)||(m[k-1][l-1]==rd)||(m[k-1][l-1]==rd1))
        {

            document.getElementById((k-1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l-1)+");");
            if(!((m[k-1][l-1])==vid||(m[k-1][l-1])==null))
            {
                document.getElementById((k-1)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            k--;
            l--;
        }
        else{bool=false;}
    }
//eertyuikjssssssssdsjkdjksdfsdjkdfjk
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<7 && l>-1)
    {
        if((m[k-1][l+1])==vid||(m[k-1][l+1])==null||(m[k-1][l+1]==pd)||(m[k-1][l+1]==pd1)||(m[k-1][l+1]==pd2)||(m[k-1][l+1]==pd3)||(m[k-1][l+1]==pd4)||(m[k-1][l+1]==pd5)||(m[k-1][l+1]==pd6)||(m[k-1][l+1]==pd7)||(m[k-1][l+1]==kd)||(m[k-1][l+1]==qd)||(m[k-1][l+1]==bd)||(m[k-1][l+1]==bd1)||(m[k-1][l+1]==nd)||(m[k-1][l+1]==nd1)||(m[k-1][l+1]==rd)||(m[k-1][l+1]==rd1))
        {

            document.getElementById((k-1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l+1)+");");
            if(!((m[k-1][l+1])==vid||(m[k-1][l+1])==null))
            {
                document.getElementById((k-1)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            l++;
            k--;
        }
        else{bool=false;}
    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<7 && k>-1 && l<8 && l>0)
    {
        if((m[k+1][l-1])==vid||(m[k+1][l-1])==null||(m[k+1][l-1]==pd)||(m[k+1][l-1]==pd1)||(m[k+1][l-1]==pd2)||(m[k+1][l-1]==pd3)||(m[k+1][l-1]==pd4)||(m[k+1][l-1]==pd5)||(m[k+1][l-1]==pd6)||(m[k+1][l-1]==pd7)||(m[k+1][l-1]==kd)||(m[k+1][l-1]==qd)||(m[k+1][l-1]==bd)||(m[k+1][l-1]==bd1)||(m[k+1][l-1]==nd)||(m[k+1][l-1]==nd1)||(m[k+1][l-1]==rd)||(m[k+1][l-1]==rd1))
        {

            document.getElementById((k+1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l-1)+");");
            if(!((m[k+1][l-1])==vid||(m[k+1][l-1])==null))
            {
                document.getElementById((k+1)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            l--;
            k++;
        }
        else{bool=false;}
    }
    var bool=true;
    var k=i,l=j;
    while(bool&& k<7 && k>-1 && l<8 && l>-1)
    {
        if((m[k+1][l])==vid||(m[k+1][l])==null||(m[k+1][l]==pd)||(m[k+1][l]==pd1)||(m[k+1][l]==pd2)||(m[k+1][l]==pd3)||(m[k+1][l]==pd4)||(m[k+1][l]==pd5)||(m[k+1][l]==pd6)||(m[k+1][l]==pd7)||(m[k+1][l]==kd)||(m[k+1][l]==qd)||(m[k+1][l]==bd)||(m[k+1][l]==bd1)||(m[k+1][l]==nd)||(m[k+1][l]==nd1)||(m[k+1][l]==rd)||(m[k+1][l]==rd1))
        {

            document.getElementById((k+1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k+1)*10+l).setAttribute("onclick","swap("+i+","+j+","+(k+1)+","+(l)+");");
            if(!((m[k+1][l])==vid||(m[k+1][l])==null))
            {
                document.getElementById((k+1)*10+l).style.backgroundColor="#f00";
                bool=false;
            }
            k++;
        }
        else{bool=false;}
    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>0 && l<8 && l>-1)
    {
        if((m[k-1][l])==vid||(m[k-1][l])==null||(m[k-1][l]==pd)||(m[k-1][l]==pd1)||(m[k-1][l]==pd2)||(m[k-1][l]==pd3)||(m[k-1][l]==pd4)||(m[k-1][l]==pd5)||(m[k-1][l]==pd6)||(m[k-1][l]==pd7)||(m[k-1][l]==kd)||(m[k-1][l]==qd)||(m[k-1][l]==bd)||(m[k-1][l]==bd1)||(m[k-1][l]==nd)||(m[k-1][l]==nd1)||(m[k-1][l]==rd)||(m[k-1][l]==rd1))
        {

            document.getElementById((k-1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k-1)*10+l).setAttribute("onclick","swap("+i+","+j+","+(k-1)+","+(l)+");");
            if(!((m[k-1][l])==vid||(m[k-1][l])==null))
            {
                document.getElementById((k-1)*10+l).style.backgroundColor="#f00";

                bool=false;
            }
            k--;
        }
        else{bool=false;}
    }
//eertyuikjssssssssdsjkdjksdfsdjkdfjk
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>-1 && l<7 && l>-1)
    {
        if((m[k][l+1])==vid||(m[k][l+1])==null||(m[k][l+1]==pd)||(m[k][l+1]==pd1)||(m[k][l+1]==pd2)||(m[k][l+1]==pd3)||(m[k][l+1]==pd4)||(m[k][l+1]==pd5)||(m[k][l+1]==pd6)||(m[k][l+1]==pd7)||(m[k][l+1]==kd)||(m[k][l+1]==qd)||(m[k][l+1]==bd)||(m[k][l+1]==bd1)||(m[k][l+1]==nd)||(m[k][l+1]==nd1)||(m[k][l+1]==rd)||(m[k][l+1]==rd1))
        {

            document.getElementById((k)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k)*10+l+1).setAttribute("onclick","swap("+i+","+j+","+(k)+","+(l+1)+");");
            if(!((m[k][l+1])==vid||(m[k][l+1])==null))
            {
                document.getElementById((k)*10+l+1).style.backgroundColor="#f00";
                bool=false;
            }
            l++;
        }
        else{bool=false;}
    }
    bool=true;
    k=i;
    l=j;
    while(bool&& k<8 && k>-1 && l<8 && l>0)
    {
        if((m[k][l-1])==vid||(m[k][l-1])==null||(m[k][l-1]==pd)||(m[k][l-1]==pd1)||(m[k][l-1]==pd2)||(m[k][l-1]==pd3)||(m[k][l-1]==pd4)||(m[k][l-1]==pd5)||(m[k][l-1]==pd6)||(m[k][l-1]==pd7)||(m[k][l-1]==kd)||(m[k][l-1]==qd)||(m[k][l-1]==bd)||(m[k][l-1]==bd1)||(m[k][l-1]==nd)||(m[k][l-1]==nd1)||(m[k][l-1]==rd)||(m[k][l-1]==rd1))
        {

            document.getElementById((k)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
            document.getElementById((k)*10+l-1).setAttribute("onclick","swap("+i+","+j+","+(k)+","+(l-1)+");");
            if(!((m[k][l-1])==vid||(m[k][l-1])==null))
            {
                document.getElementById((k)*10+l-1).style.backgroundColor="#f00";
                bool=false;
            }
            l--;
        }
        else{bool=false;}
    }
}

var kingdarkmove=false;

function movekd(k,l)
{

    document.getElementById((k*10)+l).style.backgroundColor="rgb(243, 255, 116)";
    if((!finddark(k-1,l-1)) && (k>0 && l>0) && ((m[k-1][l-1])==vid||(m[k-1][l-1])==null||(m[k-1][l-1]==pl)||(m[k-1][l-1]==pl1)||(m[k-1][l-1]==pl2)||(m[k-1][l-1]==pl3)||(m[k-1][l-1]==pl4)||(m[k-1][l-1]==pl5)||(m[k-1][l-1]==pl6)||(m[k-1][l-1]==pl7)||(m[k-1][l-1]==kl)||(m[k-1][l-1]==ql)||(m[k-1][l-1]==bl)||(m[k-1][l-1]==bl1)||(m[k-1][l-1]==nl)||(m[k-1][l-1]==nl1)||(m[k-1][l-1]==rl)||(m[k-1][l-1]==rl1)))
    {
        document.getElementById((k-1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k-1)*10+l-1).setAttribute("onclick","swap("+k+","+l+","+(k-1)+","+(l-1)+");");
        if(!((m[k-1][l-1])==vid||(m[k-1][l-1])==null))
        {
            document.getElementById((k-1)*10+l-1).style.backgroundColor="#f00";
        }
        tl.push(--k,--l)
    }
    if((!finddark(k-1,l)) && (k>0) && ((m[k-1][l])==vid||(m[k-1][l])==null||(m[k-1][l]==pl)||(m[k-1][l]==pl1)||(m[k-1][l]==pl2)||(m[k-1][l]==pl3)||(m[k-1][l]==pl4)||(m[k-1][l]==pl5)||(m[k-1][l]==pl6)||(m[k-1][l]==pl7)||(m[k-1][l]==kl)||(m[k-1][l]==ql)||(m[k-1][l]==bl)||(m[k-1][l]==bl1)||(m[k-1][l]==nl)||(m[k-1][l]==nl1)||(m[k-1][l]==rl)||(m[k-1][l]==rl1)))
    {
        document.getElementById((k-1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k-1)*10+l).setAttribute("onclick","swap("+k+","+l+","+(k-1)+","+(l)+");");
        if(!((m[k-1][l])==vid||(m[k-1][l])==null))
        {
            document.getElementById((k-1)*10+l).style.backgroundColor="#f00";
        }
        tl.push(--k,l)
    }
    if((!finddark(k-1,l+1)) && (k>0 && l<7) && ((m[k-1][l+1])==vid||(m[k-1][l+1])==null||(m[k-1][l+1]==pl)||(m[k-1][l+1]==pl1)||(m[k-1][l+1]==pl2)||(m[k-1][l+1]==pl3)||(m[k-1][l+1]==pl4)||(m[k-1][l+1]==pl5)||(m[k-1][l+1]==pl6)||(m[k-1][l+1]==pl7)||(m[k-1][l+1]==kl)||(m[k-1][l+1]==ql)||(m[k-1][l+1]==bl)||(m[k-1][l+1]==bl1)||(m[k-1][l+1]==nl)||(m[k-1][l+1]==nl1)||(m[k-1][l+1]==rl)||(m[k-1][l+1]==rl1)))
    {
        document.getElementById((k-1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k-1)*10+l+1).setAttribute("onclick","swap("+k+","+l+","+(k-1)+","+(l+1)+");");
        if(!((m[k-1][l+1])==vid||(m[k-1][l+1])==null))
        {
            document.getElementById((k-1)*10+l+1).style.backgroundColor="#f00";
        }
        tl.push(--k,++l)
    }
    if((!finddark(k,l-1)) && (l>0) && ((m[k][l-1])==vid||(m[k][l-1])==null||(m[k][l-1]==pl)||(m[k][l-1]==pl1)||(m[k][l-1]==pl2)||(m[k][l-1]==pl3)||(m[k][l-1]==pl4)||(m[k][l-1]==pl5)||(m[k][l-1]==pl6)||(m[k][l-1]==pl7)||(m[k][l-1]==kl)||(m[k][l-1]==ql)||(m[k][l-1]==bl)||(m[k][l-1]==bl1)||(m[k][l-1]==nl)||(m[k][l-1]==nl1)||(m[k][l-1]==rl)||(m[k][l-1]==rl1)))
    {
        document.getElementById((k)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k)*10+l-1).setAttribute("onclick","swap("+k+","+l+","+(k)+","+(l-1)+");");
        if(!((m[k][l-1])==vid||(m[k][l-1])==null))
        {
            document.getElementById((k)*10+l-1).style.backgroundColor="#f00";
        }
        tl.push(k,--l)
    }

    if((!finddark(k,l+1)) && (l<7) && ((m[k][l+1])==vid||(m[k][l+1])==null||(m[k][l+1]==pl)||(m[k][l+1]==pl1)||(m[k][l+1]==pl2)||(m[k][l+1]==pl3)||(m[k][l+1]==pl4)||(m[k][l+1]==pl5)||(m[k][l+1]==pl6)||(m[k][l+1]==pl7)||(m[k][l+1]==kl)||(m[k][l+1]==ql)||(m[k][l+1]==bl)||(m[k][l+1]==bl1)||(m[k][l+1]==nl)||(m[k][l+1]==nl1)||(m[k][l+1]==rl)||(m[k][l+1]==rl1)))
    {
        document.getElementById((k)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k)*10+l+1).setAttribute("onclick","swap("+k+","+l+","+(k)+","+(l+1)+");");
        if(!((m[k][l+1])==vid||(m[k][l+1])==null))
        {
            document.getElementById((k)*10+l+1).style.backgroundColor="#f00";
        }
        tl.push(k,++l)
    }
    if((!finddark(k+1,l-1)) && (k<7 && l>0) && ((m[k+1][l-1])==vid||(m[k+1][l-1])==null||(m[k+1][l-1]==pl)||(m[k+1][l-1]==pl1)||(m[k+1][l-1]==pl2)||(m[k+1][l-1]==pl3)||(m[k+1][l-1]==pl4)||(m[k+1][l-1]==pl5)||(m[k+1][l-1]==pl6)||(m[k+1][l-1]==pl7)||(m[k+1][l-1]==kl)||(m[k+1][l-1]==ql)||(m[k+1][l-1]==bl)||(m[k+1][l-1]==bl1)||(m[k+1][l-1]==nl)||(m[k+1][l-1]==nl1)||(m[k+1][l-1]==rl)||(m[k+1][l-1]==rl1)))
    {
        document.getElementById((k+1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k+1)*10+l-1).setAttribute("onclick","swap("+k+","+l+","+(k+1)+","+(l-1)+");");
        if(!((m[k+1][l-1])==vid||(m[k+1][l-1])==null))
        {
            document.getElementById((k+1)*10+l-1).style.backgroundColor="#f00";
        }
        tl.push(++k,--l)
    }
    if((!finddark(k+1,l)) && (k<7) && ((m[k+1][l])==vid||(m[k+1][l])==null||(m[k+1][l]==pl)||(m[k+1][l]==pl1)||(m[k+1][l]==pl2)||(m[k+1][l]==pl3)||(m[k+1][l]==pl4)||(m[k+1][l]==pl5)||(m[k+1][l]==pl6)||(m[k+1][l]==pl7)||(m[k+1][l]==kl)||(m[k+1][l]==ql)||(m[k+1][l]==bl)||(m[k+1][l]==bl1)||(m[k+1][l]==nl)||(m[k+1][l]==nl1)||(m[k+1][l]==rl)||(m[k+1][l]==rl1)))
    {
        document.getElementById((k+1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k+1)*10+l).setAttribute("onclick","swap("+k+","+l+","+(k+1)+","+(l)+");");
        if(!((m[k+1][l])==vid||(m[k+1][l])==null))
        {
            document.getElementById((k+1)*10+l).style.backgroundColor="#f00";
        }
        tl.push(++k,l)
    }
    if((!finddark(k+1,l+1)) && (k<7 && l<7) && ((m[k+1][l+1])==vid||(m[k+1][l+1])==null||(m[k+1][l+1]==pl)||(m[k+1][l+1]==pl1)||(m[k+1][l+1]==pl2)||(m[k+1][l+1]==pl3)||(m[k+1][l+1]==pl4)||(m[k+1][l+1]==pl5)||(m[k+1][l+1]==pl6)||(m[k+1][l+1]==pl7)||(m[k+1][l+1]==kl)||(m[k+1][l+1]==ql)||(m[k+1][l+1]==bl)||(m[k+1][l+1]==bl1)||(m[k+1][l+1]==nl)||(m[k+1][l+1]==nl1)||(m[k+1][l+1]==rl)||(m[k+1][l+1]==rl1)))
    {
        document.getElementById((k+1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k+1)*10+l+1).setAttribute("onclick","swap("+k+","+l+","+(k+1)+","+(l+1)+");");
        if(!((m[k+1][l+1])==vid||(m[k+1][l+1])==null))
        {
            document.getElementById((k+1)*10+l+1).style.backgroundColor="#f00";
        }
        tl.push(++k,++l)
    }
    if( !finddark(0,2) && !kingdarkmove && !rockdarkmove && (m[0][1]==vid||m[0][1]==null)&&(m[0][2]==vid||m[0][2]==null)&&(m[0][3]==vid||m[0][3]==null))
    {
        document.getElementById("2").style.backgroundColor="rgb(181, 133, 209)";
        document.getElementById("2").setAttribute("onclick","swap(0,4,0,2);swap(0,0,0,3);rot();");
        tl.push(0,2)
    }
    if( !finddark(0,6) && !kingdarkmove && !rockdarkmove1 && (m[0][6]==vid||m[0][6]==null)&&(m[0][5]==vid||m[0][5]==null))
    {
        document.getElementById("6").style.backgroundColor="rgb(181, 133, 209)";
        document.getElementById("6").setAttribute("onclick","swap(0,4,0,6);swap(0,7,0,5);rot();");
        tl.push(0,6)
    }
}





function movekl(k,l)
{

    tl.length=0;
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(i==k&&j==l)
            {
                continue;
            }
            setbutton()
            setcolor()
            document.getElementById((i)*10+j).click();
            setcolor()
        }
    }
    if((!findlight(k-1,l-1)) && (k>0 && l>0) && ((m[k-1][l-1])==vid||(m[k-1][l-1])==null||(m[k-1][l-1]==pd)||(m[k-1][l-1]==pd1)||(m[k-1][l-1]==pd2)||(m[k-1][l-1]==pd3)||(m[k-1][l-1]==pd4)||(m[k-1][l-1]==pd5)||(m[k-1][l-1]==pd6)||(m[k-1][l-1]==pd7)||(m[k-1][l-1]==kd)||(m[k-1][l-1]==qd)||(m[k-1][l-1]==bd)||(m[k-1][l-1]==bd1)||(m[k-1][l-1]==nd)||(m[k-1][l-1]==nd1)||(m[k-1][l-1]==rd)||(m[k-1][l-1]==rd1)))
    {
        document.getElementById((k-1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k-1)*10+l-1).setAttribute("onclick","swap("+k+","+l+","+(k-1)+","+(l-1)+");");
        if(!((m[k-1][l-1])==vid||(m[k-1][l-1])==null))
        {
            document.getElementById((k-1)*10+l-1).style.backgroundColor="#f00";
        }
    }
    if((!findlight(k-1,l)) && (k>0) && ((m[k-1][l])==vid||(m[k-1][l])==null||(m[k-1][l]==pd)||(m[k-1][l]==pd1)||(m[k-1][l]==pd2)||(m[k-1][l]==pd3)||(m[k-1][l]==pd4)||(m[k-1][l]==pd5)||(m[k-1][l]==pd6)||(m[k-1][l]==pd7)||(m[k-1][l]==kd)||(m[k-1][l]==qd)||(m[k-1][l]==bd)||(m[k-1][l]==bd1)||(m[k-1][l]==nd)||(m[k-1][l]==nd1)||(m[k-1][l]==rd)||(m[k-1][l]==rd1)))
    {
        document.getElementById((k-1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k-1)*10+l).setAttribute("onclick","swap("+k+","+l+","+(k-1)+","+(l)+");");
        if(!((m[k-1][l])==vid||(m[k-1][l])==null))
        {
            document.getElementById((k-1)*10+l).style.backgroundColor="#f00";
        }
    }
    if((!findlight(k-1,l+1)) && (k>0 && l<7) && ((m[k-1][l+1])==vid||(m[k-1][l+1])==null||(m[k-1][l+1]==pd)||(m[k-1][l+1]==pd1)||(m[k-1][l+1]==pd2)||(m[k-1][l+1]==pd3)||(m[k-1][l+1]==pd4)||(m[k-1][l+1]==pd5)||(m[k-1][l+1]==pd6)||(m[k-1][l+1]==pd7)||(m[k-1][l+1]==kd)||(m[k-1][l+1]==qd)||(m[k-1][l+1]==bd)||(m[k-1][l+1]==bd1)||(m[k-1][l+1]==nd)||(m[k-1][l+1]==nd1)||(m[k-1][l+1]==rd)||(m[k-1][l+1]==rd1)))
    {
        document.getElementById((k-1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k-1)*10+l+1).setAttribute("onclick","swap("+k+","+l+","+(k-1)+","+(l+1)+");");
        if(!((m[k-1][l+1])==vid||(m[k-1][l+1])==null))
        {
            document.getElementById((k-1)*10+l+1).style.backgroundColor="#f00";
        }
    }
    if((!findlight(k,l-1)) && (l>0) && ((m[k][l-1])==vid||(m[k][l-1])==null||(m[k][l-1]==pd)||(m[k][l-1]==pd1)||(m[k][l-1]==pd2)||(m[k][l-1]==pd3)||(m[k][l-1]==pd4)||(m[k][l-1]==pd5)||(m[k][l-1]==pd6)||(m[k][l-1]==pd7)||(m[k][l-1]==kd)||(m[k][l-1]==qd)||(m[k][l-1]==bd)||(m[k][l-1]==bd1)||(m[k][l-1]==nd)||(m[k][l-1]==nd1)||(m[k][l-1]==rd)||(m[k][l-1]==rd1)))
    {
        document.getElementById((k)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k)*10+l-1).setAttribute("onclick","swap("+k+","+l+","+(k)+","+(l-1)+");");
        if(!((m[k][l-1])==vid||(m[k][l-1])==null))
        {
            document.getElementById((k)*10+l-1).style.backgroundColor="#f00";
        }
    }
    if((!findlight(k,l)) && ((m[k][l])==vid||(m[k][l])==null||(m[k][l]==pd)||(m[k][l]==pd1)||(m[k][l]==pd2)||(m[k][l]==pd3)||(m[k][l]==pd4)||(m[k][l]==pd5)||(m[k][l]==pd6)||(m[k][l]==pd7)||(m[k][l]==kd)||(m[k][l]==qd)||(m[k][l]==bd)||(m[k][l]==bd1)||(m[k][l]==nd)||(m[k][l]==nd1)||(m[k][l]==rd)||(m[k][l]==rd1)))
    {
        document.getElementById((k)*10+l).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k)*10+l).setAttribute("onclick","swap("+k+","+l+","+(k)+","+(l)+");");
        if(!((m[k][l])==vid||(m[k][l])==null))
        {
            document.getElementById((k)*10+l).style.backgroundColor="#f00";
        }
    }
    if((!findlight(k,l+1)) && (l<7) && ((m[k][l+1])==vid||(m[k][l+1])==null||(m[k][l+1]==pd)||(m[k][l+1]==pd1)||(m[k][l+1]==pd2)||(m[k][l+1]==pd3)||(m[k][l+1]==pd4)||(m[k][l+1]==pd5)||(m[k][l+1]==pd6)||(m[k][l+1]==pd7)||(m[k][l+1]==kd)||(m[k][l+1]==qd)||(m[k][l+1]==bd)||(m[k][l+1]==bd1)||(m[k][l+1]==nd)||(m[k][l+1]==nd1)||(m[k][l+1]==rd)||(m[k][l+1]==rd1)))
    {
        document.getElementById((k)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k)*10+l+1).setAttribute("onclick","swap("+k+","+l+","+(k)+","+(l+1)+");");
        if(!((m[k][l+1])==vid||(m[k][l+1])==null))
        {
            document.getElementById((k)*10+l+1).style.backgroundColor="#f00";
        }
    }
    if((!findlight(k+1,l-1)) && (k<7 && l>0) && ((m[k+1][l-1])==vid||(m[k+1][l-1])==null||(m[k+1][l-1]==pd)||(m[k+1][l-1]==pd1)||(m[k+1][l-1]==pd2)||(m[k+1][l-1]==pd3)||(m[k+1][l-1]==pd4)||(m[k+1][l-1]==pd5)||(m[k+1][l-1]==pd6)||(m[k+1][l-1]==pd7)||(m[k+1][l-1]==kd)||(m[k+1][l-1]==qd)||(m[k+1][l-1]==bd)||(m[k+1][l-1]==bd1)||(m[k+1][l-1]==nd)||(m[k+1][l-1]==nd1)||(m[k+1][l-1]==rd)||(m[k+1][l-1]==rd1)))
    {
        document.getElementById((k+1)*10+l-1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k+1)*10+l-1).setAttribute("onclick","swap("+k+","+l+","+(k+1)+","+(l-1)+");");
        if(!((m[k+1][l-1])==vid||(m[k+1][l-1])==null))
        {
            document.getElementById((k+1)*10+l-1).style.backgroundColor="#f00";
        }
    }
    if((!findlight(k+1,l)) && (k<7) && ((m[k+1][l])==vid||(m[k+1][l])==null||(m[k+1][l]==pd)||(m[k+1][l]==pd1)||(m[k+1][l]==pd2)||(m[k+1][l]==pd3)||(m[k+1][l]==pd4)||(m[k+1][l]==pd5)||(m[k+1][l]==pd6)||(m[k+1][l]==pd7)||(m[k+1][l]==kd)||(m[k+1][l]==qd)||(m[k+1][l]==bd)||(m[k+1][l]==bd1)||(m[k+1][l]==nd)||(m[k+1][l]==nd1)||(m[k+1][l]==rd)||(m[k+1][l]==rd1)))
    {
        document.getElementById((k+1)*10+l).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k+1)*10+l).setAttribute("onclick","swap("+k+","+l+","+(k+1)+","+(l)+");");
        if(!((m[k+1][l])==vid||(m[k+1][l])==null))
        {
            document.getElementById((k+1)*10+l).style.backgroundColor="#f00";
        }
    }
    if((!findlight(k+1,l+1)) && (k<7 && l<7) && ((m[k+1][l+1])==vid||(m[k+1][l+1])==null||(m[k+1][l+1]==pd)||(m[k+1][l+1]==pd1)||(m[k+1][l+1]==pd2)||(m[k+1][l+1]==pd3)||(m[k+1][l+1]==pd4)||(m[k+1][l+1]==pd5)||(m[k+1][l+1]==pd6)||(m[k+1][l+1]==pd7)||(m[k+1][l+1]==kd)||(m[k+1][l+1]==qd)||(m[k+1][l+1]==bd)||(m[k+1][l+1]==bd1)||(m[k+1][l+1]==nd)||(m[k+1][l+1]==nd1)||(m[k+1][l+1]==rd)||(m[k+1][l+1]==rd1)))
    {
        document.getElementById((k+1)*10+l+1).style.backgroundColor="rgb(243, 255, 116)";
        document.getElementById((k+1)*10+l+1).setAttribute("onclick","swap("+k+","+l+","+(k+1)+","+(l+1)+");");
        if(!((m[k+1][l+1])==vid||(m[k+1][l+1])==null))
        {
            document.getElementById((k+1)*10+l+1).style.backgroundColor="#f00";
        }
    }

    if( !findlight(7,2) && !kinglightmove && !rocklightmove && (m[7][1]==vid||m[7][1]==null)&&(m[7][2]==vid||m[7][2]==null)&&(m[7][3]==vid||m[7][3]==null))
    {
        document.getElementById("72").style.backgroundColor="rgb(181, 133, 209)";
        document.getElementById("72").setAttribute("onclick","swap(7,4,7,2);swap(7,0,7,3);rot();");
    }
    if( !findlight(7,6) && !kinglightmove && !rocklightmove1 && (m[7][6]==vid||m[7][6]==null)&&(m[7][5]==vid||m[7][5]==null))
    {
        document.getElementById("76").style.backgroundColor="rgb(181, 133, 209)";
        document.getElementById("76").setAttribute("onclick","swap(7,4,7,6);swap(7,7,7,5);rot();");
    }
}
function findlight(k,l)
{

    for(var i=0;i<tl.length;i+=2)
    {
        if(tl[i]==k&&tl[i+1]==l)
        return true;
    }

}

function finddark(i,j)
{
    return false
}


function rot()
{
    if(n%2==0)
    {
        for(var i=0;i<8;i++)
        {
            for(var j=0;j<8;j++)
            {
                document.getElementById(i*10+j).style.rotate='180deg'
            }
        }
        document.getElementById('table').style.rotate='180deg'
    }
    else
    {
        for(var i=0;i<8;i++)
        {
            for(var j=0;j<8;j++)
            {
                document.getElementById(i*10+j).style.rotate='0deg'
            }
        }
        document.getElementById('table').style.rotate='0deg'
    }
    n++;
    checkmatdark();
}

function checkmatdark()
{
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(m[i][j]==kd && finddark(i,j))
            {
                window. alert('check')
            }
        }
    }
}


