Readme

FU OHAYO
📌 Introduction
The "FU OHAYO" project is a personalized Japanese learning platform designed for FPT students and independent learners. It provides a learning roadmap from JLPT N5 to N1, integrating vocabulary, grammar, reading, listening, and speaking skills with artificial intelligence. The system also offers a comprehensive admin panel and progress tracking. In addition, parents can monitor learning performance and handle payments on behalf of students.

🚀 Main Features

🔑 Login / Register
Users can create accounts, log in, and be redirected based on their roles (VIP, Normal, Admin).

📚 Personalized Learning

Choose JLPT level, favorite topics, and generate a personalized learning roadmap.

Learn vocabulary, grammar, and practice reading/listening with daily updated content.

🧠 Flashcard & AI-based Quiz from My List

Review vocabulary with flashcards.

Generate multiple-choice quizzes using AI from personal vocabulary list (My List). The system automatically creates practice questions to reinforce and test your memory.

🎙️ Speaking Practice with AI

Record your voice and receive pronunciation feedback (accuracy, fluency, completeness) via Azure Speech API.

VIP users can practice conversation with AI via voice or text.

📈 Learning Progress Tracking

View stats on learned vocabulary, completed exercises, and daily streaks.

Receive daily study reminders.

👪 Parent Features

Payment: Parents can upgrade to VIP accounts via VNPay.

Progress Monitoring: View child's study time, test results, and program completion rate.

🛠️ Admin Panel

Manage users (search, edit, assign roles, upgrade VIP, deactivate).

Manage learning content: vocabulary, grammar, listening/speaking/reading lessons.

Manage exams and analyze user learning results.

Send system-wide notifications and view activity logs for transparency and maintenance.

🛠 Technology Stack

💻 Backend: Spring Boot, Spring Security, JPA, MySQL, RESTful API, JWT
🎨 Frontend: ReactJS, TailwindCSS, Axios
🔍 Others: Azure Speech API (pronunciation scoring), Gemini AI (chatbot & quiz generation), VNPay (payment), React Hook Form, Toastify

I. Client

