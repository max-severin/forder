<?php

/*
 * Class shopForderPluginFrontendForderController
 * @author Max Severin <makc.severin@gmail.com>
 */
class shopForderPluginFrontendForderController extends waJsonController {

    public function execute() {
        $app_settings_model = new waAppSettingsModel();
        $settings = $app_settings_model->get(array('shop', 'forder'));

        $product_id = htmlspecialchars( waRequest::get('id', '', 'int') );

        if ( isset($settings['status']) && $settings['status'] === 'on' && !empty($product_id) ) {  
            
            $product = new shopProduct($product_id);

            if ($product) {

                $this->response = array(
                    'status' => true,
                    'product_image' => shopImage::getUrl(array("product_id" => $product['id'], "id" => $product['image_id'], "ext" => $product['ext']), $settings['product_thumbnail_size']),
                    'product_full_image' => shopImage::getUrl(array("product_id" => $product['id'], "id" => $product['image_id'], "ext" => $product['ext'])),
                    'product_name' => $product['name'],
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