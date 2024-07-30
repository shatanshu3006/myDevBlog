import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";

// here our library is going to handle the GET and POST methods for us we dont really need to implement them

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };