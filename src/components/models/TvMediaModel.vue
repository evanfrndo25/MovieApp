<template>
    <div style="background-color: rgb(0, 0, 0, .5);" class="fixed top-0 left-0 w-full h-full flex items-center shadow" tabindex="0" v-show="value">
        <div class="container mx-auto lg:px-32 rounded-lg overflow-y-a">
            <div class="bg-gray-900 rounded">
                <div class="flex justify-end pr-4 pt-2">
                    <button @click="close" class="text-3xl leading-none hover:text-gray-300">
                        &times;
                    </button>
                </div>
                <div class="modal-body px-8 py-8">
                    <div class="responsive-container overflow-hidden relative" style="padding-top: 56.25%" >
                        <iframe class="responsive-iframe absolute top-0 left-0 w-full h-full" style="border:0;" allow=" autoplay; ecrypted-media" allowfullscreen :src="mediaURL">
                         </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                required: true,
            },
            mediaURL: {
                required: true,
            }
        },
        methods: {
            close() {
                this.$emit("input", !this.value)
            }
        }
    }
</script>