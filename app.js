var pracovnici = {
  "Krnov": {
    "NSD I": [
      "DiS. Vendula Burešová",
      "Bc. Eva Humpulová",
      "Zuzana Láryšová",
      "Jana Macková",
      "Bc. Alexandra Mattovičová",
      "Bc. Markéta Pakostová",
      "Ing. Kateřina Palánková",
      "DiS. Zuzana Slezáková",
      "Ing. Alžběta Spargelová",
      "Mgr. Dagmar Tarabíková",
      "Bc. Radovan Válek",
      "Ivana Válková",
      "Bc. Karin Žáková"
    ],
    "NSD II": [
      "Bc. Kristýna Gabajová",
      "DiS. Hana Jemelková",
      "Bc. Karolína Kořistková",
      "Mgr. Renáta Nunvářová",
      "Mgr. Lenka Pavlíčková",
      "Bc. Julius Pavliska",
      "Markéta Petrečková",
      "Mgr. Irena Šimečková",
      "Bc. Monika Viatrová",
      "DiS. Bc. Tereza Wiatr"
    ]
  },

  "Město Albrechtice": {
    "NSD I": [
      "Marcela Baronová",
      "Jana Kurečková"
    ],
    "NSD II": [
      "Nikola Bohačíková",
      "Lenka Triki Slejšková"
    ]
  },

  "Osoblaha": {
    "NSD I": [
      "Bc. Marcela Vaculová"
    ],
    "NSD II": [
      "Bc. Vladimír Novák",
      "Tomáš Schwarz"
    ]
  }
};

