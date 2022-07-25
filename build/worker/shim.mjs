var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shim.js
import * as wasm from "./index.wasm";

// index_bg.js
var index_bg_exports = {};
__export(index_bg_exports, {
  DurableObjectExample: () => DurableObjectExample,
  IntoUnderlyingByteSource: () => IntoUnderlyingByteSource,
  IntoUnderlyingSink: () => IntoUnderlyingSink,
  IntoUnderlyingSource: () => IntoUnderlyingSource,
  MinifyConfig: () => MinifyConfig,
  PipeOptions: () => PipeOptions,
  PolishConfig: () => PolishConfig,
  QueuingStrategy: () => QueuingStrategy,
  ReadableStreamGetReaderOptions: () => ReadableStreamGetReaderOptions,
  RequestRedirect: () => RequestRedirect,
  __wbg_buffer_de1150f91b23aa89: () => __wbg_buffer_de1150f91b23aa89,
  __wbg_buffer_f00028fd9efc903b: () => __wbg_buffer_f00028fd9efc903b,
  __wbg_byobRequest_3e1cb18a6efca4e4: () => __wbg_byobRequest_3e1cb18a6efca4e4,
  __wbg_byteLength_6f22329fd199ce7d: () => __wbg_byteLength_6f22329fd199ce7d,
  __wbg_byteOffset_b3edd58064ebb082: () => __wbg_byteOffset_b3edd58064ebb082,
  __wbg_bytesliteral_1860f600f905fea0: () => __wbg_bytesliteral_1860f600f905fea0,
  __wbg_call_9855a4612eb496cb: () => __wbg_call_9855a4612eb496cb,
  __wbg_cf_618414bbd658dfda: () => __wbg_cf_618414bbd658dfda,
  __wbg_close_146359de33accd5b: () => __wbg_close_146359de33accd5b,
  __wbg_close_26866406ee8e0abb: () => __wbg_close_26866406ee8e0abb,
  __wbg_enqueue_eb446030ed643eb5: () => __wbg_enqueue_eb446030ed643eb5,
  __wbg_headers_1041ecaccc96679c: () => __wbg_headers_1041ecaccc96679c,
  __wbg_instanceof_Error_53fd3b982f19be06: () => __wbg_instanceof_Error_53fd3b982f19be06,
  __wbg_length_e09c0b925ab8de5d: () => __wbg_length_e09c0b925ab8de5d,
  __wbg_method_9f87b819726990a0: () => __wbg_method_9f87b819726990a0,
  __wbg_new_306c2ffa69ee14e4: () => __wbg_new_306c2ffa69ee14e4,
  __wbg_new_306ce8d57919e6ae: () => __wbg_new_306ce8d57919e6ae,
  __wbg_new_651776e932b7e9c7: () => __wbg_new_651776e932b7e9c7,
  __wbg_new_78403b138428b684: () => __wbg_new_78403b138428b684,
  __wbg_newwithbyteoffsetandlength_9ca61320599a2c84: () => __wbg_newwithbyteoffsetandlength_9ca61320599a2c84,
  __wbg_newwithlength_e833b89f9db02732: () => __wbg_newwithlength_e833b89f9db02732,
  __wbg_newwithoptstrandinit_51f672706eeb5dfc: () => __wbg_newwithoptstrandinit_51f672706eeb5dfc,
  __wbg_newwithoptstreamandinit_3326d20a7510e299: () => __wbg_newwithoptstreamandinit_3326d20a7510e299,
  __wbg_newwithoptu8arrayandinit_d0f12406c27430d7: () => __wbg_newwithoptu8arrayandinit_d0f12406c27430d7,
  __wbg_resolve_f269ce174f88b294: () => __wbg_resolve_f269ce174f88b294,
  __wbg_respond_553c92471e2e621b: () => __wbg_respond_553c92471e2e621b,
  __wbg_set_4c3d3a2b873372e2: () => __wbg_set_4c3d3a2b873372e2,
  __wbg_set_a0172b213e2469e9: () => __wbg_set_a0172b213e2469e9,
  __wbg_set_b12cd0ab82903c2f: () => __wbg_set_b12cd0ab82903c2f,
  __wbg_then_1c698eedca15eed6: () => __wbg_then_1c698eedca15eed6,
  __wbg_toString_ef76a2af8f5bb98a: () => __wbg_toString_ef76a2af8f5bb98a,
  __wbg_url_1a1486b1eda80e31: () => __wbg_url_1a1486b1eda80e31,
  __wbg_view_7ad18ad26d71d774: () => __wbg_view_7ad18ad26d71d774,
  __wbindgen_cb_drop: () => __wbindgen_cb_drop,
  __wbindgen_closure_wrapper524: () => __wbindgen_closure_wrapper524,
  __wbindgen_debug_string: () => __wbindgen_debug_string,
  __wbindgen_memory: () => __wbindgen_memory,
  __wbindgen_number_new: () => __wbindgen_number_new,
  __wbindgen_object_clone_ref: () => __wbindgen_object_clone_ref,
  __wbindgen_object_drop_ref: () => __wbindgen_object_drop_ref,
  __wbindgen_string_get: () => __wbindgen_string_get,
  __wbindgen_string_new: () => __wbindgen_string_new,
  __wbindgen_throw: () => __wbindgen_throw
});

