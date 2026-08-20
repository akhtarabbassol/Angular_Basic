import {
  Component,
  effect,
  resource,
  signal
} from "@angular/core";

interface UserInfo {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

@Component({
  selector: 'App',
  templateUrl: 'app.html',
  styleUrl: 'app.css'
})
export class myApp {

  Userid = signal(1);

  User = resource<UserInfo[], unknown>({
    loader: async () => {

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );

      if (!response.ok) {
        throw new Error("Failed to Fetch Data");
      }

      return response.json();
    }
  });

  Users = signal<UserInfo[]>([]);

  // Controls edit box
  showEditBox = signal(false);

  // Selected user ID
  selectedUserId = signal<number | null>(null);

  // Form values
  editName = signal("");
  editEmail = signal("");
  editCity = signal("");

  constructor() {

    effect(() => {

      const data = this.User.value();

      if (data) {
        this.Users.set(data);
      }

    });

  }

  // Open update box
  UpdateUser(user: UserInfo) {

    this.selectedUserId.set(user.id);

    this.editName.set(user.name);
    this.editEmail.set(user.email);
    this.editCity.set(user.address.city);

    this.showEditBox.set(true);
  }

  // Save updated user
  SaveUser() {

    const id = this.selectedUserId();

    if (id === null) {
      return;
    }

    this.Users.update(users =>
      users.map(user => {

        if (user.id === id) {

          return {
            ...user,

            name: this.editName(),

            email: this.editEmail(),

            address: {
              ...user.address,
              city: this.editCity()
            }

          };

        }

        return user;

      })
    );

    // Close edit box
    this.showEditBox.set(false);

    // Clear selected user
    this.selectedUserId.set(null);
  }

  // Close update box
  CancelUpdate() {

    this.showEditBox.set(false);

    this.selectedUserId.set(null);
  }

  // Delete user
  DelUser(id: number) {

    this.Users.update(users =>
      users.filter(user => user.id !== id)
    );

  }

}