var oblasti = [
  {
    id:"pracovni_bonus",
    nazev:"Pracovní aktivita a složka pracovní bonus",
    text:"Klientovi byla doporučena evidence na ÚP ČR, zprostředkování zaměstnání, rekvalifikace nebo jiné vhodné pracovní příležitosti. Dále byl klientovi vysvětlen princip pracovního bonusu v rámci DSSP a jeho možný vliv na výši dávky a celkovou finanční situaci domácnosti."
  },
  {
    id:"zmena_zranitelnosti",
    nazev:"Změna zranitelnosti domácnosti s dětmi nad 7 let",
    text:"Klientovi byla vysvětlena změna posuzování zranitelnosti domácnosti po dosažení stanoveného věku dítěte a její možný dopad na výši DSSP. Současně byly s klientem projednány možnosti pracovní aktivity s ohledem na péči o dítě, například formou zkráceného úvazku, flexibilního zaměstnání, samostatné výdělečné činnosti nebo rekvalifikace."
  },
  {
    id:"stabilizace_bydleni",
    nazev:"Stabilizace bydlení",
    text:"Klientovi bylo vysvětleno, že je důležité předcházet vzniku dluhů na bydlení a energiích. Byly projednány možnosti stabilizace bytové situace domácnosti, včetně komunikace s pronajímatelem, úpravy záloh nebo dalších dostupných opatření vedoucích k předcházení ztráty bydlení."
  },
  {
    id:"socialni_podpurne",
    nazev:"Sociální a podpůrné služby",
    text:"Klientovi byly doporučeny dostupné sociální a podpůrné služby, které mohou přispět ke stabilizaci jeho sociální, bytové nebo finanční situace. Konkrétní službu nebo organizaci může pracovník doplnit do poznámky."
  },
  {
    id:"zamestnani_rekvalifikace",
    nazev:"Zaměstnání a rekvalifikace",
    text:"Klientovi byly vysvětleny možnosti zvýšení příjmů prostřednictvím pracovního uplatnění. Byly s ním projednány možnosti rekvalifikace, zvýšení kvalifikace a využití pracovních příležitostí odpovídajících jeho situaci a možnostem."
  },
  {
    id:"sladeni_prace_pece",
    nazev:"Podpora sladění práce a péče o dítě",
    text:"Klientovi byly poskytnuty informace o možnostech sladění práce a péče o dítě, zejména prostřednictvím dětských skupin, mateřských škol, školních družin nebo dalších služeb podporujících péči o dítě."
  },
  {
    id:"reseni_vyzivneho",
    nazev:"Řešení výživného",
    text:"Klientovi bylo vysvětleno, že řádně stanovené a vymahatelné výživné je důležité nejen pro zabezpečení potřeb dítěte, ale také pro správné posouzení nároku na dávkovou podporu. V případě, že dosud neexistuje soudní rozhodnutí nebo jiný vykonatelný titul k výživnému, byla s klientem projednána možnost soudního stanovení výživného."
  },
  {
    id:"nahradni_vyzivne",
    nazev:"Náhradní výživné",
    text:"Klientovi byla doporučena možnost podání žádosti o náhradní výživné v případech, kdy druhý rodič výživné nehradí vůbec nebo jej hradí pouze částečně. Současně byly klientovi vysvětleny podmínky nároku a potřebné podklady."
  },
  {
    id:"ohrozeni_bydleni",
    nazev:"Podpora při ohrožení bydlení",
    text:"S klientem byla projednána jeho aktuální finanční a bytová situace. V odůvodněných případech byla projednána možnost mimořádné okamžité pomoci, zejména pokud hrozí ztráta bydlení nebo nezajištění základních životních potřeb."
  },
  {
    id:"energeticke",
    nazev:"Energetické poradenství",
    text:"Klientovi bylo vysvětleno, že při vysokých nákladech na bydlení je vhodné věnovat pozornost spotřebě energií, výši záloh a možnostem komunikace s dodavateli energií nebo pronajímatelem. Byl informován o možnosti využití energetického poradenství."
  },
  {
    id:"socialni_bydleni",
    nazev:"Sociální práce v oblasti bydlení",
    text:"Klientovi byla doporučena spolupráce se sociálním pracovníkem obce nebo další návaznou službou při řešení bytové situace, orientaci v dostupných formách pomoci a hledání dlouhodobě udržitelného bydlení."
  },
  {
    id:"vhodnejsi_bydleni",
    nazev:"Hledání vhodnějšího bydlení",
    text:"S klientem byla projednána možnost zajištění stabilnějšího a standardního bydlení. Klient byl informován o možnosti spolupráce se sociálním pracovníkem obce nebo návaznými službami dostupnými v místě bydliště."
  },
  {
    id:"pracovni_motivace",
    nazev:"Pracovní aktivita a motivace",
    text:"Klientovi bylo vysvětleno, že legální pracovní aktivita může přispět ke zlepšení finanční a sociální situace. Zároveň byl informován o možnostech podpory zaměstnanosti a významu pracovního bonusu v rámci DSSP."
  },
  {
    id:"dluhove",
    nazev:"Dluhové poradenství",
    text:"Klientovi bylo doporučeno využití odborného dluhového poradenství za účelem lepší orientace v dluhové situaci, komunikace s věřiteli, řešení exekucí nebo případného oddlužení. Konkrétní službu může pracovník doplnit do poznámky."
  },
  {
    id:"socialni_navazna",
    nazev:"Sociální práce a návazná pomoc",
    text:"Klientovi byla doporučena spolupráce se sociálním pracovníkem obce nebo dalšími návaznými sociálními službami dostupnými v místě bydliště. Konkrétní službu může pracovník doplnit do poznámky."
  },
  {
    id:"zmena_prijmu",
    nazev:"Změna příjmové situace po podání žádosti",
    text:"Klientovi bylo vysvětleno, že výše dávky byla stanovena podle příjmů z rozhodného období a současná změna nebo ztráta příjmu se dosud nemusela promítnout do výše dávky. Byla projednána možnost mimořádné okamžité pomoci a další dostupné podpory."
  }
];

