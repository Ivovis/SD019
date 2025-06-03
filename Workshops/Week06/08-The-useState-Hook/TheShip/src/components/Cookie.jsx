import { useState } from "react";

export default function Cookie() {
  const [myCookieCount, setMyCookieCount] = useState(0);

  function nibbleTheCookie() {
    setMyCookieCount(myCookieCount + 1);
  }
  return (
    <section>
      <h4>This is Cookie</h4>
      <p>
        Its a little crunchy by design, it has been nibbled {myCookieCount}{" "}
        times
      </p>
      <button
        onClick={() => {
          nibbleTheCookie();
        }}
      >
        bite
      </button>
    </section>
  );
}
