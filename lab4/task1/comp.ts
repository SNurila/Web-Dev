@Component({
  selector: 'profile-photo',
})
export class ProfilePhoto {}
@Component({
  imports: [ProfilePhoto],
  template: `<profile-photo />`,
})
export class UserProfile {}