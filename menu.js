class AGMenu extends HTMLElement {

  items = [
    { label: "Home", url: 'index.html' },
    { label: "La Società", url: 'societa.html' },
    { label: "I Servizi", url: 'servizi.html' },
    { label: "I nostri corsi", url: 'corsi.html' },
    { label: "Indicazioni", url: 'indicazioni.html' },
    { label: "Contatti", url: 'contatti.html' },
  ];

  constructor() {
    super();
  }

  connectedCallback() {
    let currentPage = parseInt(this.getAttribute("page"));
    let divHead = document.createElement("div");
    divHead.className = "menu-head";
    // let img=document.createElement("img");
    // img.src="images/long.jpg";
    // img.style.width="50px";


    // let desc=document.createElement("span");
    // desc.innerHTML="Aviogestioni Sportive ssd";
    // let sub=document.createElement("span");
    // sub.innerHTML="Scuola di volo VDS n.367 VM";

    // divHead.appendChild(img);
    // divHead.appendChild(desc);

    this.appendChild(divHead);

    let divBar = document.createElement("div");
    divBar.className = "menu-bar";
    if (currentPage>0) {
      this.items[currentPage].current = true;
    }
    this.items.forEach(itm => {
      let a = document.createElement("a");
      a.className = "menu-item";
      if (itm.current) {
        a.className += " current";
      }
      a.href = itm.url;
      a.innerHTML = itm.label;

      divBar.appendChild(a);
    });
    this.appendChild(divBar);
  }
}
customElements.define("ag-menu", AGMenu);