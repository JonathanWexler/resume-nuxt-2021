(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{344:function(t,e,l){var content=l(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(57).default)("76f98242",content,!0,{sourceMap:!1})},346:function(t,e,l){"use strict";l(344)},347:function(t,e,l){var n=l(56)((function(i){return i[1]}));n.push([t.i,".header[data-v-aed78822]{display:flex;flex-direction:row;justify-content:space-between}.header .company[data-v-aed78822]{background-color:#ebfbfd;font-weight:700;max-width:60%;padding:3px 5px;text-align:left}.tags[data-v-aed78822]{text-align:left}.tags .highlight[data-v-aed78822]{background-color:#ffd400;color:#21262a}.tags .tag[data-v-aed78822]{cursor:pointer;margin-right:5px;padding:5px}.role[data-v-aed78822]{font-weight:700}.bullets[data-v-aed78822],.role[data-v-aed78822]{display:flex;justify-content:flex-start}.bullets[data-v-aed78822]{flex-direction:column;padding-left:20px}.bullets .highlight[data-v-aed78822]{background-color:#ffd400;color:#21262a}.bullets .bullet[data-v-aed78822]{display:flex;flex-direction:row;justify-content:flex-start;text-align:left;width:80%}.bullets .bullet .bullet-icon[data-v-aed78822]{display:inline-flex;margin-right:10px;margin-top:6px}.bullets .bullet .bullet-text[data-v-aed78822]{display:inline-flex;margin-bottom:.5rem}.view-more[data-v-aed78822]{background-color:#ebfafd;border:1px solid #ebfafd;border-radius:5px;cursor:pointer;display:flex;font-size:13px;margin-bottom:5px;margin-left:20px;padding:5px;width:-moz-fit-content;width:fit-content}.view-more[data-v-aed78822]:hover{background-color:#fff;border-color:#ebfafd}",""]),n.locals={},t.exports=n},355:function(t,e,l){"use strict";l.r(e);l(14),l(65),l(17),l(20),l(89),l(37);var n={name:"ResumeItem",props:{experience:{type:Object,default:{}},query:{type:String,default:""}},data:function(){return{showBullets:!1}},watch:{query:function(t){""===t&&(this.showBullets=!1)}},computed:{firstBullets:function(){return this.experience.bullets.slice(0,2)},restBullets:function(){return this.experience.bullets.slice(2)},showMoreText:function(){var t=this.showBullets?"Less":"More";return"Show ".concat(t)},itemSlug:function(){return this.slugify(this.experience.company)}},methods:{toggleShowMore:function(){this.showBullets=!this.showBullets},slugify:function(text){return(text||"").toLowerCase().split(" ").join("-")},filterYears:function(t){this.$emit("filter-years",t)},dateRangeSelect:function(t,e){this.$emit("date-range",{start:t,end:e})},highlightedText:function(text){var t=""!==this.query.trim()&&text.toLowerCase().includes(this.query);return t&&(this.showBullets=!0),t},tagClick:function(t){this.$emit("tag-click",t)}}},r=(l(346),l(49)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("b-card",[e("div",{staticClass:"header"},[e("span",{staticClass:"company"},[t._v(t._s(t.experience.company))]),t._v(" "),e("b-button",{staticClass:"border-0",attrs:{variant:"outline-primary"},on:{click:function(e){return t.filterYears(t.experience)}}},[e("span",{staticClass:"year",on:{click:function(e){return t.dateRangeSelect(t.experience.startDate,t.experience.endDate)}}},[t._v("\n        "+t._s("".concat(t.experience.startDate," - ").concat(t.experience.endDate||"Present"))+"\n        ")])])],1),t._v(" "),e("div",{staticClass:"role"},[t._v("\n    "+t._s(t.experience.role)+"\n  ")]),t._v(" "),e("ul",{staticClass:"bullets"},[t._l(t.firstBullets,(function(l){return e("li",{key:l.text,staticClass:"bullet",class:{highlight:t.highlightedText(l.text)}},[e("font-awesome-icon",{staticClass:"bullet-icon",attrs:{size:"xs",icon:"dot-circle",fill:"blue"}}),t._v(" "),e("p",{staticClass:"bullet-text"},[t._v(t._s(l.text))])],1)})),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.showBullets,expression:"showBullets"}]},t._l(t.restBullets,(function(l){return e("li",{key:l.text,staticClass:"bullet",class:{highlight:t.highlightedText(l.text)}},[e("font-awesome-icon",{staticClass:"bullet-icon",attrs:{size:"xs",icon:"dot-circle",fill:"blue"}}),t._v(" "),e("p",{staticClass:"bullet-text"},[t._v(t._s(l.text))])],1)})),0)],2),t._v(" "),t.restBullets.length?e("div",{staticClass:"view-more",on:{"!click":function(e){return t.toggleShowMore.apply(null,arguments)}}},[t._v("\n      "+t._s(t.showMoreText)+"\n    ")]):t._e(),t._v(" "),e("section",{staticClass:"tags"},t._l(t.experience.tags,(function(l){return e("b-badge",{key:l,staticClass:"tag",class:{highlight:t.highlightedText(l)},attrs:{variant:"primary"},on:{click:function(e){return t.tagClick(l)}}},[t._v("\n      "+t._s(l)+"\n    ")])})),1)])}),[],!1,null,"aed78822",null);e.default=component.exports}}]);