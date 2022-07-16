use wasm_bindgen::prelude::wasm_bindgen;

pub fn pathify(path: &str) -> std::path::PathBuf {
    let mut input_file = std::path::PathBuf::new();

    let arr: () = path.split("/").map(|x| input_file.push(x)).collect();
    return input_file;
}

use js_sys::Promise;
use std::future::IntoFuture;
use wasm_bindgen::JsValue;
use wasm_bindgen_futures::future_to_promise;

#[wasm_bindgen]
pub async fn main() -> Result<Promise, JsValue> {
    struct Ship;
    impl IntoFuture for Ship {
        type Output = vec![u8];
        type IntoFuture = Self::Output;
        fn into_future(self) -> Self::IntoFuture {
            let lock: std::path::PathBuf = pathify("./exec.c");
            let app: vec![u8] = cc::Build::new().file(lock).expand();
            println!("{}", app);
        }
    }
    let result: Promise = future_to_promise(Ship.await);
    Ok(result)
}
//https://github.com/rust-lang/rust/issues/67644

/*
struct Jship(Result<JsValue, JsValue>);

use wasm_bindgen::prelude::wasm_bindgen;
mod jfmast;

struct Number(u8);
#[wasm_bindgen(start)]
pub fn main () /*-> jfmast::Jship*/ { jfmast( args )}*/
