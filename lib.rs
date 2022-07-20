use std::sync::atomic::Ordering;
#[event(start)]
pub fn start() {
    //utils::set_panic_hook();

    // Change some global state so we know that we ran our setup function.
    GLOBAL_STATE.store(true, Ordering::SeqCst);
}

#[event(fetch)]//https://github.com/NickCarducci/mastercard-backbank/blob/main/lib.rs
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    let data = SomeSharedData {
        regex: regex::Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap(),
    };
    let router = Router::with_data(data); // if no data is needed, pass `()` or any other valid data
    router
        .get_async("/:id", |_req, ctx| async move {//get, async move
            let namespace = ctx.durable_object("EXAMPLE_CLASS_DURABLE_OBJECT")?;
            let stub = namespace.id_from_name("A")?.get_stub()?;
            stub.fetch_with_str(req.url.host_str()).await
        })
}
