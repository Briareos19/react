<template>
 <div class="mt-5">
 <h2 class="text-center bg-secondary fw-bold super-container text-white">TESTIMONIOS</h2>
    <div class="container mt-5 mb-5">
    <div class="row g-2">
        <div class="col-md-4">
            <div class="card p-3 text-center px-4">
                <div class="user-image"> <img src="https://i.imgur.com/PKHvlRS.jpg" class="rounded-circle" width="80"> </div>
                <div class="user-content">
                    <h3 class="super-container mb-0">Bruce Hardy</h3> <span>Software Developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 text-center px-4">
                <div class="user-image"> <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="80"> </div>
                <div class="user-content">
                    <h3 class="mb-0">Mark Smith</h3> <span>Web Developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 text-center px-4">
                <div class="user-image"> <img src="https://i.imgur.com/ACeArwY.jpg" class="rounded-circle" width="80"> </div>
                <div class="user-content">
                    <h3 class="mb-0">Veera Duncan</h3> <span>Software Architect</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
            </div>
        </div>
    </div>
</div>
 </div>
</template>

<script>
export default {
    name:'testimonios'

}
</script>

<style>
body {
    background-color: #eee
}

.card {
    border: none
}

.user-content p {
    margin-top: 5px;
    font-size: 12px
}

.ratings i {
    color: blue
}
</style>