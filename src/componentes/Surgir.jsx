import { useEffect, useRef, useState } from "react";

// Faz o conteúdo surgir (opacidade e um pequeno deslocamento) quando entra na tela.
export default function Surgir({ como: Tag = "div", atraso = 0, className = "", children, ...resto }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisivel(true);
      return;
    }
    const olho = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          olho.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    olho.observe(el);
    return () => olho.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={"surgir " + (visivel ? "visivel " : "") + className}
      style={{ transitionDelay: atraso + "ms" }}
      {...resto}
    >
      {children}
    </Tag>
  );
}
