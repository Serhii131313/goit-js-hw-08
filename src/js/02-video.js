
import _ from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const data = localStorage.getItem("feedback");
form.addEventListener("input", _(updateStorage, 500));
form.addEventListener("submit", clearStorage);
function updateStorage(e) {
    const local = JSON.parse(localStorage.getItem("feedback")) ?? { email: null, message: null };
    local[e.target.name] = e.target.value;
    localStorage.setItem("feedback", JSON.stringify(local))
}
function checkStorage() {
    if (!data) return;
    const parsed = JSON.parse(data)
    form.email.value = parsed.email;
    form.message.value = parsed.message;
}
function clearStorage(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback")));
    localStorage.removeItem("feedback");
    e.target.reset();
}
checkStorage();