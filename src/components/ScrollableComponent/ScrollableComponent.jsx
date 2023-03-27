import React, { useRef, useEffect } from "react";

function ScrollableComponent(props) {
  const scrollableRef = useRef(null);

  useEffect(() => {
    const scrollableNode = scrollableRef.current;

    // Fonction qui gère les événements de scroll de la souris
    const handleScroll = (event) => {
      const delta = event.deltaY; // Récupération du décalage de la souris

      // Mise à jour de la position de défilement en fonction du décalage de la souris
      if (delta > 0) {
        // Si la souris a défilé vers le bas, on met à jour la position de défilement pour aller tout en bas
        scrollableNode.scrollTop = scrollableNode.scrollHeight;
      } else if (delta < 0) {
        // Si la souris a défilé vers le haut, on met à jour la position de défilement pour aller tout en haut
        scrollableNode.scrollTop = 0;
      }
    };

    // Ajout d'un écouteur d'événement de scroll sur le nœud de défilement
    scrollableNode.addEventListener("wheel", handleScroll);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      scrollableNode.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="scrollableComponent"
      ref={scrollableRef}
    >
      {props.children}
    </div>
  );
}

export default ScrollableComponent;