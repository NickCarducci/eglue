use worker::*;
 
#[durable_object]
pub struct DurableObjectExample {
  data: String,//Vec<u8>,
  initialized: bool,
  state: State,
  env: Env,
}

fn pathify(path: &str) -> std::path::PathBuf {
  let mut input_file = std::path::PathBuf::new();
  let _arr: () = path.split("/").map(|x| input_file.push(x)).collect();
  return input_file;
}

#[durable_object]
impl DurableObject for DurableObjectExample {
  fn new(state: State, env: Env) -> Self {
    Self {
      data: format!(""),//vec![]//https://www.hackertouch.com/how-to-create-and-check-string-is-empty-rust.html
      initialized: false,
      state: state,
      env,
    }
  }
  
  async fn fetch(&mut self, _req: Request) -> Result<Response> {
    if !self.initialized {
        self.initialized = true;
    }

    let lock: std::path::PathBuf = pathify("./exec.c");
    let durr: Vec<u8> = cc::Build::new().file(lock).expand();
    self.data = String::from_utf8(durr).unwrap();
    return Response::ok(&format!("{} data.", self.data));
  }
}
