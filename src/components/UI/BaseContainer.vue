<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    max-width: 1100px !important;
    margin: 0 auto;
}

@media screen and (max-width: 1200px){
    div {
    max-width: 990px !important;
}
}

@media screen and (max-width: 1150px){
    div {
    max-width: 900px !important;
}
}

@media screen and (max-width: 950px){
    div {
    max-width: 750px !important;
}
}

@media screen and (max-width: 850px){
    div {
    max-width: 85% !important;
}
}

@media screen and (max-width: 400px){
    div {
    max-width: 95% !important;
}
}
</style>