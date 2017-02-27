$(document).ready(function(){

window.RegExp_Name=/^[a-zA-Z]{3,16}$/;
window.RegExp_Email=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
window.RegExp_Phone=/^[+]380\([\d]{1,4}\)[0-9]+$/;



//OnChange-----------
$( "#name" ).on('input', function() {
myValidate(this.id,RegExp_Name,'   only letters,  from 3 up  to  16  chars');
});

$( "#email" ).on('input', function() {   //$( "#email" ).blur(function() {
myValidate(this.id,RegExp_Email,'  wrong e-mail  format');
});

$( "#phone" ).on('input', function() {
myValidate(this.id,RegExp_Phone, '  must be in format +380(****)****** ');  ///^\+380\([0-9]{0-4}*\)[0-9]{1,20}$/
});
//End  OnChange-------





//Button  click----------
    $("#btnSubmit").click(function(){

          
        if(ValidateAll()===false)  //  if  on button Click all  fields  are NOT validate
          {alert('Fill in all  the  fields')}
        else{SendAjaxRequest();}
    });
//END Button  click----------


}); //  END  READY




//Validate  inputs  on change
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
function myValidate(id,regExp,message){
if ($("#" +id).val()!=='')
 {
    //alert(id);
    var idm= $("#" +id).val();   //alert('val is-> '+idm);  

    //if  REgEXp  match
    if(idm.match(regExp))
    {
                     $("#" +id).prevAll(".sp:first").html('Correct');// erase  error  message
                     $(':input[type="button"]').prop('disabled', false); //enable  button
                     $('#btnSubmit').val('Submit');
                     
     }
    //if RegExp not  match
    else
    {  
           $("#" +id+"Err").html(message); //$("#" +id).prevAll(".sp:first").html(message); 
           $(':input[type="button"]').prop('disabled', true);
           $('#btnSubmit').val('disabled');
     }

 }//  end if ($("#" +id).val()!==''){
 else
 { 
     //if  empty  set  gain no  error
     $("#" +id).prevAll(".sp:first").html('');
     $('#btnSubmit').val('Submit');
     
 } 
}
  
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//







// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

function ValidateAll(){
 alert("The b was clicked.");
 ResetAllInputs();
    var status  = [];

  if( !$('#name').val().match(RegExp_Name) )
  {
     $('#nameErr').html('must contain letters  only ,  from 3 up  to  16  chars');
     status.push('name');
  }

  if( !$('#email').val().match(RegExp_Email) )
  {
     $('#emailErr').html('must contain valid  e-mail  address');
     status.push('email');
  }

  if( !$('#phone').val().match(RegExp_Phone) )
  {
     $('#phoneErr').html('must contain valid  phone  number  i.e +380(****)****** ');
     status.push('phone');
  }
     alert(status.length+ " inputs  contain mistakes");
  if (status.length > 0){return false;}

}
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//



// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
function ResetAllInputs(){
 $('#nameErr').html('');
 $('#emailErr').html('');
 $('#phoneErr').html('');
}
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

function SendAjaxRequest(){
  

   var name=$('#name').val();
   var email=$('#email').val();
   var phone=$('#phone').val();
   var description=$('#description').val();

                        // send  data  to  PHP handler  ************ 
                                 $.ajax({
                                 url: '../ajax/handler.php',
                                 type: 'POST',
                                 data: { namePH:name, emailPH:email,phonePH:phone,descriptionPH:description},
                                 success: function(data) {
                                 // do something;
                                 //alert('done SQL');$('#vkTest').html(data)
                                 // $('#result').html(data);
                                  $("#ajaxResponse").html(data).show().show(2500);
                                  }
                                          });
                                                   // }
                                               //  END AJAXed  part 

}
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************

