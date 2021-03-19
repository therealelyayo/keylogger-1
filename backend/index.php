<?php
    $data = json_decode($_POST['data'], true);

    print_r($data);

    $file = fopen("text.txt","a+");
        
    foreach($data as $key => $val) {
        fwrite($file, $val);
    }
    
    fclose($file);

    echo json_encode($data);
?>