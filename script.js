let title = document.querySelector('.title');
let cells = [];
let turn= 'x';
function play(id)
{
  let element = document.getElementById(id);
  if(turn === 'x' && element.innerHTML == '')
  {
    element.innerHTML ='x';
    turn = 'o';
    title.innerHTML ="IT'S O TURN";
  }
 else if(turn === 'o' && element.innerHTML == '')
 {
    element.innerHTML ='o';
    turn = 'x';
    title.innerHTML ="IT'S X TURN";
 }
 win();
}
function finish(num1,num2,num3)
{
 title.innerHTML = `${cells[num1]} won`;
 document.getElementById('square'+num1).style.background = 'red' ;
 document.getElementById('square'+num2).style.background = 'red' ;
 document.getElementById('square'+num3).style.background = 'red' ;

  setInterval(function(){title.innerHTML += '.'},1000);
  setTimeout(function(){location.reload()},3000)
}
function win()
{
 for(let i = 1; i<10;i++)
  {
   cells[i] = document.getElementById('square' + i).innerHTML;
  }
  if(cells[1] == cells[2] && cells[2] == cells[3] && cells[1] != '')
  {
    finish(1,2,3) 
  }
 else if(cells[4] == cells[5] && cells[5] == cells[6] && cells[4] != '')
  {
    finish(4,5,6)
  }
 else if(cells[7] == cells[8] && cells[8] == cells[9] && cells[7] != '')
  {
    finish(7,8,9)
  }
 else if(cells[1] == cells[4] && cells[4] == cells[7] && cells[1] != '')
  {
    finish(1,4,7)
  }
 else if(cells[2] == cells[5] && cells[5] == cells[8] && cells[2] != '')
  {
    finish(2,5,8)
  }
 else if(cells[3] == cells[6] && cells[6] == cells[9] && cells[3] != '')
  {
    finish(3,6,9)
  }
 else if(cells[1] == cells[5] && cells[5] == cells[9] && cells[1] != '')
  {
    finish(1,5,9)
  }
 else if(cells[3] == cells[5] && cells[5] == cells[7] && cells[3] != '')
  {
    finish(3,5,7)
  }
}

