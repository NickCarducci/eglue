use futures::executor::LocalPool;

pub fn pathify(path: &str) -> std::path::PathBuf {
    let mut input_file = std::path::PathBuf::new();

    let arr: () = path.split("/").map(|x| input_file.push(x)).collect();
    return input_file;
}

struct DropOnce<'a> {
    _bosun: dyn Mak<&'a mut std::sync::Once<'a>>,
}
trait Mak {//fn resolve(self) -> Self::Output;
    type Output;//static types before compilation! (concrete type)
    fn _bosun() {
        let lock: std::path::PathBuf = pathify("./exec.c"); //.iter();
        cc::Build::new().file(lock).expand(); //= Default::default().await
    }
    fn new(){
        
    }
}
impl<'a> std::future::Future for DropOnce<'a> {
    fn poll(&'a mut self) -> &'a mut Self {
        println!("poll");
        self
    }
}
fn main() {
    let mut pool = LocalPool::new();
     pool.run_until(DropOnce._bosun);
}