export default class UserModel {
    constructor(data = {}) {
      this.firstname = data.firstname,
      this.lastname = data.lastname,
      this.birthday = data.birthday,
      this.description = data.description,
      this.image = data.image,
      this.comments = data.comments
    }
}
