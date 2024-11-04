import React, { useRef, useState } from 'react';

const App = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const ref = useRef([]);

  function handleKeyDown(e, index) {
    if (e.key === "Backspace") {
      e.preventDefault()
      setValues((prev) => {
        const newValues = [...prev];
        newValues[index] = "";
        return newValues;
      });
      if(index>0){
        ref.current[index-1].focus()
        
      }
      
    }
  }

  const handleChange = (e, index) => {
    let inputValue = e.target.value;
    if (inputValue.length > 1) {
      inputValue = inputValue.slice(0, 1);
    }
    if (!isNaN(inputValue)) {
      setValues((prev) => {
        const newValues = [...prev];
        newValues[index] = inputValue;
        return newValues;
      });
      if (index < values.length - 1) {
        ref.current[index + 1].focus();
      }
    }
  };

  return (
    <div style={{ width: "100vw", height: "50vh", display: "flex", flexDirection: "column" }}>
      <div style={{
        height: "auto", width: "100vw", boxShadow: '0 0 20px', textAlign: "center", paddingTop: "30px"
      }}>OTP</div>
      <div style={{ width: "100vw", height: "10vh", display: "flex", columnGap: "20px", justifyContent: "center", alignItems: "center" }}>
        {values.map((item, index) => (
          <div key={index} style={{ width: "3vw", height: "3vh" }}>
            <input
              type="text"
              value={item}
              ref={(element) => { ref.current[index] = element }}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
