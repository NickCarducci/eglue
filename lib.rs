use wasm_bindgen::prelude::wasm_bindgen;
mod jfmast;

struct Number(u8);
#[wasm_bindgen(start)]
pub fn main () /*-> jfmast::Jship*/ { jfmast( args )}