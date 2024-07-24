export interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

export const explanation:string = "ข้อสอบวิเคราะห์ผู้เรียน รายวิชา คอมพิวเตอร์ ข้อสอบเป็นแบบปรนัยชนิด 4 ตัวเลือก จำนวน 20 ข้อ 20 คะแนน ใช้เวลา 1 ชั่วโมง"
export const questions: Question[] = [
  {
    question: "ระบบปฏิบัติการ Windows 10 มีกี่เวอร์ชันหลัก?",
    answers: ["2", "3", "4", "5"],
    correctAnswer: "4",
  },
  {
    question: "โปรแกรมที่ใช้ในการจัดการไฟล์คืออะไร?",
    answers: ["Word Processor", "File Manager", "Spreadsheet", "Web Browser"],
    correctAnswer: "File Manager",
  },
  {
    question: "ความหมายของคำว่า 'CPU' คืออะไร?",
    answers: [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Unit",
      "Computer Processing Unit",
    ],
    correctAnswer: "Central Processing Unit",
  },
  {
    question: "ระบบปฏิบัติการที่ถูกพัฒนามาโดยบริษัท Apple คืออะไร?",
    answers: ["Windows", "Linux", "macOS", "Android"],
    correctAnswer: "macOS",
  },
  {
    question: "คำย่อ 'RAM' หมายถึงอะไร?",
    answers: [
      "Random Access Memory",
      "Read Access Memory",
      "Readable Access Memory",
      "Random Application Memory",
    ],
    correctAnswer: "Random Access Memory",
  },
  {
    question: "คำย่อ 'USB' หมายถึงอะไร?",
    answers: [
      "Universal Serial Bus",
      "Universal Storage Bus",
      "Unified Serial Bus",
      "United Serial Bus",
    ],
    correctAnswer: "Universal Serial Bus",
  },
  {
    question: "การประมวลผลข้อมูลในหน่วยความจำที่ชั่วคราวทำโดยหน่วยอะไร?",
    answers: ["CPU", "RAM", "Hard Drive", "Motherboard"],
    correctAnswer: "RAM",
  },
  {
    question: "สิ่งที่ใช้เชื่อมต่อคอมพิวเตอร์กับอินเทอร์เน็ตคืออะไร?",
    answers: ["Router", "Printer", "Keyboard", "Monitor"],
    correctAnswer: "Router",
  },
  {
    question: "โปรแกรมที่ใช้ในการเขียนเอกสารคืออะไร?",
    answers: ["Web Browser", "Word Processor", "Spreadsheet", "File Manager"],
    correctAnswer: "Word Processor",
  },
  {
    question: "คำย่อ 'URL' หมายถึงอะไร?",
    answers: [
      "Uniform Resource Locator",
      "Uniform Resource Link",
      "Uniform Resource Language",
      "Universal Resource Locator",
    ],
    correctAnswer: "Uniform Resource Locator",
  },
  {
    question: "การทำงานของ 'Firewall' คืออะไร?",
    answers: [
      "การป้องกันไวรัส",
      "การควบคุมการเข้าถึงเครือข่าย",
      "การจัดการไฟล์",
      "การประมวลผลข้อมูล",
    ],
    correctAnswer: "การควบคุมการเข้าถึงเครือข่าย",
  },
  {
    question: "การคลิกขวาบนเมาส์ทำให้เกิดอะไร?",
    answers: ["เปิดเมนูบริบท", "เลือกข้อความ", "เปิดโปรแกรม", "ปิดหน้าต่าง"],
    correctAnswer: "เปิดเมนูบริบท",
  },
  {
    question: "อุปกรณ์ที่ใช้ในการพิมพ์เอกสารคืออะไร?",
    answers: ["Scanner", "Printer", "Monitor", "Speaker"],
    correctAnswer: "Printer",
  },
  {
    question:
      "ประเภทของการจัดเก็บข้อมูลที่เป็นตัวเลือกที่มีความจุสูงที่สุดคืออะไร?",
    answers: ["Hard Drive", "Flash Drive", "CD-ROM", "RAM"],
    correctAnswer: "Hard Drive",
  },
  {
    question: "คำย่อ 'HTML' หมายถึงอะไร?",
    answers: [
      "HyperText Markup Language",
      "HyperTransfer Markup Language",
      "HighText Markup Language",
      "HyperText Main Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    question: "โปรแกรมที่ใช้ในการท่องเว็บคืออะไร?",
    answers: ["Web Browser", "Email Client", "File Manager", "Word Processor"],
    correctAnswer: "Web Browser",
  },
  {
    question:
      "อุปกรณ์ที่ใช้ในการรับส่งข้อมูลระหว่างคอมพิวเตอร์กับเครือข่ายคืออะไร?",
    answers: ["Modem", "Printer", "Speaker", "Monitor"],
    correctAnswer: "Modem",
  },
  {
    question: "คำย่อ 'GPS' หมายถึงอะไร?",
    answers: [
      "Global Positioning System",
      "Global Programming System",
      "General Positioning System",
      "Global Process System",
    ],
    correctAnswer: "Global Positioning System",
  },
  {
    question: "ใน Windows 10 ฟังก์ชัน 'Task Manager' ใช้สำหรับอะไร?",
    answers: [
      "จัดการโปรเซสและแอปพลิเคชันที่ทำงาน",
      "จัดการไฟล์",
      "ค้นหาไฟล์",
      "ดูข้อมูลเครือข่าย",
    ],
    correctAnswer: "จัดการโปรเซสและแอปพลิเคชันที่ทำงาน",
  },
  {
    question: "เครื่องมือที่ใช้ในการติดตั้งโปรแกรมใหม่ในระบบปฏิบัติการคืออะไร?",
    answers: ["Installer", "Uninstaller", "Updater", "File Manager"],
    correctAnswer: "Installer",
  },
  {
    question: "การจัดเก็บข้อมูลบนคลาวด์มีข้อดีอะไรบ้าง?",
    answers: [
      "การเข้าถึงข้อมูลจากที่ใดก็ได้",
      "ความปลอดภัยที่สูงกว่า",
      "การใช้งานที่ง่าย",
      "ทั้งหมดที่กล่าวมาข้างต้น",
    ],
    correctAnswer: "ทั้งหมดที่กล่าวมาข้างต้น",
  },
  {
    question: "คำย่อ 'Wi-Fi' หมายถึงอะไร?",
    answers: [
      "Wireless Fidelity",
      "Wireless Function",
      "Web Fidelity",
      "Wide Fidelity",
    ],
    correctAnswer: "Wireless Fidelity",
  },
  {
    question: "การบันทึกข้อมูลเป็นไฟล์ 'PDF' มีข้อดีอะไร?",
    answers: [
      "ความเข้ากันได้สูง",
      "ขนาดไฟล์เล็ก",
      "เปิดได้เฉพาะในโปรแกรมเฉพาะ",
      "แก้ไขได้ง่าย",
    ],
    correctAnswer: "ความเข้ากันได้สูง",
  },
  {
    question: "คำย่อ 'VPN' หมายถึงอะไร?",
    answers: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Verified Private Network",
      "Virtual Protected Network",
    ],
    correctAnswer: "Virtual Private Network",
  },
  {
    question: "ระบบปฏิบัติการที่ใช้ในโทรศัพท์มือถือ Android คืออะไร?",
    answers: ["iOS", "Windows Phone", "Android", "Symbian"],
    correctAnswer: "Android",
  },
  {
    question: "คำย่อ 'SSD' หมายถึงอะไร?",
    answers: [
      "Solid State Drive",
      "Solid Storage Drive",
      "System Storage Device",
      "Solid State Disk",
    ],
    correctAnswer: "Solid State Drive",
  },
  {
    question: "โปรแกรมที่ใช้ในการจัดการข้อมูลตารางคืออะไร?",
    answers: ["Word Processor", "Spreadsheet", "Database", "Web Browser"],
    correctAnswer: "Spreadsheet",
  },
  {
    question:
      "ในการใช้งานคอมพิวเตอร์ การบันทึกไฟล์ในรูปแบบ 'DOCX' คือการบันทึกเอกสารในโปรแกรมใด?",
    answers: ["Microsoft Word", "Microsoft Excel", "Adobe Reader", "Notepad"],
    correctAnswer: "Microsoft Word",
  },
  {
    question: "คำย่อ 'HTTP' หมายถึงอะไร?",
    answers: [
      "HyperText Transfer Protocol",
      "HyperText Transport Protocol",
      "High Transfer Text Protocol",
      "Hyper Transfer Text Protocol",
    ],
    correctAnswer: "HyperText Transfer Protocol",
  },
  {
    question: "คำย่อ 'URL' หมายถึงอะไร?",
    answers: [
      "Uniform Resource Locator",
      "Uniform Resource Link",
      "Universal Resource Locator",
      "Uniform Retrieval Link",
    ],
    correctAnswer: "Uniform Resource Locator",
  },
  {
    question: "เครื่องมือที่ใช้ในการป้องกันไวรัสในคอมพิวเตอร์เรียกว่าอะไร?",
    answers: ["Antivirus", "Firewall", "Malware", "Backup"],
    correctAnswer: "Antivirus",
  },
  {
    question: "ในการใช้งานคอมพิวเตอร์ คำว่า 'Encryption' หมายถึงอะไร?",
    answers: [
      "การเข้ารหัสข้อมูล",
      "การสำรองข้อมูล",
      "การป้องกันไวรัส",
      "การติดตั้งโปรแกรม",
    ],
    correctAnswer: "การเข้ารหัสข้อมูล",
  },
  {
    question: "คำย่อ 'SQL' หมายถึงอะไร?",
    answers: [
      "Structured Query Language",
      "Structured Quick Language",
      "Standard Query Language",
      "Standard Quick Language",
    ],
    correctAnswer: "Structured Query Language",
  },
  {
    question: "การตั้งค่าเริ่มต้นของ 'Screen Resolution' หมายถึงอะไร?",
    answers: [
      "ความละเอียดของหน้าจอ",
      "ความสว่างของหน้าจอ",
      "ขนาดหน้าจอ",
      "ความเร็วของหน้าจอ",
    ],
    correctAnswer: "ความละเอียดของหน้าจอ",
  },
  {
    question: "โปรแกรมที่ช่วยในการออกแบบกราฟิกคืออะไร?",
    answers: ["Photoshop", "Word Processor", "Spreadsheet", "Database"],
    correctAnswer: "Photoshop",
  },
  {
    question: "คำย่อ 'LAN' หมายถึงอะไร?",
    answers: [
      "Local Area Network",
      "Long Area Network",
      "Large Area Network",
      "Local Access Network",
    ],
    correctAnswer: "Local Area Network",
  },
  {
    question: "คำว่า 'Browser' หมายถึงอะไร?",
    answers: [
      "โปรแกรมท่องเว็บ",
      "โปรแกรมจัดการไฟล์",
      "โปรแกรมพิมพ์เอกสาร",
      "โปรแกรมอีเมล",
    ],
    correctAnswer: "โปรแกรมท่องเว็บ",
  },
  {
    question: "การทำงานของ 'Backup' คืออะไร?",
    answers: [
      "การสำรองข้อมูล",
      "การแก้ไขข้อมูล",
      "การลบข้อมูล",
      "การจัดการข้อมูล",
    ],
    correctAnswer: "การสำรองข้อมูล",
  },
];
