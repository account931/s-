<?php
 Class MAil
{


// **************************************************************************************
// **************************************************************************************
//                                                                                     **  
  public function sendMail()
  { 
    if($_POST['DBsave_flag']=='DBsaved_flag_OK')
    {

     $to = "account931@ukr.net,";
     $subject = "feedback";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>User's  name:  ".$_POST['namePH']. "</p>
<p>User's  e-mail:".$_POST['emailPH']."</p>
<p>User's  phone: ".$_POST['phonePH']."</p>
<p>User's  description: ".$_POST['descriptionPH']."</p>

</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";
$headers .= 'Cc: account931@ukr.net' . "\r\n";

//mail($to,$subject,$message,$headers);




    echo"</br> E-mail  has  been  sent";
    }



  } //END function 
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
















}
?>
