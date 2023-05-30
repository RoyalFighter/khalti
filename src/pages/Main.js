import { useState, useEffect } from "react";
import { ESEWA_TEST_PID, ESEWA_URL, ESEWA_SCD } from "../config";
import Khalti from "../components/Khalti/Khalti";
let form = null;

export default function Main() {
  const [params, setParams] = useState({
    amt: 100,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 100,
    pid: ESEWA_TEST_PID,
    scd: ESEWA_SCD,
    su: "https://d2evy.csb.app/success",
    fu: "https://d2evy.csb.app/failed"
  });

  useEffect(() => {
    post();
  });

  const post = () => {
    form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", ESEWA_URL);

    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    // form.submit();
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      <Khalti />
    </div>
  );
}
