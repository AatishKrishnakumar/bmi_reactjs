import { useState } from 'react'

function Bmi() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState(null)

  const calculate = () => {
    let h = height / 100
    let value = weight /(h * h)
    setBmi(value)
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#09090b", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      fontFamily: "BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      
      <div style={{
        border: "1px solid #27272a",
        padding: "32px",
        width: "340px",
        backgroundColor: "#18181b",
        borderRadius: "16px",
      }}>

        <div style={{ marginBottom: "24px" }}>
          <h1 style={{color: "white"}}>
            BMI Calculator
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <input
              type="number"
              placeholder="Enter weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{
                padding: "12px",
                backgroundColor: "#27272a",
                border: "1px solid #3f3f46",
                borderRadius: "8px",
                color: "white",
              }}
            />

            <input
              type="number"
              placeholder="Enter height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              style={{
                padding: "12px",
                backgroundColor: "#27272a",
                border: "1px solid #3f3f46",
                borderRadius: "8px",
                color: "white",
              }}
            />
          </div>
        </div>

        <div style={{
          backgroundColor: "#27272a",
          border: "1px solid #3f3f46",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center"
        }}>
          <button 
            onClick={calculate}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Calculate BMI
          </button>

          <h2 style={{color:"white"}}>BMI : {bmi}</h2>
        </div>

      </div>
    </div>
  )
}

export default Bmi