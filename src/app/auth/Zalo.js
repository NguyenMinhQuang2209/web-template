import axios from "axios";
import React, { useEffect } from "react";

const Zalo = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      const redirectUrl = `onlinemarket://(auth)/login?code=${code}`;
      window.location.href = redirectUrl;
    }
  }, []);

  return <div>Zalo</div>;
};

export default Zalo;
