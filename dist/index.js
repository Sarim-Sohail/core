var Yr = Object.defineProperty;
var Qr = (r, e, t) => e in r ? Yr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var a = (r, e, t) => (Qr(r, typeof e != "symbol" ? e + "" : e, t), t), Xe = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var u = (r, e, t) => (Xe(r, e, "read from private field"), t ? t.call(r) : e.get(r)), y = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, x = (r, e, t, n) => (Xe(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t);
var b = (r, e, t) => (Xe(r, e, "access private method"), t);
import { jsx as h, jsxs as De, Fragment as vt } from "@emotion/react/jsx-runtime";
import { cx as wt, css as nr } from "@emotion/css";
import R from "@emotion/styled";
import { observer as or } from "mobx-react";
import { assign as Y, clone as _e, startCase as sr, isEmpty as Nt, isArray as Gr, merge as jt, reduce as Xr, isUndefined as _r, keysIn as en, forIn as tn, isObject as zt, upperFirst as rn } from "lodash-es";
import { makeAutoObservable as U, reaction as nn, makeObservable as ir, observable as T, autorun as Mt, untracked as on, configure as sn } from "mobx";
import { createContext as an, useContext as ar, useRef as me, useState as bt, useEffect as k, useCallback as K, useMemo as ae, createElement as cr, Fragment as cn, useImperativeHandle as ln } from "react";
import { CacheProvider as un } from "@emotion/react";
import $t from "@emotion/cache";
import dn from "stylis-plugin-rtl";
import { filter as pe, Subject as lr, debounceTime as hn, map as lt, switchMap as pn, catchError as fn } from "rxjs";
import { FluentResource as ur, FluentBundle as dr } from "@fluent/bundle";
import { z as H } from "zod";
const ui = () => (Math.random() * 1e18).toString(36).slice(0, 5).toUpperCase() + "";
function mn(r, e) {
  return r.reduce((t, n, o, s) => {
    var i;
    return (t[i = e(n, o, s)] || (t[i] = [])).push(n), t;
  }, {});
}
var ye;
class J {
  /**
   * Creates component metadata for the form viewer.
   * @param component the React component.
   * @param name the component name.
   * @param actionsInitializer the function to initialize actions in the component.
   * @param valued the name of the component property where the component value is stored.
   * @param valueType the type of the component value.
   * @param defaultProps the component's default property values.
   * @param css the component's CSS values.
   * @param wrapperCss the component's wrapper CSS values.
   * @param typeName the component type name.
   * @param icon the component icon.
   * @param kind the component kind.
   * @template T the type of React component properties.
   */
  constructor(e, t, n, o, s, i, c, l, d, p, g = "component") {
    y(this, ye, void 0);
    /**
     * The React component.
     */
    a(this, "component");
    this.actionsInitializer = n, this.valued = o, this.valueType = s, this.defaultProps = i, this.css = c, this.wrapperCss = l, this.typeName = d, this.icon = p, this.kind = g, this.component = or(e), this.component.displayName = e.displayName || e.name, x(this, ye, t);
  }
  /**
   * @returns the component name, or type if there is no component name.
   */
  get name() {
    return u(this, ye) ?? this.type;
  }
  /**
   * @returns the component type name.
   */
  get type() {
    return this.typeName || this.component.displayName || this.component.name;
  }
}
ye = new WeakMap();
var Q = /* @__PURE__ */ ((r) => (r.LTR = "ltr", r.RTL = "rtl", r))(Q || {});
class Fe {
  /**
   * Creates metadata for a React component property.
   * @param key the property name.
   * @param name the human-readable property name.
   */
  constructor(e, t) {
    /**
     * The component property key.
     */
    a(this, "key");
    /**
     * The component property name.
     */
    a(this, "name");
    /**
     * The name of the component's property editor.
     */
    a(this, "editor");
    /**
     * The hint for the component property.
     */
    a(this, "hint");
    /**
     * True if the property value can be localized, false otherwise.
     */
    a(this, "localizable", !1);
    /**
     * True if the property value is bound to form data, false otherwise.
     */
    a(this, "valued", !1);
    /**
     * Additional properties for the component property editor.
     */
    a(this, "editorProps");
    /**
     * The default property value.
     */
    a(this, "default");
    /**
     * The data type for the value of the property.
     */
    a(this, "type");
    /**
     * True if the component property is required, false otherwise.
     */
    a(this, "required", !1);
    /**
     * The function for validating the property value.
     */
    a(this, "validator");
    /**
     * Message and/or error code for the validation function.
     */
    a(this, "errorMap");
    /**
     * True if the property value can be a calculated property, false otherwise.
     */
    a(this, "calculable", !0);
    /**
     * A function that returns a string containing the source code of the function to bind child components.
     * @param props the properties of the component, which are available only inside Form Builder Designer.
     */
    a(this, "slotConditionBuilder");
    this.key = e, this.name = t;
  }
  /**
   * @returns the metadata clone.
   */
  clone() {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
  }
}
class hr extends Fe {
}
class gn extends Fe {
}
class yn extends Fe {
}
class pr extends Fe {
  constructor() {
    super(...arguments);
    /**
     * Possible values for the property.
     */
    a(this, "data");
  }
}
const di = (r) => r instanceof pr;
class vn extends Fe {
}
const wn = {
  Property: pr,
  Container: hr,
  Event: gn,
  Module: yn,
  Style: vn
};
class bn {
  constructor() {
    /**
     * Type of component property description in the form builder.
     */
    a(this, "annotationType", "Module");
    /**
     * Flag if true, the property name will be automatically converted in the designer from a camel case string to a human-readable string.
     */
    a(this, "autoName", !0);
  }
}
class fr {
  constructor() {
    /**
     * Partial metadata for a component property.
     */
    a(this, "annotation");
    /**
     * Options for building an annotation.
     */
    a(this, "options", new bn());
  }
  /**
   * @returns the main component property that is used as form data and for validation rules.
   */
  get valued() {
    return this.setup({ valued: !0 });
  }
  /**
   * @returns the component property that can be localized.
   */
  get localize() {
    return this.setup({ localizable: !0 });
  }
  /**
   * @returns the non-localizable component property.
   */
  get notLocalize() {
    return this.setup({ localizable: !1 });
  }
  /**
   * Specifies the name of the component property.
   * @param name the property name.
   * @returns the modified instance of the builder.
   */
  named(e) {
    return this.setup({ name: e });
  }
  /**
   * Adds the hint to the property name of the component.
   * @param hint the hint.
   * @returns the modified instance of the builder.
   */
  hinted(e) {
    return this.setup({ hint: e });
  }
  /**
   * Marks the component property as calculable.
   * @param calculable true if the property is calculable.
   * @returns the modified instance of the builder.
   */
  calculable(e) {
    return this.setup({ calculable: e });
  }
  /**
   * Modifies the component property metadata builder with custom options.
   * @param options the custom options.
   * @returns the modified instance of the builder.
   */
  setup(e) {
    const { annotationType: t, autoName: n, ...o } = e, s = this.clone();
    return s.options.annotationType = t ?? s.options.annotationType, s.options.autoName = n ?? s.options.autoName, Y(s.annotation, o), s;
  }
  /**
   * Clones the instance of the builder.
   * @returns the cloned instance of the builder.
   */
  clone() {
    const e = _e(this);
    return e.options = _e(this.options), e.annotation = _e(this.annotation), e.annotation ?? (e.annotation = {}), e;
  }
  /**
   * Creates component property metadata for the form builder.
   * @param key the unique key of the component property.
   * @returns the instance of the component property metadata for the form builder.
   */
  build(e) {
    const t = this.getName(e), n = new wn[this.options.annotationType](e, t);
    return Y(n, this.annotation), n;
  }
  /**
   * Sets custom properties for the component's property editor.
   * @param props the custom properties
   * @returns the modified instance of the builder.
   */
  withEditorProps(e) {
    const t = this.clone();
    return Y(t.annotation, { editorProps: e }), t;
  }
  /**
   * Returns the annotation name.
   * @param key the property name
   * @returns the annotation name.
   */
  getName(e) {
    return this.annotation.name ?? (this.options.autoName ? sr(e) : e);
  }
}
class Ct extends fr {
  /**
   * Marks the component property as required.
   * @returns the modified instance of the builder.
   */
  get required() {
    return this.setup({ required: !0 });
  }
  /**
   * Sets the default value for the component property.
   * @param value the default value.
   * @returns the modified instance of the builder.
   */
  default(e) {
    return this.setup({ default: e });
  }
  /**
   * Modifies the component property metadata builder with validation properties.
   * @param validator the validation function.
   * @param errorMap the validation error settings.
   * @returns the modified instance of the builder.
   */
  validated(e, t) {
    return this.setup({ validator: e, errorMap: t });
  }
}
class $e extends Ct {
  constructor() {
    super(...arguments);
    a(this, "subType");
  }
  /**
   * Sets the component's value type to an array of strings.
   * @returns the modified instance of the builder.
   */
  get ofString() {
    const t = new $e().setup({ ...this.options, ...this.annotation, type: "array", editor: "arrayOfString" });
    return t.subType = "string", t;
  }
  /**
   * Sets the component's value type to an array of objects.
   * @returns the modified instance of the builder.
   */
  get ofObject() {
    const t = new $e().setup({ ...this.options, ...this.annotation, type: "array" });
    return t.subType = "object", t;
  }
}
class mr extends Ct {
  constructor() {
    super(...arguments);
    /**
     * Possible values for the property.
     */
    a(this, "values");
    /**
     * Labels for the possible values of the property.
     */
    a(this, "labels");
  }
  /**
   * Marks the component property as required.
   * @returns the modified instance of the builder.
   */
  get required() {
    return super.required;
  }
  /**
   * Sets the labels for predefined values.
   * @param labels the labels.
   * @returns the modified instance of the builder.
   */
  labeled(...t) {
    const n = this.clone();
    return n.labels = t, n;
  }
  /**
   * Creates component property metadata for the form builder.
   * @param key the unique key of the component property.
   * @returns the instance of the component property metadata for the form builder.
   */
  build(t) {
    const n = super.build(t);
    return n.data = this.values.map((o, s) => {
      var c;
      return { label: ((c = this.labels) == null ? void 0 : c[s]) ?? sr(o.toString()), value: o };
    }), n;
  }
  /**
   * Sets the default value for the component property.
   * @param value the default value, can be an array of values.
   * @returns the modified instance of the builder.
   */
  default(t) {
    return this.setup({ default: t });
  }
}
class Cn extends mr {
  /**
   * Sets the radio buttons as the component's property editor.
   * @returns the modified instance of the builder.
   */
  radio() {
    return this.setup({ editor: "radio" });
  }
  /**
   * Sets the default value for the component property.
   * @param value the default value.
   * @returns the modified instance of the builder.
   */
  default(e) {
    return super.default(e);
  }
}
class Sn extends mr {
  /**
   * Sets the default value for the component property.
   * @param value the default value.
   * @returns the modified instance of the builder.
   */
  default(e) {
    return super.default(e);
  }
}
const He = class He extends fr {
  /**
   * Creates a component property metadata builder.
   * @param editor the property editor type.
   * @template T the property type.
   */
  constructor(e) {
    super(), this.annotation = { editor: e };
  }
  /**
   * Sets the property as a "array" property.
   * @returns the instance of the metadata property builder.
   */
  get array() {
    return new $e().setup({ ...this.options, ...this.annotation, type: "array" });
  }
  /**
   * Sets the field type for the component property.
   * @param type the field type.
   * @returns the instance of the metadata property builder.
   */
  typed(e) {
    return new Ct().setup({ ...this.options, ...this.annotation, type: e });
  }
  /**
   * Sets the property as a "single select" property.
   * @param values the possible values for the property.
   * @returns the instance of the metadata property builder.
   */
  oneOf(...e) {
    const t = new Cn().setup({ ...this.options, ...this.annotation, type: "enum" });
    return t.values = e, t;
  }
  /**
   * Sets the property as a "multiple select" property.
   * @param values the possible values for the property.
   * @returns the instance of the metadata property builder.
   */
  someOf(...e) {
    const t = new Sn().setup({ ...this.options, ...this.annotation, type: "enum" });
    return t.values = e, t;
  }
};
/**
 * Creates a component property metadata builder.
 * @param editor the property editor type.
 * @template T the property type.
 * @returns the component property metadata builder.
 */
a(He, "create", (e) => new He(e));
let Re = He;
const hi = (r) => r instanceof hr, z = Re.create;
function D(r) {
  return z(r).setup({ annotationType: "Property" });
}
function gr(r) {
  return r.reduce((e, t) => (e[t.key] = t.default, e), {});
}
function Le(r) {
  return {
    any: {
      object: gr(r)
    }
  };
}
class Pn extends Re {
  /**
   * Creates a component property metadata builder.
   * @param editor the property editor type.
   * @template T the property type.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Specifies a function that will create conditions that check if a child component can be bound to a parent slot.
   * @param slotConditionBuilder the function that returns a string containing the source code of the function to bind child components.
   * @returns the instance of the metadata property builder.
   */
  withSlotConditionBuilder(e) {
    return this.setup({ slotConditionBuilder: e });
  }
}
function En(r) {
  return new Pn(r);
}
const Tn = (r, e) => e.reduceScreen((t, n) => n.key === r ? t + 1 : t, 0) === 1, pi = z("key").typed("string").required.hinted("Unique component key").calculable(!1).validated(Tn, { code: "unique_key", message: "The key must be unique!" }).build("key"), Vn = z("htmlAttributes"), kn = z("validation"), yr = D("string").typed("string").localize, Dn = D("boolean").typed("boolean"), fi = D("number").typed("number"), Fn = D("size").typed("string"), mi = D("date").typed("date"), gi = D("array").array, yi = D("color").typed("string"), vi = z("tooltipType").typed("string"), _ = z("size").setup({ calculable: !1 }), Rt = z("color").setup({ calculable: !1 }), wi = D("string").calculable(!0).build("className"), Lt = z("event").setup({ annotationType: "Event" }), xn = En("node").setup({ annotationType: "Container" }), ze = D("oneOf").oneOf.bind(D("oneOf")), bi = D("someOf").someOf.bind(D("someOf")), An = z("tooltipProps"), On = z("renderWhen").typed("boolean"), Ze = {
  width: _.setup({ default: "100%" }),
  height: _,
  marginTop: _,
  marginRight: _,
  marginBottom: _,
  marginLeft: _,
  color: Rt,
  backgroundColor: Rt
}, vr = {
  flexDirection: ze("column", "row", "column-reverse", "row-reverse"),
  gap: Fn,
  alignItems: ze("start", "center", "baseline", "end", "stretch"),
  justifyContent: ze(
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right"
  ),
  flexWrap: ze("wrap", "nowrap", "wrap-reverse")
}, G = (async function() {
}).constructor;
class V {
  /**
   * Creates a new instance of the ActionDefinition class.
   * @param func the function of an action.
   * @param body the source code of the Action.
   * @param params the parameters of the Action.
   */
  constructor(e, t, n = {}) {
    this.func = e, this.body = t, this.params = n;
  }
  /**
   * Creates an action from the function.
   * @param func the function of an action.
   * @param params the parameters of the Action.
   * @returns the new instance of the ActionDefinition class.
   */
  static functionalAction(e, t = {}) {
    return new V(e, void 0, t);
  }
  /**
   * Creates an action from the source code.
   * @param body the source code of the Action.
   * @param params the parameters of the Action.
   * @returns the new instance of the ActionDefinition class.
   */
  static sourceAction(e, t = {}) {
    const n = G("e, args", e);
    return new V(n, e, t);
  }
  /**
   * Correctly creates the {@link ActionDefinition} from deserialized data.
   * @param value the deserialized data.
   * @returns the ActionDefinition instance.
   */
  static createFromObject(e) {
    return V.sourceAction(e.body, e.params);
  }
}
const Nn = (r) => {
  const e = {};
  return r && Object.keys(r).forEach((t) => {
    const n = r[t];
    e[t] = V.createFromObject(n);
  }), e;
}, St = "onDidMount", Pt = "onWillUnmount";
function jn(r) {
  return new Proxy(r, {
    get(e, t) {
      return t === "toJSON" ? () => e.data : e.data[t];
    },
    set(e, t, n) {
      var o;
      return (o = e.fields.get(t)) == null || o.setValue(n), !0;
    }
  });
}
var ve, we, Ue;
class ut {
  /**
   * Creates arguments for the event handler.
   * @param type the event type.
   * @param sender the component that triggered the event.
   * @param store the form viewer settings.
   * @param args the event arguments.
   * @param state the {@link ComponentState} instance.
   */
  constructor(e, t, n, o, s) {
    y(this, ve, void 0);
    /**
     * The component properties that were used to render the sender component.
     */
    a(this, "renderedProps");
    /**
     * Sets user-defined properties for the React component that override other properties of the component.
     * @param props the component properties.
     */
    a(this, "setUserDefinedProps", (e) => {
      this.sender.userDefinedProps = e;
    });
    y(this, we, (e) => !!(e && e.target && e.type && e.preventDefault));
    y(this, Ue, (e) => !u(this, we).call(this, e));
    this.type = e, this.sender = t, this.store = n, this.args = o, this.renderedProps = s.get, x(this, ve, jn(this.store.formData));
  }
  /**
   * @returns the event handled by the event handler.
   */
  get event() {
    return this.args.find(u(this, we));
  }
  /**
   * @returns the first element of the event argument array, which is treated as a value.
   */
  get value() {
    return this.args.filter((e) => typeof e < "u").find(u(this, Ue));
  }
  /**
   * @returns the object for reading and changing form data.
   */
  get data() {
    return u(this, ve);
  }
}
ve = new WeakMap(), we = new WeakMap(), Ue = new WeakMap();
const Ci = `
/**
 * Arguments passed to the event handler.
 */
declare class ActionEventArgs {

  /**
   * The event type.
   */
  readonly type: string

  /**
   * The component that triggered the event.
   */
  readonly sender: ComponentData
  
  /**
   * The component properties that were used to render the sender component.
   */
  readonly renderedProps: Record<string, any>
  
  /**
   * Sets current props of component.
   */
  readonly setUserDefinedProps: (props: Record<string, any>) => void

  /**
   * The form viewer settings.
   */
  readonly store: Store

  /**
   * The event arguments.
   */
  readonly args: any[]

  /**
   * @returns the event handled by the event handler.
   */
  get event(): SyntheticEvent | null

  /**
   * @returns the first element of the event argument array, which is treated as a value.
   */
  get value(): any
  
  /**
   * @returns the object for reading and changing form data.
   */
  get data(): Record<string, unknown>
}
`, Ye = [
  An.build("tooltipProps"),
  On.build("renderWhen"),
  Vn.build("htmlAttributes"),
  kn.build("validation"),
  Lt.build(St),
  Lt.build(Pt)
];
class ce {
  /**
   * Creates the component metadata for the form builder.
   * @param type the component type name.
   * @param properties the component's properties metadata.
   * @param css the component's CSS metadata.
   * @param wrapperCss the component's wrapper CSS metadata.
   * @param modules common metadata for the component.
   * @param customPreview the custom ReactNode to be drawn on the toolbar.
   * @param valuedAn the metadata for the component value.
   * @param kind the component kind.
   */
  constructor(e, t, n, o, s, i, c, l = "component") {
    this.type = e, this.properties = t, this.css = n, this.wrapperCss = o, this.modules = s, this.customPreview = i, this.valuedAn = c, this.kind = l;
  }
}
const It = Symbol("key");
function Wt(r, e, t = {}) {
  return wr("autorun", r, e, t);
}
function L(r, e = {}) {
  return wr("observable", r, void 0, e);
}
function wr(r, e, t, n = {}) {
  const o = Object.keys(n).map((s) => `${s}=${n[s]}`).join("_");
  return `${r}_${e}_${t ? `${t}_` : ""}${o}`;
}
let Bt = 0;
function br(r) {
  r[It] || (++Bt, r[It] = `actionData_${Bt}`);
}
function Cr(r) {
  var t;
  const e = r.events;
  e && Object.values(e).forEach((n) => n.forEach(br)), (t = r.children) == null || t.forEach(Cr);
}
function Qe(r) {
  return (r == null ? void 0 : r.computeType) === "function";
}
function Sr(r) {
  return (r == null ? void 0 : r.computeType) === "localization";
}
class $ {
  /**
   * Creates the component settings.
   * @param key the React component key.
   * @param type the component type of the form viewer.
   */
  constructor(e, t) {
    /**
     * The React component key.
     */
    a(this, "key", "");
    /**
     * The component type of the form viewer.
     */
    a(this, "type", "");
    /**
     * The component properties.
     */
    a(this, "props", {});
    /**
     * The component CSS styles.
     */
    a(this, "css");
    /**
     * The component wrapper CSS styles.
     */
    a(this, "wrapperCss");
    /**
     * The set of event handlers.
     */
    a(this, "events");
    /**
     * The array of child components.
     */
    a(this, "children");
    /**
     * The component value validation settings.
     */
    a(this, "schema");
    /**
     * The set of arbitrary HTML attributes added to the component.
     */
    a(this, "htmlAttributes");
    /**
     * The tooltip settings.
     */
    a(this, "tooltipProps");
    /**
     * The name of the occupied component property in the parent component.
     */
    a(this, "slot");
    /**
     * The condition for binding a child element to a parent element.
     */
    a(this, "slotCondition");
    /**
     * The expression or function to conditionally render a component.
     */
    a(this, "renderWhen");
    this.key = e, this.type = t, U(this, void 0, { name: L("ComponentStore", { key: e }) });
  }
  /**
   * Correctly creates the {@link ComponentStore} from deserialized data.
   * @param value the deserialized data.
   * @returns the component Store.
   */
  static createFromObject(e) {
    const t = Y(new $(e.key, e.type), e);
    return Cr(t), t;
  }
  /**
   * Adds the event handler for component.
   * @param store the target {@link ComponentStore}.
   * @param eventName the target event name.
   * @param data the {@link ActionData}.
   */
  static addEventHandler(e, t, n) {
    var o;
    br(n), e.events ?? (e.events = {}), (o = e.events)[t] ?? (o[t] = []), e.events[t].push(n);
  }
}
function zn(r) {
  return typeof r == "string";
}
function Mn(r) {
  return typeof r == "number";
}
function Et(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function $n(r) {
  return typeof r == "object";
}
function P(r, e) {
  const t = or(e);
  return t.displayName = r, t;
}
const Si = new $("", ""), C = (r) => r.replace(new RegExp(" ", "g"), "_"), Rn = (r) => typeof r == "string" || typeof r == "number" || r instanceof Date ? !0 : typeof (r == null ? void 0 : r.value) < "u", Ln = (r) => {
  const e = {};
  for (const [t, n] of Object.entries(r))
    Rn(n) && (e[C(t)] = n);
  return e;
};
function xe(r) {
  const e = an(null);
  e.displayName = r;
  const t = In(e), n = Wn(e);
  return [t, n, e];
}
function In(r) {
  return () => {
    const e = ar(r);
    if (!e)
      throw new Error(`The context ${r.displayName} didn't found!`);
    return e;
  };
}
function Wn(r) {
  return r.Provider;
}
class Kt {
  constructor() {
    a(this, "handlers", []);
  }
  /**
   * Adds a handler to the list of subscribers.
   * @param handler the handler function to be added.
   */
  subscribe(e) {
    this.handlers.push(e);
  }
  /**
   * Removes the specified event handler from the list of handlers.
   * @param handler the event handler to remove.
   */
  unsubscribe(e) {
    this.handlers = this.handlers.filter((t) => t !== e);
  }
  /**
   * Returns true if the object has subscribers, false otherwise.
   * @returns true if the object has handlers registered for events, otherwise returns false.
   */
  get isSubscribed() {
    return this.handlers.length > 0;
  }
  /**
   * Invokes the event by calling all registered event handlers.
   * @param sender the sender of the event.
   * @param eventArgs the event arguments.
   */
  invoke(e, t) {
    this.handlers.slice().forEach((n) => n(e, t));
  }
  /**
   * Dispose method to release all handlers.
   */
  dispose() {
    this.handlers = [];
  }
}
function dt(r, e) {
  var t;
  e(r), (t = r.children) == null || t.forEach((n) => dt(n, e));
}
function Bn(r, e, t = 0) {
  if (r === e)
    return t;
  if (r.children) {
    t = t + 1;
    for (const n of r.children) {
      const o = Bn(n, e, t);
      if (o)
        return o;
    }
  }
}
let Kn = 0;
function Hn(r) {
  return `${r}_${++Kn}`;
}
class Un {
  /**
   * Constructs a new instance of the ComponentKeyChangedEventArgs class.
   * @param oldKey the old key.
   * @param newKey the new key.
   */
  constructor(e, t) {
    this.oldKey = e, this.newKey = t;
  }
}
class Jn {
  constructor() {
    /**
     * An event that occurs after a component key change.
     */
    a(this, "onAfterKeyChanged", new Kt());
    /**
     * An event that occurs before a component is removed from the component tree.
     */
    a(this, "onBeforeDelete", new Kt());
  }
  /**
   * Unsubscribe from all events.
   */
  dispose() {
    this.onAfterKeyChanged.dispose(), this.onBeforeDelete.dispose();
  }
}
var be, A, W;
class qn {
  /**
   * Constructor.
   * @param componentStore the component settings.
   * @param model the component metadata for the form viewer.
   * @param field the field with the form data.
   * @param childFactory the factory function that creates {@link ComponentData} instance.
   * @param formValidators the array of functions that validate the form data.
   */
  constructor(e, t, n, o, s) {
    y(this, be, void 0);
    y(this, A, void 0);
    y(this, W, void 0);
    a(this, "_state", {});
    /**
     * The unique identifier.
     */
    a(this, "id");
    /**
     * The component settings.
     */
    a(this, "store");
    /**
     * The component metadata.
     */
    a(this, "model");
    /**
     * The field with the form data.
     */
    a(this, "field");
    /**
     * The parent node in the component data tree.
     */
    a(this, "parent");
    /**
     * The child nodes in the component data tree.
     */
    a(this, "children", []);
    /**
     * User defined properties of the React component.
     */
    a(this, "userDefinedProps");
    /**
     * If true, then validation is in progress.
     */
    a(this, "validating", !1);
    var c;
    this.store = e, this.model = t, this.field = n, this.id = Hn(this.model.type), x(this, W, s), (c = e.children) == null || c.forEach((l) => {
      o(l).setParent(this);
    }), U(this, void 0, { name: L("ComponentData", { key: e.key }) }), x(this, be, [(() => nn(() => this.key, (l, d) => {
      this.invokeOnAfterKeyChanged(this, new Un(d, l));
    }))()]);
  }
  /**
   * Sets the new parent for this node.
   * @param newParent the new parent.
   */
  setParent(e) {
    var t;
    (t = this.parent) == null || t.removeChild(this), e.addChild(this), this.parent = e;
  }
  /**
   * Inserts the given node after this node.
   * @param inserted the node to insert.
   */
  insertAfterMe(e) {
    this.insert(e, "after");
  }
  /**
   * Inserts the given node before this node.
   * @param inserted the node to insert.
   */
  insertBeforeMe(e) {
    this.insert(e, "before");
  }
  /**
   * @inheritDoc
   */
  get state() {
    return this._state;
  }
  /**
   * @returns the key of this node (same as the key of the ComponentStore).
   */
  get key() {
    return this.store.key;
  }
  /**
   * @returns the ComponentDataEvents object.
   */
  get events() {
    return u(this, A) || x(this, A, new Jn()), u(this, A);
  }
  /**
   * Find the node with the given key.
   * @param key the key to find.
   * @returns the node or undefined if not found.
   */
  findByKey(e) {
    if (this.key === e)
      return this;
    for (let t = 0; t < this.children.length; t++) {
      const o = this.children[t].findByKey(e);
      if (o)
        return o;
    }
  }
  /**
   * Assigns unique keys to the items in the tree.
   * @param root the root of the tree to unify keys. Defaults to the root of this tree.
   * @returns the map of new keys to old keys.
   */
  unifyKeys(e) {
    const t = /* @__PURE__ */ new Map(), n = [];
    return dt(e, ({ key: o }) => {
      n.push(o);
    }), dt(this, (o) => {
      let s = 1;
      const i = () => `${o.store.type} ${s}`;
      for (; n.includes(i()); )
        s++;
      const c = i();
      t.set(c, o.key), o.store.key = c, n.push(c);
    }), t;
  }
  /**
   * @returns all the fields in the tree as a map. Starts from this node.
   */
  get fields() {
    return this.collectAllFields(/* @__PURE__ */ new Map());
  }
  /**
   * Deletes this node from the tree.
   */
  delete() {
    var t;
    (t = this.parent) == null || t.removeChild(this);
    const e = this.collectAllNodesAsArray([]);
    this.invokeOnBeforeDeleted(e), this.disposeNodes(e);
  }
  /**
   * @inheritDoc
   */
  get data() {
    const e = {};
    for (const [t, n] of this.fields)
      if (n.storeDataInParentForm) {
        const o = n.value || {};
        Object.keys(o).forEach((s) => e[s] = o[s]);
      } else
        e[t] = n.value;
    return e;
  }
  /**
   * @returns all the form data that is of the FluentVariable type.
   * Additionally, the keys of the returned object are converted to the snake case.
   */
  get fluentData() {
    const e = Zn(this);
    return Ln(e);
  }
  /**
   * @inheritDoc
   */
  get errors() {
    const e = {};
    for (const [t, n] of this.fields) {
      n.error && (e[t] = n.error);
      const o = n.errors;
      o && n.storeDataInParentForm && Object.keys(o).forEach((s) => e[s] = o[s]), o && !n.storeDataInParentForm && Object.keys(o).length > 0 && (e[t] = o);
    }
    return e;
  }
  /**
   * @inheritDoc
   */
  get hasErrors() {
    return Object.keys(this.errors).length > 0;
  }
  /**
   * @inheritDoc
   */
  setAllErrors(e) {
    this.fields.forEach((t) => t.error = e);
  }
  /**
   * @inheritDoc
   */
  async validate() {
    this.validating = !0;
    try {
      if (await Promise.allSettled([...this.fields.values()].map((o) => o.validate())), !u(this, W))
        return;
      const e = this.fields, t = u(this, W).map((o) => o(this.data));
      (await Promise.allSettled(t)).map((o) => {
        if (o.status === "rejected") {
          console.error(o.reason);
          return;
        }
        return o.value;
      }).forEach((o) => {
        o && e.forEach((s, i) => {
          if (o[i])
            return s.setError(o[i]);
          if (s.storeDataInParentForm)
            return s.setError(o);
        });
      });
    } finally {
      this.validating = !1;
    }
  }
  /**
   * @inheritDoc
   */
  async getValidationResult() {
    let e;
    const t = async ([s, i]) => {
      const c = await i.getValidationResult();
      if (Nt(c))
        return;
      e ?? (e = {});
      let l = e;
      if (!i.storeDataInParentForm) {
        const d = Gr(c) ? [] : {};
        e[s] ?? (e[s] = d), l = e[s];
      }
      jt(l, c);
    }, n = [...this.fields.entries()];
    if (await Promise.allSettled(n.map(t)), !u(this, W))
      return e;
    const o = async (s) => {
      const i = await s(this.data);
      Nt(i) || (e ?? (e = {}), jt(e, i));
    };
    return await Promise.allSettled(u(this, W).map(o)), e;
  }
  /**
   * @inheritDoc
   */
  get isValidating() {
    return this.validating;
  }
  /**
   * @inheritDoc
   */
  reset() {
    this.fields.forEach((e) => e.reset());
  }
  /**
   * @inheritDoc
   */
  clear() {
    this.fields.forEach((e) => e.clear());
  }
  /**
   * Dispose method that releases resources used by the object.
   * It disposes the field and all the children objects.
   */
  dispose() {
    const e = this.collectAllNodesAsArray([]);
    this.disposeNodes(e);
  }
  /**
   * @returns true if it has no parent {@link ComponentData}, false otherwise.
   */
  get isRoot() {
    return !this.parent;
  }
  insert(e, t) {
    var l, d;
    const n = t === "before" ? 0 : 1;
    if (!this.parent)
      throw new Error(`Cannot insert without parent. Key = ${this.key}`);
    (l = e.parent) == null || l.removeChild(e), e.parent = this.parent;
    const o = this.parent.children, s = o.indexOf(this);
    if (s < 0)
      throw new Error(`Cannot insert not existing element into ComponentData. Key = ${this.key}`);
    o.splice(s + n, 0, e), (d = this.parent.store).children ?? (d.children = []);
    const i = this.parent.store.children, c = i.indexOf(this.store);
    if (c < 0)
      throw new Error(`Cannot insert not existing element into ComponentStore. Key = ${this.key}`);
    i.splice(c + n, 0, e.store), e.store.slot = this.store.slot, e.store.slotCondition = this.store.slotCondition;
  }
  /**
   * Disposes the nodes by calling the disposers, disposing the field,
   * and resetting the parent and children properties to undefined and an empty array, respectively.
   * @param nodes the array of ComponentData objects representing the nodes to dispose.
   */
  disposeNodes(e) {
    e.forEach((t) => {
      var n, o;
      (n = u(t, A)) == null || n.dispose(), u(t, be).forEach((s) => s()), (o = t.field) == null || o.dispose(), t.parent = void 0, t.children = [];
    });
  }
  collectAllNodesAsArray(e) {
    e.push(this);
    for (let t = 0; t < this.children.length; t++)
      this.children[t].collectAllNodesAsArray(e);
    return e;
  }
  collectAllFields(e) {
    this.field && e.set(this.key, this.field);
    for (let t = 0; t < this.children.length; t++)
      this.children[t].collectAllFields(e);
    return e;
  }
  addChild(e) {
    var t;
    this.children.indexOf(e) < 0 && this.children.push(e), (t = this.store).children ?? (t.children = []), this.store.children.indexOf(e.store) < 0 && this.store.children.push(e.store);
  }
  removeChild(e) {
    var o;
    const t = this.children.indexOf(e);
    t > -1 && this.children.splice(t, 1), (o = this.store).children ?? (o.children = []);
    const n = this.store.children.indexOf(e.store);
    n > -1 && this.store.children.splice(n, 1);
  }
  invokeOnAfterKeyChanged(e, t) {
    var n, o;
    (n = u(this, A)) != null && n.onAfterKeyChanged.isSubscribed && u(this, A).onAfterKeyChanged.invoke(e, t), (o = this.parent) == null || o.invokeOnAfterKeyChanged(e, t);
  }
  invokeOnBeforeDeleted(e) {
    var t, n;
    (t = u(this, A)) != null && t.onBeforeDelete.isSubscribed && e.forEach((o) => {
      var s;
      return (s = u(this, A)) == null ? void 0 : s.onBeforeDelete.invoke(o, void 0);
    }), (n = this.parent) == null || n.invokeOnBeforeDeleted(e);
  }
}
be = new WeakMap(), A = new WeakMap(), W = new WeakMap();
const Zn = (r) => {
  const e = {};
  return r.fields.forEach((t, n) => {
    e[n] = r.data[n] ?? "";
  }), e;
}, [
  /**
   * @returns the instance of the ComponentData of the currently rendered component.
   */
  X,
  /**
   * Context provider for the useComponentData hook. **Internal use only.**
   */
  Pr
] = xe("ComponentDataContext"), [
  /**
   * **Internal use only.**
   */
  F,
  /**
   * **Internal use only.**
   */
  Tt,
  /**
   * **Internal use only.**
   */
  Yn
] = xe("StoreContext"), [
  /**
   * **Internal use only.**
   */
  q,
  /**
   * **Internal use only.**
   */
  Er
] = xe("FormViewerPropsContext");
function Ae(r, e = {}) {
  return Xr(r, (t, n, o) => {
    var s;
    return t.push(((s = n == null ? void 0 : n.setup(e)) == null ? void 0 : s.build(o)) ?? yr.setup(e).build(o)), t;
  }, []);
}
function Ie(r) {
  return Ae(r, { annotationType: "Style", calculable: !1 });
}
function Qn(r) {
  const e = me(!1), [t, n] = bt(r);
  k(() => (e.current = !0, () => {
    e.current = !1;
  }), []);
  const o = K((s) => {
    e.current && n(s);
  }, []);
  return ae(() => [t, o], [t, o]);
}
const Gn = /* @__PURE__ */ new Date(1718971010758), Ht = ":", Ut = "-", Xn = `MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEJDKWHzXT9YZw7WDJy4wr/VMXBf+/afNB
  ppCLv1zZFVUQEmDRPhGC5nKux3WQcrtfl18iNFfISjcqN5vplR/kcAvIJd07tacn
  y1l39NGbMLIoPVzPY6GXTNzQpxRbGn99`;
function Tr(r) {
  const e = window.atob(r), t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t.buffer;
}
function _n(r) {
  return window.crypto.subtle.importKey(
    "spki",
    Tr(r),
    {
      name: "ECDSA",
      namedCurve: "P-384"
    },
    !0,
    ["verify"]
  );
}
async function eo(r, e, t) {
  if (!window.crypto.subtle)
    return;
  const n = await _n(t), o = new TextEncoder().encode(r);
  return await window.crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-384" }
    },
    n,
    e,
    o
  );
}
function to(r, e) {
  const { licenseEndDate: t, restrictions: n, companyName: o } = JSON.parse(e) ?? {};
  if (r !== o)
    return !1;
  const s = t.split(".");
  if (s.length !== 3)
    return !1;
  const i = `${s[2]}-${s[0]}-${s[1]}`, c = new Date(i), l = /* @__PURE__ */ new Date();
  return n.StrictCheck === !0 && c < l ? !1 : c > Gn;
}
async function ro(r) {
  if (r)
    try {
      let e = r.indexOf(Ut);
      if (e === -1)
        return !1;
      const t = r.slice(0, e), n = r.slice(e + Ut.length);
      if (e = n.indexOf(Ht), e === -1)
        return !1;
      const o = window.atob(n.slice(0, e)), s = Tr(n.slice(e + Ht.length));
      return await eo(o, s, Xn) ? to(t, o) : !1;
    } catch {
      return !1;
    }
}
const no = () => {
  const { licenseKey: r } = q(), [e, t] = Qn(!0);
  return k(() => {
    ro(r).then((n) => {
      t(!!n);
    });
  }, [r, t]), /* @__PURE__ */ h("div", { style: { display: 'none'}, children: !e && /* @__PURE__ */ h(oo, { children: /* @__PURE__ */ De(so, { children: [
    "This is a trial version of the product. To purchase a license, go to ",
    /* @__PURE__ */ h(
      "a",
      {
        href: "https://formengine.io/pricing",
        children: "https://formengine.io/pricing"
      }
    )
  ] }) }) });
}, oo = R.div`
  display: flex;
  position: relative;
  background-color: #72c7ff30;
  border-radius: 6px;
  padding: 10px;
  gap: 10px;
`, so = R.label`
  flex: 1;
`, Jt = {
  LTR: $t({
    key: Q.LTR
  }),
  RTL: $t({
    key: Q.RTL,
    stylisPlugins: [dn],
    prepend: !0
  })
}, io = "optimajet-formviewer", ao = (r) => {
  const e = F(), t = r.language ?? e.displayedLanguage;
  k(() => {
    e.formViewerPropsStore.view.getCssLoaders(t.bidi).forEach((s) => {
      s().catch((i) => console.error(i));
    });
  }, [t, e.formViewerPropsStore.view]);
  const n = t.bidi == Q.RTL ? Jt.RTL : Jt.LTR;
  return /* @__PURE__ */ h(lo, { dir: t.bidi, lang: t.fullCode, className: io, children: /* @__PURE__ */ h(un, { value: n, children: Vr(e.formViewerPropsStore.view.viewerWrappers, t, r.children) }) });
}, co = P("ViewerLocalizationProvider", ao), lo = R.div`
  display: flex;
  width: 100%;
  height: 100%;
`, Vr = ([r, ...e], t, n) => r ? /* @__PURE__ */ h(r, { language: t, children: Vr(e, t, n) }) : n, uo = ({ children: r }) => {
  const [e] = bt(window.onerror);
  return k(() => (window.onerror = (t) => {
    if ((t == null ? void 0 : t.toString().search("ResizeObserver")) !== -1) {
      const n = document.getElementById(
        "webpack-dev-server-client-overlay-div"
      ), o = document.getElementById(
        "webpack-dev-server-client-overlay"
      );
      return o && o.setAttribute("style", "display: none"), n && n.setAttribute("style", "display: none"), !0;
    }
    return !1;
  }, () => {
    window.onerror = e;
  }), [e]), /* @__PURE__ */ h(vt, { children: r });
};
class fe {
  /**
   * Creates the event stream of the form viewer.
   * @param stream the set of observable events.
   */
  constructor(e) {
    this.stream = e;
  }
  /**
   * Returns the event stream filtered by the specified predicate function.
   * @param predicate the predicate function.
   * @returns the event stream filtered by the specified predicate function.
   */
  filter(e) {
    const t = this.stream.pipe(pe(e));
    return new fe(t);
  }
  /**
   * Returns the event stream filtered by the specified sender keys.
   * @param keys the sender key array.
   * @returns the event stream filtered by the specified sender keys.
   */
  keys(...e) {
    const t = this.stream.pipe(pe((n) => e.includes(n.sender.key)));
    return new fe(t);
  }
  /**
   * Returns the event stream filtered by the specified event types.
   * @param types the array of event types.
   * @returns the event stream filtered by the specified event types.
   */
  types(...e) {
    const t = this.stream.pipe(pe((n) => e.includes(n.type)));
    return new fe(t);
  }
  /**
   * Adds the specified observer to the stream of observed events.
   * @param observerOrNext the observer.
   * @returns the unsubscribe function.
   */
  listen(e) {
    const t = this.stream.subscribe(e);
    return () => t.unsubscribe();
  }
}
const [
  /**
   * **Internal use only.**
   */
  ho,
  /**
   * **Internal use only.**
   */
  po
] = xe("ComponentTreeContext");
class j {
  /**
   * Constructor.
   * @param error the error.
   * @param result the result.
   * @param exceptions the exceptions.
   */
  constructor(e = !1, t, n) {
    this.error = e, this.result = t, this.exceptions = n;
  }
  /**
   * Creates a new instance of the CalculableResult class with a successful result.
   * @param result the calculable result.
   * @returns the new instance of CalculableResult class.
   */
  static success(e) {
    return new j(!1, e);
  }
  /**
   * Creates a new instance of CalculableResult class with an error.
   * @param exceptions the exception array.
   * @returns the new instance of CalculableResult class.
   */
  static error(e) {
    return new j(!0, void 0, e);
  }
}
const qt = /* @__PURE__ */ new Map(), fo = (r) => {
  const e = qt.get(r);
  if (e)
    return e;
  const t = new Function("form", r);
  return qt.set(r, t), t;
}, kr = (r, e) => {
  try {
    const n = fo(r)(e);
    return j.success(n);
  } catch (t) {
    return j.error([
      t,
      {
        name: "Function source",
        message: r
      }
    ]);
  }
}, Vt = (r, e) => kr(r.fnSource || "", e), mo = (r, e) => {
  if (Qe(r))
    return Vt(r, e).result;
  const t = r.value || "";
  return kr(`return ${t}`, e).result;
}, go = (r, e) => {
  const t = {};
  return Object.keys(r.props).forEach((n) => {
    const o = r.props[n];
    if (o) {
      if (Qe(o)) {
        const { result: s, error: i, exceptions: c } = Vt(o, e);
        if (i) {
          const l = `Error in the calculable field '${n}' of the '${r.key}' component `;
          console.warn(l, c);
          return;
        }
        t[n] = s;
        return;
      }
      _r(o.value) || (t[n] = o.value);
    }
  }), t;
}, yo = (r) => {
  var e;
  return (e = r.htmlAttributes) == null ? void 0 : e.reduce((t, { name: n, value: o }) => {
    try {
      t[n] = JSON.parse(o);
    } catch {
      t[n] = o;
    }
    return t;
  }, {});
}, vo = (r, e, t) => {
  const n = {}, o = (i) => {
    var c, l;
    return (l = (c = r.store.events) == null ? void 0 : c[i]) == null ? void 0 : l.length;
  }, s = new Set(en(r.store.events).filter(o));
  return s.add("onChange").add("onBlur"), s.delete(St), s.delete(Pt), s.forEach((i) => n[i] = (...c) => e.eventSubject.next(new ut(i, r, e, c, t))), n;
};
class Dr {
  /**
   * Creates an instance that calculates the properties of the form viewer component.
   * @param data the data needed to display the component.
   * @param store the form viewer settings.
   * @param localizer the function to localize the properties of a component, returns a Record with localized properties.
   * @param computeChildren the function that calculates all child properties of a component.
   */
  constructor(e, t, n, o) {
    this.data = e, this.store = t, this.localizer = n, this.computeChildren = o, U(this, void 0, { name: L("ComponentState", { key: e.key }) });
  }
  /**
   * @returns combined in order of priority component properties.
   */
  get get() {
    const e = this.propsWithoutChildren;
    return Object.assign({}, e, this.className, this.children(e));
  }
  /**
   * @returns the combined properties of the components in priority order, excluding child components.
   */
  get propsWithoutChildren() {
    return Object.assign(
      { key: this.data.store.key },
      this.data.model.defaultProps,
      this.calculatedProps,
      this.localizedProps,
      this.value,
      this.events,
      this.htmlAttributes,
      this.data.userDefinedProps
    );
  }
  /**
   * @returns the component's field value data, if the component can have a field value.
   */
  get value() {
    if (this.data.field)
      return { [this.data.field.valued]: this.data.field.value };
  }
  /**
   * @returns the values for all properties of the component, calculates the values of the calculated properties.
   */
  get calculatedProps() {
    return go(this.data.store, this.store.form.componentTree);
  }
  /**
   * @returns component localized properties.
   */
  get localizedProps() {
    return this.localizer(this.data.store);
  }
  /**
   * @returns the component event handlers that send events to the event bus.
   */
  get events() {
    return vo(this.data, this.store, this);
  }
  /**
   * Calculates and returns className property.
   * @returns the Record that contains the className property for the component.
   */
  get className() {
    return { className: wt(
      this.propsWithoutChildren.className,
      this.getClassNameFromCssPart("css")
    ) };
  }
  /**
   * Calculates and returns wrapper className property.
   * @returns the Record that contains the className property for the wrapper of component.
   */
  get wrapperClassName() {
    return this.getClassNameFromCssPart("wrapperCss");
  }
  /**
   * @returns all arbitrary HTML attributes of the component.
   */
  get htmlAttributes() {
    return yo(this.data.store);
  }
  /**
   * Calculates and returns all child components.
   * @param props the React component properties.
   * @returns the Record that contains the child components of a component.
   */
  children(e) {
    return this.computeChildren(this.data, e);
  }
  getClassNameFromCssPart(e) {
    var c, l, d, p, g, w, Oe, Ne, je, le, Z, ue;
    const { model: t, store: n } = this.data, { viewMode: o } = this.store, s = Y(
      {},
      (l = (c = t[e]) == null ? void 0 : c.any) == null ? void 0 : l.object,
      (p = (d = n[e]) == null ? void 0 : d.any) == null ? void 0 : p.object
    ), i = Y(
      {},
      (w = (g = t[e]) == null ? void 0 : g[o]) == null ? void 0 : w.object,
      (Ne = (Oe = n[e]) == null ? void 0 : Oe[o]) == null ? void 0 : Ne.object
    );
    return nr`
      && {
        ${s}
        ${i}
        ${(le = (je = n[e]) == null ? void 0 : je.any) == null ? void 0 : le.string}
        ${(ue = (Z = n[e]) == null ? void 0 : Z[o]) == null ? void 0 : ue.string}
      }
    `;
  }
}
function Fr(r, e) {
  if (!r.renderWhen)
    return !0;
  if (!Qe(r.renderWhen)) {
    const { value: t } = r.renderWhen;
    if (typeof t == "string" && t.trim() === "")
      return !0;
  }
  return mo(r.renderWhen, e) === !0;
}
const wo = "children";
function bo(r, e, t, n) {
  const o = r.children, s = t, i = {}, c = mn(o, (p) => p.store.slot || wo), l = (p) => So(p.store, n), d = (p) => Fr(p.store, e);
  for (const [p, g] of Object.entries(c)) {
    const w = g.filter(l).filter(d);
    w.length && (i[p] = /* @__PURE__ */ h(s, { data: w }));
  }
  return i;
}
const Zt = /* @__PURE__ */ new Map();
function Co(r) {
  const e = Zt.get(r);
  if (e)
    return e;
  const t = new Function("parentProps", r);
  return Zt.set(r, t), t;
}
function So(r, e) {
  var o;
  const t = (o = r.slotCondition) == null ? void 0 : o.trim();
  if (!t)
    return !0;
  const n = Co(t);
  try {
    return n(e);
  } catch (s) {
    return console.warn(s), !1;
  }
}
const Po = () => F().form.tooltipType, xr = (r, e, t, n) => {
  const o = F();
  return ae(
    () => Eo(o, r, e, t, n),
    [o, r, e, t, n]
  );
}, Eo = (r, e, t, n, o) => {
  const s = new $(e, t.type);
  s.props = n;
  const i = r.createComponentData(s, !1, t);
  return new Dr(i, r, o, () => ({}));
};
function To() {
  const r = q(), e = Po();
  if (e)
    return r.view.get(e);
}
const Vo = ({ children: r }) => {
  const e = To();
  return e ? /* @__PURE__ */ h(Fo, { tooltipDefinition: e, children: r }) : /* @__PURE__ */ h(vt, { children: r });
}, ko = P("TooltipWrapper", Vo), Do = ({ tooltipDefinition: r, children: e }) => {
  const t = F(), n = X(), o = n.store, s = K((c) => t.localizeComponent("tooltip", c), [t]), i = xr(n.key, r, o.tooltipProps, s);
  return cr(r.component, i.get, e);
}, Fo = P("ComponentTooltip", Do), xo = () => {
  const r = F(), e = r.form.errorType, t = r.formViewerPropsStore.view, n = q();
  return ae(() => {
    const o = n.errorWrapper ? new J(n.errorWrapper) : yt;
    return (e ? t.find(e) : o) ?? yt;
  }, [e, t, n.errorWrapper]);
}, Yt = (r, e, t) => {
  const { eventSubject: n } = F(), o = me(t);
  o.current = t, k(() => {
    const s = n.pipe(pe((i) => i.type === e && i.sender.key === r)).subscribe((i) => {
      o.current(i);
    });
    return () => s.unsubscribe();
  }, [n, r, e]);
}, Ao = ({ children: r }) => {
  var l;
  const e = X(), t = F(), n = q(), o = xo(), s = K(() => ({}), []), i = xr(e.key, o, t.form.errorProps, s);
  if (Yt(e.key, "onChange", (d) => {
    var p;
    return (p = e.field) == null ? void 0 : p.setValue(d.value);
  }), Yt(e.key, "onBlur", (d) => {
    var p;
    return (p = e.field) == null ? void 0 : p.setTouched();
  }), n.erroneous)
    return /* @__PURE__ */ h(vt, { children: r });
  const c = { ...i.get, error: (l = e.field) == null ? void 0 : l.error };
  return cr(o.component, c, r);
}, Oo = P("Erroneous", Ao);
function Ar(r) {
  return r.message ?? `Validation failed: ${r.settings.key}`;
}
function No(r) {
  if (r)
    return r == null ? void 0 : r.map(Ar).join(" ");
}
var Ce, Se, ee, te;
const Je = class Je {
  constructor(e, t, n, o) {
    y(this, Ce, new lr());
    y(this, Se, void 0);
    y(this, ee, void 0);
    y(this, te, void 0);
    /**
     * Generates an event to perform validation.
     * @param value the validated value.
     */
    a(this, "sendValidationEvent", (e) => {
      u(this, Ce).next(e);
    });
    /**
     * Performs a validation of the value.
     * @param value the validated value.
     * @returns the Promise with the result of the validation.
     */
    a(this, "validate", (e) => {
      const t = new Promise((n) => {
        const o = u(this, ee).subscribe((s) => {
          n(s), o.unsubscribe();
        });
      });
      return this.sendValidationEvent(e), t;
    });
    /**
     * Returns the validation results without triggering an events and changing the state of the form.
     * @param value the validated value.
     * @returns the validation results.
     */
    a(this, "getValidationResult", (e) => u(this, te).call(this, e));
    /**
     * Releases allocated resources, must be used when destroying an object instance.
     */
    a(this, "dispose", () => {
      u(this, Se).forEach((e) => e.unsubscribe());
    });
    const s = o ?? No;
    x(this, te, (i) => t(i, e)), x(this, ee, u(this, Ce).pipe(
      hn(200),
      lt(u(this, te)),
      pn((i) => i),
      lt(s)
    )), x(this, Se, [
      u(this, ee).subscribe(n)
    ]);
  }
};
Ce = new WeakMap(), Se = new WeakMap(), ee = new WeakMap(), te = new WeakMap(), /**
 * Creates a DataValidator instance.
 * @param store the form viewer settings
 * @param resolver the validation function factory.
 * @param args the validation function factory arguments.
 * @param setter the callback function called to set a validation error.
 * @param localizer the function that localizes validation error messages.
 * @template T the validation function factory arguments.
 * @returns the DataValidator instance.
 */
a(Je, "create", (e, t, n, o, s) => new Je(e, t(n), o, s));
let ht = Je;
const Or = R.div`
  display: flex;
`;
function jo(r, e) {
  const t = me(e), n = me(r);
  t.current = e, n.current = r, k(() => (n.current(), () => {
    t.current();
  }), []);
}
const zo = (r) => {
  const e = F(), t = X(), n = me([]), o = K(() => {
    n.current.forEach((i) => i.unsubscribe());
  }, []), s = K(() => {
    const i = [];
    tn(t.store.events, (c, l) => {
      const d = Mo(e, c), p = e.eventSubject.pipe(
        pe((g) => g.type === l && g.sender.key === t.store.key),
        lt(d),
        fn((g, w) => (console.error(g), w))
      ).subscribe();
      i.push(p);
    }), n.current = i;
  }, [t.store.events, t.store.key, e]);
  jo(() => {
    s();
    const i = new ut(St, t, e, [], r);
    e.eventSubject.next(i);
  }, () => {
    const i = new ut(Pt, t, e, [], r);
    e.eventSubject.next(i), o();
  });
};
function Mo(r, e) {
  const t = e.map((n) => ({
    func: r.findAction(n).func,
    args: n.args ? { ...n.args } : {}
  }));
  return async (n) => {
    for (const { func: o, args: s } of t) {
      const i = o(n, s);
      Et(i) && await i;
    }
  };
}
const $o = () => {
  const r = X(), { componentWrapper: e, computeChildren: t } = q(), n = F(), o = K((Z) => n.localizeComponent("component", Z), [n]), s = ho(), i = K((Z, ue) => t ? t(Z, ue) : bo(Z, n.form.componentTree, s, ue), [t, n.form.componentTree, s]), c = ae(
    () => new Dr(r, n, o, i),
    [r, n, o, i]
  );
  zo(c);
  const { key: l, ...d } = c.get, { kind: p, component: g } = r.model, w = wt(d.className, c.wrapperClassName), Oe = e ?? Or, Ne = r.store.tooltipProps ? ko : cn, je = e ?? g, le = /* @__PURE__ */ h(g, { ...d }, l);
  return p === "container" ? /* @__PURE__ */ h(je, { ...d, className: w }, l) : /* @__PURE__ */ h(Oe, { className: p === "template" ? w : c.wrapperClassName, children: p === "template" ? le : /* @__PURE__ */ h(Ne, { children: /* @__PURE__ */ h(Oo, { children: le }) }) });
}, Ro = P("ComponentViewer", $o), Lo = ({ componentData: r }) => /* @__PURE__ */ h(Pr, { value: r, children: /* @__PURE__ */ h(Ro, {}) }), Io = P("ComponentTreeItem", Lo), Wo = ({ data: r }) => /* @__PURE__ */ h(po, { value: Nr, children: r.map((e) => /* @__PURE__ */ h(Io, { componentData: e }, e.id)) }), Nr = P("ComponentTree", Wo), Bo = () => {
  const r = window.innerWidth;
  return r <= 600 ? "mobile" : r <= 900 ? "tablet" : "desktop";
};
function Ko() {
  const r = F(), e = q();
  k(() => {
    if (e.viewMode) {
      r.viewMode = e.viewMode;
      return;
    }
    const t = () => r.viewMode = Bo();
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, [e.viewMode, r]);
}
const Ho = ({ event: r }) => {
  const e = F(), t = q(), n = ae(() => [e.form.componentTree], [e.form.componentTree]);
  return k(() => {
    r == null || r(new fe(e.eventSubject));
  }, [r, e.eventSubject]), Ko(), k(() => e.loadForm(t.getForm, t.formName), [e, t.getForm, t.formName]), /* @__PURE__ */ h(Nr, { data: n });
}, Uo = P("Viewer", Ho);
function Jo(r) {
  if (!r)
    return;
  const e = {};
  return Object.entries(r).forEach(([t, n]) => {
    e[t] = n instanceof V ? n : V.functionalAction(n);
  }), e;
}
class kt {
  /**
   * Constructs a new FormViewerPropsStore from the given FormViewerProps.
   * @param formViewerProps the FormViewer props.
   * @returns the FormViewerPropsStore.
   */
  constructor(e) {
    /**
     * The metadata of the form viewer components.
     */
    a(this, "view", new ge());
    /**
     * The initial form data.
     */
    a(this, "initialData", {});
    /**
     * The set of metadata of validation rules, grouped by the type of value being validated.
     */
    a(this, "validators");
    /**
     * The set of functions that validate the form data.
     */
    a(this, "formValidators");
    /**
     * The function to localize the properties of a component.
     */
    a(this, "localizer");
    /**
     * Custom actions for the form viewer.
     */
    a(this, "actions");
    /**
     * The full language code passed in the FormViewer properties.
     */
    a(this, "propsLanguage");
    /**
     * The default error wrapper used when errorType is not specified in the form.
     */
    a(this, "errorWrapper");
    e && this.applyProps(e), ir(this, {
      view: T.ref,
      initialData: T.ref,
      validators: T.ref,
      formValidators: T.ref,
      localizer: T.ref,
      actions: T.ref,
      propsLanguage: T.ref,
      errorWrapper: T.ref
    }, { name: L("FormViewerPropsStore") });
  }
  /**
   * Applies the given FormViewerProps.
   * @param formViewerProps the properties to apply.
   */
  applyProps(e) {
    this.view = e.view, this.initialData = e.initialData ?? {}, this.validators = e.validators, this.formValidators = e.formValidators, this.localizer = e.localize, this.actions = Jo(e.actions), this.propsLanguage = e.language, this.errorWrapper = e.errorWrapper;
  }
  /**
   * Returns the clone of the FormViewerPropsStore object.
   * @returns the clone of the FormViewerPropsStore object.
   */
  clone() {
    const e = new kt();
    return e.view = this.view, e.initialData = this.initialData, e.validators = this.validators, e.formValidators = this.formValidators, e.localizer = this.localizer, e.actions = this.actions, e.propsLanguage = this.propsLanguage, e.errorWrapper = this.errorWrapper, e;
  }
}
const qo = {
  // eslint-disable-next-line no-console
  log: V.functionalAction(console.log),
  validate: V.functionalAction(async (r) => await r.store.form.componentTree.validate()),
  clear: V.functionalAction((r) => r.store.form.componentTree.clear()),
  reset: V.functionalAction((r) => r.store.form.componentTree.reset())
}, jr = "validator-", Zo = (r) => `${jr}${r}`, Pi = (r) => r.startsWith(jr), Ei = (r) => {
  const e = `${r.localizationStringId} = ${r.localization}`, t = new ur(e), n = new dr(`${r.language.fullCode}`), o = n.addResource(t);
  if (o.length > 0)
    return j.error([...o]);
  const s = n.getMessage(r.localizationStringId);
  if (typeof s > "u")
    return j.error([{ message: "Localization message not found", name: "MessageNotFound" }]);
  if (s.value === null)
    return j.error([{ message: "Localization message is null", name: "MessageIsNull" }]);
  let i = "";
  try {
    i = n.formatPattern(s.value, r.data);
  } catch (c) {
    if (c instanceof Error)
      return j.error([c]);
    throw c;
  }
  return j.success(i);
}, Yo = (r, e, t, n = "component") => {
  const o = r.componentTree, { defaultBundle: s, fluentBundle: i } = zr(r, e), c = {};
  return Object.keys(t.props).forEach((l) => {
    const d = t.props[l];
    if (!Sr(d))
      return;
    const p = C(`${t.key}_${n}_${l}`), g = i.getMessage(p) ?? (s == null ? void 0 : s.getMessage(p));
    if (!g) {
      c[l] = "[NOT LOCALIZED]";
      return;
    }
    try {
      c[l] = i.formatPattern(g.value, o.fluentData);
    } catch (w) {
      console.error(w);
    }
  }), c;
}, Qo = (r, e, t, n) => {
  const o = Zo(n), s = "message", i = C(`${t.key}_${o}_${s}`), { defaultBundle: c, fluentBundle: l } = zr(r, e), d = l.getMessage(i) ?? (c == null ? void 0 : c.getMessage(i));
  if (d)
    try {
      return l.formatPattern(d.value, r.componentTree.fluentData);
    } catch (p) {
      console.error(p);
    }
}, zr = (r, e) => {
  const t = r.defaultLanguage !== e ? r.localization.getFluentBundle(r.defaultLanguage.fullCode) : void 0, n = r.localization.getFluentBundle(e.fullCode);
  return { defaultBundle: t, fluentBundle: n };
};
class Ge {
  /**
   * Creates a localization language for the form builder.
   * @param code the language code, for example, 'en'.
   * @param dialect the dialect code, for example, 'US'.
   * @param name the name of the language, for example 'English'.
   * @param description the description of the language, for example 'American English'.
   * @param bidi the type of text layout, for example, BiDi.LTR.
   */
  constructor(e, t, n, o, s = Q.LTR) {
    this.code = e, this.dialect = t, this.name = n, this.description = o, this.bidi = s;
  }
  /**
   * @returns Full code of the Language i.e en-US, en-GB etc.
   */
  get fullCode() {
    return `${this.code}-${this.dialect}`;
  }
  /**
   * Clones an existing instance of the language.
   * @param source the cloning object.
   * @returns the object clone.
   */
  static clone(e) {
    return new Ge(e.code, e.dialect, e.name, e.description, e.bidi);
  }
}
const Mr = Or;
Mr.displayName = "Screen";
const { height: Go } = Ze, { flexDirection: Xo, gap: _o } = vr, $r = Ie({
  ...vr,
  ...Ze,
  height: Go.setup({ default: "100%" }),
  flexDirection: Xo.default("column"),
  gap: _o.default("10px")
}), es = Le($r), B = new J(
  Mr,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  es,
  void 0,
  void 0,
  void 0,
  "container"
), ts = R.h1`
  color: red;
`, Dt = ({ error: r }) => /* @__PURE__ */ h(ts, { children: (r == null ? void 0 : r.message) ?? JSON.stringify(r) });
Dt.displayName = "InternalError";
const We = new J(Dt);
function rs(r) {
  const e = new $(We.name, We.type);
  e.props.error = { value: r };
  const t = new $(B.name, B.type);
  return t.children = [e], t;
}
function ns(r) {
  const e = { error: r };
  return new J(Dt, void 0, void 0, void 0, void 0, e);
}
const Be = "Template:";
function Rr(r) {
  return Be + r;
}
function Lr(r) {
  if (r.startsWith(Be))
    return r.slice(Be.length);
  throw new Error(`Cannot determine template name from '${r}'`);
}
function Qt(r) {
  return r.startsWith(Be);
}
function f() {
  return {
    params: [],
    withParameter(e, t, n = !1, o, s) {
      return this.params.push({ key: e, type: t ?? "string", required: n, default: o, editorType: s }), this;
    },
    withValidatorFactory(e) {
      return { ...this, validatorFactory: e };
    }
  }.withParameter("message");
}
function m(r) {
  return async (e) => {
    var n;
    const t = await (r == null ? void 0 : r.safeParseAsync(e));
    return t != null && t.success ? !0 : ((n = t == null ? void 0 : t.error.issues) == null ? void 0 : n[0].message) ?? !1;
  };
}
const de = H.array(H.any()), os = {
  nonEmpty: f().withValidatorFactory(({ message: r }) => m(de.nonempty(r))),
  length: f().withParameter("length", "number", !0).withValidatorFactory(({ length: r, message: e }) => m(de.length(r, e))),
  min: f().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => m(de.min(r, e))),
  max: f().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => m(de.max(r, e))),
  code: f().withParameter("code", "array", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = G("value", r);
    return m(de.refine(t, e));
  })
}, et = H.boolean(), ss = {
  truthy: f().withValidatorFactory(({ message: r }) => m(et.refine((e) => e, r))),
  falsy: f().withValidatorFactory(({ message: r }) => m(et.refine((e) => !e, r))),
  code: f().withParameter("code", "boolean", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = G("value", r);
    return m(et.refine(t, e));
  })
}, tt = H.date(), is = {
  min: f().withParameter("value", "date", !0).withValidatorFactory(({ value: r, message: e }) => m(tt.min(new Date(r), e))),
  max: f().withParameter("value", "date", !0).withValidatorFactory(({ value: r, message: e }) => m(tt.max(new Date(r), e))),
  code: f().withParameter("code", "date", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = G("value", r);
    return m(tt.refine(t, e));
  })
}, I = H.number(), as = {
  min: f().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => m(I.min(r, e))),
  max: f().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => m(I.max(r, e))),
  lessThan: f().withParameter("value", "number", !0).withValidatorFactory(({ value: r, message: e }) => m(I.lt(r, e))),
  moreThan: f().withParameter("value", "number", !0).withValidatorFactory(({ message: r, value: e }) => m(I.gt(e, r))),
  integer: f().withValidatorFactory(({ message: r }) => m(I.int(r))),
  multipleOf: f().withParameter("value", "number", !0).withValidatorFactory(({ message: r, value: e }) => m(I.multipleOf(e, r))),
  finite: f().withValidatorFactory(({ message: r }) => m(I.finite(r))),
  code: f().withParameter("code", "number", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = G("value", r);
    return m(I.refine(t, e));
  })
}, cs = H.object({}), ls = {
  code: f().withParameter("code", "number", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = G("value", r);
    return m(cs.refine(t, e));
  })
}, S = H.string(), us = {
  required: f().withValidatorFactory(({ message: r }) => m(H.string({ required_error: r }).nonempty(r))),
  nonEmpty: f().withValidatorFactory(({ message: r }) => m(S.nonempty(r))),
  length: f().withParameter("length", "number", !0).withValidatorFactory(({ length: r, message: e }) => m(S.length(r, e))),
  min: f().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => m(S.min(r, e))),
  max: f().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => m(S.max(r, e))),
  regex: f().withParameter("regex", "string", !0).withValidatorFactory(({ message: r, regex: e }) => m(S.regex(new RegExp(e), r))),
  email: f().withValidatorFactory(({ message: r }) => m(S.email(r))),
  url: f().withValidatorFactory(({ message: r }) => m(S.url(r))),
  uuid: f().withValidatorFactory(({ message: r }) => m(S.uuid(r))),
  ip: f().withValidatorFactory(({ message: r }) => m(S.ip(r))),
  datetime: f().withParameter("precision", "number").withParameter("offset", "boolean").withValidatorFactory(({ message: r, offset: e, precision: t }) => m(S.datetime({ message: r, offset: e, precision: t }))),
  includes: f().withParameter("value", "string", !0).withParameter("position", "number").withValidatorFactory(({ message: r, value: e, position: t }) => m(S.includes(e, { message: r, position: t }))),
  startsWith: f().withParameter("value", "string", !0).withValidatorFactory(({ message: r, value: e }) => m(S.startsWith(e, r))),
  endsWith: f().withParameter("value", "string", !0).withValidatorFactory(({ message: r, value: e }) => m(S.endsWith(e, r))),
  code: f().withParameter("code", "string", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = G("value", r);
    return m(S.refine(t, e));
  })
}, ds = {
  string: us,
  number: as,
  boolean: ss,
  date: is,
  object: ls,
  array: os,
  enum: {}
}, E = (r) => r, v = (r) => {
  throw new Error(`Cannot convert from '${r}'`);
}, Gt = (r) => JSON.parse(r), rt = (r) => JSON.stringify(r), nt = (r) => r.toString(), he = (r) => (e) => e instanceof r ? e : v(e), hs = (r) => {
  const e = Number(r);
  return isNaN(e) && v(r), e;
}, Xt = (r) => new Date(r), ps = {
  string: {
    string: E,
    number: hs,
    boolean: (r) => r === "true",
    object: Gt,
    array: Gt,
    enum: E,
    date: Xt
  },
  number: {
    string: nt,
    number: E,
    boolean: (r) => r === 1,
    object: v,
    array: v,
    enum: E,
    date: Xt
  },
  boolean: {
    string: nt,
    number: (r) => r ? 1 : 0,
    boolean: E,
    object: v,
    array: v,
    enum: E,
    date: v
  },
  object: {
    string: rt,
    number: v,
    boolean: v,
    object: E,
    array: v,
    enum: E,
    date: v
  },
  array: {
    string: rt,
    number: v,
    boolean: v,
    object: v,
    array: E,
    enum: E,
    date: v
  },
  enum: {
    string: rt,
    number: he(Number),
    boolean: he(Boolean),
    object: he(Object),
    array: he(Array),
    enum: E,
    date: he(Date)
  },
  date: {
    string: nt,
    number: (r) => r.getTime(),
    boolean: v,
    object: v,
    array: v,
    enum: E,
    date: E
  }
}, fs = (r) => typeof r == "string" ? "string" : typeof r == "number" ? "number" : typeof r == "boolean" ? "boolean" : r instanceof Date ? "date" : Array.isArray(r) ? "array" : typeof r == "object" ? "object" : "enum", ms = (r, e) => {
  var o;
  if (r === null || typeof r > "u")
    return;
  const t = fs(r), n = (o = ps[t]) == null ? void 0 : o[e];
  if (!n)
    throw new Error(`Cannot convert ${r} from '${t}' to '${e}'`);
  try {
    return n(r);
  } catch (s) {
    throw new Error(`Cannot convert ${r} from '${t}' to '${e}'. ${s}.`);
  }
};
function gs(r) {
  return function(e) {
    return ys(r, e);
  };
}
function ys(r, e) {
  const t = ws(r, e);
  return async (n, o) => {
    if (!t)
      return;
    const s = [];
    for (const { settings: i, validator: c, params: l } of t) {
      const d = {};
      l == null || l.filter((w) => typeof w.default < "u").map((w) => d[w.key] = w.default), Object.assign(d, i.args);
      const p = c(n, o, d), g = Et(p) ? await p : p;
      g !== !0 && s.push({
        settings: i,
        message: typeof g == "string" ? g : d.message
      });
    }
    return s;
  };
}
const vs = () => !0;
function ws(r, e) {
  if (!e || !e.validations || !e.validations.length)
    return;
  const t = [...e.validations].sort(bs), n = (o) => {
    var s;
    if (!o.type) {
      const i = r.internal[o.key], c = i.validatorFactory(o.args ?? {});
      return { settings: o, validator: c, params: i.params };
    }
    if (o.type === "custom") {
      const i = (s = r.custom) == null ? void 0 : s[o.key];
      if (i)
        return { settings: o, validator: i.validate, params: i.params };
    }
    return console.warn(`Cannot find rule, key: '${o.key}', type: '${o.type}'`), { settings: o, validator: vs };
  };
  return t.map(n);
}
function bs(r, e) {
  return e.key === "code" ? -1 : e.key === "required" ? 1 : 0;
}
var Pe, Ee;
class Cs {
  /**
   * Creates the field with form data for the component.
   * @param store the form viewer settings.
   * @param componentStore the component settings.
   * @param model the component metadata for the form viewer.
   * @param valueCalculator the function to get a calculated value for the field.
   * @param getValidationRules the function to get validation rules for the field.
   * @param deferFieldCalculation if true, then the calculated field must be explicitly initialized.
   */
  constructor(e, t, n, o, s, i) {
    y(this, Pe, void 0);
    /**
     * @inheritDoc
     */
    a(this, "error");
    /**
     * @inheritDoc
     */
    a(this, "touched", !1);
    /**
     * @inheritDoc
     */
    a(this, "value");
    /**
     * @inheritDoc
     */
    a(this, "valued");
    /**
     * The type of the field value.
     */
    a(this, "valueType");
    a(this, "dataValidator");
    y(this, Ee, void 0);
    /**
     * @inheritDoc
     */
    a(this, "setError", (e) => {
      if (typeof e != "string")
        throw new Error(`Expected 'string' type, got '${typeof e}'`);
      this.error = e;
    });
    if (this.store = e, this.componentStore = t, this.model = n, this.valueCalculator = o, this.getValidationRules = s, this.deferFieldCalculation = i, !n.valued)
      throw new Error("'model.valued' is falsy");
    if (!n.valueType)
      throw new Error("'model.typeOfValue' is undefined");
    this.valued = n.valued, this.valueType = n.valueType;
    const c = "SimpleField";
    U(this, {
      model: !1,
      valueCalculator: !1,
      dataValidator: T.ref
    }, { name: L(c, { key: t.key }) }), x(this, Ee, [
      Mt(
        () => {
          this.dataValidator = ht.create(
            e,
            gs(this.getValidationRules(this.valueType)),
            t.schema,
            (l) => this.error = l,
            e.localizeErrorMessages.bind(e, t)
          ), on(() => {
            var l;
            (l = u(this, Pe)) == null || l.dispose(), x(this, Pe, this.dataValidator);
          });
        },
        { name: Wt(c, "setValidator", { key: t.key }) }
      ),
      Mt(
        () => {
          var g;
          const l = ((g = e.initialDataSlice) == null ? void 0 : g[t.key]) ?? this.initialValue;
          if (this.deferFieldCalculation) {
            this.value = l;
            return;
          }
          const [d, p] = this.valueCalculator(t, this.valued);
          if (d) {
            this.value = p;
            return;
          }
          this.value = l;
        },
        { name: Wt(c, "setValue", { key: t.key }) }
      ),
      () => {
        var l;
        return (l = this.dataValidator) == null ? void 0 : l.dispose();
      }
    ]);
  }
  /**
   * @inheritDoc
   */
  init() {
    this.deferFieldCalculation = !1;
  }
  /**
   * @returns the initial value for the field.
   */
  get initialValue() {
    var e;
    return ((e = this.componentStore.props[this.valued]) == null ? void 0 : e.value) ?? this.defaultValue;
  }
  /**
   * @returns the default value for the field.
   */
  get defaultValue() {
    var e;
    return (e = this.model.defaultProps) == null ? void 0 : e[this.valued];
  }
  /**
   * @inheritDoc
   */
  dispose() {
    u(this, Ee).forEach((e) => e());
  }
  /**
   * @inheritDoc
   */
  setValue(e) {
    var t, n, o;
    if (this.value = ms(e, this.valueType), !this.needValidate) {
      this.clearError();
      return;
    }
    ((t = this.componentStore.schema) == null ? void 0 : t.autoValidate) !== !1 && ((o = (n = this.dataValidator) == null ? void 0 : n.sendValidationEvent) == null || o.call(n, this.value));
  }
  /**
   * @inheritDoc
   */
  setTouched() {
    this.touched = !0;
  }
  /**
   * @inheritDoc
   */
  async validate() {
    var e, t;
    if (!this.needValidate) {
      this.clearError();
      return;
    }
    await ((t = (e = this.dataValidator) == null ? void 0 : e.validate) == null ? void 0 : t.call(e, this.value));
  }
  /**
   * @inheritDoc
   */
  async getValidationResult() {
    var t, n;
    if (!this.needValidate)
      return;
    const e = await ((n = (t = this.dataValidator) == null ? void 0 : t.getValidationResult) == null ? void 0 : n.call(t, this.value));
    return e == null ? void 0 : e.map(({ message: o }) => o);
  }
  /**
   * @inheritDoc
   */
  reset() {
    this.value = this.initialValue ?? this.defaultValue, this.clearError();
  }
  /**
   * @inheritDoc
   */
  clear() {
    this.value = this.defaultValue, this.touched = !1, this.clearError();
  }
  /**
   * @returns true if the field should be validated, false otherwise.
   */
  get needValidate() {
    return Fr(this.componentStore, this.store.form.componentTree);
  }
  /**
   * Clears the error message for this field.
   */
  clearError() {
    this.error = void 0;
  }
}
Pe = new WeakMap(), Ee = new WeakMap();
function Ir(r) {
  var t;
  const e = (t = r.props.storeDataInParentForm) == null ? void 0 : t.value;
  return typeof e > "u" ? !0 : e;
}
class Wr {
  /**
   * Creates the nested form field with form data for the component.
   * @param componentStore the component settings.
   * @param viewerStore viewerStore the form viewer settings.
   */
  constructor(e, t) {
    /**
     * @inheritDoc
     */
    a(this, "valued", "");
    /**
     * @inheritDoc
     */
    a(this, "touched", !1);
    /**
     * @inheritDoc
     */
    a(this, "setError", (e) => {
      if (!e)
        return;
      if (typeof e != "object")
        throw new Error(`Expected 'object' type, got '${typeof e}'`);
      const t = e;
      this.form.fields.forEach((n, o) => {
        if (t[o])
          return n.setError(t[o]);
        if (n.storeDataInParentForm)
          return n.setError(t);
      });
    });
    this.componentStore = e, this.viewerStore = t, U(
      this,
      void 0,
      { name: L("FormField", { key: e.key }) }
    );
  }
  /**
   * @inheritDoc
   */
  get storeDataInParentForm() {
    return Ir(this.componentStore);
  }
  /**
   * @inheritDoc
   */
  get value() {
    return this.form.data;
  }
  /**
   * @inheritDoc
   */
  dispose() {
    this.viewerStore.dispose();
  }
  /**
   * @inheritDoc
   */
  clear() {
    this.form.clear(), this.touched = !1;
  }
  /**
   * @inheritDoc
   */
  reset() {
    this.form.reset();
  }
  /**
   * @inheritDoc
   */
  setTouched() {
    this.touched = !0;
  }
  /**
   * @inheritDoc
   */
  setValue(e) {
    if (!e) {
      this.form.reset();
      return;
    }
    if (typeof e != "object")
      throw new Error(`Expected 'object' type, got '${typeof e}'`);
    const t = e;
    this.form.fields.forEach((n, o) => {
      const s = t[o];
      typeof s > "u" ? n.reset() : n.setValue(s);
    });
  }
  /**
   * @inheritDoc
   */
  async validate() {
    await this.form.validate();
  }
  /**
   * @inheritDoc
   */
  async getValidationResult() {
    return await this.form.getValidationResult();
  }
  /**
   * @inheritDoc
   */
  init() {
    this.form.fields.forEach((e) => e.init());
  }
  /**
   * @returns the form for the field.
   */
  get form() {
    return this.viewerStore.form.componentTree;
  }
  /**
   * @inheritDoc
   */
  get errors() {
    return this.form.errors;
  }
}
function Ss(r, e) {
  let t = 1;
  for (; t < 1e4; ) {
    const o = `${r}${t}`;
    if (!e.has(o))
      return o;
    t++;
  }
  const n = (/* @__PURE__ */ new Date()).getTime();
  return `${r}_${n}`;
}
class ot {
  /**
   * Creates a new instance of Form.
   * @param componentTree the root component of the form.
   * @param localization the localization of the form.
   * @param actions the form custom actions.
   * @param languages the localization languages of the form.
   * @param defaultLanguage the default localization language of the form.
   */
  constructor(e, t, n, o, s) {
    /**
     * Root component of the form.
     */
    a(this, "componentTree");
    /**
     * Localization of the form.
     */
    a(this, "localization");
    /**
     * Localization languages of the form.
     */
    a(this, "languages", []);
    /**
     * The set of action definitions.
     */
    a(this, "actions");
    /**
     * Properties of the component displaying the error.
     */
    a(this, "errorProps", {});
    /**
     * The type name of the component displaying the tooltip.
     */
    a(this, "tooltipType");
    /**
     * The type name of the component displaying the error.
     */
    a(this, "errorType");
    /**
     * Default localization language of the form.
     */
    a(this, "defaultLanguage");
    this.componentTree = e, this.localization = t, this.actions = n, this.languages = o, this.defaultLanguage = s, this.componentTree.events.onBeforeDelete.subscribe(this.onComponentDataBeforeDelete.bind(this)), this.componentTree.events.onAfterKeyChanged.subscribe(this.onComponentDataAfterKeyChanged.bind(this)), U(this);
  }
  /**
   * @returns the actions names array.
   */
  get actionNames() {
    return Object.keys(this.actions);
  }
  /**
   * Initializes form fields.
   */
  initFields() {
    this.componentTree.fields.forEach((e) => e.init());
  }
  /**
   * Disposes the form. Disposes all the components and localization.
   */
  dispose() {
    this.componentTree.dispose();
  }
  /**
   * Removes the action from the form.
   * @param name the action name to remove.
   */
  removeAction(e) {
    delete this.actions[e], this.removeCodeActionBinding(e, this.componentTree.store);
  }
  /**
   * Changes the existing action to the new one, adds the action if the existing action is not found.
   * @param oldActionName the existing action name.
   * @param newAction the new named action.
   */
  updateOrAddAction(e, t) {
    this.actions[t.name] = t.actionDefinition, this.rebindActionHandlers(this.componentTree.store, e, t), e !== t.name && delete this.actions[e];
  }
  /**
   * Clones the action.
   * @param namedAction the named action to clone.
   */
  cloneAction(e) {
    if (!this.actions)
      return;
    const t = new Set(this.actionNames), n = JSON.parse(JSON.stringify(e.actionDefinition)), o = Ss(`${e.name}_`, t);
    this.actions[o] = V.createFromObject(n);
  }
  rebindActionData(e, t) {
    e.name = t.name;
    const n = e.args;
    if (!n)
      return;
    const o = new Set(Object.keys(t.actionDefinition.params));
    Object.keys(n).forEach((s) => {
      o.has(s) || delete n[s];
    });
  }
  rebindActionHandlers(e, t, n) {
    var s;
    const o = e.events;
    o && Object.keys(o).forEach((i) => {
      const c = o[i];
      c == null || c.filter((l) => l.type === "code" && l.name === t).forEach((l) => this.rebindActionData(l, n));
    }), (s = e.children) == null || s.forEach((i) => {
      this.rebindActionHandlers(i, t, n);
    });
  }
  removeCodeActionBinding(e, t) {
    var o;
    const n = t.events;
    n && Object.keys(n).forEach((s) => {
      const i = n[s];
      i.length && (n[s] = i.filter((c) => !(c.type === "code" && c.name === e)));
    }), (o = t.children) == null || o.forEach((s) => this.removeCodeActionBinding(e, s));
  }
  onComponentDataBeforeDelete(e) {
    this.localization.removeLocalization(e.key);
  }
  onComponentDataAfterKeyChanged(e, { oldKey: t, newKey: n }) {
    this.localization.changeComponentKey(t, n);
  }
}
const Ps = "LocalizationStore";
var qe, Br;
class Es {
  constructor(e, t) {
    y(this, qe);
    this.languageFullCode = e, this.localizationStore = t, U(this, void 0, { name: L("FluentBundleHolder") });
  }
  get fluentBundle() {
    const e = this.localizationStore.value[this.languageFullCode], t = new dr(this.languageFullCode);
    return e && b(this, qe, Br).call(this, e).forEach((o) => {
      const s = t.addResource(new ur(o));
      s.length > 0 && (console.error(`Unable to add localization resource: ${o}`), s.forEach(console.error));
    }), t;
  }
}
qe = new WeakSet(), Br = function(e) {
  const t = [];
  return Object.entries(e).forEach(([n, o]) => {
    Object.entries(o ?? {}).forEach(([s, i]) => {
      Object.entries(i ?? {}).forEach(([c, l]) => {
        l && t.push(`${n}_${s}_${c} = ${l}`);
      });
    });
  }), t;
};
class st {
  /**
   * The constructor.
   * @param value the initial localization value.
   */
  constructor(e = {}) {
    a(this, "localizationCache", /* @__PURE__ */ new Map());
    /**
     * The localization data.
     */
    a(this, "value", {});
    U(this, void 0, { name: L(Ps) }), this.value = e;
  }
  /**
   * Returns value of localization constant.
   * @param languageFullCode the full code (en-US, en-GB etc.) of the language we are looking to localize.
   * @param componentKey the component we are looking to localize.
   * @param propertyName the property name we are looking to localize.
   * @param type the type of localization.
   * @returns the value of localization constant.
   */
  getLocalization(e, t, n, o) {
    var c, l, d;
    const s = C(t), i = C(n);
    return (d = (l = (c = this.value[e]) == null ? void 0 : c[s]) == null ? void 0 : l[o]) == null ? void 0 : d[i];
  }
  /**
   * Sets localization for component property.
   * @param languageFullCode the full code (en-US, en-GB etc.) of the language in which localization will be set.
   * @param componentKey the component key that requires localization.
   * @param propertyName the component's property name to be localized.
   * @param type the type of localization.
   * @param value the localization value.
   */
  setLocalization(e, t, n, o, s) {
    var l, d, p;
    const i = C(t), c = C(n);
    (l = this.value)[e] ?? (l[e] = {}), (d = this.value[e])[i] ?? (d[i] = {}), (p = this.value[e][i])[o] ?? (p[o] = {}), this.value[e][i][o][c] = s;
  }
  /**
   * Removes localization for component.
   * @param componentKey the component key that requires localization removal.
   */
  removeLocalization(e) {
    const t = C(e);
    for (const n in this.value)
      delete this.value[n][t], Object.keys(this.value[n]).length === 0 && delete this.value[n];
  }
  /**
   * Removes localization for component with specified type.
   * @param componentKey the component key that requires localization removal.
   * @param type the localization type.
   */
  removeLocalizationForType(e, t) {
    const n = C(e);
    for (const o in this.value)
      this.value[o][n] && (delete this.value[o][n][t], Object.keys(this.value[o][n]).length === 0 && delete this.value[o][n], Object.keys(this.value[o]).length === 0 && delete this.value[o]);
  }
  /**
   * Checks that the specified language exists in the localization.
   * @param languageFullCode The full code (en-US, en-GB etc.) of the language to be checked.
   * @returns true if the specified language exists in the localization.
   */
  hasLanguage(e) {
    return !!this.value[e];
  }
  /**
   * Checks that the specified property has localization.
   * @param componentKey the component we are looking to localize.
   * @param propertyName the component's property name to be localized.
   * @param type the type of localization.
   * @returns true if the specified property has localization in at least one language.
   */
  hasLocalization(e, t, n) {
    const o = C(e), s = C(t);
    return Object.values(this.value).some((i) => {
      var c, l;
      return (l = (c = i == null ? void 0 : i[o]) == null ? void 0 : c[n]) == null ? void 0 : l[s];
    });
  }
  /**
   * If the FluentBundle for the specified language is found, this function returns it.
   * Otherwise, an empty FluentBundle is returned.
   * @param languageFullCode the full code (en-US, en-GB etc.) of the language to get fluent bundle.
   * @returns the FluentBundle for the specified language.
   */
  getFluentBundle(e) {
    const t = this.localizationCache.get(e) ?? new Es(e, this);
    return this.localizationCache.has(e) || this.localizationCache.set(e, t), t.fluentBundle;
  }
  /**
   * Changes the component key for all languages in the value object.
   * @param oldComponentKey the old component key to be replaced.
   * @param newComponentKey the new component key to replace the old component key.
   */
  changeComponentKey(e, t) {
    const n = C(e), o = C(t);
    for (const s in this.value) {
      const i = this.value[s][n];
      i && (this.value[s][o] = i, delete this.value[s][n]);
    }
  }
  /**
   * Retrieves the localization values for a given component key.
   * @param componentKey the key of the component to retrieve localization for.
   * @returns the object containing the localization values for the component in each supported language.
   */
  getLocalizationForComponent(e) {
    const t = C(e), n = {};
    for (const o in this.value) {
      const s = this.value[o][t];
      s && (n[o] = {}, n[o][e] = s);
    }
    return n;
  }
  /**
   * Inserts the localization values for a given component key. Replaces the old component key with the new component key.
   * @param localization the localization object for insertion.
   * @param oldComponentKey the old component key that needs to be replaced.
   * @param newComponentKey the new component key to be added.
   */
  addLocalizationWithNewKey(e, t, n) {
    const o = C(n);
    for (const s in e) {
      const i = e[s][t];
      i && (this.value[s][o] = i);
    }
  }
}
var pt = /* @__PURE__ */ ((r) => (r.version1 = "1", r))(pt || {});
const Ts = {
  RsDatePicker: ["calendarDefaultDate", "defaultValue", "value"],
  RsCalendar: ["defaultValue", "value"]
};
function Kr(r, e, t, n) {
  var s;
  let o = e(t, r);
  return (s = r[n]) == null || s.forEach((i) => {
    o = Kr(i, e, o, n);
  }), o;
}
const it = new Ge("en", "US", "English", "American English");
var Te, Ve, mt;
const Ft = class Ft {
  /**
   * Creates form viewer settings.
   * @param formViewerPropsStore the form viewer store settings.
   * @param parentStore the form viewer settings, used in templates.
   * @param parentComponentStore the parent component settings.
   */
  constructor(e, t, n) {
    /**
     * Changes the form to the component with an error description.
     * @param e the error.
     */
    y(this, Ve);
    /**
     * The currently selected language.
     */
    a(this, "selectedLanguage");
    /**
     * The Subject for submitting form events.
     */
    a(this, "eventSubject", new lr());
    /**
     * Current display resolution type.
     */
    a(this, "viewMode", "desktop");
    /**
     * The form.
     */
    a(this, "form");
    /**
     * Models for templates that have not been explicitly defined.
     */
    y(this, Te, /* @__PURE__ */ new Map());
    this.formViewerPropsStore = e, this.parentStore = t, this.parentComponentStore = n;
    const o = this.createComponentData(new $(B.name, B.type)), s = new st();
    this.form = new ot(o, s, {}, [], it), ir(this, {
      form: T,
      viewMode: !0,
      selectedLanguage: !0,
      clear: !0,
      parentStore: T.ref,
      parentComponentStore: T.ref,
      initialDataSlice: !0
    }, { name: L("ViewerStore") });
  }
  /**
   * @returns the Record with the common actions.
   */
  get commonActions() {
    return qo;
  }
  /**
   * Returns an action by the specified action name and action type.
   * @param name the action name.
   * @param type the action type.
   * @returns the action.
   */
  getAction(e, t) {
    var o;
    let n;
    switch (t) {
      case "common":
        n = this.commonActions[e];
        break;
      case "code":
        n = this.form.actions[e];
        break;
      case "custom":
        n = (o = this.formViewerPropsStore.actions) == null ? void 0 : o[e];
        break;
    }
    if (!n)
      throw Error(`Action '${e}' with type '${t}' not found!`);
    return n;
  }
  /**
   * @inheritDoc
   */
  get formData() {
    return this.form.componentTree;
  }
  /**
   * Clears the form in Form Viewer.
   */
  clear() {
    const e = this.form, t = this.createComponentData(new $(B.name, B.type)), n = new st();
    this.form = new ot(t, n, {}, e.languages, e.defaultLanguage), e.dispose();
  }
  /**
   * @inheritDoc
   */
  dispose() {
    this.form.dispose();
  }
  /**
   * @inheritDoc
   */
  get initialDataSlice() {
    if (!this.parentStore || !this.parentComponentStore)
      return this.formViewerPropsStore.initialData;
    const e = this.parentStore.initialDataSlice;
    if (Ir(this.parentComponentStore))
      return e;
    const t = e == null ? void 0 : e[this.parentComponentStore.key];
    return $n(t) ? t : void 0;
  }
  /**
   * @inheritDoc
   */
  reduceScreen(e, t) {
    return Kr(this.form.componentTree, e, t, "children");
  }
  /**
   * Searches for an action, returns definition for the found action.
   * @param actionData the action's data.
   * @returns the action definition.
   * @throws Error, if action was not found.
   */
  findAction(e) {
    return this.getAction(e.name, e.type);
  }
  /**
   * Returns model for the specified type.
   * @param type the component type.
   * @returns the model for the specified type.
   */
  getModel(e) {
    const t = this.formViewerPropsStore.view.find(e);
    return t || (Qt(e) ? u(this, Te).get(e) ?? this.addTemplateModel(e) : ns(`Type '${e}' is not found!`));
  }
  addTemplateModel(e) {
    const t = Lr(e), n = Jr(t);
    return u(this, Te).set(n.type, n), n;
  }
  /**
   * Loads a form by form name and sets that form in the form viewer.
   * @param getForm the function that loads the form.
   * @param formName the form name.
   */
  loadForm(e, t) {
    if (e)
      try {
        const n = e(t);
        if (Et(n)) {
          n.then(this.applyStringForm.bind(this)).catch(b(this, Ve, mt).bind(this));
          return;
        }
        this.applyStringForm(n);
      } catch (n) {
        b(this, Ve, mt).call(this, n);
      }
  }
  /**
   * Creates the element for the component tree.
   * @param componentStore the component settings.
   * @param deferFieldCalculation if true, then the calculated field must be explicitly initialized.
   * @param model the component's metadata.
   * @returns the element for the component tree.
   */
  createComponentData(e, t = !1, n) {
    n ?? (n = this.getModel(e.type));
    const o = n.valued ? this.createField(e, n, t) : void 0, s = (i) => this.createComponentData(i, t);
    return new qn(e, n, o, s, this.formViewerPropsStore.formValidators);
  }
  /**
   * Returns the object with validators for the specified value type.
   * @param type the value type.
   * @returns the object with validators for the specified value type.
   */
  getValidationRules(e) {
    var t;
    return {
      custom: (t = this.formViewerPropsStore.validators) == null ? void 0 : t[e],
      internal: ds[e]
    };
  }
  createField(e, t, n) {
    if (!Qt(t.type))
      return new Cs(this, e, t, Vs(this), this.getValidationRules.bind(this), n);
    const o = new Ft(this.formViewerPropsStore.clone(), this, e);
    return new Wr(e, o);
  }
  /**
   * Populates the value of this store with the values of the saved form.
   * @param text saved form value.
   */
  applyStringForm(e) {
    try {
      const t = JSON.parse(e);
      this.fixPropertyTypes(t.form), this.applyPersistedForm(t);
    } catch (t) {
      console.error(t);
    }
  }
  fixPropertyTypes(e) {
    var n;
    const t = Ts[e.type];
    t == null || t.forEach((o) => this.fixDateProperty(e, o)), (n = e.children) == null || n.forEach((o) => this.fixPropertyTypes(o));
  }
  fixDateProperty(e, t) {
    var o;
    const n = (o = e.props[t]) == null ? void 0 : o.value;
    (zn(n) || Mn(n)) && (e.props[t].value = new Date(n));
  }
  /**
   * Populates the value of this store with the values of the saved form.
   * @param persistedForm saved form value.
   */
  applyPersistedForm(e) {
    var p;
    const t = this.form, n = e.version;
    typeof n < "u" && n !== pt.version1 && console.warn(`An unsupported version of form '${n}' has been detected. An attempt will be made to upload the form as version '${pt.version1}'.`);
    const o = $.createFromObject(e.form), s = this.createComponentData(o, !0), i = new st(Y({}, e.localization)), c = ((p = e.languages) == null ? void 0 : p.map(Ge.clone)) ?? [], l = c.find((g) => g.fullCode === e.defaultLanguage) ?? it, d = Nn(e.actions);
    this.form = new ot(s, i, d, c, l), this.form.errorProps = e.errorProps ?? {}, this.form.tooltipType = e.tooltipType, this.form.errorType = e.errorType, this.form.initFields(), t.dispose();
  }
  /**
   * @returns the current display language.
   */
  get displayedLanguage() {
    if (this.parentStore)
      return this.parentStore.displayedLanguage;
    if (this.formViewerPropsStore.propsLanguage) {
      const e = this.form.languages.find((t) => t === this.formViewerPropsStore.propsLanguage);
      if (e)
        return e;
    }
    return this.selectedLanguage ?? this.form.defaultLanguage;
  }
  /**
   * Localizes a component store based on the given localization type. If a custom localizer is available, it will be used.
   * @param type the type of localization.
   * @param componentStore the component settings.
   * @returns the Record with the localized properties.
   */
  localizeComponent(e, t) {
    return this.formViewerPropsStore.localizer ? this.formViewerPropsStore.localizer(t, this.displayedLanguage) : Yo(this.form, this.displayedLanguage, t, e);
  }
  /**
   * Localizes validator error messages.
   * @param componentStore the component settings.
   * @param validationResults the validation results.
   * @returns the localized error messages joined by space, or undefined if validationResults is undefined.
   */
  localizeErrorMessages(e, t) {
    if (t)
      return t.map((n) => Qo(this.form, this.displayedLanguage, e, n.settings.key) ?? Ar(n)).join(" ");
  }
};
Te = new WeakMap(), Ve = new WeakSet(), mt = function(e) {
  console.error(e);
  const t = rs(e);
  this.applyPersistedForm({
    form: t,
    localization: {},
    defaultLanguage: it.fullCode,
    languages: []
  });
};
let ft = Ft;
function Vs(r) {
  return function(e, t) {
    const n = e.props[t];
    if (Qe(n)) {
      const { result: o } = Vt(n, r.form.componentTree);
      return [!0, o];
    }
    return Sr(n) ? [!0, r.localizeComponent("component", e)[t]] : [!1];
  };
}
function ks(r) {
  const [e, t] = bt();
  return k(() => {
    const n = r();
    return t(n), () => n.dispose();
  }, []), e;
}
const Ds = ({
  children: r,
  props: { viewerRef: e, ...t },
  store: n
}) => (ln(e, () => n, [n]), k(() => {
  var o;
  (o = t.onFormDataChange) == null || o.call(t, n.formData);
}, [n.formData.data, n.formData.errors]), k(() => {
  n.formViewerPropsStore.applyProps(t);
}, [
  t.initialData,
  t.view,
  t.validators,
  t.formValidators,
  t.localize,
  t.language,
  t.actions,
  t.errorWrapper
]), /* @__PURE__ */ h(Er, { value: t, children: /* @__PURE__ */ h(Tt, { value: n, children: r }) })), Hr = P("ExistingStoreProvider", Ds), Fs = ({ children: r, props: e }) => {
  const t = K(() => new ft(new kt(e)), [e]), n = ks(t);
  return n ? /* @__PURE__ */ h(Hr, { children: r, props: e, store: n }) : null;
}, xs = P("FactoryStoreProvider", Fs), As = (r) => {
  const e = ar(Yn);
  return e ? /* @__PURE__ */ h(Hr, { children: r.children, props: r.props, store: e }) : /* @__PURE__ */ h(xs, { children: r.children, props: r.props });
}, Os = P("ViewerStoreProvider", As);
sn({ enforceActions: "never" });
const Ns = (r) => /* @__PURE__ */ h(uo, { children: /* @__PURE__ */ h(Os, { props: r, children: /* @__PURE__ */ h(co, { language: r.language, children: /* @__PURE__ */ De(zs, { children: [
  /* @__PURE__ */ h(no, {}),
  /* @__PURE__ */ h(Uo, { event: r.event })
] }) }) }) }), js = P("FormViewer", Ns), zs = R.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`, Ms = R.span`
  font-size: xx-large;
  color: red;
`, [
  /**
   * **Internal use only.**
   */
  $s,
  /**
   * **Internal use only.**
   */
  Rs
] = xe("TemplateContext"), Ls = (r) => {
  const e = q(), t = X(), n = ae(() => {
    const s = {
      formName: Lr(t.store.type),
      computeChildren: void 0,
      formValidators: void 0
    };
    return Object.assign({}, e, s);
  }, [t.store.type, e]);
  if (!e.getForm)
    return /* @__PURE__ */ De(Ms, { children: [
      "Please define ",
      /* @__PURE__ */ h("code", { children: "getForm" }),
      " property!"
    ] });
  if (!(t.field instanceof Wr))
    return null;
  const o = t.field.viewerStore;
  return /* @__PURE__ */ h(Rs, { value: { templateProps: r, viewerProps: e, data: t }, children: /* @__PURE__ */ h(Tt, { value: o, children: /* @__PURE__ */ h(js, { ...n }) }) });
}, Ur = Ie(Ze), Is = Le(Ur);
function Jr(r) {
  const e = Rr(r), t = { name: r, storeDataInParentForm: !0 };
  return new J(
    Ls,
    r,
    void 0,
    e,
    "object",
    t,
    Is,
    void 0,
    e,
    void 0,
    "template"
  );
}
const qr = () => {
  const r = F();
  return r.parentStore ? /* @__PURE__ */ h(Bs, { parentStore: r.parentStore }) : /* @__PURE__ */ h(Hs, {});
};
qr.displayName = "Slot";
const Ke = new J(
  qr,
  "Slot",
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  "slot"
), Ws = ({ parentStore: r }) => {
  const { key: e } = X(), { viewerProps: t, data: n, templateProps: o } = $s();
  return /* @__PURE__ */ h(Tt, { value: r, children: /* @__PURE__ */ h(Er, { value: t, children: /* @__PURE__ */ h(Pr, { value: n, children: o[e] }) }) });
}, Bs = P("SlotContent", Ws), Ks = () => {
  const { key: r } = X();
  return /* @__PURE__ */ De(Us, { children: [
    "Slot: '",
    r,
    "'"
  ] });
}, Hs = P("SlotPlaceholder", Ks), Us = R.div`
  background-color: rgb(150, 150, 150, 25%);
  padding: 5px;
