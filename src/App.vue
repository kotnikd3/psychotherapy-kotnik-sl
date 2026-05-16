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
                    <RouterLink class="navbar-item" :to="{ name: 'about_psychotherapy' }" @click="isMenuActive = false;">O psihoterapiji</RouterLink>
                    <RouterLink class="navbar-item" :to="{ name: 'about_me' }" @click="isMenuActive = false;">O meni</RouterLink>
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

    <footer class="footer">
        <div class="container">
            <div class="has-text-centered has-text-primary">
                <p><span>Online psihoterapija | Psihoterapija Kotnik</span> <font-awesome-icon icon="fa-regular fa-copyright" /> 2026</p>
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