// snippets/wasm-streams-42e57edbcd526312/inline0.js
function bytes_literal() {
  return "bytes";
}

// glue.js
import wasmModule from "./index.wasm";
var instance = new WebAssembly.Instance(wasmModule, { "./index_bg.js": index_bg_exports });
var glue_default = instance.exports;

// index_bg.js
var heap = new Array(32).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
var lTextDecoder = typeof TextDecoder === "undefined" ? (0, module.require)("util").TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachedUint8Memory0;
function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(glue_default.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
var WASM_VECTOR_LEN = 0;
var lTextEncoder = typeof TextEncoder === "undefined" ? (0, module.require)("util").TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder("utf-8");
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length);
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127)
      break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedInt32Memory0;
function getInt32Memory0() {
  if (cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(glue_default.memory.buffer);
  }
  return cachedInt32Memory0;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
function makeMutClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        glue_default.__wbindgen_export_2.get(state.dtor)(a, state.b);
      } else {
        state.a = a;
      }
    }
  };
  real.original = state;
  return real;
}
function __wbg_adapter_20(arg0, arg1, arg2) {
  glue_default._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7a5eb119e7d53a09(arg0, arg1, addHeapObject(arg2));
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    glue_default.__wbindgen_exn_store(addHeapObject(e));
  }
}
function __wbg_adapter_93(arg0, arg1, arg2, arg3) {
  glue_default.wasm_bindgen__convert__closures__invoke2_mut__h92e84d4bf7b5220d(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}
var PolishConfig = Object.freeze({ Off: 0, "0": "Off", Lossy: 1, "1": "Lossy", Lossless: 2, "2": "Lossless" });
var RequestRedirect = Object.freeze({ Error: 0, "0": "Error", Follow: 1, "1": "Follow", Manual: 2, "2": "Manual" });
var DurableObjectExample = class {
  static __wrap(ptr) {
    const obj = Object.create(DurableObjectExample.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    glue_default.__wbg_durableobjectexample_free(ptr);
  }
  constructor(state, env) {
    const ret = glue_default.durableobjectexample__new(addHeapObject(state), addHeapObject(env));
    return DurableObjectExample.__wrap(ret);
  }
  fetch(req) {
    const ret = glue_default.durableobjectexample_fetch(this.ptr, addHeapObject(req));
    return takeObject(ret);
  }
};
var IntoUnderlyingByteSource = class {
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    glue_default.__wbg_intounderlyingbytesource_free(ptr);
  }
  get type() {
    const ret = glue_default.intounderlyingbytesource_type(this.ptr);
    return takeObject(ret);
  }
  get autoAllocateChunkSize() {
    const ret = glue_default.intounderlyingbytesource_autoAllocateChunkSize(this.ptr);
    return ret >>> 0;
  }
  start(controller) {
    glue_default.intounderlyingbytesource_start(this.ptr, addHeapObject(controller));
  }
  pull(controller) {
    const ret = glue_default.intounderlyingbytesource_pull(this.ptr, addHeapObject(controller));
    return takeObject(ret);
  }
  cancel() {
    const ptr = this.__destroy_into_raw();
    glue_default.intounderlyingbytesource_cancel(ptr);
  }
};
var IntoUnderlyingSink = class {
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    glue_default.__wbg_intounderlyingsink_free(ptr);
  }
  write(chunk) {
    const ret = glue_default.intounderlyingsink_write(this.ptr, addHeapObject(chunk));
    return takeObject(ret);
  }
  close() {
    const ptr = this.__destroy_into_raw();
    const ret = glue_default.intounderlyingsink_close(ptr);
    return takeObject(ret);
  }
  abort(reason) {
    const ptr = this.__destroy_into_raw();
    const ret = glue_default.intounderlyingsink_abort(ptr, addHeapObject(reason));
    return takeObject(ret);
  }
};
var IntoUnderlyingSource = class {
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    glue_default.__wbg_intounderlyingsource_free(ptr);
  }
  pull(controller) {
    const ret = glue_default.intounderlyingsource_pull(this.ptr, addHeapObject(controller));
    return takeObject(ret);
  }
  cancel() {
    const ptr = this.__destroy_into_raw();
    glue_default.intounderlyingsource_cancel(ptr);
  }
};
var MinifyConfig = class {
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    glue_default.__wbg_minifyconfig_free(ptr);
  }
  get js() {
    const ret = glue_default.__wbg_get_minifyconfig_js(this.ptr);
    return ret !== 0;
  }
  set js(arg0) {
    glue_default.__wbg_set_minifyconfig_js(this.ptr, arg0);
  }
  get html() {
    const ret = glue_default.__wbg_get_minifyconfig_html(this.ptr);
    return ret !== 0;
  }
  set html(arg0) {
    glue_default.__wbg_set_minifyconfig_html(this.ptr, arg0);
  }
  get css() {
    const ret = glue_default.__wbg_get_minifyconfig_css(this.ptr);
    return ret !== 0;
  }
  set css(arg0) {
    glue_default.__wbg_set_minifyconfig_css(this.ptr, arg0);
  }
};
var PipeOptions = class {
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    glue_default.__wbg_pipeoptions_free(ptr);
  }
  get preventClose() {
    const ret = glue_default.pipeoptions_preventClose(this.ptr);
    return ret !== 0;
  }
  get preventCancel() {
    const ret = glue_default.pipeoptions_preventCancel(this.ptr);
    return ret !== 0;
  }
  get preventAbort() {
    const ret = glue_default.pipeoptions_preventAbort(this.ptr);
    return ret !== 0;
  }
  get signal() {
    const ret = glue_default.pipeoptions_signal(this.ptr);
    return takeObject(ret);
  }
};
var QueuingStrategy = class {
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    glue_default.__wbg_queuingstrategy_free(ptr);
  }
  get highWaterMark() {
    const ret = glue_default.queuingstrategy_highWaterMark(this.ptr);
    return ret;
  }
};
var ReadableStreamGetReaderOptions = class {
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    glue_default.__wbg_readablestreamgetreaderoptions_free(ptr);
  }
  get mode() {
    const ret = glue_default.readablestreamgetreaderoptions_mode(this.ptr);
    return takeObject(ret);
  }
};
function __wbindgen_object_drop_ref(arg0) {
  takeObject(arg0);
}
function __wbindgen_number_new(arg0) {
  const ret = arg0;
  return addHeapObject(ret);
}
function __wbindgen_string_new(arg0, arg1) {
  const ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
}
function __wbindgen_string_get(arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof obj === "string" ? obj : void 0;
  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, glue_default.__wbindgen_malloc, glue_default.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
function __wbindgen_cb_drop(arg0) {
  const obj = takeObject(arg0).original;
  if (obj.cnt-- == 1) {
    obj.a = 0;
    return true;
  }
  const ret = false;
  return ret;
}
function __wbindgen_object_clone_ref(arg0) {
  const ret = getObject(arg0);
  return addHeapObject(ret);
}
function __wbg_close_146359de33accd5b(arg0) {
  getObject(arg0).close();
}
function __wbg_enqueue_eb446030ed643eb5(arg0, arg1) {
  getObject(arg0).enqueue(getObject(arg1));
}
function __wbg_byobRequest_3e1cb18a6efca4e4(arg0) {
  const ret = getObject(arg0).byobRequest;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_close_26866406ee8e0abb(arg0) {
  getObject(arg0).close();
}
function __wbg_view_7ad18ad26d71d774(arg0) {
  const ret = getObject(arg0).view;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
function __wbg_respond_553c92471e2e621b(arg0, arg1) {
  getObject(arg0).respond(arg1 >>> 0);
}
function __wbg_buffer_f00028fd9efc903b(arg0) {
  const ret = getObject(arg0).buffer;
  return addHeapObject(ret);
}
function __wbg_byteOffset_b3edd58064ebb082(arg0) {
  const ret = getObject(arg0).byteOffset;
  return ret;
}
function __wbg_byteLength_6f22329fd199ce7d(arg0) {
  const ret = getObject(arg0).byteLength;
  return ret;
}
function __wbg_bytesliteral_1860f600f905fea0() {
  const ret = bytes_literal();
  return addHeapObject(ret);
}
function __wbg_newwithoptu8arrayandinit_d0f12406c27430d7() {
  return handleError(function(arg0, arg1) {
    const ret = new Response(takeObject(arg0), getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_newwithoptstrandinit_51f672706eeb5dfc() {
  return handleError(function(arg0, arg1, arg2) {
    const ret = new Response(arg0 === 0 ? void 0 : getStringFromWasm0(arg0, arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_newwithoptstreamandinit_3326d20a7510e299() {
  return handleError(function(arg0, arg1) {
    const ret = new Response(takeObject(arg0), getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_method_9f87b819726990a0(arg0, arg1) {
  const ret = getObject(arg1).method;
  const ptr0 = passStringToWasm0(ret, glue_default.__wbindgen_malloc, glue_default.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
function __wbg_url_1a1486b1eda80e31(arg0, arg1) {
  const ret = getObject(arg1).url;
  const ptr0 = passStringToWasm0(ret, glue_default.__wbindgen_malloc, glue_default.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
function __wbg_headers_1041ecaccc96679c(arg0) {
  const ret = getObject(arg0).headers;
  return addHeapObject(ret);
}
function __wbg_cf_618414bbd658dfda(arg0) {
  const ret = getObject(arg0).cf;
  return addHeapObject(ret);
}
function __wbg_new_306c2ffa69ee14e4() {
  return handleError(function() {
    const ret = new Headers();
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_set_4c3d3a2b873372e2() {
  return handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
  }, arguments);
}
function __wbg_new_306ce8d57919e6ae() {
  const ret = new Object();
  return addHeapObject(ret);
}
function __wbg_instanceof_Error_53fd3b982f19be06(arg0) {
  const ret = getObject(arg0) instanceof Error;
  return ret;
}
function __wbg_new_651776e932b7e9c7(arg0, arg1) {
  const ret = new Error(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
function __wbg_toString_ef76a2af8f5bb98a(arg0) {
  const ret = getObject(arg0).toString();
  return addHeapObject(ret);
}
function __wbg_call_9855a4612eb496cb() {
  return handleError(function(arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  }, arguments);
}
function __wbg_new_78403b138428b684(arg0, arg1) {
  try {
    var state0 = { a: arg0, b: arg1 };
    var cb0 = (arg02, arg12) => {
      const a = state0.a;
      state0.a = 0;
      try {
        return __wbg_adapter_93(a, state0.b, arg02, arg12);
      } finally {
        state0.a = a;
      }
    };
    const ret = new Promise(cb0);
    return addHeapObject(ret);
  } finally {
    state0.a = state0.b = 0;
  }
}
function __wbg_resolve_f269ce174f88b294(arg0) {
  const ret = Promise.resolve(getObject(arg0));
  return addHeapObject(ret);
}
function __wbg_then_1c698eedca15eed6(arg0, arg1) {
  const ret = getObject(arg0).then(getObject(arg1));
  return addHeapObject(ret);
}
function __wbg_buffer_de1150f91b23aa89(arg0) {
  const ret = getObject(arg0).buffer;
  return addHeapObject(ret);
}
function __wbg_newwithbyteoffsetandlength_9ca61320599a2c84(arg0, arg1, arg2) {
  const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
}
function __wbg_set_a0172b213e2469e9(arg0, arg1, arg2) {
  getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}
function __wbg_length_e09c0b925ab8de5d(arg0) {
  const ret = getObject(arg0).length;
  return ret;
}
function __wbg_newwithlength_e833b89f9db02732(arg0) {
  const ret = new Uint8Array(arg0 >>> 0);
  return addHeapObject(ret);
}
function __wbg_set_b12cd0ab82903c2f() {
  return handleError(function(arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
  }, arguments);
}
function __wbindgen_debug_string(arg0, arg1) {
  const ret = debugString(getObject(arg1));
  const ptr0 = passStringToWasm0(ret, glue_default.__wbindgen_malloc, glue_default.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
function __wbindgen_memory() {
  const ret = glue_default.memory;
  return addHeapObject(ret);
}
function __wbindgen_closure_wrapper524(arg0, arg1, arg2) {
  const ret = makeMutClosure(arg0, arg1, 90, __wbg_adapter_20);
  return addHeapObject(ret);
}
cachedInt32Memory0 = new Int32Array(glue_default.memory.buffer);
cachedUint8Memory0 = new Uint8Array(glue_default.memory.buffer);

// shim.js
(void 0)?.();
var shim_default = { fetch: void 0, scheduled: void 0 };
export {
  DurableObjectExample,
  IntoUnderlyingByteSource,
  IntoUnderlyingSink,
  IntoUnderlyingSource,
  MinifyConfig,
  PipeOptions,
  PolishConfig,
  QueuingStrategy,
  ReadableStreamGetReaderOptions,
  RequestRedirect,
  __wbg_buffer_de1150f91b23aa89,
  __wbg_buffer_f00028fd9efc903b,
  __wbg_byobRequest_3e1cb18a6efca4e4,
  __wbg_byteLength_6f22329fd199ce7d,
  __wbg_byteOffset_b3edd58064ebb082,
  __wbg_bytesliteral_1860f600f905fea0,
  __wbg_call_9855a4612eb496cb,
  __wbg_cf_618414bbd658dfda,
  __wbg_close_146359de33accd5b,
  __wbg_close_26866406ee8e0abb,
  __wbg_enqueue_eb446030ed643eb5,
  __wbg_headers_1041ecaccc96679c,
  __wbg_instanceof_Error_53fd3b982f19be06,
  __wbg_length_e09c0b925ab8de5d,
  __wbg_method_9f87b819726990a0,
  __wbg_new_306c2ffa69ee14e4,
  __wbg_new_306ce8d57919e6ae,
  __wbg_new_651776e932b7e9c7,
  __wbg_new_78403b138428b684,
  __wbg_newwithbyteoffsetandlength_9ca61320599a2c84,
  __wbg_newwithlength_e833b89f9db02732,
  __wbg_newwithoptstrandinit_51f672706eeb5dfc,
  __wbg_newwithoptstreamandinit_3326d20a7510e299,
  __wbg_newwithoptu8arrayandinit_d0f12406c27430d7,
  __wbg_resolve_f269ce174f88b294,
  __wbg_respond_553c92471e2e621b,
  __wbg_set_4c3d3a2b873372e2,
  __wbg_set_a0172b213e2469e9,
  __wbg_set_b12cd0ab82903c2f,
  __wbg_then_1c698eedca15eed6,
  __wbg_toString_ef76a2af8f5bb98a,
  __wbg_url_1a1486b1eda80e31,
  __wbg_view_7ad18ad26d71d774,
  __wbindgen_cb_drop,
  __wbindgen_closure_wrapper524,
  __wbindgen_debug_string,
  __wbindgen_memory,
  __wbindgen_number_new,
  __wbindgen_object_clone_ref,
  __wbindgen_object_drop_ref,
  __wbindgen_string_get,
  __wbindgen_string_new,
  __wbindgen_throw,
  shim_default as default
};