`, at = new ce(
  Ke.type,
  [],
  [],
  [],
  Ye,
  void 0,
  void 0,
  Ke.kind
), Js = Dn.default(!0).calculable(!1).hinted("Store data in parent form").named("Store data in parent form");
function qs(r) {
  const e = Rr(r);
  return new ce(
    e,
    Ae({
      storeDataInParentForm: Js
    }),
    [],
    Ur,
    Ye,
    void 0,
    void 0,
    "template"
  );
}
var re, ne, ke, oe, Me;
const xt = class xt {
  /**
   * Creates an instance of the {@link View}.
   * @param models the components metadata.
   */
  constructor(e = []) {
    /**
     * Sets a CSS loader for the specified BiDi direction.
     * @param biDi the BiDi direction.
     * @param loader the loader function that returns a Promise.
     */
    y(this, oe);
    y(this, re, /* @__PURE__ */ new Map());
    y(this, ne, /* @__PURE__ */ new Map());
    y(this, ke, new Array());
    /**
     * Adds a wrapper to the list of viewers for this viewer wrapper.
     * @param wrapper  the viewer wrapper to be added. The wrapper is a component that wraps the form viewer.
     * @returns the {@link View} instance.
     */
    a(this, "withViewerWrapper", (e) => (u(this, ke).push(e), this));
    this.define(B), this.define(We), this.define(Ke), e.forEach(this.define.bind(this));
  }
  /**
   * Static wrapper for the {@link View} constructor.
   * @param models the components metadata.
   * @returns the {@link View} instance.
   */
  static create(e) {
    return new xt(e);
  }
  /**
   * Defines the component's metadata for the form viewer.
   * @param model the component's metadata.
   */
  define(e) {
    u(this, re).set(e.type, e);
  }
  /**
   * Returns the component's metadata for the form viewer for the specified type.
   * @param type the component type.
   * @returns the component metadata for the form viewer for the specified type.
   */
  get(e) {
    const t = this.find(e);
    if (t)
      return t;
    throw new Error(`Type '${e}' is not found!`);
  }
  /**
   * Returns the component's metadata for the form viewer for the specified type.
   * @param type the component type.
   * @returns the component metadata for the form viewer for the specified type or undefined.
   */
  find(e) {
    return u(this, re).get(e);
  }
  /**
   * @returns all component metadata for the form viewer.
   */
  all() {
    return [...u(this, re).values()];
  }
  /**
   * Retrieves the viewer wrappers array.
   * @returns the viewer wrappers array.
   */
  get viewerWrappers() {
    return [...u(this, ke)];
  }
  /**
   * Applies the given CSS loader to the component based on the BiDi layout.
   * @param cssLoaderType the BiDi layout type, either 'common', 'ltr', or 'rtl'.
   * @param loader the function that returns a Promise to load CSS or other required localization resources.
   * @returns the {@link View} instance.
   */
  withCssLoader(e, t) {
    return e === "common" ? (b(this, oe, Me).call(this, Q.LTR, t), b(this, oe, Me).call(this, Q.RTL, t)) : b(this, oe, Me).call(this, e, t), this;
  }
  /**
   * Retrieves the CSS loaders for a given BiDi.
   * @param biDi the BiDi object for which to retrieve the CSS loaders.
   * @returns the array containing the CSS loaders for the specified BiDi.
   */
  getCssLoaders(e) {
    return u(this, ne).get(e) ?? [];
  }
};
re = new WeakMap(), ne = new WeakMap(), ke = new WeakMap(), oe = new WeakSet(), Me = function(e, t) {
  u(this, ne).set(e, [...u(this, ne).get(e) ?? [], t]);
};
let ge = xt;
const Ti = ge.create;
var O, M;
const At = class At {
  constructor(e) {
    /**
     * Modifies the component's metadata builder with custom options.
     * @param opts the custom options.
     * @returns the modified instance of the builder.
     */
    y(this, O);
    /**
     * Definer class data.
     * @template T React component property type.
     */
    a(this, "data");
    /**
     * Sets the name of the component.
     * @param name the component name.
     * @returns the modified Definer class instance.
     */
    a(this, "name", (e) => b(this, O, M).call(this, { name: e }));
    /**
     * Sets the kind of the component.
     * @param kind the component kind.
     * @returns the modified Definer class instance.
     */
    a(this, "kind", (e) => b(this, O, M).call(this, { kind: e }));
    /**
     * Sets the icon of the component.
     * @param icon the component icon.
     * @returns the modified Definer class instance.
     */
    a(this, "icon", (e) => b(this, O, M).call(this, { icon: e }));
    /**
     * Sets the category of the component.
     * @param category the component category.
     * @returns the modified Definer class instance.
     */
    a(this, "category", (e) => b(this, O, M).call(this, { category: e }));
    /**
     * Sets the type of the component.
     * @param type the component type.
     * @returns the modified Definer class instance.
     */
    a(this, "type", (e) => (this.data.component.displayName = e, this));
    /**
     * Sets the metadata of the component's properties.
     * @param properties the metadata of the component's properties.
     * @returns the modified Definer class instance.
     */
    a(this, "props", (e) => b(this, O, M).call(this, { properties: e }));
    /**
     * Sets the component CSS metadata.
     * @param css the component CSS metadata.
     * @returns the modified Definer class instance.
     */
    a(this, "css", (e) => b(this, O, M).call(this, { cssObject: e }));
    /**
     * Adds the metadata of the component's actions. **Internal use only.**
     * @param fn the function that initializes an actions on a component.
     * @returns the modified Definer class instance.
     */
    a(this, "actions", (e) => b(this, O, M).call(this, { actionsInitializer: e }));
    /**
     * Adds the custom component to be displayed in the component list. **Internal use only.**
     * @param customPreview the custom component.
     * @returns the modified Definer class instance.
     */
    a(this, "preview", (e) => b(this, O, M).call(this, { customPreview: e }));
    this.data = { component: e };
  }
  /**
   * Static method to create an instance of the component's metadata builder class.
   * @param component the React component.
   * @param displayName the display name for the anonymous component.
   * @returns the instance of the {@link Definer} class.
   */
  static define(e, t) {
    if (!(t ?? e.displayName ?? e.name))
      throw Error("Anonymous components are not allowed!");
    const o = new At(e);
    return t && o.type(t), o;
  }
  /**
   * @returns the component type name.
   */
  getType() {
    return this.data.component.displayName || this.data.component.name;
  }
  /**
   * Creates component metadata for the form builder and form viewer.
   * @returns component metadata for the form builder and form viewer.
   */
  build() {
    const e = Ae(this.data.properties), t = Ie(this.data.cssObject), n = Ie(Ze), o = e.filter((d) => d.valued === !0), s = o[0];
    o.length > 1 && console.warn(`Several annotations with the "valued" property were found. There should be only one "valued" property in the component description! The annotation with the key "${o[0].key}" will be used.`);
    const i = s ?? e.find((d) => d.name === "value"), c = new J(
      this.data.component,
      this.data.name || this.getType(),
      this.data.actionsInitializer,
      i == null ? void 0 : i.key,
      i == null ? void 0 : i.type,
      gr(e),
      Le(t),
      Le(n),
      this.getType(),
      this.data.icon,
      this.data.kind
    ), l = new ce(
      this.getType(),
      e,
      t,
      n,
      Ye,
      this.data.customPreview,
      i,
      this.data.kind
    );
    return { model: c, meta: l, category: this.data.category };
  }
};
O = new WeakSet(), M = function(e) {
  return Object.assign(this.data, e), this;
};
let gt = At;
const Vi = gt.define, Zs = nr`
  font-size: 12px;
  color: var(--red-600);
  margin-top: 0.25rem;

  &:before {
    content: "❌ ";
    font-size: 10px;
    padding: 6px;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`, Ys = R.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`, Zr = ({ children: r, error: e, className: t }) => /* @__PURE__ */ De(Ys, { children: [
  r,
  e && /* @__PURE__ */ h("p", { className: wt(t, Zs), children: e })
] });
Zr.displayName = "DefaultErrorMessage";
const yt = new J(Zr), ct = new ce(We.type, [], [], [], []), _t = new ce(
  B.type,
  Ae({ children: xn }),
  $r,
  [],
  Ye,
  void 0,
  void 0,
  "container"
), er = new ce(
  yt.type,
  Ae({
    className: yr
  }),
  [],
  [],
  []
), tr = "templates";
var N, se, ie;
const Ot = class Ot extends ge {
  /**
   * Creates metadata for form builder components.
   * @param builderComponents the array of metadata of form builder components.
   */
  constructor(t) {
    super(t.map(({ model: o }) => o));
    y(this, N, /* @__PURE__ */ new Map());
    y(this, se, /* @__PURE__ */ new Map());
    y(this, ie, /* @__PURE__ */ new Map([
      [er.type, er]
    ]));
    this.builderComponents = t, u(this, N).set(_t.type, _t), u(this, N).set(ct.type, ct), u(this, N).set(at.type, at), this.builderComponents.push({ meta: at, model: Ke, category: tr }), t.map(({ meta: o }) => o).forEach((o) => {
      u(this, N).set(o.type, o);
    });
  }
  /**
   * Returns the component metadata for the specified component type name.
   * @param type the component type name.
   * @returns the component metadata for the specified component type name.
   */
  getMeta(t) {
    const n = u(this, N).get(t);
    return n || ct;
  }
  /**
   * Returns the component metadata for the specified component type name or undefined.
   * @param type the component type name.
   * @returns the component metadata for the specified component type name or undefined.
   */
  findMeta(t) {
    return u(this, N).get(t);
  }
  /**
   * Returns the array of metadata properties of the tooltip component.
   * @param name the name of the tooltip component type.
   * @returns the array of metadata properties of the tooltip component.
   */
  getTooltipAnnotations(t) {
    var n;
    return (n = u(this, se).get(t)) == null ? void 0 : n.properties;
  }
  /**
   * Returns the array of metadata properties of the error component.
   * @param name the name of the error component type.
   * @returns the array of metadata properties of the error component.
   */
  getErrorAnnotations(t) {
    var n;
    return (n = u(this, ie).get(t)) == null ? void 0 : n.properties;
  }
  /**
   * @returns the array of strings with the names of the component types of the tooltip.
   */
  get tooltips() {
    return Array.from(u(this, se).keys());
  }
  /**
   * @returns the array of strings with the names of the component types of the error.
   */
  get errors() {
    return Array.from(u(this, ie).keys());
  }
  /**
   * Sets the metadata of the component that displays the form's tooltips.
   * @param builderComponent the metadata of the component that displays the form's tooltips.
   * @returns the instance of the {@link BuilderView} class.
   */
  withTooltipMeta(t) {
    const { model: n, meta: o } = t;
    return this.define(n), u(this, se).set(n.type, o), this;
  }
  /**
   * Sets the metadata of the component that displays form's errors.
   * @param builderComponent the metadata of the component that displays the form's errors.
   * @returns the instance of the {@link BuilderView} class.
   */
  withErrorMeta(t) {
    const { model: n, meta: o } = t;
    return this.define(n), u(this, ie).set(n.type, o), this;
  }
  /**
   * Creates metadata for the form builder for templates from the specified template names.
   * @param templates the array of template names.
   * @returns the instance of the {@link BuilderView} class.
   */
  withTemplates(t) {
    return t.forEach((n) => {
      const o = Ot.createTemplateComponent(n);
      this.define(o.model), u(this, N).set(o.meta.type, o.meta), this.builderComponents.push(o);
    }), this;
  }
  /**
   * Creates an instance of BuilderComponent for the specified template name.
   * @param name the template name
   * @returns the BuilderComponent instance.
   */
  static createTemplateComponent(t) {
    const n = Jr(t);
    return { meta: qs(t), model: n, category: tr };
  }
};
N = new WeakMap(), se = new WeakMap(), ie = new WeakMap();
let rr = Ot;
const ki = `declare interface IFormData {
  /**
   * @returns the {@link Record} with all the form data.
   */
  get data(): Record<string, unknown>

  /**
   * @returns the {@link Record} with all validation error messages.
   */
  get errors(): Record<string, unknown>

  /**
   * true if the form contains errors, otherwise false.
   */
  get hasErrors(): boolean

  /**
   * @returns A user-defined key-value observable storage. Utilize it to store and share any custom data.
   */
  get state(): Record<string, unknown>

  /**
   * Sets the validation error message for all form data fields.
   * @param message the validation error message.
   */
  setAllErrors(message?: string): void

  /**
   * Validates the data in the form.
   */
  validate(): Promise<void>
    
  /**
   * Returns the validation results without triggering an events and changing the state of the form.
   * @returns the validation results.
   */
  getValidationResult: () => Promise<ValidationMessages>

  /**
   * If true, then validation is in progress.
   */
  get isValidating(): boolean

  /**
   * Sets the form to its default value.
   */
  reset(): void

  /**
   * Clears the form data.
   */
  clear(): void
}`, Di = (r, e = !0) => r.map((t) => ({
  value: zt(t) ? t.value : t,
  label: zt(t) ? t.label : e ? rn(t) : t
})), Fi = (r, e, t) => new Promise((n, o) => {
  if (document.getElementById(r))
    return n();
  const s = document.createElement("link");
  s.id = r, s.rel = t, s.href = e, s.onload = () => {
    n();
  }, s.onerror = o, document.head.appendChild(s);
}), xi = (r) => {
  var t;
  const e = document.getElementById(r);
  (t = e == null ? void 0 : e.parentNode) == null || t.removeChild(e);
};
export {
  V as ActionDefinition,
  ut as ActionEventArgs,
  Ci as ActionEventArgsDeclaration,
  Fe as Annotation,
  Re as AnnotationBuilder,
  $e as ArrayBuilder,
  G as AsyncFunction,
  fr as BaseBuilder,
  Q as BiDi,
  bn as BuilderOptions,
  rr as BuilderView,
  j as CalculableResult,
  qn as ComponentData,
  Jn as ComponentDataEvents,
  Pr as ComponentDataProvider,
  Un as ComponentKeyChangedEventArgs,
  Dr as ComponentState,
  $ as ComponentStore,
  Nr as ComponentTree,
  hr as ContainerAnnotation,
  ht as DataValidator,
  Or as DefaultWrapper,
  St as DidMountEvent,
  gn as EventAnnotation,
  fe as EventStream,
  ot as Form,
  js as FormViewer,
  kt as FormViewerPropsStore,
  ki as IFormDataDeclaration,
  It as KeySymbol,
  Ge as Language,
  st as LocalizationStore,
  ce as Meta,
  J as Model,
  yn as ModuleAnnotation,
  Pn as NodeAnnotationBuilder,
  Cn as OneOfBuilder,
  pt as PersistedFormVersion,
  pr as PropertyAnnotation,
  mr as QuantifierBuilder,
  zs as SDiv,
  Sn as SomeOfBuilder,
  ft as Store,
  Yn as StoreContext,
  Tt as StoreProvider,
  vn as StyleAnnotation,
  uo as SuppressResizeObserverErrors,
  Kt as SyncEvent,
  Wr as TemplateField,
  Ct as TypedBuilder,
  ge as View,
  Er as ViewerPropsProvider,
  Pt as WillUnmountEvent,
  gi as array,
  Dn as boolean,
  Vt as calculatePropertyValue,
  So as checkSlotCondition,
  wi as className,
  yi as color,
  Ze as commonStyles,
  vr as containerStyles,
  Nn as createActionValuesFromObject,
  z as createAnnotation,
  xe as createNonNullableContext,
  D as createProperty,
  Ti as createView,
  mi as date,
  Vi as define,
  Jt as emotionCache,
  Si as emptyComponentStore,
  yt as errorMessageModel,
  Lt as event,
  Bn as findTreeElementDepth,
  Rr as generateTemplateTypeName,
  Ss as generateUniqueName,
  gr as getDefault,
  Le as getDefaultCss,
  C as getFluentCompatibleId,
  Ln as getFluentData,
  ui as getKey,
  Zo as getValidatorPropertyBlockType,
  mn as groupBy,
  Vn as htmlAttributes,
  Zn as initFormFields,
  We as internalErrorModel,
  hi as isContainer,
  Qe as isFunctionalProperty,
  Sr as isLocalizedProperty,
  Et as isPromise,
  di as isProperty,
  zn as isString,
  Tn as isUniqueKey,
  Pi as isValidatorPropertyBlockType,
  pi as key,
  Fi as loadResource,
  Wt as nameAutorun,
  L as nameObservable,
  P as namedObserver,
  xn as node,
  fi as number,
  ze as oneOf,
  On as renderWhen,
  B as screenModel,
  Fn as size,
  Ke as slotModel,
  bi as someOf,
  yr as string,
  Ei as testFluentLocalization,
  Ae as toArray,
  Di as toLabeledValues,
  An as tooltipProps,
  vi as tooltipType,
  dt as treeForEach,
  xi as unloadResource,
  X as useComponentData,
  ks as useDisposable,
  xo as useErrorModel,
  F as useStore,
  Po as useTooltipType,
  q as useViewerProps,
  kn as validation
};
//# sourceMappingURL=index.js.map
