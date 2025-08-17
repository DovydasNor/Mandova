import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container text-xl text-white" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Privatumo politika</h1>
      <h2>1. Įvadas</h2>
      <p>
        Ši privatumo politika apibrėžia, kaip Mandova svetainė (<a href="https://mandova.pages.dev/" target="_blank" rel="noopener noreferrer">https://mandova.pages.dev/</a>) renka, naudoja ir saugo jūsų asmens duomenis. Gerbiame jūsų privatumą ir siekiame užtikrinti jūsų duomenų saugumą.
      </p>
      <h2>2. Kokius duomenis renkame?</h2>
      <ul>
        <li>Techninė informacija: IP adresas, naršyklės tipas, įrenginio informacija, apsilankymo data ir laikas, puslapių peržiūros.</li>
        <li>Slapukai: Naudojame slapukus, kad pagerintume svetainės funkcionalumą, analizuotume lankomumą ir pritaikytume turinį.</li>
      </ul>
      <h2>3. Kaip naudojame jūsų duomenis?</h2>
      <ul>
        <li>Svetainės veikimui ir saugumui užtikrinti.</li>
        <li>Analizuoti lankytojų elgseną ir tobulinti svetainę.</li>
        <li>Rinkodaros tikslams, jei tam davėte sutikimą.</li>
      </ul>
      <h2>4. Duomenų saugojimas ir apsauga</h2>
      <p>
        Jūsų duomenys saugomi saugioje aplinkoje ir nėra perduodami trečiosioms šalims be jūsų sutikimo, išskyrus atvejus, kai to reikalauja įstatymai.
      </p>
      <h2>5. Jūsų teisės</h2>
      <ul>
        <li>Turite teisę susipažinti su savo duomenimis, juos taisyti ar ištrinti.</li>
        <li>Galite atsisakyti slapukų naudojimo naršyklės nustatymuose.</li>
      </ul>
      <h2>6. Privatumo politikos pakeitimai</h2>
      <p>
        Mandova pasilieka teisę keisti privatumo politiką. Apie pakeitimus informuosime šiame puslapyje.
      </p>
      <h2>7. Kontaktai</h2>
      <p>
        Klausimams ar prašymams dėl privatumo kreipkitės el. paštu: <a href="mailto:mandova@info.lt">mandova@info.lt</a>
      </p>
      <p><b>Dokumentas galioja nuo: 2025-08-17</b></p>
    
    </div>
  );
};

export default PrivacyPolicy;