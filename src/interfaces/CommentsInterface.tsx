export interface CommentsInterface {
    author_details:{
      name : string;
      username : string;
      rating : number;
      avatar_path:string;
    };
    content : string;
  }