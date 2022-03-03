#[macro_use]
extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/emoji/<msg>")]
fn message(msg: &str) -> String {
    format!("🦀Rust received the following message: {} 💪", msg)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, message])
    // .mount("/emoji", routes![message])
}
// send a message and receive a random emoji