var oblasti = [
  { id:"pracovni_bonus", nazev:"Pracovní aktivita a složka pracovní bonus", text:"Klientovi byla doporučena evidence na ÚP ČR, zprostředkování zaměstnání, rekvalifikace nebo jiné vhodné pracovní příležitosti. Dále byl klientovi vysvětlen princip pracovního bonusu v rámci DSSP a jeho možný vliv na výši dávky a celkovou finanční situaci domácnosti." },
  { id:"zmena_zranitelnosti", nazev:"Změna zranitelnosti domácnosti s dětmi nad 7 let", text:"Klientovi byla vysvětlena změna posuzování zranitelnosti domácnosti po dosažení stanoveného věku dítěte a její možný dopad na výši DSSP. Současně byly s klientem projednány možnosti pracovní aktivity s ohledem na péči o dítě, například formou zkráceného úvazku, flexibilního zaměstnání, samostatné výdělečné činnosti nebo rekvalifikace." },
  { id:"stabilizace_bydleni", nazev:"Stabilizace bydlení", text:"Klientovi bylo vysvětleno, že je důležité předcházet vzniku dluhů na bydlení a energiích. Byly projednány možnosti stabilizace bytové situace domácnosti, včetně komunikace s pronajímatelem, úpravy záloh nebo dalších dostupných opatření vedoucích k předcházení ztráty bydlení." },
  { id:"socialni_podpurne", nazev:"Sociální a podpůrné služby", text:"Klientovi byly doporučeny dostupné sociální a podpůrné služby, které mohou přispět ke stabilizaci jeho sociální, bytové nebo finanční situace. Konkrétní službu nebo organizaci může pracovník doplnit do poznámky." },
  { id:"zamestnani_rekvalifikace", nazev:"Zaměstnání a rekvalifikace", text:"Klientovi byly vysvětleny možnosti zvýšení příjmů prostřednictvím pracovního uplatnění. Byly s ním projednány možnosti rekvalifikace, zvýšení kvalifikace a využití pracovních příležitostí odpovídajících jeho situaci a možnostem." },
  { id:"sladeni_prace_pece", nazev:"Podpora sladění práce a péče o dítě", text:"Klientovi byly poskytnuty informace o možnostech sladění práce a péče o dítě, zejména prostřednictvím dětských skupin, mateřských škol, školních družin nebo dalších služeb podporujících péči o dítě." },
  { id:"reseni_vyzivneho", nazev:"Řešení výživného", text:"Klientovi bylo vysvětleno, že řádně stanovené a vymahatelné výživné je důležité nejen pro zabezpečení potřeb dítěte, ale také pro správné posouzení nároku na dávkovou podporu. V případě, že dosud neexistuje soudní rozhodnutí nebo jiný vykonatelný titul k výživnému, byla s klientem projednána možnost soudního stanovení výživného." },
  { id:"nahradni_vyzivne", nazev:"Náhradní výživné", text:"Klientovi byla doporučena možnost podání žádosti o náhradní výživné v případech, kdy druhý rodič výživné nehradí vůbec nebo jej hradí pouze částečně. Současně byly klientovi vysvětleny podmínky nároku a potřebné podklady." },
  { id:"ohrozeni_bydleni", nazev:"Podpora při ohrožení bydlení", text:"S klientem byla projednána jeho aktuální finanční a bytová situace. V odůvodněných případech byla projednána možnost mimořádné okamžité pomoci, zejména pokud hrozí ztráta bydlení nebo nezajištění základních životních potřeb." },
  { id:"energeticke", nazev:"Energetické poradenství", text:"Klientovi bylo vysvětleno, že při vysokých nákladech na bydlení je vhodné věnovat pozornost spotřebě energií, výši záloh a možnostem komunikace s dodavateli energií nebo pronajímatelem. Byl informován o možnosti využití energetického poradenství." },
  { id:"socialni_bydleni", nazev:"Sociální práce v oblasti bydlení", text:"Klientovi byla doporučena spolupráce se sociálním pracovníkem obce nebo další návaznou službou při řešení bytové situace, orientaci v dostupných formách pomoci a hledání dlouhodobě udržitelného bydlení." },
  { id:"vhodnejsi_bydleni", nazev:"Hledání vhodnějšího bydlení", text:"S klientem byla projednána možnost zajištění stabilnějšího a standardního bydlení. Klient byl informován o možnosti spolupráce se sociálním pracovníkem obce nebo návaznými službami dostupnými v místě bydliště." },
  { id:"pracovni_motivace", nazev:"Pracovní aktivita a motivace", text:"Klientovi bylo vysvětleno, že legální pracovní aktivita může přispět ke zlepšení finanční a sociální situace. Zároveň byl informován o možnostech podpory zaměstnanosti a významu pracovního bonusu v rámci DSSP." },
  { id:"dluhove", nazev:"Dluhové poradenství", text:"Klientovi bylo doporučeno využití odborného dluhového poradenství za účelem lepší orientace v dluhové situaci, komunikace s věřiteli, řešení exekucí nebo případného oddlužení. Konkrétní službu může pracovník doplnit do poznámky." },
  { id:"socialni_navazna", nazev:"Sociální práce a návazná pomoc", text:"Klientovi byla doporučena spolupráce se sociálním pracovníkem obce nebo dalšími návaznými sociálními službami dostupnými v místě bydliště. Konkrétní službu může pracovník doplnit do poznámky." },
  { id:"zmena_prijmu", nazev:"Změna příjmové situace po podání žádosti", text:"Klientovi bylo vysvětleno, že výše dávky byla stanovena podle příjmů z rozhodného období a současná změna nebo ztráta příjmu se dosud nemusela promítnout do výše dávky. Byla projednána možnost mimořádné okamžité pomoci a další dostupné podpory." }
];

function aktualizujPracovniky(){
  var pracoviste = document.getElementById("pracoviste").value;
  var oddeleni = document.getElementById("oddeleni").value;
  var select = document.getElementById("urednik");

  select.innerHTML = "";

  var seznam = pracovnici[pracoviste][oddeleni];

  for(var i=0;i<seznam.length;i++){
    var option = document.createElement("option");
    option.value = seznam[i];
    option.textContent = seznam[i];
    select.appendChild(option);
  }
}

