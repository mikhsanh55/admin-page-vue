(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07165be4"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var i=a("ade3"),n=a("5530"),s=(a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(a,i){return a[t+Object(o["D"])(i)]=e(),a}),{})}var h=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:h}})),g=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:g}})),f=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:f}})),k={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(m)},b={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,a){var i=b[t];if(null!=a){if(e){var n=e.replace(t,"");i+="-".concat(n)}return i+="-".concat(a),i.toLowerCase()}}var S=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:g}},p),{},{alignContent:{type:String,default:null,validator:f}},m),render:function(t,e){var a=e.props,n=e.data,s=e.children,o="";for(var l in a)o+=String(a[l]);var c=S.get(o);return c||function(){var t,e;for(e in c=[],k)k[e].forEach((function(t){var i=a[t],n=v(e,t,i);n&&c.push(n)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(i["a"])(t,"align-".concat(a.align),a.align),Object(i["a"])(t,"justify-".concat(a.justify),a.justify),Object(i["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),S.set(o,c)}(),t(a.tag,Object(r["a"])(n,{staticClass:"row",class:c}),s)}})},"2bfd":function(t,e,a){},"66aa":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"kategori-section",fluid:"",tag:"section"}},[a("base-material-card",{staticClass:"px-5 py-3",attrs:{icon:"mdi-format-list-checkbox",title:"Kategori"}},[a("v-row",[a("v-col",{attrs:{cols:"5"}},[a("v-btn",{attrs:{color:"primary",dark:"",tile:"",href:"/kategori/add"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus-circle-outline")]),t._v(" Tambah Kategori ")],1)],1),a("v-col",{attrs:{offset:"2",cols:"5"}},[a("v-combobox",{attrs:{"allow-overflow":"",items:t.itemsKategori,label:"Pilih data berdasarkan kategori"},on:{change:t.changeView},model:{value:t.kategori,callback:function(e){t.kategori=e},expression:"kategori"}})],1)],1),a("v-data-table",{staticClass:"elevation-1",class:t.hideTableNiche,attrs:{headers:t.headers3,items:t.kategoris,"items-per-page":10},scopedSlots:t._u([{key:"item",fn:function(e){return[a("tr",[a("td",[t._v(t._s(e.item.no))]),a("td",[t._v(" "+t._s(e.item.kategori1)+" ")]),a("td",[t._v(" "+t._s(e.item.kategori2)+" ")]),a("td",[t._v(" "+t._s(e.item.kategori3)+" ")]),a("td",[a("v-btn",{attrs:{color:"primary",dark:"",large:"",icon:"",href:"/kategori/edit/"+e.item.encrypt}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1),a("v-btn",{attrs:{color:"red darken-1",dark:"",large:"",icon:""},on:{click:function(a){return a.preventDefault(),t.deleteData(e.item.encrypt)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-trash-can ")])],1)],1)])]}}])}),a("v-data-table",{staticClass:"elevation-1",class:t.hideTableSubKategori,attrs:{headers:t.headers2,items:t.kategoris,"items-per-page":10},scopedSlots:t._u([{key:"item",fn:function(e){return[a("tr",[a("td",[t._v(t._s(e.item.no))]),a("td",[t._v(" "+t._s(e.item.kategori1)+" ")]),a("td",[t._v(" "+t._s(e.item.kategori2)+" ")]),a("td",[a("v-btn",{attrs:{color:"primary",dark:"","x-small":"",icon:"",href:"/kategori/edit/"+e.item.encrypt}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1),a("v-btn",{attrs:{color:"danger",dark:"","x-small":"",icon:""},on:{click:function(a){return t.deleteData(e.item.encrypt)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-trash-can ")])],1)],1)])]}}])}),a("v-data-table",{staticClass:"elevation-1",class:t.hideTableKategori,attrs:{headers:t.headers1,items:t.kategoris,"items-per-page":10},scopedSlots:t._u([{key:"item",fn:function(e){return[a("tr",[a("td",[t._v(t._s(e.item.no))]),a("td",[t._v(" "+t._s(e.item.kategori1)+" ")]),a("td",[a("v-btn",{attrs:{color:"primary",dark:"",icon:"",small:""}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1),a("v-btn",{attrs:{color:"red darken-1",dark:"",icon:"",small:""}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-trash-can ")])],1)],1)])]}}])})],1)],1)},n=[],s={name:"Kategori",data:function(){return{hideTableKategori:"d-none",hideTableSubKategori:"d-none",hideTableNiche:"d-block",kategori:null,itemsKategori:[{text:"Kategori Utama",value:1},{text:"Sub Kategori",value:2},{text:"Niche",value:3}],headers2:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Kategori Utama",value:"kategori1"},{text:"Sub Kategori",value:"kategori2"},{text:"Aksi",value:"aksi"}],headers1:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Kategori Utama",value:"kategori1"},{text:"Aksi",value:"aksi"}],headers3:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Kategori Utama",value:"kategori1"},{text:"Sub Kategori",value:"kategori2"},{text:"Nilai",value:"kategori3"},{text:"Aksi",value:"aksi"}],kategoris:[]}},methods:{deleteData:function(t){confirm("Apakah Kamu yakin?")},changeView:function(t){switch(this.kategoris=[],this.headers=[],this.getData(),t.value){case 1:this.hideTableKategori="d-block",this.hideTableSubKategori="d-none",this.hideTableNiche="d-none";break;case 2:this.hideTableKategori="d-none",this.hideTableSubKategori="d-block",this.hideTableNiche="d-none";break;case 3:this.hideTableKategori="d-none",this.hideTableSubKategori="d-none",this.hideTableNiche="d-block";break;default:this.hideTableKategori="d-none",this.hideTableSubKategori="d-none",this.hideTableNiche="d-block";break}},getData:function(){this.kategoris=[{no:1,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:2,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(2)},{no:3,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(3)},{no:4,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:5,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:6,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:7,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:8,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:9,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:10,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:11,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:12,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:13,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)},{no:14,kategori1:"Buku",kategori2:"Buku Sastra",kategori3:"Buku kedzaliman para binatang",encrypt:btoa(1)}]}},created:function(){this.getData()}},r=s,o=a("2877"),l=a("6544"),c=a.n(l),u=a("8336"),h=a("62ad"),d=(a("7db0"),a("c975"),a("fb6a"),a("a434"),a("0d03"),a("b0c0"),a("d3b7"),a("25f0"),a("8a79"),a("5530")),g=(a("2bfd"),a("b974")),p=(a("4de4"),a("d81d"),a("45fc"),a("498a"),a("8654")),f=a("d9f7"),m=a("80d2"),k=Object(d["a"])(Object(d["a"])({},g["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),b=g["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:g["a"].options.props.menuProps.type,default:function(){return k}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(m["q"])(e,t.itemText),i=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=g["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(d["a"])(Object(d["a"])({},k),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=g["a"].options.computed.listData.call(this);return t.props=Object(d["a"])(Object(d["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===m["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===m["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==m["w"].backspace&&t!==m["w"]["delete"]||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var i=this.selectedItems.length,n=t!==i-1?t:t-1,s=this.selectedItems[n];s?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=void 0,g["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=p["a"].options.methods.genInput.call(this);return t.data=Object(f["a"])(t.data,{attrs:{"aria-activedescendant":Object(m["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(m["o"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=g["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?g["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;g["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){g["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){g["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){g["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],a=this.getText(e);t.clipboardData.setData("text/plain",a),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}}}),v=b.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return g["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=b.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var a=this,i=g["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(i.componentOptions.listeners=Object(d["a"])(Object(d["a"])({},i.componentOptions.listeners),{},{dblclick:function(){a.editingIndex=e,a.internalSearch=a.getText(t),a.selectedIndex=-1}})),i},onChipInput:function(t){g["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&b.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;g["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===m["w"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===m["w"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();b.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():b.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){g["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var a=this.internalValue.slice();a.splice(e,1),this.setValue(a)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),g["a"].options.methods.selectItem.call(this,e))}}}}),S=a("a523"),I=a("8fea"),y=a("132d"),x=a("0fd9"),D=Object(o["a"])(r,i,n,!1,null,null,null);e["default"]=D.exports;c()(D,{VBtn:u["a"],VCol:h["a"],VCombobox:v,VContainer:S["a"],VDataTable:I["a"],VIcon:y["a"],VRow:x["a"]})},"8a79":function(t,e,a){"use strict";var i=a("23e7"),n=a("06cf").f,s=a("50c4"),r=a("5a34"),o=a("1d80"),l=a("ab13"),c=a("c430"),u="".endsWith,h=Math.min,d=l("endsWith"),g=!c&&!d&&!!function(){var t=n(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!g&&!d},{endsWith:function(t){var e=String(o(this));r(t);var a=arguments.length>1?arguments[1]:void 0,i=s(e.length),n=void 0===a?i:h(s(a),i),l=String(t);return u?u.call(e,l,n):e.slice(n-l.length,n)===l}})}}]);
//# sourceMappingURL=chunk-07165be4.1e0782f9.js.map