<?php

/*
 * @author Max Severin <makc.severin@gmail.com>
 */
return array(
    'name' => /*_wp*/('Fast order in 1 click'),
    'img' => 'img/forder.png',
    'vendor' => 1020720,
    'version' => '1.0.0',
    'shop_settings' => true,
    'custom_settings' => true,
    'frontend' => true,
    'handlers' => array(
        'frontend_head' => 'frontendHead',
    ),
);