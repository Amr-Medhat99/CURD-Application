//array
//var arr=["amr","mohamed","mostafa","ahmed","adel","abdullah"];
//console.log(arr.length);
//console.log(arr.push("ashraf"));
//console.log(arr.pop());
//console.log(arr.unshift("mahmoud"));
//console.log(arr.shift());
//console.log(arr.splice(1,2)); using splice to remove from array
//console.log(arr.splice(1,0,"hussin","ali")); using splice to add in arry 
//console.log(arr.splice(1)); using splice to remove after index 1
//var ra=arr.splice(1,2); can i recieve data in variable and using this data in anythings
//console.log(ra);
//console.log(arr.sort());  using to sort array by asci code
//console.log(arr.reverse()); using to reverse array
//console.log(arr.slice(1,3)); using to take copy from data in array


/*function rev(a) //function to make reverse to array
{
    var x=[];
    x.length=a.length;
    var z=0;
    for(var i=x.length-1;i>=0;i--)
    {
        x[z]=arr[i]
        z++
    }
    console.log(x);
}
rev(arr);
*/

/*  using html in js
var hasala="";
var q=1;
for(var i=0;i<arr.length;i++)
{
    hasala+="<h"+q+">"+arr[i]+"</h1>";
    q++;
}
document.getElementById("div1").innerHTML=hasala*/

//array of object -------------------------->Json
//localStorage.removeItem("l")
(function() // function selfInvoke
{
    document.getElementById("forupdate").style.display="none";
}());
var p=[]
if(localStorage.getItem("l")!=null)
{   
    p=JSON.parse(localStorage.getItem("l"));
    postdata();
}

//assined data
function go()// create product
{
    var pname=document.getElementById("name").value;
    var pcat=document.getElementById("cat").value;
    var pprise=document.getElementById("prise").value;
    var pdes=document.getElementById("des").value;
    var pimage=document.getElementById("imagefile").value;
    //var pimagefile=document.getElementById("imagefile").value;
    
    
    var data_object={name:pname,cat:pcat,des:pdes,prise:pprise,imag:pimage}
    p.push(data_object);
    localStorage.setItem("l",JSON.stringify(p));    
    postdata();
    clearData();
}

//deletedata
function deletedata(Indexd)
{
    p.splice(Indexd,1);
    localStorage.setItem("l",JSON.stringify(p));
    postdata();
}
//updatedata
function updatedata(indexu)
{
    document.getElementById("name").value=p[indexu].name;
    document.getElementById("cat").value=p[indexu].cat;
    document.getElementById("prise").value=p[indexu].prise;
    document.getElementById("des").value=p[indexu].des;
    document.getElementById("imagefile").value=p[indexu].imag;
    document.getElementById("forupdate").style.display="inline-block";
    document.getElementById("foradd").style.display="none";
    document.getElementById("forupdate").addEventListener("click",function(){
        p[indexu].name=document.getElementById("name").value;
        p[indexu].cat=document.getElementById("cat").value;
        p[indexu].prise=document.getElementById("prise").value;
        p[indexu].des=document.getElementById("des").value;
        p[indexu].imag=document.getElementById("imagefile").value;
        localStorage.setItem("l",JSON.stringify(p));
        postdata();
        document.getElementById("forupdate").style.display="none";
        document.getElementById("foradd").style.display="inline-block";
        clearData();
    })
}
function postdata()
{  
    var has="";
    for(var i=0;i<p.length;i++)
    {
        has+=`<div class="col-md-4 my-3">
        <img src="`+p[i].imag+`" class="w-100">
        <h1>`+p[i].name+`<span class="d1 p-1">`+p[i].cat+`</span></h1>
        <p>`+p[i].des+`</p>
        <span class="bg-primary p-2 po text-white">`+p[i].prise+` EGY</span>
        <button class="btn btn-outline-danger p-3" onclick="deletedata(`+i+`)">Delete Product</button>
        <button class="btn btn-outline-warning p-3" onclick="updatedata(`+i+`)">Update Product</button>
        </div>`;
    }
    document.getElementById("data").innerHTML=has;
}
//search
function search(indexs)
{
    var has=``;
    for(var i=0;i<p.length;i++)
    {
        if(p[i].name.toLowerCase().includes(indexs.toLowerCase()))//include use to make real time
        {
            has+=`<div class="col-md-4 my-3">
            <img src="`+p[i].imag+`" class="w-100">
            <h1>`+p[i].name.replace(indexs,`<span style="color:red">`+indexs    +`</span>`)+`<span class="d1 p-1">`+p[i].cat+`</span></h1>
            <p>`+p[i].des+`</p>
            <span class="bg-primary p-2 po text-white">`+p[i].prise+` EGY</span>
            <button class="btn btn-outline-danger p-3" onclick="deletedata(`+i+`)">Delete Product</button>
            <button class="btn btn-outline-warning p-3" onclick="updatedata(`+i+`)">Update Product</button>
            </div>`;
        }
    }   
    document.getElementById("data").innerHTML=has;
}
//clear data
function clearData()
{
    document.getElementById("name").value ="";
    document.getElementById("cat").value ="";
    document.getElementById("prise").value ="";
    document.getElementById("des").value ="";
    document.getElementById("imagefile").value ="";
}
/*var x=prompt("enter true or false");
if(x=="true")// بستخدم الطريق دي لو عايز استخدم شرط ويحصل ايفنت
{
    document.getElementById("b1").addEventListener("click",function(){
        alert("how are you")
    })
}*/