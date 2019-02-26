!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/wp-content/plugins/gecko-grid-layout/dist/",n(n.s=8)}([function(e,t){e.exports=React},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.editor},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blocks},,,function(e,t,n){"use strict";n.r(t);var a=n(5),o=n(0),l=n.n(o),r=n(2),c=n(1),i=n(4),u=n(3),d=["gecko/grid-layout-item"],s={title:Object(r.__)("Grid"),icon:l.a.createElement(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement(c.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),l.a.createElement(c.G,null,l.a.createElement(c.Path,{d:"M4,13 L8,13 L8,10 L4,10 L4,13 Z M4,15 L4,18 L8,18 L8,15 L4,15 Z M10,13 L14,13 L14,10 L10,10 L10,13 Z M10,15 L10,18 L14,18 L14,15 L10,15 Z M20,13 L20,10 L16,10 L16,13 L20,13 Z M20,15 L16,15 L16,18 L20,18 L20,15 Z M4,8 L8,8 L8,5 L4,5 L4,8 Z M10,8 L14,8 L14,5 L10,5 L10,8 Z M20,8 L20,5 L16,5 L16,8 L20,8 Z M4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.0486051 2,17.875 L2,5.125 C2,3.95139491 2.8954305,3 4,3 Z"}))),category:"layout",attributes:{columns:{type:"number",default:12},gap:{type:"number",default:1}},description:Object(r.__)("Use CSS Grid to build layouts and, then add whatever content blocks you’d like."),supports:{align:["wide","full"],html:!1},deprecated:[],edit:function(e){var t=e.attributes,n=e.setAttributes,a=t.columns,o=t.gap,s="grid-gap:"+o+"rem;";return l.a.createElement(i.Fragment,null,l.a.createElement(u.InspectorControls,null,l.a.createElement(c.PanelBody,null,l.a.createElement(c.RangeControl,{label:Object(r.__)("Gap"),value:o,onChange:function(e){n({gap:e})},min:0,max:2}))),l.a.createElement("div",{className:"wp-block-gecko-grid-layout-editor","data-passthru":s,"data-grid":a},l.a.createElement(u.InnerBlocks,{template:[["gecko/grid-layout-item"],["gecko/grid-layout-item"]],templateLock:!1,allowedBlocks:d})))},save:function(){return l.a.createElement("div",null,l.a.createElement(u.InnerBlocks.Content,null))}},g=function(e){var t=e.value,n=e.onSelect,a=[{slug:"solid",name:"Solid",icon:l.a.createElement("span",{class:"dashicons dashicons-admin-appearance"})},{slug:"image",name:"Image",icon:l.a.createElement("span",{class:"dashicons dashicons-format-image"})},{slug:"image-content",name:"Image with Content",icon:l.a.createElement("span",{class:"dashicons dashicons-admin-appearance"})}];return l.a.createElement("div",{className:"wp-block-gecko-grid-layout-type-select"},l.a.createElement("p",null,"Choose the block layout type."),a.map(function(e){var a="";return e.slug===t&&(a="wp-block-gecko-grid-layout-type-select__item--selected"),l.a.createElement("div",{className:"wp-block-gecko-grid-layout-type-select__item ".concat(a),onClick:function(){return function(e){return n(e)}(e.slug)}},e.icon,e.name)}))},m={title:Object(r.__)("Item"),parent:["gecko/grid-layout"],icon:React.createElement(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},React.createElement(c.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),React.createElement(c.Path,{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"})),description:Object(r.__)("A single grid item within a grid block."),category:"common",supports:{className:!0,inserter:!0,reusable:!1,html:!1},attributes:{type:{type:"string",default:void 0},opacity:{type:"number",default:1},h:{type:"number",default:1},w:{type:"number",default:1},bgMedia:{type:"number"},bgMediaUrl:{type:"string"},bgColor:{type:"string"}},edit:function(e){var t=e.attributes,n=e.setAttributes;e.className,e.insertBlocksAfter;console.log(arguments);var a=t.opacity,o=t.h,l=t.w,d=t.type,s=t.bgMedia,m=t.bgMediaUrl,p=t.bgColor,b={"--background":p,"--opacity":a,gridColumnEnd:"span "+l,gridRowEnd:"span "+o,backgroundColor:p,backgroundImage:"url("+m+")"};return"image"===d&&delete b.backgroundColor,"solid"===d&&delete b.backgroundImage,React.createElement(i.Fragment,null,React.createElement(u.InspectorControls,null,React.createElement(c.PanelBody,{title:"Type"},React.createElement(g,{onSelect:function(e){n({type:e})},value:d})),React.createElement(c.PanelBody,{title:"Size Settings"},React.createElement(c.RangeControl,{label:Object(r.__)("Height"),value:o,onChange:function(e){n({h:e})},min:1,max:12}),React.createElement(c.RangeControl,{label:Object(r.__)("Width"),value:l,onChange:function(e){n({w:e})},min:1,max:12})),React.createElement(c.PanelBody,{title:"Background Settings"},("image"===d||"image-content"===d)&&React.createElement(u.MediaUpload,{onSelect:function(e){n({bgMedia:e.id,bgMediaUrl:e.url})},type:["image","video"],value:s||null,render:function(e){var t=e.open;return React.createElement("div",null,m&&React.createElement("img",{src:m,onClick:t,width:"100%",height:"auto",style:{cursor:"pointer"}}),!m&&React.createElement("div",{className:"button button-large",onClick:t},"Choose Background"))}}),React.createElement("hr",null),("solid"===d||"image-content"===d)&&React.createElement("div",null,React.createElement(u.ColorPalette,{label:"Background Color",value:p?p.color:void 0,onChange:function(e){n({bgColor:e})}}),React.createElement("hr",null)),"image-content"===d&&React.createElement(c.RangeControl,{label:Object(r.__)("Opacity"),value:a,onChange:function(e){n({opacity:e})},min:"0",max:"1",step:"0.1"}))),React.createElement("div",{className:"wp-block-gecko-grid-layout-editor__item ".concat(d," ").concat(t.className),style:b},React.createElement("div",{className:"wp-block-gecko-grid-layout-editor__wrap"},!d&&React.createElement(g,{onSelect:function(e){n({type:e})}}),("image"===d||"image-content"===d)&&!s&&React.createElement(u.MediaPlaceholder,{onSelect:function(e){n({bgMedia:e.id,bgMediaUrl:e.url})},allowedTypes:["image"],accept:"image/*"}),("solid"===d||"image-content"===d&&s)&&React.createElement(u.InnerBlocks,{templateLock:!1}))))},save:function(){return React.createElement("div",null,React.createElement(u.InnerBlocks.Content,null))}};Object(a.registerBlockType)("gecko/grid-layout",s),Object(a.registerBlockType)("gecko/grid-layout-item",m),jQuery(function(e){function t(){e(".wp-block-gecko-grid-layout-editor__item").each(function(){var t=new MutationObserver(function(t){t.forEach(function(t){e('[data-type="gecko/grid-layout-item"]').each(function(){var t=e(this).find(".wp-block-gecko-grid-layout-editor__item").attr("style");e(this).attr("style",t)})})});t.disconnect(),t.observe(this,{attributes:!0,attributeFilter:["style"]})})}function n(){e(".wp-block-gecko-grid-layout-editor").each(function(){var t=new MutationObserver(function(t){t.forEach(function(t){e(".wp-block-gecko-grid-layout-editor").each(function(){var t=e(this).attr("data-passthru");e(this).attr("data-grid");e(this).find(".editor-block-list__layout").attr("style",t)})})});t.disconnect(),t.observe(this,{attributes:!0,attributeFilter:["data-passthru","style"]})})}function a(){e('[data-type="gecko/grid-layout-item"]').each(function(){var t=e(this).find(".wp-block-gecko-grid-layout-editor__item").attr("style");e(this).attr("style",t)})}function o(){e(".wp-block-gecko-grid-layout-editor").each(function(){var t=e(this).attr("data-passthru");e(this).attr("data-grid");e(this).find(".editor-block-list__layout").attr("style",t)})}e("body").on("DOMNodeInserted",".wp-block-gecko-grid-layout-editor",function(l){e(".wp-block-gecko-grid-layout-editor")&&(o(),a(),n(),t())}),e(window).load(function(){o(),a(),n(),t()})})}]);