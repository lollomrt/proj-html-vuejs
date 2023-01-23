<script>
export default {
    props: {
        socialArray: Array
    }
}
</script>

<template lang="">
    <footer>
        <div class="container-sx">
            <div class="container-up">
                <div class="col-30">
                <h3>find our restaurants</h3>
                <p>1614 E. Rell Rd #104.<br>
                    Salerno, AZ 85022<br>
                    (602) 867-1010
                </p>
                <p>204 E. Piazzetta Tommaso<br>
                    Sorrento, AZ 85022<br>
                    (602) 867-1010
                </p>
                <p>1Vale Puglia 54<br>
                    Torre Del Greco, AZ 85022<br>
                    (602) 867-1010
                </p>
                <p>Corso Italia AA<br>
                    Salerno, AZ 85022<br>
                    (602) 867-1010
                </p>
                </div>
                <div class="col-30">
                    <h3>working hours</h3>
                    <div class="single-day">
                        <h4>Monday</h4>
                        <p class="red">Kitchen Closed</p>
                    </div>
                    <div class="single-day">
                        <h4>thusday untill friday</h4>
                        <p>9:00 - 22:00</p>
                    </div>
                    <div class="single-day">
                        <h4>saturday</h4>
                        <p>Saturday 11 am to midnight</p>
                    </div>
                    <div class="single-day">
                        <h4>sunday</h4>
                        <p>9:00 - 22:00</p>
                    </div>
                    <div class="social-container">
                        <h4>follow us:</h4>
                        <span v-for="(elemento, index) in socialArray" :key="index">
                            <a :href="elemento.url">
                                <i :class="elemento.icon"></i>                        
                            </a>             
                        </span>
                    </div>
                </div>
                <div class="col-30">
                    <H2>THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA</H2>
                </div>
            </div>
            
            <div class="col-100">
                <span>&copy; 2022 <a href="#">Qode Interactive</a></span>
                <img src="/src/assets/img/footer-bottom-img.png" alt="">
            </div>
        </div>
        <div class="image-container">
            <img src="/src/assets/img/footer-img-1.jpg" alt="">
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
    display: flex;
    width: 100%;
    height: 90vh;
    align-items: center;
    background-image: url(/src/assets/img/cielostellato.png);
    background-size: cover;

    .container-sx {
        width: 50%;
        gap: 3rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 4rem;
        color: #b2b2b2;


        .container-up {
            display: flex;
            gap: 3rem;

            h2 {
                color: $white;
            }

            h3,
            h4 {
                color: $secondary-color
            }

            p,
            h4 {
                font-size: 0.8rem;
            }
        }

        .col-30 {
            width: calc(100% / 3 - 1rem);
            display: flex;
            flex-direction: column;
            gap: 1.2rem;

            .red {
                color: $text-red;
            }

        }

        .social-container {
            margin-top: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;

            i {
                font-size: 0.8rem;
                color: $white;

                &:hover {
                    color: $secondary-color;
                }
            }


        }

        .col-100 {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 0.8rem;

            img {
                width: 17%;
            }

            a {
                font-family: "Open Sans";
                text-transform: lowercase;
                text-decoration: none;
                color: $text-green
            }
        }
    }

    .image-container {
        width: 50%;
        height: 100%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>