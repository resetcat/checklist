import { Component } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  // users: User[] = [];
  // userSubscription$?: Subscription;
  // ngDestroyed$ = new Subject<void>();
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}

  // ngOnInit(): void {
  // this.userService
  //   .getUsers()
  //   .pipe(takeUntil(this.ngDestroyed$))
  //   .subscribe((users) => {
  //     console.log('user', users);
  //     this.users = users;
  //   });
  // });  this.userSubscription$ = this.userService.getUsers().subscribe((users) => {
  //   console.log('user', users);
  //   this.users = users;
  // });
  // }

  // ngOnDestroy(): void {
  //   // this.userSubscription$?.unsubscribe();
  //   this.ngDestroyed$.next();
  //   this.ngDestroyed$.complete();
  // }
}
