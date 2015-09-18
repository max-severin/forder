/**
 * forder.frontend.js
 * Module forderFrontend
 */

/*global $, forderFrontend */

var forderFrontend = (function () { "use strict";
	//---------------- BEGIN MODULE SCOPE VARIABLES ---------------
	var
		onIdinhtmlClick, removeForderForm, onFormSubmit, initModule;
	//----------------- END MODULE SCOPE VARIABLES ----------------

	//--------------------- BEGIN DOM METHODS ---------------------
	removeForderForm = function () {
		$('.f-order-bg, .f-order-form').remove();
		$("body").css({ "overflow": "auto" });
	};
	//--------------------- END DOM METHODS -----------------------

	//------------------- BEGIN EVENT HANDLERS --------------------
	onIdinhtmlClick = function (event) {
		event.preventDefault();

		removeForderForm();

		var bg = $('<div/>');
		var form = $('<form />');
		var formTop = $(document).scrollTop() + $(window).height()/2 - '{$forder_settings.style_form_height}'/2;
		var forderCommentStatus = "{if isset($forder_settings.comment_status)}{$forder_settings.comment_status}{/if}";

		$("body").css({ "overflow": "hidden" });

		bg.addClass('f-order-bg').css('height', ($(document).height())+'px');
		form.addClass('f-order-form').css({
			'background': '#{$forder_settings.style_form_background}',
			'height': '{$forder_settings.style_form_height}px',
			'width': '{$forder_settings.style_form_width}px',
			'top' : formTop+'px'
		}).prepend(
			'<div class="f-order-header" style="background: #{$forder_settings.style_header_background}; color: #{$forder_settings.style_header_text_color};">{$forder_settings.text_header_title}<span id="f-order-close-x">x</span></div>' +
			'<div class="f-order-input"><input type="text" name="name" placeholder="{$forder_settings.text_name_placeholder}" value="" /></div>' +
			'<div class="f-order-input"><input type="text" name="phone" placeholder="{$forder_settings.text_phone_placeholder}" value="" /></div>' +
			'<div class="f-order-input"><input type="text" name="email" placeholder="{$forder_settings.text_email_placeholder}" value="" /></div>' +
            '<div class="f-order-input"><textarea name="comment" placeholder="{$forder_settings.text_comment_placeholder}"></textarea></div>' +
			'<div class="f-order-input"><input id="f-order-submit" type="submit" value="{$forder_settings.text_submit_button}" style="background: #{$forder_settings.style_submit_background}; color: #{$forder_settings.style_submit_text_color}; height: {$forder_settings.style_submit_height}px; width: {$forder_settings.style_submit_width}px" /></div>'
		);

		$('body').prepend(form).prepend(bg);

		$('.f-order-form input[name="name"]').focus();

		{if isset($forder_settings.phone_masked_input) && strlen($forder_settings.phone_masked_input) > 0}
		$('.f-order-form input[name="phone"]').mask('{$forder_settings.phone_masked_input}');
		{/if}

        if (forderCommentStatus !== 'on') {
            $('textarea[name="comment"]').parent('.f-order-input').hide();
        }
	};

	onFormSubmit = function (event) {
		event.preventDefault();

		var n = $('.f-order-input').find('input[name="name"]').val();
		var p = $('.f-order-input').find('input[name="phone"]').val();
		var e = $('.f-order-input').find('input[name="email"]').val();
		var c = $('.f-order-input').find('textarea[name="comment"]').val();
		var err = $('<div/>');
		var currentUrl = window.location.href;

		$('.f-order-error').remove();
		$('.f-order-input').find('input[name="name"], input[name="phone"]').removeClass('f-order-inp-err');

		if ( n.length > 0 && p.length > 0 ) {
			$.post("{$forder_url}", { "name": n, "phone": p, "email": e, "comment": c, "url": currentUrl }, function (response) {
				if (response.data.status === true) {
					$('.f-order-input').remove();
					$('.f-order-form').append(
						'<p class="f-order-ok" style="color: #{$forder_settings.style_thanks_text_color};">{$forder_settings.text_thanks_message} ' + response.data.name + ',</p>' +
						'<p class="f-order-ok" style="color: #{$forder_settings.style_thanks_text_color};">{$forder_settings.text_more_thanks_message}</p>' +
						'<div class="f-order-input"><input id="f-order-close" type="button" value=\"{_wp("Close")}\" style="background: #{$forder_settings.style_close_ok_background}; height: {$forder_settings.style_submit_height}px; width: {$forder_settings.style_submit_width}px;" /></div>'
					);
				} else {
					$('.f-order-input').remove();
					$('.f-order-form').append(
						'<p class="f-order-ok margins">{_wp("Error occurred when sending message")}</p>' +
						'<div class="f-order-input"><input class="f-order-close-error" id="f-order-close" type="button" value=\"{_wp("Close")}\" style="background: #{$forder_settings.style_close_error_background}; height: {$forder_settings.style_submit_height}px; width: {$forder_settings.style_submit_width}px;" /></div>'
					);
				}
			}, "json");
		} else {
			if ( !(n.length > 0) ) {
				$('.f-order-input').find('input[name="name"]').focus();
			} else if ( !(p.length > 0) ) {
				$('.f-order-input').find('input[name="phone"]').focus();
			}
			if ( !(n.length > 0) ) {
				$('.f-order-input').find('input[name="name"]').addClass('f-order-inp-err');
			}
			if ( !(p.length > 0) ) {
				$('.f-order-input').find('input[name="phone"]').addClass('f-order-inp-err');
			}
			err.addClass('f-order-error').text("{_wp('Complete «Name» and «Phone»')}");
			$('.f-order-form').append( err );
		}
	};
	//------------------- END EVENT HANDLERS ----------------------

	//------------------- BEGIN PUBLIC METHODS --------------------
	initModule = function () {		
		$(document).on('click', '{$forder_settings.id_in_html}', onIdinhtmlClick);

		$(document).on('click', '.f-order-bg, #f-order-close-x, #f-order-close', removeForderForm);

		$(document).keyup(function(event) {
			if (event.keyCode == 27) { // close fast order form when esc key is pressed
				removeForderForm();
			}
		});

		$(document).on('submit', '.f-order-form', onFormSubmit);
	};

	return {
		initModule: initModule
	};
	//------------------- END PUBLIC METHODS ----------------------
}());