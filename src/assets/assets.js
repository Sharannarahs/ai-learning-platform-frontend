import logo from './logo.png';
import profile_icon from './profile_icon.png';
import student from './student.png';
import profile from './profile.png'
import DSA from './DSA.png';
import OS from './OS.png';
import DBMS from './DBMS.png';
import CN from './CN.png';
import OOPS from './OOPS.png';
import CNS from './CNS.png';
import WEB from './WEB.png';
import send_button2 from './send_button2.png'

const assets = {
  logo,
  profile_icon,
  student,
  profile,
  send_button2,
  coursesImages: {
    DSA,
    OS,
    DBMS,
    CN,
    OOPS,
    CNS,
    WEB,
    
  },

  dummyCourses: [
    {
      id: 1,
      name: "Data Structures and Algorithms (DSA)",
      description: "Master how to solve problems using efficient data structures and algorithms",
      image: DSA,
      content1: "Understand fundamental data structures like arrays, linked lists, stacks, and queues",
      content2: "Learn essential algorithms for searching, sorting, and problem-solving",
      content3: "Analyze and optimize the time and space complexity of your code",
      notes: [
        {name: "HTML notes", url: "/notes/SECTION 7.pdf"},
        "https://example.com/dsa-notes2.pdf"
      ],
      playlist: [
        "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
        "https://youtube.com/playlist?list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr&feature=shared",
        "https://youtu.be/tNrNLoCqzco?feature=shared",
        "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&feature=shared"
        
      ]
    },
    {
      id: 2,
      name: "Web Development Fundamentals",
      description: "Build and style websites using HTML, CSS, and JavaScript with ease",
      image: WEB,
      content1: "Learn to structure web pages using HTML for content and semantics",
      content2: "Style and design beautiful layouts with CSS and responsive techniques",
      content3: "Add interactivity and dynamic behavior using JavaScript basics",
      notes: [
        {name: "HTML notes", url: "/notes/SECTION 7.pdf"},
        {name: "CSS notes", url: "/notes/SECTION 7.pdf"},
        {name: "JS notes", url: "/notes/SECTION 7.pdf"},
      ],
      playlist: [
        "https://youtu.be/HD13eq_Pmp8?feature=shared",
        "https://youtu.be/wRNinF7YQqQ?feature=shared",
        "https://youtu.be/lfmg-EJ8gm4?feature=shared"

      ]
    },
    
    {
      id: 3,
      name: "Database Management Systems (DBMS)",
      description: "Understand databases and their management",
      image: DBMS,
      content1: "Understand relational databases and SQL for storing and retrieving data",
      content2: "Learn about normalization, indexing, transactions, and concurrency control",
      content3: "Explore database design, ER models, and NoSQL basics",
      notes: [
        "https://example.com/dbms-notes1.pdf",
        "https://example.com/dbms-notes2.pdf"
      ],
      playlist: [
        "https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&feature=shared",
        "https://youtu.be/dl00fOOYLOM?feature=shared",
        "https://youtu.be/fG8c-huFt70?feature=shared",
        "https://youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX&feature=shared"
      ]
    },
    {
      id: 4,
      name: "Computer Networks (CN)",
      description: "Understand how computers communicate over networks seamlessly",
      image: CN,
      content1: "Grasp how data is transmitted across networks using protocols and layers",
      content2: "Learn about IP addressing, routing, switching, and the OSI/TCP-IP models",
      content3: "Understand network security, wireless networks, and modern technologies",
      notes: [
        "https://example.com/cn-notes1.pdf",
        "https://example.com/cn-notes2.pdf"
      ],
      playlist: [
        "https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&feature=shared",
        "https://youtu.be/qiQR5rTSshw?feature=shared",
        "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&feature=shared"
      ]
    },
    {
      id: 5,
      name: "Operating Systems (OS)",
      description: "Explore how an OS manages hardware and runs processes efficiently",
      image: OS,
      content1: "Learn how operating systems manage hardware, memory, and processes",
      content2: "Understand concepts like scheduling, deadlocks, and synchronization",
      content3: "Explore file systems, virtual memory, and system security fundamentals",
     
      notes: [
        "https://example.com/os-notes2.pdf",
        "https://example.com/os-notes2.pdf"
      ],
      playlist: [
        "https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&feature=shared",
        "https://youtu.be/yK1uBHPdp30?feature=shared"
      ]
    },
    
    {
      id: 6,
      name: "Cryptography and Network Security (CNS)",
      description: "Learn to secure data and networks through cryptographic techniques and protocols",
      image: CNS,
      content1: "Learn about encryption techniques and cryptographic algorithms",
      content2: "Understand how to secure networks and prevent cyber attacks",
      content3: "Explore authentication, digital signatures, and secure communication protocols",
      notes: [
        "https://example.com/cns-notes1.pdf",
        "https://example.com/cns-notes2.pdf"
      ],
      playlist: [
        "https://youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII&feature=shared",
        "https://youtube.com/playlist?list=PLmAmHQ-_5ySx_dXmOwSuGGGyE8XsbYT0n&feature=shared",
        "https://youtube.com/playlist?list=PLLOxZwkBK52Ch0y2lLtfepy4Lt_SVkwo3&feature=shared",
        "https://youtu.be/s19BxFpoSd0?feature=shared"
      ]
    },
  ],
  dummyMessages: {
    dsa: [
      { sender: "Alice", text: "Hey everyone! Let’s solve some DSA problems today." },
      { sender: "Bob", text: "Sure! Which topic do we start with?" },
    ],
    ml: [
      { sender: "Carol", text: "I’m stuck on gradient descent. Anyone can explain?" },
      { sender: "Dave", text: "Check out Andrew Ng’s lecture on that — it helps!" },
    ],
    web: [
      { sender: "Eve", text: "Who’s building the landing page?" },
      { sender: "Frank", text: "I can take care of the React part." },
    ],
  },
  
};



export default assets;
