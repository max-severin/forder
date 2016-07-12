<?php

/*
 * Class shopForderPluginFrontendForderController
 * @author Max Severin <makc.severin@gmail.com>
 */
class shopForderPluginFrontendForderController extends waJsonController {

    public function execute() {
        $app_settings_model = new waAppSettingsModel();
        $settings = $app_settings_model->get(array('shop', 'forder'));

        $name = htmlspecialchars( waRequest::post('name', '', 'str') );
        $phone = htmlspecialchars( waRequest::post('phone', '', 'str') );
        $comment = htmlspecialchars( waRequest::post('comment', '', 'str') );
        $product_id = htmlspecialchars( waRequest::post('product_id', '', 'str') );

        if ( isset($settings['status']) && $settings['status'] === 'on' && !empty($name) && !empty($phone) && !empty($product_id) ) {  

            if (wa()->getUser()->isAuth()) {
                $contact = wa()->getUser();
            } else {
                $contact = new waContact();
            }          

            if (true) {

                $this->response = array(
                    'status' => true,
                    'name' => $name,
                );

            } else {

                $this->response = array(
                    'status' => false,
                );
                
            }

        } else {

            $this->response = array(
                'status' => false,
            );

        }
    }  
     
}