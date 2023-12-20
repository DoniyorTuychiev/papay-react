//@ts-nocheck
import React, { useState, Component } from "react";

class Car extends Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue", model: "Tesla"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}-{this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

  /**
   * 2 xil Component bor 1-functional (oddiy)Component va quyidagi kabi=> 2- Class Component mavjud.Class Componentni yaxshi tomni unda state bor lekin
  undan foydalanish biroz noqulay va kop kode yozishga tori keladi. functional component esa qisqa kod bilan yozish mumkin lekin uni katta kamchiligi 
  unda state yoq edi. Shuning uchun functionalComconent ichida suniy state yaratilsa ClassComponentsiz qisqa kod yozish mumkin bolardi aynan 
  bu muammoni yechish uchun Hooklar paydo boldi va ravishda React ni 16.8 dan keyin chiqqan versionidan boshlab hooklar orqali functionalComponentda stateni yaratib foydalanish imkoni paydo boldi.
  //? Bundan song ClassComponentga muxtojlik yoqotildi
  <Functional Component>
  export function HomePage() {
    return <div className='homepage'>
        <TopRestaurants/>
        
    </div>
}
  */

  export default Car;