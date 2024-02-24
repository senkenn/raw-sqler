gen-wasm-for-extension:
	wasm-pack build core --target bundler --out-dir ../vsce/core --release
