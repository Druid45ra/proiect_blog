export class User {
  id?: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio?: string;
  profilePicture?: string;

  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    bio?: string,
    profilePicture?: string,
    id?: number
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.bio = bio;
    this.profilePicture = profilePicture;
  }
}
