class Properties {
  constructor() {
    this.property_list = [];
  }

  add_listing(listing) {
    this.property_list.push(listing);
  }

  // ONLY CALLED ONCE AT BEGINNING
  generate_preexisting_properties(preexisting_properties){
    for (const property of preexisting_properties) {
      let preexisting_listing = new Listing(
        property.state,
        property.city,
        property.street,
        property.property_type
      );
      this.add_listing(preexisting_listing)
    }
    
    }

render(){ // all listings
    let listingWrapper = document.createElement('div')
    listingWrapper.innerHTML = 'this is the listing wrapper'
      this.property_list.map(listing => {listing.render()})
        
}
}

class Listing {
    constructor(state, city, street, property_type){
        this.state = state
        this.city = city
        this.street = street
        this.property_type = property_type
        this.visible = true; 
    }



    render(){ // each listing
        if (this.visible){ 
            const listing = document.createElement("div")
            listing.class = "listing"

            const listing_content = document.createElement("p")
            listing_content.innerHTML = `
            State: ${this.state}
            City: ${this.city}
            Street: ${this.street}
            Type: ${this.property_type}
            `
            
            listing.append(listing_content)
            return app.append(listing)

        }
    }
}