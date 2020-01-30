yarn start

# Backend
- เชื่อมต่อ mongo (done)
- เชื่อมต่อ Login ผ่าน facebook passport.js (done)
- ย้าย session ไปเก็บไว้ใน redis (done)
- validate ข้อมูลที่ส่งมาจาก Client express-validate (done)
- 
# Client
### Step Form React
- เช็คว่า Login (done)
- เช็คแต่ละขั้นตอนว่าสามารถส่งข้อมูลสำเร็จหรือไม่ แล้วแจ้งเตือน (done)
- form step react
    - step 0 รายละเอียดเอกสาร ยังไม่ได้เพิ่ม
    - step1 (ข้อมูลทั่วไป) วันเกิดยังย้อนกลับมาแล้วยังไม่เก็บค่า
    - step2 (การศึกษา) (done)
    - step3 (สิ่งที่แพ้) ยังไม่ได้แก้อุบัติเหตุในรอบ 6 เดือน
    - step4 (ที่อยู่) dropdown จังหวัด
    - step5 (ความสนใจ) (done)
    - step6 (ความถนัด) (done)
    - step7 (คำถาม)  กำลังดำเนินการ
    - step8 (สถานที่) กำลังดำเนินการ
    - step9 (เสร็จสิ้น) กำลังดำเนินการ
- ตกแต่ง form