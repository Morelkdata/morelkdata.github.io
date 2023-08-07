<?php        
//si le bouton envoyer a été cliqué  
if (isset($_POST["message"])){   
//on recupère le nom  
$nom = $_POST["name"];   
//on recupère l'adresse email  
$email = $_POST["email"];      

//on recupère le message  
$message = $_POST["message"];  

$to = "morelkouadio@hotmail.com";      
$headers = "From:" . $nom . " " . $email;    
//on envoie le message avec la fonction mail  
if (mail($to,$message,$headers))   
//si le message a été envoyé, on le confirme  
{   
echo "BIEN ENVOYE";    
}   
//sinon on n'affiche un message d'erreur  
else   
{   
echo "Une erreur s'est produite";   
}   
}   
?>      