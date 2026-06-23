<template>
    <!-- Hero -->
    <section class="hero is-medium">
        <figure>
            <img src="@/assets/images/tree.webp"  alt="Home_image" class="hero-bg-img"/>
        </figure>
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-size-5-mobile is-size-3-tablet has-text-light">Online psihoterapija</h1>
                <h2 class="subtitle is-size-6-mobile is-size-4-tablet has-text-light">Psihoterapija Kotnik</h2>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-main">
                    <h3 class="title is-4 has-text-primary">Dobrodošli!</h3>
                    <p>
                        Moje ime je Denis in nudim online <b>psihodinamsko psihoterapijo</b>, občasno tudi v Trebnjem v Sloveniji. V proces vključujem tudi telesne tehnike, saj so čustva in impulzi vedno prisotni tudi v telesu. Kombinacija psihoanalitičnega razumevanja in telesnega dela omogoča, da so spremembe trajne in da se zgodijo tukaj in zdaj — v varnem, sprejemajočem odnosu.
                        <br><br>
                        Psihodinamska psihoterapija je namenjena vsem, ki se počutijo ujete, preobremenjene ali odtujene — ne glede na to, ali je to vaš prvi stik s psihoterapijo ali pa ste že imeli izkušnje z njo. Ljudje pogosto prihajajo s temami, kot so tesnoba, potrtost, notranja napetost, nizka samopodoba, težave v odnosih ali občutek, da nekaj ni v redu.
                        <br><br>
                        Skupaj bomo odkrivali ponavljajoče se vzorce, pristno izražanje čustvev in nezavedne procese, ki lahko vplivajo na vaše življenje. Skozi ta proces mnogi pridobijo globlje razumevanje sebe, čustveno olajšanje ter možnost bolj pristnih in izpolnjujočih odnosov do sebe in drugih.
                    </p>
                    <div class="has-text-centered py-5">
                        <RouterLink class="button is-warning is-outlined" :to="{ name: 'about_psychotherapy' }">Več o psihoterapiji</RouterLink>
                    </div>
                </div>
                <div class="column is-golden-side has-text-centered">
                    <img class="img-denis-kotnik" src="@/assets/images/denis_1.webp" alt="Denis_Kotnik_1" style="width: 70%;">
                    <div class="pt-5">
                        <RouterLink class="button is-warning is-outlined" :to="{ name: 'about_me' }">Več o meni</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section custom-color">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-side has-text-centered">
                    <figure class="image">
                        <img class="img-working-on" src="@/assets/images/roots.webp" alt="Working_on_psychotherapy_image" style="width: 65%;">
                    </figure>
                </div>
                <div class="column is-golden-main content">
                    <h4 class="title is-5 has-text-primary">V varnem terapevtskem prostoru lahko skupaj razrešujeva:</h4>
                    <ul>
                        <li>depresijo, anksioznost in panične napade</li>
                        <li>pretirano zaskrbljenost, preobremenjenost in vztrajno tesnobo</li>
                        <li>občutke krivde, sramu, strahu in notranje praznine</li>
                        <li>težave v medosebnih odnosih, partnerskih odnosih, odnosih na delovnem mestu in strah pred odnosi</li>
                        <li>izgubo pomembne osebe in proces žalovanja</li>
                        <li>stres v vsakdanjem življenju in službi, nespečnost ter kronično utrujenost</li>
                        <li>duševne motnje in motnje osebnosti</li>
                        <li>težave z jezo in agresijo</li>
                        <li>težave z izgorelostjo, zasvojenostjo in odvisniškimi vedenji</li>
                        <li>anoreksijo, bulimijo in druge motnje hranjenja</li>
                        <li>slabo samopodobo, občutke manjvrednosti in pomanjkanje smisla v življenju</li>
                        <li>obsesivno-kompulzivne motnje, motnje identitete in druge psihosomatske težave</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <p class="is-italic has-text-warning has-text-centered">
                "Najdaljša je pot, ki te pripelje najbližje k sebi,<br>in najtežja je vaja, ki rodi najpreprostejši napev."<br><br>— Rabindranath Tagore
            </p>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="columns is-centered has-text-centered">
                <div class="column is-half">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title is-centered">Uvodni pogovor (50 min)</p>
                        </header>
                        <div class="card-content">
                            <p class="price">
                                <span class="currency">
                                    <font-awesome-icon icon="fa-solid fa-euro-sign" />
                                </span>
                                <span class="amount">40</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-half">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title is-centered">Psihodinamska psihoterapija (50 min)</p>
                        </header>
                        <div class="card-content">
                            <p class="price">
                                <span class="currency">
                                    <font-awesome-icon icon="fa-solid fa-euro-sign" />
                                </span>
                                <span class="amount">50</span>
                            </p>
                        </div>
                    </div>
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
        object-position: 100% 65%;
    }

    .price {
        display: inline-flex;
        align-items: flex-start;
    }

    .price .currency {
        font-size: 0.8em;
        line-height: 1;
    }

    .price .amount {
        font-size: 2rem;
        line-height: 1;
    }

</style>
