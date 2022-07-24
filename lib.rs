//https://github.com/cloudflare/workers-rs/issues/94
//"you'll need to define the Durable Object in a separate module. ...this:"
//"https://github.com/cloudflare/workers-rs/blob/main/worker-sandbox/src/lib.rs"
use worker::{
    /*console_log, Headers,RequestInit, Fetch,*/ event, Env, Request, Response, Result, Router,
};

mod index;
/*mod utils;
static GLOBAL_STATE: AtomicBool = AtomicBool::new(false);
#[event(start)]
pub fn start() {
    utils::set_panic_hook();
    // Change some global state so we know that we ran our setup function.
    GLOBAL_STATE.store(true, Ordering::SeqCst);
}*/

/*#[wasm_bindgen]
pub fn handle(option:Option<String>) ->Resultt<webRes,worker::Error>  {
    //let req: Request = req.dyn_into()?;
    //let mut init = ResponseInit::new();
    //init.status(200);
    let option = option.as_deref();
    return webRes::new_with_opt_str(option);//webRes::new_with_opt_str(None, &init);
}*/

struct SomeSharedData {
    //data: u8, //regex::Regex,
}

#[event(fetch,respond_with_errors)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    fn origin_url(req_headers: &worker::Headers) -> std::string::String {
        return match req_headers.get("Origin").unwrap() {
            Some(value) => value,
            None => "".to_owned() + "", //Response::empty(),
        };
    }
    let info = SomeSharedData {
        //data: 0, //regex::Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap(),
    };
    let _result = Router::with_data(info) // if no data is needed, pass `()` or any other valid data
        .options("/*catchall", |_, ctx| {
            Response::ok(ctx.param("catchall").unwrap())
        })
        .options("/:id", |_, _| {
            return Response::error(&("option (where?) ".to_owned() + ""), 404);
        })
        .options_async("/", |req, ctx| async move {
            let req_headers = req.headers(); //<&worker::Headers>
            let cors_origin = &ctx.var("CORS_ORIGIN")?.to_string(); //<&str>

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
                    let origin = origin_url(req_headers);
                    let mut res_headers = worker::Headers::new();
                    res_headers.set("Access-Control-Allow-Headers", "Content-Type")?;
                    res_headers.set("Access-Control-Allow-Methods", "POST")?;
                    //res_headers.set("Vary", "Origin")?;
                    for origin_element in cors_origin.split(',') {
                        if origin.eq(origin_element) {
                            res_headers.set("Access-Control-Allow-Origin", &origin)?;
                            break;
                        };
                    }
                    res_headers.set("Access-Control-Max-Age", "86400")?;
                    let req_method = req.method();
                    return Response::ok(req_method).map(|resp| resp.with_headers(res_headers));
                    /*.unwrap()
                    .with_headers(res_headers)
                    .with_status(204)*/
                }
                false => Response::error(&("no access from ".to_owned() + cors_origin), 403), //&format!("no access from ")
            };
        })
        .get("/:id", |_, _| {
            return Response::error(&("get (where?) ".to_owned() + ""), 404);
            //return Ok(Response::error(&("get (where?) ".to_owned() + ""), 404)?);
        })
        .get("/", |_, _| {
            return Response::error(&("get (method?) ".to_owned() + ""), 405);
        })
        .post_async("/", |_req, ctx| async move {
            // https://developers.cloudflare.com/workers/platform/compatibility-dates#durable-object-stubfetch-requires-a-full-url
            let url: worker::Url = _req.url()?;
            return Response::ok(match url.host_str() {
                None => "cannot host_str() ".to_owned() + "",
                //Option resolution =>
                Some(url) => {
                    //get, async move
                    let binding = ctx.durable_object("EXAMPLE_CLASS_DURABLE_OBJECT");
                    return match binding.is_err() {
                        false => Response::error("none", 405),
                        true => {
                            let namespace = binding?;
                            let _stub =
                                namespace.id_from_name("DurableObjectExample")?.get_stub()?;

                                /*let mut opts = RequestInit::new();
                                opts.method("GET");
                                opts.mode(RequestMode::Cors);
                                let url =
                                    format!("https://api.github.com/repos/{}/branches/master", repo);
                                let request = Request::new_with_str_and_init(&url, &opts)?;

                            request
                                .headers()
                                .set("Accept", "application/vnd.github.v3+json")?;*/
                            return Response::ok(url);
                            //return stub.fetch_with_str(&url).await;
                        }
                    };
                }
            });
        })
        .or_else_any_method("/*catchall", |req, ctx| {
            /*console_log!(
                "[or_else_any_method_async] caught: {}",
                ctx.param("catchall").unwrap_or(&"?".to_string())
            );*/
            /*Fetch::Url("https://github.com/404".parse().unwrap())
            .send()
            .await
            .map(|resp| resp.with_status(404)) */

            let req_headers = req.headers();
            let cors_origin = &ctx.var("CORS_ORIGIN")?.to_string(); //<&str>

            let mut res_headers = worker::Headers::new();
            res_headers.set("Access-Control-Allow-Headers", "Content-Type")?;
            res_headers.set("Access-Control-Allow-Methods", "POST")?;
            //headers.set("Vary", "Origin")?;
            let origin = origin_url(req_headers);
            for origin_element in cors_origin.split(',') {
                if origin.eq(origin_element) {
                    res_headers.set("Access-Control-Allow-Origin", &origin)?;
                    break;
                };
            }
            //return Response::ok("waffles")?.with_headers(res_headers);
            return Response::ok("waffles").map(|resp| resp.with_headers(res_headers));
        })
        .run(req, env)
        .await; //;
    //return result;
    return Response::ok("");
    //return Response::error("key missing", 400);
}
