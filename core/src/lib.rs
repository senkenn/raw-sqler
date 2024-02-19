use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

#[wasm_bindgen]
pub fn add(num1: i32, num2: i32) -> Result<String, JsValue> {
    Ok((num1 + num2).to_string())
}
