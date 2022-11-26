AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function () {
    const PostersRef = [
      {
        id: "captain-aero",
        title: "Captain Aero",
        url: "./assets/posters/captain-aero-poster.jpg",
      },
      {
        id: "outer-space",
        title: "Outer Space",
        url: "./assets/posters/outer-space-poster.jpg",
      },

      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/posters/spiderman-poster.jpg",
      },
      {
        id: "superman",
        title: "Superman",
        url: "./assets/posters/superman-poster.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of PostersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      const borderEl = this.createBorder(position, item.id);

      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      const titleE1 = this.createTitleE1(position, item);
      borderEl.appendChild(titleE1);

      this.postersContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) {
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("id", id);
    entityE1.setAttribute("visible", true);
    entityE1.setAttribute("geometry", {
      primitive: "plane",
      width: "22",
      height: "40",
    });
    entityE1.setAttribute("position", position);
    entityE1.setAttribute("material", {
      color: "white",
    });
    return entityE1;
  },

  createPoster: function (item) {
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("visible", true);
    entityE1.setAttribute("geometry", {
      primitive: "plane",
      width: "20",
      height: "28",
    });
    entityE1.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityE1.setAttribute("material", { src: item.url });
    return entityE1;
  },

  createTitleE1: function (position, item) {
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("visible", true);
    entityE1.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "white",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityE1.setAttribute("position", elPosition);
    return entityE1;
  },
});
