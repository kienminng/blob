<template>
    <!-- <div class="container  show" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span></span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Id:</label>
                            <input type="text" class="form-control" id="id" v-model="blog.id" readonly>
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Tille: </label>
                            <input type="text" class="form-control" id="title" v-model="blog.title">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Content:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="blog.content">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">blogType:</label>
                            <select name="" id="" v-model="blog.blogType">
                                <option value="" :selected="blog.blogType === ''">-- Please Select --</option>
                                <option v-for="blogType in blogTypes" :key="blogType" :value="blogType"
                                    :selected="blogType === blog.blogType"> {{ blogType }}</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
    </div> -->
    <div class="modal-backdrop show"></div>
    <div class="modal show" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 v-if="this.ModalType === ''" class="modal-title" id="myModalLabel">Modal create</h5>
                    <h5 v-if="this.ModalType === 'update'" class="modal-title" id="myModalLabel">Modal update</h5>
                    <h5 v-if="this.ModalType === 'view'" class="modal-title" id="myModalLabel">Modal view detail</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group" v-if="this.ModalType === 'update' || this.ModalType === 'view'">
                            <label for="recipient-name" class="col-form-label">Id:</label>
                            <input type="text" class="form-control" id="id" v-model="blog.id" readonly>
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Tille: </label>
                            <input type="text" class="form-control" id="title" v-model="blog.title">
                        </div>
                        <div class="form-group">
                            <label for="recipient-content" class="col-form-label">Content:</label>
                            <textarea class="form-control" id="recipient-content" rows="3" v-model="blog.content"></textarea>
                            <!-- <input type="text" class="form-control" id="recipient-content" v-model="blog.content"> -->
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">blogType:</label>
                            <select name="" id="" v-model="blog.blogType">
                                <option value="" :selected="blog.blogType === ''">-- Please Select --</option>
                                <option v-for="blogType in blogTypes" :key="blogType" :value="blogType"
                                    :selected="blogType === blog.blogType"> {{ blogType }}</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" disabled>Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

export default {
    name: 'modal-blog',
    props: {
        ModalType: String
    },
    data() {
        return {
            blog: {
                id: 0,
                title: "",
                content: "",
                blogType: ""
            },
            blogs: [],
            isCreate: true,
            blogTypes: [
                "ROMANTIC",
                "TECHNOLOGY",
                "HISTORY",
                "CAREER_PATH",
                "BINANCE",
                "LEARN"
            ]
        }
    },
    computed: {

    },
    methods: {

    }

}
</script>
<style>
@import url("/src/assets/style.css");

.modal-header {
    background-color: #007bff;
    color: white;
}

.modal-body {
    padding: 20px;
    background-color: #f8f9fa;
}

.modal-footer {
    background-color: #f8f9fa;
}

.modal-title {
    font-weight: bold;
}

/* Make sure the background content is not interactable */
.modal-backdrop.show {
    opacity: 0.5;
}

.modal-backdrop {
    z-index: 1040;
}

.modal {
    display: block;
    z-index: 1050;
}
</style>