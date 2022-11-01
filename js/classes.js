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
    this.comments_list = []
  }

  add_comment(comment){
    this.comments_list.push(comment)
    console.log(this.comments_list)
  }

  render() {

    if (this.visible) {
      const listing = document.createElement("div");
      listing.className = "listing";

      const view_comment = document.createElement('a')

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

      const comment = document.createElement('input');
      comment.placeholder= "Comments"
      const comment_btn = document.createElement('button')
      comment_btn.className = 'comment_btn'
      comment_btn.innerText = 'Submit Mean Words'

      comment_btn.addEventListener("click", function () {
        const comment_list = document.createElement('ul')
        const a_comment = document.createElement('li')
        

        // add_comment
        this.classList
        console.log(comment.value)
        view_comment.textContent = 'View Comments'
        view_comment.innerHTML = `
        <select>
        <option value="View Comments">${comment.value}</option>
      </select>
        `
        listing.append(view_comment)
        comment.value = '';
      })
      


      const delete_btn = document.createElement("button");
      delete_btn.innerText = "Delete";
      delete_btn.className = "delete_btn"
      delete_btn.addEventListener('click',(e)=>{
        listing.remove(); // deletes listing
      })
      
      listing.append(state, city, street, property_type, delete_btn, comment, comment_btn);
      return app.prepend(listing)
      
    }


    return app.replaceChild()
  }
}

