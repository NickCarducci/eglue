//https://github.com/cloudflare/workers-rs/issues/94
//"you'll need to define the Durable Object in a separate module. ...this:"
//"https://github.com/cloudflare/workers-rs/blob/main/worker-sandbox/src/lib.rs"

//use wasm_bindgen::JsValue;
use std::sync::atomic::{AtomicBool, Ordering};
//use web_sys::Url; //web_sys
use worker::{/*Headers,RequestInit,*/event, Env, Request, Response, Result, Router};

mod utils;
mod index;
static GLOBAL_STATE: AtomicBool = AtomicBool::new(false);
#[event(start)]
pub fn start() {
    utils::set_panic_hook();
    // Change some global state so we know that we ran our setup function.
    GLOBAL_STATE.store(true, Ordering::SeqCst);
}

struct SomeSharedData {
    data: u8, //regex::Regex,
}
//https://github.com/rust-lang/rfcs/pull/2600; //https://github.com/rust-lang/rust/issues/23416, type ascription ob.key: Type=value
#[event(fetch)] //#![feature(type_ascription)]//https://stackoverflow.com/questions/36389974/what-is-type-ascription
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    let info = SomeSharedData {
        data: 0, //regex::Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap(),
    };

    let router = Router::with_data(info); // if no data is needed, pass `()` or any other valid data

    router
        .get_async("/:id", |_req, ctx| async move {
            //get, async move
            let namespace = ctx.durable_object("EXAMPLE_CLASS_DURABLE_OBJECT")?;
            let stub = namespace.id_from_name("DurableObjectExample")?.get_stub()?;
            return match _req.url().ok() {
                //Result.ok to Option
                Some(url) => match url.host_str() {
                    //Option
                    Some(url) => match [ 
                            "https://sausage.vau.money","https://vau.money","https://jwi5k.csb.app","https://i7l8qe.csb.app"//,"https://mastercard-backbank.backbank.workers.dev"
                        ].iter().any(|&s| s == url) {
                            true => stub.fetch_with_str(url).await,
                            false => Response::ok(&("no access from ".to_owned()+url))//&format!("no access from ")
                        },
                    None => Response::ok(&("cannot host_str() ".to_owned()+""))//eprintln!("noope"),
                },
                None => Response::ok(&("cannot req.url() ".to_owned()+"")),
            };
        })//https://github.com/NickCarducci/mastercard-backbank/blob/main/lib.rs
        .run(req, env)
        .await
}
