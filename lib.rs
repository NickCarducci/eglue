//https://github.com/cloudflare/workers-rs/issues/94
//"you'll need to define the Durable Object in a separate module. ...this:"
//"https://github.com/cloudflare/workers-rs/blob/main/worker-sandbox/src/lib.rs"

// We're able to specify a start event that is called when the WASM is initialized before any
// requests. This is useful if you have some global state or setup code, like a logger. This is
// only called once for the entire lifetime of the worker.
//use wasm_bindgen::JsValue;
use std::sync::atomic::{AtomicBool, Ordering /*,Result as Resultt*/};
//use web_sys::Url; //web_sys
//use wasm_bindgen::prelude::wasm_bindgen;
//use wasm_bindgen_futures::ResponseInit; wrong
//use web_sys::{ResponseInit,Response as webRes};

use worker::{
    /*console_log, Headers,RequestInit, Fetch,*/ event, Env, Request, Response, Result, Router,
};

mod index;
mod utils;
static GLOBAL_STATE: AtomicBool = AtomicBool::new(false);
#[event(start)]
pub fn start() {
    utils::set_panic_hook();
    // Change some global state so we know that we ran our setup function.
    GLOBAL_STATE.store(true, Ordering::SeqCst);
}

use serde::Serialize;
#[derive(Serialize)]
struct Product {
    url: String,
}
#[derive(Serialize)]
struct Error {
    err: String,
}
struct SomeSharedData {
    //data: u8, //regex::Regex,
}
//https://github.com/rust-lang/rfcs/pull/2600; //https://github.com/rust-lang/rust/issues/23416, type ascription ob.key: Type=value
#[event(fetch, respond_with_errors)] //#![feature(type_ascription)]//https://stackoverflow.com/questions/36389974/what-is-type-ascription
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    //use the request parameter of the router instead else return closure/(pointer)
    fn origin_url(req_headers: &worker::Headers) -> std::string::String {
        return match req_headers.get("Origin").unwrap() {
            Some(value) => value,
            None => "".to_owned() + "", //Response::empty(),
        };
    }
    let info = SomeSharedData {
        //data: 0, //regex::Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap(),
    };
    let router = Router::with_data(info); // if no data is needed, pass `()` or any other valid data
                                          /*if (request.method === "OPTIONS")
                                            return new Response(`preflight response for POST`, {
                                              status: 200,
                                              message: `preflight response for POST`,
                                              headers: {
                                                "Access-Control-Allow-Headers": [
                                                  //"Access-Control-Allow-Origin",
                                                  "Access-Control-Allow-Methods",
                                                  "Content-Type"
                                                  //"Origin",
                                                  //"X-Requested-With",
                                                  //"Accept"
                                                ],
                                                "Access-Control-Allow-Methods": ["POST", "OPTIONS"]
                                              }
                                            });
                                          return await noException(request, env);*/
    /*.options("/ *catchall", |_, ctx| {
        Response::ok(ctx.param("catchall").unwrap())
    })*/
    router
        .get("/", |_, _| {
            Response::error(&("{error:get (method?) ".to_owned() + "}" + ""), 405)
        })
        .options("/", |req, _ctx| {
            let req_headers = req.headers(); //<&worker::Headers>
            let cors_origin = origin_url(req_headers);
            //let cors_origin = &ctx.var("CORS_ORIGIN")?.to_string(); //<&str>
            return match [
                "https://sausage.vau.money",
                "https://vau.money",
                "https://jwi5k.csb.app",
                "https://i7l8qe.csb.app", //,"https://mastercard-backbank.backbank.workers.dev"
            ]
            .iter()
            .any(|&s| s == cors_origin)
            {
                true => {
                    //options(req_headers, cors_origin)
                    //https://rodneylab.com/using-rust-cloudflare-workers/
                    //fn preflight_response(_,_)->Result<Response> {
                    let mut res_headers = worker::Headers::new();
                    res_headers.set("Access-Control-Allow-Origin", "*")?;
                    res_headers.set("Access-Control-Allow-Headers", "Content-Type")?;
                    res_headers.set("Access-Control-Allow-Methods", "POST")?;
                    //res_headers.set("Vary", "Origin")?;
                    for origin_element in cors_origin.split(',') {
                        if cors_origin.eq(origin_element) {
                            res_headers.set("Access-Control-Allow-Origin", &cors_origin)?;
                            break;
                        };
                    }
                    res_headers.set("Access-Control-Max-Age", "86400")?;
                    let req_method = req.method();
                    Response::ok(req_method).map(|resp| resp.with_headers(res_headers))
                }
                false => Response::error(&("no access from ".to_owned() + &cors_origin), 403), //&format!("no access from ")
            };
        }) //https://community.cloudflare.com/t/fetch-post-type-error-failed-to-execute-function/311016/3?u=carducci
        .post_async("/", |_req, ctx| async move {
            //async may ask for pointer/(closure) with (1) both _[vars] like _req,_ctx, as well as (2) expression `return;`
            /*UX for Post requests should enable textual resolutions
             I would like to suggest a UX solution that would be least astonishing, and bring this into the workflow of your products in other facets,
             or explain why errors

            https://community.cloudflare.com/t/fetch-post-type-error-failed-to-execute-function/311016/3?u=carducci
             */
            //let url = Url::new(&_req.url()?)?;
            //let url =  req.url()?;
            //let mut res_headers = worker::Headers::new();
            //return Response::ok(url.host_str())//.map(|resp| resp.with_headers(res_headers));;

            /*return Response::from_json(&Product {
                url: "stub.fetch_with_str(https://mastercard-backbank.backbank.workers.dev/).await"
                    .to_string(),
            });*/
            /*return match req.url()?.host_str() {
            None => Response::from_json(&Error {
                err: "cannot _req.url()?.host_str()".to_string(),
            }), //,505
            //Option(resolution) => {explicit return; resolves in closure}
            Some(url) => {*/
            //Response::from_json(&Product{url: url.to_string()}) //.map(|resp| resp.with_headers(res_headers));;
            //get, async move
            let binding = ctx.durable_object("EXAMPLE_CLASS_DURABLE_OBJECT");
            return match binding.is_err() {
                true => Response::error("EXAMPLE_CLASS_DURABLE_OBJECT is_err", 405),
                false => {
                    let namespace = binding?;
                    let stub = namespace.id_from_name("DurableObjectExample")?.get_stub()?;
                    stub.fetch_with_str("https://mastercard-backbank.backbank.workers.dev/")
                        .await //this is not like fetching the resource again, just the stub
                    /*A full URL must be used (when calling fetch on a Durable Object).
                    Also, a wrangler.toml compatibility flag can opt-in to[ the otherwise] 
                    [older behavior](https://developers.cloudflare.com/workers/platform/compatibility-dates#durable-object-stubfetch-requires-a-full-url).

                    Astonishingly, I would have figured out to ask this sooner if Post requests could enable 
                    [textual resolutions](https://community.cloudflare.com/t/fetch-post-type-error-failed-to-execute-function/311016/3?u=carducci).
                    */
                }
            };
            //}}
        })
        .run(req, env)
        .await// == Ok for Result<T> not return (hoist);
        //https://stackoverflow.com/questions/60020738/expected-enum-stdresultresult-found
              
}
}
