/**
 * forder.backend.settings.js
 * Module forderBackendSettings
 */

/*global $, forderBackendSettings */

var forderBackendSettings = (function () { "use strict";
    //---------------- BEGIN MODULE SCOPE VARIABLES ---------------
    var
        farbtastic_url = "{$wa_url}wa-content/js/farbtastic/farbtastic.js?{$wa->version(true)}",
        htmlTagsEncode, htmlTagsDecode,
        addForderForm, checkCommentStatus, initColorPicker, setColorPickerElement, setColorPicker, onFormSubmit, changeColorPickerInputValue,
        textBlockHtmlChange, textPlaceholderChange, textInputValueChange, styleChange, changeHandlers, onStatusChange, onCommentStatusChange,
        initModule;
    //----------------- END MODULE SCOPE VARIABLES ----------------

    //--------------------- BEGIN DOM METHODS ---------------------
    htmlTagsEncode = function (val) {
        return $("<div/>").text(val).html()
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    htmlTagsDecode = function (val) {
        return $("<div/>").html(val).text();
    };

    addForderForm = function ($content, statusChanged) {
        statusChanged = (typeof statusChanged !== 'undefined') ? statusChanged : false;
        
        var forderStatus = "{if isset($forder_settings.status)}{$forder_settings.status}{/if}";
        var styleFormBackground = '#' + $('#forder_shop_forder_style_form_background').val();
        var styleFormHeight = $('#forder_shop_forder_style_form_height').val() + 'px';
        var styleFormWidth = $('#forder_shop_forder_style_form_width').val() + 'px';
        var styleHeaderBackground = 'background: #' + $('#forder_shop_forder_style_header_background').val() + ';';
        var styleHeaderTextColor = 'color: #' + $('#forder_shop_forder_style_header_text_color').val() + ';';
        var textHeaderTitle = htmlTagsEncode( $('#forder_shop_forder_text_header_title').val() );
        var textNamePlaceholder = htmlTagsEncode( $('#forder_shop_forder_text_name_placeholder').val() );
        var textPhonePlaceholder = htmlTagsEncode( $('#forder_shop_forder_text_phone_placeholder').val() );
        var textEmailPlaceholder = htmlTagsEncode( $('#forder_shop_forder_text_email_placeholder').val() );
        var textCommentPlaceholder = htmlTagsEncode( $('#forder_shop_forder_text_comment_placeholder').val() );
        var textSubmitButton = htmlTagsEncode( $('#forder_shop_forder_text_submit_button').val() );
        var styleSubmitBackground = 'background: #' + $('#forder_shop_forder_style_submit_background').val() + ';';
        var styleSubmitTextColor = 'color: #' + $('#forder_shop_forder_style_submit_text_color').val() + ';';
        var styleSubmitHeight = 'height: ' + $('#forder_shop_forder_style_submit_height').val() + 'px;';
        var styleSubmitWidth = 'width: ' + $('#forder_shop_forder_style_submit_width').val() + 'px;';
        
        var form = $('<form />');

        var productName = '{_wp("Test product name")}';
        var productImage = '{$wa_static_url}/wa-apps/shop/plugins/forder/img/forder.48x48.png';


        var productImageBackground = 'transparent url(' + productImage + ') no-repeat scroll center center / 100% auto';

        var productInfo = '<div class="f-order-product-left"><div class="f-order-product-img" style="background: ' + productImageBackground + ';" title="' + productName + '"></div></div>';
        productInfo    += '<div class="f-order-product-right">';
        productInfo    += '<h3 class="f-order-product-name">' + productName + '</h3>';
        productInfo    += '<input type="button" class="f-order-product-qty-minus" value="-" />';
        productInfo    += '<input type="text" class="f-order-product-qty" placeholder="1" value="1" />';
        productInfo    += '<input type="button" class="f-order-product-qty-plus" value="+" />';
        productInfo    += '</div>';

        if (forderStatus === 'on' || statusChanged === true) {
            form.addClass('f-order-form').css({
                'background': styleFormBackground,
                'height': styleFormHeight,
                'width': styleFormWidth
            }).prepend(
                '<div class="f-order-header" style="' + styleHeaderBackground + styleHeaderTextColor + '">' + textHeaderTitle + '<span id="f-order-close-x">x</span></div>' +
                '<div class="f-order-product">' + productInfo + '</div>' +
                '<div class="f-order-input"><input type="text" name="name" placeholder="' + textNamePlaceholder + '" value="" /></div>' +
                '<div class="f-order-input"><input type="text" name="phone" placeholder="' + textPhonePlaceholder + '" value="" /></div>' +
                '<div class="f-order-input"><input type="text" name="email" placeholder="' + textEmailPlaceholder + '" value="" /></div>' +
                '<div class="f-order-input"><textarea name="comment" placeholder="' + textCommentPlaceholder + '"></textarea></div>' +
                '<div class="f-order-input"><input id="f-order-submit" type="submit" value="' + textSubmitButton + '" disabled="disabled" style="' + styleSubmitBackground + styleSubmitTextColor + styleSubmitHeight + styleSubmitWidth + '" /></div>'
            );

            $content.before(form);

            $('.f-order-form').fadeIn('500');

            checkCommentStatus();
        }
    };

    checkCommentStatus = function () {
        var forderCommentStatus = "{if isset($forder_settings.comment_status)}{$forder_settings.comment_status}{/if}";

        if (forderCommentStatus !== 'on') {
            $('textarea[name="comment"]').parent('.f-order-input').hide();
        }
    };

    initColorPicker = function (elements, init) {
    	if ($.fn.farbtastic) {
            init(elements);
        } else {
            $.ajax({
                dataType: "script",
                url: farbtastic_url,
                cache: true
            }).done(function () {
                init(elements);
            });
        }
    };

    setColorPickerElement = function (el) {
        var color_wrapper = el.closest('.value');
        var color_picker = color_wrapper.find('.s-colorpicker');
        var color_replacer = color_wrapper.find('.s-color-replacer');
        var color_input = color_wrapper.find('.s-color');

        var farbtastic = $.farbtastic(color_picker, function(color) {
            color_replacer.find('i').css('background', color);
            color_input.val(color.substr(1));
            color_input.trigger('change');
        });

        farbtastic.setColor('#'+color_input.val());

        color_replacer.click(function () {
            color_picker.slideToggle(200);
            return false;
        });
    };

    setColorPicker = function (color_elements) {
        for (var i = 0; i < color_elements.length; i++) {

            setColorPickerElement( $(color_elements[i]) );

        }
    };
    //--------------------- END DOM METHODS -----------------------

    //------------------- BEGIN EVENT HANDLERS --------------------
    onFormSubmit = function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        var f = $(this);

        $.post( f.attr('action'), f.serialize(), function (response) {
            if ( response.status == 'ok' ) {
                $.plugins.message('success', response.data.message);

                f.find('.submit .button').removeClass('red').addClass('green');
                $("#plugins-settings-form-status").hide()
                $("#plugins-settings-form-status span").html(response.data.message);
                $("#plugins-settings-form-status").fadeIn('slow', function () {
                    $(this).fadeOut(1000);
                });
            } else {
                $.plugins.message('error', response.errors || []);

                f.find('.submit .button').removeClass('green').addClass('red');
                $("#plugins-settings-form-status").hide();
                $("#plugins-settings-form-status span").html(response.errors.join(', '));
                $("#plugins-settings-form-status").fadeIn('slow');
            }
        }, "json");
    };

    textBlockHtmlChange = function (el_changed, el_changing) {
        el_changed.on('change', function (){
            $(document).find(el_changing).html( htmlTagsEncode(el_changed.val()) );
        });
    };

    textPlaceholderChange = function (el_changed, el_changing) {
        el_changed.on('change', function (){
            $(document).find(el_changing).attr('placeholder', el_changed.val());
        });
    };

    textInputValueChange = function (el_changed, el_changing) {
        el_changed.on('change', function (){
            $(document).find(el_changing).val(el_changed.val());
        });
    };

    styleChange = function (el_changed, el_changing, css_style_name, stype_postfix, stype_prefix) {
        el_changed.on('change', function (){
            $(document).find(el_changing).css(css_style_name, stype_prefix + el_changed.val() + stype_postfix);
        });
    };

    changeHandlers = function () {
        textBlockHtmlChange( $('#forder_shop_forder_text_header_title'), '.f-order-header' );
        textPlaceholderChange( $('#forder_shop_forder_text_name_placeholder'), '.f-order-input input[name="name"]' );
        textPlaceholderChange( $('#forder_shop_forder_text_phone_placeholder'), '.f-order-input input[name="phone"]' );
        textPlaceholderChange( $('#forder_shop_forder_text_email_placeholder'), '.f-order-input input[name="email"]' );
        textPlaceholderChange( $('#forder_shop_forder_text_comment_placeholder'), '.f-order-input textarea[name="comment"]' );
        textInputValueChange( $('#forder_shop_forder_text_submit_button'), '#f-order-submit' );

        styleChange($('#forder_shop_forder_style_form_width'), '.f-order-form', 'width', 'px', '');
        styleChange($('#forder_shop_forder_style_form_height'), '.f-order-form', 'height', 'px', '');

        styleChange($('#forder_shop_forder_style_form_background'), '.f-order-form', 'background', '', '#');
        styleChange($('#forder_shop_forder_style_header_background'), '.f-order-header', 'background', '', '#');
        styleChange($('#forder_shop_forder_style_header_text_color'), '.f-order-header', 'color', '', '#');

        styleChange($('#forder_shop_forder_style_submit_width'), '#f-order-submit', 'width', 'px', '');
        styleChange($('#forder_shop_forder_style_submit_height'), '#f-order-submit', 'height', 'px', '');

        styleChange($('#forder_shop_forder_style_submit_background'), '#f-order-submit', 'background', '', '#');
        styleChange($('#forder_shop_forder_style_submit_text_color'), '#f-order-submit', 'color', '', '#');
    };

    onStatusChange = function () {
        var t = $(this);

        if (t.val() === 'on') {
            addForderForm( $('#wa-plugins-content .form'), true );
        } else {
            $('.f-order-form').remove();
        }
    };

    onCommentStatusChange = function () {
        var t = $(this);

        if (t.val() === 'on') {
            $('textarea[name="comment"]').parent('.f-order-input').show();
        } else {
            $('textarea[name="comment"]').parent('.f-order-input').hide();
        }
    };

    changeColorPickerInputValue = function (input, $color) {
        var color = 0xFFFFFF & parseInt(('' + input.value + 'FFFFFF').replace(/[^0-9A-F]+/gi, '').substr(0, 6), 16);
        $color.css('background', (0xF000000 | color).toString(16).toUpperCase().replace(/^F/, '#'));
    };
    //------------------- END EVENT HANDLERS ----------------------

    //------------------- BEGIN PUBLIC METHODS --------------------
    initModule = function () {

        $('#plugins-settings-form').on('submit', onFormSubmit);

        $('#forder_shop_forder_status').on('change', onStatusChange);

        $('#forder_shop_forder_comment_status').on('change', onCommentStatusChange);

        addForderForm( $('#wa-plugins-content .form') );

        var color_elements = [
            '#forder_shop_forder_style_form_background',
            '#forder_shop_forder_style_header_background',
            '#forder_shop_forder_style_header_text_color',
            '#forder_shop_forder_style_submit_background',
            '#forder_shop_forder_style_submit_text_color',
            '#forder_shop_forder_style_close_ok_background',
            '#forder_shop_forder_style_close_error_background',
            '#forder_shop_forder_style_thanks_text_color',
            '#forder_shop_forder_button_color',
            '#forder_shop_forder_button_background_color',
            '#forder_shop_forder_button_color_hover',
            '#forder_shop_forder_button_background_color_hover'
        ];
        initColorPicker( color_elements, setColorPicker );

        var timer = {};
        $('.s-color').unbind('keydown').bind('keydown', function () {
            if (timer[this.name]) {
                clearTimeout(timer[this.name]);
            }
            var input = this;
            timer[this.name] = setTimeout(function () {
                var $color = $(input).parent().find('.icon16.color');
                changeColorPickerInputValue(input, $color);
            }, 300);
        });

        var cm1 = CodeMirror.fromTextArea(document.getElementById('forder_shop_forder_button_template'), {
            mode: "text/html",
            tabMode: "indent",
            height: "dynamic",
            lineWrapping: true
        });   

        var cm2 = CodeMirror.fromTextArea(document.getElementById('forder_shop_forder_button_style'), {
            mode: "text/html",
            tabMode: "indent",
            height: "dynamic",
            lineWrapping: true
        });   

        var cm3 = CodeMirror.fromTextArea(document.getElementById('forder_shop_forder_final_js_code'), {
            mode: "text/javascript",
            tabMode: "indent",
            height: "dynamic",
            lineWrapping: true
        });  

        var buttonTemplate = document.getElementById("button-template-origin");
        var cm3 = CodeMirror(function(node){
            buttonTemplate.parentNode.replaceChild(node, buttonTemplate);
        }, {
            value: buttonTemplate.textContent || buttonTemplate.innerText,
            mode: "text/html",
            readOnly: true
        });   

        var buttonStyle = document.getElementById("button-style-origin");
        var cm4 = CodeMirror(function(node){
            buttonStyle.parentNode.replaceChild(node, buttonStyle);
        }, {
            value: buttonStyle.textContent || buttonStyle.innerText,
            mode: "text/html",
            readOnly: true
        }); 

        $('#button-template-get-origin').closest('.hint').find('.CodeMirror').hide();
        $('#button-style-get-origin').closest('.hint').find('.CodeMirror').hide();

        $('body').on('click', '#button-template-get-origin', function () {
            $(this).closest('.hint').find('.CodeMirror').toggle();
            return false;
        });

        $('body').on('click', '#button-style-get-origin', function () {
            $(this).closest('.hint').find('.CodeMirror').toggle();
            return false;
        });

        $('#forder_shop_forder_button_template').closest('.field').find('.CodeMirror').css({ 'margin-top': '40px', 'height': '95px' });
        $('#forder_shop_forder_button_template').closest('.field').find('.CodeMirror-scroll').css('height', '65px');

        changeHandlers();

        checkCommentStatus();

        $('#forder_shop_forder_product_thumbnail_size').mask('99x99');

        $('.plugin-links a#plugin-review').css({
            'display': 'block',
            'top': '-2000px'
        }).animate({
            'top': '0'
        }, 1500).animate({
            'top': '-25px'
        }, 100).animate({
            'top': '-35px'
        }, 100).animate({
            'top': '0'
        }, 250);

        $('.plugin-links a#more-plugins').css({
            'display': 'block',
            'top': '-1000px'
        }).animate({
            'top': '0'
        }, 1000).animate({
            'top': '-25px'
        }, 100).animate({
            'top': '-35px'
        }, 100).animate({
            'top': '0'
        }, 250);

        $('.plugin-links a#plugin-support').css({
            'display': 'block',
            'top': '-500px'
        }).animate({
            'top': '0'
        }, 500).animate({
            'top': '-25px'
        }, 100).animate({
            'top': '-35px'
        }, 100).animate({
            'top': '0'
        }, 250);

    };

    return {
        initModule: initModule
    };
    //------------------- END PUBLIC METHODS ----------------------
}());