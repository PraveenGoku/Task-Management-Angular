import { Component, EventEmitter, Input, output, Output } from '@angular/core';

// type Users = {
//   id:string;
//   avatar:string;
//   name:string;
// }

interface Users {
  id:string;
  avatar:string;
  name:string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({required:true}) user!: Users;

  @Output() select = new EventEmitter();
  // select = output<string>(); //Output Function method
  
  //signal method
  // imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);
  // getter method for computations //Zonejs method
  get imagePath(){ 
    return 'assets/users/' + this.user.avatar; 
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
