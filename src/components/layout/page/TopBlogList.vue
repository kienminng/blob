<template>
    <div class="card col-6 container" style="height: 600px;">
        <div class="" data-mdb-ripple-init data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" style="max-height: auto !" class="img-fluid img-fluid-custom" />
            <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
        </div>
    </div>
    <div class="col-6" style="height: 600px;">
        <div class="card">
            <div class="container">
                <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                        class="img-fluid img-fluid-custom" style="height: 200px;" />
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </a>
                </div>
                <div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="container">
                <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                        class="img-fluid img-fluid-custom" style="height: 200px;" />
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </a>
                </div>
                <div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="container">
                <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                        class="img-fluid img-fluid-custom" style="height: 200px;"/>
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </a>
                </div>
                <div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
export default {
    name: 'top-blog-list'
}
</script>
<style>
.container {
    display: flex;
    align-items: stretch;
    color: white;
    background-color: black;
    /* Ensures that all children stretch to the same height */
}

.img-container {
    flex: 1;
    /* Allows the image container to take up the necessary space */
}

.img-container img {
    width: 25%;
    height: 25%;
    object-fit: cover;
    /* Ensures the image covers the container without distortion */
}

.card {
    flex: 2;
    /* Allows the card to take up more space */
    display: flex;
    flex-direction: column;
}

.img-fluid-custom {
    width: 100%;
    height: auto;
    /* max-height: 200px; */
    /* Adjust this value as needed */
    object-fit: cover;
    /* Ensure the image covers the entire area without distortion */
}
</style>