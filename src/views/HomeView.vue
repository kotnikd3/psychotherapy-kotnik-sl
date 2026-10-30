<template>
    <div>
        <!-- Hero -->
        <section class="hero is-large">
            <figure>
                <img src="@/assets/images/Ivan_Aivazovsky_Calm_Sea.webp"  alt="Ivan_Aivazovsky" class="hero-bg-img"/>
            </figure>
            <div class="hero-body">
                <div class="container">
                    <h1 class="title hero-title is-size-5-mobile is-size-2-tablet has-text-light">Psihoterapija Denis Kotnik</h1>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container my-5">
                <h2 class="title is-4 has-text-primary">Dobrodošli!</h2>
                <p>
                    Moje ime je Denis Kotnik. Sem <strong>specializant psihodinamske psihoterapije</strong> in delujem pod redno supervizijo. Nudim <b>psihodinamsko psihoterapijo</b> online in v Trebnjem. V proces vključujem tudi <b>telesne tehnike</b>, saj so čustva in impulzi vedno prisotni tudi v telesu. S povezovanjem psihoanalitičnega razumevanja in telesnega dela lahko raziskujemo vaše doživljanje tukaj in zdaj ter možnosti za spremembe v varnem, sprejemajočem odnosu. Potek in izidi psihoterapije so pri vsakem posamezniku različni.
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
                        <h2 class="title is-5 has-text-primary">Teme, ki jih lahko raziskujeva v terapevtskem procesu:</h2>
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
                            <h2 class="title is-5 has-text-primary">O meni</h2>
                            <p>
                                Moje ime je Denis Kotnik. Sem specializant psihodinamske psihoterapije in delujem pod redno supervizijo psihodinamskega in psihoanalitičnega psihoterapevta ter psihoanalitika.
                            </p>
                        </div>

                        <div class="block">
                            <h3 class="title is-6 has-text-primary">Izobraževanje in strokovno članstvo</h3>
                            <p>Sem član <a href="https://www.ezpps.si/clani/denis-kotnik" target="_blank" rel="noopener noreferrer">Evropskega združenja psihoanalitičnih pristopov Slovenija (EZPPS)</a>. Na povezavi je objavljen moj strokovni profil.</p>
                            <p class="mt-3">Izobraževanje opravljam na <a href="https://www.psihodinamska-psihoterapija.org/" target="_blank" rel="noopener noreferrer">Inštitutu za psihodinamsko psihoterapijo v Ljubljani</a>, kjer sem v okviru štiriletnega študija pridobil obsežno teoretično znanje s področja psihodinamske in telesno-orientirane psihoterapije.</p>
                            <p class="mt-3">Moje izobraževanje poteka z namenom pridobitve diplom pri <a href="https://ecpp.ngo/" target="_blank" rel="noopener noreferrer">Evropski konfederaciji psihoanalitičnih in psihodinamskih psihoterapij (ECPPP)</a> ter <a href="https://www.europsyche.org/" target="_blank" rel="noopener noreferrer">Evropski krovni zvezi za psihoterapijo (EAP)</a>. Ti diplomi še nista pridobljeni.</p>
                        </div>

                        <div class="block">
                            <h3 class="title is-6 has-text-primary">Osebna izkušnja in strokovni razvoj</h3>
                            <p>Pomemben del mojega strokovnega razvoja predstavlja tudi osebna izkušnja: več kot 250 ur individualne psihodinamske psihoterapije (1x tedensko) z izbrano psihodinamsko psihoterapevtko in več kot 600 ur izkušnje v zaprti psihodinamski skupini (triletni proces) pod vodstvom psihodinamskega psihoterapevta.</p>
                        </div>

                        <div class="block">
                            <p>Moje zanimanje je že od nekdaj usmerjeno v tisto, kar ni takoj vidno — v vprašanja, kako ljudje razmišljamo, zakaj se vedemo, kot se vedemo, in kako se oblikujejo notranji konflikti. Po zaključku magistrskega študija na Univerzi v Ljubljani me je pot vodila v psihoanalizo, filozofijo in razmišljanje avtorjev, kot so Sokrat, René Descartes, Karl Marx, Sigmund Freud, Jacques Lacan, Alain Badiou in drugih.</p>
                        </div>

                        <div class="block">
                            <h3 class="title is-6 has-text-primary">Srečanja in kontakt</h3>
                            <p>Srečanja potekajo v Trebnjem in online. Za informacije o ceni, trajanju srečanj in prostih terminih mi pišite na <a href="mailto:info@psihoterapija-kotnik.si">info@psihoterapija-kotnik.si</a> ali uporabite spodnji kontaktni obrazec.</p>
                        </div>
                    </div>
                    <div class="column is-golden-side has-text-centered">
                        <img class="img-denis-kotnik" src="@/assets/images/denis_kotnik.webp" alt="Denis_Kotnik" style="width: 80%; border: 2px double #b26a4b;">
                    </div>
                </div>
            </div>
        </section>
    </div>
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
        object-position: 100% 80%;
    }

    .hero-title {
        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
    }
</style>
