import styled from 'styled-components';
import { shade } from "polished";

export const Container = styled.div`
  background-color: #fff;
  
`;


export const Content = styled.div`
  
  max-width: 500px;
  width: 100%;
  min-height: 800px;
  box-shadow: 0 2px 6px #555;
  margin: 50px auto;
  padding: 50px ;

 h1{
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  
 }
  input{
   
    height: 25px;
    padding: 8px;
    display: inline-flex;
    justify-content: space-between;
    margin-left: 5px;
    border: 0;
    border-radius: 10px;
    flex: 1;
    background: #f1f1f1;
    color: #000;
    text-decoration: none;

    &::placeholder {
      color: #666360;
    }

   &[class="title"]{
    width: 120px;
  }

   &[class="description"]{
     width: 250px;
   }

  }

  button{
    font-size: 14px;
    color: #fff;
    margin-left: 5px;
    height: 40px;
    width: 80px;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    background: #337ab7;



  &:hover{
    background: #2e6da4;
    transition: 0.2ms;
  }


  &[class="update"]{
    background: #ff9000;
    width: 50px;
    height: 40px;
    font-size: 12px;
    margin-left: 5px;
    //margin-right: -40px;

  &:hover{
    background: ${shade(0.2, "#ff9000")};    
  }  

  }

  &[class="delete"]{
    background: #9A2D2F;
    width: 50px;
    height: 40px;
    font-size: 12px;
    margin-left: 1px;

  &:hover{
    background: ${shade(0.2, "#9A2D2F")};
    
  }  
  }

  &[class="save"]{
    background: #ff9000;
    width: 50px;
    height: 40px;
    font-size: 12px;
    margin-left: 5px;

  &:hover{
    background: ${shade(0.2, "#ff9000")};    
  }  

   &:disabled{
    background: ${shade(0.4, "#ff9000")}; 
    color: #f1f1f1;
   } 

    

  }

  &[class="cancel"]{
    background: #9A2D2F;
    width: 30px;
    height: 40px;
    font-size: 12px;
    margin-left: 2px;

  &:hover{
    background: ${shade(0.2, "#9A2D2F")};
    
  }  
  }
}

  ul{
    width: 100%;
    position: relative;
    padding: 10px 0;
  
  
  }

  li{
    list-style: none;
    border: 1px solid #ccc;
    margin: 10px 0;
    margin-top: 10px;    
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    
  }
  
  span{
   font-size: 14px;
   font-family: 'Times New Roman', Times, serif;

  &[class="title"]{
    margin-left: 0;
    width: 50px;
  }

  &[class="description"]{
    margin-left: 5;
    margin-right: 5px;
    width: 120px;
  }

  &[class="createdOn"]{
     font-size: 13px;
     font-weight: bold;
     margin-left: 10px;
     margin-right: 1px;
     width: 80px;
          
   }

   &[class="dueDate"]{
     font-size: 13px;
     font-weight: bold;
     margin-left: 1px;
     margin-right: 0px;
     width: 80px;
          
   }
      
  }
 
`;






