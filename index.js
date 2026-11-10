document.addEventListener("DOMContentLoaded", function () {

  const projects = document.querySelectorAll(".project");
  const images = document.querySelectorAll(".image");

  projects.forEach(project => {

    project.addEventListener("mouseenter", function () {

      const projectClass = [...project.classList]
        .filter(cls => cls !== "project")[0];

      // reset images
      images.forEach(img => {
        img.classList.remove("active");
        if (img.tagName === "VIDEO") img.pause();
      });

      // reset titres
      projects.forEach(p => p.classList.remove("active"));

      // activer image
      const target = document.querySelector(".image." + projectClass);
      if (target) {
        target.classList.add("active");
        if (target.tagName === "VIDEO") target.play();
      }

      // activer couleur texte
      project.classList.add("active");

    });

  });

});