use wasm_bindgen::prelude::*;
use js_sys::Math;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet(){
    let b = (Math::random() * 100.) as i32;
    alert(&format!("Random Number {}", &b.to_string()));
    log(&b.to_string());
}