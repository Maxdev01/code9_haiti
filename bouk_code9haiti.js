//Repetisyon ak pou
//Bouk sa repete enstriksyon w bay la yon kantite fwa. Li itilize
// lè w konn kantite iterasyon bouk la pral fè a. Mo kle ki enpòtan
 // ladan an se: pou a pa fè fpou


pou varyab ← <pwen_inisyal> a <pwen_final> pa <pa> fè
    enstriksyon
fpou


// Men yon ekzanp tab miltiplikasyon 7 ak bouk pou:

Algo: Tab Miltiplikasyon
varyab tab: antye

demare
    tab ←7
    pou varyab i ← 1 a 10 pa 1 fè
        afiche(i," x ", tab, ' = ',i * tab)
    fpou
fen


//  Kèk pwen nan dewoulman an:

//  Inisyalize kontè a depi nan ekspresyon lojik la 
//  Enkremante kontè a, tou depan de valè ou mete nan pa
//  Verifye ke kontè a pa depase valè final la.



 // Repetisyon ak tanke...fè
//  Bouk sa repete enstriksyon w bay la yon kantite fwa tou.
// Se yon bouk inivèsèl li ye, ou ka fè nenpòt iterasyon ak li. 
// Men sentaks kòman li prezante:

<varyab ki pral itilize anndan kondisyon an>
tanke <ekspresyon lojik ki ap teste a, ki dwe vrè> fè
    enstriksyon
ftk


Sa mwen vle w sezi la, se konnen ke tout varyab ki pral 
itilize nan kondisyon an oubyen ekspresyon lojik la, fòk 
li deklare epi afekte deja depi avan <varyab ki pral itilize anndan kondisyon an>

//  Men yon ekzanp ki fèt baze sou menm kalkil tab miltiplikasyon an:


Algo: Tab Miltiplikasyon
varyab tab: antye,
    i : antye

demare
    tab ←7
    i ←1 // sa enpòtan la, paske mwen afekte i avan bouk la
    tanke i <= 10 fè
        afiche(i," x ", tab, ' = ',i * tab)
        i ← i + 1 # Sa sèvi pou ogmante valè i, pou l pa tounen yon bouk enfini
    ftk
fen



Avèk repetisyon tanke...fè , varyab ki ap fè pati de kondisyon
 an dwe resevwa afektasyon l depi avan ekspresyon lojik la fè tès.
  Nan ka sa la, se i <= 10, donk i dwe deklare epi afekte depi avan
   jan m fè l la: i ←1. Yon pwen enpòtan, se kote mwen ajoute 1 sou i,
    sa vle di ke nan chak iterasyon, i ap ogmante de 1 poutèt ekspresyon 
    lojik la ka rive
 yon lè li fo, pou l kanpe. Se evidan, i gen pou l depase 10 pou bouk la kanpe, paske li ap ogmante.



 // Kek pwen nan dewoulman an:

// Inisyalize kontè a depi a lavans avan bouk la
// Enkremante kontè a, tou depan de enstriksyon ou mete anndan bouk la.
 // Verifye ke kontè a pa depase valè final la.



// Repetisyon ak bouk repete...tanke
Ak bouk sa, blòk enstriksyon ou genyen an ap ekzekite yon fwa kanmèm,
 avan li teste si ekspresyon lojik la vrè pou l repete blòk enstriksyon an. 
 Bouk sa diferan de tanke...fè paske
 bouk sa li menm ap ekzekite yon fwa kanmèm menm si ekspresyon an pa vrè. Sentaks la se:

 repete
    entriksyon
tanke <ekspresyon lojik oubyen kondisyon ki dwe vrè a>


Algo: Valè negatif pou kanpe bouk
varyab val: reyèl

demare
    repete
        afiche("Antre yon nonm negatif pou w kanpe bouk sa")
        antre(val)
    tanke val >= 0
fen




Tout bouk la pou repete blòk enstriksyon. Chak gen kote ou ka itilize yo.
 tanke...fè se yon bouk inivèsèl, sa vle di li ka itilize pou nenpòt iterasyon w ta vle fè;
  men gen kote pou, ap pi efikas pou w itilize, tankou pou w itere anndan yon tablo
   pa ekzanp. repete...tanke prèske menm jan tanke...fè sèl diferans ki genyen,
    repete...tanke ekzekite yon fwa kit kondisyon an vrè oubyen fo.