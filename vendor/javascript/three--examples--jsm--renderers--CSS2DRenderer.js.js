// three/examples/jsm/renderers/CSS2DRenderer.js@0.178.0 downloaded from https://ga.jspm.io/npm:three@0.178.0/examples/jsm/renderers/CSS2DRenderer.js

import{Object3D as e,Vector2 as t,Vector3 as n,Matrix4 as r}from"three";class CSS2DObject extends e{
/**
	 * Constructs a new CSS2D object.
	 *
	 * @param {DOMElement} [element] - The DOM element.
	 */
constructor(e=document.createElement("div")){super();
/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */this.isCSS2DObject=true;
/**
		 * The DOM element which defines the appearance of this 3D object.
		 *
		 * @type {DOMElement}
		 * @readonly
		 * @default true
		 */this.element=e;this.element.style.position="absolute";this.element.style.userSelect="none";this.element.setAttribute("draggable",false);
/**
		 * The 3D objects center point.
		 * `( 0, 0 )` is the lower left, `( 1, 1 )` is the top right.
		 *
		 * @type {Vector2}
		 * @default (0.5,0.5)
		 */this.center=new t(.5,.5);this.addEventListener("removed",(function(){this.traverse((function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()}))}))}copy(e,t){super.copy(e,t);this.element=e.element.cloneNode(true);this.center=e.center;return this}}const o=new n;const s=new r;const i=new r;const l=new n;const c=new n;class CSS2DRenderer{
/**
	 * Constructs a new CSS2D renderer.
	 *
	 * @param {CSS2DRenderer~Parameters} [parameters] - The parameters.
	 */
constructor(e={}){const t=this;let n,r;let a,d;const u={objects:new WeakMap};const m=e.element!==void 0?e.element:document.createElement("div");m.style.overflow="hidden";
/**
		 * The DOM where the renderer appends its child-elements.
		 *
		 * @type {DOMElement}
		 */this.domElement=m;this.getSize=function(){return{width:n,height:r}};
/**
		 * Renders the given scene using the given camera.
		 *
		 * @param {Object3D} scene - A scene or any other type of 3D object.
		 * @param {Camera} camera - The camera.
		 */this.render=function(e,t){e.matrixWorldAutoUpdate===true&&e.updateMatrixWorld();t.parent===null&&t.matrixWorldAutoUpdate===true&&t.updateMatrixWorld();s.copy(t.matrixWorldInverse);i.multiplyMatrices(t.projectionMatrix,s);p(e,e,t);x(e)};
/**
		 * Resizes the renderer to the given width and height.
		 *
		 * @param {number} width - The width of the renderer.
		 * @param {number} height - The height of the renderer.
		 */this.setSize=function(e,t){n=e;r=t;a=n/2;d=r/2;m.style.width=e+"px";m.style.height=t+"px"};function h(e){e.isCSS2DObject&&(e.element.style.display="none");for(let t=0,n=e.children.length;t<n;t++)h(e.children[t])}function p(e,n,r){if(e.visible!==false){if(e.isCSS2DObject){o.setFromMatrixPosition(e.matrixWorld);o.applyMatrix4(i);const s=o.z>=-1&&o.z<=1&&e.layers.test(r.layers)===true;const l=e.element;l.style.display=s===true?"":"none";if(s===true){e.onBeforeRender(t,n,r);l.style.transform="translate("+-100*e.center.x+"%,"+-100*e.center.y+"%)translate("+(o.x*a+a)+"px,"+(-o.y*d+d)+"px)";l.parentNode!==m&&m.appendChild(l);e.onAfterRender(t,n,r)}const c={distanceToCameraSquared:f(r,e)};u.objects.set(e,c)}for(let t=0,o=e.children.length;t<o;t++)p(e.children[t],n,r)}else h(e)}function f(e,t){l.setFromMatrixPosition(e.matrixWorld);c.setFromMatrixPosition(t.matrixWorld);return l.distanceToSquared(c)}function S(e){const t=[];e.traverseVisible((function(e){e.isCSS2DObject&&t.push(e)}));return t}function x(e){const t=S(e).sort((function(e,t){if(e.renderOrder!==t.renderOrder)return t.renderOrder-e.renderOrder;const n=u.objects.get(e).distanceToCameraSquared;const r=u.objects.get(t).distanceToCameraSquared;return n-r}));const n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}}export{CSS2DObject,CSS2DRenderer};

