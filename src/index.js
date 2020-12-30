import $ from 'jquery'
window.jQuery = $;
window.$ = $;

import './common.blocks/main.scss';
import './common.blocks/slider.js';

$(() => {
    $('a').click(() => {return false;});
});