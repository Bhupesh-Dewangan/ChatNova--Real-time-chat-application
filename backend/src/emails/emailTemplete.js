export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to ChatNova</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #334155;">
  <!-- Header with gradient background -->
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);">
    
    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; position: relative;">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'); opacity: 0.1; background-size: cover;"></div>
      <div style="position: relative; z-index: 2;">
        <div style="width: 90px; height: 90px; background-color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);">
          <svg style="width: 48px; height: 48px; color: #667eea;" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </div>
        <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 700; font-family: 'Poppins', sans-serif;">Welcome to ChatNova!</h1>
        <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0; font-size: 18px;">Stay connected with the world</p>
      </div>
    </div>
    
    <!-- Main Content -->
    <div style="padding: 40px 35px;">
      <p style="font-size: 20px; color: #4f46e5; margin-bottom: 10px;"><strong>Hello ${name},</strong></p>
      <p style="font-size: 16px; margin-bottom: 25px; color: #475569;">
        Welcome to ChatNova! We're thrilled to have you join our community of millions who connect daily. 
        Our platform makes it easy to stay in touch with friends, family, and colleagues wherever they are.
      </p>
      
      <!-- Features Section -->
      <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin: 30px 0; border: 1px solid #e2e8f0;">
        <h3 style="font-family: 'Poppins', sans-serif; color: #4f46e5; margin-top: 0; font-size: 20px; font-weight: 600; text-align: center;">
          <svg style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          Get Started With ChatNova
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="text-align: center; padding: 15px; background-color: white; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);">
            <div style="width: 50px; height: 50px; background: linear-gradient(to right, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px;">
              <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 style="margin: 0 0 8px; font-size: 16px; color: #1e293b;">Complete Your Profile</h4>
            <p style="margin: 0; font-size: 14px; color: #64748b;">Add a profile picture and tell others about yourself</p>
          </div>
          
          <div style="text-align: center; padding: 15px; background-color: white; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);">
            <div style="width: 50px; height: 50px; background: linear-gradient(to right, #f093fb, #f5576c); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px;">
              <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 4.25V17a2.5 2.5 0 00-5 0v4.25m5 0h-5"/>
              </svg>
            </div>
            <h4 style="margin: 0 0 8px; font-size: 16px; color: #1e293b;">Connect with Friends</h4>
            <p style="margin: 0; font-size: 14px; color: #64748b;">Find and add your contacts to start chatting</p>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="text-align: center; padding: 15px; background-color: white; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);">
            <div style="width: 50px; height: 50px; background: linear-gradient(to right, #4facfe, #00f2fe); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px;">
              <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <h4 style="margin: 0 0 8px; font-size: 16px; color: #1e293b;">Start Conversations</h4>
            <p style="margin: 0; font-size: 14px; color: #64748b;">Send messages, photos, videos, and more</p>
          </div>
          
          <div style="text-align: center; padding: 15px; background-color: white; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);">
            <div style="width: 50px; height: 50px; background: linear-gradient(to right, #43e97b, #38f9d7); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px;">
              <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
              </svg>
            </div>
            <h4 style="margin: 0 0 8px; font-size: 16px; color: #1e293b;">Share Moments</h4>
            <p style="margin: 0; font-size: 14px; color: #64748b;">Express yourself with stickers, GIFs, and voice messages</p>
          </div>
        </div>
      </div>
      
      <!-- CTA Button -->
      <div style="text-align: center; margin: 35px 0;">
        <a href="${clientURL}" style="background: linear-gradient(to right, #667eea, #764ba2); color: white; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-weight: 600; font-size: 17px; display: inline-block; box-shadow: 0 6px 15px rgba(102, 126, 234, 0.3); transition: all 0.3s ease;">
          Start Messaging Now
          <svg style="width: 18px; height: 18px; vertical-align: middle; margin-left: 8px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </a>
        <p style="color: #94a3b8; font-size: 14px; margin-top: 12px;">
          Click the button above to open ChatNova in your browser
        </p>
      </div>
      
      <!-- Additional Info -->
      <div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 8px; margin-top: 30px;">
        <div style="display: flex; align-items: flex-start;">
          <div style="flex-shrink: 0; margin-right: 15px;">
            <svg style="width: 24px; height: 24px; color: #0ea5e9;" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div>
            <h4 style="margin: 0 0 8px; color: #0369a1; font-size: 17px;">Need Help?</h4>
            <p style="margin: 0; color: #475569; font-size: 15px;">
              Our support team is available 24/7 to assist you. Visit our <a href="#" style="color: #4f46e5; text-decoration: none; font-weight: 500;">Help Center</a> 
              or reply to this email if you have any questions.
            </p>
          </div>
        </div>
      </div>
      
      <p style="margin-top: 35px; padding-top: 25px; border-top: 1px solid #e2e8f0; color: #475569; font-size: 16px;">
        We're excited to see you connect with others!<br>
        <strong style="color: #4f46e5;">The ChatNova Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #1e293b; color: #cbd5e1; padding: 30px 35px; text-align: center;">
      <p style="margin: 0 0 20px; font-size: 20px; font-weight: 600; color: white; font-family: 'Poppins', sans-serif;">ChatNova</p>
      <p style="margin: 0 0 25px; font-size: 15px; max-width: 500px; margin-left: auto; margin-right: auto;">
        Connecting people across the globe with fast, secure, and reliable messaging.
      </p>
      
      <div style="margin: 25px 0;">
        <a href="#" style="display: inline-block; margin: 0 12px;">
          <svg style="width: 22px; height: 22px; color: #94a3b8;" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" style="display: inline-block; margin: 0 12px;">
          <svg style="width: 22px; height: 22px; color: #94a3b8;" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="#" style="display: inline-block; margin: 0 12px;">
          <svg style="width: 22px; height: 22px; color: #94a3b8;" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
        </a>
      </div>
      
      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #334155;">
        <p style="margin: 0 0 10px; font-size: 13px; color: #94a3b8;">
          © 2026 ChatNova. All rights reserved.
        </p>
        <p style="margin: 0; font-size: 13px;">
          <a href="#" style="color: #cbd5e1; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
          <span style="color: #475569;">•</span>
          <a href="#" style="color: #cbd5e1; text-decoration: none; margin: 0 10px;">Terms of Service</a>
          <span style="color: #475569;">•</span>
          <a href="#" style="color: #cbd5e1; text-decoration: none; margin: 0 10px;">Contact Us</a>
          <span style="color: #475569;">•</span>
          <a href="#" style="color: #cbd5e1; text-decoration: none; margin: 0 10px;">Unsubscribe</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
