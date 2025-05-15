import NextAuth from "next-auth";
import { authOptions } from '@/app/api/auth/authOptions';

console.log("First"); 
const handler = NextAuth(authOptions);
console.log ("Second"); 

export { handler as GET, handler as POST };
