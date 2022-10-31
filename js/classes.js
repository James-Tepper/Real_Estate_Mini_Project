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
}


class Listing {
    constructor(state, city, street, property_type){
        this.state = state
        this.city = city
        this.street = street
        this.property_type = property_type
        this.visible = true; 
    }



    render(){
        if (this.visible){
            console.log('render method')
        }
    }
}