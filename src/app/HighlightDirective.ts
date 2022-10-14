import { Directive,ElementRef,HostListener,Input } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})

export class HightDirective{
    constructor(public el:ElementRef){
        el.nativeElement.style.backgroundColor = '';   
    }
    private highlight(color:any) {
        this.el.nativeElement.style.backgroundColor = color;
      }
    @HostListener('mouseenter') onmouseenter(){
        this.highlight(this.highlightColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }
    @Input()highlightColor: string = '';
     
}