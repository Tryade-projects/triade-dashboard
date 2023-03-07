import React from 'react';
import FormatIcon from "../../components/FormatIcon/FormatIcon";
import Finance from "../../../src/assets/finance.svg";

const DashboardInfos = () => {
  return (
    <section className='dashboardInfos'>
      
      <div>
        <div>
          {/* insérer variable $colorPurple */}
          <FormatIcon background="#4D44B5" image={Finance} />
        </div>
        <div>
          <h3>Employés</h3>
          <h2>49</h2>
        </div>
      </div>

      <div>
        <div>
          {/* insérer variable $colorOrange */}
          <FormatIcon background="#FB7D5B" image={Finance} />
        </div>
        <div>
          <h3>Stock</h3>
          <h2>754kg</h2>
        </div>
      </div>
      
      <div>
        <div>
          {/* insérer variable $colorYellow */}
          <FormatIcon background="#FCC43E" image={Finance} />
        </div>
        <div>
          <h3>Argent</h3>
          <h2>320k</h2>
        </div>
      </div>

      <div>
        <div>
          {/* insérer variable $colorText  */}
          <FormatIcon background="#303972" image={Finance} />
        </div>
        <div>
          <h3>Véhicules</h3>
          <h2>40</h2>
        </div>
      </div>

    </section>


  )
}

export default DashboardInfos