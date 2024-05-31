<template>
    <div class="container modal-dialog-centered" >
        <div class="modal-dialog" role="document">
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
                                <option value="" :selected="blog.blogType ===''">-- Please Select --</option>
                                <option v-for="blogType in blogTypes" :key="blogType" :value="blogType" :selected="blogType === blog.blogType"> {{ blogType }}</option>
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
    </div>
</template>
<script>

export default {
    name: 'modal-blog',
    props : {
        ModalType : Boolean
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
            blogTypes : [
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