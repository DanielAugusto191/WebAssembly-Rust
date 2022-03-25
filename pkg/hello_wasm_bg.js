import * as wasm from './hello_wasm_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

function notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }

export function __wbg_alert_6beb677b0bcab167(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

export function __wbg_log_8f6c02dd129dbf1b(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
};

export const __wbg_random_7b8246250fd79f60 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

