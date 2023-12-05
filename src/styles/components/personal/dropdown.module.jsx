.menuContainer {
    position: relative;
    background:black;
 }
 
 //this is the code when you click on the user it shows the list of the content
 .menu {
    background-color:rgb(241, 236, 241);
    border-radius: 12px;
    position: absolute;
    top: 60px;
    right: 10;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  //this is the list of the elements stack one on the other.
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  //this is the code for the border color of the list elements.
  .menu li {
    border-bottom: 1px solid #dddddd;
  }
  
  //this is for the text witten inside the list
  .menu li a {
    text-decoration: none;
    color: black;
    padding: 15px 20px;
    display: block;
  }

//this is the box in which user box is there
.menuTrigger {
  background:black; 
  border-style: solid;
  box-sizing: content-box;
  width: 6%;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 9px;
  border: 2px solid black;
  border-radius: 18px;
  position: relative;
  bottom: 50px; left:500px;
  font-size: x-large;
  color: white;
  }
  
  .menuTrigger:hover {
    box-shadow: red;
  }
  
  // //this is the code where user is written
  // .menuTrigger p {
  //   font-weight: 90px;
  //   vertical-align: middle;
  //   font-size: 40px;
  //   margin: 0 10px;
  //   background:white;
  // }
  
  // .menu-trigger img {
  //   border-radius: 90px;
  // }
  