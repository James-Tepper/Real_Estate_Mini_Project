class Properties {
  constructor() {
    this.property_list = [];
  }

  add_listing(listing) {
    this.property_list.push(listing);
  }

  // ONLY CALLED ONCE AT BEGINNING
  generate_preexisting_properties(preexisting_properties) {
    for (const property of preexisting_properties) {
      let preexisting_listing = new Listing(
        property.state,
        property.city,
        property.street,
        property.property_type
      );
      this.add_listing(preexisting_listing);
    }
  }
  // ONLY CALLED ONCE AT BEGINNING
  render() {
    // all listings
    let listingWrapper = document.createElement("section");
    this.property_list.map((listing) => {
      listing.render();
    });
  }
}

class Listing {
  constructor(state, city, street, property_type) {
    this.state = state;
    this.city = city;
    this.street = street;
    this.property_type = property_type;
    this.visible = true;
  }
  

  render() {

    if (this.visible) {
      const listing = document.createElement("div");
      listing.className = "listing";

      const state = document.createElement("span");
      const city = document.createElement("span");
      const street = document.createElement("span");
      const property_type = document.createElement("span");

      state.className = "state"
      city.className = "city"
      street.className = "street"
      property_type.className = "property_type"

      state.innerText = `
      State: ${this.state}
      `
      city.innerText = `
      City: ${this.city}
      `
      street.innerText = `
      Street: ${this.street}
      `
      property_type.innerText = `
      Type: ${this.property_type}
      `
            
      const delete_btn = document.createElement("button");
      delete_btn.innerText = "Delete";
      delete_btn.className = "delete_btn"
      delete_btn.addEventListener('click',(e)=>{
        listing.remove(); // deletes listing
      })
      
      listing.append(state, city, street, property_type, delete_btn);
      return app.prepend(listing)
      
    }


    
    
    return app.replaceChild()
  }
}

