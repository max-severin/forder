<?php

/*
 * @author Max Severin <makc.severin@gmail.com>
 */
return array(
    'status' => array(
        'title'        => _wp('Status'),
        'value'        => 'off',
        'control_type' => waHtmlControl::SELECT,
        'options'      => array(
            'off' => _wp('Off'),
            'on'  => _wp('On'),
        ),
    ),

    'comment_status' => array(
        'title'        => _wp('Comment'),
        'description'  => _wp('The opportunity to leave a comment.'),
        'value'        => 'off',
        'control_type' => waHtmlControl::SELECT,
        'options'      => array(
            'off' => _wp('Off'),
            'on'  => _wp('On'),
        ),
    ),

    'background_product_image' => array(
        'title'        => _wp('Product image on form background'),
        'value'        => 'off',
        'control_type' => waHtmlControl::SELECT,
        'options'      => array(
            'off' => _wp('Off'),
            'on'  => _wp('On'),
        ),
    ),

    'phone_masked_input' => array(
        'title'        => _wp('Masked input for phone'),
        'description'  => _wp('If fill this setting will added the mask for the field with the phone number.<br />Tip about masks characters:<br /><b>a</b> - All alphabetic values (A-Z, a-z)<br /><b>9</b> - All numeric values (0-9)<br /><b>*</b> - Any alphanumeric values (A-Z, a-z, 0-9).<br />Leave the field empty, if you do not need mask input.'),
        'placeholder'  => '+7 (999) 999-99-99',
        'value'        => '',
        'control_type' => waHtmlControl::INPUT,
    ),    

    'product_thumbnail_size' => array(
        'title'        => _wp('Thumbnail size of product image'),
        'placeholder'  => '48x48',
        'value'        => '48x48',
        'control_type' => waHtmlControl::INPUT,
    ),

    'text_header_title' => array(
        'title'        => _wp('Header text'),
        'placeholder'  => _wp('Fast order'),
        'value'        => _wp('Fast order'),
        'control_type' => waHtmlControl::INPUT,
    ),
    'text_name_placeholder' => array(
        'title'        => _wp('«Name» field placeholder'),
        'placeholder'  => _wp('Your Name'),
        'value'        => _wp('Your Name'),
        'control_type' => waHtmlControl::INPUT,
    ),
    'text_phone_placeholder' => array(
        'title'        => _wp('«Phone» field placeholder'),
        'placeholder'  => _wp('Your Phone'),
        'value'        => _wp('Your Phone'),
        'control_type' => waHtmlControl::INPUT,
    ),
    'text_email_placeholder' => array(
        'title'        => _wp('«Email» field placeholder'),
        'placeholder'  => _wp('Your Email'),
        'value'        => _wp('Your Email'),
        'control_type' => waHtmlControl::INPUT,
    ),
    'text_comment_placeholder' => array(
        'title'        => _wp('«Comment» field placeholder'),
        'placeholder'  => _wp('Your comment'),
        'value'        => _wp('Your comment'),
        'control_type' => waHtmlControl::INPUT,
    ),
    'text_submit_button' => array(
        'title'        => _wp('«Buy» button text'),
        'placeholder'  => _wp('Buy'),
        'value'        => _wp('Buy'),
        'control_type' => waHtmlControl::INPUT,
    ),

    'style_form_width' => array(
        'title'        => _wp('Form width (px)'),
        'description'  => _wp('Value range 320-600'),
        'placeholder'  => '400',
        'value'        => '400',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingNumberControl',
        'options'      => array(
            'min'  => '320',
            'max'  => '600',
            'step' => '1',
        ),
    ),
    'style_form_height' => array(
        'title'        => _wp('Form height (px)'),
        'description'  => _wp('Value range 360-600'),
        'placeholder'  => '340',
        'value'        => '340',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingNumberControl',
        'options'      => array(
            'min'  => '360',
            'max'  => '600',
            'step' => '1',
        ),
    ),
    'style_form_background' => array(
        'title'        => _wp('Form background color (HEX)'),
        'class'        => 's-color',
        'placeholder'  => 'ffffff',
        'value'        => 'ffffff',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'style_header_background' => array(
        'title'        => _wp('Header background color (HEX)'),
        'class'        => 's-color',
        'placeholder'  => '21a6de',
        'value'        => '21a6de',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'style_header_text_color' => array(
        'title'        => _wp('Header text color (HEX)'),
        'class'        => 's-color',
        'placeholder'  => 'ffffff',
        'value'        => 'ffffff',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'style_submit_width' => array(
        'title'        => _wp('«Buy» button width (px)'),
        'description'  => _wp('Value range 100-600'),
        'placeholder'  => '300',
        'value'        => '300',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingNumberControl',
        'options'      => array(
            'min'  => '100',
            'max'  => '600',
            'step' => '1',
        ),
    ),
    'style_submit_height' => array(
        'title'        => _wp('«Buy» button height (px)'),
        'description'  => _wp('Value range 24-160'),
        'placeholder'  => '34',
        'value'        => '34',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingNumberControl',
        'options'      => array(
            'min'  => '24',
            'max'  => '160',
            'step' => '1',
        ),
    ),
    'style_submit_background' => array(
        'title'        => _wp('«Buy» button background color (HEX)'),
        'class'        => 's-color',
        'placeholder'  => '21a6de',
        'value'        => '21a6de',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'style_submit_text_color' => array(
        'title'        => _wp('«Buy» button text color (HEX)'),
        'class'        => 's-color',
        'placeholder'  => 'ffffff',
        'value'        => 'ffffff',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'style_close_ok_background' => array(
        'title'        => _wp('«Close» button background color when sending is success (HEX)'),
        'class'        => 's-color',
        'placeholder'  => '4d9b58',
        'value'        => '4d9b58',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'style_close_error_background' => array(
        'title'        => _wp('«Close» button background color when error occurred (HEX)'),
        'class'        => 's-color',
        'placeholder'  => 'de4d2c',
        'value'        => 'de4d2c',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),

    'text_thanks_message' => array(
        'title'        => _wp('«Thanks message» text (appeal)'),
        'placeholder'  => _wp('Thanks') . ',',
        'value'        => _wp('Thanks') . ',',
        'control_type' => waHtmlControl::INPUT,
    ),
    'text_more_thanks_message' => array(
        'title'        => _wp('«Thanks message» text (text in 2nd line)'),
        'placeholder'  => _wp('your order is placed!'),
        'value'        => _wp('your order is placed!'),
        'control_type' => waHtmlControl::INPUT,
    ),
    'style_thanks_text_color' => array(
        'title'        => _wp('«Thanks message» text color'),
        'class'        => 's-color',
        'placeholder'  => '717171',
        'value'        => '717171',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),

    'button_template' => array(
        'title'        => _wp('«Fast order» button template'),
        'description'  => '<a id="button-template-get-origin" href="#">'. _wp('Template source code') .'</a>
<p id="button-template-warning"><b>'. _wp('Warning') .'</b>: '. _wp('the link must have attributes') .'<br /><b>href="{$wa->getUrl(\'/frontend/forder/\')}?id={$product_id}"</b><br /><b>class="forder-button"</b></p>
<br /><br />
<p id="button-template-origin">
&#060;button href="{$wa->getUrl(\'/frontend/forder/\')}?id={$product_id}" id="forder-button"&#062;'. _wp('Fast Order') .'&#060;/button&#062;
</p>',
        'value'        => '<button href="{$wa->getUrl(\'/frontend/forder/\')}?id={$product_id}" id="forder-button">'. _wp('Fast Order') .'</button>',
        'control_type' => waHtmlControl::TEXTAREA,
    ),

    'button_style' => array(
        'title'        => _wp('«Fast order» button style'),
        'description'  => '<a id="button-style-get-origin" href="#">'. _wp('Template source code') .'</a><br /><br />
<p id="button-style-origin">
&#060;style&#062;
  #forder-button {
    border: 0 none;
    border-radius: 2px;
    cursor: pointer;
    display: block;
    font-size: 1.1em;
    font-weight: normal;
    margin: 15px 0;
    padding: 10px 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }
  #forder-button:hover {
    opacity: 1;
  }
&#060;/style&#062;
</p>',
        'value'        => '<style>
#forder-button {
    border: 0 none;
    border-radius: 2px;
    cursor: pointer;
    display: block;
    font-size: 1.1em;
    font-weight: normal;
    margin: 15px 0;
    padding: 10px 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: 100%;
}
#forder-button:hover {
    opacity: 1;
}
</style>',
        'control_type' => waHtmlControl::TEXTAREA,
    ),

    'button_color' => array(
        'title'        => _wp('«Fast Order» button text color'),
        'class'        => 's-color',
        'value'        => 'ffffff',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'button_background_color' => array(
        'title'        => _wp('«Fast Order» button background color'),
        'class'        => 's-color',
        'value'        => '21a6de',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'button_color_hover' => array(
        'title'        => _wp('«Fast Order» button text color on mouse hover'),
        'class'        => 's-color',
        'value'        => 'dddddd',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),
    'button_background_color_hover' => array(
        'title'        => _wp('«Fast Order» button background color on mouse hover'),
        'class'        => 's-color',
        'value'        => '1196ce',
        'control_type' => waHtmlControl::CUSTOM.' '.'shopForderPlugin::settingColorControl',
    ),

    'final_js_code' => array(
        'title'        => _wp('Additional JavaScript code after ordering'),
        'value'        => 'alert(777);',
        'control_type' => waHtmlControl::TEXTAREA,
    ),
);