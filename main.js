const wrapper = document.getElementById("wrapper");

const label = document.querySelector("label");

const submit = document.getElementById("submit");

let emailValue;

submit.addEventListener("click", subscribe);

function subscribe() {
  emailValue = document.getElementById("email").value;

  let re = /\S+@\S+\.\S+/;

  if (!re.test(emailValue || emailValue === undefined)) {
    label.innerHTML = "Email address";
    const newEl = document.createElement("p");
    newEl.textContent = "Please enter a valid email address";
    newEl.classList.add("no-match");
    label.appendChild(newEl);
    console.log("Ne radi");
  } else {
    wrapper.innerHTML = "";
    wrapper.innerHTML = `<div id="message">
        <img src="./assets/images/icon-success.svg" alt="" />
        <h3>Thanks for subscribing!</h3>
        <p>
          A confirmation email has been sent to <strong>${emailValue}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button class="submit" id="dismiss" onclick="resetPage()">Dismiss message</button>
      </div>`;
  }
}
