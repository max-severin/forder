<?php

/*
 * Class shopForderPluginSettingsAction
 * @author Max Severin <makc.severin@gmail.com>
 */
class shopForderPluginSettingsAction extends waViewAction {

    public function execute() {
        $plugin = wa('shop')->getPlugin('forder');
        $namespace = 'shop_forder';

        $params = array();
        $params['id'] = 'forder';
        $params['namespace'] = $namespace;
        $params['title_wrapper'] = '%s';
        $params['description_wrapper'] = '<br><span class="hint">%s</span>';
        $params['control_wrapper'] = '<div class="name">%s</div><div class="value">%s %s</div>';

        $settings = $plugin->getSettings();
        $settings_controls = $plugin->getControls($params);
        
        $this->view->assign('forder_settings', $settings);
        $this->view->assign('settings_controls', $settings_controls);
        $this->view->assign('forder_url', wa()->getRouteUrl('shop/frontend/forder/'));
    }

}