/* TD #1: Ekri yon algorit ki mande itilizatè 
  a konbyen enpresyon li ap fè nan yon biznis
 enpresyon. Pri grenn enpresyon an se 7.50 goud,
 si total enpresyon an pi piti ke 10. Si l pi plis
  oubyen egal 10, biznis la fè l 5 goud pa grenn enpresyon.  */


algorit: enpresyon

{algorit sa la pou li jere yon biznis enpresyon }

varyab pri_nomal: reyel <- 7.50

varyab pri_rabe: reyel <- 5

varyab kantite_enpresyon : antye 

varyab total: antye 


demare 
	afiche("konbyn enpresyon wap fe client")

	antre(kantite_enpresyon)

	si kantite_enpresyon < 10 donk 
	   total <- kantite_enpresyon * 7.50


	sinon 
		total <- kantite_enpresyon * 5

	fsi

   afiche(" client sa koutew :")

   afiche('total')
fen




// TD #2: Ekri yon algorit, ki pral mande itilizatè a tape 2 nonm. Ou pral 
//afiche si pwodwi nonm sa yo pozitif, nil, 
//oubyen negatif. Pa fè kalkil pwodwi varyab yo pou algorit sa,
 //jis makonnen ekspresyon yo ak operatè lojik yo: ak, ou



algorit: pwodwi opsyonel

{algorit sa la pou li teste 2 nonm}

varyab x: reyel
	   y: reyel


demare 
	afiche("antre premye nonm lan")

	antre(x)

	afiche("antre dezyem nonm lan")

	ante(y)


	si (x > 0 ak y > 0) ou (x < 0 ak y < 0) donk 

		afiche ("pwodwi sa positif")

	sinon si x = 0 ou y = 0 donk 

		afiche ("pwodwi nil")

	sinon 
		 afiche("pwodwi sa yo negatif ui")

    fsi

fen






// TD #3: Ekri yon pwogram ki mande nimewo jou nan semèn nan,
// epi ou ap afiche ki jou li ye. Kòmanse ak 1
 // ki koresponn ak Dimanch. Itilize "selon...finalman"
 //  pou w fè travay sa.



algorit: jou semen nan

{algorit sa la poul few konnen ki jou}

varyab jou: antye 


demare 

	afiche("antre numero jou ou vle an ")

	afiche ("NB 'damanche se 1 li ye")

	antre(jou)


	selon jou 

		1: afiche("jodi an Dimanvhe")
		2: afiche("jodi a lundi")
		3: afiche("jodi an mardi")
		4: afiche("jodi an mercredi")
		5: afiche("jodi an jeudi")
		6: afiche("jodi an vendredi ")
		7: afiche("jodi an samadi")


	finalman afiche("chif ou antre an pa bon", jou )


fen


