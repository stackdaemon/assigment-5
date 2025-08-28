# Q.1 > What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

*** Ans Number #1:
- **getElementById()** ==> কেবলমাত্র নির্দিষ্ট **id** অনুযায়ী একটা মাত্র element আনে । যদি উপাদানটি বিদ্যমান না থাকে ,তবে **null** প্রদান করে। আর id সবসময় **unique** হয় ।
-  **getElementsByClassName ()** ==> এটি নির্দিষ্ট class অনুযায়ী এক বা একাধিক element আনে। এটা একটা **HTMLCollection** দেয়, যেটা array-এর মতো কিন্তু পুরোপুরি array না।
- **querySelector()** ==> CSS selector ব্যবহার করে প্রথম যে element মিলে যায়, শুধু সেটাই আনে।
- **querySelectorAll ()** ==> এটি querySelector মতোই তবে CSS selector ব্যবহার করে যত element মিলে যায়, সব আনে এবং **NodeList** আকারে দেয়।

# Q.2 >How do you create and insert a new element into the DOM?

*** Ans Number #2:
- নতুন element তৈরি জন্য **document.createElement("tagName")** ব্যবহার করা হয়। 
   - const newCreatDiv = document.createElement("div");
- কনটেন্ট যোগ করাতে  **innerText, innerHTML বা appendChild()** দিয়ে লেখা/child element বসানো যায়।
  - newCreatDiv.innerText = "Hello World!";

- DOM এ ইনসার্ট করাত → যেকোনো parent element এর মধ্যে appendChild() বা append() দিয়ে বসানো হয়।
   - document.body.appendChild(newCreatDiv);

# Q.3 > What is Event Bubbling and how does it work?

*** Ans Number #3:
- **Event Bubbling** মানে হলো event ভেতরের element থেকে বাইরের element-এর দিকে propagate করা।
- আমরা যখন  কোনো child element-এ event (যেমন click)  দিয়, তখন সেটি প্রথমে ওই child element-এ কাজ করে।তারপর event টি bubble হয়ে তার parent element এ পৌঁছায়।parent থেকে আবার তার parent (grandparent)-এ যায়। এভাবে একে একে সব parent element হয়ে document পর্যন্ত পৌঁছায়।

# Q.4 >What is Event Delegation in JavaScript? Why is it useful?
*** Ans Number #4:
- **Event Delegation** মানে হলো parent element-এর মাধ্যমে child element-গুলোর event handle করা। এটা performance-efficient, reusable এবং dynamic elements-এর জন্য খুব দরকারি।
- আমরা যখন parent element-এ একটা event listener attach করি। তখন কোনো child element-এ event ঘটে, সেই event bubble হয়ে parent এ আসে। parent element-এর ভিতরে দেখে নেয় কোন child element থেকে event এসেছে (event.target দিয়ে চেক করা হয়)। তারপর সেই child element অনুযায়ী action নেওয়া হয়।


 # Q.5 > What is the difference between preventDefault() and stopPropagation() methods?

 *** Ans Number #5:
  - **preventDefault()** হলো এমন একটি মেথড যেটা event-এর default behavior (ব্রাউজার যেটা স্বাভাবিকভাবে করে) সেটাকে বন্ধ করে দেয়।
     - যেমন: form submit হওয়া, link এ ক্লিক করলে redirect হওয়া ইত্যাদি। 
- **stopPropagation()** হলো এমন একটি মেথড যেটা event-এর propagation (bubbling/capturing) বন্ধ করে দেয়, যাতে event parent বা অন্য কোনো ancestor element এ না পৌঁছায়।
    - উদাহরণ: child element click হলে parent element-এর event trigger হবে না।
   


