import React from "react";

function ContactUsComponent() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Contact Us</h1>
      <input className="m-2 p-1 border border-black" type="text" placeholder="Enter the Value" />
      <input className="m-2 p-1 border border-black" type="text" placeholder="Enter the Value" />
      <button className="m-2 p-1 border border-black bg-slate-400 rounded-lg">Submit</button>
    </div>
  );
}

export default ContactUsComponent;
