[initial](https://github.com/NickCarducci/mastercard-backbank/tree/main/src/source/eglue/collagen/marrow)

eglue js by way of rust wasm bindgen (alpha)

1. `cargo update`

2. `rustup update`

3. Rust extension (ignore analyzer warning 7/11/2022)
4. open a new Visual Studio (VS) code 

[futures try](https://stackoverflow.com/questions/72954374/making-a-rust-wasm-bindgen-future-example-from-ccbuild)

This can deploy to cloudflare service workers, PHP to (C++ to Rust)Build to `build/worker/shim.mjs` `format="module"`

`PATH="$PATH:$HOME/.cargo/bin"` because `source` is not recognized, better `actions(github)` have it `new terminal` effect

`github/workflows/main.yml`:
````
...
- name: Publish
  uses: cloudflare/wrangler-action@1.3.0
  with:
    email: "nmcarducci@gmail.com"
    apiKey: ${{ secrets.CF_API_KEY }}
    # apiToken: ${{ secrets.CF_API_TOKEN }}
    preCommands: curl https://sh.rustup.rs -sSf | sh -s -- -y && PATH="$PATH:$HOME/.cargo/bin" && cargo install --git https://github.com/cloudflare/workers-rs --branch zeb/esbuild
    postCommands: PATH="$PATH:$HOME/.cache/.wasm-pack/.wasm-bindgen-cargo-install-0.2.78/bin"
    environment: "production"
  env:
    USER: root
````
`wrangler.toml`
````
[build.upload]
format = "modules" # "service-workers"
dir = "build/worker" # dist for libraries...
main = "./shim.mjs"
[build]
command = "worker-build --release" 
````

testing...

`curl https://sh.rustup.rs -sSf | sh -s -- -y && PATH="$PATH:$HOME/.cargo/bin" && cargo install --git https://github.com/cloudflare/workers-rs && cargo install --git https://github.com/cloudflare/workers-rs --branch zeb/esbuild && PATH="$PATH:$HOME/.cache/.wasm-pack/.wasm-bindgen-cargo-install-0.2.81/bin" && curl -L 'https://github.com/WebAssembly/binaryen/releases/download/version_90/binaryen-version_90-x86-linux.tar.gz' | tar  -xz && worker-build --release`
