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
        copyClipboard()
        {
            
            const copyToClipboard = str => {
              const el = document.createElement('textarea');
              el.value = str;
              document.body.appendChild(el);
              el.select();
              document.execCommand('copy');
              document.body.removeChild(el);
            };
            copyToClipboard(this.textCss() + ";");
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
        },
        textCss()
        {
            if(this.center!="")
            {
                return `border-radius: ${this.center}px`;
            }
            else if(this.topLeft == this.bottomRight && this.topRight == this.bottomLeft)
            {
                return `border-radius: ${this.topLeft}px ${this.topRight}px`;
            }
            else
            {
                return `border-radius: ${this.topLeft}px ${this.topRight}px ${this.bottomRight}px ${this.bottomLeft}px`;
            }
        }
    },
    computed: {
        cssText(){
            return this.textCss();
        }
    }
});