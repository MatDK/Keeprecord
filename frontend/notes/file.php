<?php
$username = "admin";
$msg = "";
$filenames = "";
if($handle = opendir('.')){
 while (false !== ($file = readdir($handle)))
 {
 if (($file != ".")
 && ($file != ".."))
 {
 $msg .= '<li>'.$file.'</li>';
 $filenames = $filenames.'<option>'.$file.'</option>';
 }
 }
 closedir($handle);
}


