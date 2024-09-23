import React,{ useEffect } from 'react'
import { useRouter } from 'next/router';


const AuthGuard = ({ children }) => {
    const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("current_user")) : null;
    const router = useRouter();


    useEffect(() => {
        const initialize = async () => {
          if (!router.isReady) {
            // Wait for the router to be ready
            return;
          }
    
          if (!user) {
            // Redirect unauthenticated users to the login page
            await router.replace("/");
          }
        };
    
        initialize();
      }, [user, router]);

  return (
    <div>{children}</div>
  )
}


export default AuthGuard