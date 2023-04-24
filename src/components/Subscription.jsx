import React from "react";
import { RightSidePattern } from "../Icons";

function Subscription() {
    const handelSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="subscription">
      <h2 className="subscription__title">stay in the loop</h2>
      <p className="subscription__desc">
        Spam-free insight direct to your inbox
      </p>
      <form action="#" onSubmit={handelSubmit}>
        <input type="email" name="email" className="subscription__input" placeholder="Email Address" required />
        <button type="submit" className="subscription__submit">
          subscribe
        </button>
      </form>
      <RightSidePattern/>
    </div>
  );
}

export default Subscription;
