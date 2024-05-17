import React from 'react';
import './minibar.css'; // Assuming the file name is Minibar.css

function Minibar() {
  return (
    <div className='minibar'>
      <span className="material-symbols-outlined">mail</span> <p className='element'><b>serassurance@gmail.com</b></p>
      <span className="material-symbols-outlined">call</span> <p className='element'><b>(+216) 75742895</b></p>
      <form>
        <label htmlFor="language"></label>
        <select id="language">
          <option value="fr"> <b> Français </b></option>
          <option value="en"> <b> Anglais </b></option>
        </select>
      </form>
    </div>
  );
}

export default Minibar;

