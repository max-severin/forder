<?php

/*
 * Class shopForderPlugin
 * Fast ordering of product in 1 click
 * @author Max Severin <makc.severin@gmail.com>
 */
class shopForderPlugin extends shopPlugin {
    
    /**
     * Handler for frontend_head event: add forderFrontend module in frontend head section
     * @return string
     */
    public function frontendHeader() {
        $settings = $this->getSettings();

        if ( $settings['status'] === 'on' && $settings['frontend_head_status'] === 'on' ) {

            foreach ($settings as $id => $setting) {
                $settings[$id] = addslashes(htmlspecialchars($setting));
            }

            $view = wa()->getView();
            $view->assign('forder_settings', $settings);
        	$view->assign('forder_url', wa()->getRouteUrl('shop/frontend/forder/'));
            $html = $view->fetch($this->path.'/templates/Frontend.html');

            return $html;

        } else {

            return;

        }
    }

}