<?php
 Class Validate 
{

    /*public function __construct() // or any other method
    {
        include 'some-functions.php';
        
    }*/

// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
  public function getValues()
  { 
  $message=array(); //array  for  error  messages(if  any) 

  //Reg Exp  for  name, e-mail, phone;
  $RegExp_Name='/^[a-zA-Z]{3,16}$/';
  $RegExp_Email='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/';
  $RegExp_Phone='/^[+]380\([\d]{1,4}\)[0-9]+$/';

  $name=$_POST['namePH'];
  $email=$_POST['emailPH'];
  $phone=$_POST['phonePH'];
  $description=$_POST['descriptionPH'];
                     

  echo "You  printed-> </br>";
  echo $name."</br>";
  echo $email."</br>";
  echo $phone."</br>";
  echo $description."</br>";
  

  //checking  name  input
  if (!preg_match($RegExp_Name,$name)) 
  {
      $message[]='Name is not OK';
  }
  //end checking  name  input


  //checking  email input
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
  {
   $message[]='e-mail is not OK';
  }
  //end checking  email input


   //checking  phone input
  if (!preg_match($RegExp_Phone,$phone))
  {
     $message[]='phone  is not OK';
  }
  //end checking  phone input


  //display  error  message (if  any) &  setting  flag  for further  permission;
  if(count($message)>0)
  {
       foreach($message as $result)
       {
       echo $result. '<br>';
       }
  }else
  {
    echo "</br>Fields  have been   validated on server  side";
    $_POST['validate_flag']='vaidate_flag_OK'; //set  the  flag;
  }
  //end display  error  message (if  any)



  } 
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//END function getValues()



}
?>