1 Login & Register Page
![image](https://github.com/user-attachments/assets/e9d5ddc3-8cc3-4278-895c-f24d4c6cff32)

![image](https://github.com/user-attachments/assets/61f84a5a-5675-42ed-a9f2-d784ab83285e)

![image](https://github.com/user-attachments/assets/f2fe30fa-dfe5-43db-ac57-b908e85c2d9f)

2 Home & Parent Page
![image](https://github.com/user-attachments/assets/32ddcd46-e5e5-4c58-bb80-731616c5bf59)

<img width="1484" alt="image" src="https://github.com/user-attachments/assets/72f93751-3de9-4322-9c03-cb131c86a357" />

![image](https://github.com/user-attachments/assets/09bca830-3a39-4106-9246-3c6f2aacbeb9)

<img width="1476" alt="Screenshot 2025-07-09 at 10 40 38" src="https://github.com/user-attachments/assets/75b9518e-6afb-488a-8a63-00683354487a" />

<img width="1494" alt="Screenshot 2025-07-09 at 10 41 57" src="https://github.com/user-attachments/assets/99f3c05b-4064-4bb1-9b4f-62be2b2f48dc" />

<img width="1510" alt="Screenshot 2025-07-09 at 10 42 15" src="https://github.com/user-attachments/assets/40c7870a-7c3b-4ba9-a210-f02c81785737" />

3 Course Learning Pages

![Screenshot 2025-07-09 at 10 54 18](https://github.com/user-attachments/assets/5ddaa919-c1d8-4ff8-9cee-4e56881a620e)

<img width="1512" alt="Screenshot 2025-07-09 at 11 16 55" src="https://github.com/user-attachments/assets/2ed2db24-6e18-40b3-990a-a05030e8c0a5" />

<img width="1512" alt="Screenshot 2025-07-09 at 11 20 58" src="https://github.com/user-attachments/assets/339abd1a-c282-4333-88e0-56e149f80917" />

<img width="1512" alt="Screenshot 2025-07-09 at 11 21 20" src="https://github.com/user-attachments/assets/b293ce8f-cec3-45ee-ad05-4e4d7a7f8c10" />

![Screenshot 2025-07-09 at 11 21 31](https://github.com/user-attachments/assets/d611377a-85ce-47d4-960d-8f7d636a188e)

<img width="1512" alt="Screenshot 2025-07-09 at 11 21 46" src="https://github.com/user-attachments/assets/a88636d3-8054-4c4a-80b4-08bc4f5543da" />

<img width="1512" alt="Screenshot 2025-07-09 at 11 21 52" src="https://github.com/user-attachments/assets/f8e97ce0-99cc-4270-87d4-cf8edd176067" />

<img width="1512" alt="Screenshot 2025-07-09 at 11 22 05" src="https://github.com/user-attachments/assets/3b8a55ae-c8f8-4f12-98f2-3b63ca0c9b44" />

<img width="1512" alt="Screenshot 2025-07-09 at 11 22 31" src="https://github.com/user-attachments/assets/b556627d-29c3-48d9-83a4-b3cdd5f294fb" />

4 My list

<img width="1180" alt="Screenshot 2025-07-09 at 11 50 00 (2)" src="https://github.com/user-attachments/assets/20903f2d-58a2-4fe9-ba85-8fe31139984b" />

<img width="1512" alt="Screenshot 2025-07-09 at 12 01 52" src="https://github.com/user-attachments/assets/06c6176f-1194-49c0-8e14-a27a68f2d644" />

<img width="1512" alt="Screenshot 2025-07-09 at 12 02 41" src="https://github.com/user-attachments/assets/4771f8e5-3308-4c48-9ddb-31c98f0906a1" />

<img width="1512" alt="Screenshot 2025-07-09 at 12 02 54" src="https://github.com/user-attachments/assets/5746e16d-48f7-4dc5-a91e-90321670c7ff" />

5 Practice Reading

<img width="1512" alt="Screenshot 2025-07-09 at 12 42 50" src="https://github.com/user-attachments/assets/8591b3db-7fee-4de0-8ccf-af0ab01b950f" />

<img width="1512" alt="Screenshot 2025-07-09 at 12 43 10" src="https://github.com/user-attachments/assets/794f839d-d6fd-495e-90b6-6b0430fdf811" />

6 Practice listening 

<img width="1512" alt="Screenshot 2025-07-09 at 13 01 07" src="https://github.com/user-attachments/assets/f876bc42-99da-4cb0-b3a6-b1dcd40d9723" />

<img width="1512" alt="Screenshot 2025-07-09 at 13 01 18" src="https://github.com/user-attachments/assets/ba200ee3-84ed-4b7d-94c4-c4bb8865c429" />

<img width="1512" alt="Screenshot 2025-07-09 at 13 01 57" src="https://github.com/user-attachments/assets/21f908d7-bf41-462c-8fb7-d0945605f026" />

7 Practice speaking

<img width="1512" alt="Screenshot 2025-07-09 at 13 05 00" src="https://github.com/user-attachments/assets/e50635f8-641f-4e92-b3ce-6fb97207b987" />

<img width="1512" height="982" alt="Screenshot 2025-07-21 at 14 28 54 (2)" src="https://github.com/user-attachments/assets/0d9977d9-17ec-493d-aa53-891d8129ed1e" />

8 Profile

<img width="1512" alt="Screenshot 2025-07-09 at 13 14 04" src="https://github.com/user-attachments/assets/d80b439a-eea9-49e2-85df-145faa631274" />

<img width="1512" alt="Screenshot 2025-07-09 at 13 14 15" src="https://github.com/user-attachments/assets/fc358be6-8e39-410a-a8ba-b56ccb24f634" />

<img width="1512" alt="Screenshot 2025-07-09 at 13 14 22" src="https://github.com/user-attachments/assets/fed29bc3-8631-4252-9fc3-743b9faa3c1d" />

9 Update account

<img width="1512" alt="Screenshot 2025-07-09 at 13 09 12" src="https://github.com/user-attachments/assets/50b42562-481f-4756-80c5-c312b2e6089f" />

<img width="1180" alt="Screenshot 2025-07-09 at 13 17 30 (2)" src="https://github.com/user-attachments/assets/7da031fe-c2ee-4181-b8bd-5f93b99f886a" />

<img width="605" height="442" alt="Screenshot 2025-07-21 at 14 17 21" src="https://github.com/user-attachments/assets/45eda2fe-d57f-4aef-a1e3-c34c6b62c1da" />

II. Admin

1 Dashboard

![image](https://github.com/user-attachments/assets/3b016c6f-54ac-48f0-8953-728d5f7fa11d)

2 User manager

![image](https://github.com/user-attachments/assets/9e7b2b5c-8b51-4695-b8f2-45fb9aa687d6)

3 Log manager

![image](https://github.com/user-attachments/assets/addac9e2-a1f1-4f60-9844-71c4f69c14ff)

4 Manage Learning (Content manager & Staff)

4.1 Manage Subject

<img width="1512" alt="Screenshot 2025-07-09 at 13 42 38" src="https://github.com/user-attachments/assets/7dad7821-e03c-418b-9b10-bcaa9e263808" />

<img width="1512" alt="Screenshot 2025-07-09 at 13 46 09" src="https://github.com/user-attachments/assets/fe7e4db0-69bb-4f07-b99e-e0dfa10a712b" />

4.2 Manage Lesson

<img width="1512" alt="Screenshot 2025-07-09 at 13 46 21" src="https://github.com/user-attachments/assets/454046de-90fd-43da-a5f9-9126e3de8df6" />

<img width="1512" alt="Screenshot 2025-07-09 at 13 46 31" src="https://github.com/user-attachments/assets/3a95ea80-6e10-47c9-a4bd-3e43f7bc03db" />

4.3 Manage Content in Lesson

<img width="1512" alt="Screenshot 2025-07-09 at 13 46 39" src="https://github.com/user-attachments/assets/68c40710-7530-4a27-a745-9685e2fd7828" />

<img width="1512" alt="Screenshot 2025-07-09 at 13 46 47" src="https://github.com/user-attachments/assets/32fe48da-bf55-4fd9-86e6-5a3b1e25a5c3" />

<img width="1512" alt="Screenshot 2025-07-09 at 13 46 54" src="https://github.com/user-attachments/assets/7c2a3ea0-9cf9-4cec-ad4b-f58a9395606a" />

<img width="1512" height="982" alt="Screenshot 2025-07-21 at 14 31 44 (2)" src="https://github.com/user-attachments/assets/b57a191f-88df-45e4-9b56-8768581b4851" />


5 Manage Content practice (Content manager & Staff))

5.1 Manage content listening 

<img width="1512" alt="Screenshot 2025-07-09 at 20 25 08" src="https://github.com/user-attachments/assets/1aecd07d-a951-4ad9-a99c-5362b75b8d24" />

<img width="1512" alt="Screenshot 2025-07-09 at 20 25 19" src="https://github.com/user-attachments/assets/5d1462af-e8f8-4066-beab-7b4e35c7f5b9" />

<img width="1512" height="982" alt="Screenshot 2025-07-21 at 14 24 23 (2)" src="https://github.com/user-attachments/assets/e67e737d-af53-473f-a6e7-a398fa1c1916" />

5.2 Manage content speaking

<img width="1512" alt="Screenshot 2025-07-09 at 20 25 58" src="https://github.com/user-attachments/assets/629ecfad-fc24-4df5-876f-85abf336b0e8" />

<img width="1512" alt="Screenshot 2025-07-09 at 20 26 05" src="https://github.com/user-attachments/assets/42bf8176-ee47-4bf0-b09e-2cf591b98a26" />

<img width="1512" height="982" alt="Screenshot 2025-07-21 at 14 24 17 (2)" src="https://github.com/user-attachments/assets/69dd8c5c-6c34-46b9-bf27-8db864d58a67" />

5.3 Manage content reading

<img width="1512" alt="Screenshot 2025-07-09 at 20 26 27" src="https://github.com/user-attachments/assets/9c638f7c-1d58-4549-b95d-c160294b707c" />

<img width="1512" alt="Screenshot 2025-07-09 at 20 26 34" src="https://github.com/user-attachments/assets/77832108-c2d7-4150-a652-620599e85a6b" />

<img width="1512" alt="Screenshot 2025-07-09 at 20 26 45" src="https://github.com/user-attachments/assets/74a327ff-3f74-429b-872f-5c9b9c58a2e3" />

<img width="1512" alt="Screenshot 2025-07-09 at 20 26 58" src="https://github.com/user-attachments/assets/f543d9ce-e252-48b5-83c1-2617f2396e0f" />

6 Content Bank

6.1 Vocabulary bank

<img width="1512" alt="Screenshot 2025-07-09 at 20 32 54" src="https://github.com/user-attachments/assets/af149c54-ffdc-4489-8c40-5ee782c5f3a3" />

6.2 Grammar bank

<img width="1512" alt="Screenshot 2025-07-09 at 20 33 00" src="https://github.com/user-attachments/assets/7bd52bb7-7b60-4bdf-9fc0-e84b64b444ae" />

6.3 Question bank

<img width="1512" height="982" alt="Screenshot 2025-07-21 at 14 24 38 (2)" src="https://github.com/user-attachments/assets/c80d062c-1e55-4338-9c84-0c7aea1f9c6e" />

<img width="1512" height="982" alt="Screenshot 2025-07-21 at 14 24 40 (2)" src="https://github.com/user-attachments/assets/f320a306-c2c7-434e-8027-1722eb61e9af" />

6.4 Dialogue bank

<img width="1512" height="982" alt="Screenshot 2025-07-21 at 14 24 47 (2)" src="https://github.com/user-attachments/assets/86d982f0-e11e-47ba-8dee-44f9a4d6e05a" />

7 Manage Admin

<img width="1512" height="982" alt="Screenshot 2025-07-21 at 14 28 23 (2)" src="https://github.com/user-attachments/assets/a78fc287-512a-4872-a331-39840aadfc2d" />
