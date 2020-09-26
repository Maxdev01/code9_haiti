Pou w ekri yon tablo, li dwe gen yon non paske li
 se yon done tou. Ou dwe presize tip la, pou w di ki
  valè ou pral mete anndan tablo sa. Sentaks la se:



// tablo <non_tablo(longè)>: reyèl


//  nou pral rezoud prob not yo 
// kounya nap fe moun nan antre 15not

algorit: kalkile mwayen

{algorit pou kalkile mwayen}

tablo not(15): reyel

varyab total : reyel

varyab mwayen: reyel


demare

	pou i <- 0 a 14 fe

		afiche("antre not ki nan pozisyon", i)

		antre(not[i])

	fpou


	total <- 0

	pou i <- 0 a 14 fe 

		total <- total +  not[i]

	fpou



	// pou kalkile mwayen lan 

    mwayen <- total / 15

    	afiche("mwayen ou se: ", mwayen)

 redim non_tablo(longe_tablo)
// Si w ta vle itilize l nan yon algorit, ou ka jis mande pou antre 
//  longè tablo a, aprè ou redimansyone li.



Algo: Test Tablo
{Algorit pou teste tablo dinamik}
tablo Non: chenn
varyab n: antye

demare
    afiche("Antre kantite elaman ou vle mete nan tablo a: ")
    antre(n)
    redim Non(n)
fen