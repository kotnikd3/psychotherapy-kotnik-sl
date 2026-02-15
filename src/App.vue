<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink class="navbar-item" :to="{ name: 'home' }" @click="isMenuActive = false;">
                    <img src="@/assets/images/logo.webp" alt="psihoterapija_kotnik_logo">
                </RouterLink>
                <RouterLink class="navbar-item" :to="{ name: 'home' }" @click="isMenuActive = false;">Psihoterapija Kotnik</RouterLink>
                <a 
                    role="button" 
                    :class="['navbar-burger', { 'is-active' : isMenuActive }]"
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navMenu"
                    @click="isMenuActive = !isMenuActive"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navMenu" :class="['navbar-menu', { 'is-active' : isMenuActive }]">
                <div class="navbar-end">
                    <RouterLink class="navbar-item" :to="{ name: 'psychodynamic_psychotherapy' }" @click="isMenuActive = false;">Psihodinamska psihoterapija</RouterLink>
                    <RouterLink class="navbar-item" :to="{ name: 'denis_kotnik' }" @click="isMenuActive = false;">Denis Kotnik</RouterLink>
                    <div class="navbar-item">
                        <a class="button is-primary is-outlined is-small" href="https://psychotherapy-kotnik.com" target="_blank" rel="noopener noreferrer">
                            <span class="icon">
                                <img alt="United States" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/>
                            </span>
                            <span>English</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <RouterView />

    <div class="container">
        <hr>
    </div>
    
    <section class="section">
        <div class="container is-max-tablet">
            <h5 class="title is-5 has-text-centered has-text-primary">Stopite v stik z mano</h5>
            <h6 class="subtitle is-6 has-text-centered has-text-primary">
                <a href="mailto:info@psihoterapija-kotnik.si" class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-regular fa-envelope" />
                    </span>
                    <span>info@psihoterapija-kotnik.si</span>
                </a>
            </h6>
            
            <ContactForm></ContactForm>
        </div>
    </section>

    <div class="container">
        <div class="notification is-info has-text-centered is-size-4 p-2 mb-4">
            <p>Z delom v okviru psihoterapevtske prakse bom pričel aprila 2026.</p>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="columns is-mobile is-multiline is-centered">
                <div class="column is-half-mobile is-narrow">
                    <h6 class="title is-6 has-text-primary"><strong>Kontakt</strong></h6>
                    <ul>
                        <li>
                            <a href="mailto:info@psihoterapija-kotnik.si" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-regular fa-envelope" />
                                </span>
                                <span>info@psihoterapija-kotnik.si</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+31628865682" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                </span>
                                <span>+31 628 865 682</span>
                            </a>
                        </li>
                        <li>
                            <span class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-gavel" />
                                </span>
                                <span>KVK številka: v pridobivanju</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="column is-half-mobile is-narrow">
                    <h6 class="title is-6 has-text-primary"><strong>Lokacije dela</strong></h6>
                    <ul>
                        <li>
                            <a href="https://maps.app.goo.gl/u84FRsYXBAmzNbn17" target="_blank" rel="noopener noreferrer" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>Jezero 3A<br>8210 Trebnje<br>Slovenia</span>
                            </a>
                        </li>
                        <li>
                            <div class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>online</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="has-text-centered pt-5 has-text-primary">
                <p><span>Psihoterapija Kotnik</span> <font-awesome-icon icon="fa-regular fa-copyright" /> 2026</p>
				<p style="font-size: x-small;"><i><a href="https://www.kotnik.si" target="_blank">Ustvaril kotnik.si</a></i></p>
			</div>
        </div>
    </footer>
</template>

<script>
import ContactForm from '@/views/ContactForm.vue';

export default {
  	name: 'App',
    components: {
        ContactForm,
    },
    data() {
            return {
                isMenuActive: false,
            }
        },
}
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    .navbar-item.router-link-exact-active {
        background-color: $color-primary-select;
        text-decoration: underline;
    }
</style>
