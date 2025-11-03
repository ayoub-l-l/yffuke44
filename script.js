function showInfo(layer) {
  const infoBox = document.getElementById("infoBox");
  let text = "";

  switch(layer) {
    case 1:
      text = `
        <h3>Lag 1 Fysiske laget</h3>
        <p>Overfører rå bits (0 og 1) gjennom kabler, fiber eller radiobølger. Definerer signaler, plugger og spenning.</p>
        <ul>
          <li>Enheter: Kabler, huber, nettverkskort</li>
          <li>Protokoller: Ethernet (fysisk del), DSL, ISDN</li>
        </ul>
      `;
      break;
    case 2:
      text = `
        <h3>Lag 2 Datalink-laget</h3>
        <p>Pålitelig kommunikasjon mellom direkte tilkoblede enheter. Feildeteksjon og MAC-adresser.</p>
        <ul>
          <li>Enheter: Switcher, nettverkskort</li>
          <li>Protokoller: Ethernet, PPP, HDLC</li>
        </ul>
      `;
      break;
    case 3:
      text = `
        <h3>Lag 3 Nettverkslaget</h3>
        <p>Ruting og logisk adressering mellom nettverk. Bruker IP-adresser for å levere pakker.</p>
        <ul>
          <li>Enheter: Rutere</li>
          <li>Protokoller: IP, ICMP, IPsec</li>
        </ul>
      `;
      break;
    case 4:
      text = `
        <h3>Lag 4 Transportlaget</h3>
        <p>Sørger for pålitelig levering av data mellom endepunkter. Segmentering og feilhåndtering.</p>
        <ul>
          <li>Protokoller: TCP, UDP</li>
        </ul>
      `;
      break;
    case 5:
      text = `
        <h3>Lag 5 Sesjonslaget</h3>
        <p>Oppretter, styrer og avslutter kommunikasjonssesjoner mellom applikasjoner.</p>
        <ul>
          <li>Protokoller: NetBIOS, RPC</li>
        </ul>
      `;
      break;
    case 6:
      text = `
        <h3>Lag 6 Presentasjonslaget</h3>
        <p>Håndterer datatransformasjon, kryptering og komprimering. Gjør data klar for applikasjoner.</p>
        <ul>
          <li>Eksempler: SSL/TLS, JPEG, ASCII</li>
        </ul>
      `;
      break;
    case 7:
      text = `
        <h3>Lag 7 Applikasjonslaget</h3>
        <p>Gir grensesnittet for sluttbrukerapplikasjoner som nettlesere og e-post.</p>
        <ul>
          <li>Protokoller: HTTP, FTP, SMTP, DNS</li>
        </ul>
      `;
      break;
  }

  infoBox.innerHTML = text;
  infoBox.style.display = "block";
  infoBox.scrollIntoView({ behavior: "smooth" });
}
