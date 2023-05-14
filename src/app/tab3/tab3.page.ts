import { Component } from '@angular/core';

interface AccordionItem {
  title: string;
  expanded: boolean;
}

interface ListItem{
  name:String,
  designation:String,
  email:String,
  phone:String,
  domain:String,
  image:String,

}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  items :ListItem[] = [
    {
      name:"Rahul Wagle",
      designation:"Head Of Department",
      email:"drkalbande@spit.ac.in",
      phone:"+91 (22) – 26707440 ",
      domain:"MCA",
      image:"https://img.freepik.com/free-icon/boy_318-173515.jpg?w=2000"
    },
    {
    name:"Rohit Kulkarni",
    designation:"Asst. Professor",
    email:"harshil.kanakia@gmail.com",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://img.freepik.com/free-icon/user_318-344905.jpg?q=10&h=200"
  },
  {
    name:"Kiran Prajapati",
    designation:"Asst. Professor",
    email:"nikhita.mangaonkar@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"data:image/png;base64,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"
  },
  {
    name:"Nilesh Bhattacharya",
    designation:"Professor",
    email:"pooja@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7lEXNEnmGVbdOPaf-ELjHAAraJJFr2KNmx5hzboXOlujO9LgRkletT1eBIfNSghpBTw&usqp=CAU"
  },
  {
    name:"Nirmit Salvi",
    designation:"Asst. Professor",
    email:"sampat.vaidya@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-n8H3pPgnWePQb-BhwmGoeRP3CqJKgg_r0XnslNg-8UjGYUCpqKQMwDTq_O8YxTFr-f0&usqp=CAU"
  }
  ,
  {
    name:"Priya Sahani",
    designation:"Asst. Professor",
    email:"pallavi.thakur@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"data:image/jpeg;base64,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"
  }
  ,
  {
    name:"Akshaya Nayak",
    designation:"Asst. Professor",
    email:"aarti.karande@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://img.freepik.com/free-icon/girl_318-173542.jpg?q=10&h=200"
  }
  ,
  {
    name:"Nirali Thakur",
    designation:"Asst. Professor",
    email:"sonali.wankhede@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://img.freepik.com/free-icon/girl_318-173558.jpg?w=2000"
  }
  ,
  {
    name:"Sparsh Chakravarty",
    designation:"Asst. Professor",
    email:"sparsh.vyas@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://img.freepik.com/premium-vector/girl-with-braces-teeth-little-girl-portrait-circular-frame_254685-1085.jpg?w=360"
  }
  ];

}