function vykresliOblasti(){
  var box = document.getElementById("oblastiFormulare");
  box.innerHTML = "";

  for(var i=0;i<oblasti.length;i++){
    var o = oblasti[i];

    box.innerHTML +=
      "<div class='item'>" +
      "<label><input type='checkbox' id='" + o.id + "'> " + o.nazev + ": ANO/NE</label>" +
      "<label>Poznámka pracovníka</label>" +
      "<textarea id='" + o.id + "_poznamka'></textarea>" +
      "</div>";
  }
}

function nastav(id, stav){
  var el = document.getElementById(id);
  if(el){ el.checked = stav; }
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

function generuj(){
  var cj = document.getElementById("cj").value;
  var datum = document.getElementById("datum").value;
  var pracoviste = document.getElementById("pracoviste").value;
  var jmeno = document.getElementById("jmeno").value;
  var narozeni = document.getElementById("narozeni").value;
  var adresa = document.getElementById("adresa").value;
  var casUkonceni = document.getElementById("casUkonceni").value;

  var textPoradenstvi = "";

  for(var i=0;i<oblasti.length;i++){
    var o = oblasti[i];
    var checkbox = document.getElementById(o.id);
    var poznamka = document.getElementById(o.id + "_poznamka").value;

    if(checkbox.checked){
      textPoradenstvi += "\n" + o.nazev + ":\n";
      textPoradenstvi += o.text + "\n";

      if(poznamka.trim() !== ""){
        textPoradenstvi += "\nPoznámka pracovníka:\n" + poznamka + "\n";
      }

      textPoradenstvi += "\n";
    }
  }

  document.getElementById("vystup").innerHTML =
"<div class='protokol'>" +

"<div class='hlavicka'>" +
"<div class='logo-blok'>" +
"<img src='logo-upcr.png' class='logo' alt='Úřad práce České republiky'>" +
"</div>" +
"</div>" +

"<div class='meta'>" +
"<div><strong>Č.j.:</strong> " + cj + "</div>" +
"<div><strong>Pracoviště:</strong> " + pracoviste + "</div>" +
"<div><strong>Datum jednání:</strong> " + datum + "</div>" +
"</div>" +

"<h2 class='nazev'>P R O T O K O L</h2>" +

"<p class='zakon'>ve smyslu ustanovení § 18 zákona č. 500/2004 Sb., správní řád, ve znění pozdějších předpisů</p>" +

"<p><strong>Účastník řízení:</strong></p>" +
"<p>Jméno a příjmení: " + jmeno + "<br>" +
"Datum narození: " + narozeni + "<br>" +
"Místo trvalého pobytu: " + adresa + "</p>" +

"<p><strong>Předmět jednání:</strong> Možnosti řešení nízké dávky DSSP</p>" +

"<p>Jmenovaný/á byl/a seznámen/a s rozhodnutím o DSSP, které mu/jí bylo srozumitelně vysvětleno.</p>" +

"<p><strong>Poskytnuté poradenství:</strong></p>" +
"<div class='text-poradenstvi'>" + textPoradenstvi.replace(/\n/g, "<br>") + "</div>" +

"<p>Účastník řízení dle svého vyjádření všemu porozuměl.<br>" +
"Účastník řízení si protokol přečetl a s jeho obsahem souhlasí.</p>" +

"<p>Jednání bylo ukončeno v " + casUkonceni + " hodin.</p>" +

"<div class='podpisy'>" +
"<div>............................................<br>oprávněná úřední osoba</div>" +
"<div>............................................<br>účastník řízení</div>" +
"</div>" +

"<div class='paticka'>" +
"<span>Úřad práce České republiky</span>" +
"<span>www.up.gov.cz</span>" +
"</div>" +

"</div>";
}

function vymaz(){
  if(confirm("Opravdu chcete vymazat celý formulář?")){
    location.reload();
  }
}

window.onload = function(){
  vykresliOblasti();

  var dnes = new Date();

  var rok = dnes.getFullYear();
  var mesic = String(dnes.getMonth() + 1).padStart(2, "0");
  var den = String(dnes.getDate()).padStart(2, "0");
  document.getElementById("datum").value = rok + "-" + mesic + "-" + den;

  var h = String(dnes.getHours()).padStart(2, "0");
  var m = String(dnes.getMinutes()).padStart(2, "0");
  document.getElementById("casUkonceni").value = h + ":" + m;
};
