var t=function t(n){this.name=n||t.randomize()};t.randomize=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",o=0;o<5;o++)n+=t.charAt(Math.floor(Math.random()*t.length));return n};var n=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];this.poses=t||[],this.dimension=this.poses.length};n.prototype.rotate=function(t){void 0===t&&(t=0),t=t*Math.PI/180},n.prototype.round=function(t){return void 0===t&&(t=0),new(Function.prototype.bind.apply(n,[null].concat(this.poses.map(function(n){return Math.round(n*Math.pow(10,t))/Math.pow(10,t)}))))};var o=function(n,o,r,i){this.name=n||t.randomize(),this.template=o||"",this.params=this.genParams(/<<(?<boolean>.+?)>>|\(\((?<string>.+?)\)\)|{{(?<block>.+?)}}/g),this.func=r||new Function};o.prototype.genParams=function(t){var n={};return(this.template.match(t)||[]).forEach(function(o){t.lastIndex=0;var r=t.exec(o).groups;r.boolean?n[r.boolean]=new i("boolean",r.boolean):r.string?n[r.string]=new i("string",r.string):r.block&&(n[r.block]=new i("block",r.block))}),n};var r=function(t,n){this.parent=t||new o,this.setParams(n||[])};r.prototype.setParams=function(t){return this.params=Object.assign(this.parent.params,t),this},r.from=function(t){return new r(t)};var i=function(n,o){this.type=n,this.name=o||t.randomize(),this.value="boolean"==this.type&&Boolean()||"string"==this.type&&String()||"block"==this.type&&new r},e=function(n,o){this.name=n||t.randomize(),this.blockGroups=[]};e.prototype.link=function(t){return this.blockGroups.push(t),this},e.prototype.fire=function(t){for(var n in this.blockGroups)this.blockGroups[n].start(t);return this};var s=function(t,n){this.event=t||new e,this.blocks=n||[]};s.prototype.ready=function(){return this.event.link(this),this},s.prototype.start=function(t){for(var n in this.blocks)this.blocks[n].parent.func();return this},s.prototype.attach=function(t){return new s(this.event,this.blocks.concat(t.blocks))},s.from=function(t){return new s(void 0,[t])};var a=function(o,r,i){this.name=o||t.randomize(),this.pos=r||new n,this.blocks=i||[]};a.prototype.addBlock=function(t){return this.blocks.push(t),this},a.prototype.ready=function(){this.blocks.forEach(function(t){return t.ready()})};var h=function(t){function n(n,o,r,i){t.call(this,n,o,r),this.children=i||[]}return t&&(n.__proto__=t),(n.prototype=Object.create(t&&t.prototype)).constructor=n,n.prototype.addThing=function(t){return this.children.push(t),this},n.prototype.ready=function(){this.children.forEach(function(t){return t.ready()})},n}(a),c=function(n,o,r){this.name=n||t.randomize(),this.things=o||new h("Global"),this.blockSets=r||[]};c.prototype.addThing=function(t){return this.things.addThing(t),this},c.prototype.ready=function(){this.things.ready()};export default{Name:t,Vector:n,Param:i,Event:e,BlockInfo:o,BlockSet:function(t,n,o){this.infos=n||[],this.events=o||[]},Block:r,BlockGroup:s,Thing:a,ThingGroup:h,Project:c};
