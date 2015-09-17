<?php

/*
 * Class shopForderPluginSettingsAction
 * @author Max Severin <makc.severin@gmail.com>
 */
class shopForderPluginSettingsAction extends shopPluginsSettingsAction {

    public function execute() {
    	$_GET['id'] = 'forder';

    	$app_settings_model = new waAppSettingsModel();
        $settings = $app_settings_model->get(array('shop', 'forder'));

        foreach ($settings as $id => $setting) {
            $settings[$id] = addslashes(htmlspecialchars($setting));
        }

        $view = wa()->getView(); 
        $view->assign('forder_settings', $settings);
    	$view->assign('forder_url', wa()->getRouteUrl('shop/frontend/forder/'));

        parent::execute();
    }

}