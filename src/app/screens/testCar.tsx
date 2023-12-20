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

    
    //?livecycleMahtoDlar backend dan kerakli bolgan datalarni chaqirib beradi

    //? hooklar livecycleMahtods
    componentDidMount(): void {
        console.log("run componentDidMount");
        //run after first render = RETRIEVE DTAFROM BACCEND SERVER
    };
/** birinchi page da turib ikkinchi pagega utkanda componentDidMountboladi va ikkinchi pagedan boshqa pagega otkanda esa componentWillUnmount boladi.
qaytib birinchi page kelinsa endi u componentDidMount bolmaydi=> oldin bolgani sabab.
Bu uchta livecycleMethodni vazifasini hook yordamida malga oshirish mumkin.
Aynan React ichida stateni hosil qilibberuvchi narsa bu Hooke. Reactda 3 ta livecycleMethodlarini vazifasini bajara oluvchi hook nomi esa useEffect hookidir(Ex:import React, { useState, useEffect } from "react";
*/
    componentWillUnmount(): void {
        console.log("run componentWillUnmount");
    };

    componentDidUpdate(): void {
        console.log("run componentDidUpdate");
    };

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
  livecycleMethod lar ham Hook lar orqali hosil qilinadi(M: )
  <Functional Component>
  export function HomePage() {
    return <div className='homepage'>
        <TopRestaurants/>
        
    </div>
}
  */

  export default Car;