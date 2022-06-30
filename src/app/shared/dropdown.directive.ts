import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
//103. Building and Using a Dropdown Directive
    // @HostBinding('class.open') isOpen = false;

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }


//104. Closing the Dropdown From Anywhere
//เมื่อคลิกปุ่ม และสร้าง function toggleOpen() แยกออกมา และรับ parameter เป็น event เสมอ โดยค่า event.target ก็คือ ตัว element ที่เกิด even
//Contains คือ คำสั่งหรือฟังก์ชันสำหรับตรวจสอบว่าในตัวแปร ดังกล่าวมีข้อความ หรือตัวอักษรที่ต้องการค้นหาหรือไม่ โดยจะคืนค่าเป็นชนิด boolean คือ ถ้าพบหรือมีคืนค่า true แต่ถ้าไม่พบคืนค่า false 
@HostBinding('class.open') isOpen = false;
@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  ["abc", "ac"].includes("ac") ? console.log("true") : console.log("false")
}

 constructor(private elRef : ElementRef){}

}