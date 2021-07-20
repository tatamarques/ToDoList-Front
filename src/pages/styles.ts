import styled from 'styled-components';

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
    width: 120px;
    height: 25px;
    padding: 8px;
    display: inline-flex;
    justify-content: space-between;
    margin-left: 5px;
    border: 0;
    border-radius: 10px;
    flex: 1;
    background: #f1f1f1;
    color: #777777;
    text-decoration: none;

    &::placeholder {
      color: #666360;
    }
  }

  button{
    font-size: 14px;
    color: #fff;
    margin-left: 5px;
    height: 56px;
    width: 80px;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    background: #337ab7;

  &:hover{
    background: #2e6da4;
    transition: 0.2ms;
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
   font-size: 16px;
   margin-left : 5px;
   font-family: 'Times New Roman', Times, serif;
   
   
  }
  
`;



export const ListTodo = styled.div`  
  display: flex;
  align-content: center;
  justify-content: center;
  justify-items: center;
  
  span{
   font-size: 16px;
   margin-left : 2px;
   font-family: 'Roboto-slab';
   
  }  

  button{

    height: 38px;
    width: 50px;
    background: #ff9999;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;

    
    
  }

`;