function vykresliOblasti(){
  var box = document.getElementById("oblastiFormulare");
  box.innerHTML = "";

  for(var i=0;i<oblasti.length;i++){
    var o = oblasti[i];

    box.innerHTML +=
      "<div class='item' id='box_" + o.id + "'>" +
      "<label><input type='checkbox' id='" + o.id + "' onchange='zvyrazniOblast(\"" + o.id + "\")'> " + o.nazev + ": ANO/NE</label>" +
      "<label>Poznámka pracovníka</label>" +
      "<textarea id='" + o.id + "_poznamka' spellcheck='true' lang='cs'></textarea>" +
      "</div>";
  }
}

function zvyrazniOblast(id){
  var checkbox = document.getElementById(id);
  var box = document.getElementById("box_" + id);

  if(checkbox && box){
    if(checkbox.checked){
      box.classList.add("vybrano");
    } else {
      box.classList.remove("vybrano");
    }
  }
}

function nastav(id, stav){
  var el = document.getElementById(id);
  if(el){
    el.checked = stav;
    zvyrazniOblast(id);
  }
}

function vybratVse(){
  for(var i=0;i<oblasti.length;i++){
    nastav(oblasti[i].id, true);
  }
}

function zrusitVse(){
  for(var i=0;i<oblasti.length;i++){
    nastav(oblasti[i].id, false);
  }
}

function balicek(typ, stav){
  if(typ==="nezranitelni"){
    nastav("pracovni_bonus", stav);
    nastav("pracovni_motivace", stav);
    nastav("zmena_zranitelnosti", stav);
    nastav("socialni_navazna", stav);
  }

  if(typ==="zranitelni"){
    nastav("stabilizace_bydleni", stav);
    nastav("socialni_podpurne", stav);
    nastav("pracovni_motivace", stav);
    nastav("socialni_navazna", stav);
  }

  if(typ==="samozivitele"){
    nastav("zamestnani_rekvalifikace", stav);
    nastav("sladeni_prace_pece", stav);
    nastav("reseni_vyzivneho", stav);
    nastav("nahradni_vyzivne", stav);
    nastav("stabilizace_bydleni", stav);
    nastav("socialni_navazna", stav);
  }

  if(typ==="naklady_bydleni"){
    nastav("energeticke", stav);
    nastav("socialni_bydleni", stav);
    nastav("stabilizace_bydleni", stav);
    nastav("dluhove", stav);
  }

  if(typ==="ubytovna"){
    nastav("vhodnejsi_bydleni", stav);
    nastav("pracovni_motivace", stav);
    nastav("socialni_navazna", stav);
  }

  if(typ==="vyzivne"){
    nastav("reseni_vyzivneho", stav);
    nastav("nahradni_vyzivne", stav);
    nastav("ohrozeni_bydleni", stav);
    nastav("socialni_navazna", stav);
  }

  if(typ==="exekuce"){
    nastav("dluhove", stav);
    nastav("pracovni_motivace", stav);
    nastav("socialni_navazna", stav);
  }

  if(typ==="prijem"){
    nastav("zmena_prijmu", stav);
    nastav("pracovni_motivace", stav);
    nastav("socialni_navazna", stav);
    nastav("ohrozeni_bydleni", stav);
  }
}

function kodPracoviste(){
  var pracoviste = document.getElementById("pracoviste").value;

  if(pracoviste === "Osoblaha"){
    return "OSO";
  }

  if(pracoviste === "Město Albrechtice"){
    return "MAL";
  }

  return "KRN";
}

function vytvorCj(){
  var cislo = document.getElementById("cj").value.trim();
  var rok = new Date().getFullYear();
  var kod = kodPracoviste();

  if(cislo === ""){
    return "";
  }

  return cislo + "/" + rok + "/" + kod;
}

