<template>
    <!-- Hero -->
    <section class="hero is-large">
        <figure>
            <img src="@/assets/images/Willem_Roelofs.webp"  alt="Willem_Roelofs" class="hero-bg-img"/>
        </figure>
        <div class="hero-body">
            <div class="container">
                <h1 class="title hero-title is-size-5-mobile is-size-2-tablet has-text-light">Psihoterapija Denis Kotnik</h1>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container my-5">
            <h3 class="title is-4 has-text-primary">Dobrodošli!</h3>
            <p>
                Moje ime je Denis in nudim <b>psihodinamsko psihoterapijo</b> online in v Trebnjem. V proces vključujem tudi telesne tehnike, saj so čustva in impulzi vedno prisotni tudi v telesu. Kombinacija psihoanalitičnega razumevanja in telesnega dela omogoča, da so spremembe trajne in da se zgodijo tukaj in zdaj — v varnem, sprejemajočem odnosu.
                <br><br>
                Psihodinamska psihoterapija je namenjena vsem, ki se počutijo ujete, preobremenjene ali odtujene — ne glede na to, ali je to vaš prvi stik s psihoterapijo ali pa ste že imeli izkušnje z njo. Ljudje pogosto prihajajo s temami, kot so tesnoba, potrtost, notranja napetost, nizka samopodoba, težave v odnosih ali občutek, da nekaj ni v redu.
                <br><br>
                Skupaj bomo odkrivali ponavljajoče se vzorce, pristno izražanje čustvev in nezavedne procese, ki lahko vplivajo na vaše življenje. Skozi ta proces mnogi pridobijo globlje razumevanje sebe, čustveno olajšanje ter možnost bolj pristnih in izpolnjujočih odnosov do sebe in drugih.
            </p>
            <div class="has-text-centered pt-6">
                <RouterLink class="button is-warning is-outlined" :to="{ name: 'about_psychotherapy' }">Več o psihoterapiji</RouterLink>
            </div>
        </div>
    </section>

    <section class="section custom-color">
        <div class="container my-5">
            <div class="columns is-vcentered">
                <div class="column is-golden-side has-text-centered">
                    <figure class="image">
                        <img class="img-working-on" src="@/assets/images/Caspar_David_Friedrich.webp" alt="Caspar_David_Friedrich" style="width: 70%;">
                    </figure>
                </div>
                <div class="column is-golden-main content">
                    <h4 class="title is-5 has-text-primary">V varnem terapevtskem prostoru lahko skupaj razrešujeva:</h4>
                    <ul>
                        <li>depresijo, anksioznost in panične napade,</li>
                        <li>pretirano zaskrbljenost, preobremenjenost in vztrajno tesnobo,</li>
                        <li>občutke krivde, sramu, strahu in notranje praznine,</li>
                        <li>težave v medosebnih odnosih, partnerskih odnosih, odnosih na delovnem mestu in strah pred odnosi,</li>
                        <li>izgubo pomembne osebe in proces žalovanja,</li>
                        <li>stres v vsakdanjem življenju in službi, nespečnost ter kronično utrujenost,</li>
                        <li>duševne motnje in motnje osebnosti,</li>
                        <li>težave z jezo in agresijo,</li>
                        <li>težave z izgorelostjo, zasvojenostjo in odvisniškimi vedenji,</li>
                        <li>anoreksijo, bulimijo in druge motnje hranjenja,</li>
                        <li>slabo samopodobo, občutke manjvrednosti in pomanjkanje smisla v življenju,</li>
                        <li>obsesivno-kompulzivne motnje, motnje identitete in druge psihosomatske težave.</li>
                    </ul>
                    <p class="is-italic has-text-warning has-text-centered mt-6">
                        "Najdaljša je pot, ki te pripelje najbližje k sebi,<br>in najtežja je vaja, ki rodi najpreprostejši napev."<br><br>— Rabindranath Tagore
                    </p>
                </div>
            </div>
        </div>
    </section>    
    <section class="section">
        <div class="container my-5">
            <div class="columns is-vcentered">
                <div class="column is-golden-main is-pulled-right">
                    <div class="block">
                        <h3 class="title is-5 has-text-primary">O meni</h3>
                        <p>
                            Moje ime je Denis Kotnik. Sem specializant psihodinamske psihoterapije in delujem pod redno supervizijo psihodinamskega in psihoanalitičnega psihoterapevta ter psihoanalitika.
                        </p>
                    </div>

                    <div class="block">
                        <p>Sem član Evropskega združenja psihoanalitičnih pristopov Slovenija (EZPPS) in se izobražujem z namenom pridobitve diplom pri Evropski konfederaciji psihoanalitičnih in psihodinamskih psihoterapij (ECPPP) ter Evropski krovni zvezi za psihoterapijo (EAP).<br><br>Izobraževanje opravljam na Inštitutu za psihodinamsko psihoterapijo v Ljubljani, kjer sem v okviru štiriletnega študija pridobil obsežno teoretično znanje s področja psihodinamske in telesno-orientirane psihoterapije.<br><br>Pomemben del mojega strokovnega razvoja predstavlja tudi osebna izkušnja: več kot 250 ur individualne psihodinamske psihoterapije z izbrano psihodinamsko psihoterapevtko in več kot 360 ur izkušnje v zaprti psihodinamski skupini (triletni proces) pod vodstvom psihodinamskega psihoterapevta.</p>
                    </div>

                    <div class="block">
                        <p>Moje zanimanje je že od nekdaj usmerjeno v tisto, kar ni takoj vidno — v vprašanja, kako ljudje razmišljamo, zakaj se vedemo, kot se vedemo, in kako se oblikujejo notranji konflikti. Po zaključku magistrskega študija na Univerzi v Ljubljani me je pot vodila v psihoanalizo, filozofijo in razmišljanje avtorjev, kot so Sokrat, René Descartes, Karl Marx, Sigmund Freud, Jacques Lacan, Alain Badiou in drugih.</p>
                    </div>
                </div>
                <div class="column is-golden-side has-text-centered">
                    <img class="img-denis-kotnik" src="@/assets/images/denis_kotnik.webp" alt="Denis_Kotnik" style="width: 80%;">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  	name: 'HomeView'
}
</script>

<style lang="scss" scoped>
    .hero {
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 10px 2px #516594;
    }

    .hero-bg-img {
        position: absolute;
        top: 0;       /* necessary for proper absolute positioning */
        left: 0;      /* necessary */
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 70%;
    }

    .hero-title {
        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
    }
</style>
