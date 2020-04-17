const vm_main = new Vue({
    el:"#main",
    data:{
        topLeft:0,
        topRight:0,
        bottomLeft:0,
        bottomRight:0,
        center:0
    },
    methods: {
        validateValue(value)
        {
            if(value == "")
            {
                return ""
            }
            let aux = value.replace(/[^0-9]/g,"");
            return aux;
        },
        keyBorder(value)
        {
            this[value] = this.validateValue(this[value]);
            if(this.topLeft == this.topRight && this.topRight == this.bottomLeft && this.bottomLeft == this.bottomRight)
            {
                this.center = this[value];
            }
            else
            {
                this.center = "";
            }
        },
        inputCenter(){
            this.center = this.validateValue(this.center);
            if(this.center != "")
            {
                this.topLeft = this.center;
                this.topRight = this.center;
                this.bottomLeft = this.center;
                this.bottomRight = this.center;
            }
        }
    },
    watch: {
        
    }
});