function nastavNazevDokumentu(jmeno){
  var nazevSouboru = "Protokol_DSSP_" + jmeno
    .trim()
    .replace(/\s+/g, "_")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_]/g, "");

  if(nazevSouboru === "Protokol_DSSP_"){
    nazevSouboru = "Protokol_DSSP";
  }

  document.title = nazevSouboru;
  return nazevSouboru;
}

function sestavProtokolHtml(logoSrc){
  var cj = vytvorCj();
  var datum = document.getElementById("datum").value;
  var pracoviste = document.getElementById("pracoviste").value;
  var oddeleni = document.getElementById("oddeleni").value;
  var urednik = document.getElementById("urednik").value;
  var funkce = document.getElementById("funkce").value;
  var jmeno = document.getElementById("jmeno").value;
  var narozeni = document.getElementById("narozeni").value;
  var adresa = document.getElementById("adresa").value;
  var casUkonceni = document.getElementById("casUkonceni").value;

  var logo = logoSrc || "logo-upcr.png";
  var textPoradenstvi = "";

  for(var i=0;i<oblasti.length;i++){
    var o = oblasti[i];
    var checkbox = document.getElementById(o.id);
    var poznamka = document.getElementById(o.id + "_poznamka").value;

    if(checkbox.checked){
      textPoradenstvi += "<p><strong>" + o.nazev + ":</strong></p>";
      textPoradenstvi += "<p>" + o.text + "</p>";

      if(poznamka.trim() !== ""){
        textPoradenstvi +=
          "<p><strong>Poznámka pracovníka:</strong><br>" +
          poznamka +
          "</p>";
      }
    }
  }

  return "<div class='protokol'>" +

    "<div class='hlavicka'>" +
    "<div class='logo-blok'>" +
    "<img src='" + logo + "' class='logo' alt='Úřad práce České republiky'>" +
    "</div>" +
    "</div>" +

    "<div class='meta'>" +
    "<div><strong>Č.j.:</strong> " + cj + "</div>" +
    "<div><strong>Pracoviště:</strong> " + pracoviste + "</div>" +
    "<div><strong>Datum jednání:</strong> " + datum + "</div>" +
    "</div>" +

    "<h2 class='nazev'>P R O T O K O L</h2>" +

    "<p class='zakon'>ve smyslu ustanovení § 18 zákona č. 500/2004 Sb., správní řád, ve znění pozdějších předpisů</p>" +

    "<p><strong>Přítomni:</strong></p>" +

    "<p>za Úřad práce České republiky – krajskou pobočku v Ostravě,<br>" +
    "kontaktní pracoviště Krnov, oddělení dávek HN</p>" +

    "<p>• jméno a příjmení: " + urednik + "<br>" +
    "• oddělení: " + oddeleni + "<br>" +
    "• funkce: " + funkce + "</p>" +

    "<p><strong>Účastník řízení:</strong></p>" +
    "<p>Jméno a příjmení: " + jmeno + "<br>" +
    "Datum narození: " + narozeni + "<br>" +
    "Místo trvalého pobytu: " + adresa + "</p>" +

    "<p><strong>Předmět jednání:</strong> Možnosti řešení nízké dávky DSSP</p>" +

    "<p>Jmenovaný/á byl/a seznámen/a s rozhodnutím o DSSP, které mu/jí bylo srozumitelně vysvětleno.</p>" +

    "<p><strong>Poskytnuté poradenství:</strong></p>" +
    "<div class='text-poradenstvi'>" + textPoradenstvi + "</div>" +

    "<p>Účastník řízení dle svého vyjádření všemu porozuměl.<br>" +
    "Účastník řízení si protokol přečetl a s jeho obsahem souhlasí.</p>" +

    "<p>Jednání bylo ukončeno v " + casUkonceni + " hodin.</p>" +

    "<div class='podpisy'>" +
    "<div>............................................<br>oprávněná úřední osoba</div>" +
    "<div>............................................<br>účastník řízení</div>" +
    "</div>" +

    "<div class='paticka'>" +
    "Úřad práce České republiky | www.up.gov.cz" +
    "</div>" +

    "</div>";
}

function generuj(){
  var jmeno = document.getElementById("jmeno").value;
  nastavNazevDokumentu(jmeno);
  document.getElementById("vystup").innerHTML = sestavProtokolHtml();
}

function kopirovatProtokol(){
  var vystup = document.getElementById("vystup");

  if(vystup.innerText.trim() === ""){
    alert("Nejdříve vygenerujte protokol.");
    return;
  }

  navigator.clipboard.writeText(vystup.innerText).then(function(){
    alert("Protokol byl zkopírován do schránky.");
  }).catch(function(){
    alert("Kopírování se nezdařilo. Označte text ručně a zkopírujte jej pomocí Ctrl+C.");
  });
}

function stahnoutWord(){
  var vystup = document.getElementById("vystup");

  if(vystup.innerText.trim() === ""){
    generuj();
  }

  var jmeno = document.getElementById("jmeno").value;
  var nazev = nastavNazevDokumentu(jmeno);

  fetch("logo-upcr.png")
    .then(function(response){
      if(!response.ok){
        throw new Error("Logo nenalezeno");
      }
      return response.blob();
    })
    .then(function(blob){
      var reader = new FileReader();

      reader.onloadend = function(){
        var logoBase64 = reader.result;

        var html =
          "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
          "xmlns:w='urn:schemas-microsoft-com:office:word' " +
          "xmlns='http://www.w3.org/TR/REC-html40'>" +
          "<head><meta charset='utf-8'>" +
          "<style>" +
          "body{font-family:Arial,sans-serif;font-size:11pt;line-height:1.3;color:#000;}" +
          ".logo{width:420px;height:auto;}" +
          ".logo-blok{text-align:center;}" +
          ".meta{margin-top:10px;margin-bottom:15px;font-size:11pt;}" +
          ".nazev{text-align:center;letter-spacing:5px;color:#0F0888;}" +
          ".zakon{text-align:center;font-weight:bold;}" +
          ".text-poradenstvi strong{color:#0F0888;font-size:12pt;}" +
          ".podpisy{margin-top:35px;width:100%;}" +
          ".podpisy div{display:inline-block;width:45%;text-align:center;vertical-align:top;}" +
          ".paticka{margin-top:25px;border-top:1px solid #0F0888;padding-top:8px;text-align:center;font-size:9pt;font-weight:bold;}" +
          "</style>" +
          "</head><body>" +
          sestavProtokolHtml(logoBase64) +
          "</body></html>";

        var blobWord = new Blob(["\ufeff", html], {
          type: "application/msword;charset=utf-8"
        });

        var odkaz = document.createElement("a");
        odkaz.href = URL.createObjectURL(blobWord);
        odkaz.download = nazev + ".doc";
        document.body.appendChild(odkaz);
        odkaz.click();
        document.body.removeChild(odkaz);

        URL.revokeObjectURL(odkaz.href);
      };

      reader.readAsDataURL(blob);
    })
    .catch(function(){
      alert("Nepodařilo se načíst logo. Zkontrolujte, že soubor logo-upcr.png je v repozitáři.");
    });
}

function vymaz(){
  if(confirm("Opravdu chcete vymazat celý formulář?")){
    document.title = "Interaktivní protokol DSSP";
    location.reload();
  }
}

window.onload = function(){
  vykresliOblasti();
  aktualizujPracovniky();

  var dnes = new Date();

  var rok = dnes.getFullYear();
  var mesic = String(dnes.getMonth() + 1).padStart(2, "0");
  var den = String(dnes.getDate()).padStart(2, "0");
  document.getElementById("datum").value = rok + "-" + mesic + "-" + den;

  var h = String(dnes.getHours()).padStart(2, "0");
  var m = String(dnes.getMinutes()).padStart(2, "0");
  document.getElementById("casUkonceni").value = h + ":" + m;
};
