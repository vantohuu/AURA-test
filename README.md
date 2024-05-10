# AURA-test

 Em xin chào anh/chị.

 Các bước deploy ứng dụng
 Đầu tiên: Cần có tài khoản github
 Tạo tài khoản vercel bằng githiub của mình https://vercel.com/
 
 B1: Deploy backend : nodejs ( sử dụng vercel CLI)
 - Tạo file vercel.json
 - Có nội dung như sau
   {
    "version":2,
    "builds":[
        {
            "src":"*.js",
            "use":"@vercel/node"
        }
    ],
    "routes":[
        {
            "src":"/(.*)",
            "dest":"/"
        }
    ],
    "outputDirectory": "/public"
}
- install thvư iện vercel : npm i -g vercel@latest
- Dùng lệnh vercel để bắt đầu thực hiện các công việc cấu hình triển khai
  ![image](https://github.com/vantohuu/AURA-test/assets/82772386/74654719-e847-4391-802a-0058d86b252e)
- Chờ một vài phút là ứng dụng đã đẫ triển khai trên vercel
  
B2: Deploy frontend  ( sử dụng giao diện của vercel)

- Sau khi deploy xong thì chúng ta có đường dẫn của một web service nhỏ chúng ta vừa triển khai
- Cấu hình đường dẫn đó cho biến môi trường là host chúng ta gọi api
  NEXT_PUBLIC_BE_HOST=https://aura-test-backend.vercel.app
  ![image](https://github.com/vantohuu/AURA-test/assets/82772386/7d424dd9-62fe-4755-9188-768e1298acb0)

- Thực hiện việc deploy fontend trên giao diện của vercel
- Vào trang chủ của vercel ta tiến hàng tạo mới một project
![image](https://github.com/vantohuu/AURA-test/assets/82772386/60c421fb-2b6d-4c6c-adad-694bd834422b)
- Tiến hành import project đã up trên git
  ![image](https://github.com/vantohuu/AURA-test/assets/82772386/404f7ef6-00ee-408d-8928-2fb4a2af9047)
- Cấu hình các chức năng, nếu có gì hết thì nhấn deploy luôn
  ![image](https://github.com/vantohuu/AURA-test/assets/82772386/c3dab4df-ebe4-4765-b35b-f74443d5ef70)
- Nếu project chưa build sẵn thì chờ khoảng 30p nến vercel build và deploy

B3: Kết quả 
- Trang admin (https://front-aura-test.vercel.app/admin)
  ![image](https://github.com/vantohuu/AURA-test/assets/82772386/7aefa02b-7fe2-4cc0-8a91-f5edc5e2a77f)
- Trang chủ (https://front-aura-test.vercel.app/)
  ![image](https://github.com/vantohuu/AURA-test/assets/82772386/9976dfd8-e957-4c12-a90c-5ad3eb6394a1)


  






  


