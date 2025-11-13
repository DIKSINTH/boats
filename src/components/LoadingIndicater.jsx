import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import loadingimg from "../../public/images/gallery/loading.png";

function LoadingIndicator() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start loading
    setLoading(true);
    setFade(true);

    // End loading smoothly after 1s
    const timer = setTimeout(() => {
      setFade(false); // start fade-out
      setTimeout(() => setLoading(false), 400); // remove element after fade-out
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-500 z-50 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={loadingimg}
        alt="Loading..."
        className="w-32 h-28 animate-[spin_2s_ease-in-out_infinite] drop-shadow-lg"
      />
    </div>
  );
}

export default LoadingIndicator;
