<?php
    $y = 100;
    function f($x){
        $y = 100 + $x;
        return $y;
    }

    f(50);
    echo $y;
?>