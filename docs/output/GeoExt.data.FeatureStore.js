Ext.data.JsonP.GeoExt_data_FeatureStore({"parentMixins":[],"inheritdoc":null,"extends":"Ext.data.Store","alternateClassNames":[],"requires":["GeoExt.data.reader.Feature"],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[{"owner":"GeoExt.data.FeatureStore","tagname":"property","meta":{"static":true},"name":"LAYER_TO_STORE","id":"static-property-LAYER_TO_STORE"},{"owner":"GeoExt.data.FeatureStore","tagname":"property","meta":{"static":true},"name":"STORE_TO_LAYER","id":"static-property-STORE_TO_LAYER"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.data.FeatureStore","tagname":"cfg","meta":{},"name":"featureFilter","id":"cfg-featureFilter"},{"owner":"GeoExt.data.FeatureStore","tagname":"cfg","meta":{},"name":"features","id":"cfg-features"},{"owner":"GeoExt.data.FeatureStore","tagname":"cfg","meta":{},"name":"initDir","id":"cfg-initDir"},{"owner":"GeoExt.data.FeatureStore","tagname":"cfg","meta":{},"name":"layer","id":"cfg-layer"}],"method":[{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"constructor","id":"method-constructor"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"addFeaturesToLayer","id":"method-addFeaturesToLayer"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{},"name":"bind","id":"method-bind"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"destroy","id":"method-destroy"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{},"name":"getByFeature","id":"method-getByFeature"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{},"name":"getById","id":"method-getById"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"onAdd","id":"method-onAdd"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"onClear","id":"method-onClear"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"onFeatureModified","id":"method-onFeatureModified"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"onFeaturesAdded","id":"method-onFeaturesAdded"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"onFeaturesRemoved","id":"method-onFeaturesRemoved"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"onLoad","id":"method-onLoad"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"onRemove","id":"method-onRemove"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{"private":true},"name":"onUpdate","id":"method-onUpdate"},{"owner":"GeoExt.data.FeatureStore","tagname":"method","meta":{},"name":"unbind","id":"method-unbind"}],"property":[{"owner":"GeoExt.data.FeatureStore","tagname":"property","meta":{"private":true},"name":"isLayerBinded","id":"property-isLayerBinded"},{"owner":"GeoExt.data.FeatureStore","tagname":"property","meta":{},"name":"layer","id":"property-layer"}],"css_var":[],"event":[{"owner":"GeoExt.data.FeatureStore","tagname":"event","meta":{},"name":"bind","id":"event-bind"}],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>GeoExt.data.FeatureStore</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.data.reader.Feature' rel='GeoExt.data.reader.Feature' class='docClass'>GeoExt.data.reader.Feature</a></div><h4>Files</h4><div class='dependency'><a href='source/FeatureStore.html#GeoExt-data-FeatureStore' target='_blank'>FeatureStore.js</a></div></pre><div class='doc-contents'><p>A store that synchronizes a features array of an <code>OpenLayers.Layer.Vector</code>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-featureFilter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-cfg-featureFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-cfg-featureFilter' class='name expandable'>featureFilter</a><span> : OpenLayers.Filter</span></div><div class='description'><div class='short'>This filter is evaluated before a feature record is added to the store. ...</div><div class='long'><p>This filter is evaluated before a feature record is added to the store.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-features' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-cfg-features' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-cfg-features' class='name not-expandable'>features</a><span> : OpenLayers.Layer/Array</span></div><div class='description'><div class='short'><p>Features that will be added to the store (and the layer, depending on the\nvalue of the <code>initDir</code> option.</p>\n</div><div class='long'><p>Features that will be added to the store (and the layer, depending on the\nvalue of the <code>initDir</code> option.</p>\n</div></div></div><div id='cfg-initDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-cfg-initDir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-cfg-initDir' class='name expandable'>initDir</a><span> : Number</span></div><div class='description'><div class='short'>Bitfields specifying the direction to use for the initial sync between\nthe layer and the store, if set to 0 then no i...</div><div class='long'><p>Bitfields specifying the direction to use for the initial sync between\nthe layer and the store, if set to 0 then no initial sync is done.\nDefaults to <code><a href=\"#!/api/GeoExt.data.FeatureStore\" rel=\"GeoExt.data.FeatureStore\" class=\"docClass\">GeoExt.data.FeatureStore</a>.LAYER_TO_STORE|<a href=\"#!/api/GeoExt.data.FeatureStore\" rel=\"GeoExt.data.FeatureStore\" class=\"docClass\">GeoExt.data.FeatureStore</a>.STORE_TO_LAYER</code></p>\n</div></div></div><div id='cfg-layer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-cfg-layer' class='name expandable'>layer</a><span> : OpenLayers.Layer.Vector</span></div><div class='description'><div class='short'>Layer that this store will be in sync with. ...</div><div class='long'><p>Layer that this store will be in sync with. If not provided, the\nstore will not be bound to a layer.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-isLayerBinded' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-property-isLayerBinded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-property-isLayerBinded' class='name expandable'>isLayerBinded</a><span> : OpenLayers.Layer.Vector</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>True when the vector layer is binded. ...</div><div class='long'><p>True when the vector layer is binded.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-layer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-property-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-property-layer' class='name expandable'>layer</a><span> : OpenLayers.Layer.Vector</span></div><div class='description'><div class='short'>Vector layer that the store is synchronized with, if any. ...</div><div class='long'><p>Vector layer that the store is synchronized with, if any.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='static-property-LAYER_TO_STORE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-static-property-LAYER_TO_STORE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-static-property-LAYER_TO_STORE' class='name expandable'>LAYER_TO_STORE</a><span> : Number</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Bitfield specifying the layer to store sync direction. ...</div><div class='long'><p>Bitfield specifying the layer to store sync direction.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='static-property-STORE_TO_LAYER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-static-property-STORE_TO_LAYER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-static-property-STORE_TO_LAYER' class='name expandable'>STORE_TO_LAYER</a><span> : Number</span><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Bitfield specifying the store to layer sync direction. ...</div><div class='long'><p>Bitfield specifying the store to layer sync direction.</p>\n<p>Defaults to: <code>2</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.FeatureStore-method-constructor' class='name expandable'>GeoExt.data.FeatureStore</a>( <span class='pre'>Object config</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Creation parameters</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addFeaturesToLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-addFeaturesToLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-addFeaturesToLayer' class='name expandable'>addFeaturesToLayer</a>( <span class='pre'>Ext.data.Model[] records</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-bind' class='name expandable'>bind</a>( <span class='pre'>OpenLayers.Layer.Vector layer, Object options</span> )</div><div class='description'><div class='short'>Bind this store to a layer instance, once bound the store\nis synchronized with the layer and vice-versa. ...</div><div class='long'><p>Bind this store to a layer instance, once bound the store\nis synchronized with the layer and vice-versa.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer.Vector<div class='sub-desc'><p>The layer instance.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getByFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-getByFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-getByFeature' class='name expandable'>getByFeature</a>( <span class='pre'>OpenLayers.Feature feature</span> ) : String</div><div class='description'><div class='short'>Returns the record corresponding to a feature. ...</div><div class='long'><p>Returns the record corresponding to a feature.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : OpenLayers.Feature<div class='sub-desc'><p>An OpenLayers.Feature.Vector object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The model instance corresponding to a feature.</p>\n</div></li></ul></div></div></div><div id='method-getById' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-getById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-getById' class='name expandable'>getById</a>( <span class='pre'>String id</span> ) : String</div><div class='description'><div class='short'>Returns the record corresponding to a feature id. ...</div><div class='long'><p>Returns the record corresponding to a feature id.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>An OpenLayers.Feature.Vector id string.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The model instance corresponding to the given id.</p>\n</div></li></ul></div></div></div><div id='method-onAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onAdd' class='name expandable'>onAdd</a>( <span class='pre'>Ext.data.Store store, Ext.data.Model[] records, Number index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's add event ...</div><div class='long'><p>Handler for a store's add event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onClear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onClear' class='name expandable'>onClear</a>( <span class='pre'>Ext.data.Store store</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's clear event ...</div><div class='long'><p>Handler for a store's clear event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFeatureModified' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onFeatureModified' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onFeatureModified' class='name expandable'>onFeatureModified</a>( <span class='pre'>Object evt</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for layer featuremodified event ...</div><div class='long'><p>Handler for layer featuremodified event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFeaturesAdded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onFeaturesAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onFeaturesAdded' class='name expandable'>onFeaturesAdded</a>( <span class='pre'>Object evt</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for layer featuresadded event ...</div><div class='long'><p>Handler for layer featuresadded event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFeaturesRemoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onFeaturesRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onFeaturesRemoved' class='name expandable'>onFeaturesRemoved</a>( <span class='pre'>Object evt</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for layer featuresremoved event ...</div><div class='long'><p>Handler for layer featuresremoved event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onLoad' class='name expandable'>onLoad</a>( <span class='pre'>Ext.data.Store store, Ext.data.Model[] records, Boolean successful</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's load event ...</div><div class='long'><p>Handler for a store's load event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'>\n</div></li><li><span class='pre'>successful</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>Ext.data.Store store, Ext.data.Model record, Number index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's remove event ...</div><div class='long'><p>Handler for a store's remove event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onUpdate' class='name expandable'>onUpdate</a>( <span class='pre'>Ext.data.Store store, Ext.data.Model record, Number operation</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for a store's update event ...</div><div class='long'><p>Handler for a store's update event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li><li><span class='pre'>operation</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unbind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-unbind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-unbind' class='name expandable'>unbind</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unbind this store to his layer instance. ...</div><div class='long'><p>Unbind this store to his layer instance.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-event-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-event-bind' class='name expandable'>bind</a>( <span class='pre'><a href=\"#!/api/GeoExt.data.FeatureStore\" rel=\"GeoExt.data.FeatureStore\" class=\"docClass\">GeoExt.data.FeatureStore</a> store, OpenLayers.Layer.Vector layer, Object eOpts</span> )</div><div class='description'><div class='short'>Fires when the store is bound to a layer. ...</div><div class='long'><p>Fires when the store is bound to a layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : <a href=\"#!/api/GeoExt.data.FeatureStore\" rel=\"GeoExt.data.FeatureStore\" class=\"docClass\">GeoExt.data.FeatureStore</a><div class='sub-desc'>\n</div></li><li><span class='pre'>layer</span> : OpenLayers.Layer.Vector<div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.data.FeatureStore","files":[{"href":"FeatureStore.html#GeoExt-data-FeatureStore","filename":"FeatureStore.js"}],"mixedInto":[],"aliases":{},"id":"class-GeoExt.data.FeatureStore","superclasses":["Ext.data.Store"]});