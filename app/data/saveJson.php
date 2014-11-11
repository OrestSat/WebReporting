<?php
    $value=$_REQUEST["json"];
    $myfile = fopen("\app\data\DataBase.json", "w") or die("Unable to open file!");
    $somecontent = json_encode ($value);
    fwrite($myfile, $somecontent);
?>