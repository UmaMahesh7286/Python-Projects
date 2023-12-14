
export class Login{
  constructor(
    public email:string,
    public password:string,
  ){}
}
export class User{
   public check :boolean=true
  public user_id:number=0
  constructor(
    public first_name:string,
    public last_name:string,
    public email:string,
    public password:string,
    public phone_number:number,
    public role:string,
    public status:string,
  ){}
}
  export class Reset{
    constructor(
      public oldpassword:string,
      public newpassword:string,
      ){}
  }
  export class otp{
    constructor(
      public message:string,
      public Secretkey:number,
      ){}
  }



