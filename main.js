const app = document.querySelector("#App");
const submit_btn = document.querySelector("#submit_btn");
//inputs
const state = document.querySelector(".state");
const city = document.querySelector(".city");
const street = document.querySelector(".street");
const type = document.querySelector(".type");

const properties = new Properties();

// ADD A NEW LISTING BUTTON
submit_btn.addEventListener("click", function (event) {
  const new_listing = new Listing(
    state.value,
    city.value,
    street.value,
    type.value
  );
  properties.add_listing(new_listing);
  event.preventDefault();
  new_listing.render() // render this instance

});







main = () => {
  properties.generate_preexisting_properties(preexisting_properties);
  properties.render()
};

main();